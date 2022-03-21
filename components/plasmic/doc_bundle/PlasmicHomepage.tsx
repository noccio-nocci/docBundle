// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: L26Nao6P2lck
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
import SideBarLogo from "../../SideBarLogo"; // plasmic-import: QxLaN1qoTo/component
import SideBarBookTitle from "../../SideBarBookTitle"; // plasmic-import: cpDlPT0ZyV/component
import AddStock from "../../AddStock"; // plasmic-import: -k3H9wKgmJ/component
import SideBarLogout from "../../SideBarLogout"; // plasmic-import: 1WJG8XuDtI/component
import BookList from "../../BookList"; // plasmic-import: JSMOwwEprH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: L26Nao6P2lck/css

import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: K0O_HVvPM/icon
import MyBookIcon from "./icons/PlasmicIcon__MyBook"; // plasmic-import: R2OFeL2RR/icon
import BookshelfIcon from "./icons/PlasmicIcon__Bookshelf"; // plasmic-import: FQZ240wht/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  docs?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>("docs");

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  sideBarLogo?: p.Flex<typeof SideBarLogo>;
  sideBarBookTitle?: p.Flex<typeof SideBarBookTitle>;
  docs?: p.Flex<"div">;
  addStock?: p.Flex<typeof AddStock>;
  sideBarLogout?: p.Flex<typeof SideBarLogout>;
  rightPane?: p.Flex<"div">;
  bundlesList?: p.Flex<"div">;
  starsList?: p.Flex<typeof BookList>;
  ownList?: p.Flex<typeof BookList>;
  allList?: p.Flex<typeof BookList>;
  text?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            <div className={classNames(projectcss.all, sty.freeBox___2Nyxn)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__liMl0)}>
                  <SideBarLogo
                    data-plasmic-name={"sideBarLogo"}
                    data-plasmic-override={overrides.sideBarLogo}
                    className={classNames("__wab_instance", sty.sideBarLogo)}
                  />

                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___3LwNx
                      )}
                    >
                      {true ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__znuqZ
                          )}
                        >
                          <SideBarBookTitle
                            data-plasmic-name={"sideBarBookTitle"}
                            data-plasmic-override={overrides.sideBarBookTitle}
                            className={classNames(
                              "__wab_instance",
                              sty.sideBarBookTitle
                            )}
                          />

                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"docs"}
                            data-plasmic-override={overrides.docs}
                            hasGap={true}
                            className={classNames(projectcss.all, sty.docs)}
                          >
                            {p.renderPlasmicSlot({
                              defaultContents: null,
                              value: args.docs
                            })}
                          </p.Stack>

                          {true ? (
                            <AddStock
                              data-plasmic-name={"addStock"}
                              data-plasmic-override={overrides.addStock}
                              className={classNames(
                                "__wab_instance",
                                sty.addStock
                              )}
                            />
                          ) : null}
                        </p.Stack>
                      ) : null}
                    </div>
                  ) : null}
                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___1AlMz
                      )}
                    >
                      <SideBarLogout
                        data-plasmic-name={"sideBarLogout"}
                        data-plasmic-override={overrides.sideBarLogout}
                        className={classNames(
                          "__wab_instance",
                          sty.sideBarLogout
                        )}
                      />
                    </div>
                  ) : null}
                </div>
              ) : null}
              {true ? (
                <div
                  data-plasmic-name={"rightPane"}
                  data-plasmic-override={overrides.rightPane}
                  className={classNames(projectcss.all, sty.rightPane)}
                >
                  {true ? (
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"bundlesList"}
                      data-plasmic-override={overrides.bundlesList}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.bundlesList)}
                    >
                      <BookList
                        data-plasmic-name={"starsList"}
                        data-plasmic-override={overrides.starsList}
                        className={classNames("__wab_instance", sty.starsList)}
                        icon={
                          <StarIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__f21T
                            )}
                            role={"img"}
                          />
                        }
                        title={"スター付き"}
                      />

                      <BookList
                        data-plasmic-name={"ownList"}
                        data-plasmic-override={overrides.ownList}
                        className={classNames("__wab_instance", sty.ownList)}
                        icon={
                          <MyBookIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__frQy8
                            )}
                            role={"img"}
                          />
                        }
                        list={null}
                        title={"自分のバンドル"}
                      />

                      <BookList
                        data-plasmic-name={"allList"}
                        data-plasmic-override={overrides.allList}
                        className={classNames("__wab_instance", sty.allList)}
                        icon={
                          <BookshelfIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__wPTaP
                            )}
                            role={"img"}
                          />
                        }
                        title={
                          <div
                            data-plasmic-name={"text"}
                            data-plasmic-override={overrides.text}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {"すべてのバンドル"}
                          </div>
                        }
                      />
                    </p.Stack>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "sideBarLogo",
    "sideBarBookTitle",
    "docs",
    "addStock",
    "sideBarLogout",
    "rightPane",
    "bundlesList",
    "starsList",
    "ownList",
    "allList",
    "text"
  ],
  sideBarLogo: ["sideBarLogo"],
  sideBarBookTitle: ["sideBarBookTitle"],
  docs: ["docs"],
  addStock: ["addStock"],
  sideBarLogout: ["sideBarLogout"],
  rightPane: [
    "rightPane",
    "bundlesList",
    "starsList",
    "ownList",
    "allList",
    "text"
  ],
  bundlesList: ["bundlesList", "starsList", "ownList", "allList", "text"],
  starsList: ["starsList"],
  ownList: ["ownList"],
  allList: ["allList", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideBarLogo: typeof SideBarLogo;
  sideBarBookTitle: typeof SideBarBookTitle;
  docs: "div";
  addStock: typeof AddStock;
  sideBarLogout: typeof SideBarLogout;
  rightPane: "div";
  bundlesList: "div";
  starsList: typeof BookList;
  ownList: typeof BookList;
  allList: typeof BookList;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideBarLogo: makeNodeComponent("sideBarLogo"),
    sideBarBookTitle: makeNodeComponent("sideBarBookTitle"),
    docs: makeNodeComponent("docs"),
    addStock: makeNodeComponent("addStock"),
    sideBarLogout: makeNodeComponent("sideBarLogout"),
    rightPane: makeNodeComponent("rightPane"),
    bundlesList: makeNodeComponent("bundlesList"),
    starsList: makeNodeComponent("starsList"),
    ownList: makeNodeComponent("ownList"),
    allList: makeNodeComponent("allList"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
