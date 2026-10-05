import { createFileRoute } from "@tanstack/react-router";
import { StudioLayout } from "@/components/studio/Layout";
import { PageIntro } from "@/components/studio/Shared";
import { ServicesList, Materials, Process, CTA } from "@/components/studio/Sections";
export const Route = createFileRoute("/services")({
  head: () => ({
    links: [{ rel: "canonical", href: "/services" }],
    meta: [
      { title: "Interior Design Services in Hyderabad | DF9" },
      {
        name: "description",
        content:
          "Explore residential design, commercial interiors, interior architecture, 3D visualization and turnkey execution by DF9.",
      },
      { property: "og:title", content: "Interior Design Services | DF9" },
      {
        property: "og:description",
        content: "Considered services from concept through final execution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/services" },
    ],
  }),
  component: () => (
    <StudioLayout>
      <PageIntro
        label="WHAT WE DO / OUR EXPERTISE"
        title="A considered approach to every space."
        text="Whether a home or a place of work, each project begins with a conversation about the people who will inhabit it."
      />
      <ServicesList compact />
      <Materials />
      {/* <Process /> */}
      <CTA />
    </StudioLayout>
  ),
});
