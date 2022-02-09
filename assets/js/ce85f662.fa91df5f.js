"use strict";(self.webpackChunkhexnicks_docs=self.webpackChunkhexnicks_docs||[]).push([[716],{3905:function(e,n,t){t.d(n,{Zo:function(){return h},kt:function(){return m}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},h=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,d=p["".concat(c,".").concat(m)]||p[m]||k[m]||r;return t?i.createElement(d,s(s({ref:n},h),{},{components:t})):i.createElement(d,s({ref:n},h))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9195:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),s=["components"],a={id:"permissions",title:"Permissions",slug:"/permissions"},c=void 0,l={unversionedId:"permissions",id:"permissions",title:"Permissions",description:"All permissions except hexnicks.nick.other, hexnicks.nonick.other, hexnicks.chat.advanced, and hexnicks.reload are given to all players by default but can be negated by a permissions manager like LuckPerms. Learn how to do that here.",source:"@site/docs/permissions.md",sourceDirName:".",slug:"/permissions",permalink:"/permissions",editUrl:"https://github.com/MajekDev/HexNicks/edit/master/docs/permissions.md",tags:[],version:"current",frontMatter:{id:"permissions",title:"Permissions",slug:"/permissions"},sidebar:"sidebar",previous:{title:"Developers",permalink:"/developers"}},h=[{value:"hexnicks.nick",id:"hexnicksnick",children:[],level:2},{value:"hexnicks.nick.other",id:"hexnicksnickother",children:[],level:2},{value:"hexnicks.nonick",id:"hexnicksnonick",children:[],level:2},{value:"hexnicks.nonick.other",id:"hexnicksnonickother",children:[],level:2},{value:"hexnicks.nickcolor",id:"hexnicksnickcolor",children:[],level:2},{value:"hexnicks.realname",id:"hexnicksrealname",children:[],level:2},{value:"hexnicks.reload",id:"hexnicksreload",children:[],level:2},{value:"hexnicks.chat.advanced",id:"hexnickschatadvanced",children:[],level:2},{value:"hexnicks.color.*",id:"hexnickscolor",children:[],level:2},{value:"hexnicks.color.hex",id:"hexnickscolorhex",children:[],level:2},{value:"hexnicks.color.gradients",id:"hexnickscolorgradients",children:[],level:2},{value:"Blocking Certain Color Usage",id:"blocking-certain-color-usage",children:[],level:2},{value:"How to negate permissions with LuckPerms",id:"how-to-negate-permissions-with-luckperms",children:[],level:2}],k={toc:h};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All permissions except ",(0,r.kt)("inlineCode",{parentName:"p"},"hexnicks.nick.other"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hexnicks.nonick.other"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hexnicks.chat.advanced"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"hexnicks.reload")," are given to all players by default but can be negated by a permissions manager like ",(0,r.kt)("a",{parentName:"p",href:"https://luckperms.net/"},"LuckPerms"),". Learn how to do that ",(0,r.kt)("a",{parentName:"p",href:"#how-to-negate-permissions-with-LuckPerms"},"here"),"."),(0,r.kt)("p",null,"A lot of these permissions are tied to commands, read command documentation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/wiki/Commands"},"here"),"."),(0,r.kt)("h2",{id:"hexnicksnick"},"hexnicks.nick"),(0,r.kt)("p",null,"This permission node allows players to use the command ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/wiki/Commands#nick"},"/nick")," to change their nickname."),(0,r.kt)("h2",{id:"hexnicksnickother"},"hexnicks.nick.other"),(0,r.kt)("p",null,"This permission node is intended for staff and allows them to use the command ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/wiki/Commands#nickother"},"/nickother")," to change the nickname of other players."),(0,r.kt)("h2",{id:"hexnicksnonick"},"hexnicks.nonick"),(0,r.kt)("p",null,"This permission node allows players to use the command ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/wiki/Commands#nonick"},"/nonick")," to remove their nickname."),(0,r.kt)("h2",{id:"hexnicksnonickother"},"hexnicks.nonick.other"),(0,r.kt)("p",null,"This permission node is intended for staff and allows them to remove the nickname of another player using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/wiki/Commands#nonick"},"/nonick"),"."),(0,r.kt)("h2",{id:"hexnicksnickcolor"},"hexnicks.nickcolor"),(0,r.kt)("p",null,"This permission node allows players to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/wiki/Commands#nickcolor"},"/nickcolor")," to change just the color of their nickname."),(0,r.kt)("h2",{id:"hexnicksrealname"},"hexnicks.realname"),(0,r.kt)("p",null,"This permission node allows players to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/wiki/Commands#realname"},"/realname")," to view the name of a player using a certain nickname."),(0,r.kt)("h2",{id:"hexnicksreload"},"hexnicks.reload"),(0,r.kt)("p",null,"This permission node is intended for staff and allows them to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Majekdor/HexNicks/wiki/Commands#nicksreload"},"/nicksreload")," to reload the plugin."),(0,r.kt)("h2",{id:"hexnickschatadvanced"},"hexnicks.chat.advanced"),(0,r.kt)("p",null,"This permission node is a dangerous one to grant as it allows players to inject things like hover events and click-to-run-command events into chat. Players without this permission will only be able to use MiniMessage tags for colors in chat. This permission allows them to use all MiniMessage tags in chat."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read about chat formatting ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MajekDev/HexNicks/wiki/Chat-Formatting"},"here"),".")),(0,r.kt)("h2",{id:"hexnickscolor"},"hexnicks.color.*"),(0,r.kt)("p",null,"This permission node allows players to use all standard color codes (ex. \\<red",">",", \\<dark_blue",">",") in their nicknames. You can specify only specific colors with ",(0,r.kt)("inlineCode",{parentName:"p"},"hexnicks.color.red")," (or any of the other 16 Mincraft color names)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read about color formatting ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MajekDev/HexNicks/wiki/Color-Formatting"},"here"),".")),(0,r.kt)("h2",{id:"hexnickscolorhex"},"hexnicks.color.hex"),(0,r.kt)("p",null,"This permission node allows players to use hex color codes (ex. \\<#aabbcc",">",", \\<color:#aabbcc",">",") in their nicknames."),(0,r.kt)("h2",{id:"hexnickscolorgradients"},"hexnicks.color.gradients"),(0,r.kt)("p",null,"This permission node allows players to use gradients in their nicknames."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See gradient examples here.")),(0,r.kt)("h2",{id:"blocking-certain-color-usage"},"Blocking Certain Color Usage"),(0,r.kt)("p",null,"By default, all players have permission to use all colors. You can view all of the permissions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MajekDev/HexNicks/blob/main/src/main/resources/plugin.yml#L60"},"here"),". To prevent a player from using a certain color code simply negate the permission for the color you want to block."),(0,r.kt)("h2",{id:"how-to-negate-permissions-with-luckperms"},"How to negate permissions with LuckPerms"),(0,r.kt)("p",null,"If you wanted to, for example, only give certain groups permission to use gradients, you would need to negate the permission for the other groups. To do this using LuckPerms, you would run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/lp group <group> permission set hexnicks.nick.gradient false\n")),(0,r.kt)("p",null,"replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"<group>")," with the name of the group you're modifying."))}p.isMDXComponent=!0}}]);