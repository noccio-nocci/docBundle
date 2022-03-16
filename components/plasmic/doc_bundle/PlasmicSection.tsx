// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: xjiy3g2Skn
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

import { LoggedInValue, useLoggedIn } from "./PlasmicGlobalVariant__LoggedIn"; // plasmic-import: VsyhYsfbuU/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicSection.module.css"; // plasmic-import: xjiy3g2Skn/css

import SectionFlapIcon from "./icons/PlasmicIcon__SectionFlap"; // plasmic-import: U1mSvVSj2/icon

export type PlasmicSection__VariantMembers = {
  close: "close";
};

export type PlasmicSection__VariantsArgs = {
  close?: SingleBooleanChoiceArg<"close">;
};

type VariantPropType = keyof PlasmicSection__VariantsArgs;
export const PlasmicSection__VariantProps = new Array<VariantPropType>("close");

export type PlasmicSection__ArgsType = {};
type ArgPropType = keyof PlasmicSection__ArgsType;
export const PlasmicSection__ArgProps = new Array<ArgPropType>();

export type PlasmicSection__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  childSection?: p.Flex<"div">;
};

export interface DefaultSectionProps {
  close?: SingleBooleanChoiceArg<"close">;
  className?: string;
}

function PlasmicSection__RenderFunc(props: {
  variants: PlasmicSection__VariantsArgs;
  args: PlasmicSection__ArgsType;
  overrides: PlasmicSection__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    loggedIn: useLoggedIn()
  });

  return (
    (hasVariant(globalVariants, "loggedIn", "_true") ? true : true) ? (
      <div
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
            [projectcss.global_loggedIn__true]: hasVariant(
              globalVariants,
              "loggedIn",
              "_true"
            ),
            [sty.rootclose]: hasVariant(variants, "close", "close"),
            [sty.rootglobal_loggedIn__true]: hasVariant(
              globalVariants,
              "loggedIn",
              "_true"
            )
          }
        )}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxclose]: hasVariant(variants, "close", "close")
          })}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              { [sty.textclose]: hasVariant(variants, "close", "close") }
            )}
          >
            {"Section Title"}
          </div>

          <SectionFlapIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg, {
              [sty.svgclose]: hasVariant(variants, "close", "close")
            })}
            role={"img"}
          />
        </div>

        <div
          data-plasmic-name={"childSection"}
          data-plasmic-override={overrides.childSection}
          className={classNames(projectcss.all, sty.childSection, {
            [sty.childSectionclose]: hasVariant(variants, "close", "close")
          })}
        />
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text", "svg", "childSection"],
  freeBox: ["freeBox", "text", "svg"],
  text: ["text"],
  svg: ["svg"],
  childSection: ["childSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
  svg: "svg";
  childSection: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSection__VariantsArgs;
    args?: PlasmicSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSection__ArgProps,
      internalVariantPropNames: PlasmicSection__VariantProps
    });

    return PlasmicSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection";
  } else {
    func.displayName = `PlasmicSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSection = Object.assign(
  // Top-level PlasmicSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),
    childSection: makeNodeComponent("childSection"),

    // Metadata about props expected for PlasmicSection
    internalVariantProps: PlasmicSection__VariantProps,
    internalArgProps: PlasmicSection__ArgProps
  }
);

export default PlasmicSection;
/* prettier-ignore-end */
