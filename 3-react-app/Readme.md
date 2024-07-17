 # bootup - 3 & 4

 ## 수행 내용
 ### 3 & 4
 - react, babel, webpack 관련 패키지를 설치해 create-react-app 없이 간단하게 react 프로젝트를 세팅했습니다. 
 ## 어려웠던 점
 - 웹팩 기반 지식이 부족해서 왜 안되는지 원인을 찾을 수 없는 것이 어려웠습니다.
 ## 새롭게 알게된 점
 웹팩의 resolve 속성에 대해서 알게되었습니다.

 웹팩 데브 서버를 실행하려다 실패한 로그.
 ```
ERROR in ./index.js 3:0-24
Module not found: Error: Can't resolve ~'./App' in '/Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app'~
resolve './App' in '/Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app'
  using description file: /Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app/package.json (relative path: .)
    Field 'browser' doesn't contain a valid alias configuration
    using description file: /Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app/package.json (relative path: ./App)
      no extension
        Field 'browser' doesn't contain a valid alias configuration
        /Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app/App doesn't exist
      .js
        Field 'browser' doesn't contain a valid alias configuration
        /Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app/App.js doesn't exist
      .json
        Field 'browser' doesn't contain a valid alias configuration
        /Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app/App.json doesn't exist
      .wasm
        Field 'browser' doesn't contain a valid alias configuration
        /Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app/App.wasm doesn't exist
      as directory
        /Users/gimseungtae/Desktop/GIT/FE1_BootUp_Seungthae/3-react-app/App doesn't exist

webpack 5.93.0 compiled with 1 error in 442 ms
 ```
 원인은 바로 확장자를 찾지 못해서 발생한 문제였습니다.
```
// index.js
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
// 확장자를 찾지 못해서 발생하는 문제.

const root = createRoot(document.getElementById('root'));

root.render(<App />);
```
이를 해결하려면 webpack.config.js에서 resolve.extension을 사용해야합니다.
```
// webpack.config.js

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
```

출처: https://webpack.kr/configuration/resolve/#resolveextensions

 ## 단계를 진행하며 느낀 점
당연하게 쓸 수 있던 것들이 사실은 당연하지 않았다.</br>
위의 문제와 jsx에선 React에서 import해야하지 않아서 문제도 있었는데 개발자 경험을 향상시킨 분들께 감사하자...