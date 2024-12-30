import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { Label } from "@/components/label";

describe("Label", () => {
  it("match snapshot", () => {
    const wrapper = shallowMount(Label, {
      slots: { default: "label" },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders properly", () => {
    const wrapper = shallowMount(Label, {
      slots: { default: "label" },
    });
    expect(wrapper.text()).toContain("label");
  });
});
