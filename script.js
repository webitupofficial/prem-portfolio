document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.top');
const bar = document.querySelector('.progress');
const onScroll = () => {
  header.classList.toggle('lined', window.scrollY > 4);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const els = document.querySelectorAll('.item, .about-grid, .record-grid, .timeline li, .awards li, .roles dl > div');
els.forEach((el) => {
  el.classList.add('rise');
  el.style.setProperty('--i', [...el.parentElement.children].indexOf(el) % 5);
});
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }
  }, { rootMargin: '0px 0px -10% 0px' });
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('in'));
}
