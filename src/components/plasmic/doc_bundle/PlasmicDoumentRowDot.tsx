// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: MI7mn027y9
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
import sty from "./PlasmicDoumentRowDot.module.css"; // plasmic-import: MI7mn027y9/css

export type PlasmicDoumentRowDot__VariantMembers = {
  color: "_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7";
};

export type PlasmicDoumentRowDot__VariantsArgs = {
  color?: MultiChoiceArg<"_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7">;
};

type VariantPropType = keyof PlasmicDoumentRowDot__VariantsArgs;
export const PlasmicDoumentRowDot__VariantProps = new Array<VariantPropType>(
  "color"
);

export type PlasmicDoumentRowDot__ArgsType = {};
type ArgPropType = keyof PlasmicDoumentRowDot__ArgsType;
export const PlasmicDoumentRowDot__ArgProps = new Array<ArgPropType>();

export type PlasmicDoumentRowDot__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultDoumentRowDotProps {
  color?: MultiChoiceArg<"_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7">;
  className?: string;
}

function PlasmicDoumentRowDot__RenderFunc(props: {
  variants: PlasmicDoumentRowDot__VariantsArgs;
  args: PlasmicDoumentRowDot__ArgsType;
  overrides: PlasmicDoumentRowDot__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
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
      />
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDoumentRowDot__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDoumentRowDot__VariantsArgs;
    args?: PlasmicDoumentRowDot__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDoumentRowDot__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDoumentRowDot__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDoumentRowDot__ArgProps,
      internalVariantPropNames: PlasmicDoumentRowDot__VariantProps
    });

    return PlasmicDoumentRowDot__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDoumentRowDot";
  } else {
    func.displayName = `PlasmicDoumentRowDot.${nodeName}`;
  }
  return func;
}

export const PlasmicDoumentRowDot = Object.assign(
  // Top-level PlasmicDoumentRowDot renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDoumentRowDot
    internalVariantProps: PlasmicDoumentRowDot__VariantProps,
    internalArgProps: PlasmicDoumentRowDot__ArgProps
  }
);

export default PlasmicDoumentRowDot;
/* prettier-ignore-end */
