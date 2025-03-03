import React from "react";

export const HelloComponent = () => {
  console.log('environment =',process.env.ENV);

  return <h2>Hello from React</h2>;
};