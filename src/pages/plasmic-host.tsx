import * as React from "react";
import Script from "next/script";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import { PLASMIC } from "../plasmic-init";
import { AppContext } from "next/app";
import App from "next/app";

import DraggableListView, {
  DraggableListViewMeta,
} from "../components/code_components/DraggableListView";
import Iframe, { iframeMeta } from "../components/code_components/Iframe";

registerComponent(DraggableListView, {
  name: "DraggableListView",
  displayName: "DraggableListView",
  importName: "DraggableListView",
  importPath: "../components/code_components/DraggableListView",
  props: {
    children: "slot",
  },
  defaultStyles: {
    width: "strech",
    height: "hug content",
  },
});
registerComponent(Iframe, iframeMeta);

export default function PlasmicHost() {
  return (
    <div>
      <Script
        src="https://static1.plasmic.app/preamble.js"
        strategy="beforeInteractive"
      />
      <PlasmicCanvasHost />
    </div>
  );
}

const PlasmicHost2 = () => {
  return (
    PLASMIC && (
      <div>
        <Script
          src="https://static1.plasmic.app/preamble.js"
          strategy="beforeInteractive"
        />
        <PlasmicCanvasHost />
      </div>
    )
  );
};

//export default PlasmicHost;
