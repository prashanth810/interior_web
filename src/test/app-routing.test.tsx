import { describe, expect, it } from "vitest";
import { Route as HomeRoute } from "@/routes/index";
import { Route as ProjectsRoute } from "@/routes/projects.index";
import { Route as ContactRoute } from "@/routes/contact";

describe("App routing", () => {
  it("registers the home page", () => {
    expect(HomeRoute.options.component).toBeDefined();
  });

  it("registers the studio pages", () => {
    expect(ProjectsRoute.options.component).toBeDefined();
    expect(ContactRoute.options.component).toBeDefined();
  });
});
