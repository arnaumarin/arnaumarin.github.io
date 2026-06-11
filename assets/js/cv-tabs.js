document.addEventListener('DOMContentLoaded', function() {
  /* Email obfuscation - sidebar (kept JS-only since it's a clickable mailto link) */
  var sidebarEl = document.getElementById('sidebar-email-item');
  if (sidebarEl) {
    var u = 'amarinllobet', d = 'g.harvard.edu';
    var e = u + '@' + d;
    sidebarEl.innerHTML =
      '<a href="mailto:' + e + '">' +
      '<i class="fas fa-fw fa-envelope icon-pad-right" aria-hidden="true"></i>' +
      e + '</a>';
  }

  /* Tab switching - clicking an already-active tab closes it */
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanes = document.querySelectorAll('.tab-pane');
  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var isActive = btn.classList.contains('active');
      tabBtns.forEach(function(b) { b.classList.remove('active'); });
      tabPanes.forEach(function(p) { p.classList.remove('active'); });
      if (!isActive) {
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      }
    });
  });

  /* News show-more expander */
  var newsToggle = document.getElementById('news-toggle');
  if (newsToggle) {
    var hiddenNews = document.querySelectorAll('#news-timeline .news-item.news-hidden');
    if (hiddenNews.length === 0) {
      newsToggle.style.display = 'none';
    } else {
      var newsExpanded = false;
      newsToggle.addEventListener('click', function() {
        newsExpanded = !newsExpanded;
        hiddenNews.forEach(function(item) {
          item.classList.toggle('news-hidden', !newsExpanded);
        });
        newsToggle.setAttribute('aria-expanded', newsExpanded);
        newsToggle.innerHTML = newsExpanded ? 'Show fewer &uarr;' : 'Show all news &darr;';
      });
    }
  }

  /* TL;DR toggles on publication items (delegated so it works on any page) */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.tldr-btn');
    if (!btn) return;
    var content = btn.closest('.pub-content');
    var tldr = content && content.querySelector('.pub-tldr');
    if (!tldr) return;
    var open = tldr.classList.toggle('open');
    btn.classList.toggle('active', open);
  });

  /* Publication category filtering */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var pubItems = document.querySelectorAll('.pub-item');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      pubItems.forEach(function(item) {
        if (filter === 'all' || item.dataset.cat.indexOf(filter) !== -1) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});
