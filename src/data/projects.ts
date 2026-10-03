import oak from '@/assets/oak-house.jpg';
import skyline from '@/assets/skyline-residence.jpg';
import urban from '@/assets/urban-serenity.jpg';
import glass from '@/assets/glass-villa.jpg';
import material from '@/assets/material-detail.jpg';
import hero from '@/assets/hero-interior.jpg';

export const projects = [
  { slug: 'the-oak-house', title: 'The Oak House', location: 'Hyderabad', category: 'Residential', image: oak, description: 'A warm contemporary residence shaped by natural textures, soft light and considered spaces for everyday living.', gallery: [oak, material, hero], alt: 'Warm oak-panelled living room with a sculptural ivory sofa and natural stone table' },
  { slug: 'skyline-residence', title: 'Skyline Residence', location: 'Hyderabad', category: 'Residential', image: skyline, description: 'An elevated city home where tactile materials and an open outlook create a quiet sense of retreat.', gallery: [skyline, hero, material], alt: 'Contemporary walnut dining room with city views and an elongated pendant light' },
  { slug: 'urban-serenity', title: 'Urban Serenity', location: 'Bangalore', category: 'Apartment', image: urban, description: 'A restful apartment interior grounded in warm timber, soft linen and natural light.', gallery: [urban, material, skyline], alt: 'Minimal bedroom with oak panelling and soft linen in a contemporary apartment' },
  { slug: 'the-glass-villa', title: 'The Glass Villa', location: 'Hyderabad', category: 'Villa', image: glass, description: 'A light-filled villa designed around openness, sculptural forms and a close connection with the garden.', gallery: [glass, hero, oak], alt: 'Double-height villa living room opening through full-height glass to the garden' },
];

export const services = [
  { title: 'Interior architecture', description: 'Spatial planning, thoughtful layouts, materials and architectural detailing.' },
  { title: 'Residential interiors', description: 'Personal homes designed around comfort, lifestyle and character.' },
  { title: 'Commercial interiors', description: 'Distinctive workspaces and environments built around people and brands.' },
  { title: '3D visualization', description: 'Visual explorations that help you experience a design before it is built.' },
  { title: 'Turnkey execution', description: 'From concept and material selection through to the final detail.' },
];

export const steps = [
  { title: 'Discover', description: 'We listen to how you live, what you need, and what your space could become.' },
  { title: 'Concept', description: 'Ideas take shape through moodboards, layouts and a clear creative direction.' },
  { title: 'Design', description: 'Materials, furniture, lighting and details are thoughtfully brought together.' },
  { title: 'Execute', description: 'Every stage of implementation is coordinated with care.' },
  { title: 'Deliver', description: 'A finished space that feels distinctly yours.' },
];
