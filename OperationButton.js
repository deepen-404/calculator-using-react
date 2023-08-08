import React from "react";
import { ACTIONS } from "./App.js";

export default function OperationButton(props) {
  const { dispatch, operation } = props; // Destructuring from props

  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
