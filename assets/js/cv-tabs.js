document.addEventListener('DOMContentLoaded', function() {
  /* Email obfuscation - main page */
  var contactEl = document.getElementById('contact-email');
  if (contactEl) {
    var u1 = 'amarinllobet', d1 = 'g.harvard.edu';
    var u2 = 'a.marinllobet', d2 = 'gmail.com';
    var e1 = u1 + '@' + d1;
    var e2 = u2 + '@' + d2;
    contactEl.innerHTML =
      '<i class="fas fa-fw fa-envelope" aria-hidden="true"></i> ' +
      '<a href="mailto:' + e1 + '">' + e1 + '</a>' +
      ' &middot; <a href="mailto:' + e2 + '">' + e2 + '</a>';
  }

  /* Email obfuscation - sidebar */
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

  /* News show more / less (step by 3) */
  var newsTimeline = document.getElementById('news-timeline');
  var moreEl = document.getElementById('news-more');
  var lessEl = document.getElementById('news-less');
  if (newsTimeline && moreEl && lessEl) {
    var newsItems = newsTimeline.querySelectorAll('.news-item');
    var STEP = 3;
    var visible = STEP;
    var total = newsItems.length;

    function updateNews() {
      for (var i = 0; i < total; i++) {
        if (i < visible) {
          newsItems[i].classList.add('news-visible');
          newsItems[i].classList.remove('news-hidden');
        } else {
          newsItems[i].classList.remove('news-visible');
          newsItems[i].classList.add('news-hidden');
        }
      }
      moreEl.style.display = visible >= total ? 'none' : '';
      lessEl.style.display = visible <= STEP ? 'none' : '';
    }

    updateNews();

    moreEl.addEventListener('click', function() {
      visible = Math.min(visible + STEP, total);
      updateNews();
    });
    lessEl.addEventListener('click', function() {
      visible = Math.max(visible - STEP, STEP);
      updateNews();
    });
  }

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
