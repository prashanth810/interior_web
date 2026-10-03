import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { Navbar, Footer } from './Shared';
export function StudioLayout({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { window.scrollTo(0, 0); let cleanup: (() => void) | undefined; import('@/animations/scrollAnimations').then(m => m.enableScrollReveals()).then(fn => { cleanup = fn; }); return () => cleanup?.(); }, [path]);
  return <><Navbar/><main>{children}</main><Footer/></>;
}
