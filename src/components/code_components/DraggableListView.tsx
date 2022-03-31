import { ComponentMeta } from "@plasmicapp/host";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import React, { ReactNode } from "react";
import ReactDragListView, { DragListViewProps } from "react-drag-listview";

export interface DraggableListProps extends DragListViewProps {
  list?: ReactNode;
  className?: string;
}

const DraggableListView = (props: DraggableListProps) => {
  return (
    <div className={props.className}>
      <ReactDragListView {...props}>{props.list}</ReactDragListView>
    </div>
  );
};

DraggableListView.defaultProps = {
  nodeSelector: "button",
  handleSelector: "button",
  onDragEnd: (fromIndex: number, toIndex: number) => {
    console.log(fromIndex + " to " + toIndex);
  },
};

export const DraggableListViewMeta: ComponentMeta<DraggableListProps> = {
  name: "DraggableListView",
  displayName: "DraggableListView",
  importName: "DraggableListView",
  importPath: "./components/code_components/DraggableListView",
  props: {
    list: "slot",
    nodeSelector: {
      type: "string",
      defaultValue: ".draggable",
    },
    handleSelector: {
      type: "string",
      defaultValue: ".draggable",
    },
  },
  defaultStyles: {
    width: "stretch",
    height: "hug content",
  },
};

export default DraggableListView;
