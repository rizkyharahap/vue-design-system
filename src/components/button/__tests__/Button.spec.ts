import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/button";

describe("Button", () => {
  it("renders properly", () => {
    const wrapper = mount(Button, {
      slots: { default: "button" },
    });
    expect(wrapper.text()).toContain("button");
  });
});
