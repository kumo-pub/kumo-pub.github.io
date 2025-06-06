"use strict";(self.webpackChunkkumo_website=self.webpackChunkkumo_website||[]).push([[1799],{50046:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var t=i(74848),s=i(28453);const l={},o="Dynamic Loading of Pollux Extensions",r={id:"pollux/develop/dynamic-loading",title:"Dynamic Loading of Pollux Extensions",description:"This generic utility adds extensibility features to load User Defined Functions (UDFs) without having to fork and build Pollux, through the use of shared libraries. Support for connectors and types will be added in the future.",source:"@site/versioned_docs/version-1.1.1/pollux/develop/dynamic-loading.mdx",sourceDirName:"pollux/develop",slug:"/pollux/develop/dynamic-loading",permalink:"/docs/pollux/develop/dynamic-loading",draft:!1,unlisted:!1,tags:[],version:"1.1.1",lastUpdatedBy:"Jeff lothar",lastUpdatedAt:1748143706e3,frontMatter:{},sidebar:"docs",previous:{title:"Window functions",permalink:"/docs/pollux/develop/window"},next:{title:"\u641c\u7d22 UI",permalink:"/docs/category/\u641c\u7d22-ui"}},d={},a=[{value:"Getting Started",id:"getting-started",level:2},{value:"Notes",id:"notes",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"dynamic-loading-of-pollux-extensions",children:"Dynamic Loading of Pollux Extensions"})}),"\n",(0,t.jsx)(n.p,{children:"This generic utility adds extensibility features to load User Defined Functions (UDFs) without having to fork and build Pollux, through the use of shared libraries. Support for connectors and types will be added in the future."}),"\n",(0,t.jsx)(n.p,{children:"This mechanism relies on ABI compatibility, meaning it is only guarenteed to work if the shared libraries and the Pollux build are based on the same Pollux version.\nUsing shared libraries built against a different version of Pollux may result in undefined behavior or runtime errors due to ABI mismatches."}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create a C++ file for your dynamic library"})}),"\n",(0,t.jsxs)(n.p,{children:["For dynamically loaded function registration, the format followed mirrors that of built-in function registration with some noted differences. Using ",(0,t.jsx)(n.code,{children:"DynamicTestFunction.cpp"})," as an example, the function uses the ",(0,t.jsx)(n.code,{children:'extern "C"'})," keyword to protect against name mangling. A ",(0,t.jsx)(n.code,{children:"registry()"})," function call is also necessary."]}),"\n",(0,t.jsx)(n.p,{children:"Make sure to also include the necessary header file:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"\n      #include <pollux/common/dynamic_registry/DynamicUdf.h>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example template for a function with no arguments returning a BIGINT:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'\n      #include <pollux/common/dynamic_registry/DynamicUdf.h>\n\n      namespace example_namespace {\n\n      template <typename T>\n      struct DynamicFunction {\n        MELON_ALWAYS_INLINE bool call(int64_t& result) {\n          // Code to calculate result.\n        }\n      };\n      }\n\n      extern "C" {\n      void registry() {\n        kumo::pollux::register_function<\n            example_namespace::DynamicFunction,\n            int64_t>({"your_function_name"});\n      }\n      }\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Register functions dynamically by creating ",(0,t.jsx)(n.code,{children:".dylib"})," (MacOS) or ",(0,t.jsx)(n.code,{children:".so"})," (Linux) shared libraries"]})}),"\n",(0,t.jsx)(n.p,{children:"These shared libraries may be created using a CMakeLists file like the following:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cmake",children:'\n      add_library(name_of_dynamic_fn SHARED TestFunction.cpp)\n      target_link_libraries(name_of_dynamic_fn PRIVATE fmt::fmt Melon::melon   glog::glog ksimd)\n\n      if(APPLE)\n      set(COMMON_LIBRARY_LINK_OPTIONS "-Wl,-undefined,dynamic_lookup")\n      else()\n      set(COMMON_LIBRARY_LINK_OPTIONS "-Wl,--exclude-libs,ALL")\n      endif()\n\n      target_link_options(name_of_dynamic_fn PRIVATE ${COMMON_LIBRARY_LINK_OPTIONS})\n'})}),"\n",(0,t.jsx)(n.p,{children:"Additional details:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Required Libraries"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"fmt::fmt"}),", ",(0,t.jsx)(n.code,{children:"Melon::melon  "}),", and ",(0,t.jsx)(n.code,{children:"ksimd"})," libraries are required for all necessary symbols to be defined when loading ",(0,t.jsx)(n.code,{children:"TestFunction.cpp"})," dynamically."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"glog::glog"})," library is required on macOS but optional on Linux."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Linking Options"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On ",(0,t.jsx)(n.strong,{children:"macOS"}),": The ",(0,t.jsx)(n.code,{children:"target_link_options"})," (",(0,t.jsx)(n.code,{children:'"-Wl,-undefined,dynamic_lookup"'}),") allow symbols to be resolved at runtime."]}),"\n",(0,t.jsxs)(n.li,{children:["On ",(0,t.jsx)(n.strong,{children:"Linux"}),": The ",(0,t.jsx)(n.code,{children:"target_link_options"})," (",(0,t.jsx)(n.code,{children:'"-Wl,--exclude-libs,ALL"'}),") prevent errors related to symbols being linked both statically and dynamically."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In Pollux, a function's signature is determined solely by its name and argument types. The return type is not taken into account. As a result, if a function with an identical signature is added but with a different return type, it will overwrite the existing function."}),"\n",(0,t.jsx)(n.li,{children:"Function overloading is supported. Therefore, multiple functions can share the same name as long as they differ in the number or types of arguments."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);