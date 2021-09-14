import React from "react";

import { Meta, Story } from "@storybook/react";

import { Image } from "./Image";

export default {
  component: Image,
  title: "Components/Image",
} as Meta;
const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Picture = Template;

Picture.args = {
  source: "",
  floatStyle: "none",
};
