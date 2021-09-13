import React from "react";

export const Image: React.FC<ImageProps> = ({ source }): JSX.Element => {
  let imageSrc =
    "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkujMHW4X6m6uAQDZZ4YvTo6aKTM5SRkZCeTgDn6uOyic";
  if (source && source !== "") {
    imageSrc = source;
  }
  return React.createElement("img", { src: imageSrc });
};
