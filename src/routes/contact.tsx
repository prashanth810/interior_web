import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StudioLayout } from "@/components/studio/Layout";
import { BeforeAfter } from "@/components/studio/Sections";
import { Eyebrow, PageIntro } from "@/components/studio/Shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    links: [{ rel: "canonical", href: "/contact" }],
    meta: [
      { title: "Start an Interior Design Project | DF9 Hyderabad" },
      {
        name: "description",
        content:
          "Tell DF9 about your residential or commercial interior design project in Hyderabad or beyond.",
      },
      { property: "og:title", content: "Contact DF9" },
      {
        property: "og:description",
        content: "Have a space in mind? Start a conversation about your interior design project.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const description = String(fd.get("description") ?? "").trim();
    if (!name || !email || !description) return;

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${fd.get("phone")}\nProject type: ${fd.get("type")}\nBudget: ${fd.get("budget")}\n\n${description}`,
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <StudioLayout>
      <PageIntro
        label="CONTACT / START A CONVERSATION"
        title="Let's create your space."
        text="Have a project in mind? Tell us a little about what you are looking to create."
      />
      <BeforeAfter mode="contact" />
      <section className="contact-layout wrap section-space">
        <div className="contact-aside">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2>Every good space starts with a conversation.</h2>
          <div className="contact-details">
            <div>
              <span>LOCATION</span>
              <p>Hyderabad, India</p>
            </div>
            <div>
              <span>EMAIL</span>
              <p>Add your studio email to receive enquiries directly.</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-pair">
            <label>
              Your name <input name="name" required placeholder="Full name" />
            </label>
            <label>
              Email address{" "}
              <input name="email" type="email" required placeholder="you@example.com" />
            </label>
          </div>
          <div className="form-pair">
            <label>
              Phone number <input name="phone" type="tel" placeholder="Optional" />
            </label>
            <label>
              Project type
              <select name="type" defaultValue="">
                <option value="" disabled>
                  Select a type
                </option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Office</option>
                <option>Hospitality</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label>
            Estimated budget
            <select name="budget" defaultValue="">
              <option value="" disabled>
                Select a range
              </option>
              <option>₹5–10L</option>
              <option>₹10–25L</option>
              <option>₹25–50L</option>
              <option>₹50L+</option>
              <option>Prefer to discuss</option>
            </select>
          </label>
          <label>
            Tell us about your project
            <textarea
              name="description"
              required
              rows={5}
              placeholder="Your space, ideas, timeline or anything you would like us to know..."
            />
          </label>
          {sent && (
            <p role="status" className="form-message">
              Your email app should open with your enquiry ready. Add the studio's email address
              before sending.
            </p>
          )}
          <Button type="submit" className="submit-button">
            PREPARE ENQUIRY <ArrowUpRight size={17} />
          </Button>
          <p className="form-note">
            This opens your email app. No details are sent until you choose a recipient and send it.
          </p>
        </form>
      </section>
    </StudioLayout>
  );
}
