import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from "react";
import { projects, services, steps } from "@/data/projects";
import { Eyebrow, TextLink } from "./Shared";
import hero from "@/assets/hero-interior.jpg";
import detail from "@/assets/material-detail.jpg";
import glass from "@/assets/glass-villa.jpg";
import urban from "@/assets/urban-serenity.jpg";
import kitchen from "@/assets/kitchen.avif";
import bedroom from "@/assets/bedroom.avif";

const concepts = [
  {
    key: "A",
    room: "Hall",
    image: hero,
    alt: "Light-filled contemporary hall with natural stone and sculptural seating",
  },
  {
    key: "B",
    room: "Kitchen",
    image: kitchen,
    alt: "Contemporary kitchen with warm cabinetry and natural light",
  },
  {
    key: "C",
    room: "Bedroom",
    image: bedroom,
    alt: "Serene bedroom with soft linen and warm light",
  },
] as const;

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function Hero() {
  return (
    <section className="hero">
      <img
        src={hero}
        alt="Light-filled contemporary living room with natural stone, oak cabinetry and sculptural seating"
        width={1600}
        height={1104}
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="hero-content wrap">
        <Eyebrow>INTERIOR DESIGN STUDIO · HYDERABAD</Eyebrow>
        <h1>
          Spaces that
          <br />
          <em>feel like you.</em>
        </h1>
        <p>
          Refined interiors balancing timeless design, thoughtful function and personal expression.
        </p>
        <TextLink to="/projects" light>
          EXPLORE OUR WORK
        </TextLink>
      </div>
      <div className="hero-bottom wrap">
        <span>ARCHITECTURE · MATERIAL · EMOTION</span>
        <a href="#studio" aria-label="Scroll to studio">
          SCROLL TO EXPLORE <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="studio" className="intro-section wrap section-space">
      <div className="intro-copy">
        <Eyebrow number="01">THE STUDIO</Eyebrow>
        <h2>
          Design
          <br />
          with <em>purpose.</em>
        </h2>
        <p className="lead">
          Great interiors are more than beautiful spaces. They are carefully considered environments
          shaped around the way you live, work and feel.
        </p>
        <p>
          From the first sketch to the final detail, we bring architecture, material, light and
          emotion together.
        </p>
        <TextLink to="/about">MEET THE STUDIO</TextLink>
      </div>
      <div className="intro-image">
        <img
          src={detail}
          alt="Travertine table with handmade ceramic vase against warm oak panelling"
          loading="lazy"
          width={1008}
          height={1312}
        />
        <span>01 / A STUDY IN MATERIAL</span>
      </div>
    </section>
  );
}

export function Philosophy() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const stats = [
    { value: 400, suffix: "+", label: "Projects Completed" },
    { value: 600, suffix: "+", label: "Satisfied Clients" },
    { value: 100, suffix: "+", label: "Unique Styles" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out
          stats.forEach((stat, i) => {
            const el = counterRefs.current[i];
            if (el) el.textContent = String(Math.round(stat.value * eased));
          });
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="philosophy section-space">
      <div className="wrap">
        <Eyebrow number="02">OUR POINT OF VIEW</Eyebrow>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT: HEADING */}
          <h2>
            Every space
            <br />
            has a <em>story.</em>
          </h2>

          {/* RIGHT: COUNTERS + TEXT */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-5 py-8 text-center sm:py-4 ${
                    index !== 0 ? "border-t border-[#d8d2c8] sm:border-l sm:border-t-0" : ""
                  }`}
                >
                  <div className="flex items-baseline justify-center">
                    <span
                      ref={(el) => {
                        counterRefs.current[index] = el;
                      }}
                      className="text-5xl font-light leading-none tracking-[-0.04em] text-[#55514c] md:text-6xl lg:text-[64px]"
                    >
                      0
                    </span>
                    <span className="text-4xl font-light text-[#55514c] md:text-5xl">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-5 text-[#6b6862] md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* DESCRIPTION BELOW COUNTERS */}
            <p className="mx-auto mt-10 max-w-[590px] text-base leading-7 text-[#68645e] md:text-sm">
              We design around the people who inhabit the space.
            </p>
          </div>
        </div>

        {/* PRINCIPLES (unchanged) */}
        <div className="principles mt-8">
          {[
            ["Thoughtful", "Every detail has a purpose."],
            ["Timeless", "Design that remains beautiful beyond trends."],
            ["Personal", "Spaces shaped around your lifestyle and personality."],
          ].map(([title, text], i) => (
            <div key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProject() {
  const p = projects[0];
  if (!p) return null;
  return (
    <section className="featured section-space">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <Eyebrow number="03">FEATURED CONCEPT</Eyebrow>
            <h2>
              The Oak <em>House.</em>
            </h2>
          </div>
          <p>
            A warm contemporary residence imagined around natural textures and effortless living.
          </p>
        </div>
        <Link className="featured-image image-link" to="/projects/$slug" params={{ slug: p.slug }}>
          <img src={p.image} alt={p.alt} loading="lazy" width={1408} height={1056} />
          <span className="image-view">
            VIEW CONCEPT <ArrowUpRight size={18} />
          </span>
        </Link>
        <div className="featured-meta">
          <span>HYDERABAD · RESIDENTIAL CONCEPT</span>
          <span>CONTEMPORARY DESIGN STUDY</span>
        </div>
      </div>
    </section>
  );
}

export function ProjectsPreview() {
  return (
    <section className="wrap section-space projects-preview">
      <div className="section-heading">
        <div>
          <Eyebrow number="04">DESIGN STUDIES</Eyebrow>
          <h2>
            Selected <em>concepts.</em>
          </h2>
        </div>
        <TextLink to="/projects">VIEW ALL CONCEPTS</TextLink>
      </div>
      <div className="preview-grid">
        {projects.slice(1, 4).map((p, i) => (
          <Link
            className={`project-tile project-tile-${i + 1}`}
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
          >
            <div className="project-photo">
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={i === 0 ? 1008 : 1408}
                height={i === 0 ? 1312 : 1056}
              />
              <span className="image-view">
                VIEW CONCEPT <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="project-caption">
              <div>
                <span>
                  0{i + 2} / {p.category.toUpperCase()}
                </span>
                <h3>{p.title}</h3>
              </div>
              <ArrowUpRight size={21} strokeWidth={1.4} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ServicesList({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`services-section section-space ${compact ? "compact" : ""}`}>
      <div className="wrap">
        <div className="section-heading">
          <div>
            <Eyebrow number="05">OUR EXPERTISE</Eyebrow>
            <h2>
              What <em>we do.</em>
            </h2>
          </div>
          <p>From first ideas to finishing touches, we create spaces designed for living.</p>
        </div>
        <div className="service-list">
          {services.map((s, i) => (
            <div className="service-row" key={s.title}>
              <span>0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ArrowUpRight size={23} strokeWidth={1.3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Materials() {
  return (
    <section className="materials-section section-space">
      <div className="wrap materials-layout">
        <div className="materials-image">
          <img
            src={detail}
            alt="Close-up of natural travertine stone, handmade ceramics and warm timber"
            loading="lazy"
            width={1008}
            height={1312}
          />
        </div>
        <div className="materials-content">
          <Eyebrow number="06">THE DETAILS</Eyebrow>
          <h2>
            Materials
            <br />
            that tell <em>a story.</em>
          </h2>
          <p>
            We believe in materials that feel as good as they look. Each texture is chosen for the
            way it lives in a space — and the feeling it leaves behind.
          </p>
          <div className="material-names">
            <span>01 / NATURAL STONE</span>
            <span>02 / WARM WOOD</span>
            <span>03 / SOFT FABRICS</span>
            <span>04 / ARCHITECTURAL LIGHTING</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="process-section section-space">
      <div className="wrap">
        <Eyebrow number="07">HOW WE WORK</Eyebrow>
        <div className="section-heading">
          <h2>
            From idea
            <br />
            to <em>space.</em>
          </h2>
          <p>A considered process from the first conversation to the final moment.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={step.title} className="process-step">
              <span>0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCompare() {
  // Two lines. Hall = left of the first line, Kitchen = between the lines,
  // Bedroom = right of the second line. Lines can go from 0% to 100%.
  const [splits, setSplits] = useState<[number, number]>([33.33, 66.67]);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const activeHandle = useRef<0 | 1 | "pending" | null>(null);
  const [first, second] = splits;

  const percentFrom = (clientX: number) => {
    const el = boxRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0) return null;
    return ((clientX - rect.left) / rect.width) * 100;
  };

  // Moving one line pushes the other one if they meet, so they never get stuck.
  const moveHandle = (handle: 0 | 1, percent: number) => {
    const p = clamp(percent, 0, 100);
    setSplits(([a, b]) => (handle === 0 ? [p, Math.max(b, p)] : [Math.min(a, p), p]));
  };

  const onKey = (handle: 0 | 1) => (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const current = handle === 0 ? first : second;
    moveHandle(handle, current + (e.key === "ArrowRight" ? 2 : -2));
  };

  // right edge of each image's visible part
  const edge = (i: number) => (i === 0 ? first : i === 1 ? second : 100);
  const regionWidth = (i: number) => edge(i) - (i === 0 ? 0 : i === 1 ? first : second);
  const together = second - first < 1;

  return (
    <div
      ref={boxRef}
      role="group"
      aria-label="Our work: hall, kitchen and bedroom"
      className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden sm:aspect-[16/9] lg:aspect-[2/1]"
      style={{ touchAction: "pan-y" }}
      onPointerDown={(e) => {
        const percent = percentFrom(e.clientX);
        if (percent === null) return;
        e.currentTarget.setPointerCapture(e.pointerId);

        // both lines at the same spot: wait for the drag direction to choose
        if (together && Math.abs(percent - first) < 4) {
          activeHandle.current = "pending";
          return;
        }

        const dFirst = Math.abs(percent - first);
        const dSecond = Math.abs(percent - second);
        const handle: 0 | 1 =
          dFirst < dSecond ? 0 : dSecond < dFirst ? 1 : percent >= first ? 1 : 0;
        activeHandle.current = handle;
        moveHandle(handle, percent);
      }}
      onPointerMove={(e) => {
        const current = activeHandle.current;
        if (current === null) return;
        const percent = percentFrom(e.clientX);
        if (percent === null) return;

        if (current === "pending") {
          if (Math.abs(percent - first) < 0.5) return;
          const handle: 0 | 1 = percent > first ? 1 : 0;
          activeHandle.current = handle;
          moveHandle(handle, percent);
          return;
        }
        moveHandle(current, percent);
      }}
      onPointerUp={() => {
        activeHandle.current = null;
      }}
      onPointerCancel={() => {
        activeHandle.current = null;
      }}
    >
      {concepts.map((c, i) => (
        <img
          key={c.key}
          src={c.image}
          alt={c.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            zIndex: concepts.length - i,
            clipPath: `inset(0 ${100 - edge(i)}% 0 0)`,
          }}
        />
      ))}

      {/* Labels */}
      {concepts.map((c, i) => {
        const position =
          i === 0
            ? { left: 20 }
            : i === 2
              ? { right: 20 }
              : { left: `${(first + second) / 2}%`, transform: "translateX(-50%)" };
        return (
          <span
            key={c.key}
            className="pointer-events-none absolute bottom-5 z-10 whitespace-nowrap bg-[#f6f3ec] px-4 py-2.5 text-[11px] font-medium tracking-[0.18em] text-[#1f1d1a] transition-opacity duration-200"
            style={{ ...position, opacity: regionWidth(i) < 20 ? 0 : 1 }}
          >
            <span className="hidden sm:inline">CONCEPT </span>
            {c.key} · {c.room.toUpperCase()}
          </span>
        );
      })}

      {/* The two white lines */}
      {([first, second] as const).map((pos, h) => (
        <div
          key={`line-${h}`}
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 top-0 z-20 w-0.5 -translate-x-1/2 bg-white"
          style={{ left: `${pos}%` }}
        />
      ))}

      {/* The arrow knobs (kept fully inside the frame, even at the edges) */}
      {([first, second] as const).map((pos, h) => {
        if (h === 1 && together) return null; // one knob when both lines are together
        return (
          <div
            key={`knob-${h}`}
            role="slider"
            tabIndex={0}
            aria-label={h === 0 ? "Hall and kitchen divider" : "Kitchen and bedroom divider"}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            onKeyDown={onKey(h as 0 | 1)}
            className="absolute top-1/2 z-30 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md outline-none focus-visible:ring-2 focus-visible:ring-black"
            style={{ left: `clamp(22px, ${pos}%, calc(100% - 22px))` }}
          >
            <ChevronLeft size={16} strokeWidth={2} color="black" />
            <ChevronRight size={16} strokeWidth={2} color="black" />
          </div>
        );
      })}
    </div>
  );
}

function ContactCompare() {
  const [value, setValue] = useState(50);

  return (
    <div className="comparison" style={{ "--split": `${value}%` } as CSSProperties}>
      <img
        src={hero}
        alt="Designed living room with pale stone, warm oak and sculptural furniture"
        loading="lazy"
        width={1408}
        height={1056}
      />
      <div className="comparison-overlay">
        <img
          src={hero}
          alt="The same living room shown as a muted, undecorated design starting point"
          loading="lazy"
          width={1600}
          height={1104}
        />
      </div>
      <span className="compare-label before">BEFORE · THE STARTING POINT</span>
      <span className="compare-label after">AFTER · THE DESIGN VISION</span>
      <div className="compare-handle" aria-hidden="true">
        <span className="compare-knob">
          <ChevronLeft size={16} strokeWidth={2} color="black" />
          <ChevronRight size={16} strokeWidth={2} color="black" />
        </span>
      </div>
      <input
        aria-label="Reveal the designed interior"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}

export function BeforeAfter({ mode = "home" }: { mode?: "home" | "contact" }) {
  const isContact = mode === "contact";

  return (
    <section
      className={`compare-section section-space wrap ${isContact ? "contact-comparison" : ""}`}
    >
      {!isContact && (
        <div className="section-heading">
          <div>
            <Eyebrow number="09">OUR WORK</Eyebrow>
          </div>
          <p>Drag the lines to explore our work across the hall, the kitchen and the bedroom.</p>
        </div>
      )}
      {isContact ? <ContactCompare /> : <WorkCompare />}
    </section>
  );
}

export function Gallery() {
  return (
    <section className="gallery-section section-space wrap">
      <div className="section-heading">
        <div>
          <Eyebrow number="10">THE VISUAL JOURNAL</Eyebrow>
          <h2>
            Moments in <em>detail.</em>
          </h2>
        </div>
        <p>Material, form and light — the elements that make a space feel whole.</p>
      </div>
      <div className="gallery-grid">
        <img
          src={urban}
          alt="Linen layers and warm timber in a serene bedroom"
          loading="lazy"
          width={1104}
          height={1408}
        />
        <img
          src={detail}
          alt="Textured travertine table and ceramic vessel in natural light"
          loading="lazy"
          width={1008}
          height={1312}
        />
        <img
          src={glass}
          alt="Light-filled villa interior with a sculptural sofa and garden outlook"
          loading="lazy"
          width={1408}
          height={1056}
        />
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta-section">
      <img
        src={glass}
        alt="Contemporary villa interior opening to a leafy garden"
        loading="lazy"
        width={1408}
        height={1056}
      />
      <div className="cta-shade" />
      <div className="wrap cta-content">
        <Eyebrow>YOUR SPACE, REIMAGINED</Eyebrow>
        <h2>
          Ready to create
          <br />
          <em>your space?</em>
        </h2>
        <p>
          Tell us what you have in mind. Let's make something considered, personal and timeless.
        </p>
        <TextLink to="/contact" light>
          START A PROJECT
        </TextLink>
      </div>
    </section>
  );
}
