// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: _WwHrFAavc_
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
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
import sty from "./PlasmicSwitch.module.css"; // plasmic-import: _WwHrFAavc_/css

export type PlasmicSwitch__VariantMembers = {
  noLabel: "noLabel";
  isDisabled: "isDisabled";
  isChecked: "isChecked";
};

export type PlasmicSwitch__VariantsArgs = {
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
};

type VariantPropType = keyof PlasmicSwitch__VariantsArgs;
export const PlasmicSwitch__VariantProps = new Array<VariantPropType>(
  "noLabel",
  "isDisabled",
  "isChecked"
);

export type PlasmicSwitch__ArgsType = {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

type ArgPropType = keyof PlasmicSwitch__ArgsType;
export const PlasmicSwitch__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "value",
  "aria-label",
  "aria-labelledby"
);

export type PlasmicSwitch__OverridesType = {
  root?: p.Flex<"div">;
  toggle?: p.Flex<"div">;
  track?: p.Flex<"div">;
  thumb?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultSwitchProps extends pp.SwitchProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

function PlasmicSwitch__RenderFunc(props: {
  variants: PlasmicSwitch__VariantsArgs;
  args: PlasmicSwitch__ArgsType;
  overrides: PlasmicSwitch__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
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
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootisChecked]: hasVariant(variants, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.rootnoLabel]: hasVariant(variants, "noLabel", "noLabel")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"toggle"}
        data-plasmic-override={overrides.toggle}
        className={classNames(projectcss.all, sty.toggle, {
          [sty.toggle___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.toggleisChecked]: hasVariant(variants, "isChecked", "isChecked"),
          [sty.toggleisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          )
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(projectcss.all, sty.track, {
            [sty.track___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.trackisChecked]: hasVariant(
              variants,
              "isChecked",
              "isChecked"
            ),
            [sty.trackisDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            )
          })}
        />

        <div
          data-plasmic-name={"thumb"}
          data-plasmic-override={overrides.thumb}
          className={classNames(projectcss.all, sty.thumb, {
            [sty.thumb___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.thumbisChecked]: hasVariant(variants, "isChecked", "isChecked")
          })}
        />
      </div>

      {(hasVariant(variants, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainernoLabel]: hasVariant(
              variants,
              "noLabel",
              "noLabel"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Switch me",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotTargetChildrenisChecked]: hasVariant(
                variants,
                "isChecked",
                "isChecked"
              ),
              [sty.slotTargetChildrennoLabel]: hasVariant(
                variants,
                "noLabel",
                "noLabel"
              )
            })
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.SwitchProps>(props: P, ref: pp.SwitchRef) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Switch me"
    };
  }

  return pp.useSwitch<P, typeof PlasmicSwitch>(
    PlasmicSwitch,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "toggle", "track", "thumb", "labelContainer"],
  toggle: ["toggle", "track", "thumb"],
  track: ["track"],
  thumb: ["thumb"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggle: "div";
  track: "div";
  thumb: "div";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSwitch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSwitch__VariantsArgs;
    args?: PlasmicSwitch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSwitch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSwitch__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSwitch__ArgProps,
      internalVariantPropNames: PlasmicSwitch__VariantProps
    });

    return PlasmicSwitch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitch";
  } else {
    func.displayName = `PlasmicSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitch = Object.assign(
  // Top-level PlasmicSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggle: makeNodeComponent("toggle"),
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicSwitch
    internalVariantProps: PlasmicSwitch__VariantProps,
    internalArgProps: PlasmicSwitch__ArgProps,

    useBehavior
  }
);

export default PlasmicSwitch;
/* prettier-ignore-end */