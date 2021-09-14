import React from "react";

import { Story } from "@storybook/react";
import { CollapsingBlock } from "./CollapsingBlock";

export default {
  component: CollapsingBlock,
  title: "Components/CollapsingBlock",
};
// @ts-ignore
const Template: Story<ColumnProps> = (args) => <CollapsingBlock {...args} />;

export const collapseBlock = Template.bind({});

collapseBlock.args = {
  // @ts-ignore
  headerTxt: "Header text",
  children:
    "Some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text",
};
