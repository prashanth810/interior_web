import { useEffect, useState } from 'react';
import { Eyebrow } from './Shared';
import fallback from '@/assets/hero-interior.jpg';
import type { ComponentType } from 'react';

export function ThreeDExperience() {
  const [Scene, setScene] = useState<ComponentType | null>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 767px)').matches) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { import('@/three/InteriorScene').then(m => setScene(() => m.default)); observer.disconnect(); } }, { rootMargin: '180px' });
    const el = document.getElementById('room-experience'); if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <section id="room-experience" className="experience-section section-space"><div className="wrap experience-head"><div><Eyebrow number="08">DESIGN IN THREE DIMENSIONS</Eyebrow><h2>Beyond the<br/><em>floor plan.</em></h2></div><p>Experience the feeling of a room before it becomes reality. Move around this small study in space, material and light.</p></div><div className="room-stage">{Scene ? <Scene/> : <img src={fallback} alt="A light-filled contemporary living room preview" loading="lazy" width={1600} height={1104}/>}<span className="room-caption">{Scene ? 'DRAG TO EXPLORE' : 'A SPACE TO IMAGINE'}</span></div></section>;
}
