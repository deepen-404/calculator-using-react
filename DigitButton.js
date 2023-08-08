import React from "react";
import { ACTIONS } from "./App.js";

export default function DigitButton(props) {
  const { dispatch, digit } = props; // Destructuring from props

  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
