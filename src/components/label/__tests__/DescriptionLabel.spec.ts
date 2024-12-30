import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { DescriptionLabel } from "@/components/label";

describe("DescriptionLabel", () => {
  it("match snapshot", () => {
    const wrapper = shallowMount(DescriptionLabel, {
      slots: { default: "descriptionLabel" },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders properly", () => {
    const wrapper = shallowMount(DescriptionLabel, {
      slots: { default: "descriptionLabel" },
    });
    expect(wrapper.text()).toContain("descriptionLabel");
  });
});
