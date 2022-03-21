// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: Re5_tLOhF_
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
import DoumentRowDot from "../../DoumentRowDot"; // plasmic-import: MI7mn027y9/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicDocumentRow.module.css"; // plasmic-import: Re5_tLOhF_/css

export type PlasmicDocumentRow__VariantMembers = {};

export type PlasmicDocumentRow__VariantsArgs = {};
type VariantPropType = keyof PlasmicDocumentRow__VariantsArgs;
export const PlasmicDocumentRow__VariantProps = new Array<VariantPropType>();

export type PlasmicDocumentRow__ArgsType = {};
type ArgPropType = keyof PlasmicDocumentRow__ArgsType;
export const PlasmicDocumentRow__ArgProps = new Array<ArgPropType>();

export type PlasmicDocumentRow__OverridesType = {
  root?: p.Flex<"div">;
  dot?: p.Flex<typeof DoumentRowDot>;
  name?: p.Flex<"div">;
};

export interface DefaultDocumentRowProps {
  className?: string;
}

function PlasmicDocumentRow__RenderFunc(props: {
  variants: PlasmicDocumentRow__VariantsArgs;
  args: PlasmicDocumentRow__ArgsType;
  overrides: PlasmicDocumentRow__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {true ? (
        <DoumentRowDot
          data-plasmic-name={"dot"}
          data-plasmic-override={overrides.dot}
          className={classNames("__wab_instance", sty.dot)}
        />
      ) : null}

      <div
        data-plasmic-name={"name"}
        data-plasmic-override={overrides.name}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.name)}
      >
        {"document name"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "dot", "name"],
  dot: ["dot"],
  name: ["name"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  dot: typeof DoumentRowDot;
  name: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocumentRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDocumentRow__VariantsArgs;
    args?: PlasmicDocumentRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDocumentRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDocumentRow__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDocumentRow__ArgProps,
      internalVariantPropNames: PlasmicDocumentRow__VariantProps
    });

    return PlasmicDocumentRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocumentRow";
  } else {
    func.displayName = `PlasmicDocumentRow.${nodeName}`;
  }
  return func;
}

export const PlasmicDocumentRow = Object.assign(
  // Top-level PlasmicDocumentRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dot: makeNodeComponent("dot"),
    _name: makeNodeComponent("name"),

    // Metadata about props expected for PlasmicDocumentRow
    internalVariantProps: PlasmicDocumentRow__VariantProps,
    internalArgProps: PlasmicDocumentRow__ArgProps
  }
);

export default PlasmicDocumentRow;
/* prettier-ignore-end */
