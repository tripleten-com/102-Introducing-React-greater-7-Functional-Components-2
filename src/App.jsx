import React from 'react';
import './App.css';

function ConfirmationDialog(props) {
  return (
    <div class="dialog">
      <div class="dialog__body">{props.children}</div>
      <button onClick={props.onConfirm}>Confirm</button>
      <button onClick={props.onCancel}>Cancel</button>
    </div>
  );
}

export default function App() {
  return (
    <ConfirmationDialog
      onConfirm={() => alert("Order confirmed!")}
      onCancel={() => alert("Order cancelled!")}
    >
      Do you really want to place this order? {/* ← This is props.children */}
    </ConfirmationDialog>
  );
}