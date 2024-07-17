import React from "react";
import "./public/style.css";
import { directDomControl } from "./script";

export default function App() {
  React.useEffect(() => {
    directDomControl();
  }, []);

  return <div id={"container"}></div>;
}
