import { createFileRoute } from '@tanstack/react-router';
import { StudioLayout } from '@/components/studio/Layout';
import { Hero, Intro, Philosophy, FeaturedProject, ProjectsPreview, ServicesList, Materials, Process, BeforeAfter, Gallery, CTA } from '@/components/studio/Sections';
import { ThreeDExperience } from '@/components/studio/ThreeDExperience';
export const Route = createFileRoute('/')({
  head: () => ({ links: [{ rel: 'canonical', href: '/' }], meta: [ { title: 'Interior Design Studio in Hyderabad | Atelier Form' }, { name: 'description', content: 'Atelier Form creates considered residential and commercial interiors in Hyderabad through architecture, material, light and detail.' }, { property: 'og:title', content: 'Atelier Form | Spaces That Feel Like You' }, { property: 'og:description', content: 'Considered residential and commercial interiors shaped around the way you live.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, { property: 'og:url', content: '/' } ] }),
  component: () => <StudioLayout><Hero/><Intro/><Philosophy/><FeaturedProject/><ProjectsPreview/><ServicesList/><Materials/><Process/><ThreeDExperience/><BeforeAfter/><Gallery/><CTA/></StudioLayout>
});
