import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import { Input } from "@/components/input";

describe("Input", () => {
  it("match snapshot", () => {
    const wrapper = shallowMount(Input, {
      props: { value: "input value" },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders properly", () => {
    const wrapper = shallowMount(Input, {
      props: { value: "input value" },
    });
    expect(wrapper.find("input").element.value).toBe("input value");
  });
});
