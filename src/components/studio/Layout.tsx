import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Navbar, Footer } from "./Shared";
export function StudioLayout({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo(0, 0);
    let disposed = false;
    let cleanup = () => {};

    void import("@/animations/scrollAnimations")
      .then(({ enableScrollReveals }) => enableScrollReveals())
      .then((dispose) => {
        if (disposed) dispose();
        else cleanup = dispose;
      });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [path]);
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
