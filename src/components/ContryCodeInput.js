import React from "react";

function ContryCodeInput(props) {
  return (
    <div className="ContryCodeInput">
      <div>
        <h3>{props.code}</h3>
      </div>
      <input placeholder="712 213 232" className="input-phone" type="text" />
    </div>
  );
}

export default ContryCodeInput;
