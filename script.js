document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.top');
const onScroll = () => header.classList.toggle('lined', window.scrollY > 4);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const els = document.querySelectorAll('.item, .about-grid, .record-grid, .writing li');
els.forEach((el) => el.classList.add('rise'));
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
