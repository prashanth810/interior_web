import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { StudioLayout } from "@/components/studio/Layout";
import { Eyebrow, TextLink } from "@/components/studio/Shared";
import { projects } from "@/data/projects";
export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => ({
    links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    meta: [
      { title: `${loaderData?.title ?? "Project"} | Design Concept | DF9` },
      {
        name: "description",
        content: loaderData?.description ?? "Explore interior design by DF9.",
      },
      { property: "og:title", content: `${loaderData?.title ?? "Project"} | DF9` },
      {
        property: "og:description",
        content: loaderData?.description ?? "Explore interior design by DF9.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `/projects/${params.slug}` },
    ],
  }),
  component: ProjectDetail,
});
function ProjectDetail() {
  const p = Route.useLoaderData();
  const next = projects[(projects.findIndex((item) => item.slug === p.slug) + 1) % projects.length];
  return (
    <StudioLayout>
      <section className="project-detail-header wrap">
        <Eyebrow>DESIGN CONCEPT / {p.location.toUpperCase()}</Eyebrow>
        <h1>
          {p.title}
          <em>.</em>
        </h1>
        <div className="project-detail-info">
          <p>{p.description}</p>
          <div>
            <span>{p.category} concept</span>
            <span>{p.location}</span>
          </div>
        </div>
      </section>
      <div className="project-detail-hero">
        <img src={p.image} alt={p.alt} width={1408} height={1056} fetchPriority="high" />
      </div>
      <section className="wrap project-story section-space">
        <Eyebrow>THE IDEA</Eyebrow>
        <h2>
          Considered in
          <br />
          <em>every detail.</em>
        </h2>
        <p>
          {p.description} A visual design study of materials, light and atmosphere, not a completed
          commission.
        </p>
      </section>
      <section className="project-gallery wrap">
        {p.gallery.slice(1).map((image, i) => (
          <img
            key={image}
            src={image}
            alt={`${p.title}: ${i === 0 ? "material and furniture detail" : "another view of the interior"}`}
            loading="lazy"
            width={1408}
            height={1056}
          />
        ))}
      </section>
      <div className="next-project wrap">
        <Eyebrow>NEXT CONCEPT</Eyebrow>
        {next && (
          <Link to="/projects/$slug" params={{ slug: next.slug }}>
            {next.title} <ArrowUpRight size={36} strokeWidth={1} />
          </Link>
        )}
        <TextLink to="/projects">ALL CONCEPTS</TextLink>
      </div>
    </StudioLayout>
  );
}
