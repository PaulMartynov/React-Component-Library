import React from "react";

import { Meta, Story } from "@storybook/react";

import { Paragraph } from "./Paragraph";

export default {
  component: Paragraph,
  title: "Components/Paragraph",
} as Meta;
const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template;
export const Bold = Template.bind({});
export const Cursive = Template.bind({});
export const BoldCursive = Template.bind({});

Default.args = {
  children: "Default text",
  styles: [],
};

Bold.args = {
  children: "Bold text",
  styles: ["bold"],
};

Cursive.args = {
  children: "Italic text",
  styles: ["italic"],
};

BoldCursive.args = {
  children: "Bold-Italic text",
  styles: ["bold", "italic"],
};
