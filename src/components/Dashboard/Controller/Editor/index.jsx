import React from "react"
import { connect } from "react-redux";

import { changeSource } from "actions";

const editor = ({ dispatch, source }) => {
  let textarea;
  const onChange = (e) => {
    dispatch(changeSource(textarea.value))
  }

  return (
    <div id="editor">
      <textarea
        className="textarea"
        value={source}
        ref={node => textarea = node}
        onChange={onChange}
      />
    </div>
  )
}

export default connect(
  ({ source }, ownProps) => ({ source: source })
)(editor)
