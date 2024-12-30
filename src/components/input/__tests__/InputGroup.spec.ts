import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { InputGroup } from "@/components/input";

describe("Input Group", () => {
  it("match snapshot", () => {
    const wrapper = shallowMount(InputGroup, {
      slots: {
        default: "children",
        leftIcon: "leftIcon",
        rightIcon: "rightIcon",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders properly", () => {
    const wrapper = shallowMount(InputGroup, {
      slots: {
        default: "children",
        leftIcon: "leftIcon",
        rightIcon: "rightIcon",
      },
    });
    expect(wrapper.text()).toContain("leftIconchildrenrightIcon");
  });
});
