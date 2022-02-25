"use strict";(self.webpackChunkhexnicks_docs=self.webpackChunkhexnicks_docs||[]).push([[997],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5862:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],c={id:"commands",title:"Commands",slug:"/commands"},l=void 0,s={unversionedId:"commands",id:"commands",title:"Commands",description:"The main plugin command you'll be using is /nick to change your nickname, but all of the commands in the plugin are explained below. This page will reference color codes a lot, you can read about color formatting here.",source:"@site/docs/commands.md",sourceDirName:".",slug:"/commands",permalink:"/commands",editUrl:"https://github.com/MajekDev/HexNicks/edit/main/docs/docs/commands.md",tags:[],version:"current",frontMatter:{id:"commands",title:"Commands",slug:"/commands"},sidebar:"sidebar",previous:{title:"Color Formatting",permalink:"/color-formatting"},next:{title:"Configuration Options",permalink:"/config-options"}},m=[{value:"/nick",id:"nick",children:[],level:2},{value:"/nickother",id:"nickother",children:[],level:2},{value:"/nonick",id:"nonick",children:[],level:2},{value:"/nickcolor",id:"nickcolor",children:[],level:2},{value:"/realname",id:"realname",children:[],level:2},{value:"/nicksreload",id:"nicksreload",children:[],level:2}],u={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The main plugin command you'll be using is ",(0,o.kt)("inlineCode",{parentName:"p"},"/nick")," to change your nickname, but all of the commands in the plugin are explained below. This page will reference color codes a lot, you can read about color formatting ",(0,o.kt)("a",{parentName:"p",href:"https://hexnicks.majek.dev/color-formatting"},"here"),"."),(0,o.kt)("h2",{id:"nick"},"/nick"),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/nick <nickname>")),(0,o.kt)("p",null,"This is the command players will use to change their nickname. It requires one argument (the nickname) and unless you disable ",(0,o.kt)("inlineCode",{parentName:"p"},"require-alphanumeric")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/blob/5e480816a07544ce998be1acb7392b1e31b06a17/src/main/resources/config.yml#L14"},"config")," then the nickname may only contain valid color codes, letters, and numbers. If you want nicknames with spaces, special characters, etc. then go ahead and disable that config option."),(0,o.kt)("h2",{id:"nickother"},"/nickother"),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/nickother <player> <nickname>")),(0,o.kt)("p",null,"This is a staff command for changing the nicknames of other players. It requires two arguments, the name of the player whose nickname to change and the nickname itself. The target player must be online in order to change their nickname. This command follows the same rules as ",(0,o.kt)("inlineCode",{parentName:"p"},"/nick")," (see above) in regards to alphanumeric nicknames."),(0,o.kt)("p",null,"In earlier versions of the plugin, you could use a player name as an argument in ",(0,o.kt)("inlineCode",{parentName:"p"},"/nick")," to change another player's nickname. This was confusing and annoying for nicknames with spaces, so changing another player's nickname has been broken out into it's own command."),(0,o.kt)("h2",{id:"nonick"},"/nonick"),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/nonick [player]")),(0,o.kt)("p",null,"This command is used to remove either your (the player running the command) or another player's nickname (if you're staff). This will set the player's display name back to the player's username and remove the nickname from storage."),(0,o.kt)("h2",{id:"nickcolor"},"/nickcolor"),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/nickcolor <color>")),(0,o.kt)("p",null,"This is an interesting command. It was actually added due to a user request. This command will allow you to change just the color of your nickname, so it only accepts valid color codes. If you include any additional characters the command will not work. You would use this command in a situation where, for example, your nickname is red and you want to keep the same text but make the color blue."),(0,o.kt)("h2",{id:"realname"},"/realname"),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/realname <nickname>")),(0,o.kt)("p",null,"This command will return the username of the specified nickname. It requires one argument, the nickname, and will try to match that nickname to a player. It will tab complete the nicknames of all online players and if the plugin is running on Paper, you can hover on the tab completed nickname to view it with colors."),(0,o.kt)("h2",{id:"nicksreload"},"/nicksreload"),(0,o.kt)("p",null,"Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"/nicksreload")),(0,o.kt)("p",null,"This is a staff command for reloading the plugin to apply configuration changes."))}p.isMDXComponent=!0}}]);