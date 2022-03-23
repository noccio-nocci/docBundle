// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: OGD7Ufmsky
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicAddBook.module.css"; // plasmic-import: OGD7Ufmsky/css

import FolderPlusIcon from "./icons/PlasmicIcon__FolderPlus"; // plasmic-import: JSSAWsoyA/icon

export type PlasmicAddBook__VariantMembers = {};

export type PlasmicAddBook__VariantsArgs = {};
type VariantPropType = keyof PlasmicAddBook__VariantsArgs;
export const PlasmicAddBook__VariantProps = new Array<VariantPropType>();

export type PlasmicAddBook__ArgsType = {};
type ArgPropType = keyof PlasmicAddBook__ArgsType;
export const PlasmicAddBook__ArgProps = new Array<ArgPropType>();

export type PlasmicAddBook__OverridesType = {
  root?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
};

export interface DefaultAddBookProps {
  className?: string;
}

function PlasmicAddBook__RenderFunc(props: {
  variants: PlasmicAddBook__VariantsArgs;
  args: PlasmicAddBook__ArgsType;
  overrides: PlasmicAddBook__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <FolderPlusIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddBook__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddBook__VariantsArgs;
    args?: PlasmicAddBook__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAddBook__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddBook__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAddBook__ArgProps,
      internalVariantPropNames: PlasmicAddBook__VariantProps
    });

    return PlasmicAddBook__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddBook";
  } else {
    func.displayName = `PlasmicAddBook.${nodeName}`;
  }
  return func;
}

export const PlasmicAddBook = Object.assign(
  // Top-level PlasmicAddBook renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicAddBook
    internalVariantProps: PlasmicAddBook__VariantProps,
    internalArgProps: PlasmicAddBook__ArgProps
  }
);

export default PlasmicAddBook;
/* prettier-ignore-end */
