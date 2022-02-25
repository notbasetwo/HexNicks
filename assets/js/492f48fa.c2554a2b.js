"use strict";(self.webpackChunkhexnicks_docs=self.webpackChunkhexnicks_docs||[]).push([[368],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"color-formatting",title:"Color Formatting",slug:"/color-formatting"},s=void 0,c={unversionedId:"color-formatting",id:"color-formatting",title:"Color Formatting",description:"One of the most important parts of HexNicks is, of course, colors! With the addition of MiniMessage there are now even more ways to customize colors in your nickname. HexNicks can support legacy colors but supports, and encourages, MiniMessage colors.",source:"@site/docs/color-formatting.md",sourceDirName:".",slug:"/color-formatting",permalink:"/color-formatting",editUrl:"https://github.com/MajekDev/HexNicks/edit/main/docs/docs/color-formatting.md",tags:[],version:"current",frontMatter:{id:"color-formatting",title:"Color Formatting",slug:"/color-formatting"},sidebar:"sidebar",previous:{title:"Chat Formatting",permalink:"/chat-formatting"},next:{title:"Commands",permalink:"/commands"}},u=[{value:"MiniMessage Colors",id:"minimessage-colors",children:[],level:2},{value:"Legacy Colors",id:"legacy-colors",children:[],level:2},{value:"Gradients",id:"gradients",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the most important parts of HexNicks is, of course, colors! With the addition of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KyoriPowered/adventure/tree/main/4/text-minimessage"},"MiniMessage")," there are now even more ways to customize colors in your nickname. HexNicks can support legacy colors but supports, and encourages, MiniMessage colors."),(0,a.kt)("h2",{id:"minimessage-colors"},"MiniMessage Colors"),(0,a.kt)("p",null,"MiniMessage uses tags for colors and formatting. Tags have a start tag and an end tag. Start tags are mandatory (obviously), end tags aren\u2019t. ",(0,a.kt)("inlineCode",{parentName:"p"},"<yellow>Hello <blue>World<yellow>!")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<yellow>Hello <blue>World</blue>!")," and even ",(0,a.kt)("inlineCode",{parentName:"p"},"<yellow>Hello </yellow><blue>World</blue><yellow>!</yellow>")," all do the same. Read the full documentation for MiniMessage ",(0,a.kt)("a",{parentName:"p",href:"https://docs.adventure.kyori.net/minimessage/format"},"here"),"."),(0,a.kt)("h2",{id:"legacy-colors"},"Legacy Colors"),(0,a.kt)("p",null,"These are the color codes that a lot of people are still used to. Codes like ",(0,a.kt)("inlineCode",{parentName:"p"},"&a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"&l"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"&x&r&r&g&g&b&b"),". These are called legacy codes because the Minecraft chat, and other things, does not use raw strings anymore. By default, HexNicks will not parse these codes. If you want to use them in your nicknames you need to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"legacy-support")," in the config."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"See config documentation ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MajekDev/HexNicks/wiki/Configuration-Options"},"here"),".")),(0,a.kt)("p",null,"If enabled these codes will be parsed and probably work fine, though you will not receive support for issues relating to legacy codes."),(0,a.kt)("h2",{id:"gradients"},"Gradients"),(0,a.kt)("p",null,"Everyone's favorite thing as of late, gradients! Gradients are parsed using MiniMessage, and you can read the documentation for them ",(0,a.kt)("a",{parentName:"p",href:"https://docs.adventure.kyori.net/minimessage/format#gradient"},"here"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"View nickname examples using gradients ",(0,a.kt)("a",{parentName:"p",href:"https://docs.adventure.kyori.net/minimessage/format#gradient"},"here"),".")))}d.isMDXComponent=!0}}]);