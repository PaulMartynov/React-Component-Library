import React from "react";

import { Meta, Story } from "@storybook/react";

import { Header } from "./Header";

export default {
  component: Header,
  title: "Components/Header",
} as Meta;
const Template: Story<HeaderProps> = (args) => <Header {...args} />;
export const H1 = Template;
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const H4 = Template.bind({});
export const H5 = Template.bind({});
export const H6 = Template.bind({});

H1.args = {
  level: 1,
  children: "Header h1",
};
H2.args = {
  level: 2,
  children: "Header h2",
};
H3.args = {
  level: 3,
  children: "Header h3",
};
H4.args = {
  level: 4,
  children: "Header h4",
};
H5.args = {
  level: 5,
  children: "Header h5",
};
H6.args = {
  level: 6,
  children: "Header h6",
};
