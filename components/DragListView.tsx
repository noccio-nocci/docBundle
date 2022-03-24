import { HTMLElementRefOf } from '@plasmicapp/react-web';
import { renderToHTML } from 'next/dist/server/render'
import React, { ReactNode } from 'react'
import ReactDragListView, {DragListViewProps} from 'react-drag-listview'

export interface DragListViewPropsWithChildren extends DragListViewProps {
  children?: ReactNode;
};

const DragListView = (props: DragListViewPropsWithChildren, ref: HTMLElementRefOf<"div">) => {
  return (
    <ReactDragListView {...props}>
      {props.children}
    </ReactDragListView>
  )
}

export default DragListView