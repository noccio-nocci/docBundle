// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: CWMxFnAAun
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
import { Iframe } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: CMDBvOhaI4s/codeComponent

import { LoggedInValue, useLoggedIn } from "./PlasmicGlobalVariant__LoggedIn"; // plasmic-import: VsyhYsfbuU/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicDocumentFrame.module.css"; // plasmic-import: CWMxFnAAun/css

export type PlasmicDocumentFrame__VariantMembers = {};

export type PlasmicDocumentFrame__VariantsArgs = {};
type VariantPropType = keyof PlasmicDocumentFrame__VariantsArgs;
export const PlasmicDocumentFrame__VariantProps = new Array<VariantPropType>();

export type PlasmicDocumentFrame__ArgsType = {};
type ArgPropType = keyof PlasmicDocumentFrame__ArgsType;
export const PlasmicDocumentFrame__ArgProps = new Array<ArgPropType>();

export type PlasmicDocumentFrame__OverridesType = {
  root?: p.Flex<typeof Iframe>;
};

export interface DefaultDocumentFrameProps {
  className?: string;
}

function PlasmicDocumentFrame__RenderFunc(props: {
  variants: PlasmicDocumentFrame__VariantsArgs;
  args: PlasmicDocumentFrame__ArgsType;
  overrides: PlasmicDocumentFrame__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    loggedIn: useLoggedIn()
  });

  return (
    (hasVariant(globalVariants, "loggedIn", "_true") ? true : true) ? (
      <Iframe
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames("__wab_instance", sty.root, {
          [sty.rootglobal_loggedIn__true]: hasVariant(
            globalVariants,
            "loggedIn",
            "_true"
          )
        })}
        src={"https://www.example.com" as const}
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
  root: typeof Iframe;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocumentFrame__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDocumentFrame__VariantsArgs;
    args?: PlasmicDocumentFrame__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDocumentFrame__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDocumentFrame__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDocumentFrame__ArgProps,
      internalVariantPropNames: PlasmicDocumentFrame__VariantProps
    });

    return PlasmicDocumentFrame__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocumentFrame";
  } else {
    func.displayName = `PlasmicDocumentFrame.${nodeName}`;
  }
  return func;
}

export const PlasmicDocumentFrame = Object.assign(
  // Top-level PlasmicDocumentFrame renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDocumentFrame
    internalVariantProps: PlasmicDocumentFrame__VariantProps,
    internalArgProps: PlasmicDocumentFrame__ArgProps
  }
);

export default PlasmicDocumentFrame;
/* prettier-ignore-end */