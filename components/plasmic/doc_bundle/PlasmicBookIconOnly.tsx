// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: zBFHKM6h0o
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
import sty from "./PlasmicBookIconOnly.module.css"; // plasmic-import: zBFHKM6h0o/css

import FolderIcon from "./icons/PlasmicIcon__Folder"; // plasmic-import: BYuADTFPQ/icon

export type PlasmicBookIconOnly__VariantMembers = {
  color: "_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7";
};

export type PlasmicBookIconOnly__VariantsArgs = {
  color?: MultiChoiceArg<"_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7">;
};

type VariantPropType = keyof PlasmicBookIconOnly__VariantsArgs;
export const PlasmicBookIconOnly__VariantProps = new Array<VariantPropType>(
  "color"
);

export type PlasmicBookIconOnly__ArgsType = {};
type ArgPropType = keyof PlasmicBookIconOnly__ArgsType;
export const PlasmicBookIconOnly__ArgProps = new Array<ArgPropType>();

export type PlasmicBookIconOnly__OverridesType = {
  root?: p.Flex<"svg">;
};

export interface DefaultBookIconOnlyProps {
  color?: MultiChoiceArg<"_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7">;
  className?: string;
}

function PlasmicBookIconOnly__RenderFunc(props: {
  variants: PlasmicBookIconOnly__VariantsArgs;
  args: PlasmicBookIconOnly__ArgsType;
  overrides: PlasmicBookIconOnly__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <FolderIcon
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcolor__2]: hasVariant(variants, "color", "_2"),
          [sty.rootcolor__3]: hasVariant(variants, "color", "_3"),
          [sty.rootcolor__4]: hasVariant(variants, "color", "_4"),
          [sty.rootcolor__5]: hasVariant(variants, "color", "_5"),
          [sty.rootcolor__6]: hasVariant(variants, "color", "_6"),
          [sty.rootcolor__7]: hasVariant(variants, "color", "_7")
        }
      )}
      role={"img"}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBookIconOnly__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBookIconOnly__VariantsArgs;
    args?: PlasmicBookIconOnly__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBookIconOnly__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBookIconOnly__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBookIconOnly__ArgProps,
      internalVariantPropNames: PlasmicBookIconOnly__VariantProps
    });

    return PlasmicBookIconOnly__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBookIconOnly";
  } else {
    func.displayName = `PlasmicBookIconOnly.${nodeName}`;
  }
  return func;
}

export const PlasmicBookIconOnly = Object.assign(
  // Top-level PlasmicBookIconOnly renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBookIconOnly
    internalVariantProps: PlasmicBookIconOnly__VariantProps,
    internalArgProps: PlasmicBookIconOnly__ArgProps
  }
);

export default PlasmicBookIconOnly;
/* prettier-ignore-end */
