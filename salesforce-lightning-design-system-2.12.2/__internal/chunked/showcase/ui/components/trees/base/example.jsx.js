var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/trees/base/example.jsx.js"]=function(e){function a(a){for(var l,i,c=a[0],m=a[1],o=a[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(l in m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);for(u&&u(a);d.length;)d.shift()();return n.push.apply(n,o||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],l=!0,c=1;c<t.length;c++){var m=t[c];0!==r[m]&&(l=!1)}l&&(n.splice(a--,1),e=i(i.s=t[0]))}return e}var l={},r={152:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},n=[];function i(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=l,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)i.d(t,l,function(a){return e[a]}.bind(null,l));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],m=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var u=m;return n.push([241,0]),t()}({0:function(e,a){e.exports=React},16:function(e,a){e.exports=ReactDOM},241:function(e,a,t){"use strict";t.r(a),t.d(a,"states",(function(){return M})),t.d(a,"examples",(function(){return D}));var l=t(0),r=t.n(l),n=t(1),i=t.n(n),c=t(2),m=t.n(c),o=t(4),u=t(6);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function h(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function b(e,a){return(b=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function E(e,a){return!a||"object"!==s(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){var a=function(a){return e.termToMark?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:(t=a,l=e.termToMark,t.replace(new RegExp(l,"gi"),(function(e){return"<mark>".concat(e,"</mark>")})))}}):r.a.createElement(r.a.Fragment,null,a);var t,l};return r.a.createElement("div",{className:m()("slds-tree__item",e.className)},r.a.createElement(o.b,{"aria-hidden":"true",assistiveText:"Expand ".concat(e.itemLabel),className:m()("slds-m-right_x-small",(!e.isBranch||e.isDisabled)&&"slds-is-disabled"),iconClassName:"slds-button__icon_small",symbol:"chevronright",tabIndex:"-1",title:"Expand ".concat(e.itemLabel)}),r.a.createElement("span",{className:"slds-has-flexi-truncate"},r.a.createElement("span",{className:"slds-tree__item-label slds-truncate",title:e.itemLabel},a(e.itemLabel)),e.metaTextLabel&&r.a.createElement("span",{className:"slds-tree__item-meta slds-truncate",title:e.metaTextLabel},r.a.createElement("span",{className:"slds-assistive-text"},":"),a(e.metaTextLabel))),e.children)};T.displayName="TreeItem",T.propTypes={children:i.a.node,isBranch:i.a.bool,isDisabled:i.a.bool,itemLabel:i.a.string,metaTextLabel:i.a.string,termToMark:i.a.string},T.defaultProps={itemLabel:"Tree Item"};var v=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&b(e,a)}(c,e);var a,t,l,n,i=(a=c,function(){var e,t=p(a);if(L()){var l=p(this).constructor;e=Reflect.construct(t,arguments,l)}else e=t.apply(this,arguments);return E(this,e)});function c(){return d(this,c),i.apply(this,arguments)}return t=c,(l=[{key:"getBranchAriaLabel",value:function(e,a){return a?e+": "+a:e}},{key:"render",value:function(){var e=this.props,a=e.ariaLevel,t=e.tabIndex,l=e.isBranch,n=e.isExpanded,i=e.isSelected,c=e.itemLabel,m=e.metaTextLabel;return r.a.createElement("li",{"aria-expanded":l?n||!1:null,"aria-label":l?this.getBranchAriaLabel(c,m):null,"aria-level":a,"aria-selected":i,role:"treeitem",tabIndex:t},this.props.children)}}])&&h(t.prototype,l),n&&h(t,n),c}(l.Component);v.displayName="TreeListItem",v.propTypes={ariaLevel:i.a.number.isRequired,children:i.a.node.isRequired,isBranch:Object(u.b)("itemLabel",i.a.bool),isExpanded:Object(u.b)("isBranch",i.a.bool),isSelected:i.a.bool,itemLabel:i.a.string,metaTextLabel:Object(u.b)("itemLabel",i.a.string),tabIndex:i.a.number};var g=function(e){return r.a.createElement("h4",{className:"slds-tree__group-header",id:e.id},e.children)};g.displayName="TreeHeader",g.propTypes={children:i.a.node,id:i.a.string.isRequired};var f=function(e){return r.a.createElement("ul",{"aria-labelledby":e.headerId,className:"slds-tree",id:e.id,role:"tree"},e.children)};f.displayName="TreeList",f.propTypes={children:i.a.node,headerId:i.a.string,id:i.a.string};var y=function(e){return r.a.createElement("ul",{role:"group"},e.children)};y.displayName="TreeGroup",y.propTypes={children:i.a.node};var B=function(e){return r.a.createElement("div",{className:"slds-tree_container"},e.children)};B.displayName="TreeContainer",B.propTypes={children:i.a.node};var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ariaLevel:1,tabIndex:0},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"},r.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};x.displayName="DefaultTree";var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ariaLevel:1,tabIndex:0},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"},r.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};I.displayName="ExpandedTree";var _=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ariaLevel:1},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2,isSelected:!0,tabIndex:0},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1},r.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};_.displayName="SelectedTree";var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ariaLevel:1,tabIndex:0},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:2,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:3},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:3},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:3,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:4},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:3,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:4},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:4},r.a.createElement(T,{itemLabel:"Another Tree Item with Really Really Long Text That Should Truncate"})),r.a.createElement(v,{ariaLevel:4},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:4,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:5},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:5},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:5},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:4},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:3},r.a.createElement(T,null)))))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1},r.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};S.displayName="DeeplyNestedTree";var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ariaLevel:1,tabIndex:0},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2,itemLabel:"Tree Item",metaTextLabel:"Tree Item Metatext with a Really Really Long Name That Should Truncate"},r.a.createElement(T,{itemLabel:"Tree Item",metaTextLabel:"Tree Item Metatext with a Really Really Long Name That Should Truncate"})))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch",metaTextLabel:"Tree Branch Metatext"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch",metaTextLabel:"Tree Branch Metatext"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1},r.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};N.displayName="MetaTextTree";var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ariaLevel:1,tabIndex:0},r.a.createElement(T,{className:"slds-is-hovered"})),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"},r.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};R.displayName="TreeWithItemHovered";var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ariaLevel:1,tabIndex:0},r.a.createElement(T,null)),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,isDisabled:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"Tree Branch"},r.a.createElement(T,{isBranch:!0,isDisabled:!0,itemLabel:"Tree Branch"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))),r.a.createElement(v,{ariaLevel:1,itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"},r.a.createElement(T,{itemLabel:"Tree Item with a Really Really Long Name That Should Truncate"})))};k.displayName="TreeWithItemDisabled";var w=t(5),O=t(10),j=t(9),M=(a.default=r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Tree Group Header"),r.a.createElement(f,{headerId:"treeheading"},r.a.createElement(x,null))),[{id:"expanded",label:"Expanded",element:r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Tree Group Header"),r.a.createElement(f,{headerId:"treeheading"},r.a.createElement(I,null)))},{id:"selected",label:"Item Selected",element:r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Tree Group Header"),r.a.createElement(f,{headerId:"treeheading"},r.a.createElement(_,null)))},{id:"deep-nesting",label:"Deeply nested branches",element:r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Tree Group Header"),r.a.createElement(f,{headerId:"treeheading"},r.a.createElement(S,null)))},{id:"metatext",label:"Metatext",element:r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Tree Group Header"),r.a.createElement(f,{headerId:"treeheading"},r.a.createElement(N,null)))},{id:"item-hovered",label:"Item Hovered",element:r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Tree Group Header"),r.a.createElement(f,{headerId:"treeheading"},r.a.createElement(R,null)))},{id:"item-disabled",label:"Item Disabled",element:r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Tree Group Header"),r.a.createElement(f,{headerId:"treeheading"},r.a.createElement(k,null)))}]),D=[{id:"filterable-tree",label:"Fliterable Tree",element:r.a.createElement("div",null,r.a.createElement("div",{className:"slds-m-bottom_small"},r.a.createElement(w.b,{hasHiddenLabel:!0,hasLeftIcon:!0,inputId:"filter-id",labelContent:"Filter navigation items"},r.a.createElement(j.UtilityIcon,{className:"slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default",sprite:"utility",symbol:"search"}),r.a.createElement(O.a,{"aria-controls":"tree-id",id:"filter-id",placeholder:"Quick Find",type:"search"}))),r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Components"),r.a.createElement(f,{headerId:"treeheading",id:"tree-id"},r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"lightning",tabIndex:0},r.a.createElement(T,{isBranch:!0,itemLabel:"lightning"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2,itemLabel:"lightning-button"},r.a.createElement(T,{itemLabel:"lightning-button"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"lightning-checkbox-button"},r.a.createElement(T,{itemLabel:"lightning-checkbox-button"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"lightning-radio-button"},r.a.createElement(T,{itemLabel:"lightning-radio-button"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"lightning-toggle",metaTextLabel:"vaiant a checkbox button"},r.a.createElement(T,{itemLabel:"lightning-toggle",metaTextLabel:"variant a checkbox button"})))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"ui"},r.a.createElement(T,{isBranch:!0,itemLabel:"ui"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2,itemLabel:"ui:button"},r.a.createElement(T,{itemLabel:"ui:button"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"ui:checkboxButton"},r.a.createElement(T,{itemLabel:"ui:checkboxButton"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"ui:radioButton"},r.a.createElement(T,{itemLabel:"ui:radioButton"})))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,itemLabel:"lightningcommunities",metaTextLabel:"Community components"},r.a.createElement(T,{isBranch:!0,itemLabel:"lightningcommunities",metaTextLabel:"Community components"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2},r.a.createElement(T,null)))))))},{id:"filterabled-tree",label:"Flitered Tree",element:r.a.createElement("div",null,r.a.createElement("div",{className:"slds-m-bottom_small"},r.a.createElement(w.b,{hasHiddenLabel:!0,hasLeftIcon:!0,inputId:"filter-id",labelContent:"Filter navigation items"},r.a.createElement(j.UtilityIcon,{className:"slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default",sprite:"utility",symbol:"search"}),r.a.createElement(O.a,{"aria-controls":"tree-id",defaultValue:"butto",id:"filter-id",placeholder:"Quick Find",type:"search"}))),r.a.createElement(B,null,r.a.createElement(g,{id:"treeheading"},"Components"),r.a.createElement(f,{headerId:"treeheading",id:"tree-id"},r.a.createElement(v,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"lightning",tabIndex:0},r.a.createElement(T,{isBranch:!0,itemLabel:"lightning"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2,itemLabel:"lightning-button"},r.a.createElement(T,{itemLabel:"lightning-button",termToMark:"butto"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"lightning-checkbox-button"},r.a.createElement(T,{itemLabel:"lightning-checkbox-button",termToMark:"butto"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"lightning-radio-button"},r.a.createElement(T,{itemLabel:"lightning-radio-button",termToMark:"butto"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"lightning-toggle",metaTextLabel:"vaiant a checkbox button"},r.a.createElement(T,{itemLabel:"lightning-toggle",metaTextLabel:"variant a checkbox button",termToMark:"butto"})))),r.a.createElement(v,{ariaLevel:1,isBranch:!0,isExpanded:!0,itemLabel:"ui"},r.a.createElement(T,{isBranch:!0,itemLabel:"ui"}),r.a.createElement(y,null,r.a.createElement(v,{ariaLevel:2,itemLabel:"ui:button"},r.a.createElement(T,{itemLabel:"ui:button",termToMark:"butto"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"ui:checkboxButton"},r.a.createElement(T,{itemLabel:"ui:checkboxButton",termToMark:"butto"})),r.a.createElement(v,{ariaLevel:2,itemLabel:"ui:radioButton"},r.a.createElement(T,{itemLabel:"ui:radioButton",termToMark:"butto"})))))))}]}});