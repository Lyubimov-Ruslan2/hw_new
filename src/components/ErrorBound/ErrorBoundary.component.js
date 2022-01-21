import React from "react";
import "./ErrorBoundary.styles.css";

function ErrorBoundary(props) {
  const ErrText = () => (
    <h2>
      Oops, something went wrong... We are doing our best to fix the issue
    </h2>
  );

  let isOk = true;

  return <>{isOk ? props.children : <ErrText />}</>;
}

export default ErrorBoundary;
