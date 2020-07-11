import React from "react";

function Bath (props) {
  return (
    <div id={`bath-${props.bathSize}`}>
      {props.bathSize} Bath
    </div>
  );
}

export default Bath;