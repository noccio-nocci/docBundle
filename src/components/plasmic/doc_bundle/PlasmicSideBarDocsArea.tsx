// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: L8yNVAnNLS
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
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import SideBarBookTitle from "../../SideBarBookTitle"; // plasmic-import: cpDlPT0ZyV/component
import DraggableListView from "../../code_components/DraggableListView"; // plasmic-import: npy4_r1HuA/codeComponent
import AddStock from "../../AddStock"; // plasmic-import: -k3H9wKgmJ/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicSideBarDocsArea.module.css"; // plasmic-import: L8yNVAnNLS/css

export type PlasmicSideBarDocsArea__VariantMembers = {};

export type PlasmicSideBarDocsArea__VariantsArgs = {};
type VariantPropType = keyof PlasmicSideBarDocsArea__VariantsArgs;
export const PlasmicSideBarDocsArea__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSideBarDocsArea__ArgsType = {
  list2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSideBarDocsArea__ArgsType;
export const PlasmicSideBarDocsArea__ArgProps = new Array<ArgPropType>("list2");

export type PlasmicSideBarDocsArea__OverridesType = {
  root?: p.Flex<"div">;
  sideBarBookTitle?: p.Flex<typeof SideBarBookTitle>;
  list?: p.Flex<typeof DraggableListView>;
  addStock?: p.Flex<typeof AddStock>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultSideBarDocsAreaProps {
  list2?: React.ReactNode;
  className?: string;
}

function PlasmicSideBarDocsArea__RenderFunc(props: {
  variants: PlasmicSideBarDocsArea__VariantsArgs;
  args: PlasmicSideBarDocsArea__ArgsType;
  overrides: PlasmicSideBarDocsArea__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    true ? (
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
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        <SideBarBookTitle
          data-plasmic-name={"sideBarBookTitle"}
          data-plasmic-override={overrides.sideBarBookTitle}
          className={classNames("__wab_instance", sty.sideBarBookTitle)}
        />

        <DraggableListView
          data-plasmic-name={"list"}
          data-plasmic-override={overrides.list}
          className={classNames("__wab_instance", sty.list)}
          handleSelector={".draggable" as const}
          nodeSelector={".draggable" as const}
        />

        <AddStock
          data-plasmic-name={"addStock"}
          data-plasmic-override={overrides.addStock}
          className={classNames("__wab_instance", sty.addStock)}
        />

        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.list2,
          })}
        </div>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideBarBookTitle", "list", "addStock", "freeBox"],
  sideBarBookTitle: ["sideBarBookTitle"],
  list: ["list"],
  addStock: ["addStock"],
  freeBox: ["freeBox"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideBarBookTitle: typeof SideBarBookTitle;
  list: typeof DraggableListView;
  addStock: typeof AddStock;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideBarDocsArea__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideBarDocsArea__VariantsArgs;
    args?: PlasmicSideBarDocsArea__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSideBarDocsArea__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSideBarDocsArea__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSideBarDocsArea__ArgProps,
      internalVariantPropNames: PlasmicSideBarDocsArea__VariantProps,
    });

    return PlasmicSideBarDocsArea__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideBarDocsArea";
  } else {
    func.displayName = `PlasmicSideBarDocsArea.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarDocsArea = Object.assign(
  // Top-level PlasmicSideBarDocsArea renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideBarBookTitle: makeNodeComponent("sideBarBookTitle"),
    list: makeNodeComponent("list"),
    addStock: makeNodeComponent("addStock"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSideBarDocsArea
    internalVariantProps: PlasmicSideBarDocsArea__VariantProps,
    internalArgProps: PlasmicSideBarDocsArea__ArgProps,
  }
);

export default PlasmicSideBarDocsArea;
/* prettier-ignore-end */
