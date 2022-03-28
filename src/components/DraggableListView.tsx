import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { renderToHTML } from "next/dist/server/render";
import React, { ReactNode } from "react";
import ReactDragListView, {
  DragListViewProps as DragListViewProps,
} from "react-drag-listview";

export interface DraggableListViewPropsWithChildren extends DragListViewProps {
  children?: ReactNode;
}

const DraggableListView = (
  props: DraggableListViewPropsWithChildren,
  ref: HTMLElementRefOf<"div">
) => {
  return <ReactDragListView {...props}>{props.children}</ReactDragListView>;
};

export default DraggableListView;
