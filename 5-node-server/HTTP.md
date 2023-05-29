# HTTP

## HTTP,HTTPs/ V2,V3

- Hypertext Transfer Protocel
- HTTP : text-based, uncompressed headers, one file ad a time inefficient
- HTTPs(V2) : binary based protocol. secure , header compression, multiplexing, Stream Prioritization
- V3 : TCP => UDP
- Request : method, url, headers
- Response : html, status code
- TCP connection

## [Status Code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

- 1xx ~ 5XX

## Request Method

- URL: Uniform Resource Locator
  - protocol/hostname(,port)/pathname/query
- [RequestMethods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- Read : GET, HEAD, OPTIONS, TRACE
- UPDATE : POST, PUT, DELETE, PATCH
- Safe, Idempotent, Cacheable

## [Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

- Stateless Protocol
- Sessions & Cookies
- Standard
  - Authentication: Authorization -> login info
  - User-Agent: system, browser, platform info
  - Content-Length,Content-Type,Content-Language
  - Cache-control
  - CORS
- Custom
  - x- : 2012~(x)
  - domain-key/domain.key(o)
