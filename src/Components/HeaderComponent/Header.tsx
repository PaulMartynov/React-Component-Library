import React from "react";

export const Header: React.FC<HeaderProps> = ({ level, children }) => {
  return React.createElement(`h${level}`, {}, children);
};
