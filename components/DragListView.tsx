import { renderToHTML } from 'next/dist/server/render'
import React from 'react'
import ReactDragListView from 'react-drag-listview'

const DragListView = ({...props}: React.PropsWithChildren<{}>) => {
  const that = this;
  const dragProps = {
    ...props,
    onDragEnd(fromIndex: number, toIndex: number) {
      const data = [...that.state.data];
      const item = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, item);
      that.setState({ data });
    },
    nodeSelector: 'button',
    handleSelector: 'button'
  }

  return (
    <ReactDragListView {...dragProps}>
      {props.children}
    </ReactDragListView>
  )
}

export default DragListView