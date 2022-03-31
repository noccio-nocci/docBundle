import * as React from "react";
import Script from "next/script";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import { PLASMIC } from "../plasmic-init";
import { AppContext } from "next/app";
import App from "next/app";

import DraggableListView, {
  DraggableListViewMeta,
} from "../components/code_components/DraggableListView";

registerComponent(DraggableListView, DraggableListViewMeta);

const PlasmicHost = () => {
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

export default PlasmicHost;
