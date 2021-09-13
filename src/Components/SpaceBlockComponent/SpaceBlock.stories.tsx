import React from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";
import { SpaceBlock } from "./SpaceBlock";

export default {
  component: SpaceBlock,
  title: "Components/SpaceBlock",
} as Meta;
const Template: Story<SpaceBlockProps> = (args) => <SpaceBlock {...args} />;

export const spaceBlocComp30 = Template.bind({});
export const spaceBlocComp90 = Template.bind({});

spaceBlocComp30.args = {
  blockHeight: 30,
};
spaceBlocComp90.args = {
  blockHeight: 90,
};
