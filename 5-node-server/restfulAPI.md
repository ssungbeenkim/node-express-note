# RESTful API

## RESTful API 란 무엇인가?

- API: Application Programming Interface
- RESTful: Representational State Transfer
- URL의 형태로 요청, data를 response
- 심플하게는 HTTP method 4가지를 이용해서 RUL을 디자인 하는 것.
- 보다 정확하게는 서버 소프트웨어 아키텍쳐를 디자인하는 스타일을 말한다.
- 웹서비스를 만들 때 지켜야 하는 가이드라인
- HTTP가 한창 개발되던 시기에 표준화에 기여하던 Roy Fielding이 박사논문으로 고안해냄.
- 진정한 Resrful System을 따라가는 서버를 만들려면 URL을 잘 디자인 하는 것 뿐 아니라 HATEOAS를 반영하여 모든 링크를 제공해 주어 가이드라인을 제공해 주어야 한다. but 그렇게 완벽하게 만드는 곳은 거의 없다.

## Designing WEB APIs

- CRUD: POST GET PUT DELETE
- ACTION + WAHT : GET /posts/post

## Rest APIs Examples

- [YoutubeAPI](https://developers.google.com/youtube/v3/docs/videos/list) : 전형적인 사례. 보통 이렇게 링크 리스트는 없게 제공되고 있기에 문서를 확인한다.
- [GithubAPI](https://developer.github.com/v3/) : 드물지만 모범적인 사례. 사용 가능한 모든 url정보가 포함되어 있다.
