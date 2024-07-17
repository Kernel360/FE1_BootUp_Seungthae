import React from "react";
import './public/style.css'

export default function Box({id,  style, children}){
  return <div id={id} className={`${style} test`}>{children}</div>
}