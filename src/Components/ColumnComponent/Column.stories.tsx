import React from "react";

import { Story } from "@storybook/react";
import { Column } from "./Column";

export default {
  component: Column,
  title: "Components/Column",
};
const Template: Story<ColumnProps> = (args) => <Column {...args} />;

export const columnComp5 = Template;
export const columnComp9 = Template.bind({});

columnComp5.args = {
  count: 5,
  children:
    "Some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text",
};

columnComp9.args = {
  count: 9,
  children:
    "Some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text, some text, some text, some text, some text, some text, some text, some text, " +
    "some text, some text, some text",
};
