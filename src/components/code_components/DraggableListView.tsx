import { ComponentMeta } from "@plasmicapp/host";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import React, { ReactNode } from "react";
import ReactDragListView, { DragListViewProps } from "react-drag-listview";

export interface DraggableListProps extends DragListViewProps {
  children?: ReactNode;
  className?: string;
}

export default function DraggableListView({ className }: DraggableListProps) {
  return (
    <div className={className}>
      <ReactDragListView {...props}>{children}</ReactDragListView>
    </div>
  );
}
/*
DraggableListView.defaultProps = {
  nodeSelector: "button",
  handleSelector: "button",
  onDragEnd: (fromIndex: number, toIndex: number) => {
    console.log(fromIndex + " to " + toIndex);
  },
};
*/
export const DraggableListViewMeta = {
  name: "DraggableListView",
  displayName: "DraggableListView",
  importName: "DraggableListView",
  importPath: "../components/code_components/DraggableListView",
  props: {
    children: "slot",
    nodeSelector: {
      type: "string",
      defaultValue: ".draggable",
    },
  },
  defaultStyles: {
    width: "strech",
    height: "hug content",
  },
};
