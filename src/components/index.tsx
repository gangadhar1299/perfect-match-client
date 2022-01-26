import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import Header from "./Header";
import ReactSelect, { GroupBase, Props } from "react-select";

export function Logo() {
  return (
    <div role="img" className="font-bold text-2xl">
      <span className="text-primary">perfect</span>Match
    </div>
  );
}

export function FullScreenSpinner() {
  return (
    <div className="h-screen w-screen flex place-items-center justify-center">
      <BiLoaderAlt className="text-6xl animate-spin" />
    </div>
  );
}

export function Page({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <ReactSelect
      {...props}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: { ...theme.colors, primary: "#ff9f00" },
      })}
    />
  );
}
