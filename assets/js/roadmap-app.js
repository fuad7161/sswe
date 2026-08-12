import { roadmap } from './data/roadmap.js';
import { auditLessons, buildLesson, getChapterGuide } from './lesson-engine.js';

const STORAGE_KEY = 'notebound-checklist-progress';
const NOTES_KEY = 'notebound-topic-notes';
const RECENT_KEY = 'notebound-recent-topics';
const curriculum = roadmap.flatMap(section => section.topics.flatMap((topic, topicIndex) =>
  topic.items.map((item, itemIndex) => ({
    section, topic, item, topicIndex, itemIndex,
    token: `${section.id}|${topicIndex}|${itemIndex}`
  }))
));
const state = {
  checked: loadProgress(),
  notes: loadJSON(NOTES_KEY, {}),
  recent: loadJSON(RECENT_KEY, []),
  open: new Set([roadmap[0].id]),
  sidebarOpen: new Set(),
  query: '',
  filter: 'all',
  selected: null
};

const els = {
  content: document.querySelector('#content'),
  sidebarNav: document.querySelector('#sidebar-nav'),
  sidebarStats: document.querySelector('#sidebar-stats'),
  mainStats: document.querySelector('#main-stats'),
  progressFill: document.querySelector('#progress-fill'),
  progressText: document.querySelector('#progress-text'),
  empty: document.querySelector('#empty-state'),
  drawer: document.querySelector('#lesson-drawer'),
  drawerContent: document.querySelector('#lesson-content'),
  backdrop: document.querySelector('#drawer-backdrop'),
  toast: document.querySelector('#copy-toast'),
  search: document.querySelector('#search'),
  resultCount: document.querySelector('#result-count')
};

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch { return fallback; }
}

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.checked));
}

function itemKey(sectionId, topicIndex, itemIndex) {
  return `${sectionId}__${topicIndex}__${itemIndex}`;
}

function counts(section = null) {
  let total = 0;
  let done = 0;
  const sections = section ? [section] : roadmap;
  for (const current of sections) current.topics.forEach((topic, ti) => topic.items.forEach((_, ii) => {
    total++;
    if (state.checked[itemKey(current.id, ti, ii)]) done++;
  }));
  return { total, done };
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function visibleItem(item, done, sectionTitle, topicTitle) {
  const haystack = `${item} ${sectionTitle} ${topicTitle}`.toLowerCase();
  const matchesSearch = !state.query || haystack.includes(state.query);
  const matchesFilter = state.filter === 'all' || (state.filter === 'done' ? done : !done);
  return matchesSearch && matchesFilter;
}

function renderSidebar() {
  els.sidebarNav.innerHTML = roadmap.map(section => {
    const { total, done } = counts(section);
    const open = state.sidebarOpen.has(section.id);
    const name = section.title.split('—').slice(1).join('—').trim();
    const topicLinks = section.topics.map((topic, ti) =>
      `<button class="nav-item" type="button" data-nav-section="${section.id}" data-nav-topic="${ti}"><span>${escapeHTML(topic.title)}</span><span class="nav-count">${topic.items.length}</span></button>`
    ).join('');
    return `<div class="level-group${open ? ' open' : ''}">
      <button class="level-btn" type="button" data-sidebar-section="${section.id}" aria-expanded="${open}">
        <span>${escapeHTML(name)}</span><span class="sidebar-meta"><span class="nav-count${done === total ? ' complete' : ''}">${done}/${total}</span><span class="chevron">▸</span></span>
      </button>
      <div class="level-items">${topicLinks}</div>
    </div>`;
  }).join('');
}

function renderChapter(section) {
  const guide = getChapterGuide(section.id);
  const { total, done } = counts(section);
  const open = state.open.has(section.id);
  let visibleCount = 0;
  const topicHTML = section.topics.map((topic, ti) => {
    const items = topic.items.map((item, ii) => {
      const key = itemKey(section.id, ti, ii);
      const isDone = Boolean(state.checked[key]);
      if (!visibleItem(item, isDone, section.title, topic.title)) return '';
      visibleCount++;
      const encoded = `${section.id}|${ti}|${ii}`;
      return `<div class="item-tag${isDone ? ' done' : ''}">
        <button class="item-check" type="button" data-check="${encoded}" aria-label="Mark ${escapeHTML(item)} ${isDone ? 'not mastered' : 'mastered'}" aria-pressed="${isDone}"></button>
        <button class="item-label" type="button" data-lesson="${encoded}">${escapeHTML(item)}<span class="learn-arrow" aria-hidden="true">→</span></button>
      </div>`;
    }).join('');
    if (!items) return '';
    return `<section class="topic-block" id="topic-${section.id}-${ti}">
      <h3 class="topic-title"><span aria-hidden="true">◇</span>${escapeHTML(topic.title)}<span class="topic-count">${topic.items.length}</span></h3>
      <div class="items-wrap">${items}</div>
    </section>`;
  }).join('');

  if (!visibleCount) return '';
  return `<article class="section-card${open ? ' open' : ''}" id="section-${section.id}">
    <button class="section-head" type="button" data-section="${section.id}" aria-expanded="${open}">
      <span class="section-title"><span class="tab">${escapeHTML(section.title.split('—')[0].trim())}</span><span class="section-title-text">${escapeHTML(section.title.split('—').slice(1).join('—').trim())}</span></span>
      <span class="section-meta"><span class="mini-progress" aria-hidden="true"><i style="width:${Math.round(done / total * 100)}%"></i></span><span class="section-progress${done === total ? ' complete' : ''}">${done}/${total}</span><span class="s-chevron">▸</span></span>
    </button>
    <div class="section-body"><div class="section-body-inner">
      <div class="chapter-overview"><span class="overview-label">Chapter overview</span><p>${escapeHTML(guide.summary)}</p><span class="overview-help">Open a topic below to read its complete study note.</span></div>
      ${topicHTML}
    </div></div>
  </article>`;
}

function renderContent() {
  els.content.innerHTML = roadmap.map(renderChapter).join('');
  els.empty.hidden = Boolean(els.content.children.length);
  const visible = els.content.querySelectorAll('[data-lesson]').length;
  els.resultCount.textContent = `${visible} shown`;
}

function recommendation() {
  const lastIndex = state.recent.length ? curriculum.findIndex(entry => entry.token === state.recent[0]) : -1;
  for (let offset = 1; offset <= curriculum.length; offset++) {
    const entry = curriculum[(lastIndex + offset) % curriculum.length];
    if (!state.checked[itemKey(entry.section.id, entry.topicIndex, entry.itemIndex)]) return entry;
  }
  return curriculum[0];
}

function renderStudyDesk() {
  const next = recommendation();
  document.querySelector('#next-topic').textContent = next.item;
  document.querySelector('#next-context').textContent = `${next.section.title.split('—').slice(1).join('—').trim()} · ${next.topic.title}`;
  document.querySelector('#continue-learning').dataset.lesson = next.token;

  const started = roadmap.filter(section => {
    const chapter = counts(section);
    return chapter.done > 0;
  }).length;
  document.querySelector('#chapters-started').textContent = started;
  document.querySelector('#notes-written').textContent = Object.values(state.notes).filter(note => note.trim()).length;

  const recent = state.recent.map(token => lessonFromToken(token)).filter(Boolean).slice(0, 3);
  const row = document.querySelector('#recent-row');
  row.hidden = recent.length === 0;
  document.querySelector('#recent-topics').innerHTML = recent.map(entry =>
    `<button type="button" data-lesson="${entry.section.id}|${entry.topicIndex}|${entry.itemIndex}">${escapeHTML(entry.item)}</button>`
  ).join('');
}

function renderStats() {
  const { total, done } = counts();
  const percent = Math.round(done / total * 100);
  els.sidebarStats.textContent = `${roadmap.length} chapters · ${total} topics`;
  els.mainStats.innerHTML = `<b>${done}</b> of <b>${total}</b> topics mastered · <b>${percent}%</b> complete`;
  els.progressFill.style.width = `${percent}%`;
  els.progressText.textContent = `${done} / ${total} mastered (${percent}%)`;
}

function render() {
  renderSidebar();
  renderContent();
  renderStats();
  renderStudyDesk();
}

function list(items) {
  return `<ul>${items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`;
}

function lessonFromToken(token) {
  const [sectionId, topicIndex, itemIndex] = token.split('|');
  const section = roadmap.find(entry => entry.id === sectionId);
  const topic = section?.topics[Number(topicIndex)];
  const item = topic?.items[Number(itemIndex)];
  return item ? { section, topic, item, topicIndex: Number(topicIndex), itemIndex: Number(itemIndex) } : null;
}

function openLesson(token, updateHash = true) {
  const selected = lessonFromToken(token);
  if (!selected) return;
  state.selected = token;
  const lesson = buildLesson(selected.section, selected.topic, selected.item);
  const key = itemKey(selected.section.id, selected.topicIndex, selected.itemIndex);
  const done = Boolean(state.checked[key]);
  const currentIndex = curriculum.findIndex(entry => entry.token === token);
  const previous = curriculum[(currentIndex - 1 + curriculum.length) % curriculum.length];
  const next = curriculum[(currentIndex + 1) % curriculum.length];
  const related = selected.topic.items
    .map((item, itemIndex) => ({ item, token: `${selected.section.id}|${selected.topicIndex}|${itemIndex}` }))
    .filter(entry => entry.token !== token)
    .slice(0, 4);
  const note = state.notes[key] || '';
  els.drawerContent.innerHTML = `<nav class="lesson-nav" aria-label="Lesson navigation"><button type="button" data-lesson="${previous.token}">← Previous</button><span>${currentIndex + 1} / ${curriculum.length}</span><button type="button" data-lesson="${next.token}">Next →</button></nav>
    <div class="lesson-breadcrumb">${escapeHTML(lesson.chapter)} <span>›</span> ${escapeHTML(lesson.topic)}</div>
    <h2>${escapeHTML(lesson.item)}</h2>
    <p class="lesson-lead">${escapeHTML(lesson.explanation)}</p>
    <div class="mental-model"><strong>Senior engineer lens</strong><p>${escapeHTML(lesson.mentalModel)}</p></div>
    <section class="lesson-section"><h3>Example</h3><div class="code-head"><span>${escapeHTML(lesson.language)}</span><button type="button" data-copy-code>Copy code</button></div><pre><code>${escapeHTML(lesson.example)}</code></pre></section>
    <section class="lesson-section"><h3>Practical use cases</h3>${list(lesson.useCases)}</section>
    <div class="tradeoff-grid">
      <section class="tradeoff pros"><h3>Advantages</h3>${list(lesson.pros)}</section>
      <section class="tradeoff cons"><h3>Drawbacks</h3>${list(lesson.cons)}</section>
    </div>
    <section class="lesson-section exercise"><h3>Try it yourself</h3><p>${escapeHTML(lesson.exercise)}</p></section>
    <section class="personal-note"><div><h3>My field notes</h3><span>Saved automatically in this browser</span></div><textarea data-note-key="${key}" placeholder="Write an insight, question, or production example…">${escapeHTML(note)}</textarea></section>
    <section class="related-topics"><h3>Keep exploring</h3><div>${related.map(entry => `<button type="button" data-lesson="${entry.token}">${escapeHTML(entry.item)} →</button>`).join('')}</div></section>
    <button class="master-button${done ? ' mastered' : ''}" type="button" data-drawer-check="${token}">${done ? '✓ Mastered — mark as learning' : 'Mark this topic as mastered'}</button>`;
  els.drawer.classList.add('open');
  els.drawer.setAttribute('aria-hidden', 'false');
  els.backdrop.hidden = false;
  document.body.classList.add('drawer-open');
  state.recent = [token, ...state.recent.filter(entry => entry !== token)].slice(0, 6);
  localStorage.setItem(RECENT_KEY, JSON.stringify(state.recent));
  renderStudyDesk();
  if (updateHash) history.replaceState(null, '', `#learn-${slug(selected.section.id)}-${selected.topicIndex}-${selected.itemIndex}`);
  setTimeout(() => document.querySelector('#drawer-close')?.focus(), 0);
}

function closeLesson(updateHash = true) {
  state.selected = null;
  els.drawer.classList.remove('open');
  els.drawer.setAttribute('aria-hidden', 'true');
  els.backdrop.hidden = true;
  document.body.classList.remove('drawer-open');
  if (updateHash && location.hash.startsWith('#learn-')) history.replaceState(null, '', location.pathname + location.search);
}

function toggleProgress(token) {
  const selected = lessonFromToken(token);
  if (!selected) return;
  const key = itemKey(selected.section.id, selected.topicIndex, selected.itemIndex);
  state.checked[key] = !state.checked[key];
  saveProgress();
  showToast(state.checked[key] ? 'Topic mastered — nice work' : 'Moved back to learning');
  render();
  if (state.selected === token) openLesson(token, false);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  setTimeout(() => els.toast.classList.remove('show'), 1400);
}

document.addEventListener('click', event => {
  const lessonButton = event.target.closest('[data-lesson]');
  const checkButton = event.target.closest('[data-check], [data-drawer-check]');
  const sectionButton = event.target.closest('[data-section]');
  const sidebarButton = event.target.closest('[data-sidebar-section]');
  const navButton = event.target.closest('[data-nav-section]');

  if (lessonButton) openLesson(lessonButton.dataset.lesson);
  else if (checkButton) toggleProgress(checkButton.dataset.check || checkButton.dataset.drawerCheck);
  else if (sectionButton) {
    const id = sectionButton.dataset.section;
    state.open.has(id) ? state.open.delete(id) : state.open.add(id);
    renderContent();
  } else if (sidebarButton) {
    const id = sidebarButton.dataset.sidebarSection;
    state.sidebarOpen.has(id) ? state.sidebarOpen.delete(id) : state.sidebarOpen.add(id);
    renderSidebar();
  } else if (navButton) {
    const { navSection: id, navTopic: topicIndex } = navButton.dataset;
    state.open.add(id);
    renderContent();
    document.querySelector(`#topic-${id}-${topicIndex}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

document.querySelector('#drawer-close').addEventListener('click', () => closeLesson());
els.backdrop.addEventListener('click', () => closeLesson());
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLesson(); });

document.addEventListener('keydown', event => {
  if (!state.selected && event.key === '/' && !event.metaKey && !event.ctrlKey && !/input|textarea/i.test(document.activeElement.tagName)) {
    event.preventDefault();
    els.search.focus();
  }
  if (state.selected && event.altKey && event.key === 'ArrowRight') {
    const index = curriculum.findIndex(entry => entry.token === state.selected);
    openLesson(curriculum[(index + 1) % curriculum.length].token);
  }
  if (state.selected && event.altKey && event.key === 'ArrowLeft') {
    const index = curriculum.findIndex(entry => entry.token === state.selected);
    openLesson(curriculum[(index - 1 + curriculum.length) % curriculum.length].token);
  }
});

document.querySelector('#lesson-drawer').addEventListener('click', async event => {
  if (!event.target.closest('[data-copy-code]')) return;
  const code = els.drawer.querySelector('code')?.textContent || '';
  try { await navigator.clipboard.writeText(code); }
  catch {
    const area = document.createElement('textarea');
    area.value = code;
    document.body.append(area);
    area.select();
    document.execCommand('copy');
    area.remove();
  }
  showToast('Example copied');
});

document.querySelector('#lesson-drawer').addEventListener('input', event => {
  const note = event.target.closest('[data-note-key]');
  if (!note) return;
  state.notes[note.dataset.noteKey] = note.value;
  localStorage.setItem(NOTES_KEY, JSON.stringify(state.notes));
  document.querySelector('#notes-written').textContent = Object.values(state.notes).filter(value => value.trim()).length;
});

els.search.addEventListener('input', event => {
  state.query = event.target.value.trim().toLowerCase();
  if (state.query) roadmap.forEach(section => state.open.add(section.id));
  renderContent();
});

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  state.filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button));
  renderContent();
}));

document.querySelector('#expand-all').addEventListener('click', event => {
  const shouldOpen = state.open.size !== roadmap.length;
  state.open = new Set(shouldOpen ? roadmap.map(section => section.id) : []);
  event.currentTarget.textContent = shouldOpen ? 'Collapse all' : 'Expand all';
  renderContent();
});

document.querySelector('#sidebar-toggle').addEventListener('click', () => document.querySelector('#sidebar').classList.toggle('collapsed'));

document.querySelector('#random-topic').addEventListener('click', () => {
  const unmastered = curriculum.filter(entry => !state.checked[itemKey(entry.section.id, entry.topicIndex, entry.itemIndex)]);
  const pool = unmastered.length ? unmastered : curriculum;
  openLesson(pool[Math.floor(Math.random() * pool.length)].token);
});

document.querySelector('#reset-progress').addEventListener('click', () => {
  if (!confirm('Reset all mastered-topic progress?')) return;
  state.checked = {};
  saveProgress();
  render();
});

const auditFailures = auditLessons(roadmap);
if (auditFailures.length) console.error('Incomplete lessons:', auditFailures);

render();

const hashMatch = location.hash.match(/^#learn-(s\d+)-(\d+)-(\d+)$/);
if (hashMatch) openLesson(`${hashMatch[1]}|${hashMatch[2]}|${hashMatch[3]}`, false);
