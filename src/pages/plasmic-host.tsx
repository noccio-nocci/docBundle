import * as React from "react";
import Script from "next/script";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import { PLASMIC } from "../plasmic-init";
import { AppContext } from "next/app";
import App from "next/app";

import DraggableListView from "../components/DraggableListView";

registerComponent(DraggableListView, {
  name: "DraggableListView",
  importPath: "../components/DragListView",
  props: {
    children: "slot",
  },
});

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
