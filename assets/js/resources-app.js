import { resourceGroups } from './data/resources.js';

const icons = { web: '◎', docs: '▤', video: '▶', book: '▥', github: '⌘', course: '◇' };
const labels = { web: 'WEB', docs: 'DOCS', video: 'VIDEO', book: 'BOOK', github: 'GITHUB', course: 'COURSE' };
const openLevels = new Set(resourceGroups.map((_, index) => index));
const sidebar = document.querySelector('#sidebar-nav');
const content = document.querySelector('#content');

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function renderSidebar() {
  sidebar.innerHTML = resourceGroups.map((level, li) => `<div class="level-group${openLevels.has(li) ? ' open' : ''}">
    <button class="level-btn" type="button" data-level="${li}">${escapeHTML(level.level)} — ${escapeHTML(level.title)} <span class="chevron">▸</span></button>
    <div class="level-items">${level.categories.map(category => `<button class="nav-item" type="button" data-target="${slug(category.name)}">${escapeHTML(category.name)} <span class="nav-count">${category.items.length}</span></button>`).join('')}</div>
  </div>`).join('');
}

function resource(item) {
  const body = `<span class="icon">${icons[item.type] || icons.web}</span><span class="resource-info"><span class="resource-title">${escapeHTML(item.title)}</span><br><span class="resource-type ${item.type}">${labels[item.type] || 'LINK'}</span></span>${item.url ? '<span class="arrow">→</span>' : ''}`;
  return `<li class="resource-item">${item.url ? `<a class="resource-link" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">${body}</a>` : `<div class="book-card">${body}</div>`}</li>`;
}

function renderContent() {
  content.innerHTML = resourceGroups.map((level, li) => `<section class="level-section" id="level-${li}">
    <h2 class="level-title"><span class="level-badge">${escapeHTML(level.level)}</span> ${escapeHTML(level.title)}</h2>
    <p class="level-desc">${escapeHTML(level.desc)}</p>
    ${level.categories.map(category => `<article class="category-card" id="${slug(category.name)}"><h3 class="category-name">◇ ${escapeHTML(category.name)}</h3><ul class="resource-list">${category.items.map(resource).join('')}</ul></article>`).join('')}
  </section>${li < resourceGroups.length - 1 ? '<hr class="level-divider">' : ''}`).join('');
}

const categories = resourceGroups.reduce((sum, level) => sum + level.categories.length, 0);
const resources = resourceGroups.reduce((sum, level) => sum + level.categories.reduce((inner, category) => inner + category.items.length, 0), 0);
document.querySelector('#stats').textContent = `${resourceGroups.length} levels · ${categories} categories`;
document.querySelector('#main-stats').innerHTML = `<b>${resources}</b> resources across <b>${resourceGroups.length}</b> levels and <b>${categories}</b> categories`;

sidebar.addEventListener('click', event => {
  const level = event.target.closest('[data-level]');
  const target = event.target.closest('[data-target]');
  if (level) {
    const index = Number(level.dataset.level);
    openLevels.has(index) ? openLevels.delete(index) : openLevels.add(index);
    renderSidebar();
  } else if (target) {
    document.querySelector(`#${target.dataset.target}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

document.querySelector('#sidebar-toggle').addEventListener('click', () => document.querySelector('#sidebar').classList.toggle('collapsed'));
renderSidebar();
renderContent();

if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
