
# kernel 360 boot-up : 웹 환경 직접 설정해보기
## 1. DOM Manipulation
### 수행 내용
* 페이지를 새로고침하면 <div>박스 16개의 배경색, 폰트 종류가 랜덤으로 변하게 만듦
- 3개의 버튼 (배경색 바꾸는 버튼, 폰트 종류 바꾸는 버튼, 모든 요소 reset하는 버튼) 의 개별 input에 `selector` (`id`,`className`)를 입력하면 그 selector를 가지는 **요소들의 각 속성을 바꿔주는 기능**을 구현
    - DOM함수 `queryselector`, `eventhandler`

### 어려웠던 점
* form 요소, handler에 대해 애매하게 알고있어서 더 해매기 시작한 것 같다
### 새롭게 알게된 점
* dom application이 제공하는 함수들을 적절히 활용하면 훨씬 효율적으로 할 수 있다.
### 단계를 진행하며 느낀점
* queryselector, eventhandler, form submit에 대해 정확히 알아둬야겠다.
* 노션이 아닌 readme에 성실히 요약하면서 잘 활용하즈앗..
* 나머지 form완성해서 오늘까지 꼭 완성하잣...

## 2. Babel & Webpack
### 수행 내용 
* babek, webpack 수동 설정
### 어려웠던 점
* 혹여나 터미널을 잘못 입력해서 시스템에 오류를 일으키지는 않을까하면서 한 명령어를 실행하기 전에 지나치게 여러문서들을 찾아보는데에 시간을 많이 쓴 게 된 것 같ㅌ다...
### 새롭게 알게된 점
* babel : es6 이전 js 로 변환해줌,webpack : js 하나의 파일로 합쳐줌
* package.json파일을 새로 설정해보면서 각 요소가 무엇을 의미하는지 한번이라도 더 찾아보게 되어서 좋았다.
* webpack chunk
* code splitting , bundle analyzer로 번들 크기 확인 가능 -> 페이지 무거울 때 확인 가능 
* cdn 서비스  bundle.js 이름을 똑같이 하면 업데이트 했음에도 인지하지 못하는 문제 발생가능 -> .js하나로 만드는 경우 잘 없음
* 최적화 -> nextjs : next/dynamic
### 단계를 진행하며 느낀점
* 직접 환경을 세팅해보면서 확실히 도움이 되는 것 같다
* 혼자 너무 오랜시간 서치만 하지 말고 멘토님께 바로 문의드리자..!
## 3. 리액트 개발 환경 처음부터 세팅해보기
  
    
> git 
* 코드 수정하기 전에 git pull받아서 remote랑 동기화 필수 
* 코드 컨벤션 작성해보기
### 수행 내용
1. `html, css,js` 단일 파일로부터 시작하여 npm init으로 package.json생성
2. `react` 설치 - react, react-dom , html파일에 Root DOM node 손수 추가
3. `babel` 패키지 installing
4. `webpack` 설치 및 연동
- html-webpack-plugin , Webpack Dev Server , webpack.config.js
### 어려웠던 점
* webpack -> package.json scripts? or webpack.config.js scripts?
### 새롭게 알게된 점
* babel, webpack이 있어야 ???이 된다 
* webpack.config.js설정과정
* (entry, plugin의 filename 등) 과정에서 공식문서를 앍고 정확한 답을 찾아내는 것이 쉽지 않았다. 
### 단계를 진행하며 느낀점
- scripts.js, index.js, index.html 등의 역할을 분명히 알아야겠다.

## 4. 세팅한 리액트 개발 환경으로 프로젝트 포팅 해보기
### 수행 내용 
1. `App.jsx` 파일 <- 기존 html코드 변환해서 넣기
2. div 16개 생성하는 기존 코드 : `useEffect훅` 사용하여 컴포넌트 마운트 이후 실행되도록 변경
3. `scripts.js에서 export 처리된 이벤트 핸들러`를  `import하여 App.jsx에서 사용
4. `index.js 에서 ReactDOM.createRoot()`하여 App컴포넌트 렌더링
5. `package.json`에 `start` 스크립트 작성
- "start": "webpack serve --mode development --port 3000"
6. CSS loader 연동하여 style.css연결
### 어려웠던 점
* webpack.con" fig.js설정과정
    * (entry, plugin의 filename 등) 과정에서 공식문서를 앍고 정확한 답을 찾아내는 것이 쉽지 않았다.  
### 새롭게 알게된 점
* html, css , js등 하나로 합쳐서 -> single page application
> 에러 핸들링 팁
- 터미널 확인 -> 브라우저 console 확인
- 익숙지 않은 에러도 이해하려고 노력하면 그 안에 원인이 녹아있다 
- 오류 정말 못 찾겠으면 한줄마다 console.log()찍어보면 된다 (like 청진기)
### 단계를 진행하며 느낀점
* 오늘 직접 세팅한 환경과 cra 환경을 비교해보고 복습해보자.



