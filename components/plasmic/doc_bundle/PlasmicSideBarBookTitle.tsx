// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: cpDlPT0ZyV
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
import sty from "./PlasmicSideBarBookTitle.module.css"; // plasmic-import: cpDlPT0ZyV/css

import FolderIcon from "./icons/PlasmicIcon__Folder"; // plasmic-import: BYuADTFPQ/icon

export type PlasmicSideBarBookTitle__VariantMembers = {
  color: "_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7";
};

export type PlasmicSideBarBookTitle__VariantsArgs = {
  color?: SingleChoiceArg<"_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7">;
};

type VariantPropType = keyof PlasmicSideBarBookTitle__VariantsArgs;
export const PlasmicSideBarBookTitle__VariantProps = new Array<VariantPropType>(
  "color"
);

export type PlasmicSideBarBookTitle__ArgsType = {
  bundleTitle?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSideBarBookTitle__ArgsType;
export const PlasmicSideBarBookTitle__ArgProps = new Array<ArgPropType>(
  "bundleTitle"
);

export type PlasmicSideBarBookTitle__OverridesType = {
  root?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultSideBarBookTitleProps {
  bundleTitle?: React.ReactNode;
  color?: SingleChoiceArg<"_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7">;
  className?: string;
}

function PlasmicSideBarBookTitle__RenderFunc(props: {
  variants: PlasmicSideBarBookTitle__VariantsArgs;
  args: PlasmicSideBarBookTitle__ArgsType;
  overrides: PlasmicSideBarBookTitle__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootcolor__1]: hasVariant(variants, "color", "_1") }
      )}
    >
      <FolderIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgcolor__2]: hasVariant(variants, "color", "_2"),
          [sty.svgcolor__3]: hasVariant(variants, "color", "_3"),
          [sty.svgcolor__4]: hasVariant(variants, "color", "_4"),
          [sty.svgcolor__5]: hasVariant(variants, "color", "_5"),
          [sty.svgcolor__6]: hasVariant(variants, "color", "_6"),
          [sty.svgcolor__7]: hasVariant(variants, "color", "_7")
        })}
        role={"img"}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "",
          value: args.bundleTitle,
          className: classNames(sty.slotTargetBundleTitle)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "freeBox"],
  svg: ["svg"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  svg: "svg";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideBarBookTitle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideBarBookTitle__VariantsArgs;
    args?: PlasmicSideBarBookTitle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSideBarBookTitle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSideBarBookTitle__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSideBarBookTitle__ArgProps,
      internalVariantPropNames: PlasmicSideBarBookTitle__VariantProps
    });

    return PlasmicSideBarBookTitle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideBarBookTitle";
  } else {
    func.displayName = `PlasmicSideBarBookTitle.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarBookTitle = Object.assign(
  // Top-level PlasmicSideBarBookTitle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSideBarBookTitle
    internalVariantProps: PlasmicSideBarBookTitle__VariantProps,
    internalArgProps: PlasmicSideBarBookTitle__ArgProps
  }
);

export default PlasmicSideBarBookTitle;
/* prettier-ignore-end */
