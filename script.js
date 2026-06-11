/* ============================================================
   DFD Corporate Site — Shared Scripts
   ============================================================ */

'use strict';

/* ---- ナビ：ハンバーガー ---- */
const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // リンククリックでメニューを閉じる
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

/* ---- フェードイン（IntersectionObserver） ---- */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
} else {
  // モーション無効時はすべて即座に表示
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}

/* ---- 現在ページのナビリンクをハイライト ---- */
const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === current || (current === '' && href === 'index.html')) {
    a.classList.add('current');
  }
});
