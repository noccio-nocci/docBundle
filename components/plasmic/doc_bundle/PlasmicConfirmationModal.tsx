// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: 7Rffnmy82g
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
import Button from "../../Button"; // plasmic-import: rxt-Sw-2gx7/component
import CloseButton from "../../CloseButton"; // plasmic-import: 8wqo5dR4Ju/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicConfirmationModal.module.css"; // plasmic-import: 7Rffnmy82g/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: l4LGT0VjqAm/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: _2cP8T_P8rk/icon

export type PlasmicConfirmationModal__VariantMembers = {};

export type PlasmicConfirmationModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicConfirmationModal__VariantsArgs;
export const PlasmicConfirmationModal__VariantProps =
  new Array<VariantPropType>();

export type PlasmicConfirmationModal__ArgsType = {
  text?: React.ReactNode;
};

type ArgPropType = keyof PlasmicConfirmationModal__ArgsType;
export const PlasmicConfirmationModal__ArgProps = new Array<ArgPropType>(
  "text"
);

export type PlasmicConfirmationModal__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  ok?: p.Flex<typeof Button>;
  cancel?: p.Flex<typeof Button>;
  closeButton?: p.Flex<typeof CloseButton>;
};

export interface DefaultConfirmationModalProps {
  text?: React.ReactNode;
  className?: string;
}

function PlasmicConfirmationModal__RenderFunc(props: {
  variants: PlasmicConfirmationModal__VariantsArgs;
  args: PlasmicConfirmationModal__ArgsType;
  overrides: PlasmicConfirmationModal__OverridesType;

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
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, sty.text)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "",
          value: args.text
        })}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          data-plasmic-name={"ok"}
          data-plasmic-override={overrides.ok}
          className={classNames("__wab_instance", sty.ok)}
          color={"softBlue" as const}
          size={"compact" as const}
        >
          {"  O     K  "}
        </Button>

        <Button
          data-plasmic-name={"cancel"}
          data-plasmic-override={overrides.cancel}
          className={classNames("__wab_instance", sty.cancel)}
          color={"softSand" as const}
          size={"compact" as const}
        >
          {"Cancel"}
        </Button>
      </p.Stack>

      {true ? (
        <CloseButton
          data-plasmic-name={"closeButton"}
          data-plasmic-override={overrides.closeButton}
          className={classNames("__wab_instance", sty.closeButton)}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox", "ok", "cancel", "closeButton"],
  text: ["text"],
  freeBox: ["freeBox", "ok", "cancel"],
  ok: ["ok"],
  cancel: ["cancel"],
  closeButton: ["closeButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  freeBox: "div";
  ok: typeof Button;
  cancel: typeof Button;
  closeButton: typeof CloseButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicConfirmationModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicConfirmationModal__VariantsArgs;
    args?: PlasmicConfirmationModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicConfirmationModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicConfirmationModal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicConfirmationModal__ArgProps,
      internalVariantPropNames: PlasmicConfirmationModal__VariantProps
    });

    return PlasmicConfirmationModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConfirmationModal";
  } else {
    func.displayName = `PlasmicConfirmationModal.${nodeName}`;
  }
  return func;
}

export const PlasmicConfirmationModal = Object.assign(
  // Top-level PlasmicConfirmationModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    ok: makeNodeComponent("ok"),
    cancel: makeNodeComponent("cancel"),
    closeButton: makeNodeComponent("closeButton"),

    // Metadata about props expected for PlasmicConfirmationModal
    internalVariantProps: PlasmicConfirmationModal__VariantProps,
    internalArgProps: PlasmicConfirmationModal__ArgProps
  }
);

export default PlasmicConfirmationModal;
/* prettier-ignore-end */
