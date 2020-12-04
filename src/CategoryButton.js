import React from "react";

export default function CategoryButton({ addFilter, tool }) {
  return <button onClick={() => addFilter(tool)}>{tool}</button>;
}
