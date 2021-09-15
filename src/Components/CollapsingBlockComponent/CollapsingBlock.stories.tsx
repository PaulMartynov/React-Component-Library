import React from "react";

import { Story } from "@storybook/react";
import { CollapsingBlock } from "./CollapsingBlock";

export default {
  component: CollapsingBlock,
  title: "Components/CollapsingBlock",
};
const Template: Story<CollapsingProps> = (args) => (
  <CollapsingBlock {...args} />
);

export const collapseBlock = Template;

collapseBlock.args = {
  headerTxt: "Header text",
  children:
    "Some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text",
};
