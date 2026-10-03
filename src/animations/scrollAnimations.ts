export async function enableScrollReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger');
  gsap.registerPlugin(ScrollTrigger);
  const targets = gsap.utils.toArray<HTMLElement>('.section-space .eyebrow, .section-space h2, .section-space .section-heading > p');
  targets.forEach(el => gsap.fromTo(el, { y: 20, opacity: .5 }, { y: 0, opacity: 1, duration: .9, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
  return () => { targets.forEach(el => gsap.killTweensOf(el)); ScrollTrigger.getAll().forEach(t => t.kill()); };
}
