자주 쓰는 npm 명령어 list

$ npm ll : 디펜던시 리스트
$ npm ll -g : 글로벌로 설치된 라이브러리 목록
$ npm ll -g --depth=0 라이브러리 설치한 목록 제외하고 보여줌

$ npm view [libraryname] : 라이브러리 정보 보기
ex) npm view nodemon

$ npm i, add , install : 라이브러리 설치
$ npm un (libraryname) : 라이브러리 삭제

[버전 업데이트]
$ npm outdated : 라이브러리들의 버전 정보 (-g)
$ npm update (libraryname) : 업데이트 하기

[개발 모드로 설치하기]
$ npm i nodemon --save-dev : 개발 모드로 설치

🚨 중요 노트
npm에서 글로벌로 패키지를 설치하실때 왠만하면 sudo(파워 권한)로 설치 하시지 않는게 좋아요. 보안에 안전하지 않아서 최대한 피해야 한답니다 😱

npm에서 무언가 설치하실때 권한 이슈가 나오면 아래와 같이 해보세요:

sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

https://stackoverflow.com/questions/47252451/permission-denied-when-installing-npm-modules-in-osx/47252840
