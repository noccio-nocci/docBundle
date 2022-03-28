// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: lyekaetmXI
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
import Logo from "../../Logo"; // plasmic-import: JICtSQ_fSV/component
import Button from "../../Button"; // plasmic-import: rxt-Sw-2gx7/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicLoginWithGoogle.module.css"; // plasmic-import: lyekaetmXI/css

import GoogleLogoIcon from "./icons/PlasmicIcon__GoogleLogo"; // plasmic-import: XhhsX1TD8/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: _2cP8T_P8rk/icon

export type PlasmicLoginWithGoogle__VariantMembers = {};

export type PlasmicLoginWithGoogle__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoginWithGoogle__VariantsArgs;
export const PlasmicLoginWithGoogle__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLoginWithGoogle__ArgsType = {};
type ArgPropType = keyof PlasmicLoginWithGoogle__ArgsType;
export const PlasmicLoginWithGoogle__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginWithGoogle__OverridesType = {
  root?: p.Flex<"div">;
  logo?: p.Flex<typeof Logo>;
  button?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  text?: p.Flex<"div">;
};

export interface DefaultLoginWithGoogleProps {
  className?: string;
}

function PlasmicLoginWithGoogle__RenderFunc(props: {
  variants: PlasmicLoginWithGoogle__VariantsArgs;
  args: PlasmicLoginWithGoogle__ArgsType;
  overrides: PlasmicLoginWithGoogle__OverridesType;

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
          projectcss.plasmic_tokens,
          sty.root
        )}
      >
        {true ? (
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            className={classNames("__wab_instance", sty.logo)}
          />
        ) : null}

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          color={"white" as const}
          showStartIcon={true}
          startIcon={
            <GoogleLogoIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          }
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Login with Google"}
          </div>
        </Button>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logo", "button", "svg", "text"],
  logo: ["logo"],
  button: ["button", "svg", "text"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logo: typeof Logo;
  button: typeof Button;
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginWithGoogle__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginWithGoogle__VariantsArgs;
    args?: PlasmicLoginWithGoogle__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginWithGoogle__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLoginWithGoogle__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLoginWithGoogle__ArgProps,
      internalVariantPropNames: PlasmicLoginWithGoogle__VariantProps
    });

    return PlasmicLoginWithGoogle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLoginWithGoogle";
  } else {
    func.displayName = `PlasmicLoginWithGoogle.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginWithGoogle = Object.assign(
  // Top-level PlasmicLoginWithGoogle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicLoginWithGoogle
    internalVariantProps: PlasmicLoginWithGoogle__VariantProps,
    internalArgProps: PlasmicLoginWithGoogle__ArgProps
  }
);

export default PlasmicLoginWithGoogle;
/* prettier-ignore-end */