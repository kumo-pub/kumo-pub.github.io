"use strict";(self.webpackChunkkumo_website=self.webpackChunkkumo_website||[]).push([[39304],{34074:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=i(74848),c=i(28453);const r={date:"01/10/2024"},d="\u6559\u7a0b\uff1a\u4ece\u57fa\u4e8e Git \u7684\u6ce8\u518c\u8868\u5b89\u88c5\u4f9d\u8d56\u9879",l={id:"kmpkg/consume/git-registries",title:"\u6559\u7a0b\uff1a\u4ece\u57fa\u4e8e Git \u7684\u6ce8\u518c\u8868\u5b89\u88c5\u4f9d\u8d56\u9879",description:"\u4e86\u89e3\u5982\u4f55\u4ece kmpkg \u57fa\u4e8e Git \u7684\u6ce8\u518c\u8868\u5b89\u88c5\u8f6f\u4ef6\u5305\u3002",source:"@site/docs/kmpkg/consume/git-registries.mdx",sourceDirName:"kmpkg/consume",slug:"/kmpkg/consume/git-registries",permalink:"/docs/next/kmpkg/consume/git-registries",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Jeff lothar",lastUpdatedAt:1748081772e3,frontMatter:{date:"01/10/2024"},sidebar:"docs",previous:{title:"\u6559\u7a0b\uff1a\u5b89\u88c5\u672c\u5730\u4fee\u6539\u7684\u4f9d\u8d56\u9879",permalink:"/docs/next/kmpkg/consume/install-locally-modified-package"},next:{title:"\u5bf9\u4e13\u7528 Git \u5b58\u50a8\u5e93\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1",permalink:"/docs/next/kmpkg/users/authentication"}},t={},o=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"1 - \u521b\u5efa\u4e00\u4e2a\u9879\u76ee",id:"create-a-project",level:2},{value:"2 - \u521b\u5efa\u6e05\u5355\u548c\u914d\u7f6e\u6587\u4ef6",id:"create-the-manifest-and-configuration-files",level:2},{value:"3 -\u5c06\u79c1\u6709\u6ce8\u518c\u8868\u6dfb\u52a0\u5230\u60a8\u7684 kmpkg \u914d\u7f6e\u6587\u4ef6\u4e2d",id:"add-private-registries-to-your-kmpkg-configuration-file",level:2},{value:"4 - \u4ece\u6ce8\u518c\u8868\u5b89\u88c5\u5305",id:"install-packages-from-a-registry",level:2},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u6559\u7a0b\u4ece\u57fa\u4e8e-git-\u7684\u6ce8\u518c\u8868\u5b89\u88c5\u4f9d\u8d56\u9879",children:"\u6559\u7a0b\uff1a\u4ece\u57fa\u4e8e Git \u7684\u6ce8\u518c\u8868\u5b89\u88c5\u4f9d\u8d56\u9879"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e86\u89e3\u5982\u4f55\u4ece kmpkg \u57fa\u4e8e Git \u7684\u6ce8\u518c\u8868\u5b89\u88c5\u8f6f\u4ef6\u5305\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["kmpkg \u4f7f\u7528\u79f0\u4e3a\u6ce8\u518c\u8868\u7684\u6982\u5ff5\u6765\u7ba1\u7406\u5305\u7684\u5b58\u50a8\u5e93\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ckmpkg \u67e5\u627e\u6765\u81ea ",(0,s.jsx)(n.a,{href:"https://gitee.com/kumo-pub/kmpkg",children:"kmpkg"})," \u4e0a\u7684\u516c\u5171\u7ba1\u7406\u6ce8\u518c\u8868\u7684\u5e93\u3002\u60a8\u53ef\u4ee5\u6dfb\u52a0\n\u7b2c\u4e09\u65b9\u6216\u79c1\u4eba\u6ce8\u518c\u8868\u4ee5\u63d0\u4f9b\u53ef\u4f9b\u5b89\u88c5\u7684\u5176\u4ed6\u8f6f\u4ef6\u5305\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u5173\u521b\u5efa\u81ea\u5df1\u7684\u6ce8\u518c\u8868\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb",(0,s.jsx)(n.a,{href:"/docs/next/kmpkg/produce/publish-to-a-git-registry",children:"\u5c06\u5305\u53d1\u5e03\u5230\u6ce8\u518c\u8868"})," \u7684\u6559\u7a0b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u518c\u8868\u662f\u4f7f\u7528\u914d\u7f6e\u7684",(0,s.jsx)(n.a,{href:"/docs/next/kmpkg/reference/kmpkg-configuration-json",children:(0,s.jsx)(n.code,{children:"kmpkg-configuration.json"})})," \u6587\u4ef6\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-a-project",children:"\u521b\u5efa\u9879\u76ee"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-the-manifest-and-configuration-files",children:"\u521b\u5efa\u6e05\u5355\u548c\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"#add-private-registries-to-your-kmpkg-configuration-file",children:["\u5c06\u79c1\u6709\u6ce8\u518c\u8868\u6dfb\u52a0\u5230\u60a8\u7684 ",(0,s.jsx)(n.code,{children:"kmpkg"})," \u914d\u7f6e\u6587\u4ef6"]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#install-packages-from-a-registry",children:"\u4ece\u81ea\u5b9a\u4e49\u6ce8\u518c\u8868\u5b89\u88c5\u8f6f\u4ef6\u5305"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5148\u51b3\u6761\u4ef6",children:"\u5148\u51b3\u6761\u4ef6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e00\u4e2a\u7ec8\u7aef"}),"\n",(0,s.jsx)(n.li,{children:"\u4e00\u4e2aC++\u7f16\u8bd1\u5668"}),"\n",(0,s.jsx)(n.li,{children:"kmpkg"}),"\n",(0,s.jsx)(n.li,{children:"CMake"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-project",children:"1 - \u521b\u5efa\u4e00\u4e2a\u9879\u76ee"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u65b0\u6587\u4ef6\u5939\u4e2d\uff0c\u521b\u5efa\u4ee5\u4e0b\u9879\u76ee\u6587\u4ef6\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["\u6e90\u6587\u4ef6\uff08",(0,s.jsx)(n.code,{children:"main.cpp"}),"\uff09\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <beison.h>\n\nint main()\n{\n    beison::Object obj;\n    obj.insert("name", beison::Value::string("demo"));\n    std::cout << beison::stringify(obj) << std::endl;\n    return 0;\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["CMake \u9879\u76ee\u6587\u4ef6 (",(0,s.jsx)(n.code,{children:"CMakeLists.txt"}),")\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"cmake_minimum_required(VERSION 3.18)\n\nproject(demo CXX)\n\nadd_executable(main main.cpp)\n\nfind_package(beicode CONFIG REQUIRED)\nfind_package(beison CONFIG REQUIRED)\ntarget_link_libraries(main PRIVATE beicode::beicode beison::beison)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"create-the-manifest-and-configuration-files",children:"2 - \u521b\u5efa\u6e05\u5355\u548c\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Console",children:"kmpkg new --application\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"new"})," \u547d\u4ee4\u521b\u5efa\u4e24\u4e2a\u6587\u4ef6\uff1a\u4e00\u4e2a\u6e05\u5355 (",(0,s.jsx)(n.code,{children:"kmpkg.json"}),") \u6587\u4ef6\u548c\u4e00\u4e2a\u914d\u7f6e\uff08",(0,s.jsx)(n.code,{children:"kmpkg-configuration.json"}),"\uff09\u6587\u4ef6\u3002\u901a\u5e38\uff0c\u8be5\u547d\u4ee4\u9700\u8981 ",(0,s.jsx)(n.code,{children:"--name"})," \u548c\u8981\u63d0\n\u4f9b ",(0,s.jsx)(n.code,{children:"--version"})," \u53c2\u6570\uff0c\u4f46\u7531\u4e8e\u672c\u6559\u7a0b\u662f\u6700\u7ec8\u7528\u6237\u5e94\u7528\u7a0b\u5e8f\uff0c\u56e0\u6b64\u6211\u4eec\u4f7f\u7528\n\u6539\u4e3a ",(0,s.jsx)(n.code,{children:"--application"})," \u9009\u9879\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684\u6587\u4ef6\u5c06\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"kmpkg.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"kmpkg-configuration.json"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "default-registry": {\n    "kind": "git",\n    "baseline": "7476f0d4e77d3333fbb249657df8251c28c4faae",\n    "repository": "https://gitee.com/kumo-pub/kmpkg"\n  },\n  "registries": [\n    {\n      "kind": "artifact",\n      "location": "https://gitee.com/kumo-pub/kmpkg-ce-catalog/archive/refs/heads/main.zip",\n      "name": "microsoft"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6\u5305\u542b\u4e24\u4e2a\u6ce8\u518c\u8868\u5b9a\u4e49\u3002\u6307\u5411\u7684",(0,s.jsx)(n.code,{children:"default-registry"}),(0,s.jsx)(n.a,{href:"https://gitee.com/kumo-pub/kmpkg",children:"kmpkg"})," \u4e0a\u7cbe\u9009\u7684 kmpkg \u6ce8\u518c\u8868\uff0c\u4f7f\u7528\u6700\u65b0\u7684\u63d0\u4ea4\u4f5c\u4e3a\n",(0,s.jsx)(n.a,{href:"/docs/next/kmpkg/users/versioning#baselines",children:"baseline"}),"\uff0c\u4ee5\u53ca\u4e00\u4e2a\u989d\u5916\u7684",(0,s.jsx)(n.code,{children:"artifacts"}),"\u6ce8\u518c\u8868\uff0c\u7528\u4e8e\n\u672c\u6559\u7a0b\u7684\u76ee\u7684\u662f\u4e0d\u5fc5\u8981\u7684\uff0c\u53ef\u4ee5\u5220\u9664\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"add-private-registries-to-your-kmpkg-configuration-file",children:"3 -\u5c06\u79c1\u6709\u6ce8\u518c\u8868\u6dfb\u52a0\u5230\u60a8\u7684 kmpkg \u914d\u7f6e\u6587\u4ef6\u4e2d"}),"\n",(0,s.jsxs)(n.p,{children:["\u6e90\u4ee3\u7801\u5f15\u7528\u4e86 kmpkg \u7b56\u5212\u7684\u6ce8\u518c\u8868\u4e2d\u4e0d\u53ef\u7528\u7684\u4e24\u4e2a\u5e93\u3002\u5728\u4e3a\u4e86\u6ee1\u8db3\u8fd9\u4e9b\u4f9d\u8d56\u5173\u7cfb\uff0c\u6211\u4eec\u9700\u8981\u6dfb\u52a0",(0,s.jsx)(n.a,{href:"https://gitee.com/kumo-pub/kmpkg",children:"kmpkg"})," \u4f5c\u4e3a\u9644\u52a0\u6ce8\u518c\u8868\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06",(0,s.jsx)(n.code,{children:"kmpkg-configuration.json"}),"\u7684\u5185\u5bb9\u4fee\u6539\u4e3a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "default-registry": {\n    "kind": "git",\n    "baseline": "7476f0d4e77d3333fbb249657df8251c28c4faae",\n    "repository": "https://gitee.com/kumo-pub/kmpkg"\n  },\n  "registries": [\n    {\n      "kind": "git",\n      "repository": "https://gitee.com/kumo-pub/kmpkg-docs",\n      "reference": "kmpkg-registry",\n      "baseline": "768f6a3ad9f9b6c4c2ff390137690cf26e3c3453",\n      "packages": [ "beicode", "beison" ]\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0\u5916\u90e8\u6ce8\u518c\u8868\u4f5c\u4e3a ",(0,s.jsx)(n.code,{children:"beicode"})," \u548c ",(0,s.jsx)(n.code,{children:"beison"})," \u7684\u6e90\n\u5305\u3002\u5176\u4ed6\u6ce8\u518c\u8868\u5fc5\u987b\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u663e\u5f0f\u58f0\u660e\u5b83\u4eec\u63d0\u4f9b\u7684\u5305\n",(0,s.jsx)(n.code,{children:'"packages"'})," \u5217\u8868\u3002  \u5f53 kmpkg \u5c06\u5305\u540d\u79f0\u89e3\u6790\u5230\u6ce8\u518c\u8868\u65f6\uff0c\u5728\u4ee5\u4e0b\u4f4d\u7f6e\u627e\u4e0d\u5230\u4efb\u4f55\u5305\u540d\u79f0\uff1a\n\u9644\u52a0\u6ce8\u518c\u8868\u5c06\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"default-registry"}),"\u3002\u4e86\u89e3\u66f4\u591a\u5173\u4e8e",(0,s.jsx)(n.a,{href:"/docs/next/kmpkg/concepts/package-name-resolution",children:"\u5305\u540d\u79f0\n\u6ce8\u518c\u8868\u6587\u6863\u4e2d\u7684\u5206\u8fa8\u7387"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"install-packages-from-a-registry",children:"4 - \u4ece\u6ce8\u518c\u8868\u5b89\u88c5\u5305"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06\u6ce8\u518c\u8868\u6dfb\u52a0\u5230\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u65e0\u9700\u6267\u884c\u4efb\u4f55\u7279\u6b8a\u64cd\u4f5c\u4ece\u4e2d\u5b89\u88c5\u8f6f\u4ef6\u5305\u3002 kmpkg \u4f1a\u900f\u660e\u5730\u5c06 ",(0,s.jsx)(n.code,{children:"kmpkg.json"})," \u4e2d\u7684\u5305\u540d\u79f0\u89e3\u6790\u4e3a\n\u9075\u5faa\u901a\u5e38\u7684\u5b89\u88c5\u673a\u5236\u65f6\u6b63\u786e\u7684\u6ce8\u518c\u8868\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"kmpkg.json"})," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"beicode"})," \u548c ",(0,s.jsx)(n.code,{children:"beison"})," \u4f9d\u8d56\u9879\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Console",children:"kmpkg add port beicode beison\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6784\u5efa\u5e76\u8fd0\u884c\u9879\u76ee\uff08\u5c06 ",(0,s.jsx)(n.code,{children:"$KMPKG_ROOT"})," \u66ff\u6362\u4e3a\u60a8\u7684 kmpkg \u5b89\u88c5\u8def\u5f84\uff09\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Console",children:"cmake -B build -S . -DCMAKE_TOOLCHAIN_FILE=$KMPKG_ROOT/scripts/buildsystems/kmpkg.cmake\ncmake --build build\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c\u7a0b\u5e8f\uff0c\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Console",children:'{\n    "name": "demo"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u540e\u7eed\u6b65\u9aa4",children:"\u540e\u7eed\u6b65\u9aa4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/docs/next/kmpkg/users/versioning.concepts",children:"versioning"})," \u9501\u5b9a\u53ef\u91cd\u590d\u6784\u5efa\u7684\u7248\u672c"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/docs/next/kmpkg/users/binarycaching",children:"\u4e8c\u8fdb\u5236\u7f13\u5b58"})," \u5728\u672c\u5730\u6216\u6301\u7eed\u96c6\u6210\u8fd0\u884c\u4e2d\u91cd\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528\u81ea\u5b9a\u4e49",(0,s.jsx)(n.a,{href:"/docs/next/kmpkg/maintainers/registries",children:"\u6ce8\u518c\u8868"})," \u7ba1\u7406\u60a8\u7684\u79c1\u6709\u5e93"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(96540);const c={},r=s.createContext(c);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);