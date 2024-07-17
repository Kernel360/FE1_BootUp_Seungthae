 # bootup
 ## 수행 내용
 ### 1-dom
 - html과 js를 연결하여서 사용자의 동작에 따라 dom이 반응하는 간단한 사이트를 만들었습니다.
 ### 2-babel
 - webpack과 babel이 js에 어떻게 적용이 되는지 간단하게나마 흐름을 파악했습니다. 
 ## 어려웠던 점
1. dom 관리
- element를 생성하고 관리하는 것이 어려웠습니다. 코드의 분할과 응집에 신경써야겠다고 생각했습니다.

2. 설정
 ```
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "default" }]
            ]
          }
        }
      }
    ]
  }
```

 이 코드에서 왜 babel loader가 제대로 동작하는지 알 수 없었습니다.
 ES5에 맞추려면 아래와 같이 써야했습니다.
```
  presets: [
    ['@babel/preset-env']
  ]
// 타겟을 지정하지 않은 경우: Babel은 가능한 가장 오래된 브라우저를 타깃팅한다고 가정합니다. 
// 예를 들어 @babel/preset-env는 모든 ES2015-ES2020 코드를 ES5와 호환되도록 변환합니다.
```

 
 ## 새롭게 알게된 점
webpack과 babel을 왜 쓰는지 피상적으로나마 알 수 있었습니다.
### babel
- target을 어떻게 설정해야하는지에 대해서 알 수 있었습니다.
### webpack
- 트리쉐이킹에 대한 개념.[https://ui.toast.com/weekly-pick/ko_20180716]

 ## 단계를 진행하며 느낀점
1. 먼저 구조를 생각해보고 코드를 짜면 좋을 것 같았습니다. 반복되고 중복된 코드들이 많았습니다. 클래스나 체이닝을 설계했다면 더욱 좋을 것 같았습니다.
  또한 가독성에 더욱 집중하면 좋을 것 같다는 생각이 들었습니다.
2. babel로 변환된 코드를 직접적으로 비교해보며, es6의 문법이 변화한 모습이 흥미로웠습니다. 변환된 이후, 로직의 효율이 변경되는지 궁금해졌습니다.