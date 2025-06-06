"use strict";(self.webpackChunkkumo_website=self.webpackChunkkumo_website||[]).push([[1815],{66747:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=s(74848),t=s(28453);const o={sidebarDepth:1,sitemap:{priority:.7}},l="\u505c\u7528\u8bcd",c={id:"api/kmsearch/stopwords",title:"\u505c\u7528\u8bcd",description:"\u505c\u7528\u8bcd\u662f\u5728\u641c\u7d22\u65f6\u4ece\u641c\u7d22\u67e5\u8be2\u4e2d\u5220\u9664\u7684\u5173\u952e\u5b57\u3002",source:"@site/versioned_docs/version-1.1.1/api/kmsearch/stopwords.mdx",sourceDirName:"api/kmsearch",slug:"/api/kmsearch/stopwords",permalink:"/docs/api/kmsearch/stopwords",draft:!1,unlisted:!1,tags:[],version:"1.1.1",lastUpdatedBy:"Jeff lothar",lastUpdatedAt:1748081772e3,frontMatter:{sidebarDepth:1,sitemap:{priority:.7}},sidebar:"api",previous:{title:"\u540c\u4e49\u8bcd",permalink:"/docs/api/kmsearch/synonyms"},next:{title:"\u8fde\u63a5JOINs",permalink:"/docs/api/kmsearch/joins"}},d={},i=[{value:"\u6dfb\u52a0\u505c\u7528\u8bcd",id:"\u6dfb\u52a0\u505c\u7528\u8bcd",level:2},{value:"\u5728\u641c\u7d22\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u505c\u7528\u8bcd",id:"\u5728\u641c\u7d22\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u505c\u7528\u8bcd",level:2},{value:"\u83b7\u53d6\u6240\u6709\u505c\u7528\u8bcd\u96c6",id:"\u83b7\u53d6\u6240\u6709\u505c\u7528\u8bcd\u96c6",level:2},{value:"\u83b7\u53d6\u7279\u5b9a\u7684\u505c\u7528\u8bcd\u96c6",id:"\u83b7\u53d6\u7279\u5b9a\u7684\u505c\u7528\u8bcd\u96c6",level:2},{value:"\u66f4\u65b0\u505c\u7528\u8bcd",id:"\u66f4\u65b0\u505c\u7528\u8bcd",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u505c\u7528\u8bcd",children:"\u505c\u7528\u8bcd"})}),"\n",(0,r.jsx)(n.p,{children:"\u505c\u7528\u8bcd\u662f\u5728\u641c\u7d22\u65f6\u4ece\u641c\u7d22\u67e5\u8be2\u4e2d\u5220\u9664\u7684\u5173\u952e\u5b57\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a"})," \u5728\u7d22\u5f15\u8fc7\u7a0b\u4e2d\u4e0d\u4f1a\u5220\u9664\u505c\u7528\u8bcd\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6dfb\u52a0\u505c\u7528\u8bcd",children:"\u6dfb\u52a0\u505c\u7528\u8bcd"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"en"})," \u8bed\u8a00\u73af\u5883\uff08\u53ef\u9009\uff09\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(n.code,{children:"stopword_set1"})," \u7684\u505c\u7528\u8bcd\u96c6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl "http://localhost:8868/stopwords/stopword_set1" -X PUT \\\n    -H "X-KUMOSEARCH-API-KEY: ${KUMOSEARCH_API_KEY}" \\\n    -d \'{\n        "stopwords": ["Germany", "France", "Italy", "United States"], \n        "locale": "en"\n    }\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6210\u529f\u6dfb\u52a0\u505c\u7528\u8bcd\u96c6\u540e\uff0c\u6211\u4eec\u4f1a\u6536\u5230\u5982\u4e0b\u54cd\u5e94\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "stopword_set1",\n  "locale": "en",\n  "stopwords": [\n    "states","united","france","germany","italy"\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\u77ed\u8bed ",(0,r.jsx)(n.code,{children:"United States"})," \u662f\u4f5c\u4e3a\u4e24\u4e2a\u4e0d\u540c\u7684\u5355\u8bcd\u6dfb\u52a0\u7684\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5728\u641c\u7d22\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u505c\u7528\u8bcd",children:"\u5728\u641c\u7d22\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u505c\u7528\u8bcd"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u641c\u7d22\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"stopwords"})," \u53c2\u6570\u4f20\u9012\u4e00\u4e2a\u505c\u7528\u8bcd\u96c6\uff0c\u505c\u7528\u8bcd\u96c6\u4e2d\u5b58\u5728\u7684\u5173\u952e\u8bcd\u5c06\u4ece\u641c\u7d22\u67e5\u8be2\u4e2d\u5220\u9664\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl "http://localhost:8868/multi_search" -X POST \\\n    -H "X-KUMOSEARCH-API-KEY: ${KUMOSEARCH_API_KEY}" \\\n    -d \'{\n      "searches": [\n        {\n          "collection": "books",\n          "q": "the"\n          "query_b": "title"\n          "stopwords": "stopword_set1",\n        }\n      ]\n    }\'\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u83b7\u53d6\u6240\u6709\u505c\u7528\u8bcd\u96c6",children:"\u83b7\u53d6\u6240\u6709\u505c\u7528\u8bcd\u96c6"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5217\u8868\u7aef\u70b9\u83b7\u53d6\u6240\u6709\u505c\u7528\u8bcd\u96c6\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -H "X-KUMOSEARCH-API-KEY: ${KUMOSEARCH_API_KEY}" \\\n  "http://localhost:8868/stopwords"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u83b7\u53d6\u7279\u5b9a\u7684\u505c\u7528\u8bcd\u96c6",children:"\u83b7\u53d6\u7279\u5b9a\u7684\u505c\u7528\u8bcd\u96c6"}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u83b7\u53d6\u4e0e\u7279\u5b9a\u505c\u7528\u8bcd\u96c6\u5173\u8054\u7684\u505c\u7528\u8bcd\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -H "X-KUMOSEARCH-API-KEY: ${KUMOSEARCH_API_KEY}" \\\n  "http://localhost:8868/stopwords/countries" \n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u66f4\u65b0\u505c\u7528\u8bcd",children:"\u66f4\u65b0\u505c\u7528\u8bcd"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u53ef\u4ee5\u7528\u4e00\u7ec4\u65b0\u7684\u505c\u7528\u8bcd\u8986\u76d6\u73b0\u6709\u7684\u505c\u7528\u8bcd\u96c6\u3002\u4f8b\u5982\uff0c\u8981\u8986\u76d6\u5173\u8054\u7684\u505c\u7528\u8bcd\u96c6\u5e76\u8bbe\u7f6e\u65b0\u7684\u505c\u7528\u8bcd ",(0,r.jsx)(n.code,{children:"countries"}),"\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl "http://localhost:8868/stopwords/countries" -X PUT \\\n  -H "X-KUMOSEARCH-API-KEY: ${KUMOSEARCH_API_KEY}" \\\n  -d \'{"stopwords": ["Germany", "France", "Italy"], "locale": "en"}\'\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(96540);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);