// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: CiaLAP-GDH
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
import ColorPickerDot from "../../ColorPickerDot"; // plasmic-import: qBVjqzeCH3/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicColorPicker.module.css"; // plasmic-import: CiaLAP-GDH/css

export type PlasmicColorPicker__VariantMembers = {
  color: "_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7";
  isSection: "isSection";
};

export type PlasmicColorPicker__VariantsArgs = {
  color?: SingleChoiceArg<"_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7">;
  isSection?: SingleBooleanChoiceArg<"isSection">;
};

type VariantPropType = keyof PlasmicColorPicker__VariantsArgs;
export const PlasmicColorPicker__VariantProps = new Array<VariantPropType>(
  "color",
  "isSection"
);

export type PlasmicColorPicker__ArgsType = {};
type ArgPropType = keyof PlasmicColorPicker__ArgsType;
export const PlasmicColorPicker__ArgProps = new Array<ArgPropType>();

export type PlasmicColorPicker__OverridesType = {
  root?: p.Flex<"div">;
  dot1?: p.Flex<typeof ColorPickerDot>;
  dot2?: p.Flex<typeof ColorPickerDot>;
  dot3?: p.Flex<typeof ColorPickerDot>;
  dot4?: p.Flex<typeof ColorPickerDot>;
  dot5?: p.Flex<typeof ColorPickerDot>;
  dot6?: p.Flex<typeof ColorPickerDot>;
  dot7?: p.Flex<typeof ColorPickerDot>;
};

export interface DefaultColorPickerProps {
  color?: SingleChoiceArg<"_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7">;
  isSection?: SingleBooleanChoiceArg<"isSection">;
  className?: string;
}

function PlasmicColorPicker__RenderFunc(props: {
  variants: PlasmicColorPicker__VariantsArgs;
  args: PlasmicColorPicker__ArgsType;
  overrides: PlasmicColorPicker__OverridesType;

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
        sty.root,
        {
          [sty.rootcolor__1]: hasVariant(variants, "color", "_1"),
          [sty.rootcolor__2]: hasVariant(variants, "color", "_2"),
          [sty.rootcolor__3]: hasVariant(variants, "color", "_3"),
          [sty.rootcolor__6]: hasVariant(variants, "color", "_6"),
          [sty.rootcolor__7]: hasVariant(variants, "color", "_7")
        }
      )}
    >
      <ColorPickerDot
        data-plasmic-name={"dot1"}
        data-plasmic-override={overrides.dot1}
        className={classNames("__wab_instance", sty.dot1, {
          [sty.dot1color__1]: hasVariant(variants, "color", "_1"),
          [sty.dot1color__6]: hasVariant(variants, "color", "_6"),
          [sty.dot1color__7]: hasVariant(variants, "color", "_7"),
          [sty.dot1isSection]: hasVariant(variants, "isSection", "isSection")
        })}
        color={"_1" as const}
        isSection={
          hasVariant(variants, "isSection", "isSection") ? true : undefined
        }
        selected={
          hasVariant(variants, "color", "_7")
            ? undefined
            : hasVariant(variants, "color", "_1")
            ? true
            : undefined
        }
      />

      <ColorPickerDot
        data-plasmic-name={"dot2"}
        data-plasmic-override={overrides.dot2}
        className={classNames("__wab_instance", sty.dot2, {
          [sty.dot2color__2]: hasVariant(variants, "color", "_2"),
          [sty.dot2isSection]: hasVariant(variants, "isSection", "isSection")
        })}
        color={"_2" as const}
        isSection={
          hasVariant(variants, "isSection", "isSection") ? true : undefined
        }
        selected={hasVariant(variants, "color", "_2") ? true : undefined}
      />

      <ColorPickerDot
        data-plasmic-name={"dot3"}
        data-plasmic-override={overrides.dot3}
        className={classNames("__wab_instance", sty.dot3, {
          [sty.dot3color__3]: hasVariant(variants, "color", "_3"),
          [sty.dot3color__6]: hasVariant(variants, "color", "_6"),
          [sty.dot3isSection]: hasVariant(variants, "isSection", "isSection")
        })}
        color={"_3" as const}
        isSection={
          hasVariant(variants, "isSection", "isSection") ? true : undefined
        }
        selected={hasVariant(variants, "color", "_3") ? true : undefined}
      />

      <ColorPickerDot
        data-plasmic-name={"dot4"}
        data-plasmic-override={overrides.dot4}
        className={classNames("__wab_instance", sty.dot4, {
          [sty.dot4color__4]: hasVariant(variants, "color", "_4"),
          [sty.dot4isSection]: hasVariant(variants, "isSection", "isSection")
        })}
        color={"_4" as const}
        isSection={
          hasVariant(variants, "isSection", "isSection") ? true : undefined
        }
        selected={hasVariant(variants, "color", "_4") ? true : undefined}
      />

      <ColorPickerDot
        data-plasmic-name={"dot5"}
        data-plasmic-override={overrides.dot5}
        className={classNames("__wab_instance", sty.dot5, {
          [sty.dot5color__5]: hasVariant(variants, "color", "_5"),
          [sty.dot5isSection]: hasVariant(variants, "isSection", "isSection")
        })}
        color={"_5" as const}
        isSection={
          hasVariant(variants, "isSection", "isSection") ? true : undefined
        }
        selected={hasVariant(variants, "color", "_5") ? true : undefined}
      />

      <ColorPickerDot
        data-plasmic-name={"dot6"}
        data-plasmic-override={overrides.dot6}
        className={classNames("__wab_instance", sty.dot6, {
          [sty.dot6color__6]: hasVariant(variants, "color", "_6"),
          [sty.dot6isSection]: hasVariant(variants, "isSection", "isSection")
        })}
        color={"_6" as const}
        isSection={
          hasVariant(variants, "isSection", "isSection") ? true : undefined
        }
        selected={hasVariant(variants, "color", "_6") ? true : undefined}
      />

      <ColorPickerDot
        data-plasmic-name={"dot7"}
        data-plasmic-override={overrides.dot7}
        className={classNames("__wab_instance", sty.dot7, {
          [sty.dot7color__7]: hasVariant(variants, "color", "_7"),
          [sty.dot7isSection]: hasVariant(variants, "isSection", "isSection")
        })}
        color={"_7" as const}
        isSection={
          hasVariant(variants, "isSection", "isSection") ? true : undefined
        }
        selected={hasVariant(variants, "color", "_7") ? true : undefined}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "dot1", "dot2", "dot3", "dot4", "dot5", "dot6", "dot7"],
  dot1: ["dot1"],
  dot2: ["dot2"],
  dot3: ["dot3"],
  dot4: ["dot4"],
  dot5: ["dot5"],
  dot6: ["dot6"],
  dot7: ["dot7"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  dot1: typeof ColorPickerDot;
  dot2: typeof ColorPickerDot;
  dot3: typeof ColorPickerDot;
  dot4: typeof ColorPickerDot;
  dot5: typeof ColorPickerDot;
  dot6: typeof ColorPickerDot;
  dot7: typeof ColorPickerDot;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicColorPicker__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicColorPicker__VariantsArgs;
    args?: PlasmicColorPicker__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicColorPicker__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicColorPicker__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicColorPicker__ArgProps,
      internalVariantPropNames: PlasmicColorPicker__VariantProps
    });

    return PlasmicColorPicker__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicColorPicker";
  } else {
    func.displayName = `PlasmicColorPicker.${nodeName}`;
  }
  return func;
}

export const PlasmicColorPicker = Object.assign(
  // Top-level PlasmicColorPicker renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    dot1: makeNodeComponent("dot1"),
    dot2: makeNodeComponent("dot2"),
    dot3: makeNodeComponent("dot3"),
    dot4: makeNodeComponent("dot4"),
    dot5: makeNodeComponent("dot5"),
    dot6: makeNodeComponent("dot6"),
    dot7: makeNodeComponent("dot7"),

    // Metadata about props expected for PlasmicColorPicker
    internalVariantProps: PlasmicColorPicker__VariantProps,
    internalArgProps: PlasmicColorPicker__ArgProps
  }
);

export default PlasmicColorPicker;
/* prettier-ignore-end */
