export async function enableScrollReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  const context = gsap.context(() => {
    const reveal = (element: HTMLElement, delay = 0) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.88) return;

      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
    };

    const contentTargets = document.querySelectorAll<HTMLElement>(
      ".page-intro .eyebrow, .page-intro-grid > *, .section-space > .wrap > :not(.principles):not(.preview-grid):not(.service-list):not(.process-steps):not(.gallery-grid):not(.all-projects), .section-space.wrap > :not(.principles):not(.preview-grid):not(.service-list):not(.process-steps):not(.gallery-grid):not(.all-projects), .project-detail-header > *, .project-detail-hero, .project-gallery > *, .next-project > *, .cta-content > *, .room-stage, .footer-top > *, .footer-bottom > *, .footer-legal > *",
    );
    contentTargets.forEach((element) => reveal(element));

    const staggeredGroups = document.querySelectorAll<HTMLElement>(
      ".principles, .preview-grid, .service-list, .process-steps, .gallery-grid, .all-projects",
    );
    staggeredGroups.forEach((group) => {
      Array.from(group.children)
        .filter((element): element is HTMLElement => element instanceof HTMLElement)
        .forEach((element, index) => reveal(element, index * 0.1));
    });
  }, document.body);

  return () => context.revert();
}
