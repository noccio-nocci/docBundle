// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: IV-WZpF1r4d
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
import ColorPicker from "../../ColorPicker"; // plasmic-import: CiaLAP-GDH/component
import Button from "../../Button"; // plasmic-import: rxt-Sw-2gx7/component
import CloseButton from "../../CloseButton"; // plasmic-import: 8wqo5dR4Ju/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicDocInfoModal.module.css"; // plasmic-import: IV-WZpF1r4d/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: l4LGT0VjqAm/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: _2cP8T_P8rk/icon

export type PlasmicDocInfoModal__VariantMembers = {
  isSection: "isSection";
};

export type PlasmicDocInfoModal__VariantsArgs = {
  isSection?: SingleBooleanChoiceArg<"isSection">;
};

type VariantPropType = keyof PlasmicDocInfoModal__VariantsArgs;
export const PlasmicDocInfoModal__VariantProps = new Array<VariantPropType>(
  "isSection"
);

export type PlasmicDocInfoModal__ArgsType = {};
type ArgPropType = keyof PlasmicDocInfoModal__ArgsType;
export const PlasmicDocInfoModal__ArgProps = new Array<ArgPropType>();

export type PlasmicDocInfoModal__OverridesType = {
  root?: p.Flex<"div">;
  docTitle?: p.Flex<"input">;
  docUrl?: p.Flex<"input">;
  colorPicker?: p.Flex<typeof ColorPicker>;
  ok?: p.Flex<typeof Button>;
  remove?: p.Flex<typeof Button>;
  closeButton?: p.Flex<typeof CloseButton>;
};

export interface DefaultDocInfoModalProps {
  isSection?: SingleBooleanChoiceArg<"isSection">;
  className?: string;
}

function PlasmicDocInfoModal__RenderFunc(props: {
  variants: PlasmicDocInfoModal__VariantsArgs;
  args: PlasmicDocInfoModal__ArgsType;
  overrides: PlasmicDocInfoModal__OverridesType;

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
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <input
        data-plasmic-name={"docTitle"}
        data-plasmic-override={overrides.docTitle}
        className={classNames(projectcss.all, projectcss.input, sty.docTitle)}
        name={"" as const}
        placeholder={"Input title" as const}
        type={"text" as const}
        value={"" as const}
      />

      <input
        data-plasmic-name={"docUrl"}
        data-plasmic-override={overrides.docUrl}
        className={classNames(projectcss.all, projectcss.input, sty.docUrl, {
          [sty.docUrlisSection]: hasVariant(variants, "isSection", "isSection")
        })}
        name={"" as const}
        placeholder={"https://document.url/" as const}
        type={"text" as const}
        value={
          hasVariant(variants, "isSection", "isSection")
            ? ("???" as const)
            : ("" as const)
        }
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__unu1M)}
      >
        <ColorPicker
          data-plasmic-name={"colorPicker"}
          data-plasmic-override={overrides.colorPicker}
          className={classNames("__wab_instance", sty.colorPicker, {
            [sty.colorPickerisSection]: hasVariant(
              variants,
              "isSection",
              "isSection"
            )
          })}
          color={"_1" as const}
          isSection={
            hasVariant(variants, "isSection", "isSection") ? true : undefined
          }
        />

        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jr7Qc)}
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
              data-plasmic-name={"remove"}
              data-plasmic-override={overrides.remove}
              className={classNames("__wab_instance", sty.remove)}
              color={"softRed" as const}
              size={"compact" as const}
            >
              {"Remove"}
            </Button>
          </p.Stack>
        ) : null}
      </p.Stack>

      <CloseButton
        data-plasmic-name={"closeButton"}
        data-plasmic-override={overrides.closeButton}
        className={classNames("__wab_instance", sty.closeButton)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "docTitle",
    "docUrl",
    "colorPicker",
    "ok",
    "remove",
    "closeButton"
  ],
  docTitle: ["docTitle"],
  docUrl: ["docUrl"],
  colorPicker: ["colorPicker"],
  ok: ["ok"],
  remove: ["remove"],
  closeButton: ["closeButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  docTitle: "input";
  docUrl: "input";
  colorPicker: typeof ColorPicker;
  ok: typeof Button;
  remove: typeof Button;
  closeButton: typeof CloseButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocInfoModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDocInfoModal__VariantsArgs;
    args?: PlasmicDocInfoModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDocInfoModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDocInfoModal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDocInfoModal__ArgProps,
      internalVariantPropNames: PlasmicDocInfoModal__VariantProps
    });

    return PlasmicDocInfoModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocInfoModal";
  } else {
    func.displayName = `PlasmicDocInfoModal.${nodeName}`;
  }
  return func;
}

export const PlasmicDocInfoModal = Object.assign(
  // Top-level PlasmicDocInfoModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    docTitle: makeNodeComponent("docTitle"),
    docUrl: makeNodeComponent("docUrl"),
    colorPicker: makeNodeComponent("colorPicker"),
    ok: makeNodeComponent("ok"),
    remove: makeNodeComponent("remove"),
    closeButton: makeNodeComponent("closeButton"),

    // Metadata about props expected for PlasmicDocInfoModal
    internalVariantProps: PlasmicDocInfoModal__VariantProps,
    internalArgProps: PlasmicDocInfoModal__ArgProps
  }
);

export default PlasmicDocInfoModal;
/* prettier-ignore-end */
