// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jRkyHyW5xUgunu5SjYQV4L
// Component: K3ARz1sXPFg
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
import LoginForm from "../../LoginForm"; // plasmic-import: lyekaetmXI/component
import SideBarLogo from "../../SideBarLogo"; // plasmic-import: QxLaN1qoTo/component
import AddStock from "../../AddStock"; // plasmic-import: -k3H9wKgmJ/component
import SideBarLogout from "../../SideBarLogout"; // plasmic-import: 1WJG8XuDtI/component
import BookList from "../../BookList"; // plasmic-import: JSMOwwEprH/component
import AddBook from "../../AddBook"; // plasmic-import: OGD7Ufmsky/component
import DocumentFrame from "../../DocumentFrame"; // plasmic-import: CWMxFnAAun/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_doc_bundle.module.css"; // plasmic-import: jRkyHyW5xUgunu5SjYQV4L/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: K3ARz1sXPFg/css

import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: K0O_HVvPM/icon
import MyBookIcon from "./icons/PlasmicIcon__MyBook"; // plasmic-import: R2OFeL2RR/icon
import BookshelfIcon from "./icons/PlasmicIcon__Bookshelf"; // plasmic-import: FQZ240wht/icon

export type PlasmicLogin__VariantMembers = {};

export type PlasmicLogin__VariantsArgs = {};
type VariantPropType = keyof PlasmicLogin__VariantsArgs;
export const PlasmicLogin__VariantProps = new Array<VariantPropType>();

export type PlasmicLogin__ArgsType = {};
type ArgPropType = keyof PlasmicLogin__ArgsType;
export const PlasmicLogin__ArgProps = new Array<ArgPropType>();

export type PlasmicLogin__OverridesType = {
  root?: p.Flex<"div">;
  loginForm?: p.Flex<typeof LoginForm>;
  sideBarLogo?: p.Flex<typeof SideBarLogo>;
  bundleList?: p.Flex<"div">;
  addStock?: p.Flex<typeof AddStock>;
  sideBarLogout?: p.Flex<typeof SideBarLogout>;
  stackerList?: p.Flex<"div">;
  addBook?: p.Flex<typeof AddBook>;
  text?: p.Flex<"div">;
  documentFrame?: p.Flex<typeof DocumentFrame>;
};

export interface DefaultLoginProps {}

function PlasmicLogin__RenderFunc(props: {
  variants: PlasmicLogin__VariantsArgs;
  args: PlasmicLogin__ArgsType;
  overrides: PlasmicLogin__OverridesType;

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
            <LoginForm
              data-plasmic-name={"loginForm"}
              data-plasmic-override={overrides.loginForm}
              className={classNames("__wab_instance", sty.loginForm)}
            />
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__nsoH)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__pPuou)}>
                  <SideBarLogo
                    data-plasmic-name={"sideBarLogo"}
                    data-plasmic-override={overrides.sideBarLogo}
                    className={classNames("__wab_instance", sty.sideBarLogo)}
                  />

                  {true ? (
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"bundleList"}
                      data-plasmic-override={overrides.bundleList}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.bundleList)}
                    >
                      <AddStock
                        data-plasmic-name={"addStock"}
                        data-plasmic-override={overrides.addStock}
                        className={classNames("__wab_instance", sty.addStock)}
                      />
                    </p.Stack>
                  ) : null}
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__rPtGk)}
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
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"stackerList"}
                  data-plasmic-override={overrides.stackerList}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.stackerList)}
                >
                  <BookList
                    className={classNames(
                      "__wab_instance",
                      sty.bookList___8JznP
                    )}
                    icon={
                      <StarIcon
                        className={classNames(projectcss.all, sty.svg__w6Mvl)}
                        role={"img"}
                      />
                    }
                    title={"スター付き"}
                  />

                  <BookList
                    className={classNames(
                      "__wab_instance",
                      sty.bookList__fcNPi
                    )}
                    icon={
                      <MyBookIcon
                        className={classNames(projectcss.all, sty.svg__cldws)}
                        role={"img"}
                      />
                    }
                    list={
                      <AddBook
                        data-plasmic-name={"addBook"}
                        data-plasmic-override={overrides.addBook}
                        className={classNames("__wab_instance", sty.addBook)}
                      />
                    }
                    title={"自分のバンドル"}
                  />

                  <BookList
                    className={classNames(
                      "__wab_instance",
                      sty.bookList__hBj4P
                    )}
                    icon={
                      <BookshelfIcon
                        className={classNames(projectcss.all, sty.svg__fwVbJ)}
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
              {true ? (
                <DocumentFrame
                  data-plasmic-name={"documentFrame"}
                  data-plasmic-override={overrides.documentFrame}
                  className={classNames("__wab_instance", sty.documentFrame)}
                />
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
    "loginForm",
    "sideBarLogo",
    "bundleList",
    "addStock",
    "sideBarLogout",
    "stackerList",
    "addBook",
    "text",
    "documentFrame"
  ],
  loginForm: ["loginForm"],
  sideBarLogo: ["sideBarLogo"],
  bundleList: ["bundleList", "addStock"],
  addStock: ["addStock"],
  sideBarLogout: ["sideBarLogout"],
  stackerList: ["stackerList", "addBook", "text"],
  addBook: ["addBook"],
  text: ["text"],
  documentFrame: ["documentFrame"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginForm: typeof LoginForm;
  sideBarLogo: typeof SideBarLogo;
  bundleList: "div";
  addStock: typeof AddStock;
  sideBarLogout: typeof SideBarLogout;
  stackerList: "div";
  addBook: typeof AddBook;
  text: "div";
  documentFrame: typeof DocumentFrame;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogin__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogin__VariantsArgs;
    args?: PlasmicLogin__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogin__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLogin__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLogin__ArgProps,
      internalVariantPropNames: PlasmicLogin__VariantProps
    });

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginForm: makeNodeComponent("loginForm"),
    sideBarLogo: makeNodeComponent("sideBarLogo"),
    bundleList: makeNodeComponent("bundleList"),
    addStock: makeNodeComponent("addStock"),
    sideBarLogout: makeNodeComponent("sideBarLogout"),
    stackerList: makeNodeComponent("stackerList"),
    addBook: makeNodeComponent("addBook"),
    text: makeNodeComponent("text"),
    documentFrame: makeNodeComponent("documentFrame"),

    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
