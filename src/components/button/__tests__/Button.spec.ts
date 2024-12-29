import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/button";

describe("Button", () => {
  it("match snapshot", () => {
    const wrapper = shallowMount(Button, {
      slots: { default: "button" },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders properly", () => {
    const wrapper = shallowMount(Button, {
      slots: { default: "button" },
    });
    expect(wrapper.text()).toContain("button");
  });
});
