import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <input onChange={handleChange} type="text" value={inputText} />
        <button>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default InputArea;
