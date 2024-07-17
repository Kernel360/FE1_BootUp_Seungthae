import React from "react"
import './public/style.css'
import Box from './Box'
import { a } from "./script";

const bgColorClassList = ["bg-red", "bg-green", "bg-blue"];
const textStyleClassList = [
  "text-bold",
  "text-italic",
  "text-strike",
  "text-underline",
];

const getBoxStyleList = (totalBoxCnt = 0) => {
  const boxList = [];
  boxList.length = totalBoxCnt;
  boxList.fill('0',0,totalBoxCnt);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomTextStyle = () => {
    const textStyleIndex = getRandomInt(4);
    const textClass = textStyleClassList[textStyleIndex];
  
    return textClass;
  }

  const getRandomBoxStyle = () => {
    const bgIndex = getRandomInt(3);
    const bgClass = bgColorClassList[bgIndex];
  
    return bgClass;
  }

  for(let i=0; i<totalBoxCnt; i++){
    const newTextStyle = getRandomTextStyle();
    const newBoxStyle = getRandomBoxStyle();
    boxList[i] = `${newTextStyle} ${newBoxStyle}`;
  }

  return boxList;
}

export default function App(){
  React.useEffect(()=>{
     a();
  },[])

  return <div id={'container'}>
    
  </div>
}


// export default function App(){
//   const [boxStyleList, setBoxStyleList] = React.useState(getBoxStyleList(16))
//   const idInputRef = React.useRef(null);
//   const classInputRef = React.useRef(null);
//   const queryInputRef = React.useRef(null);

//   React.useEffect(()=>{
//     console.log(boxStyleList);
//     // a();
//   },[])

//   return <div id={'container'}>
//     {boxStyleList.map((boxStyle, index)=>{
//         const id = index+1;
//         return <Box  key={id} id={id} style={boxStyle}>{id}</Box>
//       })
//     }
//     <div>
//       <div>
//         <span>id </span>
//         <input type="text" />
//       </div>
//       <div>
//         <span>class </span>
//         <input type="text" />
//       </div>
//       <div>
//         <span>query </span>
//         <input type="text" />
//       </div>
//     </div>
    
//   </div>
// }

