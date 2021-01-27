(function(){'use strict';// lockHeader allows you to trigger classes the viewport changes position
function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}// #---------------------------------------# //
// #---- Decorator (ss-a11y-vert-list) ----# //
/*@ngInject*/function ssA11yVertList(){function e(e,o){e.on('keydown',function(r){var l=document.activeElement,d=s(e,o);d.some(function(t){return null==t.attr('tabindex')})&&d.forEach(t);var u=d.length-1,c=d.findIndex(function(e){return e[0]===l}),p=-1===c?0:c+1;p>u&&(p=0);var m=-1===c?u:c-1;0>m&&(m=u);var g=d[p],h=d[m];switch(r.key){case'ArrowDown':n(g),i(r);break;case'ArrowUp':n(h),i(r);break;case'Enter':case' ':if(-1===c)return;d[c][0].click(),i(r);break;default:}}),e.on('keyup',function(e){switch(e.key){case'ArrowDown':case'ArrowUp':i(e);break;default:}})}function t(e){var t=-1===e[0].tabIndex&&null==e.attr('tabindex');t?e.attr('tabindex','-1'):e.attr('tabindex',e[0].tabIndex)}function n(e){t(e),e[0].focus()}function s(e,t){return Array.from(e[0].querySelectorAll(t)).map(function(t){return angular.element(t)})}function i(e){e.stopPropagation(),e.preventDefault()}var o=function(t){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,t),createClass(n,[{key:'link',// linking function for decorator directive
value:function(t,n,s){var i=s.ssA11yVertList||'.select-menu-list-item';e(n,i)}}]),n}(Decorator);return new o}// #-- END Decorator (ss-a11y-vert-list) --# //
// #---------------------------------------# //
// #----------------------------------# //
// #---- Decorator (ss-bind-html) ----# //
/*@ngInject*/function ssBindHtml(e){var t=new Map,n=function(n){function s(){return classCallCheck(this,s),possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return inherits(s,n),createClass(s,[{key:'link',value:function(n,s,i){null==i.ssBindHtmlNoWatch&&n.$watch(i.ssBindHtml,function(){var o=n.$eval(i.ssBindHtml);null==o||(0!==o.indexOf('<')&&(o='<span>'+o+'</span>'),!t.has(o)&&t.set(o,e(o)),t.get(o)(n,function(e){s.empty(),s.append(e)}))})}}]),s}(Decorator);return new n}// #-- END Decorator (ss-bind-html) --# //
// #----------------------------------# //
// #-----------------------------------# //
// #---- Decorator (ss-focus-bind) ----# //
/*@ngInject*/function ssFocusBind(e,t,n){var s=function(s){function i(){return classCallCheck(this,i),possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return inherits(i,s),createClass(i,[{key:'link',// linking function for decorator directive
value:function(s,i,o){var r=!1,l=t(o.ssFocusBind).assign;s.$watch(o.ssFocusBind,function(t){r||('none'===n.getStyles(i).display?e(function(){i[0][t?'focus':'blur']()},10):i[0][t?'focus':'blur']()),r=!1}),i.on('focus',function(){s.$root.safeApply(function(){r=// key
// key
!0// reverse order
// reverse order
/* abort on reject */,l(s,!0),s.$emit('focusBind',!0)})}),i.on('blur',function(){s.$root.safeApply(function(){r=!0,l(s,!1),s.$emit('focusBind',!1)})})}}]),i}(Decorator);return new s}// #-- END Decorator (ss-focus-bind) --# //
// #-----------------------------------# //
// #----------------------------------------# //
// #---- Decorator (ss-hide-when-empty) ----# //
/*@ngInject*/function ssHideWhenEmpty(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'link',value:function(e,t){function n(t){var e=t.children();return!e.length&&0===t.text().replace(i,'').length}function s(){t.remove()}var i=/\s/g;e.$applyAsync(function(){if(n(t))return void s();var e=t.children(),i=[].concat(toConsumableArray(e)).filter(function(e){return'none'===e.style.display||(e=angular.element(e),!!e.hasClass('hide')||n(e))});i.length===e.length&&s()})}}]),t}(Decorator);return new e}// #-- END Decorator (ss-hide-when-empty) --# //
// #----------------------------------------# //
// #-----------------------------# //
// #---- Decorator (ss-href) ----# //
/*@ngInject*/function ssHref(){return{restrict:'A',link:function(e,t,n){var s=e.routeData.module,i=n.ssHref;i.startsWith('/')||(i='/'+i),t.attr('href','/'+s+i)}}}// #-- END Decorator (ss-href) --# //
// #-----------------------------# //
// #-----------------------------# //
// #---- Decorator (ss-menu) ----# //
/*@ngInject*/function ssMenu(e,t,n){var s=function(s){function i(){return classCallCheck(this,i),possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return inherits(i,s),createClass(i,[{key:'link',// linking function for decorator directive
value:function(s,i,o){function r(t){angular.element(t.target.parentElement).hasClass('is-disabled')||(v=!0,l())}function l(e){if(!(!1===e&&i.hasClass('ss-menu-closed'))){null==e&&(e=i.hasClass('ss-menu-closed'));var o=e?'ss-menu-closed':'ss-menu-open',r=e?'ss-menu-open':'ss-menu-closed';if(y.length||(y=u(),!!y.length)){if(i.addClass(r),y.addClass(r),i.removeClass(o),y.removeClass(o),e){var d=t.isOutOfViewport(y);d.right&&y.addClass('ss-menu-vp-right'),d.bottom&&y.addClass('ss-menu-vp-bottom')}else y.removeClass('ss-menu-vp-right'),y.removeClass('ss-menu-vp-bottom');s.$emit(r,i,y);var c=function e(t){switch(t.key){case'Tab':if(!g)break;// if we ARE supposed to hide on blur, fall through
case'Escape':l(!1),y.off('keydown',e);default:}};e?(y[0].focus(),y.on('keydown',c),n(f,!1)):(i[0].focus(),y.off('keydown',c),n(h,!1))}}}function d(){v||l(!1),setTimeout(function(){v=!1},0)}function u(){if(null!=y&&y.length)return y;var e=i[0].getElementsByClassName(p);return(0===e.length&&(e=i.parent()[0].getElementsByClassName(p)),e=angular.element(e),0===e.length)?e:(e.addClass('ss-menu-closed'),e.attr('tabindex','-1'),c(e),e)}function c(e){m||e.on('click',function(t){t.stopImmediatePropagation()})}var p=o.ssMenu||'dropdown',m=null!=o.hideOnSelect,g=null!=o.hideOnBlur,h=function(){},f=function(){},y=u(),v=!1;// starts as noop
// starts as noop
'string'==typeof o.ssMenuOnClose&&(h=function(){s.$eval(o.ssMenuOnClose),s.$root.safeApply()}),'string'==typeof o.ssMenuOnOpen&&(f=function(){s.$eval(o.ssMenuOnOpen),s.$root.safeApply()});var b=-1===i[0].tabIndex&&null==i.attr('tabindex');b&&i.attr('tabindex','-1'),s.$applyAsync(function(){i.addClass('ss-menu-closed')}),y.length&&y.addClass('ss-menu-closed'),i.on('click',r),i.on('keydown',function(t){['Enter',' ','ArrowDown','ArrowUp'].includes(t.key)&&(t.preventDefault(),r(t))}),e.on('click',d),s.$on('$destroy',function(){return e.off('click',d)}),s.$on('$destroy',s.$root.$on('ss-menu-close',d))}}]),i}(Decorator);return new s}// #-- END Decorator (ss-menu) --# //
// #-----------------------------# //
// #-----------------------------------# //
// #---- Decorator (ss-modal-view) ----# //
/*@ngInject*/function ssModalView(e,t){/**
	  * buildVisibilityExpression - build an expression that represents this element
	  * being shown or hidden in the view
	  *
	  * @param  {Object} attrs - the attributes on this element
	  * @return {String}       - an angular expressions statement
	  */function n(e){var t='';return null==e.ngIf?null==e.ngShow?null!=e.ngHide&&(t.length&&(t+=' && '),t+='!('+e.ngHide+')'):(t.length&&(t+=' && '),t+='('+e.ngShow+')'):t+='('+e.ngIf+')','!!('+t+')'}/**
	  * addModal - show or queue this modal
	  *
	  * @param  {Element} elem - angular.element to add
	  */function s(e){d===e||u.includes(e)||(null==d?d=e:(e.addClass('ss-modal-view-hidden'),u.push(e)),!l&&(l=!0,r.addClass('shown'),o.css('overflow','hidden')))}/**
	  * removeModal - remove this modal element
	  *
	  * @param  {Element} elem - angular.element to remove
	  */function i(e){if(d===e)d=u.length?u.shift():null,null!=d&&d.removeClass('ss-modal-view-hidden');else{e.removeClass('ss-modal-view-hidden');var t=u.indexOf(e);0<=t&&u.splice(t,1)}0===u.length&&null==d&&(r.removeClass('shown'),l=!1,o.css('overflow','auto'))}var o=e.find('body'),r=angular.element(e[0].getElementById('modal-fade')),l=!1,d=null,u=[],c={primary:'ss-modal-view-pri',pri:'ss-modal-view-pri',negative:'ss-modal-view-neg',neg:'ss-modal-view-neg',positive:'ss-modal-view-pos',pos:'ss-modal-view-pos'},p=function(e){function o(){return classCallCheck(this,o),possibleConstructorReturn(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return inherits(o,e),createClass(o,[{key:'link',value:function(e,o,r){// calculate an expression that will tell us when this modal element
// is visible on the page
var l=n(r);// if there's no expression, it means there's no show/hide directive
return'!!()'===l?void t.error('SS-MODAL-VIEW => ng-if or ng-show/hide is required to show/hide the modal view',o[0]):void(e.$on('$destroy',function(){return i(o)}),e.$watch(l,function(e){!0===e?s(o):!1==e&&i(o)}),o.addClass('ss-modal-view'),r.ssModalView.length&&null!=c[r.ssModalView]?o.addClass(c[r.ssModalView]):r.ssModalView.length&&t.error('SS-MODAL-VIEW => '+r.ssModalView+' is not a valid modal style',o[0]));// if the modal element's scope is destroyed (maybe via ng-if) then
// we need to remove it from our list of modals
}}]),o}(Decorator);return new p}// #-- END Decorator (ss-modal-view) --# //
// #-----------------------------------# //
// #----------------------------------------------# //
// #---- Decorator (ss-multi-item-truncation) ----# //
/*@ngInject*/function ssMultiItemTruncation(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'link',// linking function for decorator directive
value:function(e,t){var n=t[0],s=n.offsetWidth,i=angular.element(t).children(),o=100/i.length,r={display:'inline-block',"vertical-align":'text-bottom'// set the initial CSS props for each element
};Array.from(i).forEach(function(e,t){0!==t&&Object.assign(r,{"margin-left":'0.5em'}),angular.element(e).css(r)}),setTimeout(function(){// get the total width of all items
var e=Array.from(i).reduce(function(e,t){return e+t.offsetWidth},0);// If the parent element is wider than the total width of the children, do nothing
if(!(s>=e)){// Adjust and set the width for any items that exceed the ideal width given the number of items
Array.from(i).filter(function(e){return 100*(e.offsetWidth/s)>o}).forEach(function(t,n,o){var r=100*(t.offsetWidth/s),l=r-100*((e-s)/s)/o.length;angular.element(t).css({"white-space":'nowrap',"overflow-x":'hidden',"-o-text-overflow":'ellipsis',"text-overflow":'ellipsis',width:'calc('+l+'% - '+.5*(i.length-1)+'em)'})});// convert the excess width to a percent
}},0)}}]),t}(Decorator);return new e}// #-- END Decorator (ss-multi-item-truncation) --# //
// #----------------------------------------------# //
// #--------------------------------# //
// #---- Decorator (ss-pending) ----# //
/*@ngInject*/function ssPending(e,t,n){var s=function(s){function i(){return classCallCheck(this,i),possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return inherits(i,s),createClass(i,[{key:'link',// linking function for decorator directive
value:function(s,i,o){function r(){var t=n.getStyles(i),r=e('<super-loader is-loading="'+o.ssPending+'" status-text="'+o.ssPendingStatus+'" fill></super-loader>');i.append(r(s)),'static'===t.position&&i.css({position:'relative'}),d=!1}var l=i.hasClass('super-button'),d=!l,u=!!t(o.ssPending)(s);// we don't need a loader if this is a button
// add the loader right away if the initial value we are watching
// starts out with a truthy value
d&&u&&r(),i.addClass('ss-pending'),s.$watch(o.ssPending,function(e){e=!!e,i.toggleClass('ss-pending-active',e),l&&i.attr({disabled:e?'disabled':null}),d&&e&&r()})}}]),i}(Decorator);return new s}// #-- END Decorator (ss-pending) --# //
// #--------------------------------# //
/*@ngInject*/function ssPermitted(e,t){var n=function(n){function s(){return classCallCheck(this,s),possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return inherits(s,n),createClass(s,[{key:'link',value:function(n,s,i){for(// get the list of permissions
var o=i.ssPermitted.split(','),r=o.length;r--;){// permissions are specified in "group.property" format.
// use deconstruction to pull out each value
var l=o[r].split('.'),d=slicedToArray(l,2),u=d[0],c=d[1];// check these values against the permissions service
// if this action is not permitted, remove the element
if(t.isNotPermittedAction(u,c))return s.remove()}// we passed the permissions check remove the terminal
// decorator and re-compile so this can be seen
s.removeAttr('ss-permitted'),s.replaceWith(e(s[0].outerHTML)(n))}}]),s}(Decorator);return new n(config)}// #-- END Decorator (ss-permitted) --# //
// #----------------------------------# //
/*@ngInject*/function ssPermittedRoute(e,t){var n=function(n){function s(){return classCallCheck(this,s),possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return inherits(s,n),createClass(s,[{key:'link',value:function(n,s,i){return t.isNotPermittedRoute(i.ssPermittedRoute)?s.remove():void(s.removeAttr('ss-permitted-route'),s.replaceWith(e(s[0].outerHTML)(n)));// we passed the permissions check remove the terminal
// decorator and re-compile so this can be seen
}}]),s}(Decorator);return new n(config$1)}// #-- END Decorator (ss-permitted-route) --# //
// #----------------------------------------# //
// #---------------------------------------------# //
// #---- Decorator (ss-profile-completeness) ----# //
/*@ngInject*/function ssProfileCompleteness(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'link',// linking function for decorator directive
value:function(e,t,n){// Can be deleted once all effective dated work is out because we deleted the profileCompletenessSvc with this PR
switch(n.link.toLowerCase()){// case 'base.employeerecord.personal':
// 	if (!scope.routeVm.emp.profileCompleteness.tabs.employee) {
// 		angular.element(elem).addClass('completeness-incomplete');
// 	}
// 	break;
// case 'base.employeerecord.employment':
// 	if (!scope.routeVm.emp.profileCompleteness.tabs.employment) {
// 		angular.element(elem).addClass('completeness-incomplete');
// 	}
// 	break;
// case 'base.employeerecord.emergency':
// 	if (!scope.routeVm.emp.profileCompleteness.tabs.emergency) {
// 		angular.element(elem).addClass('completeness-incomplete');
// 	}
// 	break;
default:}return t}}]),t}(Decorator);return new e}// #-- END Decorator (ss-profile-completeness) --# //
// #---------------------------------------------# //
// #------------------------------------# //
// #---- Decorator (ss-scroll-list) ----# //
/*@ngInject*/function ssScrollList(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'link',// linking function for decorator directive
value:function(e,t){// set the scroll styles and container styles before we check
// scrollbar widths and border sizes
var n=t.parent();t.addClass('ss-scroll-list'),n.addClass('ss-scroll-list-container')}}]),t}(Decorator);return new e}// #-- END Decorator (ss-scroll-list) --# //
// #------------------------------------# //
// #-------------------------------# //
// #---- Decorator (ss-toggle) ----# //
/*@ngInject*/function ssToggle(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'link',// linking function for decorator directive
value:function(e,t,n){function s(e){if(null==e&&(e=t.hasClass('ss-toggle-closed')),r.length||(r=i(),!!r.length)){var n=e?'ss-toggle-closed':'ss-toggle-open',s=e?'ss-toggle-open':'ss-toggle-closed';t.addClass(e?'fa-caret-down':'fa-caret-right'),t.removeClass(e?'fa-caret-right':'fa-caret-down'),t.addClass(s),r.addClass(s),t.removeClass(n),r.removeClass(n)}}function i(){if(null!=r&&r.length)return r;var e=t[0].getElementsByClassName(o);return(0===e.length&&(e=t.parent()[0].getElementsByClassName(o)),e=angular.element(e),0===e.length)?e:(e.addClass('ss-toggle-closed'),e)}var o=n.ssToggle||'dropdown',r=i();t.addClass('fa-caret-right'),t.addClass('ss-toggle-closed'),t.addClass('ss-toggle'),r.length&&(r.addClass('ss-toggle-closed'),r.addClass('ss-toggle-target')),null!=n.ssToggleStartExpanded&&'false'!==n.ssToggleStartExpanded&&s(),t.on('click',function(t){angular.element(t.target.parentElement).hasClass('is-disabled')||s()})}}]),t}(Decorator);return new e}// #-- END Decorator (ss-toggle) --# //
// #-------------------------------# //
/*@ngInject*/function ssToolTip(e,t){var n=function(e){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,e),createClass(n,[{key:'link',// linking function for decorator directive
value:function(e,n,s){function i(){tipElement.removeAttr('style'),tipElement.removeAttr('class'),tipElement.text('')}function o(){tipElement.append(u),tipWidth=tipElement[0].offsetWidth,tipHeight=tipElement[0].offsetHeight}function r(){return{default:{top:p+30+'px',left:c-15+'px'},left:{left:c-tipWidth+'px'},top:{top:p-tipHeight-30+'px'}}}function l(e){c=e.pageX,p=e.pageY;var n=r();tipElement.css(n.default),e.pageX>t.innerWidth-tipWidth?(tipElement.addClass('flip-x'),tipElement.css(n.left)):(tipElement.removeClass('flip-x'),tipElement.css(n.default)),e.pageY>t.innerHeight-d?(tipElement.addClass('flip-y'),tipElement.css(n.top)):tipElement.removeClass('flip-y')}var d=n[0].offsetTop,u,c,p,m,g;(''!==s.ssToolTip||null!==s.ariaLabel)&&(u=s.ssToolTip||s.ssToolTipIcon||s.ariaLabel,n.addClass('ss-tool-tip')),g=_Mathfloor(1e5*Math.random()),m='<span id="'+g+'" class="aria">'+u+'</span>',n.append(m),n.attr('aria-describedby',g),n.on('mouseenter',function(){o(),n.on('mousemove',l)}),n.on('mouseleave',function(){i()})}}]),n}(Decorator);return new n}// #-- END Decorator (ss-tool-tip) --# //
// #---------------------------------# //
function formChangeEmitter(e){var t=fieldEventMap[e];return(/*@ngInject*/['ssValidateHlp',function(e){return{restrict:'E',link:function(n,s){var i=s[0].type,o=!0,r=!1,l=void 0;// register generic events
try{for(var d=t.events[Symbol.iterator](),u,c;!(o=(u=d.next()).done);o=!0)c=u.value,s.on(c,e.makeEventEmitter(n,s));// register subtype events
}catch(e){r=!0,l=e}finally{try{!o&&d.return&&d.return()}finally{if(r)throw l}}if(null!=t[i]){var p=!0,m=!1,g=void 0;try{for(var h=t[i][Symbol.iterator](),f,y;!(p=(f=h.next()).done);p=!0)y=f.value,s.on(y,e.makeEventEmitter(n,s))}catch(e){m=!0,g=e}finally{try{!p&&h.return&&h.return()}finally{if(m)throw g}}}}}}])}/*@ngInject*/function ssValidateForm(e,t,n){return{restrict:'A',scope:!1,priority:0,/*@ngInject*/controller:['$scope','$element','ssElemHlp',function(e,t,n){var s=e.$validate={isValid:null,validationHandlers:[],resetHandlers:[],reset:function(){this.resetHandlers.forEach(function(e){return e()})}};e.$on('ss-validate-handler',function(i,o,r,l){if(i.stopPropagation(),n.isMyChild(t,l)){var d=i.targetScope,u=function(e){return d.$on('$destroy',e)},c=l.attr('ss-validate')||'true',p=function(e){return d.$eval(c,{$eventType:e})};s.validationHandlers.push(o),s.resetHandlers.push(r),u(function(){s.validationHandlers=s.validationHandlers.filter(function(e){return e!==o}),s.resetHandlers=s.resetHandlers.filter(function(e){return e!==r})}),u(e.$on('ss-validate-field-event',function(e,t,n){// if the field's status has changed from passing to failing
// or vice versa, we will clear the field status. It will
// be checked again when the form is submitted.
if(l[0]!==t[0]&&!['focus','blur'].includes(n)){var s=!0===p(n),i=s&&l.hasClass('ss-validate-failing')||!s&&l.hasClass('ss-validate-passing');i&&r()}}))}}),e.$on('ss-validate-reset',function(t){t.stopPropagation(),e.$validate.reset()})}],link:function(s,i){i.addClass('ss-validate-form-untested'),s.$on('ss-validate-field-event',function(e,t,n){['focus','blur'].includes(n)||(i.removeClass('ss-validate-form-passing ss-validate-form-failing'),i.addClass('ss-validate-form-untested'),s.$validate.isValid=null)}),i.on('submit',n(/*#__PURE__*/regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:// if we know the form is valid, don't stop the form
// from performing the submit operation
if(e.prev=0,i.hasClass('ss-validate-form-untested')&&i.removeClass('ss-validate-form-untested'),i.addClass('ss-validate-form-async'),!0!==s.$validate.isValid){e.next=5;break}return e.abrupt('return');case 5:return n.stopImmediatePropagation(),i.removeClass('ss-validate-form-passing ss-validate-form-failing'),e.next=9,o(n.type);case 9:s.$validate.isValid=!0,i.removeClass('ss-validate-form-failing'),i.addClass('ss-validate-form-passing'),t(function(){return i.triggerHandler('submit')},!1),e.next=20;break;case 15:e.prev=15,e.t0=e['catch'](0),s.$validate.isValid=!1,i.removeClass('ss-validate-form-passing'),i.addClass('ss-validate-form-failing');case 20:return e.prev=20,i.removeClass('ss-validate-form-async'),e.finish(20);case 23:case'end':return e.stop();}},e,this,[[0,15,20,23]])})));var o=n(/*#__PURE__*/regeneratorRuntime.mark(function t(n){var o,r,l,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=function(e){return e(i,n)},l=0,d=[];case 3:if(r===l){t.next=17;break}return t.prev=4,r=l,d=s.$validate.validationHandlers.map(o).filter(function(e){return null!=e}),l=d.length,t.next=10,e.all(d).catch(function(){});case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t['catch'](4),t.abrupt('continue',3);case 15:t.next=3;break;case 17:return t.next=19,d;case 19:return t.abrupt('return',t.sent);case 20:case'end':return t.stop();}},t,this,[[4,12]])}))}}}// #---------------------------------# //
// #---- Decorator (ss-validate) ----# //
/*@ngInject*/function ssValidate(e,t,n,s,i){function o(e,t){l(t,{valid:null,children:[]})}function r(o,r,l){/**
	   * Resets the state of validation to "untested"
	   */function u(){null!=_&&0===_.$$state.status&&e.cancel(_),m.valid=null,b=!0,s.resetValidation(r)}/**
	   *  Handles a form event regarding a modification to a field being watched; 'click', 'blur', etc
	   *
	   * @param {any} emitted Event metadata
	   * @param {jQueryLite} formElem The parent form
	   * @param {string} eventType The type of event that fired
	   * @returns void
	   */function c(t,n,o){function l(){var e=0===y.$$state.status,t=2!==f.$$state.status;// track focus state
if(v='focus'===o,b&&!v)b=!1,r.removeClass('ss-validate-untested'),p.call(null,n,o);else{if(e||t)return;s.showErrors(r,'blur'===o)}}var d=['focus','blur'].includes(o);// Note: we are testing both if we're validating a child AND the element itself because, currently,
//	the DigSignature widget changes its state in order to be valid, and we emit the entire widget on 'ss-validate-field-event'
//	so we need to be able to validate the whole widget sometimes.
if(i.isMyChild(r,n)||r===n){if(!s.allChildrenAreValid(m))return void s.showErrors(r,!1);d?(e.cancel(_),_=e(l,200)):!b&&('keyup'===o&&!h&&s.clearFadedState(r),e.cancel(y),y=e(function(){s.clearFadedState(r),p.call(null,n,o)},h?700:100))}}/**
	   * Validates a form element according to the expression passed in to the validator.
	   *
	   * @param {any} formElem The parent form
	   * @param {any} eventType The event that was raised that go us to this method
	   * @returns {promise} describing the result of a validation test
	   */function p(e,t){var i,d;if(s.allChildrenAreValid(m))// if we have previously run validation and the user tries to
// submit, return the results of our last validation attempt
return b||'submit'!==t?(b&&(r.removeClass('ss-validate-untested'),b=!1),d=o.$eval(g,{$eventType:t}),i=f=s.validationPromise(d),0===i.$$state.status&&(r.addClass('ss-validate-async'),h=!0),i.then(// passing
function(){i!==f||(!m.valid&&(o.$emit('ss-validate-field-event',e,t),m.valid=!0),s.passValidation(r,l))},// failing
function(e){i!==f||(m.valid=!1,s.failValidation(r,l,e),n(function(){v||s.showErrors(r,!v)},o))}).finally(function(){i!==f||r.removeClass('ss-validate-async')}),i):f}var m=d.get(r[0]),g=l.ssValidate,h=!1,f=t.resolve(),y=t.resolve(),v=!1,b=!0,_;// const
r.addClass('ss-validate-untested'),r.append('<ul class="ss-validate-messages" aria-live="polite" data-test="error-messages"></ul>'),o.$on('ss-validate-field-event',c),o.$emit('ss-validate-handler',p,u,r)}function l(e,t){var n=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2];// abort when we reach the body
e[0]&&'BODY'!==e[0].tagName&&(n?d.has(e[0])&&d.get(e[0]).children.push(t):d.set(e[0],t),l(e.parent(),t,!0))}var d=new WeakMap,u=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'compile',value:function(){return{pre:o,post:r}}}]),t}(Decorator);return new u}// #-- END Decorator (ss-validate) --# //
// #---------------------------------# //
/*@ngInject*/function ssWindowAnchor(e,t,n){var s=e.get('ssWindowAnchorLogic'),i=function(e){function i(){return classCallCheck(this,i),possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return inherits(i,e),createClass(i,[{key:'link',// linking function for decorator directive
value:function(e,i,o){function r(){var e=s.getDetachPointOffset(d,p);i.css('top',(0<e?e:0)+'px'),i.hasClass('ss-window-anchor')&&0>e&&(l.scrollY=l.scrollTop=0),i.toggleClass('ss-window-anchor',0<e),c=null}var l=i[0],d=o.ssWindowAnchor&&0<o.ssWindowAnchor.length?document.getElementById(o.ssWindowAnchor):t,u=parseInt(o.windowAnchorTop,10)||70,c=null,p;n.raw(function(){p=s.getDetachPoint(l,u),i.css({maxHeight:'calc(100vh - '+(u+10)+'px)'})}),angular.element(d).on('scroll',function(){null!==c||(c=n.raw(r))})}}]),i}(Decorator);return new i}// #-- END Decorator (ss-window-anchor) --# //
// #--------------------------------------# //
function ssWindowAnchorLogic(){return{/**
	   * Given an element and an anchor point (px), return the intended detach point based on the element's position relative to the viewport
	   * @param {Object} element DOM element within a scrolling context
	   * @param {Number} anchorPoint Pixel value
	   * @return {Number}
	   */getDetachPoint:function(e,t){var n=_Mathfloor(e.getBoundingClientRect().top)-t;return n<=t?t:n},/**
	   * Given an element and a detach point (px), return the offset based on the element's scrollY or scrollTop value
	   * @param {Object} scrollElement DOM element that provides a scrolling context
	   * @param {Number} detachPoint Pixel value
	   * @return {Number}
	   */getDetachPointOffset:function(e,t){var n=e.scrollY||e.scrollTop||0;return n-t}}}/*@ngInject*/function superButton(e,t){function n(e){/* eslint-disable brace-style */// check for the different type attributes
if(null!=e.primary||null!=e.pri)return'pri';// like a link
/* eslint-enable brace-style */// flat with grey text
return null!=e.negative||null!=e.neg?'neg':null!=e.positive||null!=e.pos?'pos':null!=e.standard||null!=e.std?'std':null!=e.simple||null!=e.smp?'smp':null==e.flat?null==e.link?'std':'link':'flat';// flat with inheritted text color
}function s(e){/* eslint-disable brace-style */// check for the different size attributes
if(null!=e.small||null!=e.sm)return'sm';/* eslint-enable brace-style */return null!=e.large||null!=e.lg?'lg':''}var o=e('components/super-button/button.html'),i=function(e){function i(){return classCallCheck(this,i),possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return inherits(i,e),createClass(i,[{key:'link',value:function(e,t){var n=t[0].querySelector('.select-menu')}},{key:'template',value:function(e,r){// the main template file
var l=angular.element(o),d=e.children(),u=l.find('label'),c='';// the children of tElem are the menu items
// reference to the label element for later
//const menuEl = _template.find('div');
// placeholder for dropdown content
// apply the button type/size className
// if there's no content, we don't need to go any further
if(l.addClass(n(r)),l.addClass(s(r)),u.text(r.label||''),l.attr('type',r.type||'button'),null==r.value&&l.attr('value',r.label||''),r.ariaLabel&&(l.attr('aria-label',r.ariaLabel),t.removeAttr(e,r,['ariaLabel'])),r.ssPending&&(l.attr('ss-pending',r.ssPending),t.removeAttr(e,r,['ssPending'])),l.attr('ng-disabled',r.isDisabled),(r.ssIcon||r.ssIconBefore)&&(u.attr('ss-icon-before',r.ssIcon||r.ssIconBefore),t.removeAttr(e,r,['ssIcon','ssIconBefore'])),r.ssIconAfter&&(u.attr('ss-icon-after',r.ssIconAfter),t.removeAttr(e,r,'ssIconAfter')),0===d.length)return l[0].outerHTML;/////
// process the children and construct menu
//
// process the child elements for dropdown content
for(var p=function(e){var t=d.eq(e),n=!t.children().length,s=t[0].outerHTML;s=s.replace(/<(\/?)item/gi,'<$1li'),s=s.replace(/<(\/?)instruction/gi,function(e,t){return t?'</li':'<li ng-click="$event.stopPropagation()" class="super-button-instruction"'}),/^<li/i.test(s)||(s='<li>'+s+'</li>'),s=angular.element(s),s.addClass('select-menu-list-item'),n&&s.addClass('item'),t.replaceWith(s)},m=d.length;m--;)p(m);// add the dropdown content
// return the wrapped version of the super button template that contains
// the menu that is not INSIDE the button (works in firefox)
return c=e.html(),0<c.length&&(l.attr('ss-menu','select-menu'),l.attr('hide-on-select','')),'\n\t\t\t\t<div class="super-button-container" ss-a11y-vert-list=".select-menu-list-item[ng-click]">\n\t\t\t\t\t'+l[0].outerHTML+'\n\t\t\t\t\t<div class="select-menu"><ul class="select-menu-list">'+c+'</ul></div>\n\t\t\t\t</div>\n\t\t\t'}}]),i}(Component);return new i(!1,'button',config$2)}// #-- END Component (super-button) --# //
// #----------------------------------# //
/*@ngInject*/function chartDoughnut(e){var t=function(t){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,t),createClass(n,[{key:'controller',/*@ngInject*/value:['$scope',function(e){null==e.options&&(e.options={}),void 0===e.highlighted&&(e.highlighted=null)}]},{key:'link',value:function(t,n){function s(e){var n=l.getSegmentsAtEvent(e);n.length&&n[0]!==d?(d=n[0],t.highlighted=t.data[l.segments.indexOf(d)],t.$root.safeApply()):0===n.length&&null!=d&&(t.highlighted=null,d=null,t.$root.safeApply())}var i=!1,o=n[0].getContext('2d'),r=Object.assign({},{animation:!0,animationEasing:'easeInOutQuart',animationSteps:80},t.options),l=t.chart=new e(o).Doughnut(t.data,r),d;l.segments.forEach(function(e,n){t.data[n].segment=e,t.$watch('data['+n+'].value',function(n){var s=t.highlighted;// reset the selected item's highlight
null!=s&&s.segment.restore(['fillColor']),e.update({value:n}),l.update(),null!=s&&s.segment.update({fillColor:s.segment.highlightColor})})}),t.$watch('highlighted',function(e,t){null!=t&&(t.segment.restore(['fillColor']),(!i||null==e)&&l.render(!0)),i||null==e||(e.segment.update({fillColor:e.segment.highlightColor}),l.render(!0))}),n.on('mouseenter',function(e){i=!0,s(e),n.on('mousemove',s)}),n.on('mouseleave',function(e){i=!1,s(e),n.off('mousemove',s)})}}]),n}(Component);return new t(props$1,'chart-doughnut',config$3)}// #-- END Component (super-chart-doughnut) --# //
// #------------------------------------------# //
/*@ngInject*/function empProfileComplete(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope','ssAsync','ssEmployeeApi',function(e,t,n){// view model for tracking state
e.vm={// eslint-disable-line no-unused-vars
incompleteList:''};t(/*#__PURE__*/regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,null!=e.employee){t.next=7;break}return t.next=4,n.get({id:e.id,fields:'firstname,lastname,birthDateUtc,gender,maritalStatus,race,ethnicity,hiredate,ssn',include:'phoneNumbers,addresses,emails,positions,emergencyContacts,assignments,statusHistory'});case 4:s=t.sent,t.next=8;break;case 7:s=e.employee;case 8:t.next=12;break;case 10:t.prev=10,t.t0=t['catch'](0);case 12:case'end':return t.stop();}},t,this,[[0,10]])})//> log('Error getting employee information', e);
)()}]}]),t}(Component);return new e(props$2,'emp-profile-complete',config$4)}// #-- END Component (super-emp-profile-complete) --# //
// #------------------------------------------------# //
/*@ngInject*/function employeeSearch(e,t,n,s,i,o,r,l,d){function u(e){return o.findWhere(e,{_isPrimary:!0})||e[0]}var c=function(s){function o(){return classCallCheck(this,o),possibleConstructorReturn(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return inherits(o,s),createClass(o,[{key:'link',value:function(t){t.$on('focusBind',function(e,n){t.vm.focused=!!n});var n=function(e){// no filter text. leave.
if((e.stopPropagation(),!t.vm.disabled)&&''!==t.vm.query&&!1!==t.vm.menuOpen&&'INPUT'!==e.target.tagName&&!e.target.classList.contains('no-deselect'))// menu is already closed. leave.
// clicking the input or the result list should be ignored.
//We're disabled. leave.
{// if we are in single mode, and we are cancelling our action, replace with the last selected value.
if(!t.vm.usePill){var n=t.model&&t.model[0]||{};return t.vm.query=n.fullName||null,t.vm.menuOpen=!1,void t.$apply()}// if we were in the middle of making a selection, then reset the input and everything else.  We can't recover
//	without throwing an error, and most of the time this field isn't required so getting an error seems out of place.
t.vm.results=null,t.vm.query=null,t.selectedName=null,t.vm.menuOpen=!1,t.$apply()}};// when we click anywhere that isn't the input or the results list do stuff
e.on('click',n),t.$on('$destroy',function(){e.off('click',n)})}/*@ngInject*/},{key:'controller',value:['$scope','ssObjectHlp','enumEmployeeStatus',function(e,s,o){function r(){f=t(/*#__PURE__*/regeneratorRuntime.mark(function t(){var n,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.assign({"filter[fullname]":y,include:'emails,statusHistory',limit:m.queryLimit},m.statusTypes.length?{"filter[status]":m.statusTypes}:{}),m.loading=!0,m.menuOpen=!0,t.next=5,i.query(n);case 5:if(m.results=t.sent,!e.includeActiveOnlyStatusFilter){t.next=11;break}return t.next=9,d.getActiveOrg();case 9:s=t.sent,m.results.forEach(function(e){null!=e._statusHistory&&e._statusHistory.length&&(e.currentStatus=e._statusHistory.find(function(e){return l.isCurrent({obj:e,fromProp:'_from',toProp:'_to',org:s})}),null!=e.currentStatus&&(e.currentStatus.name=o.byValue(e.currentStatus._statusId)))});case 11:e.excludeEmployeesByIds.length&&(m.results=m.results.filter(function(t){return 0>e.excludeEmployeesByIds.indexOf(t.id)})),m.results.forEach(function(e){e.primaryEmail=u(e._emails)}),m.loading=!1;case 14:case'end':return t.stop();}},t,this)}))()}var c=s.glean,p=e.removeById,m=e.vm={disabled:!1,query:'',loading:!0,statusTypes:e.statusTypes||'',queryLimit:e.queryLimit||10,limit:parseInt(e.limit,10)||-1,// default to -1 (unlimited)
usePill:!!e.usePill,focused:e.focused,madeSelection:!1,// has the user selected something from the search results?
menuOpen:!1,activeOnlyFilter:!0};m.limit=m.usePill?m.limit:1,e.excludeEmployeesByIds=e.excludeEmployeesByIds||[],null!=p&&e.excludeEmployeesByIds.push(p),m.statusTypes.length&&(m.statusTypes=m.statusTypes.split(',').map(function(e){var t=o.aValues,n=o.aNames,s=c(e,function(e){return t.find(function(t){return t.toString()===e.trim()})},!1),i=c(e,function(e){return t[n.findIndex(function(t){return t.toLowerCase()===e.trim().toLowerCase()})]},!1);// find the value by index (provided as a string)
// find by case insensitive name
return!1===i&&!1===s?void 0:!1===i?!1===s?void 0:s:i})// filter out anything invalid
.filter(function(e){return null!=e})// rejoin into a string to filter with
.join(','));// put the selected name and check so that we don't double search once we make a selection
var g='',h=e.go={// eslint-disable-line no-unused-vars
add:function(t){// did we find the current selection in the list of selected employees
var n=!1;if(m.madeSelection=!1,null==e.model&&(e.model=[]),1>e.model.length||!m.usePill)e.model=[t],m.madeSelection=!0;else{for(var s=e.model.length;s--;)if(t.id===e.model[s].id){n=!0;break}n||(m.madeSelection=!0,e.model.push(t))}m.query=m.usePill?'':g=t._firstName+' '+t._lastName,m.loading=!1,m.menuOpen=!1,m.results=[]},remove:function(t){e.model.forEach(function(n,s){t.id===n.id&&e.model.splice(s,1)})}},f,y;e.$watch('vm.activeOnlyFilter',function(){e.includeActiveOnlyStatusFilter&&(m.statusTypes=m.activeOnlyFilter?'1':'',r())}),e.$watch('vm.query',function(t,n){return t&&t!==n?void(null!=f&&(f.$abort(),f=null),!m.usePill&&t===g||t&&0<t.length&&t!==n&&(y=t.trim(),r())):(m.menuOpen=!1,m.results=[],void(m.madeSelection&&!m.usePill&&(m.madeSelection=!1,e.model=[])))}),e.$watch('model.length',function(t){m.disabled=0<=m.limit&&t>=m.limit&&m.usePill,!m.usePill&&e.model&&e.model[0]?(m.madeSelection=!0,m.disabled=!1,g=m.query=e.model[0].fullName):!t.length&&(m.madeSelection=!1)}),n.on('entry-cleared',function(){m.results=[],m.menuOpen=!1,m.usePill||(g=null,m.madeSelection=!1,e.model=[])},e)}]}]),o}(Component);return new c(props$3,'employee-search',config$5)}// #-- END Component (super-employee-search) --# //
// #-------------------------------------------# //
/*@ngInject*/function fileUpload(e){var t=function(t){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,t),createClass(n,[{key:'controller',/*@ngInject*/value:['$scope','$stateParams','$window','$element','ssAuthSvc','filenameHlp','FileUploader','ssFormTemplatesApi','ssAsync','ssFileApi','ssToastHlp',function(e,t,n,s,i,o,r,l,d,u,c){null==e.model&&(e.model=[]),null==e.filteredFileTypes&&(e.filteredFileTypes=[]);// view model for tracking state
var p=e.vm={files:e.model||[],isDisabled:!e.isDisabled&&t.editMode?'read-only'===t.editMode.toLowerCase():e.isDisabled,editMode:null==e.editMode||!0===e.editMode// strict equality to not bind it to the $scope
};// reference isn't found without the setTimeout
setTimeout(function(){e.fileInput=s.find('input')},0);// behavior that needs to be bound to the view
var m=e.go={// eslint-disable-line no-unused-vars
getIcon:function(e){return o.getIcon(o.getExtension(e.filename))},download:function(e){p.loading=!0,p.loadingStatus='downloading file...',l.getFileUrl({id:e}).then(function(e){p.loading=!1,p.loadingStatus='',n.open(e._string,'_blank')}).catch(function(){p.loading=!1,p.loadingStatus='',c.error('There was an error downloading the file','Error')}//>log('Error getting file', e);
)},deleteFile:function(t){e.statusElem.text(''),p.loading=!0,p.loadingStatus='deleting file...',d(/*#__PURE__*/regeneratorRuntime.mark(function n(){var s;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s=p.files.indexOf(t),-1<s&&p.files.splice(s,1),n.next=5,u.removeFile(t.id);case 5:e.statusElem.text('the file has been successfully deleted'),e.$emit('ss-validate-reset'),n.next=12;break;case 9:n.prev=9,n.t0=n['catch'](0),e.statusElem.text('the file was not successfully deleted');case 12:return n.prev=12,p.loading=!1,p.loadingStatus='',e.model=p.files,n.finish(12);case 17:case'end':return n.stop();}},n,this,[[0,9,12,17]])}))()},shouldShowUpload:function(){return!(e.preventMultipleUploads&&1<=p.files.length)}},g=e.uploader=new r({withCredentials:!1,headers:{Authorization:'Bearer '+i.token.access}});// Instantiate the Angular file uploader
e.filteredFileTypes.length&&g.filters.push({name:'imageFilter',fn:function(t){var n=t.type.slice(t.type.lastIndexOf('/')+1);return-1!==e.filteredFileTypes.indexOf(n)||(c.error('Invalid file type. Please use one of the following: '+e.filteredFileTypes.join(', ')),!1)}}),g.onAfterAddingFile=function(t){//	check to see if the user has already uploaded a file with the same name
// create file id
return e.statusElem.text(''),0<=p.files.findIndex(function(e){return t.file.name===e.filename})?(c.error('You have already uploaded a file by that name.','File Upload Failed'),void g.clearQueue()):null==t._file.size&&0<=t._file.size&&52428800<=t._file.size?(c.error('The file upload size cannot exceed 50MB. Please upload a smaller file.','File Upload Failed'),void g.clearQueue()):void l.attachFile({},{filename:t.file.name,fileType:2},null,!1).then(function(e){p.loading=!0,p.loadingStatus='uploading file...',p.file={filename:e._filename,id:e.id,isSuccess:!0},t.url=l.getUploadFileUrl({id:p.file.id}),t.upload()}).catch(function(t){422===t.status&&c.error(t.data.errors.Title,'File Upload Failed'),p.loading=!1,p.loadingStatus='',e.fileInput.val(''),g.clearQueue()});//	check the file size
},g.onAfterAddingAll=function(){e.$emit('ss-validate-field-event',s,'change')},g.onBeforeUploadItem=function(){},g.onProgressAll=function(){},g.onErrorItem=function(){p.loading=!1,p.loadingStatus='',e.fileInput.val(''),c.error('The selected file did not upload correctly. Please try again.','File Upload Failed')},g.onCancelItem=function(){p.loading=!1,p.loadingStatus='',e.fileInput.val(''),c.info('File upload cancelled.')},g.onSuccessItem=function(t){// Something happened
return t.isSuccess?void(p.loading=!1,p.loadingStatus='',p.files.push(p.file),e.statusElem.text('the file has been uploaded successfully'),e.model=[].concat(toConsumableArray(e.model),[p.file])):(c.error('The selected file did not upload correctly. Please try again.','File Upload Failed'),void d(/*#__PURE__*/regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.loading=!0,e.prev=1,e.next=4,u.remove(t,null,!1);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e['catch'](1);case 8:return e.prev=8,p.loading=!1,p.loadingStatus='',e.finish(8);case 12:case'end':return e.stop();}},e,this,[[1,6,8,12]])}))());// file upload successful
},g.onCompleteItem=function(){},g.onCompleteAll=function(){p.loading=!1,p.loadingStatus='',e.fileInput.val(''),p.files.length&&(g.queue=[]),e.$emit('ss-validate-reset')}}]},{key:'link',value:function(t,n){t.statusElem=angular.element(n[0].querySelector('.attachment-status-alert'));var s=n.find('input');// if the input is not visible, this is not editable
// and validation events should not be triggered
0===s.length||(s.on('focus',e.makeEventEmitter(t,s)),s.on('click',function(){e.resetValidation(n)}),s.on('blur',e.makeEventEmitter(t,s)))}}]),n}(Component);return new t(props$4,'file-upload',config$6)}// #-- END Component (super-file-upload) --# //
// #---------------------------------------# //
/*@ngInject*/function filterBar(){/**
	  * @class  SuperSuit.FilterBar
	  * @memberOf SuperSuit
	  */var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope','ssDebounce',function(e,t){// view model for tracking state
var n=e.vm={classes:'',search:'',label:e.typeLabel,searchLabel:null==e.searchLabel?e.typeLabel:e.searchLabel};n.labelPlural=null==e.typeLabelPlural?n.label+'s':e.typeLabelPlural,n.pluralize={1:n.label,other:n.labelPlural};var s=t(function(){e.search=n.search},350);e.$watch('vm.search',s),e.$watch('search',function(){n.search=e.search}),e.$watch('selectedCount',function(e){n.classes=0<e?'show-bulk-actions':''});// behavior that needs to be bound to the view
e.go={};// eslint-disable-line no-unused-vars
}]}]),t}(Component);return new e(props$5,'filter-bar',config$7)}// #-- END Component (super-filter-bar) --# //
// #--------------------------------------# //
/*@ngInject*/function grid(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope','$log','$parse','$attrs','ssArrayHlp','rAF',function(e,t,n,s,i){/////
// helper functions
//
// function checkInView() {
// 	angular.element(window).triggerHandler('checkInView');
// 	$scope.$root.safeDigest($scope);
// }
function o(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},s=t.sortBy,o=t.sortDirection,r=t.sortable;l.has(s)||l.set(s,n(s));var d=l.get(s),u=!0,c=!1,p=void 0;try{for(var m=e.sortable[Symbol.iterator](),g;!(u=(g=m.next()).done);u=!0){var h=g.value,f=d(h);h.$$sortValue=null==f?'':f.toString().toLowerCase()}}catch(e){c=!0,p=e}finally{try{!u&&m.return&&m.return()}finally{if(c)throw p}}i.sortByObjectKey(e.sortable,'$$sortValue','desc'===o)}// calculate all column widths.
function r(){var e=0,t=0,n=0,s=0,i=0,o=0,r;u.columnScopes.forEach(function(o){null==o.width||''===o.width?n++:o.width.endsWith('px')?(e++,i+=parseFloat(o.width)):o.width.endsWith('%')&&(t++,s+=parseFloat(o.width))}),0<n&&(r=(100-s)/n),0<e&&(o=i/(t+n)),u.columnScopes.forEach(function(e){null==e.width||''===e.width?e.vm.styles.width='calc('+r+'% - '+o+'px)':e.width.endsWith('px')?e.vm.styles.width=e.width:e.width.endsWith('%')&&(e.vm.styles.width='calc('+e.width+' - '+o+'px)')})}null==e.defaultSortDirection&&(e.defaultSortDirection='asc'),null==e.defaultRowHeight&&(e.defaultRowHeight=38);/////
// Setup variables used throughout this component
//
var l=new Map,d=[],u=e.gridData={sortBy:e.defaultSort,sortDirection:e.defaultSortDirection,selectable:e.selectable,hoverable:e.hoverable,defaultRowHeight:e.defaultRowHeight,columnScopes:[],cellSizeCache:new Map// debounceCheckInView: function () {
// 	if (checkingInView) { return; }
// 	checkingInView = true;
// 	rAF.raw(function () {
// 		checkInView();
// 		checkingInView = false;
// 	});
// }
},c=e.vm={// eslint-disable-line no-unused-vars
// disableSelectAll is false by default, true if present (unless
// specifically set to "false")
disableSelectAll:null!=e.disableSelectAll&&'false'!==e.disableSelectAll.toLowerCase(),rowCount:0},p=e.go={// eslint-disable-line no-unused-vars
selectAll:function(){var t=!0,n=!1,s=void 0;try{for(var i=d[Symbol.iterator](),o,l;!(t=(o=i.next()).done);t=!0)l=o.value,l.vm.selected=!0}catch(e){n=!0,s=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw s}}e.onSelectAll({rows:d})},selectNone:function(){var t=!0,n=!1,s=void 0;try{for(var i=d[Symbol.iterator](),o,l;!(t=(o=i.next()).done);t=!0)l=o.value,l.vm.selected=!1}catch(e){n=!0,s=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw s}}e.selectable.length=0,e.onSelectNone()}};// var checkingInView = false;
// grid level vm for storing state that the cells, rows,
// and columns need access to
// view model for tracking state
// behavior that needs to be bound to the view
e.$watchCollection('selectable',function(e,t){e===t||(t.filter(function(t){return!e.includes(t)}).forEach(function(e){var t=d.find(function(t){return t.selectedValue===e});null==t||(t.vm.selected=!1)}),e.filter(function(e){return!t.includes(e)}).forEach(function(e){var t=d.find(function(t){return t.selectedValue===e});null==t||(t.vm.selected=!0)}))}),e.$watchGroup(['gridData.sortBy','gridData.sortDirection','sortable','sortable.length'],function(t,n){var i=slicedToArray(t,3),r=i[0],l=i[1],d=i[2],u=slicedToArray(n,2),c=u[0],p=u[1];// no sort data, don't sort!
// fire onSortChange handler if available
// no sort data, don't sort!
if(null!=r&&''!==r)// perform default in-memory sort
{(r!==c||l!==p)&&null!=s.onSortChange&&e.onSortChange({sortBy:r,sortDirection:l}),null==d||o({sortBy:r,sortDirection:l,sortable:d})}}// gridData.debounceCheckInView();
),e.$on('super-grid-column-sort',function(e){e.stopPropagation();// capture this event
var t=e.targetScope,n=t.sortBy,s=t.defaultSortDirection;n===u.sortBy?u.sortDirection='asc'===u.sortDirection?'desc':'asc':(u.sortBy=n,u.sortDirection=s)}),e.$on('super-grid-column-init',function(e,t){e.stopPropagation();// capture this event
var n=e.targetScope;// push the new column onto our array for tracking
u.columnScopes.splice(t,0,n),u.addSortClass=1<u.columnScopes.filter(function(e){return null!=e.sortBy}).length,n.$on('$destroy',function(){var e=u.columnScopes.indexOf(n);u.columnScopes.splice(e,1)}),r()}),e.$on('super-grid-row-init',function(t){t.stopPropagation();// capture this event
var n=t.targetScope;if(null!=e.selectable){var s=d.findIndex(function(e){return e.selectedValue===n.selectedValue});0<=s&&d.splice(s,1)}c.rowCount+=1,n.$on('$destroy',function(){if(c.rowCount-=1,null!=e.selectable){var t=e.selectable.indexOf(n.selectedValue);0<=t&&e.selectable.splice(t,1)}// gridData.debounceCheckInView();
}),d.push(n),null!=e.selectable&&e.selectable.includes(n.selectedValue)&&(n.vm.selected=!0)}),e.$on('super-grid-row-selection',function(n){n.stopPropagation();// capture this event
var s=n.targetScope;if(s.vm.selected||0!==e.selectable.length)if(s.vm.selected){if(e.selectable.includes(s.selectedValue))return;e.selectable.push(s.selectedValue)}else{var i=e.selectable.indexOf(s.selectedValue);0<=i?e.selectable.splice(i,1):t.warn('super-grid :: could not find the row\'s selected-value =>',s.selectedValue)}})}]}]),t}(Component);return new e(props$6,'grid',config$8)}// #-- END Component (super-grid) --# //
// #--------------------------------# //
/*@ngInject*/function gridCell(e){var t=function(t){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,t),createClass(n,[{key:'controller',/*@ngInject*/value:['$scope',function(e){e.gridData=e.$root.utils.findInParentScope('gridData',e);// eslint-disable-line no-unused-vars
}]},{key:'link',value:function(t,n){var s=t.gridData.cellSizeCache,i=n[0].outerHTML;s.has(i)?n[0].style.width=s.get(i):e.raw(function(){var e=Array.from(n.parent().children()).indexOf(n[0]),o=t.gridData.columnScopes;n[0].style.width=o[e].vm.styles.width,s.set(i,n[0].style.width)})}}]),n}(Component);return new t(props$7,'grid-cell',config$9)}// #-- END Component (super-grid-cell) --# //
// #-------------------------------------# //
/*@ngInject*/function gridColumn(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope',function(e){e.defaultSortDirection='desc'===e.defaultSortDirection?'desc':'asc';var t=e.gridData=e.$root.utils.findInParentScope('gridData',e),n=e.vm={noLeftSeparator:null!=e.noLeftSeparator,sortIcon:'sort-up',styles:{},keyCode:13,tabIndex:e.sortBy?'0':'-1'},s=e.go={// eslint-disable-line no-unused-vars
isSorted:function(){return t.sortBy===e.sortBy&&null!=e.sortBy&&t.addSortClass},sort:function(){e.sortBy&&null!==e.sortBy&&e.$emit('super-grid-column-sort',e.sortBy)}};// eslint-disable-line no-unused-vars
// view model for tracking state
// behavior that needs to be bound to the view
null!==e.info&&(n.info=e.info),e.$watchGroup(['gridData.sortBy','gridData.sortDirection'],function(t){var s=slicedToArray(t,2),i=s[0],o=s[1];n.sortIcon=i===e.sortBy?'desc'===o?'sort-down':'sort-up':'desc'===e.defaultSortDirection?'sort-down':'sort-up'})}]},{key:'link',value:function(e,t){var n=Array.from(t.parent().children()).indexOf(t[0]);e.$emit('super-grid-column-init',n)}}]),t}(Component);return new e(props$8,'grid-column',config$a)}// #-- END Component (super-grid-column) --# //
// #---------------------------------------# //
/*@ngInject*/function gridRow(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope','$log',function(e,t){var n=e.gridData=e.$root.utils.findInParentScope('gridData',e),s=e.vm={// eslint-disable-line no-unused-vars
selected:!1},i=e.go={// eslint-disable-line no-unused-vars
};// eslint-disable-line no-unused-vars
// view model for tracking state
// behavior that needs to be bound to the view
null!=e.gridData.selectable&&null==e.selectedValue&&t.error('super-grid-row :: row must specify a "selected-value" value when inside a "selectable" super-grid'),e.$emit('super-grid-row-init'),e.$watch('vm.selected',function(t,n){t===n||e.$emit('super-grid-row-selection')})}]},{key:'link',value:function(e,t){var n=e.gridData,s=t[0].style,i;t.toggleClass('selectable',null!=n.selectable),t.toggleClass('hoverable',null!=n.hoverable),i=n.defaultRowHeight,s.minHeight=i+'px',t.on('click mousemove',function(){i!==t[0].offsetHeight&&(i=t[0].offsetHeight)}// gridData.debounceCheckInView();
)}}]),t}(Component);return new e(props$9,'grid-row',config$b)}// #-- END Component (super-grid-row) --# //
// #------------------------------------# //
/*@ngInject*/function inputCheckbox(e,t){var n=function(n){function s(){return classCallCheck(this,s),possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return inherits(s,n),createClass(s,[{key:'controller',/*@ngInject*/value:['$scope','$element','$attrs','$stateParams','enumPropertyAction',function(e,n,s,i,o){e.labelWeight=t.labelWeight(e.labelWeight,e.label);// created to allow assigning to model because of ng-if scope
var r=e.cmpt=e,l=e.vm={label:e.label,show:!1,id:'checkbox-'+_Mathceil(1e7*Math.random()).toString()};// eslint-disable-line no-unused-vars
e.$watchGroup(['editMode','permissions'],function(e){// index matches expression
var t=e[0],r=e[1],d=null==t;l.editMode=d?i.action&&i.action.endsWith('edit'):!0===t,null==r?void 0===s.permissions?(l.permissions={view:!0,edit:!0,redacted:!1,raw:3},d&&(l.editMode=!0)):(l.permissions={view:!0,edit:!1,redacted:!1,raw:1},d&&(l.editMode=!1)):l.permissions=angular.extend({},r),l.permissions.edit||(l.editMode=!1),l.permissions.raw===o.notVisible&&n.remove()}),!0!==e.isDisabled&&e.$watch('selectAll',function(t){null!=t&&(e.model=t)});e.go={// eslint-disable-line no-unused-vars
toggleView:function(){l.show=!l.show}}}]},{key:'link',value:function(t,n,s){var i=t.$input=n.find('input');// prevent other listeners from being called if the input is not
// the target of the event -- e.g. if the label is clicked, two
// click events are emitted: one for label, one for checkbox.
// see http://stackoverflow.com/questions/10819699/simple-click-on-labels-makes-double-click#10819803
if(n.on('click',function(e){'INPUT'!==e.target.tagName&&e.stopImmediatePropagation()}),s.$observe('label',function(e){t.vm.label=e}),s.inputId&&s.$observe('inputId',function(n){t.vm.id=e.toDashCase(n)}),!s.label&&s.ariaLabel&&(s.$observe('ariaLabel',function(){i.attr('aria-label',s.ariaLabel)}),n.removeAttr('aria-label')),(!t.name||null==t.name)&&t.vm.label){var o=e.toDashCase(t.vm.label);t.name=o}}}]),s}(Component);return new n(props$a,'input-checkbox',config$c)}// #-- END Component (super-input-checkbox) --# //
// #------------------------------------------# //
/*@ngInject*/function inputDatepicker(){function e(e){return!(10!==e.length)&&!u(e)&&!!t(e)&&!!moment(e,dateFormat).isValid()&&1900<=moment(new Date(e)).year()&&2100>=moment(new Date(e)).year()}function t(e){return!!slashPattern.test(e)||!!dotPattern.test(e)||!!dashPattern.test(e)}//	check for numbers (0-9) or dash, period, slash, return/enter, & tab characters
function n(e){return!!(48<=e&&57>=e)||!![45,46,47,13,9].includes(e)}function s(e,t){return''===e?'':u(e)?e:moment(e).format(t)}function i(e){if(!u(e)){var t=new Date(e);if(!(t instanceof Date))throw new TypeError('Datepicker requires a valid date object');if(isNaN(t.getTime()))throw new TypeError('Datepicker requires a valid date string');else return t}else return e}function o(e,t){var n=Array.from(angular.element(e).find('td')),s=n.filter(function(e){return angular.element(e).attr('data-day')===t}),i=angular.element(s[0]);i.hasClass('is-empty')||i.addClass('is-intended')}function r(e){angular.element(e).find('td').removeClass('is-intended')}var l=function(t){function l(){return classCallCheck(this,l),possibleConstructorReturn(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return inherits(l,t),createClass(l,[{key:'controller',/*@ngInject*/value:['$scope','$element','$attrs','$stateParams','moment','enumPropertyAction',function(t,n,l,d,c,p){dateFormat=t.dateFormat||'L';// created to allow assigning to model because of ng-if scope
var m=t.cmpt=t,g=t.vm={displayDate:''};// eslint-disable-line no-unused-vars
t.$watchGroup(['editMode','permissions'],function(e){// index matches expression
var t=e[0],s=e[1],i=null==t;g.editMode=i?d.action&&d.action.endsWith('edit'):!0===t,null==s?void 0===l.permissions?(g.permissions={view:!0,edit:!0,redacted:!1,raw:3},i&&(g.editMode=!0)):(g.permissions={view:!0,edit:!1,redacted:!1,raw:1},i&&(g.editMode=!1)):g.permissions=angular.extend({},s),g.permissions.edit||(g.editMode=!1),g.permissions.raw===p.notVisible&&n.remove()}),t.$watch('model',function(e){return null==e?void(g.displayDate=''):void('string'==typeof e&&''!==e&&(t.model=e=i(e)),g.displayDate=s(e,dateFormat),e instanceof Date&&c(e).isValid()&&(!g.calendar||(g.calendar.gotoDate(e),o(g.calendar.el,e.getDate()))))}),t.$watch('vm.displayDate',function(n,s){(null==n||''===n)&&g.calendar&&(g.calendar.setDate(null),g.calendar.gotoToday(),t.model=null),n===s||!e(n)||g.calendar&&r(g.calendar.el)}),t.$watch('options',function(e,t){e===t||(void 0!==e.minDate&&g.calendar.setMinDate(e.minDate),void 0!==e.maxDate&&g.calendar.setMaxDate(e.maxDate))},!0);t.go={// eslint-disable-line no-unused-vars
validate:function(t){return null==t||''===t||!!(g.permissions.redacted&&u(t))||!!e(t)||'Invalid date'}}}]},{key:'link',value:function(e,t,s){function i(){var i=t.find('input');if(0!==i.length){null!=s.name&&i.attr('name',e.name),null!=s.inputId&&i.attr('id',s.inputId),null!=s.placeholder&&i.attr('placeholder',e.placeholder);//set up date picker
var r={field:i[0],format:'MM/DD/YYYY',minDate:'1/1/1900',maxDate:'12/31/2100',showDaysInNextAndPreviousMonths:!0,container:t[0],onSelect:function(t){e.$root.safeApply(function(){// if the model date is the same day as the select date, no model update is needed
var n=moment(new Date(e.model)).startOf('day'),s=moment(new Date(t)).startOf('day');0!==n.diff(s,'d')&&(e.model=t),e.vm.displayDate=moment(t).format(dateFormat)})}};// Available config options:
// https://github.com/dbushell/Pikaday#configuration
e.options&&Object.assign(r,e.options),i[0]._pikaday=new Pikaday(r),e.vm.calendar=i[0]._pikaday,i.on('blur',function(){e.vm.calendar.el.style.zIndex='50000',setTimeout(function(){return e.vm.calendar.el.style.zIndex=''},200);var t=Array.from(e.vm.calendar.el.getElementsByTagName('button'));t.forEach(function(e){return e.setAttribute('tabindex','-1')})}),i.on('focus',function(){var e=t[0].getBoundingClientRect();t.toggleClass('align-right',e.right+260>window.innerWidth),o()}),i.on('keypress',function(e){n(e.charCode)||e.preventDefault()})}}function o(){var t=e.vm.calendar.getDate(),n=e.model;'string'==typeof n&&(n=new Date(n)),e.options&&e.options.defaultDate&&e.vm.calendar.gotoDate(e.options.defaultDate),t&&n&&t.getTime()===n.getTime()||e.vm.calendar.setDate(e.model)}e.$watch('model',function(e){return t.toggleClass('model-is-empty',!e)}),e.$watch('editMode',function(t,n){t===n||t&&e.$applyAsync(i)}),e.$on('show-hide-toggle',function(n,s){s.redacted&&s.show?t.addClass('ss-unredacted'):(t.removeClass('ss-unredacted'),e.$applyAsync(i))}),s.$observe('label',function(t){e.label=t}),e.$on('$destroy',function(){null!=e.vm.calendar&&e.vm.calendar.destroy()})}}]),l}(Component),u=function(e){return redactedRegex.test(e)};return new l(props$b,'input-datepicker',config$d)}// #-- END Component (super-input-datepicker) --# //
// #--------------------------------------------# //
/*@ngInject*/function inputRadio(e,t){var n=function(n){function s(){return classCallCheck(this,s),possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return inherits(s,n),createClass(s,[{key:'controller',/*@ngInject*/value:['$scope','$element','$attrs','$stateParams','enumPropertyAction',function(e,n,s,i,o){e.labelWeight=t.labelWeight(e.labelWeight,e.label);var r=e.vm={// eslint-disable-line no-unused-vars
label:e.label,disabled:!1,id:'radio-'+_Mathceil(1e7*Math.random()).toString()};e.$watchGroup(['editMode','permissions','isDisabled'],function(e){// index matches expression
var t=e[0],l=e[1],d=null!=e[2]&&e[2],u=null==t;r.editMode=u?i.action&&i.action.endsWith('edit'):!0===t,null==l?void 0===s.permissions?(r.permissions={view:!0,edit:!0,redacted:!1,raw:3},u&&(r.editMode=!0)):(r.permissions={view:!0,edit:!1,redacted:!1,raw:1},u&&(r.editMode=!1)):r.permissions=angular.extend({},l),r.permissions.edit||(r.editMode=!1),r.disabled=!r.editMode||!0===d,r.permissions.raw===o.notVisible&&n.remove()})}]},{key:'link',value:function(t,n,s){var i=t.$input=n.find('input');// prevent other listeners from being called if the input is not
// the target of the event -- e.g. if the label is clicked, two
// click events are emitted: one for label, one for checkbox.
// see http://stackoverflow.com/questions/10819699/simple-click-on-labels-makes-double-click#10819803
n.on('click',function(e){'INPUT'!==e.target.tagName&&e.stopImmediatePropagation()}),s.$observe('label',function(e){t.vm.label=e}),s.inputId&&s.$observe('inputId',function(n){t.vm.id=e.toDashCase(n)}),!s.label&&s.ariaLabel&&(s.$observe('ariaLabel',function(){i.attr('aria-label',s.ariaLabel)}),n.removeAttr('aria-label')),null!=t.name&&n.find('input').attr('name',t.name)}}]),s}(Component);return new n(props$c,'input-radio',config$e)}// #-- END Component (super-input-radio) --# //
// #---------------------------------------# //
/*@ngInject*/function inputText(e,t,n,s,i,o){var r=e('components/super-input-text/input-text.html'),l=function(e){function l(){return classCallCheck(this,l),possibleConstructorReturn(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return inherits(l,e),createClass(l,[{key:'template',value:function(e,n){var s=angular.element(r),o=s.find('span'),l=Array.from(o).filter(function(e){return angular.element(e).hasClass('input')});if(n.ssIcon||n.ssIconBefore){for(var d=0,u=l.length;d<u;d++)l[d].setAttribute('ss-Icon-Before',n.ssIcon||n.ssIconBefore);t.removeAttr(e,n,['ssIcon','ssIconBefore'])}if(n.ssIconAfter){for(var c=0,p=l.length;c<p;c++)l[c].setAttribute('ss-Icon-After',n.ssIconAfter);t.removeAttr(e,n,'ssIconAfter')}if(n.mask){var m=i.getOptions(n.mask);if(null!=m){// only not redacted inputs
var g=Array.from(o).filter(function(e){var t=e.className.split(' ');return t.includes('input')&&!t.includes('.is-disabled')});g.forEach(function(t){var e=t.getElementsByTagName('input')[0],n=Object.keys(m);n.forEach(function(t){e.setAttribute(t,m[t])})})}}return s[0].outerHTML}/*@ngInject*/},{key:'controller',value:['$scope','$log','$element','$attrs','$stateParams','rAF','enumPropertyAction',function(e,t,o,r,l,d,u){function c(e){// index matches expression
var t=e[0],n=e[1],s=null==t;m.editMode=s?l.action&&l.action.endsWith('edit'):!0===t,null==n?void 0===r.permissions?(m.permissions={view:!0,edit:!0,redacted:!1,raw:3},s&&(m.editMode=!0)):(m.permissions={view:!0,edit:!1,redacted:!1,raw:1},s&&(m.editMode=!1)):m.permissions=angular.extend({},n),m.permissions.edit||(m.editMode=!1),m.permissions.raw===u.notVisible&&o.remove()}// prevent use of type="date" because it's not supported by IE9, and
// super-input-datepicker is designed to handle this use case
if('date'===e.type)return void t.error('super-input-text => type="date" is not supported, please use super-input-datepicker instead.');e.labelWeight=s.labelWeight(e.labelWeight,e.label),null==e.hasFocus&&(e.hasFocus=!1);// created to allow assigning to model because of ng-if scope
var p=e.cmpt=e,m=e.vm={modelopts:{},show:!1,id:'input-'+_Mathceil(1e7*Math.random()).toString()};c([e.editMode,e.permissions]),null!=e.debounce&&(m.modelopts.debounce=parseInt(e.debounce,10));e.go={// eslint-disable-line no-unused-vars
// clears the input
clearEntry:function(){e.model='',e.hasFocus=!0,e.$input.triggerHandler('keyup'),n.emit('entry-cleared')},toggleView:function(){m.show=!m.show},override:function(){p.model=e.defaultValue,d.raw(function(){return e.$input[0].select()})},getMaskedModel:function(t){// no mask, just return the model
return null==e.mask?t:i.getMaskedValue(e.mask,t)}};e.$watchGroup(['editMode','permissions'],c),e.$watch('vm.show',function(){e.$emit('show-hide-toggle',{show:m.show,redacted:m.permissions.redacted,editMode:m.editMode})}),e.$watch('model',function(t){m.showClear=t&&!e.readonly})}]},{key:'link',value:function(e,t,n,s,i){var r=void 0,l='';e.$watch('model',function(e){return t.toggleClass('model-is-empty',!e)}),n.type||(n.type='text'),i(function(e){r=e,l=e.text().trim()}),e.placeholder=l,r.remove(),e.$applyAsync(function(){var s=e.$input=t.find('input');//add the readonly attribute
null!=n.readonly&&(s.attr('readonly','readonly'),s.attr('aria-readonly','true')),'number'===n.type&&null!=n.step&&s.attr('step',n.step),null!=n.name&&s.attr('name',n.name),n.inputId&&n.$observe('inputId',function(t){e.vm.id=o.toDashCase(t)}),!n.label&&n.ariaLabel&&(n.$observe('ariaLabel',function(){s.attr('aria-label',n.ariaLabel)}),t.removeAttr('aria-label')),null!=e.defaultValue&&s.on('blur',function(){e.$applyAsync(function(){return e.model=e.model||null})})}),n.$observe('label',function(t){return e.label=t}),n.$observe('type',function(t){return e.type=t})}}]),l}(Component);return new l(props$d,'input-text',config$f)}// #-- END Component (super-input-text) --# //
// #--------------------------------------# //
/*@ngInject*/function inputTextarea(e,t,n){var s=function(s){function i(){return classCallCheck(this,i),possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return inherits(i,s),createClass(i,[{key:'controller',/*@ngInject*/value:['$scope',function(e){e.labelWeight=t.labelWeight(e.labelWeight,e.label);e.vm={// eslint-disable-line no-unused-vars
label:e.label,editMode:null==e.editMode||!0===e.editMode// strict equality to not bind it to the $scope
}}]},{key:'link',value:function(t,s,i){//	Check the 'initialHeight' prop to see if it exists, then parse out & check the the numeric value against the default, or set it to the default
var o=s.find('textarea');i.$observe('label',function(e){t.vm.label=e}),i.$observe('initialHeight',function(e){(!e||50>parseInt(e,10))&&n.warn('Default textarea height will be set to 50px')}),null!=t.placeholder&&o.attr('placeholder',t.placeholder),null!=t.name&&o.attr('name',t.name),null!=t.id&&o.attr('id',t.id);var r=t.initialHeight&&''!==t.initialHeight?function(e){return 50>=e?50:e}(parseInt(t.initialHeight,10)):50,l=function(){t.vm.editMode?200>=o[0].scrollHeight?(o[0].style.height=r+'px',o[0].style.height=o[0].scrollHeight+'px'):o[0].style.height='200px':o[0].style.height=o[0].scrollHeight<=r?r+'px':o[0].scrollHeight+'px'};// Resize the textarea on change
o.on('input change',l),e(l,0)}}]),i}(Component);return new s(props$e,'input-textarea',config$g)}// #-- END Component (super-input-textarea) --# //
// #------------------------------------------# //
/*@ngInject*/function loader(e){var t=function(t){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,t),createClass(n,[{key:'controller',/*@ngInject*/value:['$scope','rAF',function(e,t){// view model for tracking state
var n=e.vm={loading:!1,hidden:!1,coverStyles:{},fill:!1},s=e.go={// eslint-disable-line no-unused-vars
click:function(){}};// behavior that needs to be bound to the view
e.$watch('isLoading',function(s){t(function(){return n.loading=s},e),n.hidden=!s})}]},{key:'link',value:function(t,n,s){t.vm.fill=null!=s.fill,t.vm.coverStyles['background-color']=null==t.coverColor?e.getBackgroundColor(n):t.coverColor}}]),n}(Component);return new t(props$f,'loader',config$h)}// #-- END Component (super-loader) --# //
// #----------------------------------# //
/*@ngInject*/function multiFilterList(e){var t=function(t){function n(){return classCallCheck(this,n),possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return inherits(n,t),createClass(n,[{key:'controller',/*@ngInject*/value:['$scope','$attrs',function(t){'function'!=typeof t.onSearch&&(t.onSearch=void 0),t.labelWeight=e.labelWeight(t.labelWeight,t.label);var n=t.display||'',o=t.vm={label:t.label,inputId:'multi-filter-'+_Mathceil(1e7*Math.random()).toString(),// "unique" control identifier
filterText:'',filterResultsLength:0,groups:[],options:[],showTags:'tags'===n.toLowerCase(),defaultSelectedText:t.defaultSelectedText,lazyLoadMode:{status:'',searchText:'',arrRef:[]}},s=t.go={// eslint-disable-line no-unused-vars
checkAll:function(){t.selected=o.options.filter(function(e){return!e.hide})},uncheckAll:function(){t.selected=[]},remove:function(e){var n=t.selected.indexOf(e);-1===n?e.checked=!1:t.selected.splice(n,1)},checkFitleredItems:function(){return 0===o.filterResultsLength&&0<o.filterText.length},checkLoadedItems:function(){return 0===o.options.length&&0<o.filterText.length}};t.$watch('vm.filterText',function(e){t.onSearch&&(o.lazyLoadMode.status='loading',o.lazyLoadMode.searchText=o.filterText,o.lazyLoadMode.arrRef=o.options,t.onSearch(o.lazyLoadMode)),o.options.forEach(function(e){e.hide=!0});// filter out the options by the text entered
var n=o.options.filter(function(t){return t._name.toLowerCase().includes(e.toLowerCase())});// those that match the filter, should not be hidden
n.forEach(function(e){return e.hide=!1}),o.filterResultsLength=n.length}),t.$watchCollection('selected',function(e,n){e&&e!==n&&(e.forEach(function(e,n){// if this selected object reference exists in the options, we good.
if(!o.options.includes(e)){// find option by unique property provided in $scope.optionKeyPropName for unique comparisson
// find the option by _name by default
var s=o.options.find(function(n){return t.optionKeyPropName&&n[t.optionKeyPropName]&&e[t.optionKeyPropName]?n[t.optionKeyPropName]===e[t.optionKeyPropName]:n._name===e._name});null==s?!t.onSearch&&t.selected.splice(n,1):t.selected[n]=s}}),o.options.forEach(function(e){return e.checked=!1}),e.forEach(function(e){return e.checked=!0}))}),t.$on('multi-filter-list-group-added',function(e,t){o.groups.push(t);var n=t.vm;n=void 0===n?{}:n;var s=n.hide;// cache first visible group for later comparisons
null!=o.firstVisibleGroup||void 0!==s&&s||(o.firstVisibleGroup=t,t.vm.firstVisible=!0),e.targetScope.$on('$destroy',function(){o.groups=o.groups.filter(function(e){return e!==t})}),e.stopPropagation()}),t.$on('multi-filter-list-group-visibility-changed',function(e){o.firstVisibleGroup=o.groups.find(function(e){var t=e.vm;t=void 0===t?{}:t;var n=t.hide;return!(void 0!==n&&n)}),o.groups.forEach(function(e){e.vm.isFirstVisible=e===o.firstVisibleGroup}),e.stopPropagation()}),t.$on('multi-filter-list-item-added',function(e,n){var s=t.selected;// create a default pillText value
null==n.pillText&&(n.pillText=n._name);// fuzy find the item in our list of selected items. locate it by
// unique property provided in the scope as $scope.optionKeyPropName, check for unique comparison if provided, else
// pillText to ensure uniqueness
var i=s.find(function(e){return t.optionKeyPropName&&e[t.optionKeyPropName]&&n[t.optionKeyPropName]?e[t.optionKeyPropName]===n[t.optionKeyPropName]:e.pillText===n.pillText}),r=s.indexOf(i);i&&i!==n&&(s[r]=n),n.checked=void 0!==i,o.options.push(n),e.targetScope.$on('$destroy',function(){o.options=o.options.filter(function(e){return e!==n})}),e.stopPropagation()}),t.$on('multi-filter-list-item-click',function(e,n){var s=t.selected.indexOf(n);// if the item is not selected
-1===s?t.selected.push(n):t.selected.splice(s,1)})}]},{key:'link',value:function(e,t,n){n.$observe('label',function(t){e.vm.label=t})}}]),n}(Component);return new t(props$g,'multi-filter-list',config$i)}// #-- END Component (super-multi-filter-list) --# //
// #---------------------------------------------# //
/*@ngInject*/function multiFilterListGroup(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope',function(e){// view model for tracking state
var t=e.vm={// eslint-disable-line no-unused-vars
isFirstVisible:!1,hide:!1,options:[],label:e.label},n=e.go={};// behavior that needs to be bound to the view
// eslint-disable-line no-unused-vars
e.$on('multi-filter-list-item-added',function(e,n){t.options.push(n),e.targetScope.$on('$destroy',function(){t.options=t.options.filter(function(e){return e!==n})})}// do not call evt.stopPropagation() since we want this event
// to bubble up to multi-filter-list
),e.$watch(function(){return t.options.every(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.hide;return void 0!==t&&t})},function(n,s){n===s||(t.hide=n,e.$emit('multi-filter-list-group-visibility-changed',e))}),e.$emit('multi-filter-list-group-added',e)}]}]),t}(Component);return new e(props$h,'multi-filter-list-group',config$j)}// #-- END Component (super-multi-filter-list-group) --# //
// #---------------------------------------------------# //
/*@ngInject*/function multiFilterListItem(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope',function(e){e.option.hide=!1;var t=e.vm={// eslint-disable-line no-unused-vars
name:e.option._name,id:'mfli-'+_Mathceil(1e7*Math.random()).toString()// "unique" control identifier
},n=e.go={// eslint-disable-line no-unused-vars
click:function(){e.$emit('multi-filter-list-item-click',e.option)}};e.$emit('multi-filter-list-item-added',e.option)}]}]),t}(Component);return new e(props$i,'multi-filter-list-item',config$k)}// #-- END Component (super-multi-filter-list-item) --# //
// #--------------------------------------------------# //
/*@ngInject*/function orgSearch(e,t,n,s){var i=function(i){function o(){return classCallCheck(this,o),possibleConstructorReturn(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return inherits(o,i),createClass(o,[{key:'link',value:function(t){t.$on('focusBind',function(e,n){t.vm.focused=!!n});var n=function(e){// no filter text. leave.
// a selection was already made, so the menu should be closed.
// clicking the input or the result list should be ignored.
if((e.stopPropagation(),!t.vm.disabled)&&''!==t.vm.query&&!1!==t.vm.menuOpen&&!0!==t.vm.madeSelection&&!t.vm.madeSelection&&'INPUT'!==e.target.tagName&&!e.target.classList.contains('result'))// menu is already closed. leave.
//We're disabled. leave.
{// if we are in single mode, and we are cancelling our action, replace with the last selected value.
if(!1===t.usePill&&1===parseInt(t.limit,50)){var n=t.model&&t.model[0]||{};return t.vm.query=n.Name+' ('+n.Id+')'||null,t.vm.menuOpen=!1,void t.$apply()}// if we were in the middle of making a selection, then reset the input and everything else.  We can't recover
//	without throwing an error, and most of the time this field isn't required so getting an error seems out of place.
t.vm.results=null,t.vm.query=null,t.selectedName=null,t.vm.menuOpen=!1,t.$apply()}};// when we click anywhere that isn't the input or the results list do stuff
e.on('click',n),t.$on('$destroy',function(){e.off('click',n)})}/*@ngInject*/},{key:'controller',value:['$scope',function(e){function i(){u=t(/*#__PURE__*/regeneratorRuntime.mark(function t(){var n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object.assign({searchText:c,limit:r.queryLimit}),r.loading=!0,r.menuOpen=!0,r.madeSelection=!1,t.next=6,s.searchOrgs(n);case 6:i=t.sent,200===i.status&&(r.results=i.data),e.excludeByIds.length&&(r.results=r.results.filter(function(t){return 0>e.excludeByIds.indexOf(t.Id)})),r.loading=!1;case 10:case'end':return t.stop();}},t,this)}))()}var o=e.removeById,r=e.vm={disabled:!1,query:'',loading:!0,queryLimit:e.queryLimit||50,limit:parseInt(e.limit,10)||1,// default to 1
usePill:!!e.usePill,focused:e.focused,madeSelection:!1,// has the user selected something from the search results?
menuOpen:!1,lastPillValue:{}};e.excludeByIds=e.excludeByIds||[],null!=o&&e.excludeByIds.push(o);// put the selected name and check so that we don't double search once we make a selection
var l='',d=e.go={// eslint-disable-line no-unused-vars
add:function(t){// did we find the current selection in the list of selected employees
var n=!1;if(r.madeSelection=!1,null==e.model&&(e.model=[]),1>e.model.length||!r.usePill)e.model=[t],r.madeSelection=!0;else{for(var s=e.model.length;s--;)if(t.Id===e.model[s].Id){n=!0;break}n||(r.madeSelection=!0,e.model.push(t))}r.query='',r.usePill||1!==r.limit||(r.query=l=t.Name+' ('+t.Id+')'),r.loading=!1,r.menuOpen=!1,r.results=[]},remove:function(t){e.model.forEach(function(n,s){t.Id===n.Id&&e.model.splice(s,1)})}},u,c;!r.usePill&&e.model&&e.model[0]&&(r.madeSelection=!0,r.disabled=!1,r.query=e.model[0].Name+' ('+e.model[0].Id+')',r.lastPillValue=e.model),e.$watch('vm.query',function(t,n){/*	when we are in single select mode, once we make a selection,
	      * 	we fill the textbox with the result which then tries
	      * 	to make another search call.  If we detect that we are searching on the
	      * 	name we just selected... stop.
	      */return null!=t&&t||t!==n?void(null!=u&&(u.$abort(),u=null),(r.usePill||t!==l)&&(t&&0<t.length&&t!==n&&(c=t.trim(),i()),!r.usePill&&(null==t||1>=t.length)&&(e.model=[],r.madeSelection=!1))):(r.menuOpen=!1,r.results=[],void(e.model=[]))}),e.$watch('model.length',function(t){r.disabled=0<=r.limit&&t>=r.limit&&r.usePill,!r.usePill&&e.model&&e.model[0]&&1===r.limit&&(r.madeSelection=!0,r.disabled=!1,l=r.query=e.model[0].Name+' ('+e.model[0].Id+')')}),n.on('entry-cleared',function(){r.results=null,r.menuOpen=!1,e.model=[]},e)}]}]),o}(Component);return new i(props$j,'org-search',config$l)}// #-- END Component (super-org-search) --# //
// #--------------------------------------# //
/*@ngInject*/function popover(e,t,n){/**
	  * Will go up the chain of elements to find overflow/overflowY.
	  *
	  * @return Will return first ancestor with overflow or window.
	  */function s(t){for(var n;t;){if(n=e.getComputedStyle(t),'scroll'===n.overflow||'scroll'===n.overflowY)return t;if(null==t.parentElement||'BODY'===t.parentElement.nodeName)return e;t=t.parentElement}}function i(t,n,s,i){var o=n[0].getBoundingClientRect(),r=t[0].offsetWidth,l=t[0].offsetHeight;if(s!==e){var d=s.getBoundingClientRect(),u=d.top>o.bottom,c=d.bottom<o.top;if(u||c)return!1}if(o.left+r+10>=e.innerWidth){// tooltip to the left
var p=i.before?o.left+22:o.right+6;t.css('left',p-r+'px'),t.addClass('flip-x')}else{// tooltip to the right
var m=i.before?o.left-9:o.right-24;t.css('left',m+'px'),t.removeClass('flip-x')}return o.bottom+l+10>=e.innerHeight?(t.css('top',o.top-l-5+'px'),t.addClass('flip-y')):(t.css('top',o.bottom+8+'px'),t.removeClass('flip-y')),!0}var o=function(o){function r(){return classCallCheck(this,r),possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return inherits(r,o),createClass(r,[{key:'controller',/*@ngInject*/value:['$scope',function(e){e.vm={// eslint-disable-line no-unused-vars
icon:null==e.help?'info-circle':'question-circle',iconAfter:null,link:e.link||'',onScreen:!0,menuShowing:!1,ariaLabel:'Information'}}]},{key:'link',value:function(o,r,l){function d(){// listen to container changes if it isn't the window
if(m!==e){// re-calculate layout of the tooltip while we scroll the container
var n=null;angular.element(m).bind('scroll',function(){null!==n||(n=t(u,o).then(function(){return n=null}))});// when the mouse wheel is engaged over the tooltip, remove
// pointer-events while the user is scrolling so that the
// tooltip does not interfere with the scrolling of the container
var s=null;c.bind('wheel',function(e){null===s?(e.preventDefault(),c.addClass('scrolling')):clearTimeout(s),s=setTimeout(function(){s=null,c.removeClass('scrolling')},500)})}}function u(){if(o.vm.menuShowing){var e=o.vm.onScreen;o.vm.onScreen=i(c,r,m,p),o.vm.onScreen!==e&&o.$digest()}}var c=angular.element(r[0].querySelector('div.content')),p={before:!0,after:!1};null!=l.ssIcon||null!=l.ssIconBefore?o.vm.icon=l.ssIcon:null!=l.ssIconAfter&&(o.vm.iconAfter=l.ssIconAfter,o.vm.icon=null,p.after=!0,p.before=!1),n.removeAttr(r,l,['ss-icon','ss-icon-before','ss-icon-after']),null!=l.ariaLabel&&(o.vm.ariaLabel=l.ariaLabel);var m;o.$on('ss-menu-open',function(e,n,l){l[0]===c[0]&&(o.vm.menuShowing=o.vm.onScreen=!0,void 0===m&&(m=s(r[0]),d()),o.$digest(),t.raw(function(){return i(c,r,m,p)}))}),o.$on('ss-menu-closed',function(e,t,n){n[0]===c[0]&&(o.vm.menuShowing=!1,o.$digest())}),ambient.on('update','viewport-updates',u),o.$on('$destroy',function(){ambient.off('update','viewport-updates',u)})}}]),r}(Component);return new o(props$k,'popover',config$m)}// #-- END Component (super-popover) --# //
// #-----------------------------------# //
/*@ngInject*/function searchResultsEmployee(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope',function(e){var t=e.vm={// eslint-disable-line no-unused-vars
},n=e.go={// eslint-disable-line no-unused-vars
}}]}]),t}(Component);return new e(props$l,'search-results-employee',config$n)}// #-- END Component (super-search-results-employee) --# //
// #---------------------------------------------------# //
/*@ngInject*/function select(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope',function(e){// view model for tracking state
var t=e.vm={// eslint-disable-line no-unused-vars
label:e.label},n=e.go={// eslint-disable-line no-unused-vars
updateSelect:function(t){e.selected=t}};// behavior that needs to be bound to the view
(null==e.selected||void 0===e.selected)&&(e.selected=e.model.options[0],e.$watch('selected',function(t){e.model.selected=t}))}]},{key:'link',value:function(e,t,n){n.$observe('label',function(t){e.vm.label=t})}}]),t}(Component);return new e(props$m,'select',config$o)}// #-- END Component (super-select) --# //
// #----------------------------------# //
/*@ngInject*/function selectList(e,t,n){var s=function(s){function i(){return classCallCheck(this,i),possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return inherits(i,s),createClass(i,[{key:'controller',/*@ngInject*/value:['$scope','$element','$attrs','$stateParams','enumPropertyAction',function(e,t,s,i,o){e.labelWeight=n.labelWeight(e.labelWeight,e.label);// created to allow assigning to model because of ng-if scope
var r=e.cmpt=e,l=new Map,d={standard:{btnType:'std'},filter:{btnType:'smp'}},u=e.vm={buttonLabel:'',buttonClass:'std',show:!1,inputId:'select-list-'+_Mathceil(1e7*Math.random()).toString(),// "unique" control identifier
defaultOptionLabel:e.defaultOptionLabel||'Please Select',defaultOptionValue:e.defaultOptionValue||null// don't make it undefined; undefined won't send a value but null will
},c=e.go={// eslint-disable-line no-unused-vars
toggleView:function(){u.show=!u.show},getLabelByValue:function(t){// we are returning empty string if the default option is included AND the val is null; otherwise maintain backwards compatibility
return!0===e.includeDefaultOption&&t===u.defaultOptionValue?'':l.get(t)}};// eslint-disable-line no-unused-vars
// view model for tracking state
void 0!==e.type&&(t.addClass(e.type),u.buttonClass=d[e.type].btnType),e.$watchGroup(['editMode','permissions'],function(e){// index matches expression
var n=e[0],r=e[1],l=null==n;u.editMode=l?i.action&&i.action.endsWith('edit'):!0===n,null==r?void 0===s.permissions?(u.permissions={view:!0,edit:!0,redacted:!1,raw:3},l&&(u.editMode=!0)):(u.permissions={view:!0,edit:!1,redacted:!1,raw:1},l&&(u.editMode=!1)):u.permissions=angular.extend({},r),u.permissions.edit||(u.editMode=!1),u.permissions.raw===o.notVisible&&t.remove()}),e.$watch('type',function(e,n){t.hasClass(n)&&t.removeClass(n),t.addClass(e),void 0!==e&&(u.buttonClass=d[e].btnType)}),e.$watch('model',function(e){u.buttonLabel=l.has(e)?l.get(e):u.defaultOptionLabel}),e.$on('select-list-item-click',function(t,n){e.model=n,t.stopPropagation()}),e.$on('select-list-item-init',function(t,n,s){l.set(n,s),JSON.stringify(n)===JSON.stringify(e.model)&&(u.buttonLabel=s),t.stopPropagation()})}]},{key:'link',value:function(n,s,i){t.raw(function(){var t=s.find('button');// if the button is not visible, this is not editable
// and validation events should not be triggered
0===t.length||(t.on('focus',e.makeEventEmitter(n,t)),t.on('click',function(){e.resetValidation(s)}),t.on('blur',e.makeEventEmitter(n,t)),n.$watch('model',function(){n.$emit('ss-validate-field-event',t,'change')}))}),n.$applyAsync(function(){var e=n.$el=s.find('button');// Pass through of automation hooks
null!=i.name&&e.attr('data-auto',i.dataAuto)}),i.$observe('label',function(e){return n.label=e})}}]),i}(Component);return new s(props$n,'select-list',config$p)}// #-- END Component (super-select-list) --# //
// #---------------------------------------# //
/*@ngInject*/function selectListItem(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope','$attrs',function(e,t){var n=e.vm={},s=['heading'];// these values for the 'type' attr are excluded from click functionality
e.$watch('isDisabled',function(e){n.disabledClass=!0===e?'disabled':''});e.go={// eslint-disable-line no-unused-vars
click:function(n){return e.isDisabled||s.includes(t.type)?(n.stopPropagation(),void n.preventDefault()):void e.$emit('select-list-item-click',e.value,e.label)}};switch(t.type){case'heading':break;default:e.$emit('select-list-item-init',e.value,e.label);}}]},{key:'link',value:function(e,t,n){switch(n.type){case'heading':e.$applyAsync(function(){t.addClass('heading')});break;default:}}}]),t}(Component);return new e(props$o,'select-list-item',config$q)}// #-- END Component (super-select-list-item) --# //
// #--------------------------------------------# //
/*@ngInject*/function tab(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope','$log','$element',function(e){// view model for tracking state
var t=e.vm={active:!1,tabId:e.tabId,label:e.label,subLabel:e.subLabel||'',visible:!0},n=e.go={// eslint-disable-line no-unused-vars
activate:function(){e.$emit('ss-tab-activate',t.tabId)}};// behavior that needs to be bound to the view
e.$emit('ss-tab-init',t.tabId,function(e){return t.active=t.tabId===e})}]},{key:'link',value:function(e,t){e.$watch('vm.active',function(e,n){e===n||e&&!n&&t[0].focus()})}}]),t}(Component);return new e(props$p,'tab',config$r)}// #-- END Component (super-tab) --# //
// #-------------------------------# //
/*@ngInject*/function tabList(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope',function(e){// view model for tracking state
var t=e.vm={// eslint-disable-line no-unused-vars
},n=e.go={// eslint-disable-line no-unused-vars
click:function(){}};// behavior that needs to be bound to the view
}]},{key:'link',value:function(e,t,n){var s=null!=n.flat||t.hasClass('flat');t.addClass('ss-tab-list'+(s?'-flat':''))}}]),t}(Component);return new e(props$q,'tab-list',config$s)}// #-- END Component (super-tab-list) --# //
// #-----------------------------------------# //
/*@ngInject*/function tabListItem(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope','$state','$stateParams','$element','ssPermissionsSvc',function(e,t,n,s,i){// view model for tracking state
var o=e.vm={params:Object.assign({},n,e.params||{}),label:e.label,subLabel:e.subLabel||''},r=e.state&&!i.isPermittedRoute(t.href(e.state,o.params)),l=e.url&&!i.isPermittedRoute(e.url);// destroy the scope if this tab is not visible to the user
(r||l)&&e.$destroy();// behavior that needs to be bound to the view
var d=e.go={testActiveState:function(){// first test if the state name is the current state name
if(t.is(e.state)){// if so then test params removing ignored
var n=Object.assign({},o.params);return angular.isArray(e.paramsIgnoredForActive)&&e.paramsIgnoredForActive.forEach(function(e){delete n[e]}),t.includes(e.state,n)}// otherwise test if state is child of link
return null==e.url?t.includes(e.state):e.url.startsWith(t.href(t.current.name))}};e.$onMany=function(t,n){t.forEach(function(t){e.$on(t,n)})},s.removeClass('active'),s.attr('aria-selected',!1),d.testActiveState()&&(s.addClass('active'),s.attr('aria-selected',!0)),e.$onMany(['$stateChangeSuccess','$locationChangeSuccess'],function(){s.removeClass('active'),s.attr('aria-selected',!1),d.testActiveState()&&(s.addClass('active'),s.attr('aria-selected',!0))})}]}]),t}(Component);return new e(props$r,'tab-list-item',config$t)}// #-- END Component (super-tab-list-item) --# //
// #-----------------------------------------# //
/*@ngInject*/function tabMenu(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope',function(e){null==e.tabs&&(e.tabs=[]);// view model for tracking state
var t=e.vm={// eslint-disable-line no-unused-vars
},n=e.go={// eslint-disable-line no-unused-vars
activateTab:function(t){e.$emit('ss-tab-activate',t)},checkIfActive:function(){return e.tabs.some(function(n){return n.tabId===e.activeTabId})},calcMenuLabel:function(){return n.checkIfActive()?e.tabs.find(function(n){return n.tabId===e.activeTabId}).label:e.tabs.length+' more'}};// behavior that needs to be bound to the view
}]},{key:'link',value:function(e,t){e.$watch('activeTabId',function(n,s){n===s||e.tabs.some(function(e){return e.tabId===n})&&(t.hasClass('ss-menu-open')?t[0].querySelector('.tab-menu-'+n).focus():t[0].focus())});var n=null;t.on('click',function(){return n=null}),t.on('keydown',function(e){['ArrowDown','ArrowUp',' ','Enter'].includes(e.key)&&(n=e.key)}),e.go.handleMenuOpen=function(){var e=Array.from(t[0].querySelectorAll('.select-menu-list-item')),s=t[0].querySelector('.active-menu-item');'ArrowDown'===n?e[0].focus():'ArrowUp'===n?e.pop().focus():null!=s&&s.focus()}}}]),t}(Component);return new e(props$s,'tab-menu',config$u)}// #-- END Component (super-tab-menu) --# //
// #------------------------------------# //
/*@ngInject*/function tabset(){var e=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'controller',/*@ngInject*/value:['$scope','$log',function(e,t){// const {glean} = ssObjectHlp;
// view model for tracking state
var n=e.vm={// eslint-disable-line no-unused-vars
activeTab:e.initActiveTab||null,allTabIds:[],overflowTabs:[]},s=e.go={// eslint-disable-line no-unused-vars
/**
	     * Set the active tab ID on $scope, then call all registered tab callbacks with the new tab ID.
	     * Do nothing if the provided tab ID matches the currently active ID.
	     * @param {String} newId The tab ID to set as the active one
	     */setActiveTab:function(t){n.activeTab===t||(n.activeTab=t,e.onTabChange({$tabId:n.activeTab}),n.allTabIds.forEach(function(e){return i[e].tabCb(n.activeTab)}))}},i={},o=parseInt(e.tabLimit,10),r=Number.isNaN(o)?-1:o;// behavior that needs to be bound to the view
// mapping of tabId to tab activation callbacks, each of which will be fired when the activeTab is set
e.$on('ss-tab-init',function(e,s,o){if(e.stopPropagation(),null!=i[s])return void t.error('super-tabset => tab \''+s+'\' is already registered');var l=e.targetScope.vm;if(0<=r){// if we have too many tabs, turn the last tab spot into
// a tab dropdown that contains the tab that used to be in
// that spot.
if(n.allTabIds.length===r){var d=n.allTabIds.slice(-1)[0],u=i[d].tabVm,c=u.label,p=u.subLabel;n.overflowTabs.push({tabId:d,label:c,subLabel:p}),i[d].tabVm.visible=!1}// add the tab to the overflow list
if(n.allTabIds.length>=r){var m=l.label,g=l.subLabel;n.overflowTabs.push({tabId:s,label:m,subLabel:g}),e.targetScope.vm.visible=!1}}i[s]={tabCb:o,tabId:s,tabVm:l},n.allTabIds.push(s),null==n.activeTab&&(n.activeTab=s),o(n.activeTab)}),e.$on('ss-tab-activate',function(e,t){e.stopPropagation(),s.setActiveTab(t)})}]},{key:'link',value:function(e,t,n,s,i){function o(e){e.stopPropagation(),e.preventDefault()}var r=null!=n.flat||t.hasClass('flat');t.addClass('ss-tab-list'+(r?'-flat':'')),t.on('keydown',function(t){var n=e.vm,s=n.activeTab,i=n.allTabIds,r=i.length-1,l=i.findIndex(function(e){return e===s}),d=-1===l?0:l+1;d>r&&(d=0);var u=-1===l?r:l-1;0>u&&(u=r);var c=i[d],p=i[u],m=null;switch(t.key){case'ArrowLeft':m=p;break;case'ArrowRight':m=c;break;default:}null==m||(e.$applyAsync(function(){return e.go.setActiveTab(m)}),o(t))}),t.on('keyup',function(e){switch(e.key){case'ArrowLeft':case'ArrowRight':o(e);default:}}),i(function(e){return t.prepend(e)})}}]),t}(Component);return new e(props$t,'tabset',config$v)}// #-- END Component (super-tabset) --# //
// #--------------------------------# //
/*@ngInject*/function ssActiveUserSvc(e,t,n,s,i){// get first id that matches type
function o(e){return l.then(function(t){return findIdentityByType(t.identities,e)})}// #-----------------------------------# //
// #---- Service (ssActiveUserSvc) ----# //
// #-- END Service (ssActiveUserSvc) --# //
// #-----------------------------------# //
var r=e.defer();null==currentEmployeeDefer&&(currentEmployeeDefer=e.defer()),store.onValueOnce('idm-data',r.resolve);var l=r.promise.then(function(e){return c=e}),d=currentEmployeeDefer.promise.then(function(e){return p=e}),u=function(){var s=t.path().match(/^\/([\w-]*)/i),i=(2===s.length?s[1]:'').toUpperCase(),o=e.defer(),r=o.promise.then(function(e){var t=e.split('-');return 1<t.length?t[0].toUpperCase():''});// if this is the auth_callback url, don't resolve the ui-module name yet
return i&&'auth_callback'!==i.toLowerCase()?o.resolve(i):n.on('ui-module-change-start',o.resolve,!1),r}().then(i.productIdEnvMap),c,p,m;// find productId via url data
u.then(function(e){return m=e});var g=i.productIdList(usingEmployeeMsvc);// External service API
return{ready:l,// get data async
employeeReady:d,getIdentityByType:o,getIdentitiesByType:function(e){return l.then(function(t){return identitiesByType(t.identities,e)})},getUserKey:s('ssActiveUserSvc.getUserKey()','ssActiveUserSvc.getIdentityByType(\'employee\')',function(){return o('employee')}),getOrgId:function(){return l.then(function(e){return e.userContext.OrganizationId})},getProductId:function(){return u},getProfileId:function(){return l.then(function(e){return e.user.profileId})},getUserContext:function(){return l.then(function(e){return e.userContext})},getAccessRecords:function(){return l.then(function(e){return e.access})},getUserRoles:function(){return l.then(function(e){return e.roles})},getEmployee:function(){return d},// get data SYNC
getIdentityByTypeSync:function(e){return findIdentityByType(c.identities,e)},getIdentitiesByTypeSync:function(e){return identitiesByType(c.identities,e)},getUserKeySync:s('ssActiveUserSvc.getUserKeySync()','ssActiveUserSvc.getIdentityByTypeSync(\'employee\')',function(){return findIdentityByType(c.identities,'employee')}),getOrgIdSync:function(){return c.userContext.OrganizationId},getProductIdSync:function(){return m},getProfileIdSync:function(){return c.user.profileId},getUserContextSync:function(){return c.userContext},getAccessRecordsSync:function(){return c.access},getUserRolesSync:function(){return c.roles},getEmployeeSync:function(){return p},// logic checks
productUsesCommonEmployee:function(e){return g.includes(e.toUpperCase())},// DEPRECATED
// left in place for backward compatibility
get:s('ssActiveUserSvc.get()','ssActiveUserSvc.getEmployee()',function(){return d})}}function findIdentityByType(e,t){if(Array.isArray(e)){var n=e.find(function(e){return e.Type===t});return n&&n.Id||void 0}}function identitiesByType(e,t){if(Array.isArray(e)){var n=e.filter(function(e){return e.Type===t});return n.map(function(e){return e.Id})}}/*@ngInject*/function employeeDataHookup(e,t,n){var s=n.productIdList(usingEmployeeMsvc);null==currentEmployeeDefer&&(currentEmployeeDefer=e.defer()),store.onValueOnce('idm-data',function(e){var n=findIdentityByType(e.identities,'employee'),i=null==e.identities||null==n,o=!s.includes(e.productId);i||o?currentEmployeeDefer.reject({}):t.get({id:n}).then(currentEmployeeDefer.resolve)})}/*@ngInject*/function ssApiSvc(e,t,n,s,i,o,r,l,d,u){// creates a single API endpoint function
function c(o,l){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[],c=d.map(function(e){return e.toLowerCase()}),f=angular.copy(o);// check the initial config object
if(null==f.method)throw new Error('Http method missing for API endpoint config');if(null==f.url)throw new Error('URL missing for API endpoint config');return f.params=null==f.params?{}:f.params,function(o,y){var v=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],b=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},_={},S=angular.copy(f),A={model:l},x=e.when(s.ready),T=e.defer();_.data=y,p(S.url)&&(x=x.then(function(){return r.ready}));// resolve dynamic config values
var k=!0,w=!1,P=void 0;try{for(var C=Object.keys(S)[Symbol.iterator](),O,I;!(k=(O=C.next()).done);k=!0)I=O.value,_[I]=m(I,S,o,y);// allow the api caller to override config values (example: request headers)
// this does not preempt work that is done by interceptors
}catch(e){w=!0,P=e}finally{try{!k&&C.return&&C.return()}finally{if(w)throw P}}// if data exists, serializing into json api
if(Object.assign(_,b),null!=_.data){var E=new i.Model(l);Object.keys(_.data).forEach(function(e){var t=e;e.startsWith('_')&&(t=e.substr(1)),E.setAttribute(t,_.data[e])}),_.data=E.serialize()}// merge params with prefilled params
if(null!=o&&Object.assign(_.params,o),null==_.timeout&&(_.timeout=T.promise),A.path=_.url,A.relationships=[],_.params.include){A.relationships=_.params.include.split(',');var j=A.relationships.length;A.relationships=A.relationships.filter(function(e){return c.includes(e.toLowerCase())}).map(function(e){return d[c.indexOf(e.toLowerCase())]}),A.relationships.length!==j&&n.warn('invalid include requested: '+_.params.include.split(',').filter(function(e){return!c.includes(e.toLowerCase())}).join(',')),_.params.include=A.relationships.join(',')}// always include version related fields if we filter by fields
return _.params.fields&&(_.params.fields.split(',').filter(function(e){return h.includes(e.toLowerCase())}).join(','),_.params.fields+=','+h.join(',')),x=x.then(function(){var n=r.getOrgIdSync(),s=_.url.includes(':ORGID:');// if this url needs an orgId replacement, and we don't have an org context... abort!
if(!(s&&null==n))return s&&(_.url=_.url.replace(/:ORGID:/ig,n)),A.path=_.url,t(_).then(function(t){return 400<=t.status&&500>t.status?e.reject(t):t}).then(function(e){return g(e.data,e.headers,A)}).catch(function(e){if(-1!==e.status)// timeout or cancelled
if(v)u.handle4XX(e);else throw e});// if this url needs an orgId, replace it
}),x.$abort=T.resolve,x}}function p(e){var t='function'==typeof e?e({},{}):e;return!('string'!=typeof t)&&t.toLowerCase().includes(':orgid:')}// creates the 4 main crud API endpoint functions from a common config
function m(e,t,s,i){var o=t[e];if('function'==typeof t[e])try{if(o=t[e](s,i),'url'===e){var r=o.split('/');// make sure we are checking queryString params if they exist
if(r[r.length-1].includes('?')){var l=r[r.length-1].split('?')[1].split('&');r[r.length-1]=r[r.length-1].split('?')[0],r=r.concat(l.map(function(e){return decodeURIComponent(e.split('=')[1])}))}Object.keys(s).forEach(function(e){r.includes(s[e])&&delete s[e]})}}catch(e){throw null==s&&n.warn('Parameters not provided to API service'),null==i&&['PUT','POST'].includes(t.method)&&n.warn(t.method+' data not provided to API service'),e}return o}/**
	  * Returns the JsonApiObject or JsonApiCollection depending on the base type
	  * @param {object} res The returned object from the api call
	  * @param {function} headers The headers function that returns response headers
	  * @param {schema} string The type of model we are returning
	  */function g(e,t,n){var s=new Map,r;if(null!=e&&e.data){angular.isArray(e.data)?e.data.forEach(function(e){s.set(e.id,e.meta)}):s.set(e.data.id,e.meta||e.data.meta||null);var l=i.store.sync(e);return angular.isArray(l)?(l._meta=e.meta||null,l.forEach(function(e){e._meta=s.get(e.id)}),r=new o.Collection(l,n)):(l._meta=s.get(l.id),r=new o.Model(l,n)),r.$headers=t(),r}}// #-- END Service (ssApiSvc) --# //
// #----------------------------# //
// #----------------------------# //
// #---- Service (ssApiSvc) ----# //
var h=['ownerid','ownerversionnumber'];// External Service API
return{endpoint:c,defaultEndpoints:function(e,t,n){if(null==e.url||'string'!=typeof e.url)throw new Error('Invalid url for ssApiSvc.defaultEndpoints, expected a string');var s=e.url;return{get:c(Object.assign({},e,{method:'GET'},{url:function(e){return s+'/'+e.id}}),t,n),query:c(Object.assign({},e,{method:'GET'}),t,n),add:c(Object.assign({},e,{method:'POST'}),t,n)}}}}/*@ngInject*/function ssAppConfigSvc(e,t,n,s){function i(s){var i=t.defer();// first load? track what config set we are using
if(null==loadedConfigSet&&(loadedConfigSet=s),loadedConfigSet!==s&&window.location.reload(),null!=configCache[s])i.resolve(d(configCache[s]));else{var o=300000*_Mathceil(Date.now()/300000);e.get('/app-configs/'+s+'.json?cb='+o).then(function(e){return d(e.data)}).then(function(e){return configCache[s]=e}).then(i.resolve)}return i.promise.then(function(e){return n.emit('app-config.load',e)}),i.promise}function o(e,t){null==config$w[e]&&(config$w[e]={}),r(config$w[e]),Object.keys(t).forEach(function(n){config$w[e][n]=t[n]}),n.emit('app-config.set.'+e,t)}function r(e){Object.keys(e).forEach(function(t){return delete e[t]})}function l(){Object.keys(config$w).forEach(function(e){r(config$w[e])})}function d(e){return l(),'string'==typeof e&&(e=JSON.parse(e)),Object.keys(e).forEach(function(t){o(t,e[t])}),e}// #-- END Service (ssAppConfigSvc) --# //
// #----------------------------------# //
// #----------------------------------# //
// #---- Service (ssAppConfigSvc) ----# //
// External service API
return{load:i,loadUniversal:function(){var e=s.getCurrentModuleName(),t=e.split('-')[0],n=productIdConfigMap[t]||t.toLowerCase();return i(n)},get:function(e){return null==config$w[e]&&(config$w[e]={}),config$w[e]},getAsync:function(e){var s=t.defer();return null==config$w[e]||'{}'===JSON.stringify(config$w[e])?(n.on('app-config.set.'+e,s.resolve,!1),n.on('app-config.load',function(t){null==t[e]&&s.reject()},!1)):s.resolve(config$w[e]),s.promise},set:o,clear:l}}/*@ngInject*/function ssAuthSvc(e,t,n,s){// #-- END Service (ssAuthSvc) --# //
// #-----------------------------# //
null==authReadyDefer&&(authReadyDefer=e.defer());var i={access:'',id:''},o=authReadyDefer.promise.then(function(e){return Object.defineProperty(i,'access',{get:function(){return e.accessToken},set:function(){}}),e}),r=function(e){return function(){return o.then(e)}};// External service API
return{ready:null==window.jasmine?o:e.when(mock),signout:r(function(e){return e.signout()}),profileId:r(function(e){return e.profileId}),isImpersonating:r(function(e){return e.isImpersonating}),isImpersonatingV2:r(function(e){return e.isImpersonatingV2}),impersonate:function(e,t){o.then(function(n){return n.impersonate(e,t)})},endImpersonate:function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:n.idmInternalToolsUrl;o.then(function(t){return t.endImpersonate(e)})},authenticate:function(){e.all({svc:o,productId:s.getProductId()}).then(function(e){var n=e.svc,s=e.productId,i={returnUrl:t.absUrl(),productId:s};n.authenticate(getAuthConfig(i,t.search()))})},editSettings:function(){o.then(function(e){var t=(0,eval)('this');// eslint-disable-line no-eval
t.location=e.accountSettingsUrl(t.location,!0)})},token:i}}/*@ngInject*/function ssAuthConfig(e){var t=(0,eval)('this'),n=t.buildConfig,s=n.idmGatewayUrl,i=n.idmClientId,o=n.productLogoutRedirect,r=n.productMap;// eslint-disable-line no-eval
e.identityGatewayBaseUri=s,e.clientId=i;var l=t.location.protocol,d=t.location.hostname,u=d.startsWith('localhost'),c=u?':'+t.location.port:'',p=void 0,m=void 0;// Outside of localhost, we don't use ports to determine resources.
try{p=t.location.pathname.split('/')[1].split('-')[0].toLowerCase()||'ec'}catch(e){p='ec'}finally{var g=o;null==g[p]&&(p='ec'),m=g[p]}'universal'!==p.toLowerCase()&&(e.productId=r[p]||p,e.signoutRedirectUri=m),e.redirectUri=l+'//'+d+c+'/auth_callback',e.silentRenewUri=l+'//'+d+c+'/silentRenew.html'}/*@ngInject*/function ssAuthTrigger(e,t,n,s){return window.auth=n,null===sessionStorage.getItem('automation-no-auth')?void e.all({svc:n.ready(),productId:s.getProductId()}).then(function(s){var i=s.productId;if(n.isAuthenticated)null==authReadyDefer&&(authReadyDefer=e.defer()),null!=t.search().orgId&&t.search('orgId',null),authReadyDefer.resolve(n);else{//> log('UNAUTHENTICATED!')
var o={returnUrl:t.absUrl(),productId:i};'universal'===i.toLowerCase()&&delete o.productId,n.authenticate(getAuthConfig(o,t.search()))}}):void authReadyDefer.resolve({profileId:'mock-id-123',isImpersonating:e.resolve(null),accessToken:'mock-token-123'})}function getAuthConfig(e,t){// if we are on the select route and an orgId is specified, we need
// to pass it through to idServer so we can check for SSO
var n=t.orgId,s={};return null!=n&&(s.organization=n),Object.assign({},e,s)}/*@ngInject*/function ssDepartmentSvc(e,t,n,s,i,o){function r(e){return u.filter(function(t){return t.id===e})[0]}function l(){return u}// #-- END Service (ssDepartmentSvc) --# //
// #-----------------------------------# //
// #-----------------------------------# //
// #---- Service (ssDepartmentSvc) ----# //
// list of IDM AppIds that use the microservice
var d=s.productIdList(['EC']),u=[],c=e(/*#__PURE__*/regeneratorRuntime.mark(function e(){var s,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getOrgId();case 3:if(s=e.sent,null!=s){e.next=6;break}return e.abrupt('return',[]);case 6:return e.next=8,n.getProductId();case 8:if(r=e.sent,d.includes(r)){e.next=11;break}return e.abrupt('return',[]);case 11:if(u=o.load(s+'_departments'),null!=u){e.next=18;break}return e.next=15,t.query({limit:i.getLimit('departments')});case 15:e.t0=function(e){var t=e.$serialize().data.attributes;return Object.keys(t).forEach(function(e){t['_'+e]=t[e],delete t[e]}),Object.assign({id:e.id},t)},u=e.sent.map(e.t0),o.save(s+'_departments',u);case 18:return e.abrupt('return',u);case 21:e.prev=21,e.t1=e['catch'](0),console&&console.error&&console.error('ERROR',e.t1);/* eslint-enable no-console */case 24:case'end':return e.stop();}},e,this,[[0,21]])}))();// External service API
return{getDepartmentById:r,getAll:l,ready:c}}/*@ngInject*/function ssEventSvc(e,t){function n(n,i,o){null==eventBus[n]&&(eventBus[n]=[]);var r=function(){s(n,i)};return null==o?e.error('ssEventSvc -- scope not provided when registering event listener'):'function'==typeof o.$on?o.$on('$destroy',r):t.$on('$destroy',r),eventBus[n].push(i),r}function s(e,t){null!=eventBus[e]&&eventBus[e].forEach(function(e,n,s){e===t&&s.splice(n,1)})}// #------------------------------# //
// #---- Service (ssEventSvc) ----# //
// External service API
// #-- END Service (ssEventSvc) --# //
// #------------------------------# //
return{on:n,once:function(e,t,s){var i=n(e,function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];t.apply(null,n),i()},s);return i},off:s,emit:function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];null!=eventBus[e]&&eventBus[e].forEach(function(e){e.apply(this,n)})}}}/*@ngInject*/function ssFeatureSvc(e,t,n,s,i,o,r){// not the hardware store
function l(e){return!0===e||'string'==typeof e&&'true'===e.toLowerCase()}/**
	  * checks the feature object for a specific feature flag
	  *
	  * @param {string} key - the name of the feature flag
	  * @returns {boolean}
	  */function d(e){return null==u[e]?(i.warn('feature flag',e,'does not exist!'),!1):!!u[e]}/**
	  * checks if the feature flag is currently off
	  *
	  * @param {string} key - the name of the feature flag
	  * @returns {boolean}
	  */// #--------------------------------# //
// #---- Service (ssFeatureSvc) ----# //
// #-- END Service (ssFeatureSvc) --# //
// #--------------------------------# //
var u={},c=JSON.parse(e.sessionStorage.getItem('feature-flags')||'{}');/////
// if we don't have a ready promise, go make the http request
//
return null==ready&&(ready=s.all([n.get(o.featureFlagsUrl+'?cb='+Date.now()),r.getActiveOrg()]).then(function(e){var t=slicedToArray(e,2),n=t[0],s=t[1];// TODO: remove this once new User Access page is turned on for all organizations
return l(n.data.featureEnableAppAccessLinkBacks)&&l(s._hasLegacyUserAccessPage)&&(n.data.featureEnableAppAccessLinkBacks=!1),Object.assign({},n.data,c)})),ready.then(function(e){t.feature=u,Object.keys(e).forEach(function(t){Object.defineProperty(u,t,{enumerable:!0,value:l(e[t])})})}),{feature:u,// all features as keys, value is bool
ready:ready,// service ready promise
isOn:d,// check if a feature is on
isOff:function(e){return!d(e)}// do I really need to explain this?
}}/* globals sidekick *//*@ngInject*/function ssFlagCCSvc(e,t){// #-----------------------------# //
// #---- Service (ssFlagCCSvc) ----# //
var n={},s=t.defer();//promise
return sidekick.events.on('feature-flags-ready-cc',function(e){n=e,s.resolve()},{greedy:!0}),{ready:s.promise,// service ready promise
/*
	  * @params Params are key (required) and value (optional) to compare against
	  * @return If value of feature flag key in LD for this user matched value. If no value, defaults to checking if true
	  */checkState:function(e,t){return s.promise.then(function(){return n.checkState(e,t)})}};// #-- END Service (ssFlagCCSvc) --# //
// #-----------------------------# //
}/* globals sidekick *//*@ngInject*/function ssFlagSvc(e,t){// #-----------------------------# //
// #---- Service (ssFlagSvc) ----# //
var n={},s=t.defer();//promise
return sidekick.events.on('feature-flags-ready',function(e){n=e,s.resolve()},{greedy:!0}),{ready:s.promise,// service ready promise
/*
	  * @params Params are key (required) and value (optional) to compare against
	  * @return If value of feature flag key in LD for this user matched value. If no value, defaults to checking if true
	  */checkState:function(e,t){return n.checkState(e,t)}};// #-- END Service (ssFlagSvc) --# //
// #-----------------------------# //
}/*@ngInject*/function ssJobTypeSvc(e,t,n,s,i,o,r,l,d,u,c){/*
	  * Used to load a lighter jobTypes collection (primarily `id` attr). Orgs that have a very large amount of jobTypes likely use this version
	 */function p(e){return n(/*#__PURE__*/regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(b=u.load(e+'_jobTypes'),null!=b){t.next=10;break}return t.next=4,s.query({limit:d.getLimit('jobTypes'),fields:'name'});case 4:return b=t.sent,n=b.map(function(e){var t=e.$serialize().data.attributes;return Object.keys(t).forEach(function(e){t['_'+e]=t[e],delete t[e]}),Object.assign({id:e.id},t)}),u.save(e+'_jobTypes',n),t.abrupt('return',n);case 10:return t.abrupt('return',b);case 11:case'end':return t.stop();}},t,this)}))()}/*
	  * Used to load a collection of full jobType objs. Backwards compatible with original version that uses session storage cache
	 */function m(e){return n(/*#__PURE__*/regeneratorRuntime.mark(function t(){var n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.getByExternalId('jobtype.employmentgroups');case 2:if(n=t.sent,b=u.load(e+'_jobTypes'),null!=b){t.next=14;break}return t.next=7,s.query({include:'paySchedules,jobTypeDetails',limit:d.getLimit('jobTypes')});case 7:return b=t.sent,i=b.filter(function(e){return null!=e._bargainingUnit}).filter(function(e){return null!=e._currentJobTypeDetail}).filter(function(e){return 0<e._paySchedules.length}).map(function(e){var t=e.$serialize().data.attributes;Object.keys(t).forEach(function(e){t['_'+e]=t[e],delete t[e]});//Find current pay schedule
var s=new Date,i=e._paySchedules.find(function(e){var t=new Date(e._fromDateUtc),n=new Date(e._toDateUtc);return s>t&&s<n});return t.paySchedule=null==i?{}:Object.assign({id:i.id},i.$serialize().data.attributes),t.employmentGroup=n.find(function(t){return t.value===e._bargainingUnit.id}),null!=e._jobTypeDetails&&(t._jobTypeDetails=e._jobTypeDetails),null!=e._paySchedules&&(t._paySchedules=e._paySchedules),Object.assign({id:e.id},t)}),0===i.length&&(i=b.map(function(e){var t=e.$serialize().data.attributes;return Object.keys(t).forEach(function(e){t['_'+e]=t[e],delete t[e]}),Object.assign({id:e.id},t)})),u.save(e+'_jobTypes',i),t.abrupt('return',i);case 14:return t.abrupt('return',b);case 15:case'end':return t.stop();}},t,this)}))()}function g(e){return y(b.find(function(t){return t.id===e}))}function h(){return y(b)}// #-- END Service (ssJobTypeSvc) --# //
// #--------------------------------# //
// #--------------------------------# //
// #---- Service (ssJobTypeSvc) ----# //
// list of IDM AppIds that use the microservice
var f=r.productIdList(['EC','absmgmt','PD','RH']),y=l.deepCopy,v=n(/*#__PURE__*/regeneratorRuntime.mark(function n(){var s,o,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=t.defer(),n.prev=1,n.next=4,i.getOrgId();case 4:if(o=n.sent,null!=o){n.next=7;break}return n.abrupt('return',[]);case 7:return n.next=9,i.getProductId();case 9:if(r=n.sent,f.includes(r)){n.next=12;break}return n.abrupt('return',[]);case 12:c.ready.then(function(){return c.checkState('fc_job_type_cache')}).then(function(e){return e?s.resolve(m(o)):s.resolve(p(o))}),n.next=19;break;case 15:n.prev=15,n.t0=n['catch'](1),e.error('jobType service =>',n.t0),s.reject(n.t0);case 19:return n.abrupt('return',s.promise);case 20:case'end':return n.stop();}},n,this,[[1,15]])}))(),b;// External service API
return{getJobTypeById:g,getAll:h,ready:v}}/*@ngInject*/function ssListSvc(e,t,n,s,i,o){// #-----------------------------# //
// #---- Service (ssListSvc) ----# //
// External service API
// #-- END Service (ssListSvc) --# //
// #-----------------------------# //
/**
	  * Maps a key to an item in a list and pulls out the name or ''
	  * @param {string} key The key of the item we are looking for
	  * @param {object[]} Array The list that we are searching through
	  */return{getByExternalId:function(t){return n(/*#__PURE__*/regeneratorRuntime.mark(function n(){var r,l,d,u,c,p;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.getOrgId().catch(function(t){return e.error(t)});case 2:if(r=n.sent,null!=r){n.next=5;break}return n.abrupt('return',[]);case 5:if(l=r+'_list_'+t,d=s.load(l),null==d){n.next=9;break}return n.abrupt('return',d);case 9:return n.next=11,i.query({externalId:t,include:'Items'});case 11:if(u=n.sent,0!==u.length){n.next=14;break}return n.abrupt('return',[]);case 14:return c=u[0],p=c._items.map(function(e){return{id:e.id,name:e._name,description:e._description,value:c.id+'_'+e.id}}),p=p.sort(function(e,t){var n,s;// names must be equal
return e.hasOwnProperty('name')?(n=e.name.toUpperCase(),s=t.name.toUpperCase()):(n=e._name.toUpperCase(),s=t._name.toUpperCase()),n<s?-1:n>s?1:0}),s.save(l,p),n.abrupt('return',p);case 19:case'end':return n.stop();}},n,this)}))()},mapName:function(t,n){if(''!==t){var s=n.filter(function(e){return e.value===t});return 0===s.length?(e.warn('Value "'+t+'" not found in list.'),''):s[0].name}}}}/*@ngInject*/function ssLocationSvc(e,t,n,s,i,o){function r(e){return u.find(function(t){return t.id===e})}function l(){return u}// #-- END Service (ssLocationSvc) --# //
// #---------------------------------# //
// #---------------------------------# //
// #---- Service (ssLocationSvc) ----# //
// list of IDM AppIds that use the microservice
var d=i.productIdList(['EC']),u=[],c=e(/*#__PURE__*/regeneratorRuntime.mark(function e(){var i,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.getOrgId();case 3:if(i=e.sent,null!=i){e.next=6;break}return e.abrupt('return',[]);case 6:return e.next=8,s.getProductId();case 8:if(r=e.sent,d.includes(r)){e.next=11;break}return e.abrupt('return',[]);case 11:if(u=t.load(i+'_locations'),null!=u){e.next=18;break}return e.next=15,n.query({limit:o.getLimit('locations')});case 15:e.t0=function(e){var t=e.$serialize().data.attributes;return Object.keys(t).forEach(function(e){t['_'+e]=t[e],delete t[e]}),Object.assign({id:e.id},t)},u=e.sent.map(e.t0),t.save(i+'_locations',u);case 18:return e.abrupt('return',u);case 21:e.prev=21,e.t1=e['catch'](0),console&&console.error&&console.error('ERROR',e.t1);/* eslint-enable no-console */case 24:case'end':return e.stop();}},e,this,[[0,21]])}))();// External service API
return{getLocationById:r,getAll:l,ready:c}}/*@ngInject*/function ssModalSvc(e,t,n,s){function i(e,t,n){var s=Object.assign({},e,t,n);// if somehow null gets through fix it
return'string'!=typeof s.content&&(s.content=''),s.size=''===s.content?'small':s.size,s}/**
	  * Show a dialog with the finger loader
	  *//**
	  * Close the open dialog
	  */function o(i){var o='<div class="modal {type} {size}" ng-keydown="$event.which === 13 && keyPress($event)" data-test="modal" role="dialog" aria-labelledby="ss-modal-title">\n\t\t\t\t\t<button type="button" ng-click="cancel()" class="button flat modal-close" ss-icon-before="times" ng-show="!{showSpinner}" data-test="modal-close"></button>\n\t\t\t\t\t<div ng-if="{showTitle}" class="title" data-test="modal-title" id="ss-modal-title">{title}</div>\n\t\t\t\t\t<div ng-show="{showContent}"  class="content size-{size}" data-test="modal-content">{content}</div>\n\t\t\t\t\t<div ng-if="{showSpinner}" class="spinner"><super-loader is-loading="true" role="status"></super-loader></div>\n\t\t\t\t\t<div class="suppress-modal-control" ng-show="{showSuppress}">\n \t\t\t\t\t\t<super-input-checkbox model="" name="suppressModal" ng-click="suppressModal()" label="Don\'t show again"></super-input-checkbox>\n\t\t\t\t\t </div>\n\t\t\t\t\t<div ng-if={showButtons} class="modal-button">\n\t\t\t\t\t\t<button ng-show="{showSecondary}" class="super-button std" type="button" value="Cancel" label="{secondaryText}" ng-click="cancel()" data-test="modal-cancel"><label class="button-control">{secondaryText}</label></button>\n\t\t\t\t\t\t<button ng-show="{showPrimary}" class="super-button {actionType}" type="button" value="Continue" label="{primaryText}" ng-click="cont()" data-test="modal-continue"><label class="button-control">{primaryText}</label></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>'.replace('/{title/}');if(o=o.replace('{title}',i.title).replace('{showTitle}',!!i.title).replace('{showContent}',!!i.content).replace('{content}',i.content).replace(/\{size\}/g,i.size).replace('{actionType}',i.isDestructive?'neg':'pri').replace('{showButtons}',i.showButtons&&(i.showPrimary||i.showSecondary)).replace('{showPrimary}',i.showPrimary).replace('{showSecondary}',i.showSecondary).replace(/\{showSpinner\}/g,i.showSpinner).replace(/\{secondaryText\}/g,i.secondaryText).replace(/\{primaryText\}/g,i.primaryText).replace('{showSuppress}',i.showSuppress).replace('{type}',i.isDestructive?'destructive':'standard').replace('{overrideClass}',i.overrideClass?i.overrideClass:''),h=angular.element(o),b=document.body,y=n.$new(),v=s.defer(),i)for(var l in i)i.hasOwnProperty(l)&&(y[l]=i[l]);return!0===i.alwaysOnTop&&(h.addClass('always-on-top'),g.addClass('always-on-top')),y.cancel=u,y.cont=d,y.suppressModal=r,t(h)(y),g.addClass('shown'),e.enter(h,b),m(h,i),v.promise}function r(){y.suppressTheModal=!y.suppressTheModal}function l(){return g.removeClass('shown'),e.leave(h).then(function(){y.$destroy(),y=null,h.remove(),h=null})}function d(){return l(),v.resolve(y)}function u(){return l(),v.reject(y)}function c(){return!!h}function p(e,t){// on negative dialogs you can click the button with the enter key
return t.isDestructive?void(e.preventDefault(),e.stopPropagation()):d()}function m(e,t){var n=t.defaultFocus||'';if(0!==n.length){var s=e[0].querySelector({close:'.modal-close',secondary:'.modal-button button:first-of-type',primary:'.modal-button button:last-of-type'}[n.toLowerCase()]);null!==s&&s.focus()}}// #-- END Service (ssModalSvc) --# //
// #------------------------------# //
// #------------------------------# //
// #---- Service (ssModalSvc) ----# //
var g=angular.element(document.getElementById('modal-fade')),h=null,f={},y,v,b;// External service API
return n.keyPress=function(e){p(e,f)},{showLarge:function(e){//Default Standard Config
var t=i({title:'',content:'',showSuppress:!1,alwaysOnTop:!0},e,{isDestructive:!1,showButtons:!1,showSpinner:!1});return t.size='large',o(t)},showDestructive:function(e){return o(i({title:'Are you sure you want to do this?',content:'',primaryText:'Yes',secondaryText:'No',showPrimary:!0,showSecondary:!0,showSuppress:!1,alwaysOnTop:!0,defaultFocus:''// 'close' | 'secondary' | 'primary'
},e,{isDestructive:!0,showButtons:!0,showSpinner:!1}));//Default Destructive Config
},showStandard:function(e){return o(i({title:'',content:'',primaryText:'Yes',secondaryText:'No',showPrimary:!0,showSecondary:!0,showSuppress:!1,alwaysOnTop:!0,defaultFocus:''// 'close' | 'secondary' | 'primary'
},e,{isDestructive:!1,showButtons:!0,showSpinner:!1}));//Default Standard Config
},showWait:function(e){//Default Standard Config
var t=i({title:'Please wait...',size:'small',showSuppress:!1,alwaysOnTop:!0},e,{isDestructive:!1,showButtons:!1,showSpinner:!0});return o(t)},isModalOpen:c,clearDialog:function(){u()}}}/*@ngInject*/function ssNotificationsSvc(e,t,n,s,i,o,r,l,d){function u(e){var t=notificationCollection.find(function(t){return t.id===e});return o(/*#__PURE__*/regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isRead){e.next=2;break}return e.abrupt('return');case 2:return t._acknowledgeAtUtc=new Date,e.next=5,t.$save();case 5:p();case 6:case'end':return e.stop();}},e,this)}))()}function c(e){var t=notificationCollection.find(function(t){return t.id===e});return o(/*#__PURE__*/regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.deleted=!0,e.next=4,t.$remove();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e['catch'](0),t.deleted=!1;case 9:return e.prev=9,p(),e.finish(9);case 12:case'end':return e.stop();}},e,this,[[0,6,9,12]])}))()}function p(){notifications.length=0,notificationCollection.map(function(e){return Object.assign({},e)}).forEach(function(e){return notifications.push(e)}),stats.total=notifications.length,stats.unread=notifications.filter(function(e){return!e.isRead}).length,stats.read=stats.total-stats.unread,scopes=scopes.filter(function(e){return null!=e.$root}),scopes.forEach(function(e){return e.$root.safeApply()})}function m(){o(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!=userKey){e.next=7;break}return e.next=4,l.getIdentityByType('employee');case 4:userKey=e.sent,e.next=8;break;case 7:t=notifications.map(function(e){return e.id});case 8:if(null!=userKey){e.next=10;break}return e.abrupt('return');case 10:return e.prev=10,e.next=13,r.query({employeeId:userKey});case 13:s=e.sent,e.next=19;break;case 16:return e.prev=16,e.t0=e['catch'](10),e.abrupt('return');case 19:if(null!=s){e.next=21;break}return e.abrupt('return');case 21:notificationCollection=s,p(),null==t?(notificationsDefer.resolve(notifications),statsDefer.resolve(stats)):notifications.filter(function(e){return!t.includes(e.id)}).forEach(function(e){d.notification(e.shortContent,e._subject)}),i.emit('notifications.updated',notifications,stats);case 25:return e.prev=25,n(m,6e4),e.finish(25);case 28:case'end':return e.stop();}},e,this,[[0,,25,28],[10,16]])}))()}// #-- END Service (ssNotificationsSvc) --# //
// #--------------------------------------# //
// External service API
return null==notificationsDefer&&(notificationsDefer=t.defer()),null==statsDefer&&(statsDefer=t.defer()),null==stats&&(stats={}),null==scopes&&(scopes=[]),scopes.push(e),null==notifications&&(notifications=[],s.getAsync('notifications').then(m)),{getNotifications:function(){return notificationsDefer.promise},getStats:function(){return statsDefer.promise},markAsRead:u,remove:c}}/*@ngInject*/function ssOrganizationSvc(e,t,n,s){// #-------------------------------------# //
// #---- Service (ssOrganizationSvc) ----# //
var i=t.deepFreeze,o=t.deepCopy,r,l;// External service API
return{ready:n.ready,getActiveOrg:e(/*#__PURE__*/regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=r){e.next=4;break}return e.next=3,n.getOrgId();case 3:r=e.sent;case 4:if(null!=r){e.next=6;break}return e.abrupt('return',{});case 6:if(null!=l){e.next=14;break}return e.t0=i,e.t1=o,e.next=11,s.get({id:r,include:'applications'});case 11:e.t2=e.sent,e.t3=(0,e.t1)(e.t2),l=(0,e.t0)(e.t3);case 14:return e.abrupt('return',l);case 15:case'end':return e.stop();}},e,this)}))};// #-- END Service (ssOrganizationSvc) --# //
// #-------------------------------------# //
}/*@ngInject*/function ssOrgDataSvc(e,t){// #--------------------------------# //
// #---- Service (ssOrgDataSvc) ----# //
var n;e.getOrgId().then(function(e){return n=e});var s={orgReady:e.ready.then(t('ssOrgDataSvc.orgReady','ssActiveUserSvc.ready',function(e){return e}))};// External service API
return Object.defineProperty(s,'orgId',{get:t('ssOrgDataSvc.orgId','ssActiveUserSvc.getOrgIdSync()',function(){return n})}),s;// #-- END Service (ssOrgDataSvc) --# //
// #--------------------------------# //
}/*@ngInject*/function ssPermissionsSvc(e,t,n,s,i,o,r,l,d,u,c,p){/**
	  * addPermittedActionBundle - add a single value that represents a group of
	  * permissions or other logic so that it can be easily evaluated in to UI
	  *
	  * @param  {String} bundleName - the name of the bundle property
	  * @param  {Function} isPermittedCheck - handler for the bundle. Should
	  * return boolean, receives ssPermissionSvc as the first param.
	  * @return {Boolean} - whether this group is permitted
	  */function m(e,t){var n=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2],s;ready$1.then(function(){return A.bundle.hasOwnProperty(e)?void i.error('failed to add the permittedActionBundle',e,'. It was already defined!'):void(n&&persistantBundles.push({bundleName:e,isPermittedCheck:t}),Object.defineProperty(A.bundle,e,{enumerable:!0,get:function(){return null==s?s=t():s},set:function(){}}),Object.defineProperty(x.bundle,e.toLowerCase(),{enumerable:!0,get:function(){return null==s?s=t():s},set:function(){}}))})}/**
	  * isPermittedAction - checks the permitted object for a specific action
	  *
	  * @param {string} groupName - the name of the action group
	  * @param {string} actionName - the name of the action
	  * @returns {boolean}
	  */function g(e,t){return e=u.toCamelCase(e).toLowerCase(),t=u.toCamelCase(t).toLowerCase(),null!=x[e]&&!0===x[e][t]}/**
	  * isNotPermittedAction - checks if the action is NOT permitted
	  *
	  * @param {string} groupName - the name of the action group
	  * @param {string} actionName - the name of the action
	  * @returns {boolean}
	  */function h(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},n=t.skipInherit,s=function(){// strip any empty params and trailing slashes
var t={},s=RegExp.prototype.test.bind(/^https?:\/\//);if(s(e))//> log('route is external, assuming we have permission')
return!0;if(e='/'+e.split('/').filter(function(e){return!!e.length}).join('/'),e.includes('?')){var o=e.split('?')[1];e=e.split('?')[0],t=f(o)}// remove any trailing slashes
var r=e.endsWith('/')?e.slice(0,-1):e;// allow the path if it's permission exempt
if(T.includes(r))//> log('route is a permission exempt Url, assuming we have permission')
return!0;var l=routeData.find(function(n){return n.matchesUrl(e,t)});// couldn't find state,
if(null==l)//> warn('state not found')
return!1;//> log('state data: ', state)
if('inherit'===l.$permissions){// if we are skipping inherited permissions, then these are the
// same as a null permissions function (true)
if(n!==void 0&&n)return!0;//> log('checking inherited permissions')
var d={skipInherit:!0};return e// => "/this/that/other"
.split('/')// => ["", "this", "that", "other"]
.slice(1,-1)// => [this", "that"]
.map(function(e,t,n){return'/'+n.slice(0,t+1).join('/')})// => ["/this", "/this/that"]
.every(function(e){return h(e,d)});// check the recontructed url => true/false
}// if no $permissions function is specified, allow the route
if(null==l.$permissions)//> log('no $permissions function exists, assuming we have permission')
return!0;if('function'!=typeof l.$permissions)return i.error('$permissions must be a function'),!1;var u=l.$permissions(O);//> log('$permissions function', state.$permissions)
//> log('$permissions result', permissionsResult)
return u}();//> groupCollapsed('%cssPermissionsSvc.isPermittedRoute => ' + url, 'color: lightgrey;')
//> groupEnd('%cssPermissionsSvc.isPermittedRoute => ' + url, 'color: lightgrey;')
return s}function f(e){var t=e.split('&');return t.reduce(function(e,t){var n=t.split('=');return e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]),e},{})}function y(e){return e.map(function(e){return{id:e._groupId,name:e._groupName,autoCreated:e._autoCreated,employeeIds:e._employeeIds,securityScopes:e._securityScopes.length?v(e._securityScopes):[]}})}function v(e){return e.length?e.map(function(e){return{id:e.id,autoCreated:e._autoCreated,isViewSelf:e._isViewSelf,locked:e._locked,departmentAdministrationContext:e._departmentAdministrationContext,departmentIds:e._departmentIds,employeeAdministrationContext:e._employeeAdministrationContext,employeeIds:e._employeeIds,jobTypeAdministrationContext:e._jobTypeAdministrationContext,jobTypeIds:e._jobTypeIds,locationAdministrationContext:e._locationAdministrationContext,locationIds:e._locationIds}}):[]}// #-- END Service (ssPermissionsSvc) --# //
// #------------------------------------# //
// #------------------------------------# //
// #---- Service (ssPermissionsSvc) ----# //
var b=l.glean,_=r.endpoint.permissions,S=r.endpoint.aesopApi,A={},x={},T=['/auth_callback','','/select'],k=[],w=[];// for internal (case insensitive) lookups only
/////
// if we don't have a ready promise, go make the http requests
//
if(null==ready$1){var P=o(/*#__PURE__*/regeneratorRuntime.mark(function e(t){var s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=angular.element(document.head),e.next=3,Object.keys(t).map(function(e){var i=n.defer(),o=t[e].path,r=localStorage.getItem('assets.uiModules.'+e),l=null==r?o.routeData:r+'/route-data.js',d=document.createElement('script');return d.setAttribute('type','text/javascript'),d.onerror=i.resolve,d.onload=i.resolve,d.setAttribute('src',l),s.append(d),i.promise});case 3:case'end':return e.stop();}},e,this)}));ready$1=o(/*#__PURE__*/regeneratorRuntime.mark(function t(){var n,i,o,r,u,m,g,h,f,A,x,T,C,O,I,E,j,$,D,R,F,H,M,L;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,[d.getIdentityByType('employee'),d.getOrgId()];case 2:return n=t.sent,i=slicedToArray(n,2),o=i[0],r=i[1],t.next=8,p.ready;case 8:return u=_+'/ActionPermissions?organizationId='+r,m=S+'/v1.0/Organizations/'+r+'/FrontlineInstitute/User/Permissions',g=null==r?null:s.get(u),h=null!=r,f=sidekick.store.get('idm-data'),A=f.identities,x=void 0===A?[]:A,T=x.some(function(e){return e.Type.startsWith('abs_time_orguser')}),C=h&&T,O=C?s.get(m,{ignore401:!0}).catch(function(){return{}}):null,I=[g,O],null==o?(k=null,w=null):(E=c.getSecurityGroupsByEmployeeId({id:o,include:'securityScopes'}),I.push(E)),t.next=20,I;case 20:return j=t.sent,$=slicedToArray(j,3),D=$[0],R=$[1],F=$[2],F&&(k=l.deepFreeze(y(F)),w=l.deepFreeze(v(F.filter(function(e){return e._securityScopes.length}).reduce(function(e,t){return e.concat(t._securityScopes)},[])))),H=b(D,function(e){return e.data.data.attributes.objects},[]),Array.isArray(H)&&0<H.length&&H.forEach(function(e){return actionData.push(e)}),M=d.getUserRolesSync().slice(),actionData.push({name:'ActiveUser',type:'activeUser',id:'IDM-ACTIVE-USER-ROLES-AND-DATA',permittedActions:M}),b(R,function(e){return!0===e.data.data.attributes.allow},!1)&&actionData.push({name:'absmgmt',type:'absmgmt',id:'ABSMGMT-ACCESS-PERMISSIONS',permittedActions:['viewInstituteReport']}),null!=o&&M.push('userKey'),L=e.ss.env.manifest,t.next=35,P(L);case 35:return t.abrupt('return',t.sent);case 36:case'end':return t.stop();}},t,this)}))()}/////
// when the permission data is ready, build the actions object from it
//
var C=ready$1.then(function(){// mutate the array of objects into a single object that
// represents the permitted actions
var e=actionData.reduce(function(e,t){var n=t.type,s=t.permittedActions.map(function(e){return u.toCamelCase(e)});// create group object and populate it
e[n]={};var i=!0,o=!1,r=void 0;try{for(var l=s[Symbol.iterator](),d,c;!(i=(d=l.next()).done);i=!0)c=d.value,e[n][c]=!0}catch(e){o=!0,r=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw r}}return e},{});// attach the permitted object to $root for convenience
t.isPermitted=A,Object.keys(e).forEach(function(t){Object.defineProperty(A,t,{enumerable:!0,value:{}}),x[t.toLowerCase()]={},Object.keys(e[t]).forEach(function(e){Object.defineProperty(A[t],e,{enumerable:!0,value:!0}),x[t.toLowerCase()][e.toLowerCase()]=!0})}),Object.defineProperty(A,'bundle',{enumerable:!0,value:{}}),Object.defineProperty(x,'bundle',{enumerable:!0,value:{}}),persistantBundles.forEach(function(e){return m(e.bundleName,e.isPermittedCheck)})}),O={permittedActions:A,// all permitted actions as keys, value is bool
ready:C,// service ready promise
addPermittedActionBundle:m,// create a logical grouping of permitted actions
isPermittedAction:g,// check if an action is permitted
isNotPermittedAction:function(e,t){return!g(e,t)},// do I really need to explain this?
isPermittedRoute:h,// is the user allowed to visit this url?
isNotPermittedRoute:function(e){return!h(e)},// is the user not allowed to visit this url?,
securityGroups:function(){return k},//All the security groups logged in user belongs to
securityScopes:function(){return w}// flatten list of Security Scopes in user security group contains
};// External service API
return O}/*@ngInject*/function routeDataRegistration(e,t,n,s,i){e.registerRouteData=n(/*#__PURE__*/regeneratorRuntime.mark(function n(s,o){var r,l,d;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r=e.ss.env.manifest,l=i.getDetails(s,r),d=o.reduce(function(e,t){return e[t.stateName]=t,e},{}),o.sort(function(e,t){return e.stateName<t.stateName?-1:e.stateName>t.stateName?1:0}),o.forEach(function(e){if(null!=e.url&&null!=e.stateName){if(e.stateName.includes('.')){var n=e.stateName.substr(0,e.stateName.lastIndexOf('.'));e.urlMatchPattern=''+d[n].urlMatchPattern+e.url}else if(l.isUniversal){var i=s.split('-').slice(1).join('-');e.urlMatchPattern='/{productId:\\w+}-'+i+e.url}else e.urlMatchPattern='/'+s+e.url;e.urlMatchPattern.endsWith('/')&&(e.urlMatchPattern=e.urlMatchPattern.substr(0,e.urlMatchPattern.length-1)),e.urlMatcher=t.compile(e.urlMatchPattern),e.matchesUrl=function(t){return null!=t&&null!=e.urlMatcher.exec(t)},routeData.push(e)}});case 5:case'end':return n.stop();}},n,this)}))}/*@ngInject*/function ssProductAccessSvc(e,t,n){// #--------------------------------------# //
// #---- Service (ssProductAccessSvc) ----# //
var s=n('ssProductAccessSvc.getMyProductRecords()','ssActiveUserSvc.getAccessRecords()',function(){return t.getAccessRecords()}),i=n('ssProductAccessSvc.getActiveUserId()','ssActiveUserSvc.getIdentityByType(\'employee\')',function(){return t.getIdentityByType('employee')});// External service API
return{getActiveUserId:i,getMyProductRecords:s,ready:t.ready};// #-- END Service (ssProductAccessSvc) --# //
// #--------------------------------------# //
}/*@ngInject*/function ssProfileCompletenessSvc(e,t,n){/**
	  * Run the employee object through the checker and map out what is complete and what isnt.
	  *
	  * @param {object} emp An employee record that needs to display its completeness to the user.
	  */function s(e){return{// Tabs are generally checkers for a physical tab on the ui
tabsIncomplete:{employee:h.filter(function(e){return'personal'===e.group}).some(function(t){return t.incomplete(e[t.name])}),employment:h.filter(function(e){return'employment'===e.group}).some(function(t){return t.incomplete(e[t.name])}),emergency:h.filter(function(e){return'emergency'===e.group}).some(function(t){return t.incomplete(e[t.name])})}}}/**
	  * Returns a string array that is the list of sections that need to be completed for a complete profile
	  *
	  * @returns {Array} string[] List of areas to complete
	  */function i(e){return h.filter(function(t){return t.incomplete(e[t.name])}).map(function(e){return e.label})}/**
	  * Checks the list of emergency contacts to ensure the the primary contact is present.
	  */function o(e){if(null==e)return!0;var t=e.find(function(e){return e._isPrimary});return null==t||p(t._primaryPhone)||p(t._alternatePhone)||p(t._contactName)||-1===t._relationshipType}/**
	  * Checks the address to ensure that it is valid
	  * @return True if the address is not present or incomplete
	  */function r(e){return!(null!=e)||!e||!!(angular.isArray(e)&&0===e.length)||(e=e.filter(function(e){return e.isCurrent})[0],null==e||!(e._street1&&e._city&&e._state&&e._zip))}/**
	  * Checks to see if any emails in the list have an email and are of type Personal or Work.
	  *
	  * @return True if the check fails. False if we do have a match.
	  */function l(e){return!(null!=e&&0!==e.length)||0===e.filter(function(n){return null!=n._emailAddress&&0<n._emailAddress.length&&(n._emailType===t.work||n._emailType===t.personal)}).length}/**
	  * Checks to see if any phones in the list have a number and are of type Personal or Other.
	  *
	  * @return True if the check fails. False if we do have a match.
	  */function d(e){return!(null!=e&&0!==e.length)||0===e.filter(function(e){return null!=e._number&&0<e._number.length&&(e._usageType===t.other||e._usageType===t.personal)}).length}/**
	  * Checks to see if there is a valid assignment on the employee object
	  *
	  * @param {any} assignments - the assignments on an employee object
	  * @returns {bool} true if check fails, false if we have valid assignments
	  */function u(e){return null==e||0===e.length}/**
	  * Checks to see if there is a current status on the employee object
	  *
	  * @param {any} statuses - the statusHistory on an employee object
	  * @returns {bool} true if check fails, false if we have valid assignments
	  */function c(e){if(null==e||0===e.length)return!0;var t=e.filter(function(e){return n.isCurrent({obj:e,fromProp:'_from',toProp:'_to'})})[0];return null==t}// #-- END Service (ssProfileCompletenessSvc) --# //
// #--------------------------------------------# //
// #--------------------------------------------# //
// #---- Service (ssProfileCompletenessSvc) ----# //
// basic completeness testing methods
var p=function(e){return'string'!=typeof e||0===e.length},m=function(e){return'number'!=typeof e},g=function(e){return null==e},h=[],f=e.resolve().then(function(){h=[{name:'_firstName',group:'personal',label:'First name',incomplete:p},{name:'_lastName',group:'personal',label:'last name',incomplete:p},{name:'_birthDateUtc',group:'personal',label:'Birth Date',incomplete:g},{name:'_sSN',group:'personal',label:'Social Security Number',incomplete:p},{name:'_maritalStatus',group:'personal',label:'Marital Status',incomplete:m},{name:'_gender',group:'personal',label:'Gender',incomplete:m},{name:'_ethnicity',group:'personal',label:'Ethnicity',incomplete:m},{name:'_race',group:'personal',label:'Race',incomplete:m},{name:'_addresses',group:'personal',label:'Home Address',incomplete:r},{name:'_emails',group:'personal',label:'Work/Personal Email Address',incomplete:l},{name:'_phoneNumbers',group:'personal',label:'Personal/Other Phone #',incomplete:d},{name:'_hireDate',group:'employment',label:'Hire Date',incomplete:g},{name:'_assignments',group:'employment',label:'Primary Assignment',incomplete:u},{name:'_emergencyContacts',group:'emergency',label:'Primary Emergency Contact',incomplete:o},{name:'_statusHistory',group:'employment',label:'Employment Status',incomplete:c}]});// single source of truth for all fields that make a profile complete and
// how we test whether or not they are complete
// External service API
return{ready:f,resolve:s,getIncompleteList:i}}/*@ngInject*/function ssSaveInterrupterSvc(e,t,n,s,i,o){/**
	  * Clears the models reference
	  *//**
	  * Sets up these event listeners tied to the scope of which app started it
	  */function r(){models.length=0}/**
	  * Add a model to the models array with an optional list of field names / relations to look for.
	  *
	  * @param {Object} mod
	  * @param {String[]} [fields=[]]
	  * @param {String} [url=$location.url()]
	  *
	  * @return {Boolean} Returns true if the model was added. False if the model was already present.
	  *//**
	  * Sets up these event listeners once
	  *//**
	  * Removes a model from the models array
	  *
	  * @param {Object} mod
	  *
	  * @return {Boolean} Returns true if the model was removed. False if the model was not found.
	  *//**
	  * Determines if the the models are dirty. Dirty is defined as being a new
	  * model (does not have $isDirty) or JsonApiModel.$isDirty /
	  * JsonApiCollection.$isDirty returns true.
	  *
	  * @return {Boolean} Returns true if dirty, false if not.
	  */function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'';// no models so we're clean
if(0===models.length)return!1;// are any models dirty?
for(var t=0,n;t<models.length;t++)if((n=models[t].mod,e.startsWith(s.protocol())&&(e=e.substring(e.indexOf('/',8))),!e.startsWith(models[t].url))&&(null==n.$isDirty||n.$isDirty({fields:models[t].fields})))// returns true if we found a dirty model; don't need to continue checking
// it is not a JsonApiModel/JsonApiCollection object or is dirty
return!0;// we're clean
return!1}/**
	  * Show Unsaved Changes modal
	  *
	  * @param {Function} [primary=function() {}]
	  */function d(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){};i.showDestructive({title:'You have unsaved changes. Are you sure you want to leave?',primaryText:'Leave Without Saving',secondaryText:'Return to Page',alwaysOnTop:!0}).then(function(){r(),'function'==typeof e&&e()},function(){// secondary, do nothing
})}// #-- END Service (ssSaveInterrupterSvc) --# //
// #----------------------------------------# //
// External service API
return function(){e.$on('$destroy',e.$on('$stateChangeStart',function(e,n,s){l(t.href(n,s))&&(e.preventDefault(),d(function(){t.go(n,s)}))})),o.on('location-change-start',function(e,t){!l(t)||e.defaultPrevented||(e.preventDefault(),d(function(){n.location=t}))},e),e.$on('$destroy',e.$on('$stateChangeSuccess',function(e,n,s){l(t.href(n,s))&&r()})),e.$on('$destroy',e.$on('$locationChangeSuccess',function(e,t){l(t)&&r()})),o.on('location-change-success',function(e,t){l(t)&&r()},e)}(),firstLoad&&(firstLoad=!1,function(){n.addEventListener('beforeunload',function(t){// Gecko, WebKit, Chrome <34
if(l()){r();// message doesn't matter; browsers don't support custom messages.
// Gecko, Trident, Chrome 34+
return t.returnValue='You have unsaved changes. Are you sure you want to leave?','You have unsaved changes. Are you sure you want to leave?'}})}()),{clear:r,isDirty:l,register:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.fields,i=void 0===n?[]:n,o=t.url,r=void 0===o?s.url():o,l;// jshint ignore:line
if(e.id&&e.id.length){// if found, return
if(l=models.find(function(t){return t.mod.id===e.id}),null!=l)return!1;}else// if found, return
if(l=models.findIndex(function(t){return t===e}),0<=l)return!1;// if we're here, add to the array
// jshint ignore:line
return models.push({mod:e,fields:i,url:r}),!0},showModal:d,unregister:function(e){var t=-1;if(e.id&&e.id.length){// if not found, return
if(t=models.find(function(t){return t.mod.id===e.id}),null==t)return!1;}else// if not found, return
if(t=models.findIndex(function(t){return t===e}),0>t)return!1;return models.splice(t,1),!0}}}/*@ngInject*/function departmentFilter(e){return function(t,n){// grab the department by id
var s=e.getDepartmentById(t);// can't find it?
// prop exist? no? doh!
return null==s?'':null==n?s:null==s['_'+n]?'':s['_'+n];// did we request a specific property? if not, give all
// yay, we find property
}}/*@ngInject*/function enumByValueFilter(e){return function(t,n){if(null==t||null==n)return'';var s=e[n].enumByValue(t);return null==s?'':e[n].enumByValue(t).name}}/*@ngInject*/function enumByNameFilter(e){return function(t,n){if(null==t||null==n)return'';var s=e[n].enumByName(t);return null==s?'':e[n].enumByName(t).value}}/*@ngInject*/function jobTypeFilter(e){return function(t,n){// grab the jobType by id
var s=e.getJobTypeById(t);// can't find it?
// prop exist? no? doh!
return null==s?'':null==n?s:null==s['_'+n]?'':s['_'+n];// did we request a specific property? if not, give all
// yay, we find property
}}/*@ngInject*/function locationFilter(e){return function(t,n){var s=e.getLocationById(t);return null==s?'':null==n?s:null==s['_'+n]?'':s['_'+n]}}// Moment Date Filters
/*@ngInject*/function fromNowFilter(){return function(e,t,n){var s=moment(e),i=moment(Date.now()),o=_Mathabs(i.diff(s,t));return moment.duration(o,t).format(n)}}/*@ngInject*/function buildConfig(e,t){// #---------------------------------# //
// #---- Utility (buildConfig) ----# //
var n=t.update,s=JSON.parse(e.sessionStorage.getItem('env-vars')||'{}');return n(e.buildConfig,s),e.buildConfig;// #-- END Utility (buildConfig) --# //
// #---------------------------------# //
}/*@ngInject*/function rAF(e,t,n){// #------------------------------------# //
// #---- Utility (ssAnimationFrame) ----# //
// External utility injectable value
var s=function(s,i){null!=s&&null==i&&n.error('rAF ==> triggered a full scope digest because no scope was provided');var o=e.defer();return _rAF(function(){var e='function'==typeof s,n=e?s():null;o.resolve(n),e&&!1!==i&&(null==i?t.$applyAsync():t.safeDigest(i))}),o.promise};return s.raw=function(e){return _rAF(e)},s;// #-- END Utility (ssAnimationFrame) --# //
// #------------------------------------# //
}function rafFunc(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}/*@ngInject*/function ssAsyncFactory(e){var t=function t(n,s){// eslint-disable-next-line no-shadow
function i(t,n){if(u)return void l.reject(Error('async aborted'));var s=t.next(n);// if we are done, resolve and stop
return c=s.value,s.done?void l.resolve(s.value):void(s=s.value instanceof Array?e.all(s.value):e.when(s.value),s.then(function(e){return i(t,e)},function(e){u||(l.reject(e),t.throw(e))}));// reassign yielded to the value
}function o(){r(c),u=!0}function r(e){e instanceof Array?e.forEach(r):e&&'function'==typeof e.$abort&&e.$abort()}classCallCheck(this,t);var l=e.defer(),d=n.apply(null,s),u=!1,c;return l.promise.$abort=o,i(d,null),l.promise};// #---------------------------# //
// #---- Utility (ssAsync) ----# //
// the ssAsync method is the main DI payload for this utility
return function(e){// the output of ssAsync function
return function(){for(var n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];return new t(e,s)}};// #-- END Utility (ssAsync) --# //
// #---------------------------# //
}/*@ngInject*/function ssDebounce(e){// #------------------------------# //
// #---- Utility (ssDebounce) ----# //
// External utility injectable value
// eslint-disable-next-line no-shadow
return function(t,n,s,i){function o(){d=this,l=arguments;var o=function(){r=null,s||(u=t.apply(d,l))},c=s&&!r;return r&&e.cancel(r),r=e(o,n,i),c&&(u=t.apply(d,l)),u}var r,l,d,u;return o.cancel=function(){e.cancel(r),r=null},o};// #-- END Utility (ssDebounce) --# //
// #------------------------------# //
}/*@ngInject*/function ssDeprecated(e){// #--------------------------------# //
// #---- Utility (ssDeprecated) ----# //
// External utility injectable value
return function(t,n,s){return function(){e.error('DEPRECATED! '+t+' has been deprecated, use '+n+' instead');for(var i=arguments.length,o=Array(i),r=0;r<i;r++)o[r]=arguments[r];return s.apply(null,o)}};// #-- END Utility (ssDeprecated) --# //
// #--------------------------------# //
}/*@ngInject*/function ssEnum(e,t,n,s,i,o,r,l,d,u,c,p,m,g,h,f,y,v,b,_,S,A,x,T,k,w,P,C,O,I,E,j,$,D,R,F,H/*enumInject*/){// #---------------------------# //
// #---- Utility (ssEnums) ----# //
// keep the list alphabatized
return{ethnicity:e,gender:t,licenseTypes:n,maritalStatus:s,phoneTypes:i,race:o,relationshipTypes:r,salutation:l,states:d,suffix:u,usageType:c,stepAction:p,stepEventType:m,stepEventAction:g,stepParticipantType:h,employeeStatus:f,formStatus:y,formTemplateStatus:v,fieldWidths:b,fieldHeights:_,flInviteStatus:S,securityGroupScope:A,locationCategories:x,jobTypeCategories:T,propertyAction:k,personnelCategory:w,medicalCategory:P,salaryType:C,retirementSystem:O,emergencyContactRelationship:I,formPacketCategory:E,payRateFrequency:j,formAdministratorType:$,addressType:D,highchartsTypes:R,emailType:F,signatureDisplayMethod:H/*enumList*/};// #-- END Utility (ssEnums) --# //
// #---------------------------# //
}/*@ngInject*/function ssJsonApi(e,t,n,s,i,r,o,l,d,u,c,p,m){/**
	 * token replacement in link urls
	 */function g(e){if(null!=e._links){var t=Object.keys(e._links);t.forEach(function(t){var n=e._links[t];if('string'==typeof n){var s=n.match(/{.*?}/g);null==s||(s=s.map(function(e){return e.slice(1,-1)}),s.forEach(function(s){return n=n.split('{'+s+'}').join(e[s])}),e._links[t]=n)}})}}function h(e){if(null!=e._meta&&null!=e._meta.permissions){var t={},n=e._meta.permissions,s=n.permittedProperties,i=n.permittedActions,o=Object.keys(s).reduce(function(e,t){return Object.defineProperty(e,t,{enumerable:!0,value:{}}),Object.defineProperty(e[t],'view',{enumerable:!0,value:s[t]!==p.notVisible}),Object.defineProperty(e[t],'edit',{enumerable:!0,value:[p.edit,p.redactedEdit].includes(s[t])}),Object.defineProperty(e[t],'redacted',{enumerable:!0,value:[p.redactedView,p.redactedEdit].includes(s[t])}),Object.defineProperty(e[t],'raw',{enumerable:!0,value:s[t]}),e},{});return Object.defineProperty(t,'props',{enumerable:!0,value:o}),Object.defineProperty(t,'actions',{enumerable:!0,value:i}),t}}function f(e,t){return Error('Couldn\'t '+e+' '+t._type+' ('+t.id+') :: Missing link data')}/**
	  * Test for changes to the current object
	  */function y(t,n){var s=t,i=n;return d.isDate(s)||d.isDate(i)?null==s||null==i||(s instanceof e&&(s=s.toDate()),i instanceof e&&(i=i.toDate()),'string'==typeof s&&(s=new Date(s)),'string'==typeof i&&(i=new Date(i)),s.getTime()!==i.getTime()):s!==i}// External utility injectable value
// #-----------------------------# //
// #---- Utility (ssJsonApi) ----# //
var v=['ownerId','ownerVersionNumber'],b=new WeakMap,_=new Map,S=new WeakMap,A=new Map,x=function(){function e(t,n,s){classCallCheck(this,e),null==s&&(s=this),g(t),this.$permitted=h(t);// create a single place where all model changes to this object
// can be tracked. if this is part of the JsonApiModel itself
// then changes to the model from other JsonApiModel objects will
// not correctly reflect the changed state of the model
var i=n.model+'-'+t.id;_.has(i)||_.set(i,{_changes:new Set,_initialState:new Map}),b.set(this,{// proxy requests through to the central changes object
get _changes(){return _.get(i)._changes},// proxy requests through to the central state object
get _initialState(){return _.get(i)._initialState},_model:t,_schema:Object.assign({},n,{path:t._links&&t._links.self||null}),_root:s}),this.$$resetChangesDetected(),A.set(t.ownerId,t.ownerVersionNumber),this.$$hashKey=t.id,this.$$syncModel(!0),this.$$applyMutators()}/**
	   * Submit a Patch to the server to save the updated data.
	   *
	   * @param {boolean} [deepSave=true] Update children objects with parent.
	   * @param {boolean} [refresh=true] Update the object on the way out with the new data.
	   * @param {boolean} [internalErrorHandling=true] Handle the errors internally with the toasts, otherwise rethrow the exception and let the calling code deal with the mess.
	   * @returns Promise with the result of the Ajax call
	   */return createClass(e,[{key:'$save',value:function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],s=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];return i(/*#__PURE__*/regeneratorRuntime.mark(function i(){var l,d,u,c,p,g,h,y,_,S,x,T,k,w,P;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:// make sure we have a path for this object (from link data)
if(l=b.get(this),d=l._changes,u=l._model,c=l._schema,null!=c.path){i.next=4;break}throw f('save',u);case 4:if(this.$$syncModel(),0!==d.size||e){i.next=7;break}return i.abrupt('return');case 7:if(!(0<d.size)){i.next=40;break}return o.emit('ss-json-api.preSave.'+c.model,this),p=v.filter(function(e){return u._attributes.includes(e)}),g=Array.from(d.keys()),t||this.$$resetChangesDetected(),i.prev=12,u.ownerVersionNumber=A.get(u.ownerId),h=u.serialize({attributes:g.concat(p),relationships:[]}),i.next=17,n.patch(c.path,h);case 17:// Sanity Check - we don't want a null as the ownerVersionMap Key or Value
if(y=i.sent,_=u._attributes.reduce(function(e,t){return e[t]=u[t],e},{}),r.store.sync(y.data),(u.ownerId||!u.ownerVersionNumber)&&(!u.ownerId||u.ownerVersionNumber)){i.next=25;break}if(u.ownerId){i.next=23;break}throw'$Save failure due to missing ownerId. Please refresh your page.';case 23:if(u.ownerVersionNumber){i.next=25;break}throw'$Save failure due to missing ownerVersionNumber. Please refresh your page.';case 25:A.set(u.ownerId,u.ownerVersionNumber),t||Object.assign(u,_),this.$$syncModel(),t&&this.$$resetChangesDetected(),this.$$applyMutators(),o.emit('ss-json-api.postSave.'+c.model,this),i.next=40;break;case 33:if(i.prev=33,i.t0=i['catch'](12),!s){i.next=39;break}m.handle4XX(i.t0),i.next=40;break;case 39:throw i.t0;case 40:if(!e){i.next=67;break}S=!0,x=!1,T=void 0,i.prev=44,k=c.relationships[Symbol.iterator]();case 46:if(S=(w=k.next()).done){i.next=53;break}return P=w.value,i.next=50,this['_'+P].$save(!1,t);case 50:S=!0,i.next=46;break;case 53:i.next=59;break;case 55:i.prev=55,i.t1=i['catch'](44),x=!0,T=i.t1;case 59:i.prev=59,i.prev=60,!S&&k.return&&k.return();case 62:if(i.prev=62,!x){i.next=65;break}throw T;case 65:return i.finish(62);case 66:return i.finish(59);case 67:return i.abrupt('return',this);case 68:case'end':return i.stop();}},i,this,[[12,33],[44,55,59,67],[60,,62,66]])}).bind(this))()}/**
	    * Delete (or it's equivalent) the record from the database
	    *
	   	 * @param {boolean} [internalErrorHandling=true] Handle the errors internally with the toasts, otherwise rethrow the exception and let the calling code deal with the mess.
	    * @returns Promise with the result of the Ajax call.
	    */},{key:'$remove',value:function(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];return i(/*#__PURE__*/regeneratorRuntime.mark(function t(){var s,i,l,d,u,p;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:// make sure we have a path for this object (from link data)
if(s=b.get(this),i=s._model,l=s._schema,null!=l.path){t.next=4;break}throw f('remove',i);case 4:return t.prev=4,d=A.get(i.ownerId),t.next=8,n.delete(l.path+'?version='+d);case 8:return u=t.sent,p=l.collection,null!=p&&(p.splice(p.indexOf(this),1),p.$$state.splice(p.$$state.indexOf(i.id),1)),i.ownerId!==i.id&&A.set(i.ownerId,d+1),o.emit('ss-json-api.removedRecord.'+l.model,i.id,i),r.store.destroy(i),t.abrupt('return',u);case 17:if(t.prev=17,t.t0=t['catch'](4),!e){t.next=23;break}c.errorAjax(t.t0),t.next=24;break;case 23:throw t.t0;case 24:return t.abrupt('return');case 25:case'end':return t.stop();}},t,this,[[4,17]])}).bind(this))()}/**
	    * Returns true if the model is dirty optionally checking certain fields if specified.
	    *
	    * @param {Boolean} [deep=true] Check relationships
	    * @param {String[]} [fields=[]] Optional list of fields to check for dirtiness
	    *
	    * @return {Boolean}
	    */},{key:'$isDirty',value:function(){// this is here to not make a function in a for loop
function e(e){return i.length&&null==i.find(function(t){return t===e})}var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=t.deep,s=t.fields,i=void 0===s?[]:s,o=b.get(this),r=o._changes,l=o._schema;// jshint ignore:line
if(i.length){// if there are commonalities from _changes to fields then we are dirty
if(Array.from(r).filter(function(e){return i.includes(e)}).length)return!0;}else if(0<r.size)return!0;if(void 0===n||n){var d=!0,u=!1,c=void 0;try{for(var p=l.relationships[Symbol.iterator](),m,g;!(d=(m=p.next()).done);d=!0)// this relationship is not in the non-empty field list so we can skip
if((g=m.value,!e(g))&&(null==this['_'+g].$isDirty||this['_'+g].$isDirty({deep:!1})))// check relationship if dirty
return!0}catch(e){u=!0,c=e}finally{try{!d&&p.return&&p.return()}finally{if(u)throw c}}}// we're clean
return!1}},{key:'$serialize',value:function(e){return b.get(this)._model.serialize(e)}},{key:'$revert',value:function(){// pull the data we need out of our model meta data
var e=b.get(this),t=e._changes,n=e._initialState,i=e._model,o=!0,r=!1,l=void 0;try{for(var d=t[Symbol.iterator](),u,c;!(o=(u=d.next()).done);o=!0)c=u.value,i[c]=JSON.parse(n.get(c))}catch(e){r=!0,l=e}finally{try{!o&&d.return&&d.return()}finally{if(r)throw l}}t.clear(),s.$applyAsync()}},{key:'$refresh',value:function(){var e=this,t=b.get(this),s=t._root,i=t._model,l=t._schema;// pull the data we need out of our model meta data
// make sure we have a path for this object (from link data)
if(null==l.path)throw f('refresh',i);var d={};return s===this?(o.emit('ss-json-api.preRefresh.'+l.model,this),0<l.relationships.length&&(d.include=l.relationships.join(',')),d.fields=i._attributes.join(','),n({url:l.path,params:d}).then(function(n){return t._model=r.store.sync(n.data),e.$$syncModel(!0),e.$$resetChangesDetected(),e.$$applyMutators(),o.emit('ss-json-api.postRefresh.'+l.model,e),e})):s.$refresh()}},{key:'$getLinks',value:function(){var e=b.get(this),t=e._model,n=void 0===t?{}:t;return angular.copy(n._links)}},{key:'$getMeta',value:function(){var e=b.get(this),t=e._model,n=void 0===t?{}:t;return angular.copy(n._meta||{})}},{key:'$$resetChangesDetected',value:function(){// pull the data we need out of our model meta data
var e=b.get(this),t=e._changes,n=e._initialState,s=e._model;n.clear(),s._attributes.forEach(function(t){return e._initialState.set(t,JSON.stringify(s[t]))}),t.clear()}},{key:'$$forceChangedState',value:function(e){var n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];// I understand if you think the attribute has an underscore
// in front that is, after all, what I gave you.
e.startsWith('_')&&(e=e.slice(1));// pull the data we need out of our model meta data
var s=b.get(this),i=s._changes,o=s._initialState,r=s._model;// if it ain't in the initial state, give up now
return o.has(e)?void(n?(o.set(e,'null'),i.add(e)):i.has(e)&&(o.set(e,JSON.stringify(r[e])),i.delete(e))):void t.warn('could not force the changed state for',e,'on',this)}},{key:'$$applyMutators',value:function(e){var n=this,s=b.get(this),i=s._model;S.has(i)||S.set(i,{});var o=S.get(i);if(null!=u[i._type]){var r=u[i._type],l=Object.keys(r).sort();e instanceof Array&&l.filter(function(t){return e.includes(t)}),l.forEach(function(e){var s=r[e];// allow mutators to be prefixed with a ! to mark them as
// important and have them run first
e.startsWith('!')&&(e=e.slice(1)),o[e]=s,n.hasOwnProperty(e)||Object.defineProperty(n,e,{enumerable:!0,get:function(){return'function'==typeof o[e]&&(o[e]=o[e](this)),o[e]},set:function(){t.error(i._type+':'+e,'can not be set because it is a mutator value')}})})}}},{key:'$$syncModel',value:function(){function e(s,i,r){var c=this,p=n(d,i);if(angular.isObject(p[r])&&!angular.isArray(p[r])){var m={};return Object.keys(p[r]).forEach(function(t){var n=i.length?i+'.'+r:r;Object.defineProperty(m,t,e.bind(c)(s,n,t))}),{enumerable:!0,value:m}}return{enumerable:!0,get:function(){// get the current object reference
var e=n(d,i);// if the root object is null or undefined, return
// that null or undefined value. Otherwise, return
// the attribute value.
return null==e?e:e[r]},set:function(e){var c=n(d,i);// if the root object is null or undefined, we can't
// set data on it. Throw an error and bail out.
return null==c?void t.error('JsonApi Object Error: '+i+'.'+r+' can\'t be set because '+i+' is null.'):void(y(e,c[r])&&(e instanceof Date&&(e=e.toISOString()),!l.has(s)&&l.add(s),o.emit('ss-json-api.changedRecord.'+d._type,d,s,s+i,c[r],e),c[r]=e,u.get(s)===JSON.stringify(d[s])&&l.delete(s)))}}}/**
	     * Looks up a target path within another object using
	     * dot notation. needed in order to ensure that we are always reflecting
	     * changes into the current model object and not an old reference to
	     * a previous model.
	     * @param {object} obj The object to resolve
	     * @param {string} path The path to find the object
	    */function n(e,t){var s=t.split('.'),i=s.shift();return null==e&&0<i.length?void 0:''===i?e:n(e[i],s.join('.'))}var s=this,i=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0],r=b.get(this),l=r._changes,d=r._model,u=r._initialState,c=r._schema,p=r._root;// pull the data we need out of our model meta data
d._attributes.filter(function(e){return!v.includes(e)}).filter(function(e){return!s.hasOwnProperty('_'+e)}).filter(function(e){return!d._relationships.includes(e)}).forEach(function(t){return Object.defineProperty(s,'_'+t,e.bind(s)(t,'',t))}),d._relationships.filter(function(e){return i||!s.hasOwnProperty('_'+e)}).forEach(function(e){var t=d._links,n=Object.assign({},c,{model:e,path:t&&t[e]&&t[e].self||null,relationships:[]});s['_'+e]=new T(d[e]||[],n,p)}),this.hasOwnProperty('id')||Object.defineProperty(this,'id',{enumerable:!0,value:d.id})}}]),e}(),T=function(){function e(t,n,s){var i=this;classCallCheck(this,e);var o=[],r=!0,l=!1,d=void 0;try{for(var u=t[Symbol.iterator](),c;!(r=(c=u.next()).done);r=!0){var p=c.value,m=Object.assign({},n,{path:p._links&&p._links.self||null,collection:o});o.push(new x(p,m,s))}}catch(e){l=!0,d=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw d}}return n.path=n.path||null,o.$$state=t.map(function(e){return e.id}),o.$$schema=n,o.$$root=s,o.$$constructor=this,o.$$meta=t._meta||{},['$save','$isDirty','$getMeta'].forEach(function(e){return o[e]=i[e].bind(o)}),o}/**
	   * Determines if the the models are dirty. Dirty is defined as being
	   * a new model (does not have $isDirty) or $isDirty returns true.
	   *
	   * @param {Boolean} [deep=true] Check relationships
	   * @param {String[]} fields
	   *
	   * @return {Boolean}
	   */return createClass(e,[{key:'$isDirty',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.deep,n=e.fields,s=void 0===n?[]:n,o=this.$$state.length,r;// jshint ignore:line
// if the initial length (represented by this.$$state.length) does not equal the current length (this.length) then we are dirty
if(o!==this.length)return!0;// then check children
for(var l=0;l<this.length;l++)// it is not a JsonApi object or the model is dirty
if(r=this[l],null==r.$isDirty||r.$isDirty({deep:void 0===t||t,fields:s}))return!0;// we are clean
return!1}/**
	    * Saves changes to a JsonApi collection
	    *
	    * @param {boolean|Object} [deepSave=true] Save down the hierarchy or a configuration object of arguments (deepSave, refresh, internalErrorHandling, opOrder)
	    * @param {boolean} [refresh=true] Refresh the object on the way back out.
	   	 * @param {boolean} [internalErrorHandling=true] Handle the errors internally with the toasts, otherwise rethrow the exception and let the calling code deal with the mess.
	    * @returns {Promise} Promise resolves when all save operations are complete.
	    */},{key:'$save',value:function(){for(var e=arguments.length,s=Array(e),d=0;d<e;d++)s[d]=arguments[d];return i(/*#__PURE__*/regeneratorRuntime.mark(function e(){var d,u,p,m,g,h,y,v,b,_,S,T,k,w,P,C,O,I,E;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d={deepSave:!0,refresh:!0,internalErrorHandling:!0,opOrder:['add','modify','remove']},1===s.length&&l.isObject(s[0])&&Object.assign(d,s[0]),u=d.deepSave,p=d.refresh,m=d.internalErrorHandling,g=d.opOrder,s.every(function(e){return'boolean'==typeof e})&&(h=s[0],u=void 0===h?u:h,y=s[1],p=void 0===y?p:y,v=s[2],m=void 0===v?m:v),S=this.$$schema,T=[],this.forEach(function(e){// if this object is already a model, it's a preexisting record
if(!(e instanceof x)){// construct the base model
var t=new r.Model(S.model);// populate the base model with values that should be mapped back to the server
Object.keys(e).filter(function(e){return e.startsWith('_')})// filter props to those that should map back (prefixed with _)
.map(function(e){return e.substr(1)})// the raw model does not have the _ prefix, strip it
.filter(function(e){return!S.relationships.includes(e)})// if the prop is a relationship collection, omit it
.forEach(function(n){return t.setAttribute(n,e['_'+n])}),S.relationships.forEach(function(e){return t.setRelationship(e,[])}),T.push({obj:e,model:t})}}),k={// saves changes to existing records in the collection
modify:i(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t,n,s,i,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,n=!1,s=void 0,e.prev=3,i=this[Symbol.iterator]();case 5:if(t=(o=i.next()).done){e.next=14;break}if(r=o.value,r instanceof x){e.next=9;break}return e.abrupt('continue',11);case 9:return e.next=11,r.$save(u,p);case 11:t=!0,e.next=5;break;case 14:e.next=20;break;case 16:e.prev=16,e.t0=e['catch'](3),n=!0,s=e.t0;case 20:e.prev=20,e.prev=21,!t&&i.return&&i.return();case 23:if(e.prev=23,!n){e.next=26;break}throw s;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case'end':return e.stop();}},e,this,[[3,16,20,28],[21,,23,27]])}).bind(this)),// deletes records on the server that were removed from the collection
remove:i(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t,s,i,l,d,u,c,p,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b=this.map(function(e){return e.id}).filter(function(e){return'string'==typeof e}),_=this.$$state.filter(function(e){return!b.includes(e)}),t=!0,s=!1,i=void 0,e.prev=5,l=_[Symbol.iterator]();case 7:if(t=(d=l.next()).done){e.next=22;break}// make sure we have a path for this object (from link data)
if(u=d.value,c=r.store.find(this.$$schema.model,u),p=A.get(c.ownerId),m=c._links&&c._links.self||null,null!=m){e.next=14;break}throw f('remove',c);case 14:return e.next=16,n.delete(m+'?version='+p);case 16:c.ownerId!==c.id&&A.set(c.ownerId,p+1),r.store.destroy(c),o.emit('ss-json-api.removedRecord.'+S.model,u,c);case 19:t=!0,e.next=7;break;case 22:e.next=28;break;case 24:e.prev=24,e.t0=e['catch'](5),s=!0,i=e.t0;case 28:e.prev=28,e.prev=29,!t&&l.return&&l.return();case 31:if(e.prev=31,!s){e.next=34;break}throw i;case 34:return e.finish(31);case 35:return e.finish(28);case 36:case'end':return e.stop();}},e,this,[[5,24,28,36],[29,,31,35]])}).bind(this)),// adds new records for objects added to the collection
add:i(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t=this,s,i,d,u,c,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=!0,i=!1,d=void 0,e.prev=3,u=/*#__PURE__*/regeneratorRuntime.mark(function e(){var s,i,d,u,c,g;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=m.value,i={},S.relationships.length&&(i.params={include:S.relationships.join(',')}),e.next=5,n.post(S.path,s.model.serialize(),i);case 5:d=e.sent.data,u=r.store.sync(d),c=Object.assign({},S,{path:u._links&&u._links.self||null,collection:t}),g=new x(u,c,t.$$root),l.passiveExtend(g,s.obj),p||l.update(g,s.obj),S.relationships.filter(function(e){return null!=s.obj['_'+e]&&s.obj['_'+e].length}).forEach(function(e){Array.prototype.splice.apply(g['_'+e],[0,0].concat(s.obj['_'+e]))}),o.emit('ss-json-api.addedRecord.'+S.model,s.obj,g),t[t.indexOf(s.obj)]=g;case 14:case'end':return e.stop();}},e,t)}),c=T[Symbol.iterator]();case 6:if(s=(m=c.next()).done){e.next=11;break}return e.delegateYield(u(),'t0',8);case 8:s=!0,e.next=6;break;case 11:e.next=17;break;case 13:e.prev=13,e.t1=e['catch'](3),i=!0,d=e.t1;case 17:e.prev=17,e.prev=18,!s&&c.return&&c.return();case 20:if(e.prev=20,!i){e.next=23;break}throw d;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case'end':return e.stop();}},e,this,[[3,13,17,25],[18,,20,24]])}).bind(this))},e.prev=9,w=!0,P=!1,C=void 0,e.prev=13,O=g[Symbol.iterator]();case 15:if(w=(I=O.next()).done){e.next=22;break}return E=I.value,e.next=19,k[E]();case 19:w=!0,e.next=15;break;case 22:e.next=28;break;case 24:e.prev=24,e.t0=e['catch'](13),P=!0,C=e.t0;case 28:e.prev=28,e.prev=29,!w&&O.return&&O.return();case 31:if(e.prev=31,!P){e.next=34;break}throw C;case 34:return e.finish(31);case 35:return e.finish(28);case 36:this.$$state=b,e.next=47;break;case 39:if(e.prev=39,e.t1=e['catch'](9),!m){e.next=46;break}t.error(e.t1),c.errorAjax(e.t1),e.next=47;break;case 46:throw e.t1;case 47:case'end':return e.stop();}},e,this,[[9,39],[13,24,28,36],[29,,31,35]])}).bind(this))()}},{key:'$getMeta',value:function(){return angular.copy(this.$$meta)}}]),e}();return{Model:x,Collection:T};// #-- END Utility (ssJsonApi) --# //
// #-----------------------------# //
}/*@ngInject*/function ssMutator(e,t,n,s,i,o,r,l,d,u,c,p,m,g,h/*mutatorInject*/){// #-----------------------------# //
// #---- Utility (ssMutator) ----# //
// keep the list alphabatized
return{phoneNumbers:e,employees:t,positions:n,organizations:s,formTemplates:i,iFormLibraryObjects:o,messages:r,locations:l,formInstances:d,securityScopes:u,securityGroups:c,paySchedules:p,addresses:m,supervisors:g,jobTypeDetails:h/*mutatorList*/};// #-- END Utility (ssMutator) --# //
// #-----------------------------# //
}/*@ngInject*/function ssStorage(e,t,n){function s(e){e.startsWith('SUPER_')||(null==localCache[o()+'_'+e]?null!=localCache['SUPER_'+e]&&(e='SUPER_'+e):e=o()+'_'+e),delete localCache[e],delete cacheTypes[e],window.localStorage.removeItem(e),window.sessionStorage.removeItem(e)}function i(e){return e instanceof t.Model||e.$$constructor&&e.$$constructor instanceof t.Collection}function o(){var e='SUPER';return null!=l&&(e+='_'+l),e}/**
	  * A rough approximation of how big some object is in memory.  Doesn't need to be super
	  * accurate, just enough to apply some rough logic based on the size of something.
	  * Use case: Getting all JobTypes returns a 20MB list.  This is too large for session
	  * 	storage.  We can calculate the size and make a determination about where to put
	  * 	the data for reuse.
	  * From:
	  * https://stackoverflow.com/questions/5515869/string-length-in-bytes-in-javascript
	  * @param {string} str The string that needs its size calculated
	  */function r(e){// returns the byte length of an utf8 string
if(null==e)return 0;for(var t=e.length,n=e.length-1,o;0<=n;n--)o=e.charCodeAt(n),127<o&&2047>=o?t++:2047<o&&65535>=o&&(t+=2),56320<=o&&57343>=o&&n--;return t}// #-----------------------------# //
// #---- Utility (ssStorage) ----# //
var l;// ~kinda sorta 2MB
return n.getProfileId().then(function(e){return l=e}),{// exposedMethodName: internalMethodName
load:function(t){var n=new Date().getTime(),i=null,r=void 0;// check if this has expired yet
return'string'!=typeof t&&e.error('ssStorage.load => storage key is required'),t=o()+'_'+t,r=JSON.parse(localCache[t]||// check local cache
window.sessionStorage.getItem(t)||// check sessionStorage
window.localStorage.getItem(t)||// check localStorage
'null'// fallback to null
),r&&null!=r.expires&&(i=new Date(r.expires).getTime()),i&&n>=i?(s(t),null):r&&r.data||null;// parse the data and return
},save:function(t,n){var s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},l=!0===s.persistent,d=null===s.expires,u='number'==typeof s.expires?s.expires:1440,c=l&&Modernizr.localstorage?'localStorage':'sessionStorage';// should this data span mutliple sessions
// should this data not expire
// minutes until persistent data expires (defaults to 24 hours)
// if persistent is requested but not supported
// then fallback to sessionStorage
// I can haz key?
return'string'==typeof t?null==n?void e.error('ssStorage.save => data is required'):i(n)?void e.error('ssStorage.save => JsonApi data not supported',t):(t=o()+'_'+t,n=JSON.stringify({expires:d?null:new Date(new Date().getTime()+6e4*u),data:n}),cacheTypes[t]&&cacheTypes[t]!==c&&(e.warn('ssStorage.save => type for '+t+' can not change once set'),c=cacheTypes[t]),localCache[t]=n,2048000>r(n)&&Modernizr[c.toLowerCase()]&&(cacheTypes[t]=c,window[c].setItem(t,n)),JSON.parse(n).data):void e.error('ssStorage.save => key is required');// I can haz datas?
// prefix the key
},clear:s,clearAll:function(){var e,t;for(e=Modernizr.localstorage&&window.localStorage.length||0;e--;)t=window.localStorage.key(e),t.startsWith('SUPER_')&&s(t);for(e=Modernizr.sessionstorage&&window.sessionStorage.length||0;e--;)t=window.sessionStorage.key(e),t.startsWith('SUPER_')&&s(t)}};// #-- END Utility (ssStorage) --# //
// #-----------------------------# //
}/*@ngInject*/function ssTempCache(e){// #-------------------------------# //
// #---- Utility (ssTempCache) ----# //
// External utility injectable value
return function(t){return(tempCache||e).get(t)};// #-- END Utility (ssTempCache) --# //
// #-------------------------------# //
}/*@ngInject*/function fillTempCache(e){tempCache=e}// #-----------------------------------# //
// #---- Helper (ssApiResponseHlp) ----# //
/*@ngInject*/function ssApiResponseHlp(e,t){return{_defaults:{DEFAULT_ERROR:'Something went wrong. Please try again later.',DEFAULT_ERROR_TITLE:'System Error',DEFAULT_VALIDATION:'There was an error with one or more of the items you entered. Please double check your responses and try again.'},handle4XX:function(n){if([417,422].includes(n.status)||t.errorAjax(n),417===n.status)t.error('Something went wrong. Please try again later.','System Error');else if(422===n.status){// pass through the message because we know it is supposed to be a validation message,
//	but only if we have a valid object to pull out the message
// first check camelCase property; then check check TitleCase property; SVC team is aiming to not use TitleCase anymore.
var s=e.glean(n,function(e){return e.data.errors.title||e.data.errors.Title},!1);s?t.error(s):t.error('There was an error with one or more of the items you entered. Please double check your responses and try again.','System Error')}}}}// #-- END Helper (ssApiResponseHlp) --# //
// #-----------------------------------# //
/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag),n=e[symToStringTag];try{e[symToStringTag]=void 0}catch(t){}var s=nativeObjectToString.call(e);return t?e[symToStringTag]=n:delete e[symToStringTag],s}/** Used for built-in method references. *//**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */function objectToString(e){return nativeObjectToString$1.call(e)}/** `Object#toString` result references. *//**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */function baseGetTag(e){return null==e?void 0===e?'[object Undefined]':'[object Null]':symToStringTag$1&&symToStringTag$1 in Object(e)?getRawTag(e):objectToString(e)}/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */function isObject(e){var t=typeof e;return null!=e&&('object'==t||'function'==t)}/** `Object#toString` result references. *//**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */function isFunction(e){if(!isObject(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=baseGetTag(e);return t=='[object Function]'||t=='[object GeneratorFunction]'||t=='[object AsyncFunction]'||t=='[object Proxy]'}/** Used to detect overreaching core-js shims. *//**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}/** Used for built-in method references. *//**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(t){}try{return e+''}catch(t){}}return''}/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 *//**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */function baseIsNative(e){if(!isObject(e)||isMasked(e))return!1;var t=isFunction(e)?reIsNative:reIsHostCtor;return t.test(toSource(e))}/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */function getValue(e,t){return null==e?void 0:e[t]}/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */function getNative(e,t){var n=getValue(e,t);return baseIsNative(n)?n:void 0}/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */function baseAssignValue(e,t,n){'__proto__'==t&&defineProperty$1?defineProperty$1(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}/**
	 * A specialized version of `baseAggregator` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} setter The function to set `accumulator` values.
	 * @param {Function} iteratee The iteratee to transform keys.
	 * @param {Object} accumulator The initial aggregated object.
	 * @returns {Function} Returns `accumulator`.
	 */function arrayAggregator(e,t,n,s){for(var i=-1,o=null==e?0:e.length;++i<o;){var r=e[i];t(s,r,n(r),e)}return s}/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */function createBaseFor(e){return function(t,n,s){for(var i=-1,o=Object(t),r=s(t),l=r.length;l--;){var d=r[e?l:++i];if(!1===n(o[d],d,o))break}return t}}/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 *//**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */function baseTimes(e,t){for(var n=-1,s=Array(e);++n<e;)s[n]=t(n);return s}/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */function isObjectLike(e){return null!=e&&'object'==typeof e}/** `Object#toString` result references. *//**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)=='[object Arguments]'}/** Used for built-in method references. *//**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */function stubFalse(){return!1}/** Detect free variable `exports`. *//**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */function isIndex(e,t){var n=typeof e;return t=null==t?9007199254740991:t,!!t&&('number'==n||'symbol'!=n&&reIsUint.test(e))&&-1<e&&0==e%1&&e<t}/** Used as references for various `Number` constants. *//**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */function isLength(e){return'number'==typeof e&&-1<e&&0==e%1&&e<=9007199254740991}/** `Object#toString` result references. *//**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[baseGetTag(e)]}/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */function baseUnary(e){return function(t){return e(t)}}/** Detect free variable `exports`. *//**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */function arrayLikeKeys(e,t){var n=isArray(e),s=!n&&isArguments(e),i=!n&&!s&&isBuffer(e),o=!n&&!s&&!i&&isTypedArray(e),r=n||s||i||o,l=r?baseTimes(e.length,String):[],d=l.length;for(var u in e)(t||hasOwnProperty$3.call(e,u))&&!(r&&(// Safari 9 has enumerable `arguments.length` in strict mode.
'length'==u||// Node.js 0.10 has enumerable non-index properties on buffers.
i&&('offset'==u||'parent'==u)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
o&&('buffer'==u||'byteLength'==u||'byteOffset'==u)||// Skip index properties.
isIndex(u,d)))&&l.push(u);return l}/** Used for built-in method references. *//**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */function isPrototype(e){var t=e&&e.constructor,n='function'==typeof t&&t.prototype||objectProto$5;return e===n}/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */function overArg(e,t){return function(n){return e(t(n))}}/* Built-in method references for those with the same name as other `lodash` methods. *//**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var t=[];for(var n in Object(e))hasOwnProperty$4.call(e,n)&&'constructor'!=n&&t.push(n);return t}/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */function isArrayLike(e){return null!=e&&isLength(e.length)&&!isFunction(e)}/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */function baseForOwn(e,t){return e&&baseFor(e,t,keys)}/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */function createBaseEach(e,t){return function(n,s){if(null==n)return n;if(!isArrayLike(n))return e(n,s);for(var i=n.length,o=t?i:-1,r=Object(n);(t?o--:++o<i)&&!(!1===s(r[o],o,r)););return n}}/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 *//**
	 * Aggregates elements of `collection` on `accumulator` with keys transformed
	 * by `iteratee` and values set by `setter`.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} setter The function to set `accumulator` values.
	 * @param {Function} iteratee The iteratee to transform keys.
	 * @param {Object} accumulator The initial aggregated object.
	 * @returns {Function} Returns `accumulator`.
	 */function baseAggregator(e,t,n,s){return baseEach(e,function(e,i,o){t(s,e,n(e),o)}),s}/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */function listCacheClear(){this.__data__=[],this.size=0}/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */function eq(e,t){return e===t||e!==e&&t!==t}/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */function assocIndexOf(e,t){for(var n=e.length;n--;)if(eq(e[n][0],t))return n;return-1}/** Used for built-in method references. *//**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */function listCacheDelete(e){var t=this.__data__,n=assocIndexOf(t,e);if(0>n)return!1;var s=t.length-1;return n==s?t.pop():splice.call(t,n,1),--this.size,!0}/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */function listCacheGet(e){var t=this.__data__,n=assocIndexOf(t,e);return 0>n?void 0:t[n][1]}/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */function listCacheHas(e){return-1<assocIndexOf(this.__data__,e)}/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */function listCacheSet(e,t){var n=this.__data__,s=assocIndexOf(n,e);return 0>s?(++this.size,n.push([e,t])):n[s][1]=t,this}/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */function ListCache(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var s=e[t];this.set(s[0],s[1])}}// Add methods to `ListCache`.
/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */function stackClear(){this.__data__=new ListCache,this.size=0}/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */function stackDelete(e){var t=this.__data__,n=t['delete'](e);return this.size=t.size,n}/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */function stackGet(e){return this.__data__.get(e)}/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */function stackHas(e){return this.__data__.has(e)}/* Built-in method references that are verified to be native. *//**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{},this.size=0}/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}/** Used to stand-in for `undefined` hash values. *//**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */function hashGet(e){var t=this.__data__;if(nativeCreate){var n=t[e];return n==='__lodash_hash_undefined__'?void 0:n}return hasOwnProperty$5.call(t,e)?t[e]:void 0}/** Used for built-in method references. *//**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */function hashHas(e){var t=this.__data__;return nativeCreate?t[e]!==void 0:hasOwnProperty$6.call(t,e)}/** Used to stand-in for `undefined` hash values. *//**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */function hashSet(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=nativeCreate&&void 0===t?'__lodash_hash_undefined__':t,this}/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */function Hash(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var s=e[t];this.set(s[0],s[1])}}// Add methods to `Hash`.
/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map$1||ListCache),string:new Hash}}/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */function isKeyable(e){var t=typeof e;return'string'==t||'number'==t||'symbol'==t||'boolean'==t?'__proto__'!==e:null===e}/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */function getMapData(e,t){var n=e.__data__;return isKeyable(t)?n['string'==typeof t?'string':'hash']:n.map}/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */function mapCacheDelete(e){var t=getMapData(this,e)['delete'](e);return this.size-=t?1:0,t}/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */function mapCacheGet(e){return getMapData(this,e).get(e)}/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */function mapCacheHas(e){return getMapData(this,e).has(e)}/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */function mapCacheSet(e,t){var n=getMapData(this,e),s=n.size;return n.set(e,t),this.size+=n.size==s?0:1,this}/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */function MapCache(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var s=e[t];this.set(s[0],s[1])}}// Add methods to `MapCache`.
/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */function stackSet(e,t){var n=this.__data__;if(n instanceof ListCache){var s=n.__data__;if(!Map$1||199>s.length)return s.push([e,t]),this.size=++n.size,this;n=this.__data__=new MapCache(s)}return n.set(e,t),this.size=n.size,this}/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */function Stack(e){var t=this.__data__=new ListCache(e);this.size=t.size}// Add methods to `Stack`.
/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */function setCacheAdd(e){return this.__data__.set(e,'__lodash_hash_undefined__'),this}/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */function setCacheHas(e){return this.__data__.has(e)}/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */function SetCache(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new MapCache;++t<n;)this.add(e[t])}// Add methods to `SetCache`.
/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */function arraySome(e,t){for(var n=-1,s=null==e?0:e.length;++n<s;)if(t(e[n],n,e))return!0;return!1}/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */function cacheHas(e,t){return e.has(t)}/** Used to compose bitmasks for value comparisons. *//**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */function equalArrays(e,t,n,s,i,o){var r=1&n,l=e.length,d=t.length;if(l!=d&&!(r&&d>l))return!1;// Assume cyclic values are equal.
var u=o.get(e);if(u&&o.get(t))return u==t;var c=-1,p=!0,m=2&n?new SetCache:void 0;// Ignore non-index properties.
for(o.set(e,t),o.set(t,e);++c<l;){var g=e[c],h=t[c];if(s)var f=r?s(h,g,c,t,e,o):s(g,h,c,e,t,o);if(void 0!==f){if(f)continue;p=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(m){if(!arraySome(t,function(e,t){if(!cacheHas(m,t)&&(g===e||i(g,e,n,s,o)))return m.push(t)})){p=!1;break}}else if(!(g===h||i(g,h,n,s,o))){p=!1;break}}return o['delete'](e),o['delete'](t),p}/** Built-in value references. *//**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */function mapToArray(e){var t=-1,n=Array(e.size);return e.forEach(function(e,s){n[++t]=[s,e]}),n}/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */function setToArray(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}/** Used to compose bitmasks for value comparisons. *//**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */function equalByTag(e,t,n,s,i,o,r){switch(n){case'[object DataView]':if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case'[object ArrayBuffer]':return!!(e.byteLength==t.byteLength&&o(new Uint8Array(e),new Uint8Array(t)));case'[object Boolean]':case'[object Date]':case'[object Number]':// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+e,+t);case'[object Error]':return e.name==t.name&&e.message==t.message;case'[object RegExp]':case'[object String]':// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+'';case'[object Map]':var l=mapToArray;case'[object Set]':var d=1&s;if(l||(l=setToArray),e.size!=t.size&&!d)return!1;// Assume cyclic values are equal.
var u=r.get(e);if(u)return u==t;s|=2,r.set(e,t);var c=equalArrays(l(e),l(t),s,i,o,r);return r['delete'](e),c;case'[object Symbol]':if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t);}return!1}/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */function arrayPush(e,t){for(var n=-1,s=t.length,i=e.length;++n<s;)e[i+n]=t[n];return e}/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */function baseGetAllKeys(e,t,n){var s=t(e);return isArray(e)?s:arrayPush(s,n(e))}/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */function arrayFilter(e,t){for(var n=-1,s=null==e?0:e.length,i=0,o=[];++n<s;){var r=e[n];t(r,n,e)&&(o[i++]=r)}return o}/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */function stubArray(){return[]}/** Used for built-in method references. *//**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols)}/** Used to compose bitmasks for value comparisons. *//**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */function equalObjects(e,t,n,s,i,o){var r=1&n,l=getAllKeys(e),d=l.length,u=getAllKeys(t),c=u.length;if(d!=c&&!r)return!1;for(var p=d,m;p--;)if(m=l[p],r?!(m in t):!hasOwnProperty$7.call(t,m))return!1;// Assume cyclic values are equal.
var g=o.get(e);if(g&&o.get(t))return g==t;var h=!0;o.set(e,t),o.set(t,e);for(var f=r;++p<d;){m=l[p];var y=e[m],v=t[m];if(s)var b=r?s(v,y,m,t,e,o):s(y,v,m,e,t,o);// Recursively compare objects (susceptible to call stack limits).
if(void 0===b?!(y===v||i(y,v,n,s,o)):!b){h=!1;break}f||(f='constructor'==m)}if(h&&!f){var _=e.constructor,S=t.constructor;// Non `Object` object instances with different constructors are not equal.
_!=S&&'constructor'in e&&'constructor'in t&&!('function'==typeof _&&_ instanceof _&&'function'==typeof S&&S instanceof S)&&(h=!1)}return o['delete'](e),o['delete'](t),h}/* Built-in method references that are verified to be native. *//**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */function baseIsEqualDeep(e,t,n,s,i,o){var r=isArray(e),l=isArray(t),d=r?'[object Array]':getTag$1(e),u=l?'[object Array]':getTag$1(t);d='[object Arguments]'==d?'[object Object]':d,u='[object Arguments]'==u?'[object Object]':u;var c='[object Object]'==d,p='[object Object]'==u,m=d==u;if(m&&isBuffer(e)){if(!isBuffer(t))return!1;r=!0,c=!1}if(m&&!c)return o||(o=new Stack),r||isTypedArray(e)?equalArrays(e,t,n,s,i,o):equalByTag(e,t,d,n,s,i,o);if(!(1&n)){var g=c&&hasOwnProperty$8.call(e,'__wrapped__'),h=p&&hasOwnProperty$8.call(t,'__wrapped__');if(g||h){var f=g?e.value():e,y=h?t.value():t;return o||(o=new Stack),i(f,y,n,s,o)}}return!!m&&(o||(o=new Stack),equalObjects(e,t,n,s,i,o))}/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */function baseIsEqual(e,t,n,s,i){return!(e!==t)||(null!=e&&null!=t&&(isObjectLike(e)||isObjectLike(t))?baseIsEqualDeep(e,t,n,s,baseIsEqual,i):e!==e&&t!==t)}/** Used to compose bitmasks for value comparisons. *//**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */function baseIsMatch(e,t,n,s){var i=n.length,o=i,r=!s;if(null==e)return!o;for(e=Object(e);i--;){var l=n[i];if(r&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){l=n[i];var d=l[0],u=e[d],c=l[1];if(!(r&&l[2])){var p=new Stack;if(s)var m=s(u,c,d,e,t,p);if(void 0===m?!baseIsEqual(c,u,3,s,p):!m)return!1}else if(void 0===u&&!(d in e))return!1}return!0}/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */function isStrictComparable(e){return e===e&&!isObject(e)}/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */function getMatchData(e){for(var t=keys(e),n=t.length;n--;){var s=t[n],i=e[s];t[n]=[s,i,isStrictComparable(i)]}return t}/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */function matchesStrictComparable(e,t){return function(n){return null!=n&&n[e]===t&&(t!==void 0||e in Object(n))}}/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */function baseMatches(e){var t=getMatchData(e);return 1==t.length&&t[0][2]?matchesStrictComparable(t[0][0],t[0][1]):function(n){return n===e||baseIsMatch(n,e,t)}}/** `Object#toString` result references. *//**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */function isSymbol(e){return'symbol'==typeof e||isObjectLike(e)&&baseGetTag(e)=='[object Symbol]'}/** Used to match property names within property paths. *//**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */function isKey(e,t){if(isArray(e))return!1;var n=typeof e;return!!('number'==n||'symbol'==n||'boolean'==n||null==e||isSymbol(e))||reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t)}/** Error message constants. *//**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */function memoize(e,t){if('function'!=typeof e||null!=t&&'function'!=typeof t)throw new TypeError('Expected a function');var n=function(){var s=arguments,i=t?t.apply(this,s):s[0],o=n.cache;if(o.has(i))return o.get(i);var r=e.apply(this,s);return n.cache=o.set(i,r)||o,r};return n.cache=new(memoize.Cache||MapCache),n}// Expose `MapCache`.
/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */function memoizeCapped(e){var t=memoize(e,function(e){return 500===n.size&&n.clear(),e}),n=t.cache;return t}/** Used to match property names within property paths. *//**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */function arrayMap(e,t){for(var n=-1,s=null==e?0:e.length,i=Array(s);++n<s;)i[n]=t(e[n],n,e);return i}/** Used as references for various `Number` constants. *//**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */function baseToString(e){// Exit early for strings to avoid a performance hit in some environments.
if('string'==typeof e)return e;if(isArray(e))// Recursively convert values (susceptible to call stack limits).
return arrayMap(e,baseToString)+'';if(isSymbol(e))return symbolToString?symbolToString.call(e):'';var t=e+'';return'0'==t&&1/e==-INFINITY?'-0':t}/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */function toString(e){return null==e?'':baseToString(e)}/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */function castPath(e,t){return isArray(e)?e:isKey(e,t)?[e]:stringToPath(toString(e))}/** Used as references for various `Number` constants. *//**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */function toKey(e){if('string'==typeof e||isSymbol(e))return e;var t=e+'';return'0'==t&&1/e==-INFINITY$1?'-0':t}/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */function baseGet(e,t){t=castPath(t,e);for(var n=0,s=t.length;null!=e&&n<s;)e=e[toKey(t[n++])];return n&&n==s?e:void 0}/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */function get$1(e,t,n){var s=null==e?void 0:baseGet(e,t);return s===void 0?n:s}/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */function baseHasIn(e,t){return null!=e&&t in Object(e)}/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */function hasPath(e,t,n){t=castPath(t,e);for(var s=-1,i=t.length,o=!1,r;++s<i&&(r=toKey(t[s]),!!(o=null!=e&&n(e,r)));)e=e[r];return o||++s!=i?o:(i=null==e?0:e.length,!!i&&isLength(i)&&isIndex(r,i)&&(isArray(e)||isArguments(e)))}/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */function hasIn(e,t){return null!=e&&hasPath(e,t,baseHasIn)}/** Used to compose bitmasks for value comparisons. *//**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */function baseMatchesProperty(e,t){return isKey(e)&&isStrictComparable(t)?matchesStrictComparable(toKey(e),t):function(n){var s=get$1(n,e);return s===void 0&&s===t?hasIn(n,e):baseIsEqual(t,s,3)}}/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */function identity(e){return e}/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */function baseProperty(e){return function(t){return null==t?void 0:t[e]}}/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */function basePropertyDeep(e){return function(t){return baseGet(t,e)}}/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */function property(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e)}/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */function baseIteratee(e){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
return'function'==typeof e?e:null==e?identity:'object'==typeof e?isArray(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}/**
	 * Creates a function like `_.groupBy`.
	 *
	 * @private
	 * @param {Function} setter The function to set accumulator values.
	 * @param {Function} [initializer] The accumulator object initializer.
	 * @returns {Function} Returns the new aggregator function.
	 */function createAggregator(e,t){return function(n,s){var i=isArray(n)?arrayAggregator:baseAggregator,o=t?t():{};return i(n,e,baseIteratee(s,2),o)}}/** Used for built-in method references. *//**
	 * The base implementation of `_.filter` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */function baseFilter(e,t){var n=[];return baseEach(e,function(e,s,i){t(e,s,i)&&n.push(e)}),n}/**
	 * Iterates over elements of `collection`, returning an array of all elements
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * **Note:** Unlike `_.remove`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 * @see _.reject
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * _.filter(users, function(o) { return !o.active; });
	 * // => objects for ['fred']
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.filter(users, { 'age': 36, 'active': true });
	 * // => objects for ['barney']
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.filter(users, ['active', false]);
	 * // => objects for ['fred']
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.filter(users, 'active');
	 * // => objects for ['barney']
	 */function filter(e,t){var n=isArray(e)?arrayFilter:baseFilter;return n(e,baseIteratee(t,3))}/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */function arrayEach(e,t){for(var n=-1,s=null==e?0:e.length;++n<s&&!(!1===t(e[n],n,e)););return e}/** Used for built-in method references. *//**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */function assignValue(e,t,n){var s=e[t];hasOwnProperty$a.call(e,t)&&eq(s,n)&&(n!==void 0||t in e)||baseAssignValue(e,t,n)}/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */function copyObject(e,t,n,s){var i=!n;n||(n={});for(var o=-1,r=t.length;++o<r;){var l=t[o],d=s?s(n[l],e[l],l,n,e):void 0;d===void 0&&(d=e[l]),i?baseAssignValue(n,l,d):assignValue(n,l,d)}return n}/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */function baseAssign(e,t){return e&&copyObject(t,keys(t),e)}/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */function nativeKeysIn(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}/** Used for built-in method references. *//**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var t=isPrototype(e),n=[];for(var s in e)('constructor'!=s||!t&&hasOwnProperty$b.call(e,s))&&n.push(s);return n}/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */function keysIn$1(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */function baseAssignIn(e,t){return e&&copyObject(t,keysIn$1(t),e)}/** Detect free variable `exports`. *//**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */function cloneBuffer(e,t){if(t)return e.slice();var n=e.length,s=allocUnsafe?allocUnsafe(n):new e.constructor(n);return e.copy(s),s}/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */function copyArray(e,t){var n=-1,s=e.length;for(t||(t=Array(s));++n<s;)t[n]=e[n];return t}/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */function copySymbols(e,t){return copyObject(e,getSymbols(e),t)}/** Built-in value references. *//**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */function copySymbolsIn(e,t){return copyObject(e,getSymbolsIn(e),t)}/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */function getAllKeysIn(e){return baseGetAllKeys(e,keysIn$1,getSymbolsIn)}/** Used for built-in method references. *//**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */function initCloneArray(e){var t=e.length,n=new e.constructor(t);// Add properties assigned by `RegExp#exec`.
return t&&'string'==typeof e[0]&&hasOwnProperty$c.call(e,'index')&&(n.index=e.index,n.input=e.input),n}/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */function cloneArrayBuffer(e){var t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */function cloneDataView(e,t){var n=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}/** Used to match `RegExp` flags from their coerced string values. *//**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */function cloneRegExp(e){var t=new e.constructor(e.source,reFlags.exec(e));return t.lastIndex=e.lastIndex,t}/** Used to convert symbols to primitives and strings. *//**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */function cloneSymbol(e){return symbolValueOf$1?Object(symbolValueOf$1.call(e)):{}}/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */function cloneTypedArray(e,t){var n=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}/** `Object#toString` result references. *//**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */function initCloneByTag(e,t,n){var s=e.constructor;return'[object ArrayBuffer]'===t?cloneArrayBuffer(e):'[object Boolean]'===t||'[object Date]'===t?new s(+e):'[object DataView]'===t?cloneDataView(e,n):'[object Float32Array]'===t||'[object Float64Array]'===t||'[object Int8Array]'===t||'[object Int16Array]'===t||'[object Int32Array]'===t||'[object Uint8Array]'===t||'[object Uint8ClampedArray]'===t||'[object Uint16Array]'===t||'[object Uint32Array]'===t?cloneTypedArray(e,n):'[object Map]'===t?new s:'[object Number]'===t||'[object String]'===t?new s(e):'[object RegExp]'===t?cloneRegExp(e):'[object Set]'===t?new s:'[object Symbol]'===t?cloneSymbol(e):void 0}/** Built-in value references. *//**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */function initCloneObject(e){return'function'!=typeof e.constructor||isPrototype(e)?{}:baseCreate(getPrototype(e))}/** `Object#toString` result references. *//**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */function baseIsMap(e){return isObjectLike(e)&&getTag$1(e)=='[object Map]'}/* Node.js helper references. *//**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */function baseIsSet(e){return isObjectLike(e)&&getTag$1(e)=='[object Set]'}/* Node.js helper references. *//**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */function baseClone(e,t,n,s,i,o){var r=1&t,l=2&t,d;if(n&&(d=i?n(e,s,i,o):n(e)),void 0!==d)return d;if(!isObject(e))return e;var u=isArray(e);if(!u){var c=getTag$1(e),p='[object Function]'==c||'[object GeneratorFunction]'==c;if(isBuffer(e))return cloneBuffer(e,r);if('[object Object]'!=c&&'[object Arguments]'!=c&&(!p||i)){if(!cloneableTags[c])return i?e:{};d=initCloneByTag(e,c,r)}else if(d=l||p?{}:initCloneObject(e),!r)return l?copySymbolsIn(e,baseAssignIn(d,e)):copySymbols(e,baseAssign(d,e))}else if(d=initCloneArray(e),!r)return copyArray(e,d);// Check for circular references and return its corresponding clone.
o||(o=new Stack);var m=o.get(e);if(m)return m;o.set(e,d),isSet(e)?e.forEach(function(s){d.add(baseClone(s,t,n,s,e,o))}):isMap(e)&&e.forEach(function(s,i){d.set(i,baseClone(s,t,n,i,e,o))});var g=4&t?l?getAllKeysIn:getAllKeys:l?keysIn:keys,h=u?void 0:g(e);return arrayEach(h||e,function(s,i){h&&(i=s,s=e[i]),assignValue(d,i,baseClone(s,t,n,i,e,o))}),d}/** Used to compose bitmasks for cloning. *//**
	 * Creates a function that performs a partial deep comparison between a given
	 * object and `source`, returning `true` if the given object has equivalent
	 * property values, else `false`.
	 *
	 * **Note:** The created function is equivalent to `_.isMatch` with `source`
	 * partially applied.
	 *
	 * Partial comparisons will match empty array and empty object `source`
	 * values against any array or object value, respectively. See `_.isEqual`
	 * for a list of supported value comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Util
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': 1, 'b': 2, 'c': 3 },
	 *   { 'a': 4, 'b': 5, 'c': 6 }
	 * ];
	 *
	 * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	 * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	 */function matches(e){return baseMatches(baseClone(e,1))}// Subset of Lodash. We want to be careful about the size of SuperSuit
// #-----------------------------# //
// #---- Helper (ssArrayHlp) ----# //
/*@ngInject*/function ssArrayHlp(){/**
	  * @param {Array|Object} collection The collection to iterate over.
	  * @returns {Object} Returns the deduplicated array.
	  *//**
	  * same as ssArrayHlp.where, but it returns the first matching object
	  *
	  * @param {object[]} arrayOfObj - the array that you want to search for similar objects
	  * @param {object} keyValuesItMustHave - the attributes and values of this object will be used to filter objects out of the arrayOfObj
	  * @returns {object} - the first object from arrayOfObj that contain the key/value pairs from keyValuesItMustHave
	  */return{where:/**
	  * filters an array of objects to a subset that matches the parameters
	  * and values defined in the keyValuesItMustHave object
	  *
	  * @param {object[]} arrayOfObj - the array that you want to search for similar objects
	  * @param {object} keyValuesItMustHave - the attributes and values of this object will be used to filter objects out of the arrayOfObj
	  * @returns {object[]} - the objects from arrayOfObj that contain the key/value pairs from keyValuesItMustHave
	  */function(e,t){// Sends the callback of the object filter to the matches
// Note: matches is the curried/partially-applied version of lodash's isMatch
return _.filter(e,_.matches(t))},findWhere:function(e,t){return e.find(_.matches(t))},sortByObjectKey:function(e,t){var n=!!(2<arguments.length&&arguments[2]!==void 0)&&arguments[2],s=n?-1:1;return e.sort(function(e,n){var i=e[t],o=n[t];return i<o?-1*s:i>o?1*s:0})},unique:function(e){return e.filter(function(e,t,n){return n.indexOf(e)===t})}/**
	  *
	  * @param {Array|Object} collection The collection to iterate over.
	  * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	  * @returns {Object} Returns the composed aggregate object.
	  */,groupBy:function(e,t){// delegate to lodash groupBy
// https://lodash.com/docs/#groupBy
return _.groupBy(e,t)}}}// #-- END Helper (ssArrayHlp) --# //
// #-----------------------------# //
// #-------------------------------------# //
// #---- Helper (ssCommonControlHlp) ----# //
/*@ngInject*/function ssCommonControlHlp(e){return{// label weight value checks
labelWeight:function(t,n){var s=['light','heavy'];return'string'!=typeof t&&(t=''),t=t.toLowerCase(),t.length&&!s.includes(t)&&(e.error('please use a supported value ('+s.join(', ')+') for "label-weight" attribute on label "'+n+'"'),t=''),t}}}// #-- END Helper (ssCommonControlHlp) --# //
// #-------------------------------------# //
// #-----------------------------# //
// #---- Helper (ssConfigurationHlp) ----# //
/**
	 * *******************************************************************************************
	 * Frontline Central - You can't inject dep-sets into an Angular SVC. SO it must be promoted
	 * *******************************************************************************************
	 * Configuration Helper is the the single place to manage configurations for FC lists
	 *  and other items.	We have places all over the site where we have one off limits.
	 * 	Let's	just put them all here.  Maybe someday we'll have a configuration mSvc!
	 *//*@ngInject*/function ssConfigurationHlp(e){var t={locations:999999,departments:999999,jobTypes:999999,statusReasons:500,employmentGroups:500,positions:500,permissions:50,// MAX IS 50 for permissions PLAT-4804
permissionGroups:999999,recentlySent:50,standardDataPage:50};return{/**
	   * Returns the configured max limit for the requested list name or the max if none is provided.
	   * @param {string} name the name of the limit to get or <none> to get the "max"
	   */getLimit:function(n){var s=99999999;return t.hasOwnProperty(n)?s=t[n]:e.warn('Returned default limit since no limit found for: ',n),s}}}// #-- END Helper (ssConfigurationHlp) --# //
// #-----------------------------# //
/*@ngInject*/function ssDashboardColorsHlp(e){function t(){// Return a copy to prevent modification post function call
return e.deepCopy($$arrayOfColorOptions,!0)}function n(){var e=[];return t().forEach(function(t,n){var s={};Object.keys(t).forEach(function(e){var i='fl-stripe-pattern-'+n+'-'+e;s[e]={id:i,path:{d:'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',stroke:t[e],strokeWidth:4},url:'url('+window.location.href+'#'+i+')'}}),e.push(s)}),e}/**
	 * Returns array of objects with ids and paths (for highchartconfig.defs.patterns)
	 **//**
	  * Return an array that looks similar to getOptions, but instead of colors hexidecimals, the lightnesses map to urls of ids
	  */var s=n();return{getOptions:t,getPatternedOptions:function(){var e=[];return s.forEach(function(t){var n={};lightnessTypes.forEach(function(e){n[e]='url('+window.location.href+'#'+t[e].id+')'}),e.push(n)}),e},getAllPatternDefs:function(){var e=[];return s.forEach(function(t){lightnessTypes.forEach(function(n){e.push({id:t[n].id,path:t[n].path})})}),e},createLookupObject:n,lightnessTypes:lightnessTypes}}// #-- END Helper (ssDashboardColorsHlp) --# //
// #---------------------------------------# //
// #----------------------------# //
// #---- Helper (ssDateHlp) ----# //
/*@ngInject*/function ssDateHlp(e){function t(t,n){return 2>=_Mathabs(e(t).diff(n,'years'))}var n=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,s=e('9999-12-31T23:59:59Z'),i=e('0001-01-01T00:00:00Z');return{// demo function, please remove
isDifferent:function(t,n){return t=e(t),n=e(n),0===t.diff(n)},isForeverFuture:function(e){// are we within 2 year of forever future date
return t(e,s)},isForeverPast:function(e){// are we within 2 year of forever past date
return t(e,i)},foreverFuture:function(){return'9999-12-31T23:59:59Z'},foreverPast:function(){return'0001-01-01T00:00:00Z'},isDate:function(e){return!!(e instanceof Date)||!!('string'==typeof e&&n.test(e))},foreverFutureString:'9999-12-31T23:59:59Z',foreverPastString:'0001-01-01T00:00:00Z'}}// #-- END Helper (ssDateHlp) --# //
// #----------------------------# //
// #-------------------------------------# //
// #---- Helper (ssEffectiveDateHlp) ----# //
/*@ngInject*/function ssEffectiveDateHlp(e,t,n,s){function i(){var e=window.sessionStorage.getItem('disable-json-api-pre-save');// Short-circuit if not set
return null!=e&&(!(!0!==e&&'true'!==e)||!1!==e&&'false'!==e&&(s.warn('Whatever you tried to set disable-json-api-pre-save to was not a boolean. It was: '+e),!1));// Deal with real values now
}function o(o){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1;if(t++,null==e)// then there is nothing to correct the $save functions on, so just return it as is (i.e. pass-through)
return e;if(Array.isArray(e))e.forEach(function(e){r(e,t)});else if('object'===('undefined'==typeof e?'undefined':_typeof(e))&&null!=e){var n=e.$save;null!=n&&l(e),Object.keys(e).forEach(function(n){'object'===_typeof(e[n])&&r(e[n],t)})}}function l(i){var o=i.$save;i.$save=function(){function r(e){function t(e){// UTC does not observe DST, so we have to convert to a timezone that actually observes Daylight savings time first
return e.tz('America/New_York').isDST()}var n=e.startMoment,s=e.endMoment,i=86399999;return i=t(n)===t(s)?86399999:t(n)&&!t(s)?3599999:82799999,i}function l(e,t){// Try and get them whatever their names might be
//		Note: I could use Object.keys() however some of these objects are huge, and the following is Big-O(1) from within the loop
for(var n=0,s;n<t.length;n++)if(s=t[n],null!=e[s])return e[s]}function d(n,s){var i=l(n,p),o=l(n,m);if(null!=i&&null!=o)// Since we can't validate this object (due to it not being a ranged object), we will consider it valid and move on
{// Do the real validation
// Is it a valid time?
var d=e.utc(i);if(!d.isValid())return s+'\'s start date was not a valid time';var u=e.utc(o);if(!u.isValid())return s+'\'s end date was not a valid time';if(u.isBefore(d))return s+'\'s end date must be after it\'s start date';// Is the remainder exactly the length of a day?
if(!t.isForeverPast(d)&&!t.isForeverFuture(u)){if('00:00'!==d.format('mm:ss'))return s+'\'s start date is not on an hour mark, which means that it is not the start of a day for any timeZone. Please use the dateByOrg helper to prevent bad data from getting to the server.';if('59:59'!==u.format('mm:ss'))return s+'\'s end date is not 59 min and 59 seconds, which means that it is not the end of a day for any timeZone. Please use the dateByOrg helper to prevent bad data from getting to the server.';var c=u.diff(d,'ms');return c%86400000===r({startMoment:d,endMoment:u})?void 0:'The range of this effective item (named: '+s+') is not day-bound. You are likely forgetting to use endOf(\'day\') or to use the dateByOrg helper'}// Because we can't do a valid duration check since foreverFuture doesn't end on a relative day boundary
// Because we can't do a valid duration check since foreverPast doesn't end on a relative day boundary
}}function u(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:-1;n++;var s=[];// console.info('About to validate ' + objectsName + ' at levelsOfRecursionSoFar: ' + levelsOfRecursionSoFar);
// this is neither an object or an array, so there is no way to validate its effectivity
// Get rid of the empty string cases since those are the success cases
return Array.isArray(e)?e.forEach(function(e,i){s=s.concat(u(e,t+'['+i+']',n))}):'object'===('undefined'==typeof e?'undefined':_typeof(e))&&null!=e&&(s.push(d(e,t)),Object.keys(e).forEach(function(t){'$permitted'!==t&&(s=s.concat(u(e[t],t,n)))})),s.filter(function(e){return!!e})}var c=this,p=['_from','_startDateUtc','_startDate'],m=['_to','_endDateUtc','_endDate'],g=u(c,'(the base object with the $save on it)');0<g.length&&(n.warn(g[0]),s.error(g.join('\nNEXT ERROR: ')));// Call the save no matter what since we can't impede a developer's ability to make progress on any unrelated PRs.
for(var h=arguments.length,f=Array(h),y=0;y<h;y++)f[y]=arguments[y];return o.call.apply(o,[i].concat(f))}}var d=/.*frontlineeducation.com.*/;return window&&window.location&&d.test(window.location.href)||i()?o:(r(o),o)}return{convertToValidatingSave:function(e){if('function'!=typeof e)throw new TypeError('convertToValidatingSave requires jsonApiEndpointFunction to be a function');return function(){return e.apply(void 0,arguments).then(function(e){return o(e)})}}}}// #-- END Helper (ssEffectiveDateHlp) --# //
// #-------------------------------------# //
// #----------------------------# //
// #---- Helper (ssElemHlp) ----# //
/*@ngInject*/function ssElemHlp(e,t){function n(e,t){var s=t.parent();return!!s.length&&'BODY'!==s[0].tagName&&(!(s[0]!==e[0])||n(e,s))}return{getStyles:function(e){// unwrap an angular element
var t=null==e.scope?e:e[0];return window.getComputedStyle(t,null)},getBackgroundColor:function(e){// unwrap an angular element
var t=null==e.scope?e:e[0],n=/^.*?\(\d{1,3}, ?\d{1,3}, ?\d{1,3}, ?0\)$/,s=/^transparent$/i,i=window.getComputedStyle(t).getPropertyValue('background-color');return n.test(i)||s.test(i)?this.getBackgroundColor(t.parentNode):i},removeAttr:function(t,n,s){'string'==typeof s&&(s=[s]);var i=!0,o=!1,r=void 0;try{for(var l=s[Symbol.iterator](),d;!(i=(d=l.next()).done);i=!0){var u=d.value,c=e.toCamelCase(u),p=e.toDashCase(u);delete n[c],delete n.$attr[c],t.removeAttr(p)}}catch(e){o=!0,r=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw r}}},isOutOfViewport:function(e){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},s=e[0].getBoundingClientRect(),i=Object.assign({right:0,bottom:0},n);return{right:15+s.right+i.right>=t.innerWidth,bottom:15+s.bottom+i.bottom>=t.innerHeight}},isMyChild:n}}// #-- END Helper (ssElemHlp) --# //
// #----------------------------# //
// #--------------------------------# //
// #---- Helper (ssEmployeeHlp) ----# //
//
/*@ngInject*/function ssEmployeeHlp(e){return{getCredentials:function(t){return e.getCredentials({flId:t,include:'endorsements'})},getEmployee:function(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return e.get({id:t,asOfUtc:n,include:null==s?'addresses,assignments,positions,paySchedules,jobTypes':s,modelStateUtc:i})}}}// #-- END Helper (ssEmployeeHlp) --# //
// #--------------------------------# //
/**
	 * A helper to parse a file and return an extension or a name.
	 */function ssFilenameHlp(){return _hlp}// Keep filenameHlp for backward compatibility but adding ssFilenameHlp to follow 'ss' prefix convention
// #------------------------------------# //
// #---- Helper (ssFluidImportsHlp) ----# //
/*@ngInject*/function ssFluidImportsHlp(e,t,n){function s(t,s,i){var o=n.toCamelCase,r=n.toDashCase,l=function(e){return'tmpl'+e[0].toUpperCase()+e.slice(1)},d=function(e){return /^on[A-Z]/.test(o(e))},u=new i({target:e.document.createElement('span')}).$$.props,c=u.reduce(function(e,t){return e[t]='<',e[l(t)]='@',e},{}),p=function(e){return u.reduce(function(t,n){var s=void 0===e[n]// check if normal prop exists
?// prefer normal prop if available
e[l(n)]:e[n]// fallback to tmplVariation
;// only use value if there is one
return void 0!==s&&(t[n]=s),t},{})};// init an blank component to inspect its props
// user prop list to generate ng component bindings
t.component(o(s),{bindings:c,template:'',controller:['$scope','$element','$attrs',function(e,t,n){var s=t[0],o=p(this),l=new i({target:s,props:o}),u=function(s,i){return function(o){s.call(e,function(){return e.$parent.$eval(n[i],{$event:o})}),['onFocus','onBlur'].includes(i)||e.$emit('ss-validate-field-event',t,'update')}};// listen for blur and focus events for ss-validate hooks
l.$on('blur',function(){return e.$emit('ss-validate-field-event',t,'blur')}),l.$on('focus',function(){return e.$emit('ss-validate-field-event',t,'focus')}),Object.keys(n).filter(d).forEach(function(t){l.$on(r(t.slice(2)),u(e.$applyAsync,t))}),this.$onChanges=function(e){var t=Object.keys(e).filter(function(t){return!e[t].isFirstChange()}).reduce(function(t,n){return t[n]=e[n].currentValue,t},{});l.$set(p(t))},this.$onDestroy=function(){return l.$destroy()}}]})}return{hookupFluidComponents:function(e,n){Object.entries(n).forEach(function(n){var i=slicedToArray(n,2),o=i[0],r=i[1];switch(r.type){case'svelte3':s(e,o,r.constructor);break;default:t.error('Unknown Fluid Import Type: "'+r.type+'"');}})}}}// #-- END Helper (ssFluidImportsHlp) --# //
// #------------------------------------# //
// #-------------------------------# //
// #---- Helper (ssJsonApiHlp) ----# //
/*@ngInject*/function ssJsonApiHlp(){return{/**
	   * Will take defaults and layer defaults on top if the keys in defaults are not present or null
	   * in the source object. Will also call $$resetChangesDetected to set the source object's state
	   * so isDirty will pick up changes starting after this method is run.
	   *
	   * @param {Object} obj Object you want to layer defaults onto
	   * @param {Object} defaults Object of default values to layer onto the obj
	   */setFieldDefaultValues:function(e,t){var n=angular.copy(t);Object.keys(n).forEach(function(t){(null===e[t]||e[t]===void 0)&&(e[t]=n[t])}),e.$$resetChangesDetected&&e.$$resetChangesDetected()}}}// #-- END Helper (ssJsonApiHlp) --# //
// #-------------------------------# //
/*@ngInject*/function ssMaskHlp(){// External service API
return{getMaskedValue:function(e,t){return null==masks[e]?t:masks[e].svc.getViewValue(t).withDivisors()},getOptions:function(e){return null==masks[e]?null:masks[e].options}}}// #-- END Helper (ssMaskHlp) --# //
// #----------------------------# //
/*@ngInject*/function maskDataHookup(e){/**
	  * Register a new mask
	  *
	  * All boolean values are passed in as strings
	  * @param {*} options
	  * @param {string} options.mask -
	  * @param {number} options.repeat - repeat mask expression n times
	  * @param {string} options.clean - clean model value - without divisors 'true' or 'false'
	  * @param {string} options.limit - limit length based on mask length
	  * @param {string} options.restrict - how to act with a wrong value
	  * @param {string} options.validate - set validity mask
	  * @param {*} options.model - default model value
	  * @param {*} options.value - default input value
	  */function t(t,n){var s=e.create();return s.generateRegex(n).then(function(){masks[t]={svc:s,options:n}})}t('phone',{mask:'(999) 999-9999',clean:'true',restrict:'reject'}),t('ssn',{mask:'999-99-9999',clean:'true',restrict:'reject'})}// #----------------------------# //
// #---- Helper (ssMathHlp) ----# //
/*@ngInject*/function ssMathHlp(){function e(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];if(!isArrayOfNumbers(e))throw new TypeError('ssMathHlp.sum expected an array of numbers');return e.reduce(function(e,t){return e+t})}return{average:function(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];if(!isArrayOfNumbers(t))throw new TypeError('ssMathHlp.average expected an array of numbers');return e(t)/t.length},sum:e}}function isArrayOfNumbers(e){return Array.isArray(e)&&e.every(Number.isFinite)}// #-- END Helper (ssMathHlp) --# //
// #----------------------------# //
// #-----------------------------------# //
// #---- Helper (ssMutatorDataHlp) ----# //
/*@ngInject*/function ssMutatorDataHlp(e){return{formatPhone:function(e){var t=e.replace(/[^\d]/g,''),n,s,i;//clean it up.
return 11===t.length&&(t=t.slice(1)),10===t.length?(n=t.slice(0,3),s=t.slice(3,6),i=t.slice(6),n+'-'+s+'-'+i):t},getStatus:function(t){var n=new Date,s,o;if(o=null==t._statusId?e.byValue(0):e.byValue(t._statusId),s=o.toLowerCase(),t._statusHistory)for(var r=0;r<t._statusHistory.length;r++){var l=new Date(t._statusHistory[r]._from),d=t._statusHistory[r]._statusId;n<l&&'Inactive'===o&&d===e.active&&(o='Inactive until '+l.toLocaleDateString())}return{status:s,statusLabel:o}}}}// #-- END Helper (ssMutatorDataHlp) --# //
// #-----------------------------------# //
/*@ngInject*/function ssObjectHlp(){return{// extend an object with properties from another object only when they
// don't already exist on the target object
passiveExtend:function(e,t){return Object.keys(t).forEach(function(n){'undefined'==typeof e[n]&&(e[n]=t[n])}),e},// generic type helpers
isArray:isArray$1,isMutable:isMutable,isObject:isObject$1,// basic shallow copy
copy:copy,// copy all nested objects and arrays as well
deepCopy:deepCopy,// freeze a an object in place so it cannot be changed
// all references to this object will be frozen
deepFreeze:deepFreeze,// update values in target with corresponding values in source only if
// both objects have that same property
update:update,/**
	   * glean - Access nested paths in an object whos structure we are uncertain of.
	   * Unholy marriage of Facebook's existential function and lodash get()
	   * https://facebook.github.io/react-native/blog/2017/03/13/idx-the-existential-function.html
	   * https://lodash.com/docs#get
	   *
	   * @param  {Object} source            the source object we are operating on
	   * @param  {Function} accessor        attepts to access the property desired
	   * @param  {Any} defaultValue = null  value to return if the accessor throws
	   * @return {Any}
	   */glean:function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;try{var s=t(e);return'undefined'==typeof s?n:s}catch(e){return n}}}}function deepCopy(e){var t=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1],n=copy(e,t),s=Object.getOwnPropertyNames(n),i=!0,o=!1,r=void 0;// Retrieve the property names defined on src
try{for(var l=s[Symbol.iterator](),d;!(i=(d=l.next()).done);i=!0){var u=d.value,c=n[u];// Recurse copy of propVal if it is an Object or Array
isMutable(c)&&(n[u]=deepCopy(c,t))}}catch(e){o=!0,r=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw r}}return n}function copy(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],n=isArray$1(e)?[]:{};if(Object.assign(n,e),t)for(var s=Object.getOwnPropertyNames(n),o=s.length;o--;)s[o].startsWith('$')&&delete n[s[o]];return n}function deepFreeze(e){// Retrieve the property names defined on src
var t=Object.getOwnPropertyNames(e),n=!0,s=!1,i=void 0;// Freeze properties before freezing self
try{for(var o=t[Symbol.iterator](),r;!(n=(r=o.next()).done);n=!0){var l=r.value,d=e[l];// Freeze propVal if it is an object
isMutable(d)&&(e[l]=deepFreeze(d))}// Freeze self (no-op if already frozen)
}catch(e){s=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(s)throw i}}return Object.freeze(e)}function update(e,t){return Object.keys(e).forEach(function(n){return null==t[n]?void 0:isObject$1(t[n])&&isObject$1(e[n])?void update(e[n],t[n]):void(!isMutable(t[n])&&(e[n]=t[n]))}// Arrays are intentionally not handled here
// because we can't reliably merge 2 arrays together
),e}// #-- END Helper (ssObjectHlp) --# //
// #------------------------------# //
// #------------------------------------# //
// #---- Helper (ssOrganizationHlp) ----# //
/*@ngInject*/function ssOrganizationHlp(){return{/**
	   *
	   * @param {object} org - the organization object that comes back from ssOrganizationApi
	   * @param {object[]} org._applications - the array of applications that the org has access to
	   * @param {string} org._applications._applicationId - the name/acronym of a Frontline application
	   * @returns {*|boolean}
	      */hasCentral:function(e){if(!e)throw new Error('the hasCentral function requires org as a parameter');if(!e._applications||!Array.isArray(e._applications))throw new Error('you probably forgot to set \'applications\' as the include option for the organizationApi because the org you gave hasCentral() did not have an _applications array');return e._applications.some(function(e){return'string'==typeof e._applicationId?'ec'===e._applicationId.toLowerCase():void 0})}}}// #-- END Helper (ssOrganizationHlp) --# //
// #------------------------------------# //
// #------------------------------------# //
// #---- Helper (ssServiceLogicHlp) ----# //
/*@ngInject*/function ssServiceLogicHlp(e){return{// eslint-disable-line
productIdList:function(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return t.reduce(function(t,n){// take into account productId environment mapping
var s=e.productMap||{},i=n.toLowerCase();return t.push(n.toUpperCase()),null!=s[i]&&t.push(s[i].toUpperCase()),t},[])},productIdEnvMap:function(t){var n=e.productMap||{},s=t.toLowerCase();return(n[s]||t).toUpperCase()}}}// eslint-disable-line
// #-- END Helper (ssServiceLogicHlp) --# //
// #------------------------------------# //
function splitWords(e){return e.replace(/[\s_-]/g,'{!}').replace(/([A-Z]+)/g,'{!}$1').toLowerCase().split('{!}').filter(function(e){return!!e.length})}// #-- END Helper (ssStringHlp) --# //
// #------------------------------# //
function ssStringHlp(){return _hlp$1}/*@ngInject*/function ssToastHlp(e,t,n,s){/**
	  * Gets all of the errors from the response.
	  * Does not take into account delimited messages. for POST March
	  * @private
	  * @param {Object} error The response from the AJAX call
	  * @param {Object} error.data The data from the response
	  * @param {String} error.data.message Another place the server sends errors to ¯\_(ツ)_/¯
	  * @param {Object} error.data.errors The error from the server response
	  * @param {String} error.data.errors.Title The delimited string containing all of the error responses from the AJAX call
	  */function i(e){// what? no error object!? default!
// Yes, server errors are buried in this hierarchy then concatenated in the title
// default message if we were unable to parse
return null==e?[d.failureMessage]:null==e.data?[d.connectionFailed]:e.data.errors&&e.data.errors.Title?[e.data.errors.Title]:e.data.message?[e.data.message]:[d.failureMessage];// no data, no internet...
}/**
	  * Grabs errors/messages from the caller and parses them into a format tha can be used by the notifier.
	  * If nothing can be found, just return the default error messaging.
	  * @private
	  * @param messages The list of errors to process and toast
	  * @returns Array An array of errors to toast
	  */function o(e){//> log('Sorry, I can\'t find the messages you wanted me to display. Try string arrays! I like them. Here is what you sent: ', errors)
return'string'==typeof e?[e]:e instanceof Array?e:[d.failureMessage]}null==toastrInst&&(toastrInst=e);var r={error:{preventOpenDuplicates:!0,timeOut:15e3,extendedTimeout:1e4},success:{preventOpenDuplicates:!0,timeOut:1e4,extendedTimeout:1e4},warn:{preventOpenDuplicates:!0,timeOut:1e4,extendedTimeOut:1e4},info:{preventOpenDuplicates:!0,timeOut:3e3,extendedTimeOut:3e3},notification:{iconClass:'toast-notification',allowHtml:!0}},l={progressBar:!0,tapToDismiss:!0,closeButton:!0};Object.keys(r).forEach(function(e){return Object.assign(r[e],l)});var d={successTitle:'Success',successMessage:'Saved successfully!',failureTitle:'Failure',failureMessage:'Action failed',connectionFailed:'Could not contact service.',infoTitle:'Did you know?',warnTitle:'Warning'};// Set the global defaults for toasts.
return t.preventOpenDuplicates=!0,s.put('directives/toast/toast.html','<div class="{{toastClass}} {{toastType}}" ng-click="tapToast()" role="alert"><div ng-switch on="allowHtml"><div ng-switch-default ng-if="title" class="{{titleClass}}" aria-label="{{title}}">{{title}}</div><div ng-switch-default class="{{messageClass}}" aria-label="{{message}}">{{message}}</div><div ng-switch-when="true" ng-if="title" class="{{titleClass}}" ng-bind-html="title"></div><div ng-switch-when="true" class="{{messageClass}}" ng-bind-html="message"></div></div>'),s.put('directives/progressbar/progressbar.html','<div><progress-bar ng-if="progressBar"></progress-bar></div>'),{/**
	   * Specialized endpoint for toasting to AJAX errors (ssApi and ssJsonApi) since the repsonse object generally
	   * has as special format and hierarchy.
	   * @instance
	   *
	   * @param {(Array|String)} errors - The server response that contains messages about what happened.
	   * @param {String} [title=default failure title] - The title for the toast notification
	   */errorAjax:function(e,t){t=t||d.failureTitle,i(e).forEach(function(e){toastrInst.error(e,t,r.error)})},/**
	   * Show a toast message with the error formatting.
	   * @instance
	   * @param {(Array|String)} errors - An array of errors to display
	   * @param {String} [title=default failure title] - The title for the toast notification
	   */error:function(e,t){t=t||d.failureTitle,o(e).forEach(function(e){toastrInst.error(e,t,r.error)})},/**
	   * Show a toast message with the warn formatting.
	   * @instance
	   * @param {(Array|String)} errors - The errors that we are going to toast.
	   * @param {String} [title=default warn title] - The title for the toast notification
	   */warn:function(e,t){t=t||d.warnTitle,o(e).forEach(function(e){toastrInst.warning(e,t,r.warn)})},/**
	   * Show a toast message with the information formatting.
	   * @instance
	   * @param {(Array|String)} errors - An array of errors to display
	   * @param {String} [title] - The title for the toast notification
	   */info:function(e,t){o(e).forEach(function(e){toastrInst.info(e,t,r.info)})},/**
	   * Show an info toast message for the notifications center.
	   * @instance
	   * @param {(Array|String)} messages - An array of messages to display
	   * @param {String} [title] - The title for the toast notification
	   */notification:function(e,t){toastrInst.info(e,t,r.notification)},/**
	   * Show a toast message with the success formatting.
	   * @instance
	   * @param {(Array|String)} errors - An array of errors to display
	   * @param {String} [title=default success title] - The title for the toast notification
	   * @param {Boolean} persist Sets the toast to disappear or fade away
	   */success:function(e,t,n){t=t||d.successTitle,('undefined'==typeof e?'undefined':_typeof(e))===_typeof('')&&(e=[e]);var s=!0===n?{timeOut:0,extendedTimeOut:0}:{};s=Object.assign({},r.success,s),e.forEach(function(e){toastrInst.success(e,t,s)})},/**
	   * Clear any open toast notifications.
	   * @instance
	   */clear:function(){toastrInst.clear()}}}// #-- END Helper (ssToastHlp) --# //
// #-----------------------------# //
// #--------------------------------# //
// #---- Helper (ssUiModuleHlp) ----# //
/*@ngInject*/function ssUiModuleHlp(e){return{// eslint-disable-line
// demo function, please remove
getDetails:function(e,t){// default details to return if our lookup fails for any reason
var n={isValid:!1,isUniversal:!1,bootstrapName:null,productId:null};// no module is defined
if(null==e||null==t)return n;if(0===e.length)return n;// calculate universal module name (so we can get for it)
var s=e.split('-')[0],i=e.replace(s,'universal'),o=t[e],r=t[i],l=null!=r;// manifest entries for module and universal module varient
// check for exact match as well as universal module
return Object.assign(n,{bootstrapName:l?i:e,isValid:null!=o||null!=r,isUniversal:l,productId:s}),n},getCurrentModuleName:function(){var t=e.path().match(/^\/([\w-]*)/i);return 2===t.length?t[1]:''}}}// eslint-disable-line
// #-- END Helper (ssUiModuleHlp) --# //
// #--------------------------------# //
/*@ngInject*/function ssValidateHlp(e,t,n){return{// eslint-disable-line
resetValidation:function(e){e.removeClass('ss-validate-failing'),clearErrorClasses(e),e.removeClass('ss-validate-passing'),e.addClass('ss-validate-untested'),this.clearFadedState(e),this.showErrors(e,!1)},passValidation:function(e){e.removeClass('ss-validate-failing'),clearErrorClasses(e),e.addClass('ss-validate-passing'),this.setFadedState(e),this.showErrors(e,!1)},failValidation:function(e,t,n){var s,i,o;e.addClass('ss-validate-failing'),e.removeClass('ss-validate-passing'),o=getFailMessages(n,t.ssValidateMessage),clearErrorClasses(e),this.clearFadedState(e),s=o.map(function(e){return e.errClass}),e.addClass(s.join(' ')),e.data('err-classes',s),i=o.reduce(function(e,t){return e+('<li data-test="error-message">'+t.errMsg+'</li>')},''),getErrElem(e).empty().append(i)},showErrors:function(e,t){if(!(t&&e[0].getElementsByClassName('ss-validate-failing').length))//> log('aborted for containing failing validation', elem)
{t=!1!==t;var s=getErrElem(e);if(null!=s){var i=t?'addClass':'removeClass',o=s.data('lastAnim');null!=o&&n.cancel(o),s.data('lastAnim',n[i](s,'show-messages'))}}// default to true
},// manage the faded passing state
setFadedState:function(t){t.data('validate-fade',e(function(){t.addClass('ss-validate-passing-fade')},2e3))},clearFadedState:function(t){e.cancel(t.data('validate-fade')),t.removeClass('ss-validate-passing-fade')},// turn validation results into a promise
validationPromise:function(e){return null==e?t.reject():'function'==typeof e.then?e:!0===e?t.resolve():t.reject(e)},allChildrenAreValid:function(e){return!e.children.length||e.children.reduce(function(e,t){return e&&!0===t.valid},!0)},makeEventEmitter:function(e,t){return function(n){// if we tabbed away from the field
// ignore the keyboard event, the blur will still fire
[9,16].includes(n.which)||e.$emit('ss-validate-field-event',t,n.type);// fire the event for our validator to pickup
}}}}// eslint-disable-line
function getErrElem(e){for(var t=e.children(),n=t.length;n--;){var s=t.eq(n);if(s.hasClass('ss-validate-messages'))return s}return null}function getFailMessages(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'',n=[];return 0<t.length?n.push({errClass:'err-inline',errMsg:t}):angular.isArray(e)?e.forEach(function(e,t){'string'==typeof e?n.push({errClass:'err-'+t,errMsg:e}):angular.isObject(e)&&null!=e.errClass&&null!=e.errMsg&&n.push(e)}):'string'==typeof e?n.push({errClass:'err-generic',errMsg:e}):angular.isObject(e)?Object.keys(e).forEach(function(t){var s=e[t];'string'==typeof s&&n.push({errClass:t,errMsg:s})}):n.push({errClass:'err-generic',errMsg:'generic invalid input message'}),n}function clearErrorClasses(e){var t=e.data('err-classes');angular.isArray(t)&&t.forEach(function(t){return e.removeClass(t)}),e.data('err-classes',null)}// #-- END Helper (ssValidateHlp) --# //
// #--------------------------------# //
// #-----------------------------------------# //
// #---- Helper (ssValidationHlp) ----# //
/*@ngInject*/function ssValidationHlp(e){function t(e){return e.charAt(0).toUpperCase()+e.substr(1)}/**
	  * The standard validation interface that always returns true if the test
	  * function passes, otherwise returning the error message. Glean is used
	  * internally to guarantee a measure of type safety.
	  * @private
	  * @param {*} val The value to validate
	  * @param {Function} test The test function which accepts a single argument, and returns a Boolean result
	  * @param {String} err The error message
	  * @return {true|String} This value will always be true, or else the error message
	  */function n(e,n,s){return w(e,function(e){return!0===n(e)||t(s)},t(s))}/**
	  * Compose a new function that runs a group of validation test functions in
	  * order, returning the first non-true result (in the event of a test
	  * failure), or else true (if all tests pass). This is conceptually similar
	  * to Promise.all, which rejects when any one promise is rejected, and
	  * resolves when all promises have been resolved.
	  * @private
	  *
	  * @example
	  * const requiredNum = all(required(), numeric());
	  * requiredNum()
	  * // => 'value is required'
	  * requiredNum('a')
	  * // => 'value must be a number'
	  * requiredNum('123')
	  * // => true
	  *
	  * @param  {...Function} fns - A validation test function with a signature that is consistent with the validation functions exported by this module
	  * @return {Function}        - A new function which, when called with a value, will call each function in fns sequentially with that value
	  */function s(){for(var e=this,t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];var i=function(){for(var t=arguments.length,s=Array(t),o=0;o<t;o++)s[o]=arguments[o];for(var r=0;r<n.length;r+=1){if('function'!=typeof n[r])return'Invalid validator '+JSON.stringify(n[r]);var l=n[r].apply(e,s);if(!0!==l)return l}return!0};return i}/**
	  * Creates the public interface for a validator factory with the given
	  * options and custom validators, which makes the opts param optional.
	  * @private
	  * @param {Function} validatorCreator The validator creator function around which to wrap the public interface
	  * @returns {Function} The wrapped validator creator function
	  */function i(e){return function(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(t)?e({},t):e(t,n)}}/**
	  * Creates a coerced validator factory with the given validators, coercion
	  * strategy, and short-circuit test
	  * @private
	  * @param {Function[]|Function} validators A list of base validator functions, or a single validator function
	  * @param {Object} [opts={}] An optional configuration object for specifying variations on the default validation (defaults to an empty object)
	  * @param {Function[]} [customValidators=[]] An optional list of custom validator functions, which will be run after the base validation rules (defaults to an empty list)
	  * @param {Function} [coercionFn=toStr] An optional function by which to coerce the type of the value for all validators (defaults to toStr)
	  * @param {Function} [shortCircuitTest=isEmpty] An optional function by which to coerce the type of the value for all validators (defaults to isEmpty)
	  * @returns {Function}
	  */function o(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:[],i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:d,o=4<arguments.length&&arguments[4]!==void 0?arguments[4]:u;'function'==typeof e&&(e=[e]);var r=e.concat(n);return!0===t.required?function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return O(r).call(null,i(e),t)}:function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return o(e)||s.apply(void 0,toConsumableArray(r)).call(null,i(e),t)}}/**
	  * Same strict type checking implementation as used in the Sidekick
	  * @see src/sidekick/util/type-checkers.js
	  * @private
	  * @param {*} val The value to check
	  * @param {string} type The type to strictly check the value against
	  * @return {Boolean}
	  */function r(e,t){return Object.prototype.toString.call(e)// => "[object Type]"
.split(' ')[1]// => "Type]"
.slice(0,-1)// => "Type"
.toLowerCase()===t.toLowerCase();// => "type === type"
}// type coercion
function l(e){return null==e?void 0:'string'==typeof e?''===e.trim()?void 0:(e=e.replace(/,/g,''),+e):'number'==typeof e?e:NaN}function d(e){return null==e?'':e.toString()}// base validation tests
function u(e){return!(null!=e)||!('string'!=typeof e||''!==e.trim())}function c(e){return!u(e)}function p(e){return!isNaN(parseFloat(e))&&isFinite(e)||_Mathabs(e)===1/0}function m(e){return r(e,'regexp')}function g(e){return r(e,'string')}function h(e){return r(e,'object')}/**
	  * Test conformance of an object value with a provided schema of predicate
	  * functions, each of which is mapped to a property of the value to test.
	  * Inspired by lodash.conformsTo, except this supports nested schemae.
	  * @see https://lodash.com/docs/4.17.4#conformsTo
	  * @private
	  *
	  * @example
	  * const myValue = { foo: true, bar: 42, baz: { qux: 'wat' } }
	  * conformsTo(myValue, { foo: x => true });
	  * // true
	  * conformsTo(myValue, { foo: x => true, bar: x => x > 1000 })
	  * // false
	  * conformsTo(myValue, { baz: { qux: x => x != null && x !== '' } })
	  * // true
	  * conformsTo(myValue, { baz: { wat: x => x != null } })
	  * // false
	  *
	  * @param {*} val The value to check
	  * @param {Object} schema An object of predicate functions
	  * @return {Boolean}
	  */function f(e,t){for(var n in t)if(h(t[n])){if(!P(e[n]))return!1;if(!f(e[n],t[n]))return!1}else if('function'==typeof t[n]){if(null==e[n])return!1;if(!t[n](e[n]))return!1}return!0}// validator wrappers
/**
	  * Creates a required validator, which tests whether a value is not empty
	  * @protected
	  * @returns {Function} A standard validator wrapper function
	  */function y(){return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,c,t(s)+' is required')}}/**
	  * Creates a numeric validator, which tests whether a value is a number
	  * @protected
	  * @returns {Function} A standard validator wrapper function
	  */function v(){return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,p,t(s)+' must be a number')}}/**
	  * Creates a string validator, which tests whether a value is a string
	  * @protected
	  * @returns {Function} A standard validator wrapper function
	  */function b(){return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,g,t(s)+' must be a string')}}/**
	  * Creates an object validator, which tests whether a value is an object
	  * @protected
	  * @returns {Function} A standard validator wrapper function
	  */function _(){return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,h,t(s)+' must be an object')}}/**
	  * Creates an array validator, which tests whether a value is an array
	  * @protected
	  * @returns {Function} A standard validator wrapper function
	  */function S(){return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,Array.isArray,t(s)+' must be an array')}}/**
	  * Creates an object validator, which tests whether an object conforms to a given schema
	  * @protected
	  * @returns {Function} A standard validator wrapper function
	  */function A(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},s=e.schema,i=s===void 0?{}:s;return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,function(e){return f(e,i)},t(s)+' is invalid')}}/**
	  * Creates a string length validator, which tests the min and/or max length
	  * of a string
	  * @protected
	  * @param {Object} opts A configuration object containing minLength and/or maxLength properties
	  * @param {Number} [opts.minLength=0] The lower extent of the string length to test
	  * @param {Number} [opts.maxLength=Infinity] The upper extent of the string length to test
	  * @returns {Function} A standard validator wrapper function
	  */function x(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},s=e.minLength,i=void 0===s?0:s,o=e.maxLength,r=void 0===o?1/0:o;if(0>i&&(i=0),i>r)throw new RangeError('The minLength value (given here as '+i+') cannot be greater than the maxLength value (given here as '+r+')');switch(!0){case 0===i&&r===1/0:return C(!0);case 0===i&&0<r:return function(e){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'value';return n(e,function(e){return e.length<=r},g(e)?t(s)+' must not exceed '+r+' character'+(1===r?'':'s')+' long':t(s)+' must not exceed '+r+' item'+(1===r?'':'s'))};case 0<i&&r===1/0:return function(e){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'value';return n(e,function(e){return e.length>=i},g(e)?t(s)+' must be at least '+i+' character'+(1===i?'':'s')+' long':t(s)+' must have at least '+i+' item'+(1===i?'':'s'))};case 0<i&&0<r:return function(e){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'value';return n(e,function(e){return e.length>=i&&e.length<=r},g(e)?t(s)+' must be '+(i===r?'exactly '+i:'between '+i+' and '+r)+' characters long':t(s)+' must have '+(i===r?'exactly '+i:'between '+i+' and '+r)+' items')};}return C(!0)}/**
	  * Creates a string length validator, which tests the string against a RegExp pattern
	  * @protected
	  * @param {Object} opts A configuration object containing minLength and/or maxLength properties
	  * @param {RegExp} [opts.re] The RegExp pattern against which to test the string
	  * @returns {Function} A standard validator wrapper function
	  */function T(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.re,s=t,i=s.source,o=s.flags;return o=o.replace('g',''),t=new RegExp(i,o),function(e){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'value';return n(e,function(e){return t.test(e)},'Invalid '+s)}}/**
	  * Creates a range validator, which itself tests that a number falls within
	  * a range created from a min and max value (inclusive)
	  * @protected
	  * @param {Object} opts A configuration object containing min and max properties
	  * @param {Number} opts.min The lower extent of the range to test
	  * @param {Number} opts.max The upper extent of the range to test
	  * @returns {Function} A standard validator wrapper function
	  */function k(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},s=e.min,i=s===void 0?-Infinity:s,o=e.max,r=o===void 0?1/0:o;if(i>r)throw new RangeError('The min value (given here as '+i+') cannot be greater than the max value (given here as '+r+')');switch(!0){case i===-Infinity&&r===1/0:return C(!0);case i===-Infinity:return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,function(e){return e<=r},t(s)+' must be a number less than or equal to '+r)};case r===1/0:return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,function(e){return e>=i},t(s)+' must be a number greater than or equal to '+i)};}return function(e){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'value';return n(e,function(e){return e>=i&&e<=r},t(s)+' must be a number '+(i===r?'equal to '+i:'between '+i+' and '+r))}}// public functions
/**
	  * Creates the public 'required' validator factory with the given options and custom validators
	  * @public
	  * @param {Object} [opts] An optional configuration object for specifying variations on the default validation
	  * @param {Array} [customValidators] An optional list of custom validator functions, which will be run after the base validation rules
	  * @returns {Function}
	  */var w=e.glean,P=e.isObject,C=function(e){return function(){return e}},O=i(function(){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return s.apply(void 0,toConsumableArray([y()].concat(e)))}),I=i(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=[v()];return(p(e.min)||p(e.max))&&n.push(k(e)),o(n,e,t,l)}),E=i(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=[b()];return(p(e.minLength)||p(e.maxLength))&&n.push(x(e)),m(e.re)&&n.push(T(e)),o(n,e,t,d)}),j=i(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=[S()];return(p(e.minLength)||p(e.maxLength))&&n.push(x(e)),o(n,e,t,function(e){return e})}),$=i(function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=[_()];return h(e.schema)&&n.push(A(e)),o(n,e,t,function(e){return e})});// internal helpers
/**
	  * Creates the public 'numeric' validator factory with the given options and custom validators
	  * @public
	  * @param {Object} [opts] An optional configuration object for specifying variations on the default validation
	  * @param {Array} [customValidators] An optional list of custom validator functions, which will be run after the base validation rules
	  * @returns {Function}
	  *//**
	  * Creates the public 'string' validator factory with the given options and custom validators
	  * @public
	  * @param {Object} [opts] An optional configuration object for specifying variations on the default validation
	  * @param {Array} [customValidators] An optional list of custom validator functions, which will be run after the base validation rules
	  * @returns {Function}
	  *//**
	  * Creates the public 'array' validator factory with the given options and custom validators
	  * @public
	  * @param {Object} [opts] An optional configuration object for specifying variations on the default validation
	  * @param {Object} [opts.every] A predicate function that every member of the array must satisfy
	  * @param {Object} [opts.some] A predicate function that at least one member of the array must satisfy
	  * @param {Array} [customValidators] An optional list of custom validator functions, which will be run after the base validation rules
	  * @returns {Function}
	  *//**
	  * Creates the public 'object' validator factory with the given options and custom validators
	  * @public
	  * @param {Object} [opts] An optional configuration object for specifying variations on the default validation
	  * @param {Object} [opts.schema] A schema of matcher functions mapped by property
	  * @param {Array} [customValidators] An optional list of custom validator functions, which will be run after the base validation rules
	  * @returns {Function}
	  */// module exports
return{required:O,numeric:I,string:E,array:j,object:$,// useful preset string validations
email:i(function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return function(n){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'email';return E(Object.assign({},{re:/^[A-Z0-9."_%'+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i},e),t)(n,s)}}),zip:i(function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return function(n){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'zip code';return E(Object.assign({},{re:/^\d{5}(-\d{4})?$/},e),t)(n,s)}}),ssn:i(function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return function(n){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'SSN';return E(Object.assign({},{re:/^(\d{9}|\d{3}-\d{2}-\d{4})$/},e),t)(n,s)}}),phone:i(function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return function(n){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'phone number';return E(Object.assign({},{re:/^\d{3}-?\d{3}-?\d{4}$/},e),t)(n,s)}}),url:i(function(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return function(n){var s=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'url';return E(Object.assign({},{re:/^((cc|http|https):\/\/|w{3}\.)(([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,63}(:[0-9]{4})?(\/|\/[\w#!:.?+=&%@!\-\/]*)*)$/},e),t)(n,s)}})}}// #-- END Helper (ssValidationHlp) --# //
// #-----------------------------------------# //
// #---------------------------------# //
// #---- Helper (ssValidatorHlp) ----# //
/*@ngInject*/function ssValidatorHlp(e){function t(e){return e.charAt(0).toUpperCase()+e.substr(1)}var n={required:e('ssValidatorHlp.required','ssValidationHlp.required()',function(e,n){var s=/[^\s]+/g;return null!=e&&'string'!=typeof e&&(e=e.toString()),!!(s.test(e)&&'string'==typeof e&&0<e.length)||(null==n?'This field is required':t(n)+' is required')}),email:e('ssValidatorHlp.email','ssValidationHlp.email()',function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'email',n=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;return!(('string'!=typeof e||0!==e.length)&&null!=e)||!!n.test(e)||'Invalid '+t}),zip:e('ssValidatorHlp.zip','ssValidationHlp.zip()',function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'zip code',n=/^\d{5}(-\d{4})?$/i;return!(('string'!=typeof e||0!==e.length)&&null!=e)||('string'!=typeof e&&(e=e.toString()),!!n.test(e)||'Invalid '+t)}),ssn:e('ssValidatorHlp.ssn','ssValidationHlp.ssn()',function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'SSN';if(null==e)return!0;var n=/^\d{3}-?\d{2}-?\d{4}$/,s=/^\*{6,8}$/g;return!!s.test(e)||!(('string'!=typeof e||0!==e.length)&&null!=e)||!!n.test(e)||'Invalid '+t}),phone:e('ssValidatorHlp.phone','ssValidationHlp.phone()',function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'phone number';if(null!=e&&'string'!=typeof e&&(e=e.toString()),'string'==typeof e&&0===e.length||null==e)return!0;var n=/^\d{3}-?\d{3}-?\d{4}$/;return!!n.test(e)||'Invalid '+t}),url:e('ssValidatorHlp.url','ssValidationHlp.url()',function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'url',n=/^((cc|http|https):\/\/|w{3}\.)(([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,3}(:[0-9]{4})?(\/|\/[\w#!:.?+=&%@!\-\/]*)*)$/;return!!('string'==typeof e&&0<e.length&&n.test(e))||'Invalid '+t}),num:e('ssValidatorHlp.num','ssValidationHlp.numeric()',function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'value',s=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i;// null and empty are ok, this validator does not require a value
return!(null!=e&&''!==e)||(null!=e&&'string'!=typeof e&&(e=e.toString()),e=e.replace(/,/g,''),s?!!(0<+e)||t(n)+' must be a number greater than 0':(i=/^[\d\.]+$/g,!!i.test(e)||t(n)+' must be a number'));// if val is not a string, change it to one so we can test with RegExp
// digits and periods are the only valid input
// known limitation: this validator will accept multiple periods,
// so 456.154.233 would still be valid
}),requiredEmail:e('ssValidatorHlp.requiredEmail','ssValidationHlp.email({ required: true })',function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'email',s;return(s=n.required(e,t),!0!==s)?s:(s=n.email(e,t),!0===s||s)}),requiredSSN:e('ssValidatorHlp.requiredSSN','ssValidationHlp.ssn({ required: true })',function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'SSN',s;return(s=n.required(e,t),!0!==s)?s:(s=n.ssn(e,t),!0===s||s)}),requiredNum:e('ssValidatorHlp.requiredNum','ssValidationHlp.numeric({ required: true })',function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'value',s;return(s=n.required(e,t),!0!==s)?s:(s=n.num(e,t),!0===s||s)}),requiredNumNotZero:e('ssValidatorHlp.requiredNumNotZero','ssValidationHlp.numeric({ required: true, min: 1 })',function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'value',s;return(s=n.required(e,t),!0!==s)?s:(s=n.num(e,t,!0),!0===s||s)}),requiredNumZeroOrGreater:e('ssValidatorHlp.requiredNumZeroOrGreater','ssValidationHlp.numeric({ required: true, min: 0 })',function(e){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'value',i;return i=n.required(e,s),!0===i?!(0>e)||t(s)+' must be 0 or greater.':i}),requiredUrl:e('ssValidatorHlp.requiredUrl','ssValidationHlp.url({ required: true })',function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'url',s;return(s=n.required(e,t),!0!==s)?s:(s=n.url(e,t),!0===s||s)}),externalId:e('ssValidatorHlp.externalId','ssValidationHlp.string({ max: 100 })',function(e){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'External ID';// No value is ok in my book.
return!(('string'!=typeof e||0!==e.length)&&null!=e)||!(100<e.length)||t(n)+' must be 100 characters or less.';// Is it the right length?
}),requiredDigitalSignature:e('ssValidatorHlp.requiredDigitalSignature','ssValidationHlp.object({ required: true, schema: { isSigned: x => x === true, name: x => x != null && x.trim() !== "" } })',function(e){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'Digital Signature';// Ensure that the signature has some length besides whitespace
return!!(e.isSigned&&0!==e.name.trim().length)||t(n)+' is required.'}),requiredFileUpload:e('ssValidatorHlp.requiredFileUpload','ssValidationHlp.string({ required: true })',function(e){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'File Upload';return!!(0<e.length)||t(n)+' is required.'})};return n}// #-- END Helper (ssValidatorHlp) --# //
// #---------------------------------# //
/*@ngInject*/function accountApi(e,t){// #---------------------------------------# //
// #---- API Endpoint (ssPositionsApi) ----# //
// base endpoint url
var n=t.endpoint.productAccess;// API endpoint methods
return{forgotPassword:function(t){var s={method:'POST',url:n+'/Password'+'/Forgot'};return t&&(s.data={Flid:t}),e(s)}};// #-- END API Endpoint (ssPositionsApi) --# //
// #---------------------------------------# //
}/*@ngInject*/function assignmentApi(e,t,n,s){// #----------------------------------------# //
// #---- API Endpoint (ssAssignmentApi) ----# //
// base endpoint url
var i=t.endpoint.employees,o=n.convertToValidatingSave,r=['details'],l=o(e.endpoint({url:function(e){return i+'/positions/'+e.id},method:'GET'},'assignments',r)),d=o(e.endpoint({url:i+'/organizations/:ORGID:/positions',method:'GET'},'assignments',r)),u=o(e.endpoint({url:function(e){return i+'/positions/'+e.id+'/assignments/'+e.assignmentId},method:'GET'},'assignments',r)),c=e.endpoint({url:i+'/export/assignments',method:'GET'},'assignments',r);// model data type
// possible relationships.
/**
	  * Makes a call to the Employee Export endpoint, and returns the data as a CSC
	  * @param {string} filter The filter (pre-encoded) that will be applied to the report endpoint to get a result set as CSV
	  */// API endpoint methods
return{get:l,query:d,getAssignment:u,queryEmployeeAssignments:c,downloadEmployeeAssignmentsReportCsv:function(e){return s({method:'GET',url:i+'/Export/Assignments/csv?'+e})}};// #-- END API Endpoint (ssAssignmentApi) --# //
// #----------------------------------------# //
}/*@ngInject*/function credentialsApi(e,t,n,s,i,o){// #-----------------------------------------# //
// #---- API Endpoint (ssCredentialsApi) ----# //
var r=i.endpoint.employees,l=i.endpoint.credentials,d=i.endpoint.new_credentials,u=['endorsements'],c=o('ssCredentialsApi.getCredentials','ssCredentialsApi. {New Method yet to be created}',n.endpoint({url:l+'/credentials',method:'GET'},'credentials',u)),p=function(e){var t=e.employeeId,n=e.fileId;return r+'/employees/'+t+'/fileRecords/'+n},m=function(e){var t=e.employeeId,n=e.credentialId;return r+'/employees/'+t+'/employeeCredentials/'+(n||'')},g=function(e){var t=e.employeeId,n=e.credentialId,s=e.fileId,i=s===void 0?'':s;return r+'/employees/'+t+'/employeeCredentials/'+n+'/files/'+(i||'')},h=d+'/Credentials',f=d+'/Issuers',y=d+'/Subjects',v=n.endpoint({url:m,method:'GET'},'publicEmployeeCredentialV1',[]),b=n.endpoint({url:m,method:'GET'},'publicEmployeeCredentialV1',[]),_=n.endpoint({url:m,method:'POST'},'publicEmployeeCredentialV1',[]),S=n.endpoint({url:m,method:'PATCH'},'publicEmployeeCredentialV1',[]),A=n.endpoint({url:function(e){var t=e.employeeId;return r+'/employees/'+t+'/fileRecords?organizationId=:ORGID:'},method:'POST'},'employees',[]),x=n.endpoint({url:g,method:'POST'},'publicEmployeeCredentialV1',[]),T=n.endpoint({url:g,method:'DELETE'},'publicEmployeeCredentialV1',[]),k=n.endpoint({url:h,method:'GET'},'credential',[]),w=n.endpoint({url:d+'/CredentialTypes',method:'GET'},'credentialtype',[]),P=n.endpoint({url:f,method:'GET'},'issuer',[]),C=n.endpoint({url:y,method:'GET'},'subject',[]),O=n.endpoint({url:f,method:'POST'},'issuer',[]),I=n.endpoint({url:f,method:'PATCH'},'issuer',[]),E=n.endpoint({url:f,method:'DELETE'},'issuer',[]),j=n.endpoint({url:h,method:'POST'},'credential',[]),$=n.endpoint({url:h,method:'PATCH'},'credential',[]),D=n.endpoint({url:h,method:'DELETE'},'credential',[]),R=n.endpoint({url:y,method:'POST'},'subject',[]),F=n.endpoint({url:y,method:'PATCH'},'subject',[]),H=n.endpoint({url:y,method:'DELETE'},'subject',[]),M=n.endpoint({url:function(e){return d+'/Issuers/'+e},method:'GET'},'issuer',[]),L=n.endpoint({url:function(e){return d+'/credentials/'+e},method:'GET'},'credential',[]);/* OLD CREDENTIAL  */// possible relationships
// Expose the underlying config because the employeeApi needs this to manage creds/endorsements internally
/* END REGION  */// base endpoint url
// model data type
/**
	  * Makes a call to the Employee Credentials Report endpoint, and returns the data as a CSC
	  * @param {string} filter The filter (pre-encoded) that will be applied to the report endpoint to get a result set as CSV
	  */// API endpoint methods
return{addFileRecord:A,uploadFileRecord:function(n,i,o){// debugger;
var r=new FormData;// If/when we support uploading multiple files, can use extra param and if statement
return r.append('file',o),e.post(p({employeeId:n,fileId:i})+'?version=0',r,{headers:{"Content-Type":void 0,Authorization:'Bearer '+s.token.access}}).then(function(e){return 299<e.status||200>e.status?t.reject(e):e.data?e.data:t.reject(Error('response did not contain any data'))})},associateFile:x,deleteFile:T,employeeCredentialFileUrl:g,getEmployeeCredential:v,queryEmployeeCredentials:b,addEmployeeCredential:_,patchEmployeeCredential:S,queryCredentials:k,queryCredentialTypes:w,queryIssuers:P,querySubjects:C,getCredentials:c,config:{model:'credentials',rel:u},addIssuer:O,patchIssuer:I,deleteIssuer:E,addCredential:j,patchCredential:$,deleteCredential:D,queryIssuerById:M,queryCredentialById:L,addSubject:R,patchSubject:F,deleteSubject:H,downloadCredentialsCsv:function(t){var n={method:'GET',url:d+'/credentials/csv?'+encodeURIComponent('filter[issuerid]')+('='+t)};return e(n)},downloadSubjectsCsv:function(t){var n={method:'GET',url:d+'/subjects/csv?'+encodeURIComponent('filter[issuerid]')+('='+t)};return e(n)},downloadEmployeeCredentialsReportCsv:function(t){return e({method:'GET',url:r+'/employeeCredentials/csv?'+t})}};// #-- END API Endpoint (ssCredentialsApi) --# //
// #-----------------------------------------# //
}/*@ngInject*/function departmentsApi(e,t){// #-----------------------------------------# //
// #---- API Endpoint (ssDepartmentsApi) ----# //
// base endpoint url
var n=t.endpoint.departments,s=n+'/organizations/:ORGID:/Departments',i=function(e){return n+'/Departments/'+e.id},o=[],r=e.endpoint({url:s,method:'GET'},'departments',o),l=e.endpoint({url:i,method:'PATCH'},'departments',o),d=e.endpoint({url:i,method:'PATCH'},'departments',o),u=e.endpoint({url:s,method:'POST'},'departments',o);// model data type
// possible relationships
// API endpoint methods
return{query:r,save:l,add:u,remove:d};// #-- END API Endpoint (ssDepartmentsApi) --# //
// #-----------------------------------------# //
}/*@ngInject*/function fileApi(e,t,n){// #----------------------------------# //
// #---- API Endpoint (ssFileApi) ----# //
// base endpoint url
var s=n.endpoint.files,i=s+'/files',o=function(e){return i+'/'+e.fileId+'?version=1'},r=[],l=s+'/organizations/:ORGID:/files',d=t.endpoint({url:i,method:'GET'},'files',r),u=t.endpoint({url:function(e){return'/employees/'+e.id+'/fileRecords/'+e.fileId+'/url'},method:'GET'},'files',r),c=t.endpoint({url:l,method:'POST'},'files',r),p=t.endpoint({url:l,method:'POST'},'files',r),m=t.endpoint({url:s+'/files/ids?organizationId=:ORGID:',method:'POST'},'files',r);// Add &simulateFailure=true to force a 417 on file upload to test upload errors
// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{get:d,query:m,add:p,getUrlById:u,preAdd:c,removeFile:function(t){return e({url:o({fileId:t}),method:'DELETE'})}};// #-- END API Endpoint (ssFileApi) --# //
// #----------------------------------# //
}/*@ngInject*/function formInstancesApi(e,t,n,s,i,o,r,l){// #-------------------------------------------# //
// #---- API Endpoint (ssFormInstancesApi) ----# //
// base endpoint url
var d=r.endpoint.formTemplates,u=function(e){return d+'/forminstances/'+e.id},c=function(e){return d+'/forminstances/'+e.id+'/status/'+e.newStatus},p=['steps'],m=i.endpoint({url:u,method:'GET'},'formInstances',p),g=i.endpoint({url:function(e){return d+'/employees/'+e.id+'/forminstances'},method:'GET'},'formInstances',p),h=i.endpoint({url:u,method:'POST'},'formInstances',p),f=i.endpoint({url:function(e){return d+'/forminstances/'+e.id+'/reminder'},method:'POST'},'formInstances',p),y=i.endpoint({url:d+'/organizations/:ORGID:/forminstances',method:'GET'},'formInstances',p),v=i.endpoint({url:d+'/organizations/:ORGID:/dashboard',method:'GET'},'formInstances',p),b=i.endpoint({url:d+'/formtracking/formPacketView?organizationId=:ORGID:',method:'GET'},'formInstances',p),_=i.endpoint({url:d+'/formtracking/formPacketViewCounts?organizationId=:ORGID:',method:'GET'},'formInstances',p),S=i.endpoint({url:d+'/organizations/:ORGID:/forminstances/inprogress',method:'GET'},'formInstances',p),A=i.endpoint({url:d+'/organizations/:ORGID:/forminstances/notstarted',method:'GET'},'formInstances',p),x=i.endpoint({url:function(e){return d+'/employee/'+e.id+'/sentforminstances'},method:'GET'},'formInstances',p),T=i.endpoint({url:function(e){return d+'/employee/'+e.id+'/currentforminstances'},method:'GET'},'formInstances',p),k=i.endpoint({url:function(e){return d+'/forminstances/'+e.formInstanceid+'/textoverlay'},method:'POST'},'formInstances',p),w=i.endpoint({url:d+'/organizations/:ORGID:/forminstances/counts',method:'GET'},'formInstances',p),P=i.endpoint({url:function(e){return d+'/formtracking/packets/'+e.id+'/forms?organizationId=:ORGID:'},method:'GET'},'formInstances',p),C=i.endpoint({url:d+'/BatchRequests/formInstances',method:'POST'},'formInstances',p),O=i.endpoint({url:' '+d+'/BatchRequests/packetInstances',method:'POST'},'formInstances',p),I=i.endpoint({url:d+'/BatchRequests',method:'GET'},'formInstances',p),E=i.endpoint({url:d+'/BatchStatuses',method:'GET'},'formInstances',p),j=i.endpoint({url:function(e){return d+'/BatchStatuses/'+e.id},method:'GET'},'formInstances',p);// model data type
// possible relationships
// batch form sending
// API endpoint methods
return{get:m,query:g,send:function(n,i){if(null==n||!angular.isArray(n.attributes))return void e.error('params.attributes must be an array');var r=d+'/organizations/'+l.getOrgIdSync()+'/forminstances',u={model:'formInstances',path:r,relationships:[]};return t({url:r,method:'POST',params:i,data:{data:n}}).then(function(e){var t=s.store.sync(e.data);return new o.Collection(t,u)})},bulkSend:function(n){if(null==n||!angular.isArray(n.attributes))return void e.error('data.attributes must be an array');var s=d+'/organizations/'+l.getOrgIdSync()+'/forminstances/bulk';return t({url:s,method:'POST',data:{data:n}}).then(function(e){return e})},post:h,postReminder:f,updateStatus:function(e){return t({url:c(e),method:'PATCH'})},queryByOrg:y,queryDashboardSummary:function(e){return l.getIdentityByType('employee').then(function(t){return v(Object.assign({employeeId:t},e))})},queryFormPacketViewSummary:b,queryFormPacketViewCounts:_,queryInProgress:S,queryNotStarted:A,querySubmitted:x,queryCurrent:T,postFormOverlay:k,generatePDFOverlay:function(e){var n=d+'/forminstances/'+e.formInstanceid+'/textoverlayinprogress',s={url:n,method:'POST',params:{showSensitive:e.showSensitive,timeStamp:'ticks'},data:e.formFieldValues};return t(s).then(function(e){return e})},getFormCounts:w,updateEmpRecord:function(e){var n=d+'/forminstances/'+e.id,s={url:n,method:'POST',data:{},params:e.params};return t(s)},updateCurrentStepId:function(e){var n=d+'/forminstances/'+e.id+'/currentStepId/'+e.targetStep,s={url:n,method:'PATCH',params:e.params};return t(s)},signature:function(e){var s={url:d+'/signature',method:'GET',params:{signature:e}};return n(function(e){l.getIdentityByType('employee').then(function(n){s.params.id=n,e(t(s))})})},postFormInstanceBatch:C,postPacketInstanceBatch:O,getAllBatches:I,getAllBatchStatuses:E,getBatchStatus:j,downloadStatusCsv:function(e,n){return t({url:d+'/Export/trackform/statuscsv',method:'POST',params:e,data:{data:n}})},downloadResponsesXlsx:function(e,n){return t({url:d+'/Export/trackform/responsesxlsx',method:'POST',params:e,data:{data:n}})},getPacketContents:P};// #-- END API Endpoint (ssFormInstancesApi) --# //
// #-------------------------------------------# //
}/*@ngInject*/function formLibraryApi(e,t){// #-----------------------------------------# //
// #---- API Endpoint (ssFormLibraryApi) ----# //
// base endpoint url
var n=t.endpoint.formTemplates,s=[],i=e.endpoint({url:n+'/organizations/:ORGID:/formtemplates/library',method:'GET'},'iFormLibraryObjects',s),o=e.endpoint({url:n+'/organizations/:ORGID:/templates',method:'GET'},'iFormLibraryObjects',s);// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{query:i,queryTemplateObjects:o};// #-- END API Endpoint (ssFormLibraryApi) --# //
// #-----------------------------------------# //
}/*@ngInject*/function formTemplatesApi(e,t,n,s,i,o){function r(e,t){var s=i.store.sync(e);return angular.isArray(e.data)?new n.Collection(s,t):new n.Model(s,t)}// #-- END API Endpoint (ssFormTemplatesApi) --# //
// #-------------------------------------------# //
// #-------------------------------------------# //
// #---- API Endpoint (ssFormTemplatesApi) ----# //
var l=o.getOrgIdSync(),d=s.endpoint.formTemplates,u=function(e){return d+'/formtemplates/'+e.id},c=d+'/organizations/:ORGID:/formtemplates',p=function(e){return d+'/formtemplates/'+e.id+'/files/'+e.fileId},m=function(e){return d+'/organizations/'+l+'/formtemplates/'+e.sourceTemplateId+'/share'},g=['steps','formFields','statusHistory','files'],h=t.endpoint({url:u,method:'GET'},'formTemplates',g),f=t.endpoint({url:c,method:'GET'},'formTemplates',g),y=t.endpoint({url:c,method:'POST'},'formTemplates',g),v=t.endpoint({url:u,method:'POST'},'formTemplates',g),b=t.endpoint({url:d+'/files',method:'POST'},'formTemplates',g),_=t.endpoint({url:function(){return d+'/files/detailsByIds'},method:'POST'},'formTemplates',g),S=t.endpoint({url:function(e){return d+'/files/'+e.id},method:'GET'},'formTemplates',g),A=t.endpoint({url:function(e){return d+'/formtemplates/'+e.id+'/files'},method:'POST'},'formTemplates',g),x=t.endpoint({url:function(e){return d+'/files/'+e.id+'/url'},method:'GET'},'formTemplates',g),T=t.endpoint({url:d+'/organizations/:ORGID:/formtemplates/frequentlySent',method:'GET'},'formTemplates',g),k=t.endpoint({url:d+'/organizations/:ORGID:/formtemplates/recentlySent',method:'GET'},'formTemplates',g),w=t.endpoint({url:function(e){return d+'/formtemplate/'+e.formTemplateId+'/textoverlay'},method:'POST'},'formTemplates',g),P=t.endpoint({url:d+'/organizations/:ORGID:/templateObjectsForFilter',method:'GET'},'formTemplates',g);// base endpoint url
// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{get:h,query:f,add:y,copy:v,editActive:function(t){var n={url:u({id:t.id}),method:'PATCH',params:{version:t.$serialize().data.attributes.ownerVersionNumber},data:{data:{attributes:{},id:t.id,type:'formTemplates'}}},s={model:'formTemplates',path:u,relationships:[]};return e(n).then(function(e){return r(e.data,s)})},attachFile:b,generatePDFOverlay:w,getUploadFileUrl:function(e){return d+'/files/'+e.id},getFiles:_,getFile:S,getFileUrl:x,associateFile:A,removeFile:function(t){var n={url:p({id:t.id,fileId:t._files.find(function(e){return e._fileId===t._printPreviewDefinition.templateFileId}).id}),method:'DELETE',params:{version:t.$serialize().data.attributes.ownerVersionNumber},data:{data:{attributes:{},id:t.id,type:'formTemplates'}}};return e(n)},formTemplatesByIds:function(t){var n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},s={url:d+'/formtemplates/ids'+'?organizationId='+o.getOrgIdSync(),method:'POST',data:{data:{attributes:t,type:'formTemplates'}},params:n},i={model:'formTemplates',path:u,relationships:[]};return e(s).then(function(e){return r(e.data,i)})},frequentlySent:T,recentlySent:k,shareToOrg:function(t,n){var s={url:m({sourceTemplateId:t}),method:'POST',data:n};return e(s)},getFilterTemplates:P}}/*@ngInject*/function jobTypesApi(e,t,n){// #--------------------------------------# //
// #---- API Endpoint (ssJobTypesApi) ----# //
// base endpoint url
var s=t.endpoint.jobTypes,i=n.convertToValidatingSave,o=['paySchedules','jobTypeDetails'],r=i(e.endpoint({url:s+'/organizations/:ORGID:/jobTypes',method:'GET'},'jobTypes',o)),l=i(e.endpoint({url:function(e){return s+'/jobTypes/'+e.id},method:'GET'},'jobTypes',o));// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{query:r,get:l};// #-- END API Endpoint (ssJobTypesApi) --# //
// #--------------------------------------# //
}/*@ngInject*/function listApi(e,t){// #----------------------------------# //
// #---- API Endpoint (ssListApi) ----# //
// base endpoint url
var n=t.endpoint.lists,s=['Items'],i=e.endpoint({url:n+'/organizations/:ORGID:/lists',method:'GET'},'listHeaders',s),o=e.endpoint({url:function(e){return n+'/lists/'+e.id+'/items'},method:'GET'},'listHeaders',s);// model data type
// possible relationships
// API endpoint methods
return{query:i,getListItems:o};// #-- END API Endpoint (ssListApi) --# //
// #----------------------------------# //
}/*@ngInject*/function locationsApi(e,t){// #---------------------------------------# //
// #---- API Endpoint (ssLocationsApi) ----# //
// base endpoint url
var n=t.endpoint.locations,s=[],i=e.endpoint({url:function(e){return n+'/locations/'+e.id},method:'GET'},'locations',s),o=e.endpoint({url:n+'/organizations/:ORGID:/locations',method:'GET'},'locations',s);// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{get:i,query:o};// #-- END API Endpoint (ssLocationsApi) --# //
// #---------------------------------------# //
}/*@ngInject*/function notificationsApi(e,t){// #-------------------------------------------# //
// #---- API Endpoint (ssNotificationsApi) ----# //
// base endpoint url
var n=t.endpoint.notifications,s=e.endpoint({url:function(e){return n+'/employees/'+e.employeeId+'/notifications'},method:'GET'},'messages',[]);// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{query:s};// #-- END API Endpoint (ssNotificationsApi) --# //
// #-------------------------------------------# //
}/*@ngInject*/function organizationApi(e,t,n){// #------------------------------------------# //
// #---- API Endpoint (ssOrganizationApi) ----# //
// base endpoint url
var s=n.endpoint.organizations,i=s+'/organizations',o=['applications'],r=t.endpoint({url:function(e){return i+'/'+e.id},method:'GET',cache:!0},'organizations',o),l=t.endpoint({url:i,method:'GET'},'organizations',o),d=t.endpoint({url:i,method:'POST'},'organizations',o);// model data type
// possible relationships
// API endpoint methods
return{get:r,query:l,add:d,searchOrgs:function(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},s=n.endpoint.productAccess+'/organizations';t.productId='EC',null==t.limit&&(t.limit=50);return e({url:s,method:'GET',data:{},params:t})}};// #-- END API Endpoint (ssOrganizationApi) --# //
// #------------------------------------------# //
}/*@ngInject*/function packetInstancesApi(e,t,n,s,i,o,r){// #---------------------------------------------# //
// #---- API Endpoint (ssPacketInstancesApi) ----# //
// base endpoint url
var l=o.endpoint.formTemplates,d=function(e){return l+'/packetInstances/'+e.id},u=[],c=i.defaultEndpoints({url:l+'/organizations/:ORGID:/packetInstances'},'packetInstances',u),p=c.query,m=c.add,g=i.endpoint({url:d,method:'GET'},'packetInstances',u),h=i.endpoint({url:d,method:'DELETE'},'packetInstances',u);// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{get:g,query:p,add:m,remove:h,send:function(i){if(null==i||!angular.isArray(i.attributes))return void e.error('data.attributes must be an array');var o=l+'/organizations/'+r.getOrgIdSync()+'/packetinstances',d={model:'packetInstances',path:o,relationships:[]};return t({url:o,method:'POST',data:{data:i}}).then(function(e){var t=n.store.sync(e.data);return new s.Collection(t,d)})}};// #-- END API Endpoint (ssPacketInstancesApi) --# //
// #---------------------------------------------# //
}/*@ngInject*/function packetsApi(e,t){// #-------------------------------------# //
// #---- API Endpoint (ssPacketsApi) ----# //
// base endpoint url
var n=t.endpoint.formTemplates,s=[],i=e.endpoint({url:function(e){return n+'/packets/'+e.id},method:'GET'},'packets',s),o=e.endpoint({url:n+'/organizations/:ORGID:/packets',method:'POST'},'packets',s);// model data type
// possible relationships
// API endpoint methods
return{get:i,add:o};// #-- END API Endpoint (ssPacketsApi) --# //
// #-------------------------------------# //
}/*@ngInject*/function permissionProfilesApi(e,t){// #------------------------------------------------# //
// #---- API Endpoint (ssPermissionProfilesApi) ----# //
// base endpoint url
var n=t.endpoint.permissions,s=n+'/PermissionProfiles',i=s+'?organizationId=:ORGID:',o=['permissionSets'],r=e.endpoint({url:s,method:'GET'},'permissionProfiles',o),l=e.endpoint({url:i,method:'GET'},'permissionProfiles',o),d=e.endpoint({url:i,method:'POST'},'permissionProfiles',o),u=e.endpoint({url:function(e){return n+'/PermissionProfiles/'+e.id+'/duplicate'},method:'POST'},'permissionProfiles',o),c=e.endpoint({url:s+'/Search?organizationId=:ORGID:',method:'GET'},'permissionProfiles',o);// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{get:r,query:l,add:d,duplicate:u,search:c};// #-- END API Endpoint (ssPermissionProfilesApi) --# //
// #------------------------------------------------# //
}/*@ngInject*/function positionsApi(e,t,n){// #---------------------------------------# //
// #---- API Endpoint (ssPositionsApi) ----# //
// base endpoint url
var s=t.endpoint.employees,i=n.convertToValidatingSave,o=['assignments'],r=i(e.endpoint({url:function(e){return s+'/employees/'+e.id+'/positions?organizationId=:ORGID:'},method:'GET'},'positions',o)),l=i(e.endpoint({url:s+'/Positions',method:'GET'},'positions',o));// model data type
// possible relationships.
// generate default endpoints
// API endpoint methods
return{getForEmployee:r,query:l};// #-- END API Endpoint (ssPositionsApi) --# //
// #---------------------------------------# //
}/*@ngInject*/function productAccessApi(e,t){// #-------------------------------------------# //
// #---- API Endpoint (ssProductAccessApi) ----# //
// base endpoint url
// API endpoint methods
var n=t.idmGatewayUrl;return{getProductNameFromId:function(t){return e({method:'GET',url:n+'userservice/v0/api/products'+'/'+t+'/name'})}};// #-- END API Endpoint (ssProductAccessApi) --# //
// #-------------------------------------------# //
}/*@ngInject*/function protectedContextApi(e,t){// #----------------------------------------------# //
// #---- API Endpoint (ssProtectedContextApi) ----# //
// base endpoint url
var n=t.endpoint.permissions,s=n+'/ProtectedContextRegistrations',i=s+'?organizationId=:ORGID:',o=[],r=e.endpoint({url:s,method:'GET'},'protectedContextRegistrations',o),l=e.endpoint({url:i,method:'GET'},'protectedContextRegistrations',o),d=e.endpoint({url:i,method:'POST'},'protectedContextRegistrations',o);// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{get:r,query:l,add:d};// #-- END API Endpoint (ssProtectedContextApi) --# //
// #----------------------------------------------# //
}/*@ngInject*/function securityGroupsApi(e,t,n,s,i,o,r){function l(n){var s=t.when(o.ready);// if the url uses the orgId, wait for it to be ready
return s=s.then(function(){return i.ready}),s=s.then(function(){var s=i.getOrgIdSync(),o=n.url.includes(':ORGID:');// if this url needs an orgId replacement, and we don't have an org context... abort!
if(!(o&&null==s))return o&&(n.url=n.url.replace(/:ORGID:/ig,s)),e(n).then(function(e){return 400<=e.status&&500>e.status?t.reject(e):e}).catch(function(e){-1===e.status||r.handle4XX(e)});// if this url needs an orgId, replace it
}),s}// API endpoint methods
// #--------------------------------------------# //
// #---- API Endpoint (ssSecurityGroupsApi) ----# //
// base endpoint url
var d=s.endpoint.permissions,u=d+'/SecurityGroups',c=u+'?organizationId=:ORGID:',p=['securityScopes'],m=n.endpoint({url:function(){return u+'/{p.id}'},method:'GET'},'securityGroups',p),g=n.endpoint({url:c,method:'GET'},'securityGroups',p),h=n.endpoint({url:c,method:'POST'},'securityGroups',p),f=n.endpoint({url:function(e){return d+'/SecurityGroups/Employee/'+e.id+'?organizationId=:ORGID:'},method:'GET'},'securityGroups',p);// model data type
// possible relationships
// generate default endpoints
return{get:m,query:g,add:h,getSecurityGroupsByEmployeeId:f,getSecurityGroupsByPermissionIds:function(e,t){return l({url:u+'/permissionIds?organizationId=:ORGID:',method:'POST',params:e,data:{data:t}}).then(function(e){return e.data})}};// #-- END API Endpoint (ssSecurityGroupsApi) --# //
// #--------------------------------------------# //
}/*@ngInject*/function securityScopeApi(e,t){// #-------------------------------------------# //
// #---- API Endpoint (ssSecurityScopeApi) ----# //
// base endpoint url
var n=t.endpoint.permissions,s=function(e){return n+'/SecurityGroups/'+e.groupId+'/SecurityScopes?organizationId=:ORGID:'},i=[],o=e.endpoint({url:function(e){return n+'/SecurityGroups/'+e.groupId+'/SecurityScopes/'+e.scopeId+'??organizationId=:ORGID:'},method:'GET'},'securityScope',i),r=e.endpoint({url:s,method:'GET'},'securityScope',i),l=e.endpoint({url:s,method:'POST'},'securityScope',i);// const groupBaseUrl = (p) => `${baseUrl}/SecurityGroups/${p.groupId}`;
// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{get:o,query:r,add:l};// #-- END API Endpoint (ssSecurityScopeApi) --# //
// #-------------------------------------------# //
}/*@ngInject*/function signatureApi(e,t){// #------------------------------------# //
// #---- API Endpoint (ssStatusApi) ----# //
var n=t.endpoint.formTemplates,s=[],i=e.endpoint({url:function(e){return n+'/signatures/'+e.id+'?resolveFileUrl=true'},method:'GET'},'signatures',s),o=e.endpoint({url:n+'/organizations/:ORGID:/signatures',method:'GET'},'signatures',s);// model data type
// possible relationships
// generate default endpoints
// API endpoint methods
return{get:i,query:o};// #-- END API Endpoint (ssStatusApi) --# //
// #------------------------------------# //
}/*@ngInject*/function statusApi(e,t,n){// #------------------------------------# //
// #---- API Endpoint (ssStatusApi) ----# //
// base endpoint url
var s=t.endpoint.formTemplates,i=n.convertToValidatingSave,o=i(e.endpoint({url:function(e){return s+'/formtemplates/'+e.id+'/statushistory'},method:'POST'},'statusHistories',[]));// model data type
// possible relationships
// API endpoint methods
return{update:o};// #-- END API Endpoint (ssStatusApi) --# //
// #------------------------------------# //
}/*@ngInject*/function usersApi(e,t,n){// #---------------------------------------# //
// #---- API Endpoint (ssPositionsApi) ----# //
// base endpoint url
var s=n.idmGatewayUrl,i=s+'userservice/v0/api/users';// Get users
// Get user
// Get user by ID
// Send Invitation
// Revoke Access
// Grant application access
// Remove application access
// Bulk invite via ids
// Bulk invite via filter
// Bulk revoke via ids
// Bulk revoke via filter
// API endpoint methods
return{getUsers:function(t){var n={method:'GET',url:''+i};return t&&(n.params=t),e(n)},getUser:function(t,n){return e({method:'GET',url:i+'/'+t+'/'+n+'/'})},getUserById:function(t,n){var s={method:'GET',url:i+'/id/'+t};return n&&(s.params=n),e(s)},sendInvitationToUser:function(t,n,s){var o={method:'POST',url:i+'/'+t+'/invitations',data:{AddProducts:[],RemoveProducts:[]}};return n.length&&(o.data.AddProducts=n),s.length&&(o.data.RemoveProducts=s),e(o)},sendBulkInvitationIds:function(n,s){var o={method:'POST',url:i+'/ids/invitations?'+t(n),data:s};return e(o)},sendBulkInvitationFilter:function(n,s){var o={method:'POST',url:i+'/filter/invitations?'+t(n),data:s};return e(o)},revokeAccess:function(t,n){return e({method:'DELETE',url:i+'/'+t+'/'+n+'/flid'})},revokeBulkAccessIds:function(n){var s={method:'DELETE',url:i+'/ids/flid?'+t(n)};return e(s)},revokeBulkAccessFilter:function(n){var s={method:'DELETE',url:i+'/filter/flid?'+t(n)};return e(s)},grantApplicationAccessToUser:function(t,n,s){var o={method:'POST',url:i+'/'+t+'/'+n+'/products',params:{}};return s&&(o.params.product=s),e(o)},grantBulkApplicationAccessIds:function(n,s){var o={method:'POST',url:i+'/ids/products?'+t(n),data:{AddProducts:s}};return e(o)},grantBulkApplicationAccessFilter:function(n,s){var o={method:'POST',url:i+'/filter/products?'+t(n),data:{AddProducts:s}};return e(o)},removeApplicationAccessForUser:function(t,n,s){var o={method:'DELETE',url:i+'/'+t+'/'+n+'/products',params:{}};return s&&(o.params.product=s),e(o)},removeBulkApplicationAccessIds:function(n,s){var o={method:'POST',url:i+'/ids/products?'+t(n),data:{RemoveProducts:s}};return e(o)},removeBulkApplicationAccessFilter:function(n,s){var o={method:'POST',url:i+'/filter/products?'+t(n),data:{RemoveProducts:s}};return e(o)},downloadUserCsv:function(t){return e({method:'GET',url:i+'/organizations/'+t+'/export'})},changeApplicationAccessForUser:function(t,n,s){var o={method:'POST',url:i+'/'+t+'/products',data:{AddProducts:[],RemoveProducts:[]}};return n.length&&(o.data.AddProducts=n),s.length&&(o.data.RemoveProducts=s),e(o)}};// #-- END API Endpoint (ssPositionsApi) --# //
// #---------------------------------------# //
}/*@ngInject*/function dataImporterApi(e,t,n){// #------------------------------------------# //
// #---- API Endpoint (ssDataImporterApi) ----# //
// base endpoint url
//IMPORT TYPE Setup
var s=t.endpoint.platformImporterApi,i={"Cache-Control":'no-cache, no-store',Pragma:'no-cache'},o=[],r=s+'/v1/attempts',l=e.endpoint({url:function(e){return r+'/'+e.id},method:'GET',headers:i},'importAttempt',o),d=e.endpoint({url:r,method:'GET',headers:i},'importAttempt',o),u=e.endpoint({url:function(e){return s+'/v1/operations/attemptstatus/'+e.id+'?dt='+Date.now()},method:'GET',headers:i},'importAttempt',o),c=s+'/v1/jobs',m=s+'/v1/jobtemplates',p=e.endpoint({url:function(e){return c+'/'+e.id+'?dt='+Date.now()},method:'GET',headers:i},'importJob',o),g=e.endpoint({url:c,method:'GET',headers:i},'importJob',o),h=s+'/v1/importtypes',f=e.endpoint({url:function(e){return h+'/'+e.id},method:'GET',headers:i},'importTypeApi',o),y=e.endpoint({url:h,method:'GET',headers:i},'importTypeApi',o),v=e.endpoint({url:function(e){return m+'/'+e.id},method:'GET',headers:i},'jobTemplateApi',o),b=e.endpoint({url:m,method:'GET',headers:i},'jobTemplateApi',o),_=function(e){return m+'/'+e.jobTemplateId+'/watchers'},S=e.endpoint({url:_,method:'GET',headers:i},'jobTemplateApi',o),A=e.endpoint({url:_,method:'POST',headers:i},'jobTemplateApi',o),x=e.endpoint({url:_,method:'DELETE',headers:i},'jobTemplateApi',o),T=e.endpoint({url:function(e){return s+'/v1/organizations'+'/'+e.orgId+'/sftp'},method:'GET',headers:i},'organization',o);// header obj
// possible relationships
// ATTEMPT Setup
// generate endpoints
// Attempt status polling
// Only used for updating the userConfig currently. msvc will need to change to PATCH anything else
//JOBS Setup
// generate endpoints
// generate endpoints
// JobTemplate endpoints
// Possible actions validateSource, pause, unpause, skip, delete
// Watchers
// ORGANIZATIONS
// generate endpoints
// API endpoint methods
return{getAttempt:l,queryAttempts:d,pollAttemptStatus:u,updateAttempt:function(e,t){return n({method:'PATCH',url:s+'/v1/attempts/'+e,data:t,headers:i})},getJob:p,queryJobs:g,getImportType:f,queryImportTypes:y,startImport:function(e,t){return n({method:'POST',url:r+'/'+e,data:t,headers:i})},createImportJob:function(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return n({method:'POST',url:s+'/v1/jobs',params:{organizationId:e},data:t,headers:i})},getJobTemplate:v,queryJobTemplates:b,createJobTemplate:function(e){return n({method:'POST',url:''+m,data:e,headers:i})},updateJobTemplate:function(e,t){return n({method:'PATCH',url:m+'/'+e,data:t,headers:i})},createImportJobFromTemplateId:function(e,t){return n({method:'POST',url:m+'/'+e,data:t,headers:i})},jobTemplateActions:function(e,t,s){return'delete'===t?n({method:'DELETE',url:m+'/'+e,data:s,headers:i}):n({method:'POST',url:m+'/'+e+'/'+t,data:s,headers:i})},getJobTemplateWatchers:S,updateJobTemplateWatchers:A,deleteJobTemplateWatchers:x,getOrganizationSFTP:T};// #-- END API Endpoint (ssDataImporterApi) --# //
// #------------------------------------------# //
}/*@ngInject*/function employeeApi(e,t,n,s,i,o,r,l,d,u,c){/**
	  * Base method all calls go through.
	  * @param {*} config
	  */// Application Access without permission checks
function p(t){var i=n.when(s.ready);// if the url uses the orgId, wait for it to be ready
return m(t.url)&&(i=i.then(function(){return r.ready})),i=i.then(function(){var s=r.getOrgIdSync(),i=t.url.includes(':ORGID:');// if this url needs an orgId replacement, and we don't have an org context... abort!
if(!(i&&null==s))return i&&(t.url=t.url.replace(/:ORGID:/ig,s)),e(t).then(function(e){return 400<=e.status&&500>e.status?n.reject(e):e}).catch(function(e){-1===e.status||o.handle4XX(e)});// if this url needs an orgId, replace it
}),i}/**
	  *
	  * @param {*} url
	  *//**
	  * Gets the templates
	  * @param {*} params
	  */function m(e){var t='function'==typeof e?e({},{}):e;return!('string'!=typeof t)&&t.toLowerCase().includes(':orgid:')}// #-- END API Endpoint (ssEmployeeApi) --# //
// #--------------------------------------# //
// #--------------------------------------# //
// #---- API Endpoint (ssEmployeeApi) ----# //
// base endpoint url
var g=l.endpoint.employees,h=u.convertToValidatingSave,f=function(e){return g+'/employees/'+e.id},y=g+'/organizations/:ORGID:/employees',v=g+'/employees/ids?organizationId=:ORGID:',b=function(e){return g+'/employees/'+e.id+'/productAccess?disabled='+e.disabled},_=function(e){return g+'/employees/'+e.id+'/invitation'},S=function(e){return g+'/employees/'+e.id+'/productAccess'},A=['phoneNumbers','addresses','emails','positions','statusHistory','emergencyContacts','jobTypes','assignments','locations','employmentHistory','endorsements','paySchedules','departments','files','formInstances','supervisors'],x=h(i.endpoint({url:f,method:'GET'},'employees',A)),T=h(i.endpoint({url:y,method:'GET'},'employees',A)),k=h(i.endpoint({url:y,method:'POST'},'employees',A)),w=h(i.endpoint({url:g+'/organizations/:ORGID:/employees/search',method:'POST'},'employees',A)),P=h(i.endpoint({url:v,method:'POST'},'employees',A)),C=i.endpoint({url:function(e){return g+'/employees/'+e.employeeId+'/UpsertOrgPerson'},method:'PATCH'},'employees',A),O=i.endpoint({url:function(){return g+'/organizations/:ORGID:/employeeaccess'},method:'GET'},'employees',A),I=i.endpoint({url:function(e){return g+'/employees/'+e.flId+'/credentials'},method:'GET'},d.config.model,d.config.rel),E=h(i.endpoint({url:f,method:'GET'},'employees',A)),j=h(i.endpoint({url:function(e){return g+'/employees/'+e.id+'/fileRecords/'+e.fileId+'/url?organizationId=:ORGID:'},method:'GET'},'employees',A)),$=h(i.endpoint({url:function(e){return g+'/employees/'+e.id+'/fileRecords?organizationId=:ORGID:'},method:'POST'},'employees',A)),D=h(i.endpoint({url:function(e){return f(e)+'/files'},method:'POST'},'employees',A)),R=h(i.endpoint({url:v,method:'POST'},'employees',A)),F=h(i.endpoint({url:function(e){return g+'/employees/'+e.employeeId+'/formInstances'},method:'POST'},'employees',A)),H=i.endpoint({url:function(e){return g+'/employees/fromOrgPerson/'+e},method:'POST'},'employees',A),M=i.endpoint({url:function(e){return g+'/credentials/'+e.flId},method:'GET'},'employees',A),L=h(i.endpoint({url:g+'/employees/ids/csv',method:'POST'},'employees',A)),N=function(t){return e({url:b(t),method:'PATCH'})},B=function(t){return e({url:g+'/employees/userstatus',method:'PATCH',data:{data:{attributes:t}}})};// EMPLOYEE ENDPOINTS
// FILE ENDPOINTS
/*** DEPRECATED ***//*** Can remove after bulk invite features are release ***//*** DEPRECATED ***//*** Can remove after bulk invite features are release ***/// product access urls
// model data type
// possible relationships
// generate default endpoints
// The credentialsApi is for getting creds at the org level, but we need the model and rel info for managing employee level selections
// ** file urls **
//	add file to employee
//	add file to employee record
//	Create Employee From OrgPersonId (acts as select (GET) on subsequent calls
//  export employee directory
// START product access endpoints
// ******************************
/*** DEPRECATED ***//*** Can remove after bulk invite features are release ***//*** DEPRECATED ***//*** Can remove after bulk invite features are release ***/// ****************************
// END product access endpoints
// API endpoint methods
return{get:x,query:T,add:k,search:w,queryByIds:P,getSsn:function(e){return p({method:'GET',url:f({id:e}),params:{fields:'sSN',sensitiveFields:'ssn'}}).then(function(e){return c.glean(e,function(e){return e.data.data.attributes.sSN},'')})},invite:function(n,s){if(angular.isArray(n)){return e({url:g+'/employees/invitations',method:'POST',data:{data:{attributes:n}}})}/*** DEPRECATED ***//*** Can remove after bulk invite features are release ***/var i=t.location;return e({url:_({id:n}),method:'POST',data:{data:{attributes:{email:s,returnUrl:i.protocol+'//'+i.hostname+'/'+l.defaultModule+'/'}}}})},suspend:function(e){return N({id:e,disabled:!0})},deactivate:function(e){var t=e.map(function(e){return{id:e,enabled:!1}});return B(t)},activate:function(e){if(angular.isArray(e)){var t=e.map(function(e){return{id:e,enabled:!0}});return B(t)}/*** DEPRECATED ***//*** Can remove after bulk invite features are release ***/return N({id:e,disabled:!1})},revoke:function(t){return e({url:S({id:t}),method:'DELETE'})},productAccessStatus:function(){var t={url:g+'/organizations/'+r.getOrgIdSync()+'/productaccess',method:'GET',params:{productId:'EC',limit:999999}};return e(t)},getUserAccountCredentials:M,getFile:E,queryFile:R,addFileId:D,getFileUrlById:j,uploadFileUrl:function(e){return g+'/employees/'+e.id+'/fileRecords/'+e.fileId},preAddFile:$,getCredentials:I,addFileToRecord:F,exportEmployee:function(e){return p({url:y+'/csv',method:'POST',data:e})},getEmployeeAccess:O,exportEmployeesById:L,createFromOrgPersonId:H,upsertOrgPerson:C}}/*@ngInject*/function insightsAbsenceApi(e,t,n,s){// #---------------------------------------------# //
// #---- API Endpoint (ssInsightsAbsenceApi) ----# //
// base endpoint url
var i=t.endpoint.insightsAbsence+'/kpi',o=[];// model data type
// possible relationships
// API endpoint methods
return['absences_reason',// absencesReason(requestData)
'absences_dayofweek',// absencesDayofweek(requestData)
'absences_avg_days_per_employee',// absencesAvgDaysPerEmployee(requestData)
'employee_to_substitute_ratio',// employeeToSubstituteRatio(requestData)
'fillrate_dayofweek',// fillrateDayofweek(requestData)
'fillrate_leadtime',// fillrateLeadtime(requestData)
'subs_avg_days_worked',// subsAvgDaysWorked(requestData)
'subs_percent_nonworking_by_fillrate',// subsPercentNonworkingByFillrate(requestData)
'subs_percent_nonworking'// subsPercentNonworking(requestData)
].reduce(function(t,r){var l=n.toCamelCase(r),d=e.endpoint({url:i+'/'+r+'?organizationId=:ORGID:',method:'POST'},'InsightResults',o);return t[l]=function(e){return d({},{parameters:e}).then(function(e){return s.emit('insight-results',l,e),e})},t},{});// #-- END API Endpoint (ssInsightsAbsenceApi) --# //
// #---------------------------------------------# //
}/*@ngInject*/function insightsOrgStatsApi(e,t){// #----------------------------------------------# //
// #---- API Endpoint (ssInsightsOrgStatsApi) ----# //
// base endpoint url
var n=t.endpoint.insightsAbsence,s=n+'/orgstats/:ORGID:',i=t.endpoint.insightsRecruit,o=[],r=e.endpoint({url:s,method:'GET'},'OrganizationStatistics',o),l=e.endpoint({url:s,method:'GET'},'OrganizationStatistics',o),d=e.endpoint({url:i+'/orgstats/:ORGID:',method:'GET'},'OrganizationStatistics',o);// model data type
// possible relationships
// generate default endpoints
// Have to leave Absence as get to be backwards compatible, but also creating a duplicate with absence in name to eventually phase in
// API endpoint methods
return{get:r,getAbsence:l,getRecruit:d};// #-- END API Endpoint (ssInsightsOrgStatsApi) --# //
// #----------------------------------------------# //
}/*@ngInject*/function insightsRecruitApi(e,t,n,s){// #---------------------------------------------# //
// #---- API Endpoint (ssInsightsRecruitApi) ----# //
// base endpoint url
var i=t.endpoint.insightsRecruit+'/kpi',o=[];// model data type
// possible relationships
// API endpoint methods
return['applicants_by_referral_source','applicants_by_years_of_experience_and_subject','applicants_by_years_of_experience','average_days_to_fill_by_subject','average_days_to_fill','average_days_to_fill_by_subject_full_year','average_number_of_applications_per_open_job_posting_by_subject_detail','average_number_of_applications_per_open_job_posting_by_subject','average_number_of_applications_per_open_job_posting','hired_applicants_by_referral_source','jobs_filled_by_subject_per_district_year','jobs_posted_and_filled_per_district','jobs_posted_by_subject_per_district_month','jobs_posted_by_subject_per_district_year'].reduce(function(t,r){var l=n.toCamelCase(r),d=e.endpoint({url:i+'/'+r+'?organizationId=:ORGID:',method:'POST'},'InsightResults',o);return t[l]=function(e){return d({},{parameters:e}).then(function(e){return s.emit('insight-results',l,e),e})},t},{});// #-- END API Endpoint (ssInsightsRecruitApi) --# //
// #---------------------------------------------# //
}/*@ngInject*/function ssInteractionApi(e,t){// #---------------------------------------------# //
// #---- API Endpoint (ssMicrocredentialsApi) ----# //
// base endpoint url
var n=t.endpoint.interaction;// API endpoint methods
return{createExperience:function(t){return e({method:'POST',url:n+'/v1/experiences',data:t})}// create an experience entry
};// #-- END API Endpoint (ssResourceLibraryApi) --# //
// #---------------------------------------------# //
}/*@ngInject*/function microcredentialsApi(e,t){// #---------------------------------------------# //
// #---- API Endpoint (ssMicrocredentialsApi) ----# //
// base endpoint url
var n=t.endpoint.microcredentials,s=function(e){return function(t){return e[t]||'number'==typeof e[t]}},i=function(e){return function(t){return t+'='+e[t]}},o=function(e){return'?'+Object.keys(e||{}).filter(s(e)).map(i(e)).join('&')};// API endpoint methods
return{getEvidenceUploadUrl:function(t,s){return e({method:'GET',url:n+'/v1/microcredentials/'+t+'/evidence-requirements/'+s+'/evidence/attachment-upload-url'})},// Get a signed POST url and required form fields for uploading a file for evidence
getMicrocredential:function(t){return e({method:'GET',url:n+'/v1/microcredentials/'+t})},// Get a microcredential
getMicrocredentials:function(){return e({method:'GET',url:n+'/v1/microcredentials'})},// Get all microcredentials
getAssessments:function(t){return e({method:'GET',url:n+'/v1/assessments'+o(t)})},// Get list of assessments
getAssessment:function(t,s){return e({method:'GET',url:n+'/v1/assessments/users/'+t+'/evidence-requirements/'+s})},// Get user specific assessment
getAssessmentsSubmitters:function(t){return e({method:'GET',url:n+'/v1/assessments/users'+o(t)})}// Get list of users who has assessments
};// #-- END API Endpoint (ssResourceLibraryApi) --# //
// #---------------------------------------------# //
}/*@ngInject*/function plmEemApi(e,t,n,s){/**
	  * @description Checks if user has the Add/Edit User rights in PLM
	  *//**
	  * @description Obtain a list of all active districts from PLM-EEM.  This endpoint requires the IdmAdministrator Role.
	  */function i(e,t,n){return e+'/v1/org/'+t+'/'+n}// API endpoint methods
/**
	  * @description Obtain a list of all PLM-EEM externalIds for a given districtId.  This endpoint requires the IdmAdministrator Role.
	  */// #------------------------------------# //
// #---- API Endpoint (ssPlmEemApi) ----# //
// base endpoint url
var o=n.endpoint.plmEem;return{getDistrictList:function(){return e({method:'GET',url:o+'/v1/District/menu_list'})},getBuildings:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Building')})})},getDepartments:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Department')})})},getGrades:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Grade')})})},getCategories:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Category')})})},getCourseCodes:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'CourseCode')})})},getProviders:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Provider')})})},getGroups:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Group')})})},getPurposes:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Purpose')})})},getActivityFormats:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'ActivityFormat')})})},getPrograms:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Program')})})},getRegistrationForms:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'RegistrationForms')})})},getUserInformationForm:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'UserInformationForm')})})},getActivityForm:function(){var t=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,n=1<arguments.length&&arguments[1]!==void 0?arguments[1]:null,r=null===n?'formId='+t:'activityId='+n;return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'ActivityForm?'+r)})})},postActivity:function(n){return n?s.getOrgId().then(function(t){return e({method:'POST',url:i(o,t,'Activity'),data:n})}):t.reject('activity is empty')},patchActivity:function(n,r){return n?r?s.getOrgId().then(function(t){return e({method:'PATCH',url:i(o,t,'Activity/'+n),data:r})}):t.reject('patchData is empty'):t.reject('activityId is empty')},getDistrictUserIdentifiers:function(t,n){return e({method:'GET',url:o+'/v1/District/'+t+'/useridentifiers?identifiertype='+n})},putFileInS3Bucket:function(n){return e({method:'GET',url:o+'/v1/aws/presignedartifactimports3url?fileType='+n.type+'&fileKey='+n.name}).then(function(s){var i=t.defer();return e({method:'PUT',url:s.data,noAuth:!0,noFlUser:!0,headers:{"content-type":n.type},uploadEventHandlers:{progress:function(t){i.notify(100*t.loaded/t.total)}},data:n}).then(i.resolve.bind(i),i.reject.bind(i)),i.promise})},getUserRightCheck:function(n){return n?s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'user/right/check/'+n)})}):t.reject('adminRightId is empty')},saveUser:function(n){return n?s.getOrgId().then(function(t){return e({method:'POST',url:i(o,t,'User'),data:n})}):t.reject('user data is empty')},getUser:function(n){return n?s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'User/'+n)})}):t.reject('orgPersonId is empty')},patchUser:function(n,r){return n?r?s.getOrgId().then(function(t){return e({method:'PATCH',url:i(o,t,'User/'+n),data:r})}):t.reject('patchData is empty'):t.reject('orgPersonId is empty')},getProductAuth:function(){return e({method:'GET',url:o+'/v1/config/productauth'})},migrateFcpContentToLcr:function(t,n){return e({method:'POST',url:o+'/v1/ContentMigration/migratecontentfromfcptolcr/'+t+'?testmode='+n})},getActivity:function(n){return n?s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'activity/'+n)})}):t.reject('id is empty')},getStandards:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Standard')})})},getObjectives:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Objective')})})},getEvalForms:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'EvaluationForm')})})},getEvents:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'Event')})})},getPdeCategories:function(){return s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'PdeCategory')})})},getLearningPlansByActivity:function(n){return n?s.getOrgId().then(function(t){return e({method:'GET',url:i(o,t,'activity/'+n+'/learningplans')})}):t.reject('activityId is empty')},searchUsers:function(n,r,l){return n?s.getOrgId().then(function(t){return e({method:'POST',url:i(o,t,'user/search?pageNumber='+r+'&pageSize='+l),data:n})}):t.reject('searchFilter is empty')},searchDistricts:function(n,s,i){return n?e({method:'POST',url:o+'/v1/District/search?pageNumber='+s+'&pageSize='+i,data:n}):t.reject('searchFilter is empty')},searchContent:function(t){return s.getOrgId().then(function(n){return e({method:'POST',url:i(o,n,'content/search'),data:t})})},patchContent:function(n,r){return n?r?s.getOrgId().then(function(t){return e({method:'PATCH',url:i(o,t,'content/'+n),data:r})}):t.reject('patchData is empty'):t.reject('contentId is empty')},postContent:function(t){return s.getOrgId().then(function(n){return e({method:'POST',url:i(o,n,'content'),data:t})})}};// #-- END API Endpoint (ssPlmEemApi) --# //
// #------------------------------------# //
}/*@ngInject*/function resourceLibraryApi(e,t){// #---------------------------------------------# //
// #---- API Endpoint (ssResourceLibraryApi) ----# //
// base endpoint url
var n=t.endpoint.resourceLibrary;// USE EXPLICIT URL ONLY FOR LOCALHOST DEVELOPMENT!!!
// const baseUrl = "https://resourcelibrary-qa.ss.frontlineeducation.com/api"
// a separate endpoint that does not apply licensing logic to the query.
/**
	  * Fetches anything you want from AWS (but should really only be used for thumbnails).
	  * @param key AWS object key.
	  * @param prefix AWS bucket prefix.
	  * @returns {*} The file(s) requested from AWS.
	  * @deprecated DO NOT USE. This function is preserved purely for fetching thumbnail data.
	  *             To serve up files from AWS, use getDownloadSignedUrl instead.
	  *//* COLLECTION related calls
	    The following calls create, read, update, and delete Resource Library Collections.
	    The two standard pieces of data for these calls are:
	      - collectionId - a GUID generated & provided by the `getCollection` call, e.g.
	        {
	 	       data: {
	 		       collectionId: '6a8c042b-40f9-408c-b3a1-7441b8ab6f26'
	 	       }
	        }
	      - resourceIds - an array of Resource Library resource ids, e.g.
	        {
	 	       data: {
	 		       resourceIds: ['6a8c042b-40f9-408c-b3a1-7441b8ab6f26']
	 	       }
	        }
	 *//* Resource RATING related calls
	    The following calls create, read, and delete thumbsUp ratings on resources.
	    There are no headers for these calls, and the only query parameter passed in for these is:
	      - resourceId - the resource under consideration
	 *//**
	  * @deprecated DO NOT USE!
	  *//**
	  * Given a Resource's UID, produce the pre-signed AWS url for GET-ing the file.
	  * @param resourceUid The Resource's UID value. Required; case-insensitive.
	  * @returns {*} Angular HTTP request to get the URL.
	  */// Return resource objects from an array of ids
// **Deprecated**
// **Deprecated**
/**
	  * Get an org's licenses, along with status info on each license.
	  * @param orgId The flOrgId of the organization.
	  * @param includeNonGlobalLicenses Should non-global licenses (e.g. org-level licenses)
	  *                           be included? Optional; defaults to <code>false</code>
	  * @returns {*} HTTP request to get the licenses.
	  *//**
	  * Set the effective duration of a license for a specific organization. Null dates indicate no effective
	  * or expiration (from forever to forever).
	  *
	  * @param {string} orgId - org id from the organization service.
	  * @param {string} licenseId
	  * @param {Object} payload
	  * @param {?string} payload.effectiveDate - ISO 8601 date to make license effective from
	  * @param {?string} payload.expirationDate - ISO 8601 date to make license expire at
	  * @returns {Promise<$httpRes<OrgLicense>>}
	  *//**
	  * Tag resources to a specific license. Upserts if a resource already exists on the license.
	  *
	  * @param {string} licenseId
	  * @param {Object} payload [<resourceUid>]
	  *//**
	  * Remove resources from a specific license. Does nothing if no corresponding LicenseResource exists.
	  *
	  * @param {string} licenseId
	  * @param {Object} payload [<resourceUid>]
	  */// Gets user info i.e. First Name, Last Name for the current signed in user
// API endpoint methods
return{getFilterOptions:function(){return e({method:'GET',url:n+'/v1/terms'});/* Return a list of Resource Library filter options based on an existing resource metadata */},searchResources:function(t,s,i,o){var r=4<arguments.length&&arguments[4]!==void 0?arguments[4]:50,l=5<arguments.length&&arguments[5]!==void 0?arguments[5]:'',d=6<arguments.length&&arguments[6]!==void 0?arguments[6]:'score desc',u={rows:r,transactionId:l,sort:d};''!==t&&t!==void 0&&(u.q=t),s&&(u.filters=s),i&&(u.category=i),o&&(u.start=o);return e({method:'POST',url:n+'/v1/search/resources',data:u})},searchAllResources:function(t,s,i,o){var r=4<arguments.length&&arguments[4]!==void 0?arguments[4]:50,l=5<arguments.length&&arguments[5]!==void 0?arguments[5]:'',d=6<arguments.length&&arguments[6]!==void 0?arguments[6]:'score desc',u={rows:r,transactionId:l,sort:d};''!==t&&t!==void 0&&(u.q=t),s&&(u.filters=s),i&&(u.category=i),o&&(u.start=o);return e({method:'POST',url:n+'/v1/search/all-resources',data:u})},postResource:function(t,s){return e({method:'POST',url:n+'/v1/resources?'+(s||''),data:t});/* Create a new Resource. */},getDefaultImgs:function(){//> info( '%c%s' + '%c request:', 'font-weight: bold', 'getDefaultImgs\'', 'font-weight: normal')
//> info( "request:", request )
return e({method:'GET',url:n+'/v1/files'});/* Return the collection of Resource Library's default images & icons */},getMcPrivileges:function(){//> info( '%c%s' + '%c request:', 'font-weight: bold', 'getMcPrivileges\'', 'font-weight: normal')
//> info( "request:", request )
return e({method:'GET',url:n+'/v1/privileges/mcs'});/* Return the collection of MicroCredential privileges for the specified user */},ltiResources:function(t){// base lti endpoint url is on the 'lti' path _not_ the 'api' path
var s=n.replace(/api$/,'lti'),i={method:t.method,url:s,data:t.payload};/*
	  This is a method that will request an LTI or SingleSignOn link
	  action will look something like this:
	  {
	  	method: 'POST',
	  	uri: 'http://resourcelibrary-qa.ss.frontlineeducation.com/lti',
	  	payload: {
	  		launch_url: 'https://demo.edivate.com',
	  		custom_item_type: 'video',
	  		custom_item_id: '813',
	  	},
	  }
	  It will return a formatted URL
	  */return e(i)},trackResourceAction:function(t){return e({method:'POST',url:n+'/v1/user/actions',data:t})},getCollection:function(t){return e({method:'GET',url:n+'/v1/collections/'+t});/* Return a list of Resource Library resourceIds based on an existing CollectionId */},putCollection:function(t,s){//> info( '%c%s' + '%c request:', 'font-weight: bold', 'putCollection\'s', 'font-weight: normal')
//> info( request )
return e({method:'PUT',url:n+'/v1/collections/'+s,data:{resourceIds:t}});/* Update an existing Resource Library Collection */},postCollection:function(t){return e({method:'POST',url:n+'/v1/collections',data:{resourceIds:t}});/* Create a new Resource Library Collection based on an array of resources.
	     Returns the new collection's collectionId. */},deleteCollection:function(t){//> info( '%c%s' + '%c request:' + '%o', 'font-weight: bold', 'deleteCollection\'s', 'font-weight: normal', request )
return e({method:'DELETE',url:n+'/v1/collections/'+t});/* Delete an existing Resource Library Colletion */},getTypeDefs:function(){return e({method:'GET',url:n+'/v1/typedefs'})},getCompletionForResources:function(t){return e({method:'GET',url:n+'/v1/user/status/resources',params:{resourceIds:t,completed:!0}})},getAWSImgs:function(t,s){return e({method:'GET',url:n+'/v1/files/aws',params:{key:t,prefix:s}});/* Return the collection of Resource Library's default images & icons */},getRating:function(t){var s=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],i=s?'/user':'';/*
	  		Returns _either_
	      - (forUser === false) a count of thumbsUp for the resource (default)
	      or
	      - (forUser === true) a boolean for whether an individual user has
	  		                     thumbed up the resource
	  *///> info( '%c%s' + '%c request:' + '%o', 'font-weight: bold', 'getRating\'s', 'font-weight: normal', request )
return e({method:'GET',url:n+'/v1/rating/'+t+i})},postRating:function(t){//> info( '%c%s' + '%c request:' + '%o', 'font-weight: bold', 'postRating\'s', 'font-weight: normal', request )
return e({method:'POST',url:n+'/v1/rating/'+t});/*
	  		Return a boolean indicating the user has a thumbsUp for the resource
	  */},deleteRating:function(t){//> info( '%c%s' + '%c request:' + '%o', 'font-weight: bold', 'deleteRating\'s', 'font-weight: normal', request )
return e({method:'DELETE',url:n+'/v1/rating/'+t});/*
	  		Return a boolean indicating the user has a thumbsUp for the resource
	  */},getVideo:function(t,s){return e({method:'GET',url:n+'/v1/resources/videos/'+t+'/provider/'+s});/* returns the video details.
	  	videoId - id of the video,
	  	provider - source of video ( e.g. edivate, youtube, vimeo )
	  	*/},getResourceAction:function(t){return e({method:'GET',url:n+'/v1/resources/'+t+'/action'})},getResource:function(t,s){return e({method:'GET',url:n+'/v1/resources/'+t+'?'+(s||'')})},getResources:function(t,s,i){return e({method:'GET',url:n+'/v1/resources?limit='+t+'&offset='+s+'&q='+i});/*
	  This is a method that returns all resources created by the requesting user
	  */},getResourcesV2:function(t,s,i){var o={resourceIds:t};s&&(o.limit=s),i&&(o.offset=i);return e({method:'GET',url:n+'/v2/resources',params:o})},postVideoEvents:function(t,s){return e({method:'POST',url:n+'/v1/resources/videos/'+t+'/events',data:s});/*
	  This is a method that record events as well as viewing progress whenever a user interacts witht he video player:
	  {
	  	method: 'POST',
	  	uri: '${baseUrl}/v1/resources/videos/{{videoId}}/events',
	  	payload: {
	  	  "providerId": "edivate",
	  	  "event": "played",
	  	  "duration": "string",
	  	  "viewingHash": "string",
	  	  "videoURL": "string"
	  	}
	  }
	  It will return an object
	  */},// `payload.providerId<String>`=id of the video service provider. (e.g. `edivate`)<br/> `payload.event<String>`=Type of event to be recorded. (e.g.`played`, `paused`, `watched`, `skipped`, `completed` )<br/> `payload.duration<String>`=TimeRanges of the video being watched by the user<br/>`payload.viewingHash <String>`=Id of the user's viewing session<br/>`payload.videoUrl <String>`=The url where the user has watched the video
getUploadSignedUrl:function(t,s){return e({method:'GET',url:n+'/v1/files/presignedurl?filename='+t+'&prefix='+s})},getDownloadSignedUrl:function(t,s){return e({method:'GET',url:n+'/v1/files/url/aws?key='+t+'&prefix='+s});//> error('I AM DEPRECATED! You should not be invoking me!');
},getDownloadSignedUrlV2:function(t){return e({method:'GET',url:n+'/v2/files/url/'+t})},deleteResource:function(t,s){return e({method:'DELETE',url:n+'/v1/resources/'+t+'?type='+s});/*
	  This is a method that deletes a resource, returns boolean
	  */},postResourceInteraction:function(t,s){return e({method:'POST',url:n+'/v1/resources/'+t+'/interaction',data:s});/*
	  This is a method that send interaction from resource library to interaction service
	  */},getLicensesByOrgId:function(t){var s=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];return e({method:'GET',url:n+'/v1/organizations/'+t+'/licenses',params:{include_non_global_licenses:s}})},postLicenseDuration:function(t,s,i){return e({method:'POST',url:n+'/v1/organizations/'+t+'/licenses/'+s+'/duration',data:i})},getUserHistory:function(t){return e({method:'GET',url:n+'/v1/user/interactions',params:t})},getUserHistoryV2:function(t){return e({method:'GET',url:n+'/v2/user/interactions',params:t})},getUserInteraction:function(t){/*
	  	This is a method to get user interaction for a specific resource.
	  	Sample Data Object: {
	  		id: edivate-video-123,
	  		query: {
	  			limit: 10,
	  			offset: 0,
	  			sortyBy: 'eventDate',
	  			sortOrder: 'ASC'
	  		}
	  	}
	  */var s=Object.keys(t.query).map(function(e){return e+'='+t.query[e]}).join('&'),i={method:'GET',url:n+'/v1/user/interactions/'+t.id+'?'+s};return e(i)},postResourcesToLicense:function(t,s){return e({method:'POST',url:n+'/v1/licenses/'+t+'/resources',data:s})},getUserHistoryExport:function(t){return e({method:'GET',url:n+'/v1/user/interactions',params:t,responseType:'blob'})},getUserHistoryExportV2:function(t){return e({method:'GET',url:n+'/v2/user/interactions',params:t,responseType:'blob'})},deleteResourcesFromLicense:function(t,s){return e({method:'POST',url:n+'/v1/licenses/'+t+'/delete-resources',data:s})},getCurrentUser:function(){return e({method:'GET',url:n+'/v1/user'})}};// #-- END API Endpoint (ssResourceLibraryApi) --# //
// #---------------------------------------------# //
}/*@ngInject*/function scormCloudApi(e,t){/**
	  * @description Private function to format an array of strings as "tags" parameters for attaching to a url string.
	  * @param {[string]} tagsArray An array of strings representing the library tags to filter on.
	  * @returns {string} Example: "?tags=abc&tags=def"
	  */function n(e){var t='';return Array.isArray(e)?(t+='?',e.forEach(function(e){'?'!=t&&(t+='&'),t+='tags='+e}),t):t}/**
	  * @description Request a collection of all course summary information from the API.
	  *//**
	  * @description Request the information for a particular course from the API.
	  * @param {string} courseId The ID for the course you wish to get course information from the API.
	  *//**
	  * @description Request a collection of course information from the API, filtered by the library tags provided in the parameter array.
	  * @param {[string]} tagsArray An array of strings identifying the library catalog tags to filter the collection.
	  *//**
	  * @description Request a launch link for a course.  If the specified user (from the access token) has already registered for the specified course a link for that registration will be returned otherwise the user will be registered for the course and the new link returned.
	  * @param {string} courseId The course ID to get a registration/launch link for.
	  * @param {string} firstName First name of the user for record purposes.
	  * @param {string} lastName Last name of the user for record purposes.
	  * @param {string} redirectUrl URL to redirect to when the user exits the course viewer.
	  *//**
	  * @description Request course details including the launch link for a course.  If the specified user (from the access token) has already registered for the specified course a link for that registration will be included but the user will not be automatically registered by this call.
	  * @param {string} courseId The course ID to get a registration/launch link for.
	  * @param {string} redirectUrl URL to redirect to when the user exits the course viewer.
	  */// #----------------------------------------# //
// #---- API Endpoint (ssScormCloudApi) ----# //
// base endpoint url
// API endpoint methods
var s=t.endpoint.scormCloud,i=s+'/course';return{getAllCourses:function(){return e({method:'GET',url:''+i})},// Get a resource containing a collection of all Courses available on the Scorm Cloud Application namespace.
getCourseById:function(t){return e({method:'GET',url:i+'/'+t})},// Get a resource representing a single Course selected by the parameter.
getCoursesByTags:function(t){return e({method:'GET',url:i+'/bytags'+n(t)})},// Get a resource containing a collection of Courses available on the Scorm Cloud Application namespace that contain a tag from the parameter array.
getCourseLaunchLink:function(t,n,s,o){return e({method:'GET',url:i+'/getLaunchLink/'+t+'/'+n+'/'+s+'?redirectUrl='+o})},// If the user is not currently registered for the specified course, register the user then provide the launch link for the course.If the user is already registered, return the existing launch link for the course. : warning: * Use caution if you are testing with this endpoint as each new registration incurrs additional cost on our subscription with the vendor.*
getCourseDetails:function(t,n){return e({method:'GET',url:i+'/getCourseDetails/'+t+'?redirectUrl='+n})}// Get the details of a particular course including the registration launch link if it already exist.This will not register a user for a course if they do not currently have a registration.
};// #-- END API Endpoint (ssScormCloudApi) --# //
// #----------------------------------------# //
}/*@ngInject*/function seiUserAccessApi(e,t,n){// #-------------------------------------------# //
// #---- API Endpoint (ssSeiUserAccessApi) ----# //
// API endpoint methods
var s=n.endpoint.seiUserAccess;return{configuration:function(t){return e.get(s+'/'+'api/gd/configuration'+'/'+t)},register:function(t){return e.get(s+'/'+'api/gd/register'+'/'+t)}};// #-- END API Endpoint (ssSeiUserAccessApi) --# //
// #-------------------------------------------# //
}// Route Directive
/*@ngInject*/function route(e,t,n){function s(e){var t=e.substr(1).replace(/\//g,'-'),n=e.substr(e.lastIndexOf('/')+1);return{pathKey:t,viewName:n}}return{restrict:'E',priority:999,scope:!0,replace:!0,template:function(e,t){// replace segment placeholders with their directive counterpart
for(var o=s(t.folder),r=o.pathKey,l=e.find('segment'),d=l.length;d--;){var u=l.eq(d),c=u.attr('name'),p=n.toDashCase('segment '+r+' '+c),m=Array.from(u[0].attributes).filter(function(e){return'name'!==e.name}).map(function(e){return e.name+'="'+e.value+'"'}).join(' ');u.replaceWith('<'+p+' folder="'+t.folder+'" '+m+'></'+p+'>')}return'<section folder="'+t.folder+'" class="route-'+r+'">'+e.html()+'</section>'},/*@ngInject*/controller:['$scope',function(e){e.routeData={module:t.module}}],link:{pre:function(e,t,n){Object.assign(e.routeData,s(n.folder))}}}}/*@ngInject*/function registerActionBundles(e,t,n){var s=e.isPermitted,i=e.isNotPermitted;// eslint-disable-line no-unused-vars
e.addPermittedActionBundle('ViewOthers',function(){var s=t.securityGroupScope,i=e.securityScopes();return n.isViewOthers({scEnum:s,securityScopes:i})},!0)}/*@ngInject*/function logic(){// logic api
return{isViewOthers:function(e){var t=e.scEnum,n=e.securityScopes;if(null==n)return!0;var s=!n.length||n.filter(function(e){return!e.locked}).some(function(e){return[t.all,t.specific,t.directReports].includes(e.employeeAdministrationContext)});return s}}}/*@ngInject*/function allowFullscreen(e,t){var n=angular.element(document.getElementById('super-suit'));e.$on('$locationChangeSuccess',function(){n.removeClass('allow-fullscreen')}),t.on('allow-fullscreen',function(){n.addClass('allow-fullscreen')},!1)}/*@ngInject*/function setupAmbientStates(){ambient.init({"responsive-modules":{width:{min:1e3}},"viewport-updates":{viewport:{}}},0)}/*@ngInject*/function bootstrapLogic(e,t,n,s,i,o,r){function l(e){u.promise.then(function(){var t=s.getUserContextSync(),n=p(t,function(e){return!!e.OrganizationId},!1),i=p(t,function(e){return!0===e.Internal},!1);(n||i)&&(angular.bootstrap(document.getElementById('fl-app-'+e.bootstrapName),[e.bootstrapName]),m=e)}// if we do not have an org context and this product is not an
// internal frontline app, don't bootstrap a ui-module because
// the users needs to first pick an org/app context
//> log('aborting the ui-module bootstrap')
//> groupEnd('setup app')
)}function d(e){m&&e===m.bootstrapName&&l(e)}var u=e.defer(),c=angular.element(document.getElementById('fl-app')),p=i.glean,m=null;// resolve the reloader defer so that the module bootstrap process can continue
o.on('preloader-complete',u.resolve,!1);n.ss.events.on('ui-module-deactivate',function(e){r.clear(),angular.element(document.getElementById('fl-app-'+e.bootstrapName)).injector().get('$rootScope').$destroy(),c.empty()}),n.ss.events.on('ui-module-activate',function(e){t.info('SETUP APP',e);return e.isValid||['select'].includes(e.urlValue)?void(c.empty(),c.append('<div id="fl-app-'+e.bootstrapName+'"><ui-view></ui-view></div>'),l(e)):void n.ss.events.fire('page-error-404');// setup the markup for bootstrapping
},{greedy:!0}),n.registerUiModule=d}/*@ngInject*/function routerConfig(e){e.html5Mode(!0)}/*@ngInject*/function setup403route(e){e.state('403',{templateUrl:'_error-403.html'})}/*@ngInject*/function setupRoutePermissions(e,t,n,s){e.$on('$stateChangeStart',function(e,i,o){// use the permissions service to see if we are allowed to view this route
function r(){var e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:function(){},r=t.href(i,o);// isPermittedRoute accepts a url, so construct one from the state
// that we are currently trying to transition to
// no url, don't check permissions. We are either going to an abstract
// route, or a route that exists in another ui-module. That ui-module
// will handle the permission check when it bootstraps
null!=r&&(n.isPermittedRoute(r)||(e(),t.transitionTo('403'),s.emit('preloader-complete')))}0===n.ready.$$state.status?n.ready.then(function(){return r()}):r(e.preventDefault)})}/////
// super-suit
//
/*@ngInject*/function handle404Routes(e){e.otherwise(function(e){var t=window.location.pathname.split('/')[1],n=e.get('ssEventSvc'),s=e.get('$log');(t===activeModule||null==activeModule)&&(s.error('404'),n.emit('error-404'))})}// /*@ngInject*/
function handle404Events(e,t){t.on('error-404',function(){e.ss.events.fire('page-error-404'),t.emit('preloader-complete')},!1)}/////
// super-setup
//
/*@ngInject*/function overrideOtherwiseRule(e){e.otherwise(function(){})}/*@ngInject*/function setupNoAccessRoute(e){e.state('app-failure',{templateUrl:'_error-app-failure.html',/*@ngInject*/controller:['$rootScope','ssStorage','ssAuthSvc',function(e,t,n){t.clearAll();// remove the sidekick components from the dom... because we're invalid
var s=Array.from(document.getElementsByClassName('sidekick'));s.forEach(function(e){return e.parentNode.removeChild(e)}),e.go={editSettings:function(e){e.preventDefault(),n.editSettings()},logout:function(e){e.preventDefault(),n.signout()}}}]})}/*@ngInject*/function listenForNoAccessEvents(e,t,n){n.on('error-no-access',function(){var s=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};e.error={title:'You don\'t have access',message:'It looks like you do not have access. If you feel this is an error, please contact your administrator.',isFrontlineUser:!1!==s.isFrontlineUser// default to true
},t.transitionTo('app-failure'),n.emit('preloader-complete')},!1)}/*@ngInject*/function setupPreloader(e,t,n,s,i,o,r,l,d,u,c,p){e.all([s.ready,i.ready,o.ready,r.ready,l.ready,u.ready,c.ready,p.ready]).then(function(){return n.emit('preloader-complete')}),n.on('preloader-complete',t.ss.util.killPreLoader,!1)}/*@ngInject*/function rootUtils(e){e.utils={findInParentScope:function(t,n){return t in n?n[t]:null==n.$parent?null:e.utils.findInParentScope(t,n.$parent)}}}/*@ngInject*/function setupRootTools(e){e.safeApply=function(t){var n=e.$$phase;'$apply'===n||'$digest'===n?t&&'function'==typeof t&&t():e.$apply(t)},e.safeDigest=function(t){var n=t.$$phase,s=e.$$phase;'$apply'!==n&&'$digest'!==n&&'$apply'!==s&&'$digest'!==s&&t.$digest()}}/*@ngInject*/function router(e){e.state('base',{url:'/:module',template:'<ui-view></ui-view>',resolve:{features:/*@ngInject*/['ssFeatureSvc',function(e){return e.ready}],permissions:/*@ngInject*/['ssPermissionsSvc',function(e){return e.ready}],locations:/*@ngInject*/['ssLocationSvc',function(e){return e.ready}],departments:/*@ngInject*/['ssDepartmentSvc',function(e){return e.ready}],jobTypes:/*@ngInject*/['ssJobTypeSvc',function(e){return e.ready}]}})}/*@ngInject*/function moduleChangeDetection(e,t,n,s,i,o,r,l){t.$on('$destroy',t.$on('$locationChangeStart',function(e,t,n){var s=getModuleFromUrl(t),i=getModuleFromUrl(n);e.defaultPrevented||(l.emit('location-change-start',e,t,n),s!==i&&l.emit('ui-module-change-start',s,i))})),t.$on('$destroy',t.$on('$locationChangeSuccess',function(t,n,s){var i=getModuleFromUrl(n),o=getModuleFromUrl(s);e.ss.events.fire('route-change',n,s),l.emit('location-change-success',t,n,s),i!==o&&l.emit('ui-module-change-success',i,o)}))}/*@ngInject*/function syncAppLocationChanges(e,t,n){e.$on('$destroy',e.$on('$locationChangeSuccess',function(e,t,s){n.emit('ss-url-changed',t,s)})),n.on('ss-url-changed',function(){e.$applyAsync(function(){e.$emit('setHighlightedMenu')})},e)}/*@ngInject*/function handleRedirectionRoutes(e,t,n,s){var i=s.glean;e.$on('$stateChangeStart',function(e,s,o){// "redirectToState" can be a dotted state path (i.e. base.employee.personal)
// or it can be an object with attributes for "state" and "params" where the
// params attr has the stateParams object. by default, the existing stateParams
// will be passed on to the substate, setting inherit to false in the
// "redirectToState" config object will prevent this.
if(null!=s.redirectToState){e.preventDefault();var r=s.redirectToState,l=i(r,function(){return r.state},r),d=i(r,function(){return r.params},{}),u=i(r,function(){return!1!==r.inherit},!0);'string'!=typeof l&&t.error('INVALID ROUTE redirectToState value:',r);var c=u?Object.assign(o,d):d;n.transitionTo(l,c,{location:'replace'})}})}function getModuleFromUrl(e){var t=e.substr(e.indexOf(location.host)+location.host.length),n=t.match(/^\/([\w-]*)/i);return 2===n.length?n[1]:''}/*@ngInject*/function stateDecorator(e){e.decorator('parent',function(e,t){// pass through to default .parent() function
return e.self.$$state=function(){return e},t(e)})}/*@ngInject*/function intercept401(e,t){return{responseError:function(n){return n.config.ignore401?n:(401===n.status&&t.authenticate(),e.reject(n))}}}/*@ngInject*/function interceptAddVersionNumber(){return{request:function(e){var t=e.data;return t&&t.data&&t.data.attributes&&null!=t.data.attributes.ownerVersionNumber&&(e.params=e.params||{},e.params.version=t.data.attributes.ownerVersionNumber,delete t.data.attributes.ownerId,delete t.data.attributes.ownerVersionNumber),e}}}/*@ngInject*/function interceptAuth(e){return{request:function(t){return t.noAuth?t:(e.token.access&&0<e.token.access.length&&(t.headers.Authorization='Bearer '+e.token.access),t)}}}function configInterceptors(e){e.interceptors.push('interceptAuth'),e.interceptors.push('interceptAddVersionNumber'),e.interceptors.push('interceptFlUser'),e.interceptors.push('intercept401')}/*@ngInject*/function interceptFlUser(){function e(e){return e.noFlUser?e:(null!=currentAccessRecord&&(e.headers.FlUser=currentAccessRecord),e)}return{request:e}}/*@ngInject*/function populateFlUserForInterceptor(e){e.getUserContext().then(function(t){var n=Object.assign({},t,{UserKey:e.getIdentityByTypeSync('employee')});currentAccessRecord=JSON.stringify(n)})}/* globals sidekick *//*@ngInject*/function hookupHelp(e,t,n,s,i){e.getAsync('help-menu').then(function(e){/**
	   * Remove help items based on feature flag from app-config
	   * @param {any} item A menu item object from the app specific menu json blob eg: employee-center.json
	   */function o(e){// remove item according to feature flags
//New feature flags
// Old feature flags
return!(e.hideWhenFlagOn&&e.hideWhenFlagOnResolved)&&(!e.hideWhenFlagOff||e.hideWhenFlagOffResolved)&&!(e.hideWhenFeatureOn&&s.isOn(e.hideWhenFeatureOn))&&!(e.hideWhenFeatureOff&&s.isOff(e.hideWhenFeatureOff))}function r(e){// Resolve Config Cat flags
return e.forEach(function(e){e.hideWhenFlagOn&&(e.hideWhenFlagOnResolved=i.checkState(e.hideWhenFlagOn)),e.hideWhenFlagOff&&(e.hideWhenFlagOffResolved=i.checkState(e.hideWhenFlagOff))}),Promise.all(e.map(function(e){// Non-MIFD Flags
return e.hideWhenCCFlagOn?n.checkState(e.hideWhenCCFlagOn).then(function(t){e.hideWhenFlagOn=!0,e.hideWhenFlagOnResolved=t}):e.hideWhenCCFlagOff?n.checkState(e.hideWhenCCFlagOff).then(function(t){e.hideWhenFlagOff=!0,e.hideWhenFlagOffResolved=t}):void 0}))}t.ready.then(function(){r(e.articles).then(function(){e.articles=e.articles.filter(o),sidekick.store.set('help',e)})})})}/* globals sidekick *//*@ngInject*/function hookupIdm(e,t,n,s,i,o,r,l,d,u){var c=sidekick,p=c.store,m=c.events,g=t(/*#__PURE__*/regeneratorRuntime.mark(function t(o){var l,c,g,h,f,y,v,b,_;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p.onValueOnce('idm-data',function(e){var t=e.productId;if('universal'===t.toLowerCase()){var n=u.load('productId');n||(null==e.access.find(function(e){return'ec'===e.ProductId.toLowerCase()})?n=e.access[0].ProductId:n='ec');var s=Object.keys(i.productMap)// Reverse map the buildConfig.productMap
.find(function(e){return i.productMap[e].toLowerCase()===n.toLowerCase()});null==s&&(s=n);var o='/'+s.toLowerCase()+d.location.href.slice(d.location.origin.length+10);window.location.replace(o)}else u.save('productId',t,{expires:null,persistent:!0})}),l=e.search(),c=l.currentOrg,g=l.orgId,t.next=4,n.profileId();case 4:return h=t.sent,f=p.get('fl-internal-product-ids')||[],y=f.includes(o.toLowerCase()),t.next=9,n.isImpersonating();case 9:return v=t.sent,null==v||y||(h=v,m.emit('header.impersonation',!0),m.on('header.end-impersonation',n.endImpersonate,{terminal:!0})),t.next=13,n.isImpersonatingV2();case 13:return b=t.sent,p.set('idm',{idGatewayUrl:i.idmGatewayUrl,getAccessToken:function(){return n.token.access},flId:h,product:o,currentOrg:c||g,isImpersonatingV2:b}),c&&e.search('currentOrg',null),t.next=18,s.getActiveOrg();case 18:_=t.sent,r.getAsync('init').catch(function(){return p.set('current-org',{id:_.id,name:_._name,phone:_.formattedPhone,email:_._email,fax:_.formattedFax})});case 20:case'end':return t.stop();}},t,this)}));m.on('idm.no-access',function(e){return o.emit('error-no-access',e)}),l.getProductId().then(g)}/*@ngInject*/function initExternalSidekick(e,t,n){e.getAsync('init').then(function(e){if('true'===sessionStorage.getItem('automation-ignore-remote-side-nav'))return void n.info('WARNING: You have sessionStorage.automation-ignore-remote-side-nav configured, so that means that the external sidenav will not be loading.');// just make sure that we have a reasonable value here
// bootstrap in the init script for execution
if('string'==typeof e.script){var s=t.sidekickExternal[e.script];// we found a value here right? ...right?
if('string'==typeof s){var i=document.createElement('script');i.setAttribute('src',s),angular.element(document.head).append(i)}}})}/* globals sidekick *//*@ngInject*/function hookupNav(e,t,n,s,i,o,r,l,d){var u=RegExp.prototype.test.bind(/^https?:\/\//);i.getAsync('left-nav').then(function(e){/**
	   * Recursively checks the visibility of a menu item (and its children) based upon the Feature Flag (legacy and new) and the permissions to the route
	   * @param {any} item A menu item object from the app specific menu json blob eg: employee-center.json
	   */function i(e){var t=!1;// remove item according to feature flags
// Check the flags first, as we may have routes that have children where we would want to hide the whole branch vs each individual leaf
// If item has both old and new feature flag attributes then warn dev and use new
//New feature flags
// Old feature flags
// If the node has children, recurse into the next level
return((e.hideWhenFeatureOff||e.hideWhenFeatureOn)&&(e.hideWhenFlagOff||e.hideWhenFlagOn)&&s.warn('Nav item \''+e.title+'\' is using both current and deprecated feature flags. Please remove references to "hideWhenFeatureOff" and "hideWhenFeatureOn".'),!(e.hideWhenFlagOn&&e.hideWhenFlagOnResolved))&&(!e.hideWhenFlagOff||e.hideWhenFlagOffResolved)&&!(e.hideWhenFeatureOn&&r.isOn(e.hideWhenFeatureOn))&&!(e.hideWhenFeatureOff&&r.isOff(e.hideWhenFeatureOff))&&(angular.isArray(e.children)&&e.children.length?(e.children=e.children.filter(i),t=!!e.children.length):e.url?t=o.isPermittedRoute(e.url):t=!0,t)}function c(e){// Custom checks
// Non-MIFD Flags
return angular.isArray(e.children)&&e.children.length&&e.children.forEach(function(e){c(e)}),e.hideWhenFlagOn&&(e.hideWhenFlagOnResolved=d.checkState(e.hideWhenFlagOn)),e.hideWhenFlagOff&&(e.hideWhenFlagOffResolved=d.checkState(e.hideWhenFlagOff)),e.hideWhenCustomFlagOn?p[e.hideWhenCustomFlagOn]().then(function(t){e.hideWhenFlagOn=!0,e.hideWhenFlagOnResolved=t}):e.hideWhenCustomFlagOff?p[e.hideWhenCustomFlagOff]().then(function(t){e.hideWhenFlagOff=!0,e.hideWhenFlagOffResolved=t}):e.hideWhenCCFlagOn?l.checkState(e.hideWhenCCFlagOn).then(function(t){e.hideWhenFlagOn=!0,e.hideWhenFlagOnResolved=t}):e.hideWhenCCFlagOff?l.checkState(e.hideWhenCCFlagOff).then(function(t){e.hideWhenFlagOff=!0,e.hideWhenFlagOffResolved=t}):void 0}o.ready.then(function(){Promise.all(e.menuItems.map(function(e){return c(e)})).then(function(){e.menuItems=e.menuItems.filter(i),sidekick.store.set('nav',e)})}),sidekick.events.on('nav.menu-item-clicked',function(e,s){// if the url points to an external server, let the browser perform
// it's normal redirection
u(e.url)||(s.preventDefault(),t.$applyAsync(function(){return n.url(e.url)}));// if this is internal to supersuit, handle it with $location so we
// don't do a full browser reload
});var p={isDataImporterEnabled:function(){return Promise.all([l.checkState('fc_di_enable_data_importer'),l.checkState('global_hrms')]).then(function(e){var t=slicedToArray(e,2),n=t[0],s=t[1];return!s&&n})},isGlobalOrSharedProfile:function(){return Promise.all([l.checkState('global_fc_shared_employee'),l.checkState('global_data_integration')]).then(function(e){var t=slicedToArray(e,2),n=t[0],s=t[1];return n||s})}}})}/* globals sidekick *//*@ngInject*/function hookupNotifications(e,t,n,s){t.getAsync('notifications').then(function(){function e(e){null!=e&&(e=e.map(function(e){return{id:e.id,timestamp:e._createdUtc,title:e._subject,content:e.shortContent,unread:!e.isRead}}));// if the new notification data is the same as the old, no need to go further
angular.equals(i,e)||(null!=e&&(i=e),sidekick.store.set('notifications',i));// if we have new notification data, save it for future use
}function t(e){s.markAsRead(e.id),i.find(function(t){return t.id===e.id}).unread=!1,sidekick.store.set('notifications',i)}var i;n.on('notifications.updated',e,!1),sidekick.events.on('notification.delete',function(t){s.remove(t.id).then(function(){i=i.filter(function(e){return e.id!==t.id}),e()})}),sidekick.events.on('notification.mark-as-read',t),s.getNotifications().then(e)})}/* globals sidekick *//*@ngInject*/function hookupSearch(e,t,n,s,i,o,r,l,d){n.getAsync('search').then(function(n){function u(){null!=p&&p.$abort(),p=o(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.assign({},{include:'positions,jobtypes,locations,assignments'},c(m,'fullname')),e.next=3,s.query(t);case 3:g=e.sent,n=g.map(function(e){if(e._assignments.length){var t=e._assignments.find(function(e){return e._isPrimary});t&&(e.position=e._positions.find(function(e){return e.id===t._positionId})),e.position&&(e.position.name=r.mapName(e.position._name,h))}var n='<span>'+e._firstName+' '+e._lastName+'</span>',s=null==e.position?'':'<small>'+e.position.name+'</small>',i=null==e.thumb?'':'<span class="thumb"><img alt="" src="'+e.thumb+'"></span>';return'<a href="#">'+n+' '+s+' '+i+'</a>'}),sidekick.events.emit('header.search.results',n),p=null;case 7:case'end':return e.stop();}},e,this)}))()}/**
	   * Create a proper querystring parameter given a value, filter property name
	   * @param {string} val The filter value to pass up
	   * @param {string} type The parameter name of the filter object
	   */function c(e,t){var n={};return null==e?null:(n['filter['+t+']']=e,n)}var p=void 0,m=void 0,g=void 0,h=[];sidekick.store.set('search',n),r.getByExternalId('position.types').then(function(e){h=e});var f=i(function(){u()},350),y=i(function(e){m=e,f()},350);sidekick.events.on('header.search',y),sidekick.events.on('header.search.item-clicked',function(n){var s='';e.$applyAsync(function(){l.checkState('global_data_integration').then(function(e){e?g[n]._orgPersonId?s='/ec-directory/person-detail/'+g[n]._orgPersonId+'/personal':d.error('The user does not have a valid ID and therefore their record cannot be accessed'):s='/ec-employee/record/'+g[n].id+'/personal',t.path(s)})})})})}/* globals sidekick *//*@ngInject*/function hookupUserInfo(e){sidekick.events.on('header.user-info.account-settings',e.editSettings,{terminal:!0}),sidekick.events.on('session.logout',e.signout,{terminal:!0})}// #------------------------------------# //
// #---- Mutator (mutatorAddresses) ----# //
/*@ngInject*/function addressesMutator(e,t){return{// sets obj.example to obj.name.toUpperCase()
isCurrent:function(e){var n=t(),s=t(e._from),i=t(e._to);return s.isSameOrBefore(n)&&i.isAfter(n)},isPast:function(e){var n=t(),s=t(e._to),i=t(e._from);return i.isBefore(n)&&s.isSameOrBefore(n)},isFuture:function(n){var s=t(),i=t(n._from),o=t(n._to);return i.isSameOrAfter(s)&&e.isForeverFuture(o)}}}// #---- End Mutator (mutatorAddresses) ----# //
// #----------------------------------------# //
// #------------------------------------# //
// #---- Mutator (mutatorEmployees) ----# //
/*@ngInject*/function employeesMutator(e,t,n,s){return{bestContactNumber:function(t){var n=t._phoneNumbers;if(null!=n&&0!==n.length){var s=e.usageType,i=s.personal,o=s.work,r=s.other,l=function(e){return!e.isEmpty&&!0===e._isPrimary&&e._usageType!==o},d=function(e){return!e.isEmpty&&e._usageType===i},u=function(e){return!e.isEmpty&&e._usageType===r},c=function(e){return!e.isEmpty&&e._usageType===o};return n.find(c)||n.find(l)||n.find(d)||n.find(u)||null}},bestContactEmail:function(t){var n=t._emails;if(null!=n&&0!==n.length){var s=e.usageType,i=s.personal,o=s.work,r=s.other,l=function(e){return!0===e._isPrimary&&e._emailAddress&&e._emailType===o},d=function(e){return e._emailAddress&&e._emailType===i},u=function(e){return e._emailAddress&&e._emailType===r},c=function(e){return e._emailAddress&&e._emailType===o},p=n.find(l)||n.find(c)||n.find(d)||n.find(u);return null==p?null:p._emailAddress}},/**
	   * TODO Deprecate
	   *
	   * @param {Object} emp
	   *
	   * @return {Object} Current Status
	   */statusCurrent:function(e){return null==e._statusHistory||0===e._statusHistory.length?void 0:e._statusHistory.find(function(e){return e.isCurrent})},/**
	   * TODO Deprecate
	   *
	   * @param {Object} emp
	   *
	   * @return {Array} Future Statuses
	   */statusFuture:function(e){return null==e._statusHistory||0===e._statusHistory.length?void 0:n.sortByObjectKey(e._statusHistory.filter(function(e){return e.isFuture}),'_from',!0)},/**
	   * TODO Deprecate
	   *
	   * @param {Object} emp
	   *
	   * @return {Array} Past Statuses
	   */statusPast:function(e){return null==e._statusHistory||0===e._statusHistory.length?void 0:n.sortByObjectKey(e._statusHistory.filter(function(e){return e.isPast}),'_from',!0)},fullName:function(e){var t=e._firstName;return e._middleName&&(t+=' '+e._middleName),e._lastName&&(t+=' '+e._lastName),t},aliasName:function(e){var t=e._aliasFirstName;return e._aliasMiddleName&&(t+=' '+e._aliasMiddleName),e._aliasLastName&&(t+=' '+e._aliasLastName),t},personalInfo:function(t){var n=t._birthDateUtc?s(t._birthDateUtc).format('M/D/YYYY'):null,i=e.maritalStatus.byValue(t._maritalStatus),o=e.gender.byValue(t._gender),r=e.ethnicity.byValue(t._ethnicity),l=e.race.byValue(t._race);return{birthDate:n,ssn:t._sSN||null,externalId:t._externalId||null,maritalStatus:i||null,gender:o||null,ethnicity:r||null,race:l||null}},phoneNumbers:function(t){var n=t._phoneNumbers,s={work:null,workExt:null,personal:null,personalPhoneType:null,personalIsPrimary:null,other:null,otherPhoneType:null,otherIsPrimary:null};if(null==n)return s;if(0===n.length)return s;var i=e.usageType,o=i.personal,r=i.work,l=i.other,d=n.find(function(e){return e._usageType===r}),u=n.find(function(e){return e._usageType===o}),c=n.find(function(e){return e._usageType===l});return Object.assign(s,{work:d?d._number:null,workExt:d?d._extension:null,personal:u?u._number:null,personalPhoneType:u?u._phoneType:null,personalIsPrimary:u?u._isPrimary:null,other:c?c._number:null,otherPhoneType:c?c._phoneType:null,otherIsPrimary:c?c._isPrimary:null})},emails:function(t){var n=t._emails,s={work:null,personal:null};if(null==n)return s;if(0===n.length)return s;var i=e.usageType,o=i.personal,r=i.work,l=n.find(function(e){return e._emailType===r}),d=n.find(function(e){return e._emailType===o});return Object.assign(s,{work:l?l._emailAddress:null,personal:d?d._emailAddress:null})},address:function(e){},emergencyContacts:function(t){var n=t._emergencyContacts,s={primaryContactName:null,primaryContactRelationship:null,primaryContactPhone:null,primaryContactAltPhone:null,secondaryContactName:null,secondaryContactRelationship:null,secondaryContactPhone:null,secondaryContactAltPhone:null};if(null==n)return s;if(0===n.length)return s;var i=n.find(function(e){return e._isPrimary}),o=n.find(function(e){return!e._isPrimary}),r=i?e.emergencyContactRelationship.byValue(i._relationshipType):null,l=o?e.emergencyContactRelationship.byValue(o._relationshipType):null;return Object.assign(s,{primaryContactName:i?i._contactName:null,primaryContactRelationship:r,primaryContactPhone:i?i._primaryPhone:null,primaryContactAltPhone:i?i._alternatePhone:null,secondaryContactName:o?o._contactName:null,secondaryContactRelationship:l,secondaryContactPhone:o?o._primaryPhone:null,secondaryContactAltPhone:o?o._alternatePhone:null})},// Can be deleted once all effective dated work is out because we deleted the profileCompletenessSvc with this PR
profileCompleteness:function(){return{}},// Can be deleted once all effective dated work is out because we deleted the profileCompletenessSvc with this PR
profileIncompleteList:function(){return{}}}}// #---- End Mutator (mutatorEmployees) ----# //
// #----------------------------------------# //
// #----------------------------------------# //
// #---- Mutator (mutatorFormInstances) ----# //
/*@ngInject*/function formInstancesMutator(e){return{// set up some properties for use in our view
name:function(e){return null==e._formTemplate?void 0:e._formTemplate.name},// is it part of a packet?
isInPacket:function(e){return null==e._packetInstance?void 0:null!=e._packetInstance.instanceId||void 0},// is it past the due date for the form?
daysTillDue:function(t){if(null==t._dueDateUtc)return 1/0;var n=t._dueDateUtc,s=e(Date.now()),i=e(n);return difference(s,i)},// is it past the due date for the form?
isOverdue:function(e){return 0>e.daysTillDue},currentStep:function(e){return null==e._steps||0===e._steps.length?void 0:e._steps.find(function(t){return t._formTemplateStepId===e._currentStepId})}}}function difference(e,t){var n=t.diff(e,'days',!0);return _Mathceil(n)}// #---- End Mutator (mutatorFormInstances) ----# //
// #--------------------------------------------# //
// #----------------------------------------# //
// #---- Mutator (mutatorFormTemplates) ----# //
/*@ngInject*/function formTemplatesMutator(e){return{"!statusObject":function(t){return e.getStatus(t)},status:function(e){return null==e.statusObject?void 0:e.statusObject.status},statusLabel:function(e){return null==e.statusObject?void 0:e.statusObject.statusLabel}}}// #---- End Mutator (mutatorFormTemplates) ----# //
// #--------------------------------------------# //
// #----------------------------------------------# //
// #---- Mutator (mutatorIFormLibraryObjects) ----# //
/*@ngInject*/function iFormLibraryObjectsMutator(e){return{"!statusObject":function(t){return e.getStatus(t)},status:function(e){return null==e.statusObject?void 0:e.statusObject.status},statusLabel:function(e){return null==e.statusObject?void 0:e.statusObject.statusLabel}}}// #---- End Mutator (mutatorIFormLibraryObjects) ----# //
// #--------------------------------------------------# //
// #-----------------------------------------# //
// #---- Mutator (mutatorJobTypeDetails) ----# //
/*@ngInject*/function jobTypeDetailsMutator(){return{// sets obj.example to obj.name.toUpperCase()
isCurrent:function(e){var t=moment(),n=moment(e._fromDateUtc),s=moment(e._toDateUtc);return n.isSameOrBefore(t)&&s.isAfter(t)},isFuture:function(e){var t=moment(),n=moment(e._fromDateUtc),s=moment(e._toDateUtc);return n.isSameOrAfter(t)&&s.isAfter(t)},isPast:function(e){var t=moment(),n=moment(e._toDateUtc),s=moment(e._fromDateUtc);return s.isBefore(t)&&n.isSameOrBefore(t)}}}// #---- End Mutator (mutatorJobTypeDetails) ----# //
// #---------------------------------------------# //
// #------------------------------------# //
// #---- Mutator (mutatorLocations) ----# //
/*@ngInject*/function locationsMutator(e){return{// sets obj.example to obj.name.toUpperCase()
formattedPhone:function(t){return t.hasOwnProperty('_phone')?t._phone?e.formatPhone(t._phone):'':''}}}// #---- End Mutator (mutatorLocations) ----# //
// #----------------------------------------# //
// #-----------------------------------# //
// #---- Mutator (mutatorMessages) ----# //
/*@ngInject*/function messagesMutator(e){return{isRead:function(t){return null!=t._acknowledgeAtUtc&&!e.isForeverFuture(t._acknowledgeAtUtc)},shortContent:function(e){if(null!=e._content){if(''===e._content)return'';var t=e._content,n=t.toLowerCase().indexOf('please');return 0<n?t.substr(0,n):t}}}}// #---- End Mutator (mutatorMessages) ----# //
// #---------------------------------------# //
// #----------------------------------------# //
// #---- Mutator (mutatorOrganizations) ----# //
/*@ngInject*/function organizationsMutator(e){return{formattedPhone:function(t){return t.hasOwnProperty('_phone')?t._phone?e.formatPhone(t._phone):'':''},formattedFax:function(t){return t.hasOwnProperty('_fax')?t._fax?e.formatPhone(t._fax):'':''}}}// #---- End Mutator (mutatorOrganizations) ----# //
// #--------------------------------------------# //
// #---------------------------------------# //
// #---- Mutator (mutatorPaySchedules) ----# //
/*@ngInject*/function paySchedulesMutator(e){return{// finds the default pay schedule on a job type and identifies it
isDefault:function(t){return e.isForeverPast(t._fromDateUtc)}}}// #---- End Mutator (mutatorPaySchedules) ----# //
// #-------------------------------------------# //
// #---------------------------------------# //
// #---- Mutator ({ camelCase name }}) ----# //
/*@ngInject*/function phoneNumbersMutator(e){return{isEmpty:function(e){return null==e._number&&(e._number=''),0===e._number.trim().length},// formatted version of the phone number
formatted:function(t){return t.hasOwnProperty('_number')?t._number?e.formatPhone(t._number):'':''},/* Now with Extensions! */formattedFull:function(e){var t='';return null!=e._extension&&0<e._extension.length&&(t=' x'+e._extension),e.formatted+t}}}// #---- End Mutator ({ camelCase name }}) ----# //
// #-------------------------------------------# //
// #------------------------------------# //
// #---- Mutator ({ camelCase name }}) ----# //
/*@ngInject*/function positionsMutator(e){return{location:function(t){var n=t._locationId||null;return null==n&&(n=t._location&&t._location.id||null),null==n?void 0:e('location')(n)||null},department:function(t){var n=t._departmentId||null;return null==n&&(n=t._department&&t._department.id||null),null==n?void 0:e('department')(n)||null},jobType:function(t){var n=t._jobTypeId||null;return null==n&&(n=t._jobType&&t._jobType.id||null),null==n?void 0:e('jobType')(n)||null}}}// #---- End Mutator ({ camelCase name }}) ----# //
// #----------------------------------------# //
// #-----------------------------------------# //
// #---- Mutator (mutatorSecurityGroups) ----# //
/*@ngInject*/function securityGroupsMutator(){return{// matchProfile: () => {
// 	return profiles => {
// 		//> log('profiles', profiles);
// 	};
// }
}}// #---- End Mutator (mutatorSecurityGroups) ----# //
// #---------------------------------------------# //
// #-----------------------------------------# //
// #---- Mutator (mutatorSecurityScopes) ----# //
/*@ngInject*/function securityScopesMutator(e){function t(t,n,s){switch(n){case e.none:return'no '+t+'s';case e.self:return'own '+t;case e.specific:var i=1===s?t:t+'s';return s+' specific '+i;case e.all:return'any '+t;case e.directReports:return'direct report'+(1===s?'':'s');}return''}return{// matchProfile: scope => {
// 	return profiles => {
// 		scope.permissionProfile = profiles.find(p => scope._permissionProfileId === p.id);
// 	};
// },
controlDisplay:function(e){var n=t('location',e._locationAdministrationContext,e._locationIds.length),s=t('dept',e._departmentAdministrationContext,e._departmentIds.length),i=t('job type',e._jobTypeAdministrationContext,e._jobTypeIds.length),o=t('employee',e._employeeAdministrationContext,e._employeeIds.length);return n+', '+s+', '+i+', '+o}}}// #---- End Mutator (mutatorSecurityScopes) ----# //
// #---------------------------------------------# //
// #--------------------------------------# //
// #---- Mutator (mutatorSupervisors) ----# //
/*@ngInject*/function supervisorsMutator(){return{// sets obj.example to obj.name.toUpperCase()
isCurrent:function(e){var t=moment(),n=moment(e._from),s=moment(e._to);return n.isSameOrBefore(t)&&s.isAfter(t)},isFuture:function(e){var t=moment(),n=moment(e._from),s=moment(e._to);return n.isSameOrAfter(t)&&s.isAfter(t)},isPast:function(e){var t=moment(),n=moment(e._to),s=moment(e._from);return s.isBefore(t)&&n.isSameOrBefore(t)}}}// #---- End Mutator (mutatorSupervisors) ----# //
// #------------------------------------------# //
var _Mathceil=Math.ceil,_Mathabs=Math.abs,_Mathfloor=Math.floor,_Mathlog=Math.log,_Mathpow=Math.pow,_Mathsqrt=Math.sqrt,_MathPI=Math.PI,_Mathmin=Math.min,_Mathmax=Math.max;(function(e){//                                                 //
// =============================================== //
window.ambient.registerPlugin('viewport',e);// ================= Plugin Name ================= //
//                                                 //
})({// ================= Plugin Code ================= //
//                                                 //
getCurrentValue:function(){var t=window,n=document,s=n.body,i=n.documentElement,e=null==t.pageYOffset?(i.clientHeight&&i||s).scrollTop:t.pageYOffset,o=null==t.pageXOffset?(i.clientWidth&&i||s).scrollLeft:t.pageXOffset,r=t.innerWidth||s.clientWidth,l=t.innerHeight||s.clientHeight;// the location of the element could change if the
// page width changes, so watch that too and include
// it in the current value so it can be checked
// for changes
return e+'-'+(r+o)+'-'+(e+l)+'-'+o},getActiveClasses:function(e,t,n){e=e.split('-').map(function(e){return parseInt(e,10)});for(var s=!0,o=e[0],r=e[1],l=e[2],d=e[3],u={minTop:0,maxTop:1/0,minRight:0,maxRight:1/0,minBottom:0,maxBottom:1/0,minLeft:0,maxLeft:1/0},c=Object.keys(n),p=c.length,m;p--;)(m=c[p],null==n[m])&&(u[m]=n[m],s=!1);return s?[t]:o<u.minTop||o>u.maxTop?[]:r<u.minRight||r>u.maxRight?[]:l<u.minBottom||l>u.maxBottom?[]:d<u.minLeft||d>u.maxLeft?[]:[t]},watchEvent:'scroll resize'//                                                 //
// =============================================== //
});var commonjsGlobal='undefined'==typeof globalThis?'undefined'==typeof window?'undefined'==typeof global?'undefined'==typeof self?{}:self:global:window:globalThis,Chart_Core=createCommonjsModule(function(e){(function(){var n=Math.asin,o=Math.sin,s=Math.cos,t=Math.round,i=this,r=i.Chart,l=function(e){this.canvas=e.canvas,this.ctx=e;//Variables global to the chart
var t=function(e,t){return e['offset'+t]?e['offset'+t]:document.defaultView.getComputedStyle(e).getPropertyValue(t)},n=this.width=t(e.canvas,'Width')||e.canvas.width,s=this.height=t(e.canvas,'Height')||e.canvas.height;return n=this.width=e.canvas.width,s=this.height=e.canvas.height,this.aspectRatio=this.width/this.height,d.retinaScale(this),this};//Declare root variable - window in the browser, global on the server
//Occupy the global variable of Chart, and create a simple base class
//Globally expose the defaults to allow for user updating/changing
l.defaults={global:{// Boolean - Whether to animate the chart
animation:!0,// Number - Number of animation steps
animationSteps:60,// String - Animation easing effect
animationEasing:'easeOutQuart',// Boolean - If we should show the scale at all
showScale:!0,// Boolean - If we want to override with a hard coded scale
scaleOverride:!1,// ** Required if scaleOverride is true **
// Number - The number of steps in a hard coded scale
scaleSteps:null,// Number - The value jump in the hard coded scale
scaleStepWidth:null,// Number - The scale starting value
scaleStartValue:null,// String - Colour of the scale line
scaleLineColor:'rgba(0,0,0,.1)',// Number - Pixel width of the scale line
scaleLineWidth:1,// Boolean - Whether to show labels on the scale
scaleShowLabels:!0,// Interpolated JS string - can access value
scaleLabel:'<%=value%>',// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
scaleIntegersOnly:!0,// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
scaleBeginAtZero:!1,// String - Scale label font declaration for the scale label
scaleFontFamily:'\'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',// Number - Scale label font size in pixels
scaleFontSize:12,// String - Scale label font weight style
scaleFontStyle:'normal',// String - Scale label font colour
scaleFontColor:'#666',// Boolean - whether or not the chart should be responsive and resize when the browser does.
responsive:!1,// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
maintainAspectRatio:!0,// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
showTooltips:!0,// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
customTooltips:!1,// Array - Array of string names to attach tooltip events
tooltipEvents:['mousemove','touchstart','touchmove','mouseout'],// String - Tooltip background colour
tooltipFillColor:'rgba(0,0,0,0.8)',// String - Tooltip label font declaration for the scale label
tooltipFontFamily:'\'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',// Number - Tooltip label font size in pixels
tooltipFontSize:14,// String - Tooltip font weight style
tooltipFontStyle:'normal',// String - Tooltip label font colour
tooltipFontColor:'#fff',// String - Tooltip title font declaration for the scale label
tooltipTitleFontFamily:'\'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',// Number - Tooltip title font size in pixels
tooltipTitleFontSize:14,// String - Tooltip title font weight style
tooltipTitleFontStyle:'bold',// String - Tooltip title font colour
tooltipTitleFontColor:'#fff',// String - Tooltip title template
tooltipTitleTemplate:'<%= label%>',// Number - pixel width of padding around tooltip text
tooltipYPadding:6,// Number - pixel width of padding around tooltip text
tooltipXPadding:6,// Number - Size of the caret on the tooltip
tooltipCaretSize:8,// Number - Pixel radius of the tooltip border
tooltipCornerRadius:6,// Number - Pixel offset from point x to tooltip edge
tooltipXOffset:10,// String - Template string for single tooltips
tooltipTemplate:'<%if (label){%><%=label%>: <%}%><%= value %>',// String - Template string for single tooltips
multiTooltipTemplate:'<%= datasetLabel %>: <%= value %>',// String - Colour behind the legend colour block
multiTooltipKeyBackground:'#fff',// Array - A list of colors to use as the defaults
segmentColorDefault:['#A6CEE3','#1F78B4','#B2DF8A','#33A02C','#FB9A99','#E31A1C','#FDBF6F','#FF7F00','#CAB2D6','#6A3D9A','#B4B482','#B15928'],// Array - A list of highlight colors to use as the defaults
segmentHighlightColorDefaults:['#CEF6FF','#47A0DC','#DAFFB2','#5BC854','#FFC2C1','#FF4244','#FFE797','#FFA728','#F2DAFE','#9265C2','#DCDCAA','#D98150'],// Function - Will fire on animation progression.
onAnimationProgress:function(){},// Function - Will fire on animation completion.
onAnimationComplete:function(){}}},l.types={};//Global Chart helpers object for utility methods and classes
var d=l.helpers={},u=d.each=function(e,t,n){var s=Array.prototype.slice.call(arguments,3);// Check to see if null or undefined firstly.
if(e)if(e.length===+e.length){var o;for(o=0;o<e.length;o++)t.apply(n,[e[o],o].concat(s))}else for(var r in e)t.apply(n,[e[r],r].concat(s))},c=d.clone=function(e){var t={};return u(e,function(n,s){e.hasOwnProperty(s)&&(t[s]=n)}),t},p=d.extend=function(e){return u(Array.prototype.slice.call(arguments,1),function(t){u(t,function(n,s){t.hasOwnProperty(s)&&(e[s]=n)})}),e},m=d.merge=function(){//Merge properties in left object over to a shallow clone of object right.
var e=Array.prototype.slice.call(arguments,0);return e.unshift({}),p.apply(null,e)},g=d.indexOf=function(e,t){if(Array.prototype.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},h=d.where=function(e,t){var n=[];return d.each(e,function(e){t(e)&&n.push(e)}),n},f=d.findNextWhere=function(e,t,n){n||(n=-1);for(var s=n+1,o;s<e.length;s++)if(o=e[s],t(o))return o},y=d.findPreviousWhere=function(e,t,n){n||(n=e.length);for(var s=n-1,o;0<=s;s--)if(o=e[s],t(o))return o},v=d.inherits=function(e){//Basic javascript inheritance based on the model created in Backbone.js
var t=this,n=e&&e.hasOwnProperty('constructor')?e.constructor:function(){return t.apply(this,arguments)},s=function(){this.constructor=n};return s.prototype=t.prototype,n.prototype=new s,n.extend=v,e&&p(n.prototype,e),n.__super__=t.prototype,n},b=d.noop=function(){},_=d.uid=function(){var e=0;return function(){return'chart-'+e++}}(),S=d.warn=function(e){window.console&&'function'==typeof window.console.warn&&console.warn(e)},A=d.amd='function'==typeof void 0,//-- Math methods
x=d.isNumber=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},T=d.max=function(e){return _Mathmax.apply(Math,e)},k=d.min=function(e){return _Mathmin.apply(Math,e)},w=d.cap=function(e,t,n){if(x(t)){if(e>t)return t;}else if(x(n)&&e<n)return n;return e},P=d.getDecimalPlaces=function(e){if(0!=e%1&&x(e)){var t=e.toString();if(0>t.indexOf('e-'))// no exponent, e.g. 0.01
return t.split('.')[1].length;if(0>t.indexOf('.'))// no decimal point, e.g. 1e-9
return parseInt(t.split('e-')[1]);// exponent and decimal point, e.g. 1.23e-9
var n=t.split('.')[1].split('e-');return n[0].length+parseInt(n[1])}return 0},C=d.radians=function(e){return e*(_MathPI/180)},// Gets the angle from vertical upright to the point about a centre.
O=d.getAngleFromPoint=function(e,t){var n=t.x-e.x,s=t.y-e.y,i=_Mathsqrt(n*n+s*s),o=2*_MathPI+Math.atan2(s,n);//If the segment is in the top left quadrant, we need to add another rotation to the angle
return 0>n&&0>s&&(o+=2*_MathPI),{angle:o,distance:i}},I=d.aliasPixel=function(e){return 0==e%2?0:.5},E=d.splineCurve=function(e,n,s,i){//Props to Rob Spencer at scaled innovation for his post on splining between points
//http://scaledinnovation.com/analytics/splines/aboutSplines.html
var t=_Mathsqrt(_Mathpow(n.x-e.x,2)+_Mathpow(n.y-e.y,2)),o=_Mathsqrt(_Mathpow(s.x-n.x,2)+_Mathpow(s.y-n.y,2)),r=i*t/(t+o),// scaling factor for triangle Ta
l=i*o/(t+o);return{inner:{x:n.x-r*(s.x-e.x),y:n.y-r*(s.y-e.y)},outer:{x:n.x+l*(s.x-e.x),y:n.y+l*(s.y-e.y)}}},j=d.calculateOrderOfMagnitude=function(e){return _Mathfloor(_Mathlog(e)/Math.LN10)},$=d.calculateScaleRange=function(e,n,s,i,o){//Set a minimum step of two - a point at the top of the graph, and a point at the base
var r=_Mathfloor(n/(1.5*s)),l=2>=r,d=[];// Filter out null values since these would min() to zero
u(e,function(e){null==e||d.push(e)});var c=k(d),p=T(d);// We need some degree of separation here to calculate the scales if all the values are the same
// Adding/minusing 0.5 will give us a range of 1.
p===c&&(p+=.5,.5<=c&&!i?c-=.5:p+=.5);//If we have more space on the graph we'll use it to give more definition to the data
for(var m=_Mathabs(p-c),g=j(m),h=_Mathceil(p/(1*_Mathpow(10,g)))*_Mathpow(10,g),f=i?0:_Mathfloor(c/(1*_Mathpow(10,g)))*_Mathpow(10,g),y=h-f,v=_Mathpow(10,g),b=t(y/v);(b>r||2*b<r)&&!l;)if(b>r)v*=2,b=t(y/v),0!=b%1&&(l=!0);//We can fit in double the amount of scale points on the scale
else//If user has declared ints only, and the step value isn't a decimal
if(!(o&&0<=g))//If the scale doesn't have to be an int, make the scale more granular anyway.
v/=2,b=t(y/v);else//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
if(0==v/2%1)v/=2,b=t(y/v);//If it would make it a float break out of the loop
else break;return l&&(b=2,v=y/b),{steps:b,stepValue:v,min:f,max:f+b*v}},//Templating methods
//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
D=d.template=function(e,t){// If templateString is function rather than string-template - call the function for valuesObject
if(e instanceof Function)return e(t);var n={};return function(e,t){// Figure out if we're getting a template, or if we need to
// load the template - and be sure to cache the result.
var s=/\W/.test(e)?// Generate a reusable function that will serve as a template
// generator (and which will be cached).
new Function('obj','var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push(\''+// Convert the template into pure JavaScript
e.replace(/[\r\t\n]/g,' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g,'$1\r').replace(/\t=(.*?)%>/g,'\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'')+'\');}return p.join(\'\');'):n[e]=n[e];// Provide some basic currying to the user
return t?s(t):s}(e,t)},R=d.generateLabels=function(e,t,n,s){var i=Array(t);return e&&u(i,function(t,o){i[o]=D(e,{value:n+s*(o+1)})}),i},//--Animation methods
//Easing functions adapted from Robert Penner's easing equations
//http://www.robertpenner.com/easing/
F=d.easingEffects={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return-1*e*(e-2)},easeInOutQuad:function(e){return 1>(e/=1/2)?1/2*e*e:-1/2*(--e*(e-2)-1)},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return 1*((e=e/1-1)*e*e+1)},easeInOutCubic:function(e){return 1>(e/=1/2)?1/2*e*e*e:1/2*((e-=2)*e*e+2)},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return-1*((e=e/1-1)*e*e*e-1)},easeInOutQuart:function(e){return 1>(e/=1/2)?1/2*e*e*e*e:-1/2*((e-=2)*e*e*e-2)},easeInQuint:function(e){return 1*(e/=1)*e*e*e*e},easeOutQuint:function(e){return 1*((e=e/1-1)*e*e*e*e+1)},easeInOutQuint:function(e){return 1>(e/=1/2)?1/2*e*e*e*e*e:1/2*((e-=2)*e*e*e*e+2)},easeInSine:function(e){return-1*s(e/1*(_MathPI/2))+1},easeOutSine:function(e){return 1*o(e/1*(_MathPI/2))},easeInOutSine:function(e){return-1/2*(s(_MathPI*e/1)-1)},easeInExpo:function(e){return 0===e?1:1*_Mathpow(2,10*(e/1-1))},easeOutExpo:function(e){return 1===e?1:1*(-_Mathpow(2,-10*e/1)+1)},easeInOutExpo:function(e){return 0===e?0:1===e?1:1>(e/=1/2)?1/2*_Mathpow(2,10*(e-1)):1/2*(-_Mathpow(2,-10*--e)+2)},easeInCirc:function(e){return 1<=e?e:-1*(_Mathsqrt(1-(e/=1)*e)-1)},easeOutCirc:function(e){return 1*_Mathsqrt(1-(e=e/1-1)*e)},easeInOutCirc:function(e){return 1>(e/=1/2)?-1/2*(_Mathsqrt(1-e*e)-1):1/2*(_Mathsqrt(1-(e-=2)*e)+1)},easeInElastic:function(e){var i=1.70158,r=0,l=1;return 0===e?0:1==(e/=1)?1:(r||(r=.3*1),1>l?(l=1,i=r/4):i=r/(2*_MathPI)*n(1/l),-(l*_Mathpow(2,10*(e-=1))*o((1*e-i)*(2*_MathPI)/r)))},easeOutElastic:function(e){var i=1.70158,r=0,l=1;return 0===e?0:1==(e/=1)?1:(r||(r=.3*1),1>l?(l=1,i=r/4):i=r/(2*_MathPI)*n(1/l),l*_Mathpow(2,-10*e)*o((1*e-i)*(2*_MathPI)/r)+1)},easeInOutElastic:function(e){var i=1.70158,r=0,l=1;return 0===e?0:2==(e/=1/2)?1:(r||(r=1*(1.5*.3)),1>l?(l=1,i=r/4):i=r/(2*_MathPI)*n(1/l),1>e?-.5*(l*_Mathpow(2,10*(e-=1))*o((1*e-i)*(2*_MathPI)/r)):.5*(l*_Mathpow(2,-10*(e-=1))*o((1*e-i)*(2*_MathPI)/r))+1)},easeInBack:function(e){var n=1.70158;return 1*(e/=1)*e*((n+1)*e-n)},easeOutBack:function(e){var n=1.70158;return 1*((e=e/1-1)*e*((n+1)*e+n)+1)},easeInOutBack:function(e){var n=1.70158;return 1>(e/=1/2)?1/2*(e*e*(((n*=1.525)+1)*e-n)):1/2*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)},easeInBounce:function(e){return 1-F.easeOutBounce(1-e)},easeOutBounce:function(e){return(e/=1)<1/2.75?1*(7.5625*e*e):e<2/2.75?1*(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?1*(7.5625*(e-=2.25/2.75)*e+.9375):1*(7.5625*(e-=2.625/2.75)*e+.984375)},easeInOutBounce:function(e){return e<1/2?.5*F.easeInBounce(2*e):.5*F.easeOutBounce(2*e-1)+.5*1}},//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
H=d.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)}}(),M=d.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(e){return window.clearTimeout(e,1e3/60)}}(),L=d.animationLoop=function(e,t,n,s,i,o){var r=0,l=F[n]||F.linear,d=function n(){r++;var d=r/t,u=l(d);e.call(o,u,d,r),s.call(o,u,d),r<t?o.animationFrame=H(n):i.apply(o)};H(d)},//-- DOM methods
N=d.getRelativePosition=function(t){var n=t.originalEvent||t,e=t.currentTarget||t.srcElement,s=e.getBoundingClientRect(),i,o;return n.touches?(i=n.touches[0].clientX-s.left,o=n.touches[0].clientY-s.top):(i=n.clientX-s.left,o=n.clientY-s.top),{x:i,y:o}},B=d.addEvent=function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent?e.attachEvent('on'+t,n):e['on'+t]=n},V=d.removeEvent=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent('on'+t,n):e['on'+t]=b},W=d.bindEvents=function(e,t,n){e.events||(e.events={}),u(t,function(t){e.events[t]=function(){n.apply(e,arguments)},B(e.chart.canvas,t,e.events[t])})},U=d.unbindEvents=function(e,t){u(t,function(t,n){V(e.chart.canvas,n,t)})},q=d.getMaximumWidth=function(e){var t=e.parentNode,n=parseInt(z(t,'padding-left'))+parseInt(z(t,'padding-right'));// TODO = check cross browser stuff with this.
return t?t.clientWidth-n:0},G=d.getMaximumHeight=function(e){var t=e.parentNode,n=parseInt(z(t,'padding-bottom'))+parseInt(z(t,'padding-top'));// TODO = check cross browser stuff with this.
return t?t.clientHeight-n:0},z=d.getStyle=function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,null).getPropertyValue(t)},J=d.getMaximumSize=d.getMaximumWidth,// legacy support
K=d.retinaScale=function(e){var t=e.ctx,n=e.canvas.width,s=e.canvas.height;window.devicePixelRatio&&(t.canvas.style.width=n+'px',t.canvas.style.height=s+'px',t.canvas.height=s*window.devicePixelRatio,t.canvas.width=n*window.devicePixelRatio,t.scale(window.devicePixelRatio,window.devicePixelRatio))},//-- Canvas methods
Y=d.clear=function(e){e.ctx.clearRect(0,0,e.width,e.height)},X=d.fontString=function(e,t,n){return t+' '+e+'px '+n},Z=d.longestText=function(e,t,n){e.font=t;var s=0;return u(n,function(t){var n=e.measureText(t).width;s=n>s?n:s}),s},Q=d.drawRoundedRectangle=function(e,t,n,s,i,o){e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+s-o,n),e.quadraticCurveTo(t+s,n,t+s,n+o),e.lineTo(t+s,n+i-o),e.quadraticCurveTo(t+s,n+i,t+s-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()};//-- Basic js utility methods
//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
//Destroy method on the chart will remove the instance of the chart from this reference.
l.instances={},l.Type=function(e,t,n){this.options=t,this.chart=n,this.id=_(),l.instances[this.id]=this,t.responsive&&this.resize(),this.initialize.call(this,e)},p(l.Type.prototype,{initialize:function(){return this},clear:function(){return Y(this.chart),this},stop:function(){return l.animationService.cancelAnimation(this),this},resize:function(e){this.stop();var t=this.chart.canvas,n=q(this.chart.canvas),s=this.options.maintainAspectRatio?n/this.chart.aspectRatio:G(this.chart.canvas);return t.width=this.chart.width=n,t.height=this.chart.height=s,K(this.chart),'function'==typeof e&&e.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:b,render:function(e){if(e&&this.reflow(),this.options.animation&&!e){var t=new l.Animation;t.numSteps=this.options.animationSteps,t.easing=this.options.animationEasing,t.render=function(e,t){var n=d.easingEffects[t.easing],s=t.currentStep/t.numSteps,i=n(s);e.draw(i,s,t.currentStep)},t.onAnimationProgress=this.options.onAnimationProgress,t.onAnimationComplete=this.options.onAnimationComplete,l.animationService.addAnimation(this,t)}else this.draw(),this.options.onAnimationComplete.call(this);return this},generateLegend:function(){return D(this.options.legendTemplate,this)},destroy:function(){this.clear(),U(this,this.events);var e=this.chart.canvas;// Reset canvas height/width attributes starts a fresh with the canvas context
e.width=this.chart.width,e.height=this.chart.height,e.style.removeProperty?(e.style.removeProperty('width'),e.style.removeProperty('height')):(e.style.removeAttribute('width'),e.style.removeAttribute('height')),delete l.instances[this.id]},showTooltip:function(e,n){'undefined'==typeof this.activeElements&&(this.activeElements=[]);var s=function(e){var t=!1;return e.length===this.activeElements.length?(u(e,function(e,n){e!==this.activeElements[n]&&(t=!0)},this),t):(t=!0,t)}.call(this,e);if(s||n){if(this.activeElements=e,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),0<e.length)// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
if(this.datasets&&1<this.datasets.length){for(var o=this.datasets.length-1,r,c;0<=o&&(r=this.datasets[o].points||this.datasets[o].bars||this.datasets[o].segments,c=g(r,e[0]),-1===c);o--);var p=[],m=[],h=function(){// Get all the points at that particular index
var e=[],t=[],n=[],s,i,o,r,l;return d.each(this.datasets,function(t){s=t.points||t.bars||t.segments,s[c]&&s[c].hasValue()&&e.push(s[c])}),d.each(e,function(e){t.push(e.x),n.push(e.y),p.push(d.template(this.options.multiTooltipTemplate,e)),m.push({fill:e._saved.fillColor||e.fillColor,stroke:e._saved.strokeColor||e.strokeColor})},this),l=k(n),o=T(n),r=k(t),i=T(t),{x:r>this.chart.width/2?r:i,y:(l+o)/2}}.call(this,c);new l.MultiTooltip({x:h.x,y:h.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:p,legendColors:m,legendColorBackground:this.options.multiTooltipKeyBackground,title:D(this.options.tooltipTitleTemplate,e[0]),chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else u(e,function(e){var n=e.tooltipPosition();new l.Tooltip({x:t(n.x),y:t(n.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:D(this.options.tooltipTemplate,e),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),l.Type.extend=function(e){var t=this,n=function(){return t.apply(this,arguments)};//Copy the prototype object of the this class
if(n.prototype=c(t.prototype),p(n.prototype,e),n.extend=l.Type.extend,e.name||t.prototype.name){var s=e.name||t.prototype.name,i=l.defaults[t.prototype.name]?c(l.defaults[t.prototype.name]):{};//Assign any potential default values of the new chart type
//If none are defined, we'll use a clone of the chart type this is being extended from.
//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
//doesn't define some defaults of their own.
l.defaults[s]=p(i,e.defaults),l.types[s]=n,l.prototype[s]=function(e,t){var i=m(l.defaults.global,l.defaults[s],t||{});return new n(e,i,this)}}else S('Name not provided for this chart, so it hasn\'t been registered');return t},l.Element=function(e){p(this,e),this.initialize.apply(this,arguments),this.save()},p(l.Element.prototype,{initialize:function(){},restore:function(e){return e?u(e,function(e){this[e]=this._saved[e]},this):p(this,this._saved),this},save:function(){return this._saved=c(this),delete this._saved._saved,this},update:function(e){return u(e,function(e,t){this._saved[t]=this[t],this[t]=e},this),this},transition:function(e,t){return u(e,function(e,n){this[n]=(e-this._saved[n])*t+this._saved[n]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return x(this.value)}}),l.Element.extend=v,l.Point=l.Element.extend({display:!0,inRange:function(e,t){var n=this.hitDetectionRadius+this.radius;return _Mathpow(e-this.x,2)+_Mathpow(t-this.y,2)<_Mathpow(n,2)},draw:function(){if(this.display){var e=this.ctx;e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*_MathPI),e.closePath(),e.strokeStyle=this.strokeColor,e.lineWidth=this.strokeWidth,e.fillStyle=this.fillColor,e.fill(),e.stroke()}//Quick debug for bezier curve splining
//Highlights control points and the line between them.
//Handy for dev - stripped in the min version.
// ctx.save();
// ctx.fillStyle = "black";
// ctx.strokeStyle = "black"
// ctx.beginPath();
// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
// ctx.fill();
// ctx.beginPath();
// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
// ctx.fill();
// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
// ctx.lineTo(this.x, this.y);
// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
// ctx.stroke();
// ctx.restore();
}}),l.Arc=l.Element.extend({inRange:function(e,t){var n=d.getAngleFromPoint(this,{x:e,y:t}),s=n.angle%(2*_MathPI),i=(2*_MathPI+this.startAngle)%(2*_MathPI),o=(2*_MathPI+this.endAngle)%(2*_MathPI)||360,r=o<i?s<=o||s>=i:s>=i&&s<=o,l=n.distance>=this.innerRadius&&n.distance<=this.outerRadius;// Normalize all angles to 0 - 2*PI (0 - 360°)
// Calculate wether the pointRelativeAngle is between the start and the end angle
//Check if within the range of the open/close angle
return r&&l;//Ensure within the outside of the arc centre, but inside arc outer
},tooltipPosition:function(){var e=this.startAngle+(this.endAngle-this.startAngle)/2,t=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+s(e)*t,y:this.y+o(e)*t}},draw:function(){var e=this.ctx;e.beginPath(),e.arc(this.x,this.y,0>this.outerRadius?0:this.outerRadius,this.startAngle,this.endAngle),e.arc(this.x,this.y,0>this.innerRadius?0:this.innerRadius,this.endAngle,this.startAngle,!0),e.closePath(),e.strokeStyle=this.strokeColor,e.lineWidth=this.strokeWidth,e.fillStyle=this.fillColor,e.fill(),e.lineJoin='bevel',this.showStroke&&e.stroke()}}),l.Rectangle=l.Element.extend({draw:function(){var e=this.ctx,t=this.width/2,n=this.x-t,s=this.x+t,i=this.base-(this.base-this.y),o=this.strokeWidth/2;// Canvas doesn't allow us to stroke inside the width so we can
// adjust the sizes to fit if we're setting a stroke on the line
this.showStroke&&(n+=o,s-=o,i+=o),e.beginPath(),e.fillStyle=this.fillColor,e.strokeStyle=this.strokeColor,e.lineWidth=this.strokeWidth,e.moveTo(n,this.base),e.lineTo(n,i),e.lineTo(s,i),e.lineTo(s,this.base),e.fill(),this.showStroke&&e.stroke()},height:function(){return this.base-this.y},inRange:function(e,t){return e>=this.x-this.width/2&&e<=this.x+this.width/2&&t>=this.y&&t<=this.base}}),l.Animation=l.Element.extend({currentStep:null,// the current animation step
numSteps:60,// default number of steps
easing:'',// the easing to use for this animation
render:null,// render function used by the animation service
onAnimationProgress:null,// user specified callback to fire on each step of the animation
onAnimationComplete:null// user specified callback to fire when the animation finishes
}),l.Tooltip=l.Element.extend({draw:function(){var e=this.chart.ctx;e.font=X(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign='center',this.yAlign='above';//Distance between the actual element.y position and the start of the tooltip caret
var t=this.caretPadding=2,n=e.measureText(this.text).width+2*this.xPadding,s=this.fontSize+2*this.yPadding,i=s+this.caretHeight+t;this.x+n/2>this.chart.width?this.xAlign='left':0>this.x-n/2&&(this.xAlign='right'),0>this.y-i&&(this.yAlign='below');var o=this.x-n/2,r=this.y-i;// Custom Tooltips
if(e.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case'above':e.beginPath(),e.moveTo(this.x,this.y-t),e.lineTo(this.x+this.caretHeight,this.y-(t+this.caretHeight)),e.lineTo(this.x-this.caretHeight,this.y-(t+this.caretHeight)),e.closePath(),e.fill();break;case'below':r=this.y+t+this.caretHeight,e.beginPath(),e.moveTo(this.x,this.y+t),e.lineTo(this.x+this.caretHeight,this.y+t+this.caretHeight),e.lineTo(this.x-this.caretHeight,this.y+t+this.caretHeight),e.closePath(),e.fill();}switch(this.xAlign){case'left':o=this.x-n+(this.cornerRadius+this.caretHeight);break;case'right':o=this.x-(this.cornerRadius+this.caretHeight);}Q(e,o,r,n,s,this.cornerRadius),e.fill(),e.fillStyle=this.textColor,e.textAlign='center',e.textBaseline='middle',e.fillText(this.text,o+n/2,r+s/2)}}}),l.MultiTooltip=l.Element.extend({initialize:function(){this.font=X(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=X(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.titleHeight=this.title?1.5*this.titleFontSize:0,this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+this.titleHeight,this.ctx.font=this.titleFont;var e=this.ctx.measureText(this.title).width,//Label has a legend square as well so account for this.
t=Z(this.ctx,this.font,this.labels)+this.fontSize+3,n=T([t,e]);this.width=n+2*this.xPadding;var s=this.height/2;//Check to ensure the height will fit on the canvas
0>this.y-s?this.y=s:this.y+s>this.chart.height&&(this.y=this.chart.height-s),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(e){var t=this.y-this.height/2+this.yPadding;//If the index is zero, we're getting the title
return 0===e?t+this.titleHeight/3:t+(1.5*this.fontSize*(e-1)+this.fontSize/2)+this.titleHeight},draw:function(){// Custom Tooltips
if(this.custom)this.custom(this);else{Q(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var e=this.ctx;e.fillStyle=this.fillColor,e.fill(),e.closePath(),e.textAlign='left',e.textBaseline='middle',e.fillStyle=this.titleTextColor,e.font=this.titleFont,e.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),e.font=this.font,d.each(this.labels,function(t,n){e.fillStyle=this.textColor,e.fillText(t,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(n+1)),e.fillStyle=this.legendColorBackground,e.fillRect(this.x+this.xPadding,this.getLineHeight(n+1)-this.fontSize/2,this.fontSize,this.fontSize),e.fillStyle=this.legendColors[n].fill,e.fillRect(this.x+this.xPadding,this.getLineHeight(n+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),l.Scale=l.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var e=P(this.stepValue),t=0;t<=this.steps;t++)this.yLabels.push(D(this.templateString,{value:(this.min+t*this.stepValue).toFixed(e)}));this.yLabelWidth=this.display&&this.showLabels?Z(this.ctx,this.font,this.yLabels)+10:0},addXLabel:function(e){this.xLabels.push(e),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;// Cache the starting endpoint, excluding the space for x labels
var e=this.endPoint,t=this.endPoint-this.startPoint,n;// Cache the starting height, so can determine if we need to recalculate the scale yAxis
// Build the current yLabels so we have an idea of what size they'll be to start
/*
	     *	This sets what is returned from calculateScaleRange as static properties of this class:
	     *
	    	this.steps;
	    	this.stepValue;
	    	this.min;
	    	this.max;
	     *
	     */for(this.calculateYRange(t),this.buildYLabels(),this.calculateXLabelRotation();t>this.endPoint-this.startPoint;)t=this.endPoint-this.startPoint,n=this.yLabelWidth,this.calculateYRange(t),this.buildYLabels(),n<this.yLabelWidth&&(this.endPoint=e,this.calculateXLabelRotation())},calculateXLabelRotation:function(){this.ctx.font=this.font;var e=this.ctx.measureText(this.xLabels[0]).width,t=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width,n;if(this.xScalePaddingRight=t/2+3,this.xScalePaddingLeft=e/2>this.yLabelWidth?e/2:this.yLabelWidth,this.xLabelRotation=0,this.display){var i=Z(this.ctx,this.font,this.xLabels),r;this.xLabelWidth=i;//Max label rotate should be 90 - also act as a loop counter
for(//Allow 3 pixels x2 padding either side for label readability
var l=_Mathfloor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>l&&0===this.xLabelRotation||this.xLabelWidth>l&&90>=this.xLabelRotation&&0<this.xLabelRotation;)r=s(C(this.xLabelRotation)),n=r*e,n+this.fontSize/2>this.yLabelWidth&&(this.xScalePaddingLeft=n+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=r*i;0<this.xLabelRotation&&(this.endPoint-=o(C(this.xLabelRotation))*i+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},// Needs to be overidden in each Chart type
// Otherwise we need to pass all the data into the scale class
calculateYRange:b,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(e){var t=this.drawingArea()/(this.min-this.max);return this.endPoint-t*(e-this.min)},calculateX:function(e){var n=0<this.xLabelRotation,// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
s=this.width-(this.xScalePaddingLeft+this.xScalePaddingRight),i=s/_Mathmax(this.valuesCount-(this.offsetGridLines?0:1),1),o=i*e+this.xScalePaddingLeft;return this.offsetGridLines&&(o+=i/2),t(o)},update:function(e){d.extend(this,e),this.fit()},draw:function(){var e=this.ctx,n=(this.endPoint-this.startPoint)/this.steps,s=t(this.xScalePaddingLeft);this.display&&(e.fillStyle=this.textColor,e.font=this.font,u(this.yLabels,function(i,o){var r=this.endPoint-n*o,l=t(r),u=this.showHorizontalLines;e.textAlign='right',e.textBaseline='middle',this.showLabels&&e.fillText(i,s-10,r),0!==o||u||(u=!0),u&&e.beginPath(),0<o?(e.lineWidth=this.gridLineWidth,e.strokeStyle=this.gridLineColor):(e.lineWidth=this.lineWidth,e.strokeStyle=this.lineColor),l+=d.aliasPixel(e.lineWidth),u&&(e.moveTo(s,l),e.lineTo(this.width,l),e.stroke(),e.closePath()),e.lineWidth=this.lineWidth,e.strokeStyle=this.lineColor,e.beginPath(),e.moveTo(s-5,l),e.lineTo(s,l),e.stroke(),e.closePath()},this),u(this.xLabels,function(t,n){var s=this.calculateX(n)+I(this.lineWidth),// Check to see if line/bar here and decide where to place the line
i=this.calculateX(n-(this.offsetGridLines?.5:0))+I(this.lineWidth),o=0<this.xLabelRotation,r=this.showVerticalLines;// This is Y axis, so draw it
0!==n||r||(r=!0),r&&e.beginPath(),0<n?(e.lineWidth=this.gridLineWidth,e.strokeStyle=this.gridLineColor):(e.lineWidth=this.lineWidth,e.strokeStyle=this.lineColor),r&&(e.moveTo(i,this.endPoint),e.lineTo(i,this.startPoint-3),e.stroke(),e.closePath()),e.lineWidth=this.lineWidth,e.strokeStyle=this.lineColor,e.beginPath(),e.moveTo(i,this.endPoint),e.lineTo(i,this.endPoint+5),e.stroke(),e.closePath(),e.save(),e.translate(s,o?this.endPoint+12:this.endPoint+8),e.rotate(-1*C(this.xLabelRotation)),e.font=this.font,e.textAlign=o?'right':'center',e.textBaseline=o?'middle':'top',e.fillText(t,0,0),e.restore()},this))}}),l.RadialScale=l.Element.extend({initialize:function(){this.size=k([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(e){// Take into account half font size + the yPadding of the top value
var t=this.drawingArea/(this.max-this.min);return(e-this.min)*t},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var e=P(this.stepValue),t=0;t<=this.steps;t++)this.yLabels.push(D(this.templateString,{value:(this.min+t*this.stepValue).toFixed(e)}))},getCircumference:function(){return 2*_MathPI/this.valuesCount},setScaleSize:function(){/*
	     * Right, this is really confusing and there is a lot of maths going on here
	     * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
	     *
	     * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
	     *
	     * Solution:
	     *
	     * We assume the radius of the polygon is half the size of the canvas at first
	     * at each index we check if the text overlaps.
	     *
	     * Where it does, we store that angle and that index.
	     *
	     * After finding the largest index and angle we calculate how much we need to remove
	     * from the shape radius to move the point inwards by that x.
	     *
	     * We average the left and right distances to get the maximum shape radius that can fit in the box
	     * along with labels.
	     *
	     * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
	     * on each side, removing that from the size, halving it and adding the left x protrusion width.
	     *
	     * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
	     * and position it in the most space efficient manner
	     *
	     * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
	     */// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
var e=k([this.height/2-this.pointLabelFontSize-5,this.width/2]),t=this.width,n=0,s,r,l,d,u,c,p,m,g,h,f,y;for(this.ctx.font=X(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),r=0;r<this.valuesCount;r++)s=this.getPointPosition(r,e),l=this.ctx.measureText(D(this.templateString,{value:this.labels[r]})).width+5,0===r||r===this.valuesCount/2?(d=l/2,s.x+d>t&&(t=s.x+d,u=r),s.x-d<n&&(n=s.x-d,p=r)):r<this.valuesCount/2?s.x+l>t&&(t=s.x+l,u=r):r>this.valuesCount/2&&s.x-l<n&&(n=s.x-l,p=r);g=n,h=_Mathceil(t-this.width),c=this.getIndexAngle(u),m=this.getIndexAngle(p),f=h/o(c+_MathPI/2),y=g/o(m+_MathPI/2),f=x(f)?f:0,y=x(y)?y:0,this.drawingArea=e-(y+f)/2,this.setCenterPoint(y,f)},setCenterPoint:function(e,t){var n=this.width-t-this.drawingArea,s=e+this.drawingArea;this.xCenter=(s+n)/2,this.yCenter=this.height/2},getIndexAngle:function(e){var t=2*_MathPI/this.valuesCount;// Start from the top instead of right, so remove a quarter of the circle
return e*t-_MathPI/2},getPointPosition:function(e,t){var n=this.getIndexAngle(e);return{x:s(n)*t+this.xCenter,y:o(n)*t+this.yCenter}},draw:function(){if(this.display){var e=this.ctx;if(u(this.yLabels,function(t,n){// Don't draw a centre value
if(0<n){var s=n*(this.drawingArea/this.steps),o=this.yCenter-s,r;// Draw circular lines around the scale
if(0<this.lineWidth)if(e.strokeStyle=this.lineColor,e.lineWidth=this.lineWidth,this.lineArc)e.beginPath(),e.arc(this.xCenter,this.yCenter,s,0,2*_MathPI),e.closePath(),e.stroke();else{e.beginPath();for(var l=0;l<this.valuesCount;l++)r=this.getPointPosition(l,this.calculateCenterOffset(this.min+n*this.stepValue)),0===l?e.moveTo(r.x,r.y):e.lineTo(r.x,r.y);e.closePath(),e.stroke()}if(this.showLabels){if(e.font=X(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var d=e.measureText(t).width;e.fillStyle=this.backdropColor,e.fillRect(this.xCenter-d/2-this.backdropPaddingX,o-this.fontSize/2-this.backdropPaddingY,d+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}e.textAlign='center',e.textBaseline='middle',e.fillStyle=this.fontColor,e.fillText(t,this.xCenter,o)}}},this),!this.lineArc){e.lineWidth=this.angleLineWidth,e.strokeStyle=this.angleLineColor;for(var t=this.valuesCount-1;0<=t;t--){var n=null,s=null;if(0<this.angleLineWidth&&(n=this.calculateCenterOffset(this.max),s=this.getPointPosition(t,n),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(s.x,s.y),e.stroke(),e.closePath()),this.backgroundColors&&this.backgroundColors.length==this.valuesCount){null==n&&(n=this.calculateCenterOffset(this.max)),null==s&&(s=this.getPointPosition(t,n));var o=this.getPointPosition(0===t?this.valuesCount-1:t-1,n),r=this.getPointPosition(t===this.valuesCount-1?0:t+1,n),l={x:(o.x+s.x)/2,y:(o.y+s.y)/2},d={x:(s.x+r.x)/2,y:(s.y+r.y)/2};e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(l.x,l.y),e.lineTo(s.x,s.y),e.lineTo(d.x,d.y),e.fillStyle=this.backgroundColors[t],e.fill(),e.closePath()}// Extra 3px out for some label spacing
var c=this.getPointPosition(t,this.calculateCenterOffset(this.max)+5);e.font=X(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),e.fillStyle=this.pointLabelFontColor;var p=this.labels.length,m=this.labels.length/2,g=m/2,h=t<g||t>p-g,f=t===g||t===p-g;e.textAlign=0===t?'center':t===m?'center':t<m?'left':'right',e.textBaseline=f?'middle':h?'bottom':'top',e.fillText(this.labels[t],c.x,c.y)}}}}}),l.animationService={frameDuration:17,animations:[],dropFrames:0,addAnimation:function(e,t){for(var n=0;n<this.animations.length;++n)if(this.animations[n].chartInstance===e)return void(this.animations[n].animationObject=t);this.animations.push({chartInstance:e,animationObject:t}),1==this.animations.length&&d.requestAnimFrame.call(window,this.digestWrapper)},// Cancel the animation for a given chart instance
cancelAnimation:function(e){var t=d.findNextWhere(this.animations,function(t){return t.chartInstance===e});t&&this.animations.splice(t,1)},// calls startDigest with the proper context
digestWrapper:function(){l.animationService.startDigest.call(l.animationService)},startDigest:function(){var e=Date.now(),t=0;1<this.dropFrames&&(t=_Mathfloor(this.dropFrames),this.dropFrames-=t);for(var n=0;n<this.animations.length;n++)null===this.animations[n].animationObject.currentStep&&(this.animations[n].animationObject.currentStep=0),this.animations[n].animationObject.currentStep+=1+t,this.animations[n].animationObject.currentStep>this.animations[n].animationObject.numSteps&&(this.animations[n].animationObject.currentStep=this.animations[n].animationObject.numSteps),this.animations[n].animationObject.render(this.animations[n].chartInstance,this.animations[n].animationObject),this.animations[n].animationObject.currentStep==this.animations[n].animationObject.numSteps&&(this.animations[n].animationObject.onAnimationComplete.call(this.animations[n].chartInstance),this.animations.splice(n,1),n--);var s=Date.now(),o=s-e-this.frameDuration,r=o/this.frameDuration;1<r&&(this.dropFrames+=r),0<this.animations.length&&d.requestAnimFrame.call(window,this.digestWrapper)}},d.addEvent(window,'resize',function(){// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
var e;return function(){clearTimeout(e),e=setTimeout(function(){u(l.instances,function(e){e.options.responsive&&e.resize(e.render,!0)})},50)}}()),A?(void 0)('Chart',[],function(){return l}):e.exports&&(e.exports=l),i.Chart=l,l.noConflict=function(){return i.Chart=r,l}}).call(window)});(function(){var e=this,t=e.Chart,//Cache a local reference to Chart.helpers
n=t.helpers,s={//Boolean - Whether we should show a stroke on each segment
segmentShowStroke:!0,//String - The colour of each segment stroke
segmentStrokeColor:'#fff',//Number - The width of each segment stroke
segmentStrokeWidth:2,//The percentage of the chart that we cut out of the middle.
percentageInnerCutout:50,//Number - Amount of animation steps
animationSteps:100,//String - Animation easing effect
animationEasing:'easeOutBounce',//Boolean - Whether we animate the rotation of the Doughnut
animateRotate:!0,//Boolean - Whether we animate scaling the Doughnut from the centre
animateScale:!1,//String - A legend template
legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'};t.Type.extend({//Passing in a name registers this chart in the Chart namespace
name:'Doughnut',//Providing a defaults will also register the deafults in the chart namespace
defaults:s,//Initialize is fired when the chart is initialized - Data is passed in as a parameter
//Config is automatically merged by the core of Chart.js, and is available at this.options
initialize:function(e){this.segments=[],this.outerRadius=(n.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=t.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&n.bindEvents(this,this.options.tooltipEvents,function(e){var t='mouseout'===e.type?[]:this.getSegmentsAtEvent(e);n.each(this.segments,function(e){e.restore(['fillColor'])}),n.each(t,function(e){e.fillColor=e.highlightColor}),this.showTooltip(t)}),this.calculateTotal(e),n.each(e,function(t,n){t.color||(t.color='hsl('+360*n/e.length+', 100%, 50%)'),this.addData(t,n,!0)},this),this.render()},getSegmentsAtEvent:function(t){var e=[],s=n.getRelativePosition(t);return n.each(this.segments,function(t){t.inRange(s.x,s.y)&&e.push(t)},this),e},addData:function(e,n,s){var i=n===void 0?this.segments.length:n;'undefined'==typeof e.color&&(e.color=t.defaults.global.segmentColorDefault[i%t.defaults.global.segmentColorDefault.length],e.highlight=t.defaults.global.segmentHighlightColorDefaults[i%t.defaults.global.segmentHighlightColorDefaults.length]),this.segments.splice(i,0,new this.SegmentArc({value:e.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:e.color,highlightColor:e.highlight||e.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*_MathPI,circumference:this.options.animateRotate?0:this.calculateCircumference(e.value),label:e.label})),s||(this.reflow(),this.update())},calculateCircumference:function(e){return 0<this.total?2*_MathPI*(e/this.total):0},calculateTotal:function(e){this.total=0,n.each(e,function(e){this.total+=_Mathabs(e.value)},this)},update:function(){this.calculateTotal(this.segments),n.each(this.activeElements,function(e){e.restore(['fillColor'])}),n.each(this.segments,function(e){e.save()}),this.render()},removeData:function(e){var t=n.isNumber(e)?e:this.segments.length-1;this.segments.splice(t,1),this.reflow(),this.update()},reflow:function(){n.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(n.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,n.each(this.segments,function(e){e.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(e){var t=e?e:1;this.clear(),n.each(this.segments,function(e,n){e.transition({circumference:this.calculateCircumference(e.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},t),e.endAngle=e.startAngle+e.circumference,e.draw(),0===n&&(e.startAngle=1.5*_MathPI),n<this.segments.length-1&&(this.segments[n+1].startAngle=e.endAngle)},this)}}),t.types.Doughnut.extend({name:'Pie',defaults:n.merge(s,{percentageInnerCutout:0})})}).call(window),function(){function e(e){return 0==e.indexOf('http://')||0==e.indexOf('https://')}function t(t,n,s,i,o,r,l){function d(){var e=h._flAuthSettings.silentRenewUri,t={client_id:h._flAuthSettings.clientId,authority:h._flAuthSettings.identityGatewayBaseUri,response_type:'id_token token',redirect_uri:h._flAuthSettings.redirectUri,post_logout_redirect_uri:h._flAuthSettings.signoutRedirectUri,scope:'openid impersonation flapi.all fl.session flapi.introspection',persistKey:h._flAuthSettings.clientId+'.TokenManager.token',request_state_key:h._flAuthSettings.clientId+'.OidcClient.request_state.'+f,clientPersistKey:h._clientPersistKey,silent_renew:e,silent_redirect_uri:h._flAuthSettings.silentRenewUri,load_user_profile:!1};return t}function u(e){var t=s.defer(),n={};n.withCredentials=!0,n.headers={Authorization:'Bearer '+h.accessToken};return h._$http.get(h._userInfoApi+('?profileId='+e),n).then(function(e){return t.resolve(e.data.model),e},function(){t.reject()}),t.promise}function c(){return s(function(e){var t=h.accessToken;// If no access token - we assume you have been logged out
// return a null session
if(!t)return h._callSessionExpired(),e(null);var n={};n.headers={Authorization:'Bearer '+t},h._$http.get(h._checkSessionUri,n).then(function(t){200!==t.status&&(h._callSessionExpired(),e(null)),e(t.data)}).catch(function(){h._callSessionExpired(),e(null)})})}function p(){function e(){i&&(t.clearTimeout(i),i=null)}function n(n){e(),i=t.setTimeout(s,1e3*n)}function s(){c().then(function(e){if(e){var t=e.ExpireSeconds,s=t-300;// If less than the notification period - then modify next duration check and call expiring function
t<=300&&(s=t+1,h._callSessionExpiring(t)),n(s)}}).catch(function(){})}// Call these when session expires or logsout
var i=null;h.addOnSessionExpired(e),h.addOnSessionLogout(e),n(1)}// Used for detetcing signout on another tab for same session
function m(){return s(function(t){// add iframe to monitor session state at id gateway
var e=document.createElement('iframe');e.style.display='none',e.src=h._flAuthSettings.identityGatewayBaseUri+'connect/checksession',e.id='checkSession',e.onload=function(){function n(){e.contentWindow.postMessage(h._flAuthSettings.clientId+' '+h._tokenManager.session_state,h._flAuthSettings.identityGatewayBaseUri)}function s(){window.clearInterval(i)}// Call these when session expires or logsout
var i=window.setInterval(n,2e3);h.addOnSessionExpired(s),h.addOnSessionLogout(s),window.addEventListener('message',function(n){var e=h._flAuthSettings.identityGatewayBaseUri.substr(0,h._flAuthSettings.identityGatewayBaseUri.indexOf('/',h._flAuthSettings.identityGatewayBaseUri.indexOf('//')+2));n.origin.toLowerCase()===e.toLowerCase()&&(('error'===n.data||'changed'===n.data)&&s(),'changed'===n.data&&h._callSessionLoggedOut()),t()}),n()},document.body.appendChild(e)})}/*  End Code for Session Expire and Logout   */function g(){h._deferred.resolve()}var h=this;if(!r)throw new Error('flAuthSettings is required');if(!r.clientId)throw new Error('clientId is required');if(!r.identityGatewayBaseUri)throw new Error('identityGatewayBaseUri is required');if(!r.signoutRedirectUri)throw new Error('signoutRedirectUri is required');if(!r.redirectUri)throw new Error('redirectUri is required');this._flAuthSettings=r,this._userInfoApi=this._flAuthSettings.identityGatewayBaseUri+'api/account/userinfo';//Generate session id used in the client persist and request state keys (for multiple browser tab issues)
var f='',y=h._flAuthSettings.clientId+'.sessionId';f=t.sessionStorage.getItem(y),f||(f=new Date().getTime()+'-'+Math.random(),t.sessionStorage.setItem(y,f)),this._window=t,this._oidcDiscoveryUri=this._flAuthSettings.identityGatewayBaseUri+'.well-known/openid-configuration',this._flConfigDiscoveryUri=this._flAuthSettings.identityGatewayBaseUri+'api/configs/fl-configuration',this._$q=s,this._$http=i,this._$http.cache=!1,this._deferred=s.defer(),this._userInfoDeferred=s.defer(),this._location=n,this._store=t.localStorage,this._clientPersistKey=this._flAuthSettings.clientId+'.TokenManager.client.'+f,Object.defineProperty(this,'isAuthenticated',{get:function(){return this._tokenManager.id_token!==void 0}}),Object.defineProperty(this,'accessToken',{get:function(){return this._tokenManager.access_token||null}}),Object.defineProperty(this,'isImpersonatingV2',{get:function(){try{return this._tokenManager._token.profile.impersonator_id&&!0}catch(e){}return!1}}),Object.defineProperty(this,'isImpersonating',{get:function(){return this._tokenManager.profile?this._tokenManager.profile.acting_as_id:null}}),Object.defineProperty(this,'profileId',{get:function(){return this._tokenManager.profile?this._tokenManager.profile.sub:null}}),Object.defineProperty(this,'profile',{get:function(){return this._tokenManager.profile?u(this._tokenManager.profile.sub):s.reject()}}),Object.defineProperty(this,'actingAsProfile',{get:function(){return this._tokenManager.profile&&this.isImpersonating?u(this._tokenManager.profile.acting_as_id):s.reject()}}),this._checkSessionUri=this._flAuthSettings.identityGatewayBaseUri+'sessions',this._sessionCallbacks={expiredCallbacks:[],logoutCallbacks:[],expiringCallbacks:[]},function(){var t=d(),n=new OidcTokenManager(t,{responseType:'text'});if(l){var i=function(t){return t&&(e(t.data)?h._window.location.replace(t.data):h._location.url(t.data).replace()),n};return n.processTokenCallbackAsync(l).then(i)}return s.when(n);// resolves immediately
}().then(function(e){return h._tokenManager=e,h.addOnSessionExpired(e.removeToken.bind(e)),h.addOnSessionLogout(e.removeToken.bind(e)),p(),m()}).then(function(){// Check session on load in case existing access token is valid
// but session has expired.  This will remove access token if necessary
return c()}).then(function(){g()}).catch(function(e){o.error(e+'')})}//  Callback Functions
var n=angular.module('flAuth',[]);t.prototype.addOnSessionExpired=function(e){this._sessionCallbacks.expiredCallbacks.push(e)},t.prototype.addOnSessionLogout=function(e){this._sessionCallbacks.logoutCallbacks.push(e)},t.prototype.addOnSessionExpiring=function(e){this._sessionCallbacks.expiringCallbacks.push(e)},t.prototype._callSessionExpired=function(){this._sessionCallbacks.expiredCallbacks.forEach(function(e){e()})},t.prototype._callSessionLoggedOut=function(){this._sessionCallbacks.logoutCallbacks.forEach(function(e){e()})},t.prototype._callSessionExpiring=function(e){this._sessionCallbacks.expiringCallbacks.forEach(function(t){t(e)})},t.prototype.getFlConfigAsync=function(){// I'm so sorry. This is a hack. But it works. I feel so ashamed.
// https://github.com/angular/angular.js/issues/1586
var e=this._flConfigDiscoveryUri+'?t='+new Date().getTime();return this._$http.get(e).then(function(e){var t=e.data.model;if(t)return t;throw new Error('FL config appears to be empty')})},t.prototype.authenticate=function(e){e=e||{},e.impersonationId=null,e.stopImpersonation=!1,this._redirectToAuthorize(e)},t.prototype.impersonate=function(e,t){this._redirectToAuthorize({returnUrl:e,forceLogin:!0,showRegister:!1,impersonationId:t,stopImpersonation:!1,productId:null})},t.prototype.endImpersonate=function(e){var t=this;this.getFlConfigAsync().then(function(n){var s={returnUrl:e||n.defaultEndImpersonateRedirectUri,forceLogin:!0,showRegister:!1,impersonationId:null,stopImpersonation:!0,productId:null};t._redirectToAuthorize(s)})},t.prototype._redirectToAuthorize=function(e){this._tokenManager._settings.acr_values='',e.forceLogin&&(this._tokenManager._settings.prompt='login'),e.showRegister&&(this._tokenManager._settings.acr_values+=' showRegister:true'),e.stopImpersonation?this._tokenManager._settings.acr_values+=' stopImpersonate':e.impersonationId&&(this._tokenManager._settings.acr_values+=' impersonate:'+e.impersonationId),e.productId&&(this._tokenManager._settings.acr_values+=' productId:'+e.productId),e.inviteToken&&(this._tokenManager._settings.acr_values+=' inviteToken:'+e.inviteToken),e.organization&&(this._tokenManager._settings.acr_values+=' orgId:'+encodeURIComponent(e.organization)),this._tokenManager.redirectForToken(e.returnUrl)},t.prototype.signout=function(e){this._tokenManager.redirectForLogout(e)},t.prototype.accountSettingsUrl=function(e,t){if(!e)throw new Error('returnUrl is required');var n=['returnUrl='+encodeURIComponent(e),'idToken='+this._tokenManager.id_token,'signoutUrl='+encodeURIComponent(this._flAuthSettings.signoutRedirectUri)];0<this._flAuthSettings.productId.length?n.push('productId='+this._flAuthSettings.productId):n.push('clientId='+this._flAuthSettings.clientId),!0===t&&n.push('supportImpersonation=true');var s=this._flAuthSettings.identityGatewayBaseUri+'ui/#/settings/profile?'+n.join('&');return s},t.prototype.processLogoutCallback=function(e){var t=this._clientPersistKey,n=this._tokenManager._settings.store.getItem(t);if(n=JSON.parse(n),n&&n.state===e)return this._tokenManager._settings.store.removeItem(t),n.data},t.prototype.ready=function(){return this._deferred.promise},t.prototype.renewSession=function(){var e=this;return e.ready().then(function(){if(e.isAuthenticated){var t=e._flAuthSettings.identityGatewayBaseUri+'sessions/renew',n={withCredentials:!0,headers:{Authorization:'Bearer '+e.accessToken}};return e._$http.post(t,{},n)}})},n.provider('flAuthService',function(){var e='',n='',s='',i='',o='',r='';Object.defineProperty(this,'clientId',{get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,'productId',{get:function(){return n},set:function(e){n=e}}),Object.defineProperty(this,'identityGatewayBaseUri',{get:function(){return s},set:function(e){s=e}}),Object.defineProperty(this,'silentRenewUri',{get:function(){return i},set:function(e){i=e}}),Object.defineProperty(this,'signoutRedirectUri',{get:function(){return r},set:function(e){r=e}}),Object.defineProperty(this,'redirectUri',{get:function(){return o},set:function(e){o=e}}),this.$get=['$location','$q','$http','$log','$window',function(l,d,u,c,p){var m={clientId:e,productId:n,identityGatewayBaseUri:s,silentRenewUri:i,redirectUri:o,signoutRedirectUri:r},g;return 0<=l.absUrl().indexOf(o)&&(g=l.absUrl().replace(o,'')),g?new t(p,l,d,u,c,m,g):new t(p,l,d,u,c,m)}]})}(),function(){function e(e,t,n,s){function i(){var e=new Date-p;(angular.isUndefined(p)||e>c)&&(n.renewSession().then(function(e){d&&'function'==typeof d&&d(e)}).catch(function(e){t.error('Could not auto renew the session.',e)}),p=new Date)}var o=s,r=!angular.isDefined(o.autoRenewEnabled)||o.autoRenewEnabled,l=o.renewEvents||['click','touchstart','keyup'],d=o.renewCallback,u=o.renewBufferSeconds||300,c=1e3*u,p;return{startListening:function(){r&&(i(),l.map(function(t){e.addEventListener(t,function(){i()})}))}}}var t=angular.module('flAuth');t.run(['flAuthService','flAuthSessionService',function(e,t){t.startListening()}]),t.provider('flAuthSessionService',function(){// Obtained from http://stackoverflow.com/a/5639455/1072030 
function t(e,t,n,s){var o;for(t=document.cookie.split('; '),o={},s=t.length-1;0<=s;s--)n=t[s].split('='),o[n[0]]=n[1];return o[e]}function n(){// Would love to use angular's $Cookie service, but this project isn't setup to use bower dependencies.
var e=t('Config-Overrides');if(!angular.isUndefined(e))return e=decodeURIComponent(e),JSON.parse(e)}function s(e){try{var t=n();if(angular.isUndefined(t))return;angular.isDefined(t.flAuthSessionRenewBufferSeconds)&&(l=parseInt(t.flAuthSessionRenewBufferSeconds))}catch(t){e.error('An error occurred trying to parse flAuth config overrides',t)}}var i;Object.defineProperty(this,'autoRenewEnabled',{get:function(){return i},set:function(e){i=e}});var o;Object.defineProperty(this,'renewEvents',{get:function(){return o},set:function(e){o=e}});var r;Object.defineProperty(this,'renewCallback',{get:function(){return r},set:function(e){r=e}});var l;Object.defineProperty(this,'renewBufferSeconds',{get:function(){return l},set:function(e){l=e}}),this.$get=['$window','$document','$log','flAuthService',function(t,n,d,u){s(d);var c={autoRenewEnabled:i,renewEvents:o,renewCallback:r,renewBufferSeconds:l};return new e(t,d,u,c)}]})}();var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},createClass=function(){function e(e,t){for(var n=0,s;n<t.length;n++)s=t[n],s.enumerable=s.enumerable||!1,s.configurable=!0,'value'in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),inherits=function(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e},slicedToArray=function(){function e(e,t){var n=[],s=!0,i=!1,o=void 0;try{for(var r=e[Symbol.iterator](),l;!(s=(l=r.next()).done)&&(n.push(l.value),!(t&&n.length===t));s=!0);}catch(e){i=!0,o=e}finally{try{!s&&r['return']&&r['return']()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};/*! modernizr 3.2.0 (Custom Build) | MIT *
	 * http://modernizr.com/download/?-localstorage-placeholder-sessionstorage-setclasses !*/!function(t,e){function p(t,e){return('undefined'==typeof t?'undefined':_typeof(t))===e}function n(){var o,d,u,g,h,y,v;for(var b in i)if(i.hasOwnProperty(b)){if(o=[],d=i[b],d.name&&(o.push(d.name.toLowerCase()),d.options&&d.options.aliases&&d.options.aliases.length))for(u=0;u<d.options.aliases.length;u++)o.push(d.options.aliases[u].toLowerCase());for(g=p(d.fn,'function')?d.fn():d.fn,h=0;h<o.length;h++)y=o[h],v=y.split('.'),1===v.length?l[v[0]]=g:(!l[v[0]]||l[v[0]]instanceof Boolean||(l[v[0]]=new Boolean(l[v[0]])),l[v[0]][v[1]]=g),m.push((g?'':'no-')+v.join('-'))}}function o(s){var e=c.className,i=l._config.classPrefix||'';if(g&&(e=e.baseVal),l._config.enableJSClass){var t=new RegExp('(^|\\s)'+i+'no-js(\\s|$)');e=e.replace(t,'$1'+i+'js$2')}l._config.enableClasses&&(e+=' '+i+s.join(' '+i),g?c.className.baseVal=e:c.className=e)}function s(){return'function'==typeof e.createElement?g?e.createElementNS.call(e,'http://www.w3.org/2000/svg',arguments[0]):e.createElement.apply(e,arguments):e.createElement(arguments[0])}var m=[],i=[],r={_version:'3.2.0',_config:{classPrefix:'',enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(s,e){var n=this;setTimeout(function(){e(n[s])},0)},addTest:function(s,e,n){i.push({name:s,fn:e,options:n})},addAsyncTest:function(t){i.push({name:null,fn:t})}},l=function(){};l.prototype=r,l=new l,l.addTest('localstorage',function(){try{return localStorage.setItem('modernizr','modernizr'),localStorage.removeItem('modernizr'),!0}catch(e){return!1}}),l.addTest('sessionstorage',function(){try{return sessionStorage.setItem('modernizr','modernizr'),sessionStorage.removeItem('modernizr'),!0}catch(e){return!1}});var c=e.documentElement,g='svg'===c.nodeName.toLowerCase();l.addTest('placeholder','placeholder'in s('input')&&'placeholder'in s('textarea')),n(),o(m),delete r.addTest,delete r.addAsyncTest;for(var u=0;u<l._q.length;u++)l._q[u]();t.Modernizr=l}(window,document);var ngJsonapiDatastore=createCommonjsModule(function(e){(function(){function t(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}angular.module('beauby.jsonApiDataStore',[]).factory('JsonApiDataStore',function(){return{store:new i,Model:s}});var n=function(){function e(e,t){for(var n=0,s;n<t.length;n++)s=t[n],s.enumerable=s.enumerable||!1,s.configurable=!0,'value'in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),s=function(){/**
	       * @method constructor
	       * @param {string} type The type of the model.
	       * @param {string} id The id of the model.
	       */function e(n,s){t(this,e),this.id=s,this._type=n,this._attributes=[],this._relationships=[]}/**
	       * @class JsonApiDataStore
	       *//**
	       * Serialize a model.
	       * @method serialize
	       * @param {object} opts The options for serialization.  Available properties:
	       *
	       *  - `{array=}` `attributes` The list of attributes to be serialized (default: all attributes).
	       *  - `{array=}` `relationships` The list of relationships to be serialized (default: all relationships).
	       * @return {object} JSONAPI-compliant object
	       */return n(e,[{key:'serialize',value:function(e){var t=this,n={data:{type:this._type}};return e=e||{},e.attributes=e.attributes||this._attributes,e.relationships=e.relationships||this._relationships,void 0!==this.id&&(n.data.id=this.id),0!==e.attributes.length&&(n.data.attributes={}),0!==e.relationships.length&&(n.data.relationships={}),e.attributes.forEach(function(e){n.data.attributes[e]=t[e]}),e.relationships.forEach(function(e){function s(e){return{type:e._type,id:e.id}}n.data.relationships[e]=t[e]?t[e].constructor===Array?{data:t[e].map(s)}:{data:s(t[e])}:{data:null}}),n}/**
	         * Set/add an attribute to a model.
	         * @method setAttribute
	         * @param {string} attrName The name of the attribute.
	         * @param {object} value The value of the attribute.
	         */},{key:'setAttribute',value:function(e,t){void 0===this[e]&&this._attributes.push(e),this[e]=t}/**
	         * Set/add a relationships to a model.
	         * @method setRelationship
	         * @param {string} relName The name of the relationship.
	         * @param {object} models The linked model(s).
	         */},{key:'setRelationship',value:function(e,t){void 0===this[e]&&this._relationships.push(e),this[e]=t}}]),e}(),i=function(){/**
	       * @method constructor
	       */function e(){t(this,e),this.graph={}}/**
	       * Remove a model from the store.
	       * @method destroy
	       * @param {object} model The model to destroy.
	       */return n(e,[{key:'destroy',value:function(e){delete this.graph[e._type][e.id]}/**
	         * Retrieve a model by type and id. Constant-time lookup.
	         * @method find
	         * @param {string} type The type of the model.
	         * @param {string} id The id of the model.
	         * @return {object} The corresponding model if present, and null otherwise.
	         */},{key:'find',value:function(e,t){return this.graph[e]&&this.graph[e][t]?this.graph[e][t]:null}/**
	         * Retrieve all models by type.
	         * @method findAll
	         * @param {string} type The type of the model.
	         * @return {object} Array of the corresponding model if present, and empty array otherwise.
	         */},{key:'findAll',value:function(e){var t=this;return this.graph[e]?Object.keys(t.graph[e]).map(function(n){return t.graph[e][n]}):[]}/**
	         * Empty the store.
	         * @method reset
	         */},{key:'reset',value:function(){this.graph={}}},{key:'initModel',value:function(e,t){return this.graph[e]=this.graph[e]||{},this.graph[e][t]=this.graph[e][t]||new s(e,t),this.graph[e][t]}},{key:'syncRecord',value:function(e){function t(e){if(!n.find(e.type,e.id)){var t=n.initModel(e.type,e.id);t._placeHolder=!0}return n.graph[e.type][e.id]}var n=this,s=this.initModel(e.type,e.id),i;for(i in delete s._placeHolder,s._attributes.length=0,e.attributes)s._attributes.push(i),s[i]=e.attributes[i];if(e.links&&(s._links=e.links),s._relationships.length=0,e.relationships)for(i in e.relationships){var o=e.relationships[i];void 0!==o.data&&(s._relationships.push(i),s[i]=null===o.data?null:o.data.constructor===Array?o.data.map(t):t(o.data)),o.links&&(s._links=s._links||{},s._links[i]=o.links)}return s}/**
	         * Sync a JSONAPI-compliant payload with the store and return any metadata included in the payload
	         * @method syncWithMeta
	         * @param {object} data The JSONAPI payload
	         * @return {object} The model/array of models corresponding to the payload's primary resource(s) and any metadata.
	         */},{key:'syncWithMeta',value:function(e){var t=e.data,n=this.syncRecord.bind(this);return t?(e.included&&e.included.map(n),{data:t.constructor===Array?t.map(n):n(t),meta:'meta'in e?e.meta:null}):[]}/**
	         * Sync a JSONAPI-compliant payload with the store.
	         * @method sync
	         * @param {object} data The JSONAPI payload
	         * @return {object} The model/array of models corresponding to the payload's primary resource(s).
	         */},{key:'sync',value:function(e){return this.syncWithMeta(e).data}}]),e}();e.exports={JsonApiDataStore:i,JsonApiDataStoreModel:s}})()}),ngJsonapiDatastore_1=ngJsonapiDatastore.JsonApiDataStore,ngJsonapiDatastore_2=ngJsonapiDatastore.JsonApiDataStoreModel;!function(){angular.module('ngMask',[])}(),function(){angular.module('ngMask').directive('mask',['$log','$timeout','MaskService',function(n,e,t){return{restrict:'A',require:'ngModel',compile:function(s,o){function l(t){'number'==typeof t&&(e.cancel(i),i=e(function(){var n=t+1,i=s[0];if(i.setSelectionRange)i.focus(),i.setSelectionRange(t,n);else if(i.createTextRange){var o=i.createTextRange();o.collapse(!0),o.moveEnd('character',n),o.moveStart('character',t),o.select()}}))}if(!o.mask||!o.ngModel)return void n.info('Mask and ng-model attributes are required!');var u=t.create(),i,r;return{pre:function(e,t,n){r=u.generateRegex({mask:n.mask,repeat:n.repeat||n.maskRepeat,clean:'true'===(n.clean||n.maskClean),limit:'true'===(n.limit||n.maskLimit||'true'),restrict:n.restrict||n.maskRestrict||'select',validate:'true'===(n.validate||n.maskValidate||'true'),model:n.ngModel,value:n.ngValue})},post:function(t,s,i,f){r.then(function(){function o(t){var i=t;t=t||'';var c=u.getViewValue(t),y=g.maskWithoutOptionals||'',e=c.withDivisors(!0),v=c.withoutDivisors(!0);try{var _=u.getRegex(e.length-1),S=u.getRegex(y.length-1),m=_.test(e)||S.test(e),A=1==t.length-e.length,o=0<y.length-e.length;if('accept'!==g.restrict)if('select'!==g.restrict||m&&!A)'reject'!==g.restrict||m||(c=u.removeWrongPositions(e),e=c.withDivisors(!0),v=c.withoutDivisors(!0));else{var p=t[t.length-1],x=e[e.length-1];p!==x&&o&&(e+=p);var r=u.getFirstWrongPosition(e);angular.isDefined(r)&&l(r)}g.limit||(e=c.withDivisors(!1),v=c.withoutDivisors(!1)),g.validate&&f.$dirty&&(S.test(e)||f.$isEmpty(i)?f.$setValidity('mask',!0):f.$setValidity('mask',!1)),t!==e&&(f.$setViewValue(angular.copy(e),'input'),f.$render())}catch(e){throw n.error('[mask - parseViewValue]'),e}return g.clean?v:e}var g=u.getOptions(),r;f.$parsers.push(o),s.on('click input paste keyup',function(){r=e(function(){e.cancel(r),o(s.val()),t.$apply()},100)});var d=t.$watch(i.ngModel,function(e){angular.isDefined(e)&&(o(e),d())});g.value&&t.$evalAsync(function(){f.$setViewValue(angular.copy(g.value),'input'),f.$render()})})}}}}}])}(),function(){angular.module('ngMask').factory('MaskService',['$q','OptionalService','UtilService',function(r,p,n){function e(){function c(t,n){var s;try{var i=$[t],o=h[i],e=f(t);o?s='('+o.source+')':(g(t)||(y.push(t),E[t]=i),s='(\\'+i+')')}catch(e){throw e}return(e||n)&&(s+='?'),new RegExp(s)}function d(e,t){var n,s;try{var o=c(e,t);n=o;var r=f(e),i=o.source;if(r&&P>e+1){var l=d(e+1,!0).elementOptionalRegex();i+=l.source}s=new RegExp(i)}catch(e){throw e}return{elementRegex:function(){return n},elementOptionalRegex:function(){return s}}}function e(e){var t=r.defer();C=e;try{var s=e.mask,u=e.repeat;if(!s)return;u&&(s=Array(parseInt(u)+1).join(s)),O=p.getOptionals(s).fromMaskWithoutOptionals(),C.maskWithoutOptionals=$=p.removeOptionals(s),P=$.length;for(var c=0,g;P>c;c++){var v=d(c),l=v.elementRegex(),m=v.elementOptionalRegex(),n=g?g.source+m.source:m.source;n=new RegExp(n),g=g?g.source+l.source:l.source,g=new RegExp(g),A.push(n)}b(),k=S($).length,t.resolve({options:C,divisors:y,divisorElements:E,optionalIndexes:O,optionalDivisors:I,optionalDivisorsCombinations:x})}catch(e){throw t.reject(e),e}return t.promise}function _(e){var t;try{t=A[e]?A[e].source:''}catch(e){throw e}return new RegExp('^'+t+'$')}function f(e){return n.inArray(e,O)}function g(e){return n.inArray(e,y)}function b(){function t(e,t){return e-t}for(var n=y.sort(t),s=O.sort(t),i=0;i<n.length;i++)for(var o=n[i],e=1,r;e<=s.length&&(r=s[e-1],!(r>=o));e++)I[o]=I[o]?I[o].concat(o-e):[o-e],E[o-e]=E[o]}function S(t){t=t.toString();try{if(0<y.length&&t){for(var s=Object.keys(E),i=[],o=s.length-1,r;0<=o;o--)r=E[s[o]],r&&i.push(r);i=n.uniqueArray(i);var l=new RegExp('[\\'+i.join('\\')+']','g');return t.replace(l,'')}return t}catch(e){throw e}}function T(t,s){function i(t,n){for(var s=n,i=0,o;i<t.length;i++)o=t[i],o<s.length&&s.splice(o,0,E[o]);return s}var o=t,r=y.filter(function(e){var t=Object.keys(I).map(function(e){return parseInt(e)});return!n.inArray(e,s)&&!n.inArray(e,t)});return angular.isArray(t)&&angular.isArray(s)?(o=i(r,o),o=i(s,o)):o}function i(t){var s=t.split(''),o=!0;if(0<O.length){for(var r=[],e=Object.keys(I),l=0,u;l<e.length;l++)u=I[e[l]],r.push(u);0===x.length&&n.lazyProduct(r,function(){x.push(Array.prototype.slice.call(arguments))});for(var l=x.length-1,c;0<=l;l--){c=angular.copy(s),c=T(c,x[l]);var p=c.join(''),g=_($.length-1);if(g.test(p)){o=!1,s=c;break}}}return o&&(s=T(s,y)),s.join('')}function l(){return C}function m(e){try{var t=S(e),n=i(t);return{withDivisors:function(e){return e?n.substr(0,P):n},withoutDivisors:function(e){return e?t.substr(0,k):t}}}catch(e){throw e}}function o(t,n){var s=[];if(!t)return 0;for(var i=0;i<t.length;i++){var o=_(i),e=t.substr(0,i+1);if(o&&!o.test(e)&&(s.push(i),n))break}return s}var P=0,k=0,O=[],I={},x=[],y=[],E={},A=[],h={9:/[0-9]/,8:/[0-8]/,7:/[0-7]/,6:/[0-6]/,5:/[0-5]/,4:/[0-4]/,3:/[0-3]/,2:/[0-2]/,1:/[0-1]/,0:/[0]/,"*":/./,w:/\w/,W:/\W/,d:/\d/,D:/\D/,s:/\s/,S:/\S/,b:/\b/,A:/[A-Z]/,a:/[a-z]/,Z:/[A-ZÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,z:/[a-zçáàãâéèêẽíìĩîóòôõúùũüû]/,"@":/[a-zA-Z]/,"#":/[a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,"%":/[0-9a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/},C,$;return{getViewValue:m,generateRegex:e,getRegex:_,getOptions:l,removeDivisors:S,getFirstWrongPosition:function(e){return o(e,!0)[0]},removeWrongPositions:function(t){for(var n=o(t,!1),s=t,i=0;i<n.length;i++){var r=n[i],e=t.split('');e.splice(r,1),s=e.join('')}return m(s)}}}return{create:e}}])}(),function(){angular.module('ngMask').factory('OptionalService',[function(){function e(n){var s=[];try{for(var i=/\?/g,o=[];null!=(o=i.exec(n));)s.push(o.index-1)}catch(e){throw e}return{fromMask:function(){return s},fromMaskWithoutOptionals:function(){return t(s)}}}function t(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]-n);return t}return{removeOptionals:function(e){var t;try{t=e.replace(/\?/g,'')}catch(e){throw e}return t},getOptionals:e}}])}(),function(){angular.module('ngMask').factory('UtilService',[function(){function e(t,n,s){function o(d){var u=t[d],i=l[d];if(d===e)for(var c=0;i>c;++c)r[d]=u[c],n.apply(s,r);else for(var c=0;i>c;++c)r[d]=u[c],o(d+1);r.pop()}s||(s=this);for(var r=[],e=t.length-1,l=[],i=t.length;i--;)l[i]=t[i].length;o(0)}function t(e,t){var n;try{n=-1<t.indexOf(e)}catch(e){throw e}return n}function n(t){for(var n={},s=[],i=0,o=t.length;o>i;++i)n.hasOwnProperty(t[i])||(s.push(t[i]),n[t[i]]=1);return s}return{lazyProduct:e,inArray:t,uniqueArray:n}}])}();var oidcTokenManager=createCommonjsModule(function(module){(function(){/**
	         * @constructor
	         * @param {Promise} promise
	         */function DefaultPromise(e){this.then=function(t,n){var s=e.then(t,n);return new DefaultPromise(s)},this.catch=function(t){var n=e.catch(t);return new DefaultPromise(n)}}/**
	         * @constructor
	         */function DefaultPromiseFactory(){this.resolve=function(e){return new DefaultPromise(Promise.resolve(e))},this.reject=function(e){return new DefaultPromise(Promise.reject(e))},this.create=function(e){return new DefaultPromise(new Promise(e))}}function copy(e,t){for(var n in t=t||{},e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function Token(e){if(e){if(this.profile=e.profile,this.id_token=e.id_token,this.access_token=e.access_token,e.access_token)this.expires_at=parseInt(e.expires_at);else if(e.id_token)this.expires_at=e.profile.exp;else throw Error('Either access_token or id_token required.');this.scopes=(e.scope||'').split(' '),this.session_state=e.session_state}else this.expires_at=0;Object.defineProperty(this,'expired',{get:function(){var e=parseInt(Date.now()/1e3);return this.expires_at<e}}),Object.defineProperty(this,'expires_in',{get:function(){var e=parseInt(Date.now()/1e3);return this.expires_at-e}})}function FrameLoader(e){this.url=e}function loadToken(e){if(e._token=null,e._settings.persist){var t=e._settings.store.getItem(e._settings.persistKey);if(t){var n=Token.fromJSON(t);n.expired||(e._token=n)}}}function configureTokenExpiring(e){function t(){o=null,e._callTokenExpiring()}function n(){o&&(window.clearTimeout(o),o=null)}function s(e){o=window.setTimeout(t,1e3*e)}function i(){if(n(),!e.expired){var i=e.expires_in;60<i?s(i-60):t()}}var o=null;i(),e.addOnTokenObtained(i),e.addOnTokenRemoved(n)}function configureAutoRenewToken(t){t._settings.silent_redirect_uri&&t._settings.silent_renew&&t.addOnTokenExpiring(function(){t.renewTokenSilentAsync().catch(function(n){t._callSilentTokenRenewFailed(),console.error(n.message||n)})})}function configureTokenExpired(e){function t(){o=null,e._token&&e.saveToken(null),e._callTokenExpired()}function n(){o&&(window.clearTimeout(o),o=null)}function s(e){o=window.setTimeout(t,1e3*e)}function i(){n(),0<e.expires_in&&s(e.expires_in+1)}var o=null;i(),e.addOnTokenObtained(i),e.addOnTokenRemoved(n)}function TokenManager(e,t){this._settings=e||{},this._settings.persist=this._settings.persist||!0,this._settings.store=this._settings.store||window.localStorage,this._settings.persistKey=this._settings.persistKey||'TokenManager.token',this._settings.clientPersistKey=this._settings.clientPersistKey||'TokenManager.client',this.oidcClient=new OidcClient(this._settings,t),this._callbacks={tokenRemovedCallbacks:[],tokenExpiringCallbacks:[],tokenExpiredCallbacks:[],tokenObtainedCallbacks:[],silentTokenRenewFailedCallbacks:[]},Object.defineProperty(this,'profile',{get:function(){if(this._token)return this._token.profile}}),Object.defineProperty(this,'id_token',{get:function(){if(this._token)return this._token.id_token}}),Object.defineProperty(this,'access_token',{get:function(){if(this._token&&!this._token.expired)return this._token.access_token}}),Object.defineProperty(this,'expired',{get:function(){return!this._token||this._token.expired}}),Object.defineProperty(this,'expires_in',{get:function(){return this._token?this._token.expires_in:0}}),Object.defineProperty(this,'expires_at',{get:function(){return this._token?this._token.expires_at:0}}),Object.defineProperty(this,'scopes',{get:function(){return this._token?[].concat(this._token.scopes):[]}}),Object.defineProperty(this,'session_state',{get:function(){if(this._token)return this._token.session_state}});var n=this;loadToken(n),window.addEventListener('storage',function(t){t.key===n._settings.persistKey&&(loadToken(n),n._token?n._callTokenObtained():n._callTokenRemoved())}),configureTokenExpired(n),configureAutoRenewToken(n),window.setTimeout(function(){configureTokenExpiring(n)},0)}/**
	         * @param {{ create:function(successCallback:function(), errorCallback:function()):Promise, resolve:function(value:*):Promise, reject:function():Promise}} promiseFactory
	         */// globals
var _promiseFactory;_promiseFactory=new DefaultPromiseFactory,function(){function hex2b64(e){var t='',n,s;for(n=0;n+3<=e.length;n+=3)s=parseInt(e.substring(n,n+3),16),t+='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(s>>6)+'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(63&s);for(n+1==e.length?(s=parseInt(e.substring(n,n+1),16),t+='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(s<<2)):n+2==e.length&&(s=parseInt(e.substring(n,n+2),16),t+='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(s>>2)+'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt((3&s)<<4));0<(3&t.length);)t+='=';return t}// convert a base64 string to hex
function b64tohex(e){var t='',n=0,s,o,r;// b64 state, 0-3
for(s=0;s<e.length&&'='!=e.charAt(s);++s)r='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(e.charAt(s)),0>r||(0==n?(t+=int2char(r>>2),o=3&r,n=1):1==n?(t+=int2char(o<<2|r>>4),o=15&r,n=2):2==n?(t+=int2char(o),t+=int2char(r>>2),o=3&r,n=3):(t+=int2char(o<<2|r>>4),t+=int2char(15&r),n=0));return 1==n&&(t+=int2char(o<<2)),t}/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	             */// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.
// Basic JavaScript BN library - subset useful for RSA encryption.
// Bits per digit
// (public) Constructor
function BigInteger(e,t,n){null!=e&&('number'==typeof e?this.fromNumber(e,t,n):null==t&&'string'!=typeof e?this.fromString(e,256):this.fromString(e,t))}// return new, unset BigInteger
function nbi(){return new BigInteger(null)}// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.
// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function am1(e,t,s,o,r,l){for(;0<=--l;){var d=t*this[e++]+s[o]+r;r=_Mathfloor(d/67108864),s[o++]=67108863&d}return r}// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function am2(e,t,s,o,r,d){for(var u=32767&t,p=t>>15;0<=--d;){var g=32767&this[e],f=this[e++]>>15,h=p*g+f*u;g=u*g+((32767&h)<<15)+s[o]+(1073741823&r),r=(g>>>30)+(h>>>15)+p*f+(r>>>30),s[o++]=1073741823&g}return r}// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function am3(e,t,s,o,r,d){for(var u=16383&t,p=t>>14;0<=--d;){var g=16383&this[e],f=this[e++]>>14,h=p*g+f*u;g=u*g+((16383&h)<<14)+s[o]+r,r=(g>>28)+(h>>14)+p*f,s[o++]=268435455&g}return r}function int2char(e){return'0123456789abcdefghijklmnopqrstuvwxyz'.charAt(e)}function intAt(e,t){var n=BI_RC[e.charCodeAt(t)];return null==n?-1:n}// (protected) copy this to r
function bnpCopyTo(e){for(var t=this.t-1;0<=t;--t)e[t]=this[t];e.t=this.t,e.s=this.s}// (protected) set from integer value x, -DV <= x < DV
function bnpFromInt(e){this.t=1,this.s=0>e?-1:0,0<e?this[0]=e:-1>e?this[0]=e+this.DV:this.t=0}// return bigint initialized to value
function nbv(e){var t=nbi();return t.fromInt(e),t}// (protected) set from string and radix
function bnpFromString(e,t){var n;if(16==t)n=4;else if(8==t)n=3;else if(256==t)n=8;// byte array
else if(2==t)n=1;else if(32==t)n=5;else if(4==t)n=2;else return void this.fromRadix(e,t);this.t=0,this.s=0;for(var s=e.length,o=!1,r=0,l;0<=--s;){if(l=8==n?255&e[s]:intAt(e,s),0>l){'-'==e.charAt(s)&&(o=!0);continue}o=!1,0==r?this[this.t++]=l:r+n>this.DB?(this[this.t-1]|=(l&(1<<this.DB-r)-1)<<r,this[this.t++]=l>>this.DB-r):this[this.t-1]|=l<<r,r+=n,r>=this.DB&&(r-=this.DB)}8==n&&0!=(128&e[0])&&(this.s=-1,0<r&&(this[this.t-1]|=(1<<this.DB-r)-1<<r)),this.clamp(),o&&BigInteger.ZERO.subTo(this,this)}// (protected) clamp off excess high words
function bnpClamp(){for(var e=this.s&this.DM;0<this.t&&this[this.t-1]==e;)--this.t}// (public) return string representation in given radix
function bnToString(e){if(0>this.s)return'-'+this.negate().toString(e);var t;if(16==e)t=4;else if(8==e)t=3;else if(2==e)t=1;else if(32==e)t=5;else if(4==e)t=2;else return this.toRadix(e);var n=(1<<t)-1,s=!1,o='',l=this.t,u=this.DB-l*this.DB%t,c;if(0<l--)for(u<this.DB&&0<(c=this[l]>>u)&&(s=!0,o=int2char(c));0<=l;)u<t?(c=(this[l]&(1<<u)-1)<<t-u,c|=this[--l]>>(u+=this.DB-t)):(c=this[l]>>(u-=t)&n,0>=u&&(u+=this.DB,--l)),0<c&&(s=!0),s&&(o+=int2char(c));return s?o:'0'}// (public) -this
function bnNegate(){var e=nbi();return BigInteger.ZERO.subTo(this,e),e}// (public) |this|
function bnAbs(){return 0>this.s?this.negate():this}// (public) return + if this > a, - if this < a, 0 if equal
function bnCompareTo(e){var t=this.s-e.s;if(0!=t)return t;var n=this.t;if(t=n-e.t,0!=t)return 0>this.s?-t:t;for(;0<=--n;)if(0!=(t=this[n]-e[n]))return t;return 0}// returns bit length of the integer x
function nbits(e){var n=1,s;return 0!=(s=e>>>16)&&(e=s,n+=16),0!=(s=e>>8)&&(e=s,n+=8),0!=(s=e>>4)&&(e=s,n+=4),0!=(s=e>>2)&&(e=s,n+=2),0!=(s=e>>1)&&(e=s,n+=1),n}// (public) return the number of bits in "this"
function bnBitLength(){return 0>=this.t?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}// (protected) r = this << n*DB
function bnpDLShiftTo(e,t){var n;for(n=this.t-1;0<=n;--n)t[n+e]=this[n];for(n=e-1;0<=n;--n)t[n]=0;t.t=this.t+e,t.s=this.s}// (protected) r = this >> n*DB
function bnpDRShiftTo(e,t){for(var n=e;n<this.t;++n)t[n-e]=this[n];t.t=_Mathmax(this.t-e,0),t.s=this.s}// (protected) r = this << n
function bnpLShiftTo(e,t){var n=e%this.DB,s=this.DB-n,o=_Mathfloor(e/this.DB),r=this.s<<n&this.DM,l;for(l=this.t-1;0<=l;--l)t[l+o+1]=this[l]>>s|r,r=(this[l]&(1<<s)-1)<<n;for(l=o-1;0<=l;--l)t[l]=0;t[o]=r,t.t=this.t+o+1,t.s=this.s,t.clamp()}// (protected) r = this >> n
function bnpRShiftTo(e,t){t.s=this.s;var n=_Mathfloor(e/this.DB);if(n>=this.t)return void(t.t=0);var s=e%this.DB,o=this.DB-s,r=(1<<s)-1;t[0]=this[n]>>s;for(var l=n+1;l<this.t;++l)t[l-n-1]|=(this[l]&r)<<o,t[l-n]=this[l]>>s;0<s&&(t[this.t-n-1]|=(this.s&r)<<o),t.t=this.t-n,t.clamp()}// (protected) r = this - a
function bnpSubTo(e,t){for(var n=0,s=0,o=_Mathmin(e.t,this.t);n<o;)s+=this[n]-e[n],t[n++]=s&this.DM,s>>=this.DB;if(e.t<this.t){for(s-=e.s;n<this.t;)s+=this[n],t[n++]=s&this.DM,s>>=this.DB;s+=this.s}else{for(s+=this.s;n<e.t;)s-=e[n],t[n++]=s&this.DM,s>>=this.DB;s-=e.s}t.s=0>s?-1:0,-1>s?t[n++]=this.DV+s:0<s&&(t[n++]=s),t.t=n,t.clamp()}// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function bnpMultiplyTo(e,t){var n=this.abs(),s=e.abs(),o=n.t;for(t.t=o+s.t;0<=--o;)t[o]=0;for(o=0;o<s.t;++o)t[o+n.t]=n.am(0,s[o],t,o,0,n.t);t.s=0,t.clamp(),this.s!=e.s&&BigInteger.ZERO.subTo(t,t)}// (protected) r = this^2, r != this (HAC 14.16)
function bnpSquareTo(e){for(var t=this.abs(),n=e.t=2*t.t;0<=--n;)e[n]=0;for(n=0;n<t.t-1;++n){var s=t.am(n,t[n],e,2*n,0,1);(e[n+t.t]+=t.am(n+1,2*t[n],e,2*n+1,s,t.t-n-1))>=t.DV&&(e[n+t.t]-=t.DV,e[n+t.t+1]=1)}0<e.t&&(e[e.t-1]+=t.am(n,t[n],e,2*n,0,1)),e.s=0,e.clamp()}// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function bnpDivRemTo(n,s,o){var l=n.abs();// "negative" y so we can replace sub with am later
if(!(0>=l.t)){var d=this.abs();if(d.t<l.t)return null!=s&&s.fromInt(0),void(null!=o&&this.copyTo(o));null==o&&(o=nbi());var u=nbi(),c=this.s,p=n.s,m=this.DB-nbits(l[l.t-1]);0<m?(l.lShiftTo(m,u),d.lShiftTo(m,o)):(l.copyTo(u),d.copyTo(o));var g=u.t,h=u[g-1];if(0!=h){var f=h*(1<<this.F1)+(1<g?u[g-2]>>this.F2:0),y=this.FV/f,v=(1<<this.F1)/f,b=1<<this.F2,e=o.t,_=e-g,S=null==s?nbi():s;for(u.dlShiftTo(_,S),0<=o.compareTo(S)&&(o[o.t++]=1,o.subTo(S,o)),BigInteger.ONE.dlShiftTo(g,S),S.subTo(u,u);u.t<g;)u[u.t++]=0;for(;0<=--_;){// Estimate quotient digit
var t=o[--e]==h?this.DM:_Mathfloor(o[e]*y+(o[e-1]+b)*v);if((o[e]+=u.am(0,t,o,_,0,g))<t)for(u.dlShiftTo(_,S),o.subTo(S,o);o[e]<--t;)o.subTo(S,o)}null!=s&&(o.drShiftTo(g,s),c!=p&&BigInteger.ZERO.subTo(s,s)),o.t=g,o.clamp(),0<m&&o.rShiftTo(m,o),0>c&&BigInteger.ZERO.subTo(o,o)}}// normalize modulus
}// (public) this mod a
function bnMod(e){var t=nbi();return this.abs().divRemTo(e,null,t),0>this.s&&0<t.compareTo(BigInteger.ZERO)&&e.subTo(t,t),t}// Modular reduction using "classic" algorithm
function Classic(e){this.m=e}function cConvert(e){return 0>e.s||0<=e.compareTo(this.m)?e.mod(this.m):e}function cRevert(e){return e}function cReduce(e){e.divRemTo(this.m,null,e)}function cMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}function cSqrTo(e,t){e.squareTo(t),this.reduce(t)}// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function bnpInvDigit(){if(1>this.t)return 0;var e=this[0];if(0==(1&e))return 0;var t=3&e;// y == 1/x mod 2^2
// y == 1/x mod 2^dbits
// we really want the negative inverse, and -DV < y < DV
return t=15&t*(2-(15&e)*t),t=255&t*(2-(255&e)*t),t=65535&t*(2-(65535&(65535&e)*t)),t=t*(2-e*t%this.DV)%this.DV,0<t?this.DV-t:-t}// Montgomery reduction
function Montgomery(e){this.m=e,this.mp=e.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}// xR mod m
function montConvert(e){var t=nbi();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),0>e.s&&0<t.compareTo(BigInteger.ZERO)&&this.m.subTo(t,t),t}// x/R mod m
function montRevert(e){var t=nbi();return e.copyTo(t),this.reduce(t),t}// x = x/R mod m (HAC 14.32)
function montReduce(e){for(;e.t<=this.mt2;)// pad x so am has enough room later
e[e.t++]=0;for(var t=0;t<this.m.t;++t){// faster way of calculating u0 = x[i]*mp mod DV
var n=32767&e[t],s=n*this.mpl+((n*this.mph+(e[t]>>15)*this.mpl&this.um)<<15)&e.DM;// use am to combine the multiply-shift-add into one call
// propagate carry
for(n=t+this.m.t,e[n]+=this.m.am(0,s,e,t,0,this.m.t);e[n]>=e.DV;)e[n]-=e.DV,e[++n]++}e.clamp(),e.drShiftTo(this.m.t,e),0<=e.compareTo(this.m)&&e.subTo(this.m,e)}// r = "x^2/R mod m"; x != r
function montSqrTo(e,t){e.squareTo(t),this.reduce(t)}// r = "xy/R mod m"; x,y != r
function montMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}// (protected) true iff this is even
function bnpIsEven(){return 0==(0<this.t?1&this[0]:this.s)}// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
function bnpExp(n,e){if(4294967295<n||1>n)return BigInteger.ONE;var s=nbi(),o=nbi(),l=e.convert(this),d=nbits(n)-1;for(l.copyTo(s);0<=--d;)if(e.sqrTo(s,o),0<(n&1<<d))e.mulTo(o,l,s);else{var u=s;s=o,o=u}return e.revert(s)}// (public) this^e % m, 0 <= e < 2^32
function bnModPowInt(t,e){var n;return n=256>t||e.isEven()?new Classic(e):new Montgomery(e),this.exp(t,n)}// protected
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	             */// Copyright (c) 2005-2009  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.
// Extended JavaScript BN functions, required for RSA private ops.
// Version 1.1: new BigInteger("0", 10) returns "proper" zero
// Version 1.2: square() API, isProbablePrime fix
// (public)
function bnClone(){var e=nbi();return this.copyTo(e),e}// (public) return value as integer
function bnIntValue(){if(0>this.s){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}// assumes 16 < DB < 32
return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}// (public) return value as byte
function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}// (public) return value as short (assumes DB>=16)
function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}// (protected) return x s.t. r^x < DV
function bnpChunkSize(e){return _Mathfloor(Math.LN2*this.DB/_Mathlog(e))}// (public) 0 if this == 0, 1 if this > 0
function bnSigNum(){return 0>this.s?-1:0>=this.t||1==this.t&&0>=this[0]?0:1}// (protected) convert to radix string
function bnpToRadix(e){if(null==e&&(e=10),0==this.signum()||2>e||36<e)return'0';var t=this.chunkSize(e),n=_Mathpow(e,t),s=nbv(n),i=nbi(),o=nbi(),l='';for(this.divRemTo(s,i,o);0<i.signum();)l=(n+o.intValue()).toString(e).substr(1)+l,i.divRemTo(s,i,o);return o.intValue().toString(e)+l}// (protected) convert from radix string
function bnpFromRadix(e,t){this.fromInt(0),null==t&&(t=10);for(var n=this.chunkSize(t),s=_Mathpow(t,n),o=!1,r=0,l=0,d=0,u;d<e.length;++d){if(u=intAt(e,d),0>u){'-'==e.charAt(d)&&0==this.signum()&&(o=!0);continue}l=t*l+u,++r>=n&&(this.dMultiply(s),this.dAddOffset(l,0),r=0,l=0)}0<r&&(this.dMultiply(_Mathpow(t,r)),this.dAddOffset(l,0)),o&&BigInteger.ZERO.subTo(this,this)}// (protected) alternate constructor
function bnpFromNumber(e,n,s){if('number'!=typeof n){// new BigInteger(int,RNG)
var i=[],o=7&e;i.length=(e>>3)+1,n.nextBytes(i),0<o?i[0]&=(1<<o)-1:i[0]=0,this.fromString(i,256)}else// new BigInteger(int,int,RNG)
if(2>e)this.fromInt(1);else// force odd
for(this.fromNumber(e,s),this.testBit(e-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(e-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(n);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(BigInteger.ONE.shiftLeft(e-1),this)}// (public) convert to bigendian byte array
function bnToByteArray(){var e=this.t,t=[];t[0]=this.s;var n=this.DB-e*this.DB%8,s=0,o;if(0<e--)for(n<this.DB&&(o=this[e]>>n)!=(this.s&this.DM)>>n&&(t[s++]=o|this.s<<this.DB-n);0<=e;)8>n?(o=(this[e]&(1<<n)-1)<<8-n,o|=this[--e]>>(n+=this.DB-8)):(o=255&this[e]>>(n-=8),0>=n&&(n+=this.DB,--e)),0!=(128&o)&&(o|=-256),0==s&&(128&this.s)!=(128&o)&&++s,(0<s||o!=this.s)&&(t[s++]=o);return t}function bnEquals(e){return 0==this.compareTo(e)}function bnMin(e){return 0>this.compareTo(e)?this:e}function bnMax(e){return 0<this.compareTo(e)?this:e}// (protected) r = this op a (bitwise)
function bnpBitwiseTo(e,t,n){var s=_Mathmin(e.t,this.t),o,r;for(o=0;o<s;++o)n[o]=t(this[o],e[o]);if(e.t<this.t){for(r=e.s&this.DM,o=s;o<this.t;++o)n[o]=t(this[o],r);n.t=this.t}else{for(r=this.s&this.DM,o=s;o<e.t;++o)n[o]=t(r,e[o]);n.t=e.t}n.s=t(this.s,e.s),n.clamp()}// (public) this & a
function op_and(e,t){return e&t}function bnAnd(e){var t=nbi();return this.bitwiseTo(e,op_and,t),t}// (public) this | a
function op_or(e,t){return e|t}function bnOr(e){var t=nbi();return this.bitwiseTo(e,op_or,t),t}// (public) this ^ a
function op_xor(e,t){return e^t}function bnXor(e){var t=nbi();return this.bitwiseTo(e,op_xor,t),t}// (public) this & ~a
function op_andnot(e,t){return e&~t}function bnAndNot(e){var t=nbi();return this.bitwiseTo(e,op_andnot,t),t}// (public) ~this
function bnNot(){for(var e=nbi(),t=0;t<this.t;++t)e[t]=this.DM&~this[t];return e.t=this.t,e.s=~this.s,e}// (public) this << n
function bnShiftLeft(e){var t=nbi();return 0>e?this.rShiftTo(-e,t):this.lShiftTo(e,t),t}// (public) this >> n
function bnShiftRight(e){var t=nbi();return 0>e?this.lShiftTo(-e,t):this.rShiftTo(e,t),t}// return index of lowest 1-bit in x, x < 2^31
function lbit(e){if(0==e)return-1;var t=0;return 0==(65535&e)&&(e>>=16,t+=16),0==(255&e)&&(e>>=8,t+=8),0==(15&e)&&(e>>=4,t+=4),0==(3&e)&&(e>>=2,t+=2),0==(1&e)&&++t,t}// (public) returns index of lowest 1-bit (or -1 if none)
function bnGetLowestSetBit(){for(var e=0;e<this.t;++e)if(0!=this[e])return e*this.DB+lbit(this[e]);return 0>this.s?this.t*this.DB:-1}// return number of 1 bits in x
function cbit(e){for(var t=0;0!=e;)e&=e-1,++t;return t}// (public) return number of set bits
function bnBitCount(){for(var e=0,t=this.s&this.DM,n=0;n<this.t;++n)e+=cbit(this[n]^t);return e}// (public) true iff nth bit is set
function bnTestBit(e){var t=_Mathfloor(e/this.DB);return t>=this.t?0!=this.s:0!=(this[t]&1<<e%this.DB)}// (protected) this op (1<<n)
function bnpChangeBit(e,t){var n=BigInteger.ONE.shiftLeft(e);return this.bitwiseTo(n,t,n),n}// (public) this | (1<<n)
function bnSetBit(e){return this.changeBit(e,op_or)}// (public) this & ~(1<<n)
function bnClearBit(e){return this.changeBit(e,op_andnot)}// (public) this ^ (1<<n)
function bnFlipBit(e){return this.changeBit(e,op_xor)}// (protected) r = this + a
function bnpAddTo(e,t){for(var n=0,s=0,o=_Mathmin(e.t,this.t);n<o;)s+=this[n]+e[n],t[n++]=s&this.DM,s>>=this.DB;if(e.t<this.t){for(s+=e.s;n<this.t;)s+=this[n],t[n++]=s&this.DM,s>>=this.DB;s+=this.s}else{for(s+=this.s;n<e.t;)s+=e[n],t[n++]=s&this.DM,s>>=this.DB;s+=e.s}t.s=0>s?-1:0,0<s?t[n++]=s:-1>s&&(t[n++]=this.DV+s),t.t=n,t.clamp()}// (public) this + a
function bnAdd(e){var t=nbi();return this.addTo(e,t),t}// (public) this - a
function bnSubtract(e){var t=nbi();return this.subTo(e,t),t}// (public) this * a
function bnMultiply(e){var t=nbi();return this.multiplyTo(e,t),t}// (public) this^2
function bnSquare(){var e=nbi();return this.squareTo(e),e}// (public) this / a
function bnDivide(e){var t=nbi();return this.divRemTo(e,t,null),t}// (public) this % a
function bnRemainder(e){var t=nbi();return this.divRemTo(e,null,t),t}// (public) [this/a,this%a]
function bnDivideAndRemainder(e){var t=nbi(),n=nbi();return this.divRemTo(e,t,n),[t,n]}// (protected) this *= n, this >= 0, 1 < n < DV
function bnpDMultiply(e){this[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()}// (protected) this += n << w words, this >= 0
function bnpDAddOffset(e,t){if(0!=e){for(;this.t<=t;)this[this.t++]=0;for(this[t]+=e;this[t]>=this.DV;)this[t]-=this.DV,++t>=this.t&&(this[this.t++]=0),++this[t]}}// A "null" reducer
function NullExp(){}function nNop(e){return e}function nMulTo(e,t,n){e.multiplyTo(t,n)}function nSqrTo(e,t){e.squareTo(t)}// (public) this^e
function bnPow(t){return this.exp(t,new NullExp)}// (protected) r = lower n words of "this * a", a.t <= n
// "this" should be the larger one if appropriate.
function bnpMultiplyLowerTo(e,t,n){var s=_Mathmin(this.t+e.t,t);for(n.s=0,n.t=s;0<s;)n[--s]=0;var o;for(o=n.t-this.t;s<o;++s)n[s+this.t]=this.am(0,e[s],n,s,0,this.t);for(o=_Mathmin(e.t,t);s<o;++s)this.am(0,e[s],n,s,0,t-s);n.clamp()}// (protected) r = "this * a" without lower n words, n > 0
// "this" should be the larger one if appropriate.
function bnpMultiplyUpperTo(e,t,s){--t;var o=s.t=this.t+e.t-t;// assumes a,this >= 0
for(s.s=0;0<=--o;)s[o]=0;for(o=_Mathmax(t-this.t,0);o<e.t;++o)s[this.t+o-t]=this.am(t-o,e[o],s,0,0,this.t+o-t);s.clamp(),s.drShiftTo(1,s)}// Barrett modular reduction
function Barrett(e){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}function barrettConvert(e){if(0>e.s||e.t>2*this.m.t)return e.mod(this.m);if(0>e.compareTo(this.m))return e;var t=nbi();return e.copyTo(t),this.reduce(t),t}function barrettRevert(e){return e}// x = x mod m (HAC 14.42)
function barrettReduce(e){for(e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);0>e.compareTo(this.r2);)e.dAddOffset(1,this.m.t+1);for(e.subTo(this.r2,e);0<=e.compareTo(this.m);)e.subTo(this.m,e)}// r = x^2 mod m; x != r
function barrettSqrTo(e,t){e.squareTo(t),this.reduce(t)}// r = x*y mod m; x,y != r
function barrettMulTo(e,t,n){e.multiplyTo(t,n),this.reduce(n)}// (public) this^e % m (HAC 14.85)
function bnModPow(s,e){var o=s.bitLength(),l=nbv(1),d,u;if(0>=o)return l;d=18>o?1:48>o?3:144>o?4:768>o?5:6,u=8>o?new Classic(e):e.isEven()?new Barrett(e):new Montgomery(e);// precomputation
var c=[],p=3,m=d-1,g=(1<<d)-1;if(c[1]=u.convert(this),1<d){var h=nbi();for(u.sqrTo(c[1],h);p<=g;)c[p]=nbi(),u.mulTo(h,c[p-2],c[p]),p+=2}var f=s.t-1,y=!0,v=nbi(),b,_;for(o=nbits(s[f])-1;0<=f;){for(o>=m?b=s[f]>>o-m&g:(b=(s[f]&(1<<o+1)-1)<<m-o,0<f&&(b|=s[f-1]>>this.DB+o-m)),p=d;0==(1&b);)b>>=1,--p;if(0>(o-=p)&&(o+=this.DB,--f),y)c[b].copyTo(l),y=!1;else{for(;1<p;)u.sqrTo(l,v),u.sqrTo(v,l),p-=2;0<p?u.sqrTo(l,v):(_=l,l=v,v=_),u.mulTo(v,c[b],l)}for(;0<=f&&0==(s[f]&1<<o);)u.sqrTo(l,v),_=l,l=v,v=_,0>--o&&(o=this.DB-1,--f)}return u.revert(l)}// (public) gcd(this,a) (HAC 14.54)
function bnGCD(e){var n=0>this.s?this.negate():this.clone(),s=0>e.s?e.negate():e.clone();if(0>n.compareTo(s)){var o=n;n=s,s=o}var t=n.getLowestSetBit(),r=s.getLowestSetBit();if(0>r)return n;for(t<r&&(r=t),0<r&&(n.rShiftTo(r,n),s.rShiftTo(r,s));0<n.signum();)0<(t=n.getLowestSetBit())&&n.rShiftTo(t,n),0<(t=s.getLowestSetBit())&&s.rShiftTo(t,s),0<=n.compareTo(s)?(n.subTo(s,n),n.rShiftTo(1,n)):(s.subTo(n,s),s.rShiftTo(1,s));return 0<r&&s.lShiftTo(r,s),s}// (protected) this % n, n < 2^26
function bnpModInt(e){if(0>=e)return 0;var t=this.DV%e,n=0>this.s?e-1:0;if(0<this.t)if(0==t)n=this[0]%e;else for(var s=this.t-1;0<=s;--s)n=(t*n+this[s])%e;return n}// (public) 1/this % m (HAC 14.61)
function bnModInverse(e){var t=e.isEven();if(this.isEven()&&t||0==e.signum())return BigInteger.ZERO;for(var n=e.clone(),s=this.clone(),i=nbv(1),o=nbv(0),r=nbv(0),l=nbv(1);0!=n.signum();){for(;n.isEven();)n.rShiftTo(1,n),t?((!i.isEven()||!o.isEven())&&(i.addTo(this,i),o.subTo(e,o)),i.rShiftTo(1,i)):!o.isEven()&&o.subTo(e,o),o.rShiftTo(1,o);for(;s.isEven();)s.rShiftTo(1,s),t?((!r.isEven()||!l.isEven())&&(r.addTo(this,r),l.subTo(e,l)),r.rShiftTo(1,r)):!l.isEven()&&l.subTo(e,l),l.rShiftTo(1,l);0<=n.compareTo(s)?(n.subTo(s,n),t&&i.subTo(r,i),o.subTo(l,o)):(s.subTo(n,s),t&&r.subTo(i,r),l.subTo(o,l))}if(0!=s.compareTo(BigInteger.ONE))return BigInteger.ZERO;if(0<=l.compareTo(e))return l.subtract(e);if(0>l.signum())l.addTo(e,l);else return l;return 0>l.signum()?l.add(e):l}// (public) test primality with certainty >= 1-.5^t
function bnIsProbablePrime(e){var t=this.abs(),n;if(1==t.t&&t[0]<=lowprimes[lowprimes.length-1]){for(n=0;n<lowprimes.length;++n)if(t[0]==lowprimes[n])return!0;return!1}if(t.isEven())return!1;for(n=1;n<lowprimes.length;){for(var s=lowprimes[n],o=n+1;o<lowprimes.length&&s<lplim;)s*=lowprimes[o++];for(s=t.modInt(s);n<o;)if(0==s%lowprimes[n++])return!1}return t.millerRabin(e)}// (protected) true if probably prime (HAC 4.24, Miller-Rabin)
function bnpMillerRabin(e){var n=this.subtract(BigInteger.ONE),s=n.getLowestSetBit();if(0>=s)return!1;var o=n.shiftRight(s);e=e+1>>1,e>lowprimes.length&&(e=lowprimes.length);for(var r=nbi(),l=0;l<e;++l){r.fromInt(lowprimes[_Mathfloor(Math.random()*lowprimes.length)]);var d=r.modPow(o,this);if(0!=d.compareTo(BigInteger.ONE)&&0!=d.compareTo(n)){for(var u=1;u++<s&&0!=d.compareTo(n);)if(d=d.modPowInt(2,this),0==d.compareTo(BigInteger.ONE))return!1;if(0!=d.compareTo(n))return!1}}return!0}// protected
// BigInteger interfaces not implemented in jsbn:
// BigInteger(int signum, byte[] magnitude)
// double doubleValue()
// float floatValue()
// int hashCode()
// long longValue()
// static BigInteger valueOf(long val)
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	             */// Depends on jsbn.js and rng.js
// Version 1.1: support utf-8 encoding in pkcs1pad2
// convert a (hex) string to a bignum object
function parseBigInt(e,t){return new BigInteger(e,t)}// PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint
function pkcs1pad2(e,t){if(t<e.length+11)return alert('Message too long for RSA'),null;for(var s=[],o=e.length-1,r;0<=o&&0<t;)r=e.charCodeAt(o--),128>r?s[--t]=r:127<r&&2048>r?(s[--t]=128|63&r,s[--t]=192|r>>6):(s[--t]=128|63&r,s[--t]=128|63&r>>6,s[--t]=224|r>>12);s[--t]=0;for(var l=new SecureRandom,d=[];2<t;){for(d[0]=0;0==d[0];)l.nextBytes(d);s[--t]=d[0]}return s[--t]=2,s[--t]=0,new BigInteger(s)}// PKCS#1 (OAEP) mask generation function
function oaep_mgf1_arr(e,t,n){for(var s='',o=0;s.length<t;)s+=n(_StringfromCharCode.apply(String,e.concat([(4278190080&o)>>24,(16711680&o)>>16,(65280&o)>>8,255&o]))),o+=1;return s}// PKCS#1 (OAEP) pad input string s to n bytes, and return a bigint
function oaep_pad(e,t,n){if(e.length+2*SHA1_SIZE+2>t)throw'Message too long for RSA';var s='',o;for(o=0;o<t-e.length-2*SHA1_SIZE-2;o+=1)s+='\0';var r=rstr_sha1('')+s+'\x01'+e,l=Array(SHA1_SIZE);new SecureRandom().nextBytes(l);var d=oaep_mgf1_arr(l,r.length,n||rstr_sha1),u=[];for(o=0;o<r.length;o+=1)u[o]=r.charCodeAt(o)^d.charCodeAt(o);var c=oaep_mgf1_arr(u,l.length,rstr_sha1),p=[0];for(o=0;o<l.length;o+=1)p[o+1]=l[o]^c.charCodeAt(o);return new BigInteger(p.concat(u))}// "empty" RSA key constructor
function RSAKey(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}// Set the public key fields N and e from hex strings
function RSASetPublic(e,t){this.isPublic=!0,'string'==typeof e?null!=e&&null!=t&&0<e.length&&0<t.length?(this.n=parseBigInt(e,16),this.e=parseInt(t,16)):alert('Invalid RSA public key'):(this.n=e,this.e=t)}// Perform raw public operation on "x": return x^e (mod n)
function RSADoPublic(e){return e.modPowInt(this.e,this.n)}// Return the PKCS#1 RSA encryption of "text" as an even-length hex string
function RSAEncrypt(e){var t=pkcs1pad2(e,this.n.bitLength()+7>>3);if(null==t)return null;var n=this.doPublic(t);if(null==n)return null;var s=n.toString(16);return 0==(1&s.length)?s:'0'+s}// Return the PKCS#1 OAEP RSA encryption of "text" as an even-length hex string
function RSAEncryptOAEP(e,t){var n=oaep_pad(e,this.n.bitLength()+7>>3,t);if(null==n)return null;var s=this.doPublic(n);if(null==s)return null;var i=s.toString(16);return 0==(1&i.length)?i:'0'+i}// Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
//function RSAEncryptB64(text) {
//  var h = this.encrypt(text);
//  if(h) return hex2b64(h); else return null;
//}
// protected
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	             */// Depends on rsa.js and jsbn2.js
// Version 1.1: support utf-8 decoding in pkcs1unpad2
// Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext
function pkcs1unpad2(e,t){for(var n=e.toByteArray(),s=0;s<n.length&&0==n[s];)++s;if(n.length-s!=t-1||2!=n[s])return null;for(++s;0!=n[s];)if(++s>=n.length)return null;for(var o='',r;++s<n.length;)r=255&n[s],128>r?o+=_StringfromCharCode(r):191<r&&224>r?(o+=_StringfromCharCode((31&r)<<6|63&n[s+1]),++s):(o+=_StringfromCharCode((15&r)<<12|(63&n[s+1])<<6|63&n[s+2]),s+=2);return o}// PKCS#1 (OAEP) mask generation function
function oaep_mgf1_str(e,t,n){for(var s='',o=0;s.length<t;)s+=n(e+_StringfromCharCode.apply(String,[(4278190080&o)>>24,(16711680&o)>>16,(65280&o)>>8,255&o])),o+=1;return s}// Undo PKCS#1 (OAEP) padding and, if valid, return the plaintext
function oaep_unpad(e,t,n){e=e.toByteArray();var s;for(s=0;s<e.length;s+=1)e[s]&=255;for(;e.length<t;)e.unshift(0);if(e=_StringfromCharCode.apply(String,e),e.length<2*SHA1_SIZE+2)throw'Cipher too short';var o=e.substr(1,SHA1_SIZE),r=e.substr(SHA1_SIZE+1),l=oaep_mgf1_str(r,SHA1_SIZE,n||rstr_sha1),u=[],s;for(s=0;s<o.length;s+=1)u[s]=o.charCodeAt(s)^l.charCodeAt(s);var c=oaep_mgf1_str(_StringfromCharCode.apply(String,u),e.length-SHA1_SIZE,rstr_sha1),p=[];for(s=0;s<r.length;s+=1)p[s]=r.charCodeAt(s)^c.charCodeAt(s);if(p=_StringfromCharCode.apply(String,p),p.substr(0,SHA1_SIZE)!==rstr_sha1(''))throw'Hash mismatch';p=p.substr(SHA1_SIZE);var m=p.indexOf('\x01'),g=-1==m?-1:p.substr(0,m).lastIndexOf('\0');if(g+1!=m)throw'Malformed data';return p.substr(m+1)}// Set the private key fields N, e, and d from hex strings
function RSASetPrivate(e,t,n){this.isPrivate=!0,'string'==typeof e?null!=e&&null!=t&&0<e.length&&0<t.length?(this.n=parseBigInt(e,16),this.e=parseInt(t,16),this.d=parseBigInt(n,16)):alert('Invalid RSA private key'):(this.n=e,this.e=t,this.d=n)}// Set the private key fields N, e, d and CRT params from hex strings
function RSASetPrivateEx(e,t,n,s,i,o,r,l){if(this.isPrivate=!0,null==e)throw'RSASetPrivateEx N == null';if(null==t)throw'RSASetPrivateEx E == null';if(0==e.length)throw'RSASetPrivateEx N.length == 0';if(0==t.length)throw'RSASetPrivateEx E.length == 0';null!=e&&null!=t&&0<e.length&&0<t.length?(this.n=parseBigInt(e,16),this.e=parseInt(t,16),this.d=parseBigInt(n,16),this.p=parseBigInt(s,16),this.q=parseBigInt(i,16),this.dmp1=parseBigInt(o,16),this.dmq1=parseBigInt(r,16),this.coeff=parseBigInt(l,16)):alert('Invalid RSA private key in RSASetPrivateEx')}// Generate a new random private key B bits long, using public expt E
function RSAGenerate(e,n){var s=new SecureRandom,i=e>>1;this.e=parseInt(n,16);for(var o=new BigInteger(n,16);;){for(;;)if(this.p=new BigInteger(e-i,1,s),0==this.p.subtract(BigInteger.ONE).gcd(o).compareTo(BigInteger.ONE)&&this.p.isProbablePrime(10))break;for(;;)if(this.q=new BigInteger(i,1,s),0==this.q.subtract(BigInteger.ONE).gcd(o).compareTo(BigInteger.ONE)&&this.q.isProbablePrime(10))break;if(0>=this.p.compareTo(this.q)){var r=this.p;this.p=this.q,this.q=r}var t=this.p.subtract(BigInteger.ONE),l=this.q.subtract(BigInteger.ONE),d=t.multiply(l);// p1 = p - 1
// q1 = q - 1
if(0==d.gcd(o).compareTo(BigInteger.ONE)){this.n=this.p.multiply(this.q),this.d=o.modInverse(d),this.dmp1=this.d.mod(t),this.dmq1=this.d.mod(l),this.coeff=this.q.modInverse(this.p);// this.coeff = (q ^ -1) mod p
break}}this.isPrivate=!0}// Perform raw private operation on "x": return x^d (mod n)
function RSADoPrivate(e){if(null==this.p||null==this.q)return e.modPow(this.d,this.n);// TODO: re-calculate any missing CRT params
// xq=cq?
// xp=cp?
for(var t=e.mod(this.p).modPow(this.dmp1,this.p),n=e.mod(this.q).modPow(this.dmq1,this.q);0>t.compareTo(n);)t=t.add(this.p);// NOTE:
// xp.subtract(xq) => cp -cq
// xp.subtract(xq).multiply(this.coeff).mod(this.p) => (cp - cq) * u mod p = h
// xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq) => cq + (h * q) = M
return t.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)}// Return the PKCS#1 RSA decryption of "ctext".
// "ctext" is an even-length hex string and the output is a plain string.
function RSADecrypt(e){var t=parseBigInt(e,16),n=this.doPrivate(t);return null==n?null:pkcs1unpad2(n,this.n.bitLength()+7>>3)}// Return the PKCS#1 OAEP RSA decryption of "ctext".
// "ctext" is an even-length hex string and the output is a plain string.
function RSADecryptOAEP(e,t){var n=parseBigInt(e,16),s=this.doPrivate(n);return null==s?null:oaep_unpad(s,this.n.bitLength()+7>>3,t)}// Return the PKCS#1 RSA decryption of "ctext".
// "ctext" is a Base64-encoded string and the output is a plain string.
//function RSAB64Decrypt(ctext) {
//  var h = b64tohex(ctext);
//  if(h) return this.decrypt(h); else return null;
//}
// protected
//RSAKey.prototype.b64_decrypt = RSAB64Decrypt;
/*! rsapem-1.1.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
	             *///
// rsa-pem.js - adding function for reading/writing PKCS#1 PEM private key
//              to RSAKey class.
//
// version: 1.1.1 (2013-Apr-12)
//
// Copyright (c) 2010-2013 Kenji Urushima (kenji.urushima@gmail.com)
//
// This software is licensed under the terms of the MIT License.
// http://kjur.github.com/jsrsasign/license/
//
// The above copyright and license notice shall be
// included in all copies or substantial portions of the Software.
//
//
// Depends on:
//
//
//
// _RSApem_pemToBase64(sPEM)
//
//   removing PEM header, PEM footer and space characters including
//   new lines from PEM formatted RSA private key string.
//
/**
	             * @fileOverview
	             * @name rsapem-1.1.js
	             * @author Kenji Urushima kenji.urushima@gmail.com
	             * @version 1.1
	             * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	             */function _rsapem_pemToBase64(e){var t=e;return t=t.replace('-----BEGIN RSA PRIVATE KEY-----',''),t=t.replace('-----END RSA PRIVATE KEY-----',''),t=t.replace(/[ \n]+/g,''),t}function _rsapem_getPosArrayOfChildrenFromHex(e){var t=[],n=ASN1HEX.getStartPosOfV_AtObj(e,0),s=ASN1HEX.getPosOfNextSibling_AtObj(e,n),i=ASN1HEX.getPosOfNextSibling_AtObj(e,s),o=ASN1HEX.getPosOfNextSibling_AtObj(e,i),r=ASN1HEX.getPosOfNextSibling_AtObj(e,o),l=ASN1HEX.getPosOfNextSibling_AtObj(e,r),d=ASN1HEX.getPosOfNextSibling_AtObj(e,l),u=ASN1HEX.getPosOfNextSibling_AtObj(e,d),c=ASN1HEX.getPosOfNextSibling_AtObj(e,u);return t.push(n,s,i,o,r,l,d,u,c),t}function _rsapem_getHexValueArrayOfChildrenFromHex(t){var s=_rsapem_getPosArrayOfChildrenFromHex(t),i=ASN1HEX.getHexOfV_AtObj(t,s[0]),o=ASN1HEX.getHexOfV_AtObj(t,s[1]),n=ASN1HEX.getHexOfV_AtObj(t,s[2]),e=ASN1HEX.getHexOfV_AtObj(t,s[3]),r=ASN1HEX.getHexOfV_AtObj(t,s[4]),l=ASN1HEX.getHexOfV_AtObj(t,s[5]),d=ASN1HEX.getHexOfV_AtObj(t,s[6]),u=ASN1HEX.getHexOfV_AtObj(t,s[7]),c=ASN1HEX.getHexOfV_AtObj(t,s[8]),p=[];return p.push(i,o,n,e,r,l,d,u,c),p}/**
	             * read RSA private key from a ASN.1 hexadecimal string
	             * @name readPrivateKeyFromASN1HexString
	             * @memberOf RSAKey#
	             * @function
	             * @param {String} keyHex ASN.1 hexadecimal string of PKCS#1 private key.
	             * @since 1.1.1
	             */function _rsapem_readPrivateKeyFromASN1HexString(e){var t=_rsapem_getHexValueArrayOfChildrenFromHex(e);this.setPrivateEx(t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}/**
	             * read PKCS#1 private key from a string
	             * @name readPrivateKeyFromPEMString
	             * @memberOf RSAKey#
	             * @function
	             * @param {String} keyPEM string of PKCS#1 private key.
	             */function _rsapem_readPrivateKeyFromPEMString(e){var t=_rsapem_pemToBase64(e),n=b64tohex(t),s=_rsapem_getHexValueArrayOfChildrenFromHex(n);// depends base64.js
this.setPrivateEx(s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8])}function _zeroPaddingOfSignature(t,e){for(var n='',s=e/4-t.length,i=0;i<s;i++)n+='0';return n+t}function _rsasign_signString(e,t){var n=function(n){return KJUR.crypto.Util.hashString(n,t)},s=n(e);return this.signWithMessageHash(s,t)}function _rsasign_signWithMessageHash(t,e){var n=KJUR.crypto.Util.getPaddedDigestInfoHex(t,e,this.n.bitLength()),s=parseBigInt(n,16),i=this.doPrivate(s),o=i.toString(16);return _zeroPaddingOfSignature(o,this.n.bitLength())}function _rsasign_signStringWithSHA1(e){return _rsasign_signString.call(this,e,'sha1')}function _rsasign_signStringWithSHA256(e){return _rsasign_signString.call(this,e,'sha256')}function pss_mgf1_str(t,n,s){for(var e='',i=0;e.length<n;)e+=hextorstr(s(rstrtohex(t+_StringfromCharCode.apply(String,[(4278190080&i)>>24,(16711680&i)>>16,(65280&i)>>8,255&i])))),i+=1;return e}function _rsasign_signStringPSS(t,e,n){var s=function(t){return KJUR.crypto.Util.hashHex(t,e)},i=s(rstrtohex(t));return void 0===n&&(n=-1),this.signWithMessageHashPSS(i,e,n)}function _rsasign_signWithMessageHashPSS(t,s,i){var r=hextorstr(t),l=r.length,u=this.n.bitLength()-1,p=_Mathceil(u/8),c=function(e){return KJUR.crypto.Util.hashHex(e,s)},o;if(-1===i||void 0===i)i=l;else if(-2===i)i=p-l-2;else if(-2>i)throw'invalid salt length';if(p<l+i+2)throw'data too long';var m='';0<i&&(m=Array(i),new SecureRandom().nextBytes(m),m=_StringfromCharCode.apply(String,m));var g=hextorstr(c(rstrtohex('\0\0\0\0\0\0\0\0'+r+m))),n=[];for(o=0;o<p-i-l-2;o+=1)n[o]=0;var y=_StringfromCharCode.apply(String,n)+'\x01'+m,e=pss_mgf1_str(g,y.length,c),h=[];for(o=0;o<y.length;o+=1)h[o]=y.charCodeAt(o)^e.charCodeAt(o);for(h[0]&=~(255&65280>>8*p-u),o=0;o<l;o++)h.push(g.charCodeAt(o));return h.push(188),_zeroPaddingOfSignature(this.doPrivate(new BigInteger(h)).toString(16),this.n.bitLength())}function _rsasign_getDecryptSignatureBI(t,n,s){var i=new RSAKey;i.setPublic(n,s);var o=i.doPublic(t);return o}function _rsasign_getHexDigestInfoFromSig(t,n,s){var i=_rsasign_getDecryptSignatureBI(t,n,s),e=i.toString(16).replace(/^1f+00/,'');return e}function _rsasign_getAlgNameAndHashFromHexDisgestInfo(t){for(var n in KJUR.crypto.Util.DIGESTINFOHEAD){var e=KJUR.crypto.Util.DIGESTINFOHEAD[n],s=e.length;if(t.substring(0,s)==e){var i=[n,t.substring(s)];return i}}return[]}function _rsasign_verifySignatureWithArgs(t,n,s,o){var r=_rsasign_getHexDigestInfoFromSig(n,s,o),e=_rsasign_getAlgNameAndHashFromHexDisgestInfo(r);if(0==e.length)return!1;var l=e[0],d=e[1],i=function(e){return KJUR.crypto.Util.hashString(e,l)},u=i(t);return d==u}function _rsasign_verifyHexSignatureForMessage(e,t){var n=parseBigInt(e,16),s=_rsasign_verifySignatureWithArgs(t,n,this.n.toString(16),this.e.toString(16));return s}function _rsasign_verifyString(t,n){n=n.replace(_RE_HEXDECONLY,''),n=n.replace(/[ \n]+/g,'');var s=parseBigInt(n,16);if(s.bitLength()>this.n.bitLength())return 0;var o=this.doPublic(s),i=o.toString(16).replace(/^1f+00/,''),e=_rsasign_getAlgNameAndHashFromHexDisgestInfo(i);if(0==e.length)return!1;var r=e[0],l=e[1],d=function(e){return KJUR.crypto.Util.hashString(e,r)},u=d(t);return l==u}function _rsasign_verifyWithMessageHash(t,e){e=e.replace(_RE_HEXDECONLY,''),e=e.replace(/[ \n]+/g,'');var n=parseBigInt(e,16);if(n.bitLength()>this.n.bitLength())return 0;var s=this.doPublic(n),i=s.toString(16).replace(/^1f+00/,''),o=_rsasign_getAlgNameAndHashFromHexDisgestInfo(i);if(0==o.length)return!1;var r=o[0],l=o[1];return l==t}function _rsasign_verifyStringPSS(t,n,s,i){var o=function(e){return KJUR.crypto.Util.hashHex(e,s)},e=o(rstrtohex(t));return void 0===i&&(i=-1),this.verifyWithMessageHashPSS(e,n,s,i)}function _rsasign_verifyWithMessageHashPSS(t,i,s,l){var u=new BigInteger(i,16);if(u.bitLength()>this.n.bitLength())return!1;var f=function(e){return KJUR.crypto.Util.hashHex(e,s)},r=hextorstr(t),y=r.length,h=this.n.bitLength()-1,g=_Mathceil(h/8),m;if(-1===l||void 0===l)l=y;else if(-2===l)l=g-y-2;else if(-2>l)throw'invalid salt length';if(g<y+l+2)throw'data too long';var v=this.doPublic(u).toByteArray();for(m=0;m<v.length;m+=1)v[m]&=255;for(;v.length<g;)v.unshift(0);if(188!==v[g-1])throw'encoded message does not end in 0xbc';v=_StringfromCharCode.apply(String,v);var _=v.substr(0,g-y-1),d=v.substr(_.length,y),e=255&65280>>8*g-h;if(0!=(_.charCodeAt(0)&e))throw'bits beyond keysize not zero';var p=pss_mgf1_str(d,_.length,f),n=[];for(m=0;m<_.length;m+=1)n[m]=_.charCodeAt(m)^p.charCodeAt(m);n[0]&=~e;var o=g-y-l-2;for(m=0;m<o;m+=1)if(0!==n[m])throw'leftmost octets not zero';if(1!==n[o])throw'0x01 marker not found';return d===hextorstr(f(rstrtohex('\0\0\0\0\0\0\0\0'+r+_StringfromCharCode.apply(String,n.slice(-l)))))}/*! x509-1.1.3.js (c) 2012-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
	             *//*
	             * x509.js - X509 class to read subject public key from certificate.
	             *
	             * Copyright (c) 2010-2014 Kenji Urushima (kenji.urushima@gmail.com)
	             *
	             * This software is licensed under the terms of the MIT License.
	             * http://kjur.github.com/jsrsasign/license
	             *
	             * The above copyright and license notice shall be
	             * included in all copies or substantial portions of the Software.
	             *//**
	             * @fileOverview
	             * @name x509-1.1.js
	             * @author Kenji Urushima kenji.urushima@gmail.com
	             * @version x509 1.1.3 (2014-May-17)
	             * @since jsrsasign 1.x.x
	             * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	             *//*
	             * Depends:
	             *   base64.js
	             *   rsa.js
	             *   asn1hex.js
	             *//**
	             * X.509 certificate class.<br/>
	             * @class X.509 certificate class
	             * @property {RSAKey} subjectPublicKeyRSA Tom Wu's RSAKey object
	             * @property {String} subjectPublicKeyRSA_hN hexadecimal string for modulus of RSA public key
	             * @property {String} subjectPublicKeyRSA_hE hexadecimal string for public exponent of RSA public key
	             * @property {String} hex hexacedimal string for X.509 certificate.
	             * @author Kenji Urushima
	             * @version 1.0.1 (08 May 2012)
	             * @see <a href="http://kjur.github.com/jsrsasigns/">'jwrsasign'(RSA Sign JavaScript Library) home page http://kjur.github.com/jsrsasign/</a>
	             */function X509(){this.subjectPublicKeyRSA=null,this.subjectPublicKeyRSA_hN=null,this.subjectPublicKeyRSA_hE=null,this.hex=null,this.getSerialNumberHex=function(){return ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,1])},this.getIssuerHex=function(){return ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,3])},this.getIssuerString=function(){return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,3]))},this.getSubjectHex=function(){return ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,5])},this.getSubjectString=function(){return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,5]))},this.getNotBefore=function(){var e=ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,4,0]);return e=e.replace(/(..)/g,'%$1'),e=decodeURIComponent(e),e},this.getNotAfter=function(){var e=ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,4,1]);return e=e.replace(/(..)/g,'%$1'),e=decodeURIComponent(e),e},this.readCertPEM=function(e){var t=X509.pemToHex(e),n=X509.getPublicKeyHexArrayFromCertHex(t),s=new RSAKey;s.setPublic(n[0],n[1]),this.subjectPublicKeyRSA=s,this.subjectPublicKeyRSA_hN=n[0],this.subjectPublicKeyRSA_hE=n[1],this.hex=t},this.readCertPEMWithoutRSAInit=function(e){var t=X509.pemToHex(e),n=X509.getPublicKeyHexArrayFromCertHex(t);this.subjectPublicKeyRSA.setPublic(n[0],n[1]),this.subjectPublicKeyRSA_hN=n[0],this.subjectPublicKeyRSA_hE=n[1],this.hex=t}}// ==== string / byte array ================================
/**
	             * convert a string to an array of character codes
	             * @param {String} s
	             * @return {Array of Numbers}
	             */function stoBA(e){for(var t=[],n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}// ==== byte array / hex ================================
/**
	             * convert an array of bytes(Number) to hexadecimal string.<br/>
	             * @param {Array of Numbers} a array of bytes
	             * @return {String} hexadecimal string
	             */function BAtohex(e){for(var t='',n=0,o;n<e.length;n++)o=e[n].toString(16),1==o.length&&(o='0'+o),t+=o;return t}// ==== string / hex ================================
/**
	             * convert a ASCII string to a hexadecimal string of ASCII codes.<br/>
	             * NOTE: This can't be used for non ASCII characters.
	             * @param {s} s ASCII string
	             * @return {String} hexadecimal string
	             */function stohex(e){return BAtohex(stoBA(e))}// ==== base64 / base64url ================================
/**
	             * convert a Base64 encoded string to a Base64URL encoded string.<br/>
	             * Example: "ab+c3f/==" &rarr; "ab-c3f_"
	             * @param {String} s Base64 encoded string
	             * @return {String} Base64URL encoded string
	             */function b64tob64u(e){return e=e.replace(/\=/g,''),e=e.replace(/\+/g,'-'),e=e.replace(/\//g,'_'),e}/**
	             * convert a Base64URL encoded string to a Base64 encoded string.<br/>
	             * Example: "ab-c3f_" &rarr; "ab+c3f/=="
	             * @param {String} s Base64URL encoded string
	             * @return {String} Base64 encoded string
	             */function b64utob64(e){return 2==e.length%4?e+='==':3==e.length%4&&(e+='='),e=e.replace(/-/g,'+'),e=e.replace(/_/g,'/'),e}// ==== hex / base64url ================================
/**
	             * convert a hexadecimal string to a Base64URL encoded string.<br/>
	             * @param {String} s hexadecimal string
	             * @return {String} Base64URL encoded string
	             */function hextob64u(e){return b64tob64u(hex2b64(e))}/**
	             * convert a Base64URL encoded string to a hexadecimal string.<br/>
	             * @param {String} s Base64URL encoded string
	             * @return {String} hexadecimal string
	             */function b64utohex(e){return b64tohex(b64utob64(e))}/**
	             * convert a hexadecimal encoded string to raw string including non printable characters.<br/>
	             * @param {String} s hexadecimal encoded string
	             * @return {String} raw string
	             * @since 1.1.2
	             * @example
	             * hextorstr("610061") &rarr; "a\x00a"
	             */function hextorstr(e){for(var t='',n=0;n<e.length-1;n+=2)t+=_StringfromCharCode(parseInt(e.substr(n,2),16));return t}/**
	             * convert a raw string including non printable characters to hexadecimal encoded string.<br/>
	             * @param {String} s raw string
	             * @return {String} hexadecimal encoded string
	             * @since 1.1.2
	             * @example
	             * rstrtohex("a\x00a") &rarr; "610061"
	             */function rstrtohex(e){for(var t='',n=0;n<e.length;n++)t+=('0'+e.charCodeAt(n).toString(16)).slice(-2);return t}// ==== URIComponent / hex ================================
/**
	             * convert a URLComponent string such like "%67%68" to a hexadecimal string.<br/>
	             * @param {String} s URIComponent string such like "%67%68"
	             * @return {String} hexadecimal string
	             * @since 1.1
	             */function uricmptohex(e){return e.replace(/%/g,'')}/**
	             * convert a hexadecimal string to a URLComponent string such like "%67%68".<br/>
	             * @param {String} s hexadecimal string
	             * @return {String} URIComponent string such like "%67%68"
	             * @since 1.1
	             */function hextouricmp(e){return e.replace(/(..)/g,'%$1')}// ==== URIComponent ================================
/**
	             * convert UTFa hexadecimal string to a URLComponent string such like "%67%68".<br/>
	             * Note that these "<code>0-9A-Za-z!'()*-._~</code>" characters will not
	             * converted to "%xx" format by builtin 'encodeURIComponent()' function.
	             * However this 'encodeURIComponentAll()' function will convert
	             * all of characters into "%xx" format.
	             * @param {String} s hexadecimal string
	             * @return {String} URIComponent string such like "%67%68"
	             * @since 1.1
	             */function encodeURIComponentAll(e){for(var t=encodeURIComponent(e),n='',s=0;s<t.length;s++)'%'==t[s]?(n+=t.substr(s,3),s+=2):n=n+'%'+stohex(t[s]);return n}/*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
	             */// This source code is free for use in the public domain.
// NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
// http://code.google.com/p/json-sans-eval/
/**
	             * Parses a string of well-formed JSON text.
	             *
	             * If the input is not well-formed, then behavior is undefined, but it is
	             * deterministic and is guaranteed not to modify any object other than its
	             * return value.
	             *
	             * This does not use `eval` so is less likely to have obscure security bugs than
	             * json2.js.
	             * It is optimized for speed, so is much faster than json_parse.js.
	             *
	             * This library should be used whenever security is a concern (when JSON may
	             * come from an untrusted source), speed is a concern, and erroring on malformed
	             * JSON is *not* a concern.
	             *
	             *                      Pros                   Cons
	             *                    +-----------------------+-----------------------+
	             * json_sans_eval.js  | Fast, secure          | Not validating        |
	             *                    +-----------------------+-----------------------+
	             * json_parse.js      | Validating, secure    | Slow                  |
	             *                    +-----------------------+-----------------------+
	             * json2.js           | Fast, some validation | Potentially insecure  |
	             *                    +-----------------------+-----------------------+
	             *
	             * json2.js is very fast, but potentially insecure since it calls `eval` to
	             * parse JSON data, so an attacker might be able to supply strange JS that
	             * looks like JSON, but that executes arbitrary javascript.
	             * If you do have to use json2.js with untrusted data, make sure you keep
	             * your version of json2.js up to date so that you get patches as they're
	             * released.
	             *
	             * @param {string} json per RFC 4627
	             * @param {function (this:Object, string, *):*} opt_reviver optional function
	             *     that reworks JSON objects post-parse per Chapter 15.12 of EcmaScript3.1.
	             *     If supplied, the function is called with a string key, and a value.
	             *     The value is the property of 'this'.  The reviver should return
	             *     the value to use in its place.  So if dates were serialized as
	             *     {@code { "type": "Date", "time": 1234 }}, then a reviver might look like
	             *     {@code
	             *     function (key, value) {
	             *       if (value && typeof value === 'object' && 'Date' === value.type) {
	             *         return new Date(value.time);
	             *       } else {
	             *         return value;
	             *       }
	             *     }}.
	             *     If the reviver returns {@code undefined} then the property named by key
	             *     will be deleted from its container.
	             *     {@code this} is bound to the object containing the specified property.
	             * @return {Object|Array}
	             * @author Mike Samuel <mikesamuel@gmail.com>
	             *//**
	             * @constructor
	             */function DefaultHttpRequest(){/**
	                 * @name _promiseFactory
	                 * @type DefaultPromiseFactory
	                 *//**
	                 * @param {XMLHttpRequest} xhr
	                 * @param {object.<string, string>} headers
	                 */function e(e,t){for(var n=Object.keys(t),s=0;s<n.length;s++){var o=n[s],r=t[o];e.setRequestHeader&&e.setRequestHeader(o,r)}}/**
	                 * @param {string} url
	                 * @param {{ headers: object.<string, string> }} [config]
	                 * @returns {Promise}
	                 */this.getJSON=function(t,n){return _promiseFactory.create(function(s,i){try{var o=new XMLHttpRequest;o.open('GET',t),o.responseType='text',n&&n.headers&&e(o,n.headers),o.onload=function(){try{if('undefined'==typeof o.status||200===o.status){var e=o.response;'string'==typeof e&&(e=JSON.parse(e)),'undefined'==typeof e&&(e=JSON.parse(o.responseText)),s(e)}else i(Error(o.statusText+'('+o.status+')'))}catch(e){i(e)}},o.onerror=function(){i(Error('Network error'))},o.send()}catch(e){return i(e)}})}}/**
	             * @constructor
	             * @param {Promise} promise
	             */function DefaultPromise(e){this.then=function(t,n){var s=e.then(t,n);return new DefaultPromise(s)},this.catch=function(t){var n=e.catch(t);return new DefaultPromise(n)}}/**
	             * @constructor
	             */function DefaultPromiseFactory(){this.resolve=function(e){return new DefaultPromise(Promise.resolve(e))},this.reject=function(e){return new DefaultPromise(Promise.reject(e))},this.create=function(e){return new DefaultPromise(new Promise(e))}}function copy(e,t){for(var n in t=t||{},e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function rand(){return((Date.now()+Math.random())*Math.random()).toString().replace('.','')}function error(e){return _promiseFactory.reject(Error(e))}function parseOidcResult(e){e=e||location.hash;var t=e.lastIndexOf('#');0<=t&&(e=e.substr(t+1));for(var n={},s=/([^&=]+)=([^&]*)/g,i=0,o;o=s.exec(e);)if(n[decodeURIComponent(o[1])]=decodeURIComponent(o[2]),50<i++)return{error:'Response exceeded expected number of parameters'};for(var r in n)return n}function OidcClient(e,t){this._settings=e||{},this._config=t||{},this._settings.request_state_key||(this._settings.request_state_key='OidcClient.request_state'),this._settings.request_state_store||(this._settings.request_state_store=window.localStorage),'undefined'==typeof this._settings.load_user_profile&&(this._settings.load_user_profile=!0),'undefined'==typeof this._settings.filter_protocol_claims&&(this._settings.filter_protocol_claims=!0),this._settings.authority&&0>this._settings.authority.indexOf('.well-known/openid-configuration')&&('/'!==this._settings.authority[this._settings.authority.length-1]&&(this._settings.authority+='/'),this._settings.authority+='.well-known/openid-configuration'),this._settings.response_type||(this._settings.response_type='id_token token'),Object.defineProperty(this,'isOidc',{get:function(){if(this._settings.response_type){var e=this._settings.response_type.split(/\s+/g).filter(function(e){return'id_token'===e});return!!e[0]}return!1}}),Object.defineProperty(this,'isOAuth',{get:function(){if(this._settings.response_type){var e=this._settings.response_type.split(/\s+/g).filter(function(e){return'token'===e});return!!e[0]}return!1}})}var _StringfromCharCode=String.fromCharCode,CryptoJS=CryptoJS||function(e){/**
	                 * CryptoJS namespace.
	                 */var t={},n=t.lib={},s=n.Base=function(){function e(){}return{/**
	                         * Creates a new object that inherits from this object.
	                         *
	                         * @param {Object} overrides Properties to copy into the new object.
	                         *
	                         * @return {Object} The new object.
	                         *
	                         * @static
	                         *
	                         * @example
	                         *
	                         *     var MyType = CryptoJS.lib.Base.extend({
	                         *         field: 'value',
	                         *
	                         *         method: function () {
	                         *         }
	                         *     });
	                         */extend:function(t){e.prototype=this;var n=new e;// Augment
return t&&n.mixIn(t),n.hasOwnProperty('init')||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},/**
	                         * Extends this object and runs the init method.
	                         * Arguments to create() will be passed to init().
	                         *
	                         * @return {Object} The new object.
	                         *
	                         * @static
	                         *
	                         * @example
	                         *
	                         *     var instance = MyType.create();
	                         */create:function(){var e=this.extend();return e.init.apply(e,arguments),e},/**
	                         * Initializes a newly created object.
	                         * Override this method to add some logic when your objects are created.
	                         *
	                         * @example
	                         *
	                         *     var MyType = CryptoJS.lib.Base.extend({
	                         *         init: function () {
	                         *             // ...
	                         *         }
	                         *     });
	                         */init:function(){},/**
	                         * Copies properties into this object.
	                         *
	                         * @param {Object} properties The properties to mix in.
	                         *
	                         * @example
	                         *
	                         *     MyType.mixIn({
	                         *         field: 'value'
	                         *     });
	                         */mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);// IE won't copy toString using the loop above
e.hasOwnProperty('toString')&&(this.toString=e.toString)},/**
	                         * Creates a copy of this object.
	                         *
	                         * @return {Object} The clone.
	                         *
	                         * @example
	                         *
	                         *     var clone = instance.clone();
	                         */clone:function(){return this.init.prototype.extend(this)}}}(),o=n.WordArray=s.extend({/**
	                     * Initializes a newly created word array.
	                     *
	                     * @param {Array} words (Optional) An array of 32-bit words.
	                     * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	                     *
	                     * @example
	                     *
	                     *     var wordArray = CryptoJS.lib.WordArray.create();
	                     *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	                     *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	                     */init:function(e,t){e=this.words=e||[],this.sigBytes=null==t?4*e.length:t},/**
	                     * Converts this word array to a string.
	                     *
	                     * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	                     *
	                     * @return {string} The stringified word array.
	                     *
	                     * @example
	                     *
	                     *     var string = wordArray + '';
	                     *     var string = wordArray.toString();
	                     *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	                     */toString:function(e){return(e||r).stringify(this)},/**
	                     * Concatenates a word array to this word array.
	                     *
	                     * @param {WordArray} wordArray The word array to append.
	                     *
	                     * @return {WordArray} This word array.
	                     *
	                     * @example
	                     *
	                     *     wordArray1.concat(wordArray2);
	                     */concat:function(e){// Shortcuts
var t=this.words,n=e.words,s=this.sigBytes,o=e.sigBytes;// Clamp excess bits
// Concat
if(this.clamp(),s%4)// Copy one byte at a time
for(var r=0,l;r<o;r++)l=255&n[r>>>2]>>>24-8*(r%4),t[s+r>>>2]|=l<<24-8*((s+r)%4);else if(65535<n.length)// Copy one word at a time
for(var r=0;r<o;r+=4)t[s+r>>>2]=n[r>>>2];else t.push.apply(t,n);// Chainable
return this.sigBytes+=o,this},/**
	                     * Removes insignificant bits.
	                     *
	                     * @example
	                     *
	                     *     wordArray.clamp();
	                     */clamp:function(){// Shortcuts
var e=this.words,t=this.sigBytes;e[t>>>2]&=4294967295<<32-8*(t%4),e.length=_Mathceil(t/4)},/**
	                     * Creates a copy of this word array.
	                     *
	                     * @return {WordArray} The clone.
	                     *
	                     * @example
	                     *
	                     *     var clone = wordArray.clone();
	                     */clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},/**
	                     * Creates a word array filled with random bytes.
	                     *
	                     * @param {number} nBytes The number of random bytes to generate.
	                     *
	                     * @return {WordArray} The random word array.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var wordArray = CryptoJS.lib.WordArray.random(16);
	                     */random:function(t){for(var n=[],s=0;s<t;s+=4)n.push(0|4294967296*e.random());return new o.init(n,t)}}),i=t.enc={},r=i.Hex={/**
	                     * Converts a word array to a hex string.
	                     *
	                     * @param {WordArray} wordArray The word array.
	                     *
	                     * @return {string} The hex string.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	                     */stringify:function(e){// Convert
for(var t=e.words,n=e.sigBytes,s=[],o=0,r;o<n;o++)r=255&t[o>>>2]>>>24-8*(o%4),s.push((r>>>4).toString(16)),s.push((15&r).toString(16));// Shortcuts
return s.join('')},/**
	                     * Converts a hex string to a word array.
	                     *
	                     * @param {string} hexStr The hex string.
	                     *
	                     * @return {WordArray} The word array.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	                     */parse:function(e){// Convert
for(var t=e.length,n=[],s=0;s<t;s+=2)n[s>>>3]|=parseInt(e.substr(s,2),16)<<24-4*(s%8);// Shortcut
return new o.init(n,t/2)}},l=i.Latin1={/**
	                     * Converts a word array to a Latin1 string.
	                     *
	                     * @param {WordArray} wordArray The word array.
	                     *
	                     * @return {string} The Latin1 string.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	                     */stringify:function(e){// Convert
for(var t=e.words,n=e.sigBytes,s=[],o=0,r;o<n;o++)r=255&t[o>>>2]>>>24-8*(o%4),s.push(_StringfromCharCode(r));// Shortcuts
return s.join('')},/**
	                     * Converts a Latin1 string to a word array.
	                     *
	                     * @param {string} latin1Str The Latin1 string.
	                     *
	                     * @return {WordArray} The word array.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	                     */parse:function(e){// Convert
for(var t=e.length,n=[],s=0;s<t;s++)n[s>>>2]|=(255&e.charCodeAt(s))<<24-8*(s%4);// Shortcut
return new o.init(n,t)}},d=i.Utf8={/**
	                     * Converts a word array to a UTF-8 string.
	                     *
	                     * @param {WordArray} wordArray The word array.
	                     *
	                     * @return {string} The UTF-8 string.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	                     */stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(t){throw new Error('Malformed UTF-8 data')}},/**
	                     * Converts a UTF-8 string to a word array.
	                     *
	                     * @param {string} utf8Str The UTF-8 string.
	                     *
	                     * @return {WordArray} The word array.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	                     */parse:function(e){return l.parse(unescape(encodeURIComponent(e)))}},u=n.BufferedBlockAlgorithm=s.extend({/**
	                     * Resets this block algorithm's data buffer to its initial state.
	                     *
	                     * @example
	                     *
	                     *     bufferedBlockAlgorithm.reset();
	                     */reset:function(){this._data=new o.init,this._nDataBytes=0},/**
	                     * Adds new data to this block algorithm's buffer.
	                     *
	                     * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	                     *
	                     * @example
	                     *
	                     *     bufferedBlockAlgorithm._append('data');
	                     *     bufferedBlockAlgorithm._append(wordArray);
	                     */_append:function(e){'string'==typeof e&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},/**
	                     * Processes available data blocks.
	                     *
	                     * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	                     *
	                     * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	                     *
	                     * @return {WordArray} The processed data.
	                     *
	                     * @example
	                     *
	                     *     var processedData = bufferedBlockAlgorithm._process();
	                     *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	                     */_process:function(e){// Shortcuts
var t=this._data,n=t.words,s=t.sigBytes,i=this.blockSize,r=s/(4*i);// Count blocks ready
r=e?_Mathceil(r):_Mathmax((0|r)-this._minBufferSize,0);// Count words ready
var l=r*i,d=_Mathmin(4*l,s);// Count bytes ready
// Process blocks
if(l){for(var u=0;u<l;u+=i)// Perform concrete-algorithm logic
this._doProcessBlock(n,u);// Remove processed words
var c=n.splice(0,l);t.sigBytes-=d}// Return processed words
return new o.init(c,d)},/**
	                     * Creates a copy of this object.
	                     *
	                     * @return {Object} The clone.
	                     *
	                     * @example
	                     *
	                     *     var clone = bufferedBlockAlgorithm.clone();
	                     */clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),c=n.Hasher=u.extend({/**
	                     * Configuration options.
	                     */cfg:s.extend(),/**
	                     * Initializes a newly created hasher.
	                     *
	                     * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	                     *
	                     * @example
	                     *
	                     *     var hasher = CryptoJS.algo.SHA256.create();
	                     */init:function(e){this.cfg=this.cfg.extend(e),this.reset()},/**
	                     * Resets this hasher to its initial state.
	                     *
	                     * @example
	                     *
	                     *     hasher.reset();
	                     */reset:function(){u.reset.call(this),this._doReset()},/**
	                     * Updates this hasher with a message.
	                     *
	                     * @param {WordArray|string} messageUpdate The message to append.
	                     *
	                     * @return {Hasher} This hasher.
	                     *
	                     * @example
	                     *
	                     *     hasher.update('message');
	                     *     hasher.update(wordArray);
	                     */update:function(e){// Chainable
return this._append(e),this._process(),this},/**
	                     * Finalizes the hash computation.
	                     * Note that the finalize operation is effectively a destructive, read-once operation.
	                     *
	                     * @param {WordArray|string} messageUpdate (Optional) A final message update.
	                     *
	                     * @return {WordArray} The hash.
	                     *
	                     * @example
	                     *
	                     *     var hash = hasher.finalize();
	                     *     var hash = hasher.finalize('message');
	                     *     var hash = hasher.finalize(wordArray);
	                     */finalize:function(e){e&&this._append(e);// Perform concrete-hasher logic
var t=this._doFinalize();return t},blockSize:16,/**
	                     * Creates a shortcut function to a hasher's object interface.
	                     *
	                     * @param {Hasher} hasher The hasher to create a helper for.
	                     *
	                     * @return {Function} The shortcut function.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	                     */_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},/**
	                     * Creates a shortcut function to the HMAC's object interface.
	                     *
	                     * @param {Hasher} hasher The hasher to use in this HMAC helper.
	                     *
	                     * @return {Function} The shortcut function.
	                     *
	                     * @static
	                     *
	                     * @example
	                     *
	                     *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	                     */_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}}),p=t.algo={};/**
	                 * Library namespace.
	                 *//**
	                 * Base object for prototypal inheritance.
	                 *//**
	                 * An array of 32-bit words.
	                 *
	                 * @property {Array} words The array of 32-bit words.
	                 * @property {number} sigBytes The number of significant bytes in this word array.
	                 *//**
	                 * Encoder namespace.
	                 *//**
	                 * Hex encoding strategy.
	                 *//**
	                 * Latin1 encoding strategy.
	                 *//**
	                 * UTF-8 encoding strategy.
	                 *//**
	                 * Abstract buffered block algorithm template.
	                 *
	                 * The property blockSize must be implemented in a concrete subtype.
	                 *
	                 * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	                 *//**
	                 * Abstract hasher template.
	                 *
	                 * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	                 *//**
	                 * Algorithm namespace.
	                 */return t}(Math),_promiseFactory,_httpRequest;// globals
/*
	            CryptoJS v3.1.2
	            code.google.com/p/crypto-js
	            (c) 2009-2013 by Jeff Mott. All rights reserved.
	            code.google.com/p/crypto-js/wiki/License
	            *//**
	             * CryptoJS core components.
	             */(function(){// Shortcuts
var e=CryptoJS,t=e.lib,n=t.WordArray,s=t.Hasher,i=e.algo,o=[],r=i.SHA1=s.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(s,r){// Computation
// Working variables
for(var l=this._hash.words,u=l[0],p=l[1],m=l[2],g=l[3],h=l[4],f=0;80>f;f++){if(16>f)o[f]=0|s[r+f];else{var y=o[f-3]^o[f-8]^o[f-14]^o[f-16];o[f]=y<<1|y>>>31}var n=(u<<5|u>>>27)+h+o[f];n+=20>f?(p&m|~p&g)+1518500249:40>f?(p^m^g)+1859775393:60>f?(p&m|p&g|m&g)-1894007588:(p^m^g)-899497514,h=g,g=m,m=p<<30|p>>>2,p=u,u=n}// Intermediate hash value
// Shortcut
l[0]=0|l[0]+u,l[1]=0|l[1]+p,l[2]=0|l[2]+m,l[3]=0|l[3]+g,l[4]=0|l[4]+h},_doFinalize:function(){// Shortcuts
var e=this._data,t=e.words,n=8*this._nDataBytes,s=8*e.sigBytes;// Add padding
// Return final computed hash
return t[s>>>5]|=128<<24-s%32,t[(s+64>>>9<<4)+14]=_Mathfloor(n/4294967296),t[(s+64>>>9<<4)+15]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});// Reusable object
/**
	                 * SHA-1 hash algorithm.
	                 */e.SHA1=s._createHelper(r),e.HmacSHA1=s._createHmacHelper(r)})(),function(){// Shortcuts
var e=CryptoJS,t=e.lib,n=t.WordArray,s=t.Hasher,i=e.algo,o=[],r=[];// Initialization and round constants tables
(function(){function e(e){for(var t=_Mathsqrt(e),n=2;n<=t;n++)if(!(e%n))return!1;return!0}function t(e){return 0|4294967296*(e-(0|e))}for(var s=2,i=0;64>i;)e(s)&&(8>i&&(o[i]=t(_Mathpow(s,1/2))),r[i]=t(_Mathpow(s,1/3)),i++),s++})();// Reusable object
var l=[],d=i.SHA256=s.extend({_doReset:function(){this._hash=new n.init(o.slice(0))},_doProcessBlock:function(t,n){// Computation
// Working variables
for(var s=this._hash.words,o=s[0],u=s[1],p=s[2],m=s[3],y=s[4],v=s[5],_=s[6],S=s[7],A=0;64>A;A++){if(16>A)l[A]=0|t[n+A];else{var x=l[A-15],T=l[A-2];l[A]=((x<<25|x>>>7)^(x<<14|x>>>18)^x>>>3)+l[A-7]+((T<<15|T>>>17)^(T<<13|T>>>19)^T>>>10)+l[A-16]}var k=y&v^~y&_,w=o&u^o&p^u&p,P=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),C=(y<<26|y>>>6)^(y<<21|y>>>11)^(y<<7|y>>>25),O=S+C+k+r[A]+l[A];S=_,_=v,v=y,y=0|m+O,m=p,p=u,u=o,o=0|O+(P+w)}// Intermediate hash value
// Shortcut
s[0]=0|s[0]+o,s[1]=0|s[1]+u,s[2]=0|s[2]+p,s[3]=0|s[3]+m,s[4]=0|s[4]+y,s[5]=0|s[5]+v,s[6]=0|s[6]+_,s[7]=0|s[7]+S},_doFinalize:function(){// Shortcuts
var e=this._data,t=e.words,n=8*this._nDataBytes,s=8*e.sigBytes;// Add padding
// Return final computed hash
return t[s>>>5]|=128<<24-s%32,t[(s+64>>>9<<4)+14]=_Mathfloor(n/4294967296),t[(s+64>>>9<<4)+15]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});/**
	                 * SHA-256 hash algorithm.
	                 */e.SHA256=s._createHelper(d),e.HmacSHA256=s._createHmacHelper(d)}(Math),function(){// Shortcuts
var e=CryptoJS,t=e.lib,n=t.Base,s=t.WordArray,i=e.x64={},o=i.Word=n.extend({/**
	                     * Initializes a newly created 64-bit word.
	                     *
	                     * @param {number} high The high 32 bits.
	                     * @param {number} low The low 32 bits.
	                     *
	                     * @example
	                     *
	                     *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	                     */init:function(e,t){this.high=e,this.low=t}/**
	                     * Bitwise NOTs this word.
	                     *
	                     * @return {X64Word} A new x64-Word object after negating.
	                     *
	                     * @example
	                     *
	                     *     var negated = x64Word.not();
	                     */// not: function () {
// var high = ~this.high;
// var low = ~this.low;
// return X64Word.create(high, low);
// },
/**
	                     * Bitwise ANDs this word with the passed word.
	                     *
	                     * @param {X64Word} word The x64-Word to AND with this word.
	                     *
	                     * @return {X64Word} A new x64-Word object after ANDing.
	                     *
	                     * @example
	                     *
	                     *     var anded = x64Word.and(anotherX64Word);
	                     */// and: function (word) {
// var high = this.high & word.high;
// var low = this.low & word.low;
// return X64Word.create(high, low);
// },
/**
	                     * Bitwise ORs this word with the passed word.
	                     *
	                     * @param {X64Word} word The x64-Word to OR with this word.
	                     *
	                     * @return {X64Word} A new x64-Word object after ORing.
	                     *
	                     * @example
	                     *
	                     *     var ored = x64Word.or(anotherX64Word);
	                     */// or: function (word) {
// var high = this.high | word.high;
// var low = this.low | word.low;
// return X64Word.create(high, low);
// },
/**
	                     * Bitwise XORs this word with the passed word.
	                     *
	                     * @param {X64Word} word The x64-Word to XOR with this word.
	                     *
	                     * @return {X64Word} A new x64-Word object after XORing.
	                     *
	                     * @example
	                     *
	                     *     var xored = x64Word.xor(anotherX64Word);
	                     */// xor: function (word) {
// var high = this.high ^ word.high;
// var low = this.low ^ word.low;
// return X64Word.create(high, low);
// },
/**
	                     * Shifts this word n bits to the left.
	                     *
	                     * @param {number} n The number of bits to shift.
	                     *
	                     * @return {X64Word} A new x64-Word object after shifting.
	                     *
	                     * @example
	                     *
	                     *     var shifted = x64Word.shiftL(25);
	                     */// shiftL: function (n) {
// if (n < 32) {
// var high = (this.high << n) | (this.low >>> (32 - n));
// var low = this.low << n;
// } else {
// var high = this.low << (n - 32);
// var low = 0;
// }
// return X64Word.create(high, low);
// },
/**
	                     * Shifts this word n bits to the right.
	                     *
	                     * @param {number} n The number of bits to shift.
	                     *
	                     * @return {X64Word} A new x64-Word object after shifting.
	                     *
	                     * @example
	                     *
	                     *     var shifted = x64Word.shiftR(7);
	                     */// shiftR: function (n) {
// if (n < 32) {
// var low = (this.low >>> n) | (this.high << (32 - n));
// var high = this.high >>> n;
// } else {
// var low = this.high >>> (n - 32);
// var high = 0;
// }
// return X64Word.create(high, low);
// },
/**
	                     * Rotates this word n bits to the left.
	                     *
	                     * @param {number} n The number of bits to rotate.
	                     *
	                     * @return {X64Word} A new x64-Word object after rotating.
	                     *
	                     * @example
	                     *
	                     *     var rotated = x64Word.rotL(25);
	                     */// rotL: function (n) {
// return this.shiftL(n).or(this.shiftR(64 - n));
// },
/**
	                     * Rotates this word n bits to the right.
	                     *
	                     * @param {number} n The number of bits to rotate.
	                     *
	                     * @return {X64Word} A new x64-Word object after rotating.
	                     *
	                     * @example
	                     *
	                     *     var rotated = x64Word.rotR(7);
	                     */// rotR: function (n) {
// return this.shiftR(n).or(this.shiftL(64 - n));
// },
/**
	                     * Adds this word with the passed word.
	                     *
	                     * @param {X64Word} word The x64-Word to add with this word.
	                     *
	                     * @return {X64Word} A new x64-Word object after adding.
	                     *
	                     * @example
	                     *
	                     *     var added = x64Word.add(anotherX64Word);
	                     */// add: function (word) {
// var low = (this.low + word.low) | 0;
// var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
// var high = (this.high + word.high + carry) | 0;
// return X64Word.create(high, low);
// }
}),r=i.WordArray=n.extend({/**
	                     * Initializes a newly created word array.
	                     *
	                     * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	                     * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	                     *
	                     * @example
	                     *
	                     *     var wordArray = CryptoJS.x64.WordArray.create();
	                     *
	                     *     var wordArray = CryptoJS.x64.WordArray.create([
	                     *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	                     *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	                     *     ]);
	                     *
	                     *     var wordArray = CryptoJS.x64.WordArray.create([
	                     *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	                     *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	                     *     ], 10);
	                     */init:function(e,t){e=this.words=e||[],this.sigBytes=null==t?8*e.length:t},/**
	                     * Converts this 64-bit word array to a 32-bit word array.
	                     *
	                     * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	                     *
	                     * @example
	                     *
	                     *     var x32WordArray = x64WordArray.toX32();
	                     */toX32:function(){// Convert
for(var e=this.words,t=e.length,n=[],o=0,r;o<t;o++)r=e[o],n.push(r.high),n.push(r.low);// Shortcuts
return s.create(n,this.sigBytes)},/**
	                     * Creates a copy of this word array.
	                     *
	                     * @return {X64WordArray} The clone.
	                     *
	                     * @example
	                     *
	                     *     var clone = x64WordArray.clone();
	                     */clone:function(){// Clone "words" array
// Clone each X64Word object
for(var e=n.clone.call(this),t=e.words=this.words.slice(0),s=t.length,o=0;o<s;o++)t[o]=t[o].clone();return e}});/**
	                 * x64 namespace.
	                 *//**
	                 * A 64-bit word.
	                 *//**
	                 * An array of 64-bit words.
	                 *
	                 * @property {Array} words The array of CryptoJS.x64.Word objects.
	                 * @property {number} sigBytes The number of significant bytes in this word array.
	                 */}(),function(){function e(){return o.create.apply(o,arguments)}// Constants
// Shortcuts
var t=CryptoJS,n=t.lib,s=n.Hasher,i=t.x64,o=i.Word,r=i.WordArray,l=t.algo,d=[e(1116352408,3609767458),e(1899447441,602891725),e(3049323471,3964484399),e(3921009573,2173295548),e(961987163,4081628472),e(1508970993,3053834265),e(2453635748,2937671579),e(2870763221,3664609560),e(3624381080,2734883394),e(310598401,1164996542),e(607225278,1323610764),e(1426881987,3590304994),e(1925078388,4068182383),e(2162078206,991336113),e(2614888103,633803317),e(3248222580,3479774868),e(3835390401,2666613458),e(4022224774,944711139),e(264347078,2341262773),e(604807628,2007800933),e(770255983,1495990901),e(1249150122,1856431235),e(1555081692,3175218132),e(1996064986,2198950837),e(2554220882,3999719339),e(2821834349,766784016),e(2952996808,2566594879),e(3210313671,3203337956),e(3336571891,1034457026),e(3584528711,2466948901),e(113926993,3758326383),e(338241895,168717936),e(666307205,1188179964),e(773529912,1546045734),e(1294757372,1522805485),e(1396182291,2643833823),e(1695183700,2343527390),e(1986661051,1014477480),e(2177026350,1206759142),e(2456956037,344077627),e(2730485921,1290863460),e(2820302411,3158454273),e(3259730800,3505952657),e(3345764771,106217008),e(3516065817,3606008344),e(3600352804,1432725776),e(4094571909,1467031594),e(275423344,851169720),e(430227734,3100823752),e(506948616,1363258195),e(659060556,3750685593),e(883997877,3785050280),e(958139571,3318307427),e(1322822218,3812723403),e(1537002063,2003034995),e(1747873779,3602036899),e(1955562222,1575990012),e(2024104815,1125592928),e(2227730452,2716904306),e(2361852424,442776044),e(2428436474,593698344),e(2756734187,3733110249),e(3204031479,2999351573),e(3329325298,3815920427),e(3391569614,3928383900),e(3515267271,566280711),e(3940187606,3454069534),e(4118630271,4000239992),e(116418474,1914138554),e(174292421,2731055270),e(289380356,3203993006),e(460393269,320620315),e(685471733,587496836),e(852142971,1086792851),e(1017036298,365543100),e(1126000580,2618297676),e(1288033470,3409855158),e(1501505948,4234509866),e(1607167915,987167468),e(1816402316,1246189591)],u=[];// Reusable objects
(function(){for(var t=0;80>t;t++)u[t]=e()})();/**
	                 * SHA-512 hash algorithm.
	                 */var c=l.SHA512=s.extend({_doReset:function(){this._hash=new r.init([new o.init(1779033703,4089235720),new o.init(3144134277,2227873595),new o.init(1013904242,4271175723),new o.init(2773480762,1595750129),new o.init(1359893119,2917565137),new o.init(2600822924,725511199),new o.init(528734635,4215389547),new o.init(1541459225,327033209)])},_doProcessBlock:function(e,t){// Rounds
// Working variables
for(var n=this._hash.words,s=n[0],o=n[1],r=n[2],l=n[3],c=n[4],p=n[5],m=n[6],g=n[7],h=s.high,f=s.low,y=o.high,v=o.low,b=r.high,_=r.low,S=l.high,A=l.low,x=c.high,T=c.low,k=p.high,w=p.low,P=m.high,C=m.low,O=g.high,I=g.low,E=h,j=f,$=y,D=v,R=b,F=_,H=S,M=A,L=x,N=T,B=k,V=w,W=P,U=C,q=O,G=I,z=0,J;80>z;z++){// Extend message
if(J=u[z],16>z)var K=J.high=0|e[t+2*z],Y=J.low=0|e[t+2*z+1];else{// Gamma0
var X=u[z-15],Z=X.high,Q=X.low,ee=(Q>>>1|Z<<31)^(Q>>>8|Z<<24)^(Q>>>7|Z<<25),te=u[z-2],ne=te.high,se=te.low,ie=(se>>>19|ne<<13)^(se<<3|ne>>>29)^(se>>>6|ne<<26),ae=u[z-7],oe=ae.high,re=ae.low,le=u[z-16],de=le.high,ue=le.low,Y=ee+re,K=((Z>>>1|Q<<31)^(Z>>>8|Q<<24)^Z>>>7)+oe+(Y>>>0<ee>>>0?1:0),Y=Y+ie,K=K+((ne>>>19|se<<13)^(ne<<3|se>>>29)^ne>>>6)+(Y>>>0<ie>>>0?1:0),Y=Y+ue,K=K+de+(Y>>>0<ue>>>0?1:0);// Gamma1
// W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
J.high=K,J.low=Y}var ce=L&B^~L&W,pe=N&V^~N&U,me=E&$^E&R^$&R,ge=j&D^j&F^D&F,he=(E>>>28|j<<4)^(E<<30|j>>>2)^(E<<25|j>>>7),fe=(j>>>28|E<<4)^(j<<30|E>>>2)^(j<<25|E>>>7),ye=(L>>>14|N<<18)^(L>>>18|N<<14)^(L<<23|N>>>9),ve=(N>>>14|L<<18)^(N>>>18|L<<14)^(N<<23|L>>>9),be=d[z],_e=be.high,Se=be.low,Ae=G+ve,xe=q+ye+(Ae>>>0<G>>>0?1:0),Ae=Ae+pe,xe=xe+ce+(Ae>>>0<pe>>>0?1:0),Ae=Ae+Se,xe=xe+_e+(Ae>>>0<Se>>>0?1:0),Ae=Ae+Y,xe=xe+K+(Ae>>>0<Y>>>0?1:0),Te=fe+ge,ke=he+me+(Te>>>0<fe>>>0?1:0);// t1 = h + sigma1 + ch + K[i] + W[i]
// t2 = sigma0 + maj
q=W,G=U,W=B,U=V,B=L,V=N,N=0|M+Ae,L=0|H+xe+(N>>>0<M>>>0?1:0),H=R,M=F,R=$,F=D,$=E,D=j,j=0|Ae+Te,E=0|xe+ke+(j>>>0<Ae>>>0?1:0)}// Intermediate hash value
// Shortcuts
f=s.low=f+j,s.high=h+E+(f>>>0<j>>>0?1:0),v=o.low=v+D,o.high=y+$+(v>>>0<D>>>0?1:0),_=r.low=_+F,r.high=b+R+(_>>>0<F>>>0?1:0),A=l.low=A+M,l.high=S+H+(A>>>0<M>>>0?1:0),T=c.low=T+N,c.high=x+L+(T>>>0<N>>>0?1:0),w=p.low=w+V,p.high=k+B+(w>>>0<V>>>0?1:0),C=m.low=C+U,m.high=P+W+(C>>>0<U>>>0?1:0),I=g.low=I+G,g.high=O+q+(I>>>0<G>>>0?1:0)},_doFinalize:function(){// Shortcuts
var e=this._data,t=e.words,n=8*this._nDataBytes,s=8*e.sigBytes;t[s>>>5]|=128<<24-s%32,t[(s+128>>>10<<5)+30]=_Mathfloor(n/4294967296),t[(s+128>>>10<<5)+31]=n,e.sigBytes=4*t.length,this._process();// Convert hash to 32-bit word array before returning
var i=this._hash.toX32();// Return final computed hash
return i},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32});/**
	                 * Shortcut function to the hasher's object interface.
	                 *
	                 * @param {WordArray|string} message The message to hash.
	                 *
	                 * @return {WordArray} The hash.
	                 *
	                 * @static
	                 *
	                 * @example
	                 *
	                 *     var hash = CryptoJS.SHA512('message');
	                 *     var hash = CryptoJS.SHA512(wordArray);
	                 */t.SHA512=s._createHelper(c),t.HmacSHA512=s._createHmacHelper(c)}();/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
	             */var b64map='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',b64pad='=',dbits;'Microsoft Internet Explorer'==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):'Netscape'==navigator.appName?(BigInteger.prototype.am=am3,dbits=28):(BigInteger.prototype.am=am1,dbits=26),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=4503599627370496,BigInteger.prototype.F1=52-dbits,BigInteger.prototype.F2=2*dbits-52;// Digit conversions
var BI_RM='0123456789abcdefghijklmnopqrstuvwxyz',BI_RC=[],rr,vv;for(rr=48,vv=0;9>=vv;++vv)BI_RC[rr++]=vv;for(rr=97,vv=10;36>vv;++vv)BI_RC[rr++]=vv;for(rr=65,vv=10;36>vv;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1),NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=67108864/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.square=bnSquare;var SHA1_SIZE=20;RSAKey.prototype.doPublic=RSADoPublic,RSAKey.prototype.setPublic=RSASetPublic,RSAKey.prototype.encrypt=RSAEncrypt,RSAKey.prototype.encryptOAEP=RSAEncryptOAEP,RSAKey.prototype.type='RSA';var SHA1_SIZE=20;RSAKey.prototype.doPrivate=RSADoPrivate,RSAKey.prototype.setPrivate=RSASetPrivate,RSAKey.prototype.setPrivateEx=RSASetPrivateEx,RSAKey.prototype.generate=RSAGenerate,RSAKey.prototype.decrypt=RSADecrypt,RSAKey.prototype.decryptOAEP=RSADecryptOAEP,RSAKey.prototype.readPrivateKeyFromPEMString=_rsapem_readPrivateKeyFromPEMString,RSAKey.prototype.readPrivateKeyFromASN1HexString=_rsapem_readPrivateKeyFromASN1HexString;/*! rsasign-1.2.7.js (c) 2012 Kenji Urushima | kjur.github.com/jsrsasign/license
	             */var _RE_HEXDECONLY=/(?:)/;_RE_HEXDECONLY.compile('[^0-9a-f]','gi'),RSAKey.prototype.signWithMessageHash=_rsasign_signWithMessageHash,RSAKey.prototype.signString=_rsasign_signString,RSAKey.prototype.signStringWithSHA1=_rsasign_signStringWithSHA1,RSAKey.prototype.signStringWithSHA256=_rsasign_signStringWithSHA256,RSAKey.prototype.sign=_rsasign_signString,RSAKey.prototype.signWithSHA1=_rsasign_signStringWithSHA1,RSAKey.prototype.signWithSHA256=_rsasign_signStringWithSHA256,RSAKey.prototype.signWithMessageHashPSS=_rsasign_signWithMessageHashPSS,RSAKey.prototype.signStringPSS=_rsasign_signStringPSS,RSAKey.prototype.signPSS=_rsasign_signStringPSS,RSAKey.SALT_LEN_HLEN=-1,RSAKey.SALT_LEN_MAX=-2,RSAKey.prototype.verifyWithMessageHash=_rsasign_verifyWithMessageHash,RSAKey.prototype.verifyString=_rsasign_verifyString,RSAKey.prototype.verifyHexSignatureForMessage=_rsasign_verifyHexSignatureForMessage,RSAKey.prototype.verify=_rsasign_verifyString,RSAKey.prototype.verifyHexSignatureForByteArrayMessage=_rsasign_verifyHexSignatureForMessage,RSAKey.prototype.verifyWithMessageHashPSS=_rsasign_verifyWithMessageHashPSS,RSAKey.prototype.verifyStringPSS=_rsasign_verifyStringPSS,RSAKey.prototype.verifyPSS=_rsasign_verifyStringPSS,RSAKey.SALT_LEN_RECOVER=-2;/*! asn1hex-1.1.5.js (c) 2012-2014 Kenji Urushima | kjur.github.com/jsrsasign/license
	             *//*
	             * asn1hex.js - Hexadecimal represented ASN.1 string library
	             *
	             * Copyright (c) 2010-2014 Kenji Urushima (kenji.urushima@gmail.com)
	             *
	             * This software is licensed under the terms of the MIT License.
	             * http://kjur.github.com/jsrsasign/license/
	             *
	             * The above copyright and license notice shall be
	             * included in all copies or substantial portions of the Software.
	             *//**
	             * @fileOverview
	             * @name asn1hex-1.1.js
	             * @author Kenji Urushima kenji.urushima@gmail.com
	             * @version asn1hex 1.1.5 (2014-May-25)
	             * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	             *//*
	             * MEMO:
	             *   f('3082025b02...', 2) ... 82025b ... 3bytes
	             *   f('020100', 2) ... 01 ... 1byte
	             *   f('0203001...', 2) ... 03 ... 1byte
	             *   f('02818003...', 2) ... 8180 ... 2bytes
	             *   f('3080....0000', 2) ... 80 ... -1
	             *
	             *   Requirements:
	             *   - ASN.1 type octet length MUST be 1.
	             *     (i.e. ASN.1 primitives like SET, SEQUENCE, INTEGER, OCTETSTRING ...)
	             *//**
	             * ASN.1 DER encoded hexadecimal string utility class
	             * @name ASN1HEX
	             * @class ASN.1 DER encoded hexadecimal string utility class
	             * @since jsrsasign 1.1
	             */var ASN1HEX=new function(){this.getByteLengthOfL_AtObj=function(e,t){if('8'!=e.substring(t+2,t+3))return 1;var n=parseInt(e.substring(t+3,t+4));// including '8?' octet;
return 0==n?-1:0<n&&10>n?n+1:-2;// length octet '80' indefinite length
// malformed format
},this.getHexOfL_AtObj=function(e,t){var n=this.getByteLengthOfL_AtObj(e,t);return 1>n?'':e.substring(t+2,t+2+2*n)},this.getIntOfL_AtObj=function(e,t){var n=this.getHexOfL_AtObj(e,t);if(''==n)return-1;var s;return s=8>parseInt(n.substring(0,1))?new BigInteger(n,16):new BigInteger(n.substring(2),16),s.intValue()},this.getStartPosOfV_AtObj=function(e,t){var n=this.getByteLengthOfL_AtObj(e,t);return 0>n?n:t+2*(n+1)},this.getHexOfV_AtObj=function(e,t){var n=this.getStartPosOfV_AtObj(e,t),s=this.getIntOfL_AtObj(e,t);return e.substring(n,n+2*s)},this.getHexOfTLV_AtObj=function(e,t){var n=e.substr(t,2),s=this.getHexOfL_AtObj(e,t),i=this.getHexOfV_AtObj(e,t);return n+s+i},this.getPosOfNextSibling_AtObj=function(e,t){var n=this.getStartPosOfV_AtObj(e,t),s=this.getIntOfL_AtObj(e,t);return n+2*s},this.getPosArrayOfChildren_AtObj=function(e,t){var n=[],s=this.getStartPosOfV_AtObj(e,t);n.push(s);for(var i=this.getIntOfL_AtObj(e,t),o=s,r=0,l;(l=this.getPosOfNextSibling_AtObj(e,o),!(null==l||l-s>=2*i))&&!(200<=r);)n.push(l),o=l,r++;return n},this.getNthChildIndex_AtObj=function(e,t,n){var s=this.getPosArrayOfChildren_AtObj(e,t);return s[n]},this.getDecendantIndexByNthList=function(e,t,n){if(0==n.length)return t;var s=n.shift(),i=this.getPosArrayOfChildren_AtObj(e,t);return this.getDecendantIndexByNthList(e,i[s],n)},this.getDecendantHexTLVByNthList=function(e,t,n){var s=this.getDecendantIndexByNthList(e,t,n);return this.getHexOfTLV_AtObj(e,s)},this.getDecendantHexVByNthList=function(e,t,n){var s=this.getDecendantIndexByNthList(e,t,n);return this.getHexOfV_AtObj(e,s)}};/*
	             * @since asn1hex 1.1.4
	             *//*
	              X509.prototype.readCertPEM = _x509_readCertPEM;
	              X509.prototype.readCertPEMWithoutRSAInit = _x509_readCertPEMWithoutRSAInit;
	              X509.prototype.getSerialNumberHex = _x509_getSerialNumberHex;
	              X509.prototype.getIssuerHex = _x509_getIssuerHex;
	              X509.prototype.getSubjectHex = _x509_getSubjectHex;
	              X509.prototype.getIssuerString = _x509_getIssuerString;
	              X509.prototype.getSubjectString = _x509_getSubjectString;
	              X509.prototype.getNotBefore = _x509_getNotBefore;
	              X509.prototype.getNotAfter = _x509_getNotAfter;
	            *//*! crypto-1.1.5.js (c) 2013 Kenji Urushima | kjur.github.com/jsrsasign/license
	             *//*
	             * crypto.js - Cryptographic Algorithm Provider class
	             *
	             * Copyright (c) 2013 Kenji Urushima (kenji.urushima@gmail.com)
	             *
	             * This software is licensed under the terms of the MIT License.
	             * http://kjur.github.com/jsrsasign/license
	             *
	             * The above copyright and license notice shall be
	             * included in all copies or substantial portions of the Software.
	             *//**
	             * @fileOverview
	             * @name crypto-1.1.js
	             * @author Kenji Urushima kenji.urushima@gmail.com
	             * @version 1.1.5 (2013-Oct-06)
	             * @since jsrsasign 2.2
	             * @license <a href="http://kjur.github.io/jsrsasign/license/">MIT License</a>
	             *//**
	             * kjur's class library name space
	             * @name KJUR
	             * @namespace kjur's class library name space
	             */if(ASN1HEX.getVbyList=function(e,t,n,s){var i=this.getDecendantIndexByNthList(e,t,n);if(void 0===i)throw'can\'t find nthList object';if(void 0!==s&&e.substr(i,2)!=s)throw'checking tag doesn\'t match: '+e.substr(i,2)+'!='+s;return this.getHexOfV_AtObj(e,i)},ASN1HEX.hextooidstr=function(e){var t=function(e,t){return e.length>=t?e:Array(t-e.length+1).join('0')+e},n=[],o=e.substr(0,2),r=parseInt(o,16);// a[0], a[1]
n[0]=new String(_Mathfloor(r/40)),n[1]=new String(r%40);for(var l=e.substr(2),d=[],u=0;u<l.length/2;u++)d.push(parseInt(l.substr(2*u,2),16));for(var p=[],c='',u=0;u<d.length;u++)128&d[u]?c+=t((127&d[u]).toString(2),7):(c+=t((127&d[u]).toString(2),7),p.push(new String(parseInt(c,2))),c='');var m=n.join('.');return 0<p.length&&(m=m+'.'+p.join('.')),m},X509.pemToBase64=function(e){var t=e;return t=t.replace('-----BEGIN CERTIFICATE-----',''),t=t.replace('-----END CERTIFICATE-----',''),t=t.replace(/[ \n]+/g,''),t},X509.pemToHex=function(e){var t=X509.pemToBase64(e),n=b64tohex(t);return n},X509.getSubjectPublicKeyPosFromCertHex=function(e){var t=X509.getSubjectPublicKeyInfoPosFromCertHex(e);if(-1==t)return-1;var n=ASN1HEX.getPosArrayOfChildren_AtObj(e,t);if(2!=n.length)return-1;var s=n[1];if('03'!=e.substring(s,s+2))return-1;var i=ASN1HEX.getStartPosOfV_AtObj(e,s);return'00'==e.substring(i,i+2)?i+2:-1},X509.getSubjectPublicKeyInfoPosFromCertHex=function(e){var t=ASN1HEX.getStartPosOfV_AtObj(e,0),n=ASN1HEX.getPosArrayOfChildren_AtObj(e,t);return 1>n.length?-1:'a003020102'==e.substring(n[0],n[0]+10)?6>n.length?-1:n[6]:5>n.length?-1:n[5]},X509.getPublicKeyHexArrayFromCertHex=function(e){var t=X509.getSubjectPublicKeyPosFromCertHex(e),n=ASN1HEX.getPosArrayOfChildren_AtObj(e,t);if(2!=n.length)return[];var s=ASN1HEX.getHexOfV_AtObj(e,n[0]),i=ASN1HEX.getHexOfV_AtObj(e,n[1]);return null!=s&&null!=i?[s,i]:[]},X509.getHexTbsCertificateFromCert=function(e){var t=ASN1HEX.getStartPosOfV_AtObj(e,0);return t},X509.getPublicKeyHexArrayFromCertPEM=function(e){var t=X509.pemToHex(e),n=X509.getPublicKeyHexArrayFromCertHex(t);return n},X509.hex2dn=function(e){for(var t='',n=ASN1HEX.getPosArrayOfChildren_AtObj(e,0),o=0,r;o<n.length;o++)r=ASN1HEX.getHexOfTLV_AtObj(e,n[o]),t=t+'/'+X509.hex2rdn(r);return t},X509.hex2rdn=function(e){var t=ASN1HEX.getDecendantHexTLVByNthList(e,0,[0,0]),n=ASN1HEX.getDecendantHexVByNthList(e,0,[0,1]),s='';try{s=X509.DN_ATTRHEX[t]}catch(e){s=t}n=n.replace(/(..)/g,'%$1');var i=decodeURIComponent(n);return s+'='+i},X509.DN_ATTRHEX={"0603550406":'C',"060355040a":'O',"060355040b":'OU',"0603550403":'CN',"0603550405":'SN',"0603550408":'ST',"0603550407":'L'},X509.getPublicKeyFromCertPEM=function(e){var t=X509.getPublicKeyInfoPropOfCertPEM(e);if('2a864886f70d010101'==t.algoid){// RSA
var n=KEYUTIL.parsePublicRawRSAKeyHex(t.keyhex),s=new RSAKey;return s.setPublic(n.n,n.e),s}if('2a8648ce3d0201'==t.algoid){// ECC
var i=KJUR.crypto.OID.oidhex2name[t.algparam],s=new KJUR.crypto.ECDSA({curve:i,info:t.keyhex});return s.setPublicKeyHex(t.keyhex),s}if('2a8648ce380401'==t.algoid){// DSA 1.2.840.10040.4.1
var o=ASN1HEX.getVbyList(t.algparam,0,[0],'02'),r=ASN1HEX.getVbyList(t.algparam,0,[1],'02'),l=ASN1HEX.getVbyList(t.algparam,0,[2],'02'),d=ASN1HEX.getHexOfV_AtObj(t.keyhex,0);d=d.substr(2);var s=new KJUR.crypto.DSA;return s.setPublic(new BigInteger(o,16),new BigInteger(r,16),new BigInteger(l,16),new BigInteger(d,16)),s}throw'unsupported key'},X509.getPublicKeyInfoPropOfCertPEM=function(e){var t={algparam:null},n=X509.pemToHex(e),s=ASN1HEX.getPosArrayOfChildren_AtObj(n,0);// 1. Certificate ASN.1
if(3!=s.length)throw'malformed X.509 certificate PEM (code:001)';// not 3 item of seq Cert
// 2. tbsCertificate
if('30'!=n.substr(s[0],2))throw'malformed X.509 certificate PEM (code:002)';// tbsCert not seq
var i=ASN1HEX.getPosArrayOfChildren_AtObj(n,s[0]);// 3. subjectPublicKeyInfo
if(7>i.length)throw'malformed X.509 certificate PEM (code:003)';// no subjPubKeyInfo
var o=ASN1HEX.getPosArrayOfChildren_AtObj(n,i[6]);if(2!=o.length)throw'malformed X.509 certificate PEM (code:004)';// not AlgId and PubKey
// 4. AlgId
var r=ASN1HEX.getPosArrayOfChildren_AtObj(n,o[0]);if(2!=r.length)throw'malformed X.509 certificate PEM (code:005)';// not 2 item in AlgId
// 5. Public Key Hex
if(t.algoid=ASN1HEX.getHexOfV_AtObj(n,r[0]),'06'==n.substr(r[1],2)?t.algparam=ASN1HEX.getHexOfV_AtObj(n,r[1]):'30'==n.substr(r[1],2)&&(t.algparam=ASN1HEX.getHexOfTLV_AtObj(n,r[1])),'03'!=n.substr(o[1],2))throw'malformed X.509 certificate PEM (code:006)';// not bitstring
var l=ASN1HEX.getHexOfV_AtObj(n,o[1]);return t.keyhex=l.substr(2),t},'undefined'==typeof KJUR||!KJUR)var KJUR={};/**
	             * kjur's cryptographic algorithm provider library name space
	             * <p>
	             * This namespace privides following crytpgrahic classes.
	             * <ul>
	             * <li>{@link KJUR.crypto.MessageDigest} - Java JCE(cryptograhic extension) style MessageDigest class</li>
	             * <li>{@link KJUR.crypto.Signature} - Java JCE(cryptograhic extension) style Signature class</li>
	             * <li>{@link KJUR.crypto.Util} - cryptographic utility functions and properties</li>
	             * </ul>
	             * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.
	             * </p>
	             * @name KJUR.crypto
	             * @namespace
	             */'undefined'!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.Util=new function(){this.DIGESTINFOHEAD={sha1:'3021300906052b0e03021a05000414',sha224:'302d300d06096086480165030402040500041c',sha256:'3031300d060960864801650304020105000420',sha384:'3041300d060960864801650304020205000430',sha512:'3051300d060960864801650304020305000440',md2:'3020300c06082a864886f70d020205000410',md5:'3020300c06082a864886f70d020505000410',ripemd160:'3021300906052b2403020105000414'},this.DEFAULTPROVIDER={md5:'cryptojs',sha1:'cryptojs',sha224:'cryptojs',sha256:'cryptojs',sha384:'cryptojs',sha512:'cryptojs',ripemd160:'cryptojs',hmacmd5:'cryptojs',hmacsha1:'cryptojs',hmacsha224:'cryptojs',hmacsha256:'cryptojs',hmacsha384:'cryptojs',hmacsha512:'cryptojs',hmacripemd160:'cryptojs',MD5withRSA:'cryptojs/jsrsa',SHA1withRSA:'cryptojs/jsrsa',SHA224withRSA:'cryptojs/jsrsa',SHA256withRSA:'cryptojs/jsrsa',SHA384withRSA:'cryptojs/jsrsa',SHA512withRSA:'cryptojs/jsrsa',RIPEMD160withRSA:'cryptojs/jsrsa',MD5withECDSA:'cryptojs/jsrsa',SHA1withECDSA:'cryptojs/jsrsa',SHA224withECDSA:'cryptojs/jsrsa',SHA256withECDSA:'cryptojs/jsrsa',SHA384withECDSA:'cryptojs/jsrsa',SHA512withECDSA:'cryptojs/jsrsa',RIPEMD160withECDSA:'cryptojs/jsrsa',SHA1withDSA:'cryptojs/jsrsa',SHA224withDSA:'cryptojs/jsrsa',SHA256withDSA:'cryptojs/jsrsa',MD5withRSAandMGF1:'cryptojs/jsrsa',SHA1withRSAandMGF1:'cryptojs/jsrsa',SHA224withRSAandMGF1:'cryptojs/jsrsa',SHA256withRSAandMGF1:'cryptojs/jsrsa',SHA384withRSAandMGF1:'cryptojs/jsrsa',SHA512withRSAandMGF1:'cryptojs/jsrsa',RIPEMD160withRSAandMGF1:'cryptojs/jsrsa'},this.CRYPTOJSMESSAGEDIGESTNAME={md5:'CryptoJS.algo.MD5',sha1:'CryptoJS.algo.SHA1',sha224:'CryptoJS.algo.SHA224',sha256:'CryptoJS.algo.SHA256',sha384:'CryptoJS.algo.SHA384',sha512:'CryptoJS.algo.SHA512',ripemd160:'CryptoJS.algo.RIPEMD160'},this.getDigestInfoHex=function(e,t){if('undefined'==typeof this.DIGESTINFOHEAD[t])throw'alg not supported in Util.DIGESTINFOHEAD: '+t;return this.DIGESTINFOHEAD[t]+e},this.getPaddedDigestInfoHex=function(e,t,n){var s=this.getDigestInfoHex(e,t),o=n/4;// minimum PM length
if(s.length+22>o)// len(0001+ff(*8)+00+hDigestInfo)=22
throw'key is too short for SigAlg: keylen='+n+','+t;for(var r='00'+s,l='',d=o-4-r.length,u=0;u<d;u+=2)l+='ff';var c='0001'+l+r;return c},this.hashString=function(e,t){var n=new KJUR.crypto.MessageDigest({alg:t});return n.digestString(e)},this.hashHex=function(e,t){var n=new KJUR.crypto.MessageDigest({alg:t});return n.digestHex(e)},this.sha1=function(e){var t=new KJUR.crypto.MessageDigest({alg:'sha1',prov:'cryptojs'});return t.digestString(e)},this.sha256=function(e){var t=new KJUR.crypto.MessageDigest({alg:'sha256',prov:'cryptojs'});return t.digestString(e)},this.sha256Hex=function(e){var t=new KJUR.crypto.MessageDigest({alg:'sha256',prov:'cryptojs'});return t.digestHex(e)},this.sha512=function(e){var t=new KJUR.crypto.MessageDigest({alg:'sha512',prov:'cryptojs'});return t.digestString(e)},this.sha512Hex=function(e){var t=new KJUR.crypto.MessageDigest({alg:'sha512',prov:'cryptojs'});return t.digestHex(e)},this.md5=function(e){var t=new KJUR.crypto.MessageDigest({alg:'md5',prov:'cryptojs'});return t.digestString(e)},this.ripemd160=function(e){var t=new KJUR.crypto.MessageDigest({alg:'ripemd160',prov:'cryptojs'});return t.digestString(e)},this.getCryptoJSMDByName=function(){}},KJUR.crypto.MessageDigest=function(params){this.setAlgAndProvider=function(alg,prov){// for cryptojs
if(null!=alg&&void 0===prov&&(prov=KJUR.crypto.Util.DEFAULTPROVIDER[alg]),-1!=':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(alg)&&'cryptojs'==prov){try{this.md=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[alg]).create()}catch(e){throw'setAlgAndProvider hash alg set fail alg='+alg+'/'+e}this.updateString=function(e){this.md.update(e)},this.updateHex=function(e){var t=CryptoJS.enc.Hex.parse(e);this.md.update(t)},this.digest=function(){var e=this.md.finalize();return e.toString(CryptoJS.enc.Hex)},this.digestString=function(e){return this.updateString(e),this.digest()},this.digestHex=function(e){return this.updateHex(e),this.digest()}}if(-1!=':sha256:'.indexOf(alg)&&'sjcl'==prov){try{this.md=new sjcl.hash.sha256}catch(e){throw'setAlgAndProvider hash alg set fail alg='+alg+'/'+e}this.updateString=function(e){this.md.update(e)},this.updateHex=function(e){var t=sjcl.codec.hex.toBits(e);this.md.update(t)},this.digest=function(){var e=this.md.finalize();return sjcl.codec.hex.fromBits(e)},this.digestString=function(e){return this.updateString(e),this.digest()},this.digestHex=function(e){return this.updateHex(e),this.digest()}}},this.updateString=function(){throw'updateString(str) not supported for this alg/prov: '+this.algName+'/'+this.provName},this.updateHex=function(){throw'updateHex(hex) not supported for this alg/prov: '+this.algName+'/'+this.provName},this.digest=function(){throw'digest() not supported for this alg/prov: '+this.algName+'/'+this.provName},this.digestString=function(){throw'digestString(str) not supported for this alg/prov: '+this.algName+'/'+this.provName},this.digestHex=function(){throw'digestHex(hex) not supported for this alg/prov: '+this.algName+'/'+this.provName},void 0!==params&&void 0!==params.alg&&(this.algName=params.alg,void 0===params.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName))},KJUR.crypto.Mac=function(params){this.setAlgAndProvider=function(alg,prov){if(null==alg&&(alg='hmacsha1'),alg=alg.toLowerCase(),'hmac'!=alg.substr(0,4))throw'setAlgAndProvider unsupported HMAC alg: '+alg;void 0===prov&&(prov=KJUR.crypto.Util.DEFAULTPROVIDER[alg]),this.algProv=alg+'/'+prov;var hashAlg=alg.substr(4);// for cryptojs
if(-1!=':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(hashAlg)&&'cryptojs'==prov){try{var mdObj=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[hashAlg]);this.mac=CryptoJS.algo.HMAC.create(mdObj,this.pass)}catch(e){throw'setAlgAndProvider hash alg set fail hashAlg='+hashAlg+'/'+e}this.updateString=function(e){this.mac.update(e)},this.updateHex=function(e){var t=CryptoJS.enc.Hex.parse(e);this.mac.update(t)},this.doFinal=function(){var e=this.mac.finalize();return e.toString(CryptoJS.enc.Hex)},this.doFinalString=function(e){return this.updateString(e),this.doFinal()},this.doFinalHex=function(e){return this.updateHex(e),this.doFinal()}}},this.updateString=function(){throw'updateString(str) not supported for this alg/prov: '+this.algProv},this.updateHex=function(){throw'updateHex(hex) not supported for this alg/prov: '+this.algProv},this.doFinal=function(){throw'digest() not supported for this alg/prov: '+this.algProv},this.doFinalString=function(){throw'digestString(str) not supported for this alg/prov: '+this.algProv},this.doFinalHex=function(){throw'digestHex(hex) not supported for this alg/prov: '+this.algProv},void 0!==params&&(void 0!==params.pass&&(this.pass=params.pass),void 0!==params.alg&&(this.algName=params.alg,void 0===params.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName)))},KJUR.crypto.Signature=function(e){var t=null;// RSAKey/KJUR.crypto.{ECDSA,DSA} object for signing
if(this._setAlgNames=function(){this.algName.match(/^(.+)with(.+)$/)&&(this.mdAlgName=RegExp.$1.toLowerCase(),this.pubkeyAlgName=RegExp.$2.toLowerCase())},this._zeroPaddingOfSignature=function(e,t){for(var n='',o=t/4-e.length,r=0;r<o;r++)n+='0';return n+e},this.setAlgAndProvider=function(e,t){if(this._setAlgNames(),'cryptojs/jsrsa'!=t)throw'provider not supported: '+t;if(-1!=':md5:sha1:sha224:sha256:sha384:sha512:ripemd160:'.indexOf(this.mdAlgName)){try{this.md=new KJUR.crypto.MessageDigest({alg:this.mdAlgName})}catch(e){throw'setAlgAndProvider hash alg set fail alg='+this.mdAlgName+'/'+e}this.init=function(e,t){var n=null;try{n=void 0===t?KEYUTIL.getKey(e):KEYUTIL.getKey(e,t)}catch(e){throw'init failed:'+e}if(!0===n.isPrivate)this.prvKey=n,this.state='SIGN';else if(!0===n.isPublic)this.pubKey=n,this.state='VERIFY';else throw'init failed.:'+n},this.initSign=function(e){'string'==typeof e.ecprvhex&&'string'==typeof e.eccurvename?(this.ecprvhex=e.ecprvhex,this.eccurvename=e.eccurvename):this.prvKey=e,this.state='SIGN'},this.initVerifyByPublicKey=function(e){'string'==typeof e.ecpubhex&&'string'==typeof e.eccurvename?(this.ecpubhex=e.ecpubhex,this.eccurvename=e.eccurvename):e instanceof KJUR.crypto.ECDSA?this.pubKey=e:e instanceof RSAKey&&(this.pubKey=e),this.state='VERIFY'},this.initVerifyByCertificatePEM=function(e){var t=new X509;t.readCertPEM(e),this.pubKey=t.subjectPublicKeyRSA,this.state='VERIFY'},this.updateString=function(e){this.md.updateString(e)},this.updateHex=function(e){this.md.updateHex(e)},this.sign=function(){if(this.sHashHex=this.md.digest(),'undefined'!=typeof this.ecprvhex&&'undefined'!=typeof this.eccurvename){var e=new KJUR.crypto.ECDSA({curve:this.eccurvename});this.hSign=e.signHex(this.sHashHex,this.ecprvhex)}else if('rsaandmgf1'==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHashPSS(this.sHashHex,this.mdAlgName,this.pssSaltLen);else if('rsa'==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex,this.mdAlgName);else if(this.prvKey instanceof KJUR.crypto.ECDSA)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex);else if(this.prvKey instanceof KJUR.crypto.DSA)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex);else throw'Signature: unsupported public key alg: '+this.pubkeyAlgName;return this.hSign},this.signString=function(e){return this.updateString(e),this.sign()},this.signHex=function(e){return this.updateHex(e),this.sign()},this.verify=function(e){if(this.sHashHex=this.md.digest(),'undefined'!=typeof this.ecpubhex&&'undefined'!=typeof this.eccurvename){var t=new KJUR.crypto.ECDSA({curve:this.eccurvename});return t.verifyHex(this.sHashHex,e,this.ecpubhex)}if('rsaandmgf1'==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHashPSS(this.sHashHex,e,this.mdAlgName,this.pssSaltLen);if('rsa'==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHash(this.sHashHex,e);if(this.pubKey instanceof KJUR.crypto.ECDSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,e);if(this.pubKey instanceof KJUR.crypto.DSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,e);throw'Signature: unsupported public key alg: '+this.pubkeyAlgName}}},this.init=function(){throw'init(key, pass) not supported for this alg:prov='+this.algProvName},this.initVerifyByPublicKey=function(){throw'initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov='+this.algProvName},this.initVerifyByCertificatePEM=function(){throw'initVerifyByCertificatePEM(certPEM) not supported for this alg:prov='+this.algProvName},this.initSign=function(){throw'initSign(prvKey) not supported for this alg:prov='+this.algProvName},this.updateString=function(){throw'updateString(str) not supported for this alg:prov='+this.algProvName},this.updateHex=function(){throw'updateHex(hex) not supported for this alg:prov='+this.algProvName},this.sign=function(){throw'sign() not supported for this alg:prov='+this.algProvName},this.signString=function(){throw'digestString(str) not supported for this alg:prov='+this.algProvName},this.signHex=function(){throw'digestHex(hex) not supported for this alg:prov='+this.algProvName},this.verify=function(){throw'verify(hSigVal) not supported for this alg:prov='+this.algProvName},this.initParams=e,void 0!==e&&(void 0!==e.alg&&(this.algName=e.alg,this.provName=void 0===e.prov?KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]:e.prov,this.algProvName=this.algName+':'+this.provName,this.setAlgAndProvider(this.algName,this.provName),this._setAlgNames()),void 0!==e.psssaltlen&&(this.pssSaltLen=e.psssaltlen),void 0!==e.prvkeypem))if(void 0!==e.prvkeypas)throw'both prvkeypem and prvkeypas parameters not supported';else try{var t=new RSAKey;t.readPrivateKeyFromPEMString(e.prvkeypem),this.initSign(t)}catch(e){throw'fatal error to load pem private key: '+e}},KJUR.crypto.OID=new function(){this.oidhex2name={"2a864886f70d010101":'rsaEncryption',"2a8648ce3d0201":'ecPublicKey',"2a8648ce380401":'dsa',"2a8648ce3d030107":'secp256r1',"2b8104001f":'secp192k1',"2b81040021":'secp224r1',"2b8104000a":'secp256k1',"2b81040023":'secp521r1',"2b81040022":'secp384r1',"2a8648ce380403":'SHA1withDSA',// 1.2.840.10040.4.3
"608648016503040301":'SHA224withDSA',// 2.16.840.1.101.3.4.3.1
"608648016503040302":'SHA256withDSA'// 2.16.840.1.101.3.4.3.2
}};var utf8tob64u,b64utoutf8;'function'==typeof Buffer?(utf8tob64u=function(e){return b64tob64u(new Buffer(e,'utf8').toString('base64'))},b64utoutf8=function(e){return new Buffer(b64utob64(e),'base64').toString('utf8')}):(utf8tob64u=function(e){return hextob64u(uricmptohex(encodeURIComponentAll(e)))},b64utoutf8=function(e){return decodeURIComponent(hextouricmp(b64utohex(e)))});var jsonParse=function(){function e(e,t,n){return t?s[t]:_StringfromCharCode(parseInt(n,16))}// A non-falsy value that coerces to the empty string when used as a key.
var t=/(?:false|true|null|[\{\}\[\]]|(?:-?\b(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\b)|(?:"(?:[^\0-\x08\x0a-\x1f"\\]|\\(?:["\/\\bfnrt]|u[0-9A-Fa-f]{4}))*"))/g,n=/\\(?:([^u])|u(.{4}))/g,s={'"':'"',"/":'/',"\\":'\\',b:'\b',f:'\f',n:'\n',r:'\r',t:'\t'},i=new String(''),o=Object.hasOwnProperty;// Will match a value in a well-formed JSON file.
// If the input is not well-formed, may match strangely, but not in an unsafe
// way.
// Since this only matches value tokens, it does not match whitespace, colons,
// or commas.
// Matches escape sequences in a string literal
// Decodes escape sequences in object literals
return function(s,r){// Split into tokens
var l=s.match(t),d=l[0],u=!1,c;// Construct the object to return
'{'===d?c={}:'['===d?c=[]:(c=[],u=!0);// Loop over remaining tokens maintaining a stack of uncompleted objects and
// arrays.
for(var p=[c],m=1-u,g=l.length,h;m<g;++m){d=l[m];var f;switch(d.charCodeAt(0)){default:f=p[0],f[h||f.length]=+d,h=void 0;break;case 34:if(d=d.substring(1,d.length-1),-1!==d.indexOf('\\')&&(d=d.replace(n,e)),f=p[0],!h)if(f instanceof Array)h=f.length;else{h=d||i;// Use as key for next value seen.
break}f[h]=d,h=void 0;break;case 91:f=p[0],p.unshift(f[h||f.length]=[]),h=void 0;break;case 93:p.shift();break;case 102:f=p[0],f[h||f.length]=!1,h=void 0;break;case 110:f=p[0],f[h||f.length]=null,h=void 0;break;case 116:f=p[0],f[h||f.length]=!0,h=void 0;break;case 123:f=p[0],p.unshift(f[h||f.length]={}),h=void 0;break;case 125:p.shift();}}// Fail if we've got an uncompleted object.
if(u){if(1!==p.length)throw new Error;c=c[0]}else if(p.length)throw new Error;if(r){// Based on walk as implemented in http://www.json.org/json2.js
var y=function e(t,n){var s=t[n];if(s&&'object'===('undefined'==typeof s?'undefined':_typeof(s))){var l=null;for(var d in s)if(o.call(s,d)&&s!==t){// Recurse to properties first.  This has the effect of causing
// the reviver to be called on the object graph depth-first.
// Since 'this' is bound to the holder of the property, the
// reviver can access sibling properties of k including ones
// that have not yet been revived.
// The value returned by the reviver is used in place of the
// current value of property k.
// If it returns undefined then the property is deleted.
var u=e(s,d);void 0===u?(!l&&(l=[]),l.push(d)):s[d]=u}if(l)for(var c=l.length;0<=--c;)delete s[l[c]]}return r.call(t,n,s)};c=y({"":c},'')}return c}}();/*! jws-3.0.2 (c) 2013 Kenji Urushima | kjur.github.com/jsjws/license
	             *//*
	             * jws.js - JSON Web Signature Class
	             *
	             * version: 3.0.2 (2013 Sep 24)
	             *
	             * Copyright (c) 2010-2013 Kenji Urushima (kenji.urushima@gmail.com)
	             *
	             * This software is licensed under the terms of the MIT License.
	             * http://kjur.github.com/jsjws/license/
	             *
	             * The above copyright and license notice shall be
	             * included in all copies or substantial portions of the Software.
	             *//**
	             * @fileOverview
	             * @name jws-3.0.js
	             * @author Kenji Urushima kenji.urushima@gmail.com
	             * @version 3.0.1 (2013-Sep-24)
	             * @since jsjws 1.0
	             * @license <a href="http://kjur.github.io/jsjws/license/">MIT License</a>
	             */'undefined'!=typeof KJUR&&KJUR||(KJUR={}),'undefined'!=typeof KJUR.jws&&KJUR.jws||(KJUR.jws={}),KJUR.jws.JWS=function(){// ==== JWS Validation =========================================================
function e(e,t){return utf8tob64u(e)+'.'+utf8tob64u(t)}/**
	                 * verify JWS signature with naked RSA public key.<br/>
	                 * This only supports "RS256" and "RS512" algorithm.
	                 * @name verifyJWSByNE
	                 * @memberOf KJUR.jws.JWS
	                 * @function
	                 * @param {String} sJWS JWS signature string to be verified
	                 * @param {String} hN hexadecimal string for modulus of RSA public key
	                 * @param {String} hE hexadecimal string for public exponent of RSA public key
	                 * @return {String} returns 1 when JWS signature is valid, otherwise returns 0
	                 * @throws if sJWS is not comma separated string such like "Header.Payload.Signature".
	                 * @throws if JWS Header is a malformed JSON string.
	                 * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.verify}
	                 */// ==== JWS Generation =========================================================
function t(e){var t=e.alg,n='';if('RS256'!=t&&'RS512'!=t&&'PS256'!=t&&'PS512'!=t)throw'JWS signature algorithm not supported: '+t;return'256'==t.substr(2)&&(n='sha256'),'512'==t.substr(2)&&(n='sha512'),n}function n(e){return t(jsonParse(e))}function s(e,t,s,i,o,r){var l=new RSAKey;l.setPrivate(i,o,r);var d=n(e),u=l.signString(s,d);return u}function i(e,s,i,o,r){var l=null;l='undefined'==typeof r?n(e):t(r);var d='PS'==r.alg.substr(0,2);return o.hashAndSign?b64tob64u(o.hashAndSign(l,i,'binary','base64',d)):d?hextob64u(o.signStringPSS(i,l)):hextob64u(o.signString(i,l))}/**
	                 * generate JWS signature by Header, Payload and a naked RSA private key.<br/>
	                 * This only supports "RS256" and "RS512" algorithm.
	                 * @name generateJWSByNED
	                 * @memberOf KJUR.jws.JWS
	                 * @function
	                 * @param {String} sHead string of JWS Header
	                 * @param {String} sPayload string of JWS Payload
	                 * @param {String} hN hexadecimal string for modulus of RSA public key
	                 * @param {String} hE hexadecimal string for public exponent of RSA public key
	                 * @param {String} hD hexadecimal string for private exponent of RSA private key
	                 * @return {String} JWS signature string
	                 * @throws if sHead is a malformed JSON string.
	                 * @throws if supported signature algorithm was not specified in JSON Header.
	                 * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.sign}
	                 */// === sign with PKCS#1 RSA private key =====================================================
function o(e,t,s,i){var o=new RSAKey;o.readPrivateKeyFromPEMString(i);var r=n(e),l=o.signString(s,r);return l}/**
	                 * generate JWS signature by Header, Payload and a PEM formatted PKCS#1 RSA private key.<br/>
	                 * This only supports "RS256" and "RS512" algorithm.
	                 * @name generateJWSByP1PrvKey
	                 * @memberOf KJUR.jws.JWS
	                 * @function
	                 * @param {String} sHead string of JWS Header
	                 * @param {String} sPayload string of JWS Payload
	                 * @param {String} string for sPemPrvKey PEM formatted PKCS#1 RSA private key<br/>
	                 *                 Heading and trailing space characters in PEM key will be ignored.
	                 * @return {String} JWS signature string
	                 * @throws if sHead is a malformed JSON string.
	                 * @throws if supported signature algorithm was not specified in JSON Header.
	                 * @since 1.1
	                 * @deprecated from 3.0.0 please move to {@link KJUR.jws.JWS.sign}
	                 */this.parseJWS=function(e,t){if(!(void 0!==this.parsedJWS&&(t||void 0!==this.parsedJWS.sigvalH))){if(null==e.match(/^([^.]+)\.([^.]+)\.([^.]+)$/))throw'JWS signature is not a form of \'Head.Payload.SigValue\'.';var n=RegExp.$1,s=RegExp.$2,i=RegExp.$3;if(this.parsedJWS={},this.parsedJWS.headB64U=n,this.parsedJWS.payloadB64U=s,this.parsedJWS.sigvalB64U=i,this.parsedJWS.si=n+'.'+s,!t){var o=b64utohex(i),r=parseBigInt(o,16);this.parsedJWS.sigvalH=o,this.parsedJWS.sigvalBI=r}var l=b64utoutf8(n),d=b64utoutf8(s);if(this.parsedJWS.headS=l,this.parsedJWS.payloadS=d,!KJUR.jws.JWS.isSafeJSONString(l,this.parsedJWS,'headP'))throw'malformed JSON string for JWS Head: '+l}},this.verifyJWSByNE=function(e,t,n){return this.parseJWS(e),_rsasign_verifySignatureWithArgs(this.parsedJWS.si,this.parsedJWS.sigvalBI,t,n)},this.verifyJWSByKey=function(e,n){this.parseJWS(e);var s=t(this.parsedJWS.headP),i='PS'==this.parsedJWS.headP.alg.substr(0,2);return n.hashAndVerify?n.hashAndVerify(s,new Buffer(this.parsedJWS.si,'utf8').toString('base64'),b64utob64(this.parsedJWS.sigvalB64U),'base64',i):i?n.verifyStringPSS(this.parsedJWS.si,this.parsedJWS.sigvalH,s):n.verifyString(this.parsedJWS.si,this.parsedJWS.sigvalH)},this.verifyJWSByPemX509Cert=function(e,t){this.parseJWS(e);var n=new X509;return n.readCertPEM(t),n.subjectPublicKeyRSA.verifyString(this.parsedJWS.si,this.parsedJWS.sigvalH)},this.generateJWSByNED=function(t,n,i,o,r){if(!KJUR.jws.JWS.isSafeJSONString(t))throw'JWS Head is not safe JSON string: '+t;var l=e(t,n),d=s(t,n,l,i,o,r),u=hextob64u(d);return this.parsedJWS={},this.parsedJWS.headB64U=l.split('.')[0],this.parsedJWS.payloadB64U=l.split('.')[1],this.parsedJWS.sigvalB64U=u,l+'.'+u},this.generateJWSByKey=function(t,n,s){var o={};if(!KJUR.jws.JWS.isSafeJSONString(t,o,'headP'))throw'JWS Head is not safe JSON string: '+t;var r=e(t,n),l=i(t,n,r,s,o.headP);return this.parsedJWS={},this.parsedJWS.headB64U=r.split('.')[0],this.parsedJWS.payloadB64U=r.split('.')[1],this.parsedJWS.sigvalB64U=l,r+'.'+l},this.generateJWSByP1PrvKey=function(t,n,s){if(!KJUR.jws.JWS.isSafeJSONString(t))throw'JWS Head is not safe JSON string: '+t;var i=e(t,n),r=o(t,n,i,s),l=hextob64u(r);return this.parsedJWS={},this.parsedJWS.headB64U=i.split('.')[0],this.parsedJWS.payloadB64U=i.split('.')[1],this.parsedJWS.sigvalB64U=l,i+'.'+l}},KJUR.jws.JWS.sign=function(e,t,n,s,i){var o=KJUR.jws.JWS;if(!o.isSafeJSONString(t))throw'JWS Head is not safe JSON string: '+sHead;var r=o.readSafeJSONString(t);// 1. use alg if defined in sHeader
(''==e||null==e)&&void 0!==r.alg&&(e=r.alg),''!=e&&null!=e&&void 0===r.alg&&(r.alg=e,t=JSON.stringify(r));// 3. set signature algorithm like SHA1withRSA
var l=null;if(void 0===o.jwsalg2sigalg[e])throw'unsupported alg name: '+e;else l=o.jwsalg2sigalg[e];var d=utf8tob64u(t),u=utf8tob64u(n),c=d+'.'+u,p='';// 4. sign
if('Hmac'==l.substr(0,4)){if(void 0===s)throw'hexadecimal key shall be specified for HMAC';var m=new KJUR.crypto.Mac({alg:l,pass:hextorstr(s)});m.updateString(c),p=m.doFinal()}else if(-1!=l.indexOf('withECDSA')){var g=new KJUR.crypto.Signature({alg:l});g.init(s,i),g.updateString(c),hASN1Sig=g.sign(),p=KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig)}else if('none'!=l){var g=new KJUR.crypto.Signature({alg:l});g.init(s,i),g.updateString(c),p=g.sign()}var h=hextob64u(p);return c+'.'+h},KJUR.jws.JWS.verify=function(e,t){var n=KJUR.jws.JWS,s=e.split('.'),i=s[0],o=s[1],r=i+'.'+o,l=b64utohex(s[2]),d=n.readSafeJSONString(b64utoutf8(s[0])),u=null;if(void 0===d.alg)throw'algorithm not specified in header';else u=d.alg;var c=null;if(void 0===n.jwsalg2sigalg[d.alg])throw'unsupported alg name: '+u;else c=n.jwsalg2sigalg[u];// x. verify
if('none'==c)return!0;if('Hmac'==c.substr(0,4)){if(void 0===t)throw'hexadecimal key shall be specified for HMAC';var p=new KJUR.crypto.Mac({alg:c,pass:hextorstr(t)});return p.updateString(r),hSig2=p.doFinal(),l==hSig2}if(-1!=c.indexOf('withECDSA')){var m=null;try{m=KJUR.crypto.ECDSA.concatSigToASN1Sig(l)}catch(e){return!1}var g=new KJUR.crypto.Signature({alg:c});return g.init(t),g.updateString(r),g.verify(m)}var g=new KJUR.crypto.Signature({alg:c});return g.init(t),g.updateString(r),g.verify(l)},KJUR.jws.JWS.jwsalg2sigalg={HS256:'HmacSHA256',//"HS384":	"HmacSHA384", // unsupported because of CryptoJS bug
HS512:'HmacSHA512',RS256:'SHA256withRSA',RS384:'SHA384withRSA',RS512:'SHA512withRSA',ES256:'SHA256withECDSA',ES384:'SHA384withECDSA',//"ES512":	"SHA512withECDSA", // unsupported because of jsrsasign's bug
PS256:'SHA256withRSAandMGF1',PS384:'SHA384withRSAandMGF1',PS512:'SHA512withRSAandMGF1',none:'none'},KJUR.jws.JWS.isSafeJSONString=function(e,t,n){var s=null;try{return(s=jsonParse(e),'object'!=('undefined'==typeof s?'undefined':_typeof(s)))?0:s.constructor===Array?0:(t&&(t[n]=s),1)}catch(e){return 0}},KJUR.jws.JWS.readSafeJSONString=function(e){var t=null;try{return t=jsonParse(e),'object'==('undefined'==typeof t?'undefined':_typeof(t))?t.constructor===Array?null:t:null}catch(e){return null}},KJUR.jws.JWS.getEncodedSignatureValueFromJWS=function(e){if(null==e.match(/^[^.]+\.[^.]+\.([^.]+)$/))throw'JWS signature is not a form of \'Head.Payload.SigValue\'.';return RegExp.$1},KJUR.jws.IntDate=function(){},KJUR.jws.IntDate.get=function(e){if('now'==e)return KJUR.jws.IntDate.getNow();if('now + 1hour'==e)return KJUR.jws.IntDate.getNow()+3600;if('now + 1day'==e)return KJUR.jws.IntDate.getNow()+86400;if('now + 1month'==e)return KJUR.jws.IntDate.getNow()+2592000;if('now + 1year'==e)return KJUR.jws.IntDate.getNow()+31536000;if(e.match(/Z$/))return KJUR.jws.IntDate.getZulu(e);if(e.match(/^[0-9]+$/))return parseInt(e);throw'unsupported format: '+e},KJUR.jws.IntDate.getZulu=function(e){if(a=e.match(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/)){var t=parseInt(RegExp.$1),n=parseInt(RegExp.$2)-1,s=parseInt(RegExp.$3),i=parseInt(RegExp.$4),o=parseInt(RegExp.$5),r=parseInt(RegExp.$6),l=new Date(Date.UTC(t,n,s,i,o,r));return~~(l/1e3)}throw'unsupported format: '+e},KJUR.jws.IntDate.getNow=function(){var e=~~(new Date/1e3);return e},KJUR.jws.IntDate.intDate2UTCString=function(e){var t=new Date(1e3*e);return t.toUTCString()},KJUR.jws.IntDate.intDate2Zulu=function(e){var t=new Date(1e3*e),n=('0000'+t.getUTCFullYear()).slice(-4),s=('00'+(t.getUTCMonth()+1)).slice(-2),i=('00'+t.getUTCDate()).slice(-2),o=('00'+t.getUTCHours()).slice(-2),r=('00'+t.getUTCMinutes()).slice(-2),l=('00'+t.getUTCSeconds()).slice(-2);return n+s+i+o+r+l+'Z'},function(){function e(e){return'function'==typeof e||'object'===('undefined'==typeof e?'undefined':_typeof(e))&&null!==e}function t(e){return'function'==typeof e}function n(e){return'object'===('undefined'==typeof e?'undefined':_typeof(e))&&null!==e}// node
// web worker
function s(){for(var e=0;e<O;e+=2){var t=D[e],n=D[e+1];t(n),D[e]=void 0,D[e+1]=void 0}O=0}function o(){}function i(){return new TypeError('You cannot resolve a promise with itself')}function r(){return new TypeError('A promises callback cannot return that same promise.')}function l(e){try{return e.then}catch(e){return F.error=e,F}}function d(e,t,n,s){try{e.call(t,n,s)}catch(t){return t}}function u(e,t,n){I(function(e){var s=!1,i=d(n,t,function(n){s||(s=!0,t===n?h(e,n):m(e,n))},function(t){s||(s=!0,f(e,t))},'Settle: '+(e._label||' unknown promise'));!s&&i&&(s=!0,f(e,i))},e)}function c(e,t){1===t._state?h(e,t._result):2===e._state?f(e,t._result):y(t,void 0,function(t){m(e,t)},function(t){f(e,t)})}function p(e,n){if(n.constructor===e.constructor)c(e,n);else{var s=l(n);s===F?f(e,F.error):void 0===s?h(e,n):t(s)?u(e,n,s):h(e,n)}}function m(t,n){t===n?f(t,i()):e(n)?p(t,n):h(t,n)}function g(e){e._onerror&&e._onerror(e._result),v(e)}function h(e,t){if(void 0===e._state)if(e._result=t,e._state=1,0===e._subscribers.length);else I(v,e)}function f(e,t){void 0!==e._state||(e._state=2,e._result=t,I(g,e))}function y(e,t,n,s){var i=e._subscribers,o=i.length;e._onerror=null,i[o]=t,i[o+1]=n,i[o+2]=s,0===o&&e._state&&I(v,e)}function v(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var s=e._result,o=0,r,l;o<t.length;o+=3)r=t[o],l=t[o+n],r?S(n,r,l,s):l(s);e._subscribers.length=0}}function b(){this.error=null}function _(e,t){try{return e(t)}catch(t){return H.error=t,H}}function S(e,n,s,i){var o=t(s),l,d,u,c;if(!o)l=i,u=!0;else if(l=_(s,i),l===H?(c=!0,d=l.error,l=null):u=!0,n===l)return void f(n,r());if(void 0!==n._state);else o&&u?m(n,l):c?f(n,d):1===e?h(n,l):2===e&&f(n,l)}function A(t,e){try{e(function(e){m(t,e)},function(e){f(t,e)})}catch(n){f(t,n)}}function x(e,t,n,s){this._instanceConstructor=e,this.promise=new e(o,s),this._abortOnReject=n,this._validateInput(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._init(),0===this.length?h(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&h(this.promise,this._result))):f(this.promise,this._validationError())}function T(){throw new TypeError('You must pass a resolver function as the first argument to the promise constructor')}function k(){throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.')}/**
	                  Promise objects represent the eventual result of an asynchronous operation. The
	                  primary way of interacting with a promise is through its `then` method, which
	                  registers callbacks to receive either a promise’s eventual value or the reason
	                  why the promise cannot be fulfilled.
	                    Terminology
	                  -----------
	                    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	                  - `thenable` is an object or function that defines a `then` method.
	                  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	                  - `exception` is a value that is thrown using the throw statement.
	                  - `reason` is a value that indicates why a promise was rejected.
	                  - `settled` the final resting state of a promise, fulfilled or rejected.
	                    A promise can be in one of three states: pending, fulfilled, or rejected.
	                    Promises that are fulfilled have a fulfillment value and are in the fulfilled
	                  state.  Promises that are rejected have a rejection reason and are in the
	                  rejected state.  A fulfillment value is never a thenable.
	                    Promises can also be said to *resolve* a value.  If this value is also a
	                  promise, then the original promise's settled state will match the value's
	                  settled state.  So a promise that *resolves* a promise that rejects will
	                  itself reject, and a promise that *resolves* a promise that fulfills will
	                  itself fulfill.
	                      Basic Usage:
	                  ------------
	                    ```js
	                  var promise = new Promise(function(resolve, reject) {
	                    // on success
	                    resolve(value);
	                      // on failure
	                    reject(reason);
	                  });
	                    promise.then(function(value) {
	                    // on fulfillment
	                  }, function(reason) {
	                    // on rejection
	                  });
	                  ```
	                    Advanced Usage:
	                  ---------------
	                    Promises shine when abstracting away asynchronous interactions such as
	                  `XMLHttpRequest`s.
	                    ```js
	                  function getJSON(url) {
	                    return new Promise(function(resolve, reject){
	                      var xhr = new XMLHttpRequest();
	                        xhr.open('GET', url);
	                      xhr.onreadystatechange = handler;
	                      xhr.responseType = 'json';
	                      xhr.setRequestHeader('Accept', 'application/json');
	                      xhr.send();
	                        function handler() {
	                        if (this.readyState === this.DONE) {
	                          if (this.status === 200) {
	                            resolve(this.response);
	                          } else {
	                            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	                          }
	                        }
	                      };
	                    });
	                  }
	                    getJSON('/posts.json').then(function(json) {
	                    // on fulfillment
	                  }, function(reason) {
	                    // on rejection
	                  });
	                  ```
	                    Unlike callbacks, promises are great composable primitives.
	                    ```js
	                  Promise.all([
	                    getJSON('/posts'),
	                    getJSON('/comments')
	                  ]).then(function(values){
	                    values[0] // => postsJSON
	                    values[1] // => commentsJSON
	                      return values;
	                  });
	                  ```
	                    @class Promise
	                  @param {function} resolver
	                  @param {String} label optional string for labeling the promise.
	                  Useful for tooling.
	                  @constructor
	                */function w(e,n){this._id=L++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],o!==e&&(!t(e)&&T(),!(this instanceof w)&&k(),A(this,e))}var P=Array.isArray?Array.isArray:function(e){return'[object Array]'===Object.prototype.toString.call(e)};var C=P,O=0,I=function(e,t){D[O]=e,D[O+1]=t,O+=2,2==O&&R()},E='undefined'==typeof window?{}:window,j=E.MutationObserver||E.WebKitMutationObserver,$='undefined'!=typeof Uint8ClampedArray&&'undefined'!=typeof importScripts&&'undefined'!=typeof MessageChannel,D=Array(1e3),R;// test for web worker but not in IE10
R='undefined'!=typeof process&&'[object process]'==={}.toString.call(process)?function(){return function(){process.nextTick(s)}}():j?function(){var e=0,t=new j(s),n=document.createTextNode('');return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}():$?function(){var e=new MessageChannel;return e.port1.onmessage=s,function(){e.port2.postMessage(0)}}():function(){return function(){setTimeout(s,1)}}();var F=new b,H=new b;x.prototype._validateInput=function(e){return C(e)},x.prototype._validationError=function(){return new Error('Array Methods must be provided an Array')},x.prototype._init=function(){this._result=Array(this.length)};x.prototype._enumerate=function(){for(var e=this.length,t=this.promise,n=this._input,s=0;void 0===t._state&&s<e;s++)this._eachEntry(n[s],s)},x.prototype._eachEntry=function(e,t){var s=this._instanceConstructor;n(e)?e.constructor===s&&void 0!==e._state?(e._onerror=null,this._settledAt(e._state,t,e._result)):this._willSettleAt(s.resolve(e),t):(this._remaining--,this._result[t]=this._makeResult(1,t,e))},x.prototype._settledAt=function(e,t,n){var s=this.promise;void 0===s._state&&(this._remaining--,this._abortOnReject&&2===e?f(s,n):this._result[t]=this._makeResult(e,t,n)),0===this._remaining&&h(s,this._result)},x.prototype._makeResult=function(e,t,n){return n},x.prototype._willSettleAt=function(e,t){var n=this;y(e,void 0,function(e){n._settledAt(1,t,e)},function(e){n._settledAt(2,t,e)})};var M=function(e,t){function n(e){m(l,e)}function s(e){f(l,e)}var r=this,l=new r(o,t);if(!C(e))return f(l,new TypeError('You must pass an array to race.')),l;for(var d=e.length,u=0;void 0===l._state&&u<d;u++)y(r.resolve(e[u]),void 0,n,s);return l},L=0,N=w;w.all=function(e,t){return new x(this,e,!0,t).promise},w.race=M,w.resolve=function(e,t){var n=this;if(e&&'object'===('undefined'==typeof e?'undefined':_typeof(e))&&e.constructor===n)return e;var s=new n(o,t);return m(s,e),s},w.reject=function(e,t){var n=this,s=new n(o,t);return f(s,e),s},w.prototype={constructor:w,/**
	                      The primary way of interacting with a promise is through its `then` method,
	                      which registers callbacks to receive either a promise's eventual value or the
	                      reason why the promise cannot be fulfilled.
	                        ```js
	                      findUser().then(function(user){
	                        // user is available
	                      }, function(reason){
	                        // user is unavailable, and you are given the reason why
	                      });
	                      ```
	                        Chaining
	                      --------
	                        The return value of `then` is itself a promise.  This second, 'downstream'
	                      promise is resolved with the return value of the first promise's fulfillment
	                      or rejection handler, or rejected if the handler throws an exception.
	                        ```js
	                      findUser().then(function (user) {
	                        return user.name;
	                      }, function (reason) {
	                        return 'default name';
	                      }).then(function (userName) {
	                        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	                        // will be `'default name'`
	                      });
	                        findUser().then(function (user) {
	                        throw new Error('Found user, but still unhappy');
	                      }, function (reason) {
	                        throw new Error('`findUser` rejected and we're unhappy');
	                      }).then(function (value) {
	                        // never reached
	                      }, function (reason) {
	                        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	                        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	                      });
	                      ```
	                      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	                        ```js
	                      findUser().then(function (user) {
	                        throw new PedagogicalException('Upstream error');
	                      }).then(function (value) {
	                        // never reached
	                      }).then(function (value) {
	                        // never reached
	                      }, function (reason) {
	                        // The `PedgagocialException` is propagated all the way down to here
	                      });
	                      ```
	                        Assimilation
	                      ------------
	                        Sometimes the value you want to propagate to a downstream promise can only be
	                      retrieved asynchronously. This can be achieved by returning a promise in the
	                      fulfillment or rejection handler. The downstream promise will then be pending
	                      until the returned promise is settled. This is called *assimilation*.
	                        ```js
	                      findUser().then(function (user) {
	                        return findCommentsByAuthor(user);
	                      }).then(function (comments) {
	                        // The user's comments are now available
	                      });
	                      ```
	                        If the assimliated promise rejects, then the downstream promise will also reject.
	                        ```js
	                      findUser().then(function (user) {
	                        return findCommentsByAuthor(user);
	                      }).then(function (comments) {
	                        // If `findCommentsByAuthor` fulfills, we'll have the value here
	                      }, function (reason) {
	                        // If `findCommentsByAuthor` rejects, we'll have the reason here
	                      });
	                      ```
	                        Simple Example
	                      --------------
	                        Synchronous Example
	                        ```javascript
	                      var result;
	                        try {
	                        result = findResult();
	                        // success
	                      } catch(reason) {
	                        // failure
	                      }
	                      ```
	                        Errback Example
	                        ```js
	                      findResult(function(result, err){
	                        if (err) {
	                          // failure
	                        } else {
	                          // success
	                        }
	                      });
	                      ```
	                        Promise Example;
	                        ```javascript
	                      findResult().then(function(result){
	                        // success
	                      }, function(reason){
	                        // failure
	                      });
	                      ```
	                        Advanced Example
	                      --------------
	                        Synchronous Example
	                        ```javascript
	                      var author, books;
	                        try {
	                        author = findAuthor();
	                        books  = findBooksByAuthor(author);
	                        // success
	                      } catch(reason) {
	                        // failure
	                      }
	                      ```
	                        Errback Example
	                        ```js
	                        function foundBooks(books) {
	                        }
	                        function failure(reason) {
	                        }
	                        findAuthor(function(author, err){
	                        if (err) {
	                          failure(err);
	                          // failure
	                        } else {
	                          try {
	                            findBoooksByAuthor(author, function(books, err) {
	                              if (err) {
	                                failure(err);
	                              } else {
	                                try {
	                                  foundBooks(books);
	                                } catch(reason) {
	                                  failure(reason);
	                                }
	                              }
	                            });
	                          } catch(error) {
	                            failure(err);
	                          }
	                          // success
	                        }
	                      });
	                      ```
	                        Promise Example;
	                        ```javascript
	                      findAuthor().
	                        then(findBooksByAuthor).
	                        then(function(books){
	                          // found books
	                      }).catch(function(reason){
	                        // something went wrong
	                      });
	                      ```
	                        @method then
	                      @param {Function} onFulfilled
	                      @param {Function} onRejected
	                      @param {String} label optional string for labeling the promise.
	                      Useful for tooling.
	                      @return {Promise}
	                    */then:function(e,t,n){var s=this,i=s._state;if(1===i&&!e||2===i&&!t)return this;s._onerror=null;var r=new this.constructor(o,n),l=s._result;if(i){var d=arguments[i-1];I(function(){S(i,r,d,l)})}else y(s,r,e,t);return r},/**
	                      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	                      as the catch block of a try/catch statement.
	                        ```js
	                      function findAuthor(){
	                        throw new Error('couldn't find that author');
	                      }
	                        // synchronous
	                      try {
	                        findAuthor();
	                      } catch(reason) {
	                        // something went wrong
	                      }
	                        // async with promises
	                      findAuthor().catch(function(reason){
	                        // something went wrong
	                      });
	                      ```
	                        @method catch
	                      @param {Function} onRejection
	                      @param {String} label optional string for labeling the promise.
	                      Useful for tooling.
	                      @return {Promise}
	                    */catch:function(e,t){return this.then(null,e,t)}};var B=function(){var e='undefined'==typeof commonjsGlobal?'undefined'!=typeof window&&window.document?window:self:commonjsGlobal;var n='Promise'in e&&// Some of these methods are missing from
// Firefox/Chrome experimental implementations
'resolve'in e.Promise&&'reject'in e.Promise&&'all'in e.Promise&&'race'in e.Promise&&// Older version of the spec had a resolver object
// as the arg rather than a function
function(){var n;return new e.Promise(function(e){n=e}),t(n)}();n||(e.Promise=N)},V={Promise:N,polyfill:B};module.exports?module.exports=V:'undefined'!=typeof this&&(this.ES6Promise=V),window.Promise=window.Promise||this.ES6Promise.Promise}.call(this),_httpRequest=new DefaultHttpRequest,_promiseFactory=new DefaultPromiseFactory,OidcClient.prototype.getJson=function(e,t){return this._config||(this._config={}),t&&(this._config.headers={Authorization:'Bearer '+t}),_httpRequest.getJSON(e,this._config)},OidcClient.prototype.loadMetadataAsync=function(){var e=this._settings;return e.metadata?_promiseFactory.resolve(e.metadata):e.authority?this.getJson(e.authority).then(function(t){return e.metadata=t,t},function(e){return error('Failed to load metadata ('+e.message+')')}):error('No authority configured')},OidcClient.prototype.loadX509SigningKeyAsync=function(){function e(e){if(!e.keys||!e.keys.length)return error('Signing keys empty');var t=e.keys[0];return'RSA'===t.kty?t.x5c&&t.x5c.length?_promiseFactory.resolve(t.x5c[0]):error('RSA keys empty'):error('Signing key not RSA')}var t=this._settings;if(t.jwks)return e(t.jwks);var n=this;return this.loadMetadataAsync().then(function(s){return s.jwks_uri?n.getJson(s.jwks_uri).then(function(n){return t.jwks=n,e(n)},function(e){return error('Failed to load signing keys ('+e.message+')')}):error('Metadata does not contain jwks_uri')})},OidcClient.prototype.loadUserProfile=function(e){var t=this;return this.loadMetadataAsync().then(function(n){return n.userinfo_endpoint?t.getJson(n.userinfo_endpoint,e):_promiseFactory.reject(Error('Metadata does not contain userinfo_endpoint'))})},OidcClient.prototype.loadAuthorizationEndpoint=function(){return this._settings.authorization_endpoint?_promiseFactory.resolve(this._settings.authorization_endpoint):this._settings.authority?this.loadMetadataAsync().then(function(e){return e.authorization_endpoint?e.authorization_endpoint:error('Metadata does not contain authorization_endpoint')}):error('No authorization_endpoint configured')},OidcClient.prototype.createTokenRequestAsync=function(){var e=this,t=e._settings;return e.loadAuthorizationEndpoint().then(function(n){var s=rand(),i=n+'?state='+encodeURIComponent(s);if(e.isOidc){var o=rand();i+='&nonce='+encodeURIComponent(o)}['client_id','redirect_uri','response_type','scope'].forEach(function(e){var n=t[e];n&&(i+='&'+e+'='+encodeURIComponent(n))});['prompt','display','max_age','ui_locales','id_token_hint','login_hint','acr_values'].forEach(function(e){var n=t[e];n&&(i+='&'+e+'='+encodeURIComponent(n))});var r={oidc:e.isOidc,oauth:e.isOAuth,state:s};return o&&(r.nonce=o),t.request_state_store.setItem(t.request_state_key,JSON.stringify(r)),{request_state:r,url:i}})},OidcClient.prototype.createLogoutRequestAsync=function(e){var t=this._settings;return this.loadMetadataAsync().then(function(n){if(!n.end_session_endpoint)return error('No end_session_endpoint in metadata');var s=rand(),i=n.end_session_endpoint;return e&&t.post_logout_redirect_uri&&(i+='?post_logout_redirect_uri='+encodeURIComponent(t.post_logout_redirect_uri),i+='&id_token_hint='+encodeURIComponent(e),i+='&state='+encodeURIComponent(s)),{url:i,state:s}})},OidcClient.prototype.validateIdTokenAsync=function(e,t,n){var s=this,i=s._settings;return s.loadX509SigningKeyAsync().then(function(o){var r=new KJUR.jws.JWS;if(r.verifyJWSByPemX509Cert(e,o)){var l=JSON.parse(r.parsedJWS.payloadS);return t===l.nonce?s.loadMetadataAsync().then(function(e){if(l.iss!==e.issuer)return error('Invalid issuer');if(l.aud!==i.client_id)return error('Invalid audience');var t=parseInt(Date.now()/1e3),o=t-l.iat;// accept tokens issues up to 60 mins ago
return 3600<o?error('Token is '+_Mathfloor(o/60)+' minutes old and needs to be less than one hour old'):l.exp<t?error('Token expired'):n&&i.load_user_profile?s.loadUserProfile(n,l).then(function(e){return copy(e,l)}):l}):error('Invalid nonce')}return error('JWT failed to validate')})},OidcClient.prototype.validateAccessTokenAsync=function(e,t){if(!e.at_hash)return error('No at_hash in id_token');var n=KJUR.crypto.Util.sha256(t),s=n.substr(0,n.length/2),i=hextob64u(s);return i===e.at_hash?_promiseFactory.resolve():error('at_hash failed to validate')},OidcClient.prototype.validateIdTokenAndAccessTokenAsync=function(e,t,n){var s=this;return s.validateIdTokenAsync(e,t,n).then(function(e){return s.validateAccessTokenAsync(e,n).then(function(){return e})})},OidcClient.prototype.processResponseAsync=function(e){var t=this,n=t._settings,s=n.request_state_store.getItem(n.request_state_key);if(n.request_state_store.removeItem(n.request_state_key),!s)return error('No request state loaded');if(s=JSON.parse(s),!s)return error('No request state loaded');if(!s.state)return error('No state loaded');var i=parseOidcResult(e);if(!i)return error('No OIDC response');if(i.error)return error(i.error);if(i.state!==s.state)return error('Invalid state');if(s.oidc){if(!i.id_token)return error('No identity token');if(!s.nonce)return error('No nonce loaded')}if(s.oauth){if(!i.access_token)return error('No access token');if(!i.token_type||'bearer'!==i.token_type.toLowerCase())return error('Invalid token type');if(!i.expires_in)return error('No token expiration')}var o=_promiseFactory.resolve();return s.oidc&&s.oauth?o=t.validateIdTokenAndAccessTokenAsync(i.id_token,s.nonce,i.access_token):s.oidc&&(o=t.validateIdTokenAsync(i.id_token,s.nonce)),o.then(function(e){if(e&&n.filter_protocol_claims){['nonce','at_hash','iat','nbf','exp','aud','iss','idp'].forEach(function(t){delete e[t]})}return{profile:e,id_token:i.id_token,access_token:i.access_token,expires_in:i.expires_in,scope:i.scope,session_state:i.session_state,state:i.state}})},window.OidcClient=OidcClient}();var _promiseFactory=new DefaultPromiseFactory;Token.fromResponse=function(e){if(e.access_token){var t=parseInt(Date.now()/1e3);e.expires_at=t+parseInt(e.expires_in)}return new Token(e)},Token.fromJSON=function(e){if(e)try{var t=JSON.parse(e);return new Token(t)}catch(t){}return new Token(null)},Token.prototype.toJSON=function(){return JSON.stringify({profile:this.profile,id_token:this.id_token,access_token:this.access_token,expires_at:this.expires_at,scope:this.scopes.join(' '),session_state:this.session_state})},FrameLoader.prototype.loadAsync=function(e){return e=e||this.url,e?_promiseFactory.create(function(t,n){function s(){window.removeEventListener('message',i,!1),r&&window.clearTimeout(r),r=null,window.document.body.removeChild(o)}function i(n){r&&n.origin===location.protocol+'//'+location.host&&n.source==o.contentWindow&&(s(),t(n.data))}var o=window.document.createElement('iframe');o.style.display='none';var r=window.setTimeout(function(){s(),n()},5e3);window.addEventListener('message',i,!1),window.document.body.appendChild(o),o.src=e}):_promiseFactory.reject('No url provided')},TokenManager.setPromiseFactory=function(e){_promiseFactory=e},TokenManager.setHttpRequest=function(e){if('object'!==('undefined'==typeof e?'undefined':_typeof(e))||'function'!=typeof e.getJSON)throw Error('The provided value is not a valid http request.')},TokenManager.prototype._callTokenRemoved=function(){this._callbacks.tokenRemovedCallbacks.forEach(function(e){e()})},TokenManager.prototype._callTokenExpiring=function(){this._callbacks.tokenExpiringCallbacks.forEach(function(e){e()})},TokenManager.prototype._callTokenExpired=function(){this._callbacks.tokenExpiredCallbacks.forEach(function(e){e()})},TokenManager.prototype._callTokenObtained=function(){this._callbacks.tokenObtainedCallbacks.forEach(function(e){e()})},TokenManager.prototype._callSilentTokenRenewFailed=function(){this._callbacks.silentTokenRenewFailedCallbacks.forEach(function(e){e()})},TokenManager.prototype.saveToken=function(e){e&&!(e instanceof Token)&&(e=Token.fromResponse(e)),this._token=e,this._settings.persist&&!this.expired?this._settings.store.setItem(this._settings.persistKey,e.toJSON()):this._settings.store.removeItem(this._settings.persistKey),e?this._callTokenObtained():this._callTokenRemoved()},TokenManager.prototype.addOnTokenRemoved=function(e){this._callbacks.tokenRemovedCallbacks.push(e)},TokenManager.prototype.addOnTokenObtained=function(e){this._callbacks.tokenObtainedCallbacks.push(e)},TokenManager.prototype.addOnTokenExpiring=function(e){this._callbacks.tokenExpiringCallbacks.push(e)},TokenManager.prototype.addOnTokenExpired=function(e){this._callbacks.tokenExpiredCallbacks.push(e)},TokenManager.prototype.addOnSilentTokenRenewFailed=function(e){this._callbacks.silentTokenRenewFailedCallbacks.push(e)},TokenManager.prototype.removeToken=function(){this.saveToken(null)},TokenManager.prototype.redirectForToken=function(e){var t=this;t.oidcClient.createTokenRequestAsync().then(function(n){var s=t._settings.clientPersistKey,i={state:n.request_state.state,data:e};t._settings.store.setItem(s,JSON.stringify(i)),window.location=n.url},function(e){console.error('TokenManager.redirectForToken error: '+(e&&e.message||e||''))})},TokenManager.prototype.redirectForLogout=function(e){var t=this;t.oidcClient.createLogoutRequestAsync(t.id_token).then(function(n){t.removeToken();var s={state:n.state,data:e};t._settings.store.setItem(t._settings.clientPersistKey,JSON.stringify(s)),window.location=n.url},function(e){console.error('TokenManager.redirectForLogout error: '+(e&&e.message||e||''))})},TokenManager.prototype.processTokenCallbackAsync=function(e){var t=this;return t.oidcClient.processResponseAsync(e).then(function(e){t.saveToken(e);var n=t._settings.store.getItem(t._settings.clientPersistKey);if(n=JSON.parse(n),n&&n.state===e.state)return t._settings.store.removeItem(t._settings.clientPersistKey),n})},TokenManager.prototype.renewTokenSilentAsync=function(){var e=this;if(!e._settings.silent_redirect_uri)return _promiseFactory.reject('silent_redirect_uri not configured');var t=copy(e._settings);t.redirect_uri=t.silent_redirect_uri,t.prompt='none';var n=new OidcClient(t);return n.createTokenRequestAsync().then(function(t){var s=new FrameLoader(t.url);return s.loadAsync().then(function(t){return n.processResponseAsync(t).then(function(t){e.saveToken(t)})})})},TokenManager.prototype.processTokenCallbackSilent=function(e){if(window.parent&&window!==window.parent){var e=e||window.location.hash;e&&window.parent.postMessage(e,location.protocol+'//'+location.host)}},window.OidcTokenManager=TokenManager})()});(function(t){try{t=angular.module('super-templates')}catch(e){t=angular.module('super-templates',[])}t.run(['$templateCache',function(e){e.put('_error-403.html','<div class="error-page-40x"><div class="fl-content"><div class="ss-fl-logo fl-logo"></div><h2>You do not have permission to view this page.</h2></div></div>'),e.put('_error-app-failure.html','<div class="error-page-app-failure"><div class="error-message-container"><h1 ng-bind="error.title"></h1><div class="error-message" ss-bind-html="error.message"></div><div class="account-settings" ng-if="error.isFrontlineUser">View your <a href="#" ng-click="go.editSettings($event)">Account Settings</a></div><div class="account-logout"><a href="#" ng-click="go.logout($event)">Logout</a></div><footer ss-icon="logo-frontline"></footer></div></div>'),e.put('static/main.html','<link rel="stylesheet" media="all" id="fl-styles" charset="utf-8"><section id="super-suit"><!-- placeholder ui-view for when a state doesn\'t load a ui-module (404) --><ui-view></ui-view></section><section id="fl-app"></section><div id="tool-tip-container"></div><div id="modal-fade"></div>'),e.put('components/super-button/button.html','<button class="super-button"><label class="button-control"></label><!-- menulist is added here if needed --></button>'),e.put('components/super-chart-doughnut/chart-doughnut.html','<canvas class="super-chart-doughnut" ng-mouseover=""></canvas>'),e.put('components/super-emp-profile-complete/emp-profile-complete.html','<div class="super-emp-profile-complete"><span ng-if="textPrefix && vm.incompleteList.length > 0" ng-bind="textPrefix"></span><super-popover ss-icon="exclamation-circle" ng-if="vm.incompleteList.length > 0"><h4>Information needed:</h4><ul><li ng-repeat="field in vm.incompleteList" ng-bind="field"></li></ul></super-popover></div>'),e.put('components/super-employee-search/employee-search.html','<div class="super-employee-search"><super-input-text class="no-deselect" ss-icon-before="search" placeholder="{{placeholder}}" debounce="350" label="{{label}}" model="vm.query" is-disabled="vm.disabled" name="query" hide-on-select></super-input-text><div class="menu" ng-class="{\'ss-menu-open\' : vm.menuOpen}"><super-loader is-loading="vm.loading"></super-loader><ul class="select-menu-list"><li class="select-menu-list-item active-filter no-deselect" ng-if="includeActiveOnlyStatusFilter"><super-input-checkbox aria-label="Active Employees Only" label="Active Only" model="vm.activeOnlyFilter"></super-input-checkbox></li><li class="select-menu-list-item" ng-if="vm.results.length === 0 && !vm.loading">No results found</li><li class="select-menu-list-item" data-qa="{{:: result.id  }}" ng-repeat="result in vm.results" ng-click="go.add(result)" tabindex="0"><span class="result name no-deselect" title="{{result._firstName + \' \' + result._lastName}}">{{result._firstName}}&nbsp;{{result._lastName}}<span ng-if="includeActiveOnlyStatusFilter" class="employee-status {{result.currentStatus.name}}">{{result.currentStatus.name}}</span></span><br><span class="sub-result email" ng-if="result.primaryEmail !== undefined" ng-bind="result.primaryEmail._emailAddress" title="{{result.primaryEmail._emailAddress}}"></span> <span class="sub-result" ng-if="result.primaryEmail !== undefined && result._externalId !== null">&nbsp;&#124;&nbsp;</span> <span class="sub-result id" ng-if="result._externalId" ng-bind="result._externalId" title="Ext. ID: {{result._externalId}}"></span></li></ul></div><div class="select-menu-selected" ng-show="vm.usePill"><ul class="select-menu-selected-list" ng-class="{\'add-margin\' : model.length}"><li class="selected-item" data-qa="{{:: item.id  }}" ng-repeat="item in model track by $index"><span>{{item._firstName}}&nbsp;{{item._lastName}}</span> <button type="button" class="remove" ss-icon-after="times" aria-label="remove {{item._firstName}}&nbsp;{{item._lastName}}" ng-click="go.remove(item)"></button></li></ul></div></div>'),e.put('components/super-file-upload/file-upload.html','<div class="super-file-upload"><label for="upload-control" class="main-label instructions" ng-bind="label" ng-class="{\'required\': required}"></label><div class="file-list-container"><ul id="file-upload-list-{{::$id}}" class="file-list" ng-class="{\'no-upload\' : !vm.editMode, \'addHeight\': vm.loading}" aria-busy="{{vm.loading}}"><li class="file-list-item" ng-repeat="file in vm.files track by $index"><i class="file-icon" ss-icon="{{ go.getIcon(file) }}" aria-hidden="true"></i> <a href="" class="file-name" ng-click="go.download(file.id)" title="{{ file.filename }}" ng-bind="file.filename" aria-label="click this link to download the file titled {{ file.filename }}"></a><div class="file-actions-group" ng-if="vm.editMode" role="group"><i class="file-upload-success" ss-icon="check" aria-label="the file named {{ file.filename }} has been successfully uploaded"></i> <i ss-icon="trash-o" aria-hidden="true"></i> <a role="button" href="" class="trash" ng-click="go.deleteFile(file)" aria-label="click here to remove the file titled {{ file.filename }}" title="Remove {{ file.filename }}" aria-controls="progress-indicator-{{::$id}}, file-upload-list-{{::$id}}">Delete</a></div></li></ul><super-loader id="progress-indicator-{{::$id}}" is-loading="vm.loading" status-text="vm.loadingStatus" fill role="status"></super-loader></div><div class="uploader-control-group" ng-if="vm.editMode" role="group"><!-- This element should be used to append upload status messages for A11Y  --> <i id="attachment-status-alert-{{::$id}}" class="attachment-status-alert" role="alert" aria-live="polite" aria-atomic="true"></i><!-- ---------------------------------------------------------------------- --> <button ng-if="go.shouldShowUpload()" type="button" class="super-button std upload" aria-hidden="true" ng-disabled="isDisabled" tabindex="-1"><label>upload file</label></button> <input type="file" id="upload-control" name="file upload control" nv-file-select="fileUpload" uploader="uploader" aria-label="click here to select a file to upload" ng-disabled="isDisabled" aria-controls="progress-indicator-{{::$id}}, file-upload-list-{{::$id}}"></div><p ng-if="!vm.files && !vm.editMode">No files Uploaded</p></div>'),e.put('components/super-filter-bar/filter-bar.html','<div class="super-filter-bar {{vm.classes}}"><div class="gd-row" ng-if="selectedCount === 0"><div class="search gd-30p" ng-if="typeLabel"><super-input-text ss-icon="search" model="vm.search" placeholder="Find {{vm.searchLabel}}" is-disabled="searchDisabled"></super-input-text></div><div class="count">{{totalCount}} <span ng-pluralize count="totalCount" when="vm.pluralize"></span></div><div class="actions" ng-transclude="actions"></div><div class="filters" ng-transclude="filters"></div></div><div class="bulk-actions" ng-if="selectedCount > 0"><span class="count">{{selectedCount}} <span ng-pluralize count="selectedCount" when="vm.pluralize"></span> selected</span><div ng-transclude="bulkActions"></div></div></div>'),e.put('components/super-grid/grid.html','<div class="super-grid" ng-class="{\'selectable\': selectable, \'zebra-stripes\': vm.rowCount >= 5}"><div class="grid-header"><div class="super-grid-column select" ng-if="selectable"><super-button ss-icon="angle-down" ng-if="!vm.disableSelectAll"><item ng-click="go.selectAll()">Select All</item><item ng-click="go.selectNone()">Select None</item></super-button></div><div ng-transclude="header" class="header-container"></div></div><div ng-transclude="rows"></div><div class="super-grid-row empty-row" ng-if="sortable != null && !sortable.length"><span class="super-grid-cell">0 results found</span></div></div>'),e.put('components/super-grid-cell/grid-cell.html','<div class="super-grid-cell" ng-transclude></div>'),e.put('components/super-grid-column/grid-column.html','<div class="super-grid-column" ng-class="{\'no-left-separator\': vm.noLeftSeparator, \'sorted\': go.isSorted(), \'sortable\': sortBy}" ng-click="go.sort()" ng-keydown="$event.keyCode === vm.keyCode && go.sort()" ng-style="vm.styles" tabindex="{{vm.tabIndex}}"><span ng-transclude></span> <span class="sort-icon" ng-if="sortBy" ss-icon="{{vm.sortIcon}}"></span><super-popover ng-if="vm.info">{{vm.info}}</super-popover></div>'),e.put('components/super-grid-row/grid-row.html','<div class="super-grid-row"><div class="super-grid-cell select"><super-input-checkbox model="vm.selected" is-disabled="isDisabled"></super-input-checkbox></div><div class="row-container" ng-transclude></div></div>'),e.put('components/super-input-checkbox/input-checkbox.html','<div class="super-input-checkbox" ng-class="{\n\'is-disabled\': isDisabled,\n\'view-mode\': !vm.editMode,\n\'edit-mode\': vm.editMode,\n\'ss-redacted\': vm.permissions.redacted\n}"><div ng-if="!vm.permissions.redacted"><!-- This renders the element as a read-only, non-interactive checkbox --><div ng-if="!vm.editMode"><input type="checkbox" ng-model="cmpt.model" ng-disabled="true" name="{{name}}" id="{{vm.id}}"> <label for="{{vm.id}}" class="fa" ng-bind="vm.label" ng-class="{\'{{labelWeight}}\':labelWeight, \'required\': required}"></label></div><!-- This renders the element as a checkbox, and toggles its disabled state based on \'isDisabled\' --><div ng-if="vm.permissions.edit && vm.editMode"><input type="checkbox" ng-model="cmpt.model" ng-disabled="isDisabled" name="{{name}}" id="{{vm.id}}"> <label for="{{vm.id}}" class="fa" ng-bind="vm.label" ng-class="{\'{{labelWeight}}\':labelWeight, \'required\': required}"></label></div></div><div ng-if="vm.permissions.redacted"><div ng-if="!vm.editMode" class="mask-display"><input type="checkbox" ng-model="cmpt.model" ng-disabled="true" name="{{name}}" id="{{vm.id}}"> <label for="{{vm.id}}" class="fa" ng-bind="vm.label" ng-class="{\'{{labelWeight}}\':labelWeight, \'required\': required}"></label></div><div ng-if="vm.permissions.edit && vm.editMode" class="mask-display"><!-- masked --> <span class="input fa" ng-if="!vm.show"><!-- Empty? --> </span><!-- unmasked --> <span class="input fa" ng-if="vm.show"><input type="checkbox" ng-model="cmpt.model" ng-disabled="isDisabled" name="{{name}}" id="{{vm.id}}"> <label for="{{vm.id}}" class="fa" ng-bind="vm.label" ng-class="{\'{{labelWeight}}\':labelWeight, \'required\': required}"></label></span></div><button type="button" class="super-button smp toggle" ng-click="go.toggleView()"><span ss-icon-before="{{vm.show === true ? \'eye-slash\': \'eye\'}}" ng-bind="vm.show === true ? \'Hide\': \'View\'" class="button-control"></span></button></div></div>'),e.put('components/super-input-datepicker/input-datepicker.html','<div class="super-input-datepicker" ng-class="{\n\'view-mode\': !vm.editMode,\n\'edit-mode\': vm.editMode,\n\'ss-redacted\': vm.permissions.redacted\n}"><div ss-validate="go.validate(vm.displayDate)"><super-input-text label="{{label}}" input-id="{{inputId}}" label-weight="{{labelWeight}}" edit-mode="vm.editMode" permissions="vm.permissions" model="vm.displayDate" is-disabled="isDisabled" required="required" ss-icon-after="calendar"></super-input-text></div></div>'),e.put('components/super-input-radio/input-radio.html','<div class="super-input-radio" ng-class="{\n\'is-disabled\': vm.disabled,\n\'view-mode\': !vm.editMode,\n\'edit-mode\': vm.editMode\n}"><input type="radio" ng-model="model" ng-disabled="vm.disabled" ng-value="value" id="{{vm.id}}"> <label for="{{vm.id}}" class="" ng-bind="vm.label" ng-class="{\'{{labelWeight}}\':labelWeight}"></label></div>'),e.put('components/super-input-text/input-text.html','<div class="super-input-text" ng-class="{\n\'view-mode\': !vm.editMode,\n\'edit-mode\': vm.editMode,\n\'ss-redacted\': vm.permissions.redacted\n}"><label for="{{vm.id}}" ng-if="label" class="main-label" ng-class="{\'{{labelWeight}}\':labelWeight, \'required\': required}" ng-bind="label"></label><!-- NOT REDACTED view --><div ng-if="!vm.permissions.redacted"><div ng-if="!vm.editMode" class="view-value"><span ng-if="model != null" title="{{ model }}" ng-bind="go.getMaskedModel(model)" tabindex="1"></span><div ng-if="model == null" class="empty"><ng-transclude></ng-transclude>&nbsp;</div></div><div ng-if="vm.permissions.edit && vm.editMode" ng-class="{\'has-default\': defaultValue != null}"><span class="input fa" ng-class="{\'{{size}}\': size, \'is-disabled\': isDisabled}"><input type="{{type}}" id="{{vm.id}}" placeholder="{{cmpt.defaultValue != null ? cmpt.defaultValue : placeholder || \'\'}}" ss-focus-bind="cmpt.hasFocus" ng-model="cmpt.model" ng-disabled="isDisabled || (model == null && defaultValue != null)" ng-trim="false" ng-model-options="vm.modelopts" autocomplete="off"> <button type="button" tabindex="-1" class="ss-ctrl-clear fa-li-close" ng-if="vm.editMode && defaultValue == null" aria-label="clear input" ng-click="go.clearEntry()" ng-show="vm.showClear && !isDisabled"></button> </span><span class="override-action" ng-if="defaultValue != null" ng-class="{\'is-disabled\': isDisabled}"><a role="button" href="" ng-if="model != null" ng-click="cmpt.model = null">(<span class="default-value" ng-bind="defaultValue"></span>) revert </a><a href="" ng-if="model == null" ng-click="go.override()">overwrite</a></span></div></div><!-- REDACTED view --><div ng-if="vm.permissions.redacted"><div ng-if="!vm.editMode" class="mask-display"><span ng-if="!vm.show" tabindex="1" aria-label="{{label}} redacted">********</span> <span ng-if="vm.show && model != null" ng-bind="go.getMaskedModel(model)" tabindex="1"></span><div ng-if="vm.show && model == null" class="empty" tabindex="1"><ng-transclude></ng-transclude>&nbsp;</div></div><div ng-if="vm.permissions.edit && vm.editMode" class="mask-display"><!-- redacted --> <span class="input fa is-disabled" ng-if="!vm.show"><input id="{{vm.id}}" type="{{type}}" value="********" ng-disabled="true" ng-trim="false" autocomplete="off"> </span><!-- not redacted --> <span class="input fa" ng-class="{\'is-disabled\': isDisabled}" ng-if="vm.show"><input type="{{type}}" id="{{vm.id}}" placeholder="{{cmpt.defaultValue != null ? cmpt.defaultValue : placeholder || \'\'}}" ss-focus-bind="cmpt.hasFocus" ng-model="cmpt.model" ng-disabled="isDisabled" ng-trim="false" ng-model-options="vm.modelopts" autocomplete="off"> <button type="button" ng-if="vm.editMode && defaultValue == null" tabindex="-1" class="ss-ctrl-clear fa-li-close" aria-label="clear input" ng-click="go.clearEntry()" ng-show="vm.showClear && !isDisabled"></button></span></div><button ng-if="vm.permissions.view" type="button" class="super-button smp toggle" ng-click="go.toggleView()"><label ss-icon-before="{{vm.show === true ? \'eye-slash\': \'eye\'}}" ng-bind="vm.show === true ? \'Hide\': \'View\'" class="button-control" aria-label="toggle redacted field visibility"></label></button></div></div>'),e.put('components/super-input-textarea/input-textarea.html','<label class="super-input-textarea" ng-class="{\'edit-mode\': vm.editMode}"><span class="main-label" ng-bind="vm.label" ng-class="{\'{{labelWeight}}\':labelWeight, \'required\': required}"></span> <textarea ng-disabled="isDisabled" ng-readonly="!vm.editMode" ng-model="model"></textarea><p class="print-only" ng-bind="model"></p></label>'),e.put('components/super-loader/loader.html','<div class="super-loader" ng-class="{\'fill-container\': vm.fill,\'is-loading\': vm.loading}" ng-show="vm.loading"><div class="loading-container" ng-show="vm.loading"><div class="status" ng-if="statusText" ng-bind="statusText"></div><div class="logo-spinner"><span class="bar bar-1"></span> <span class="bar bar-2"></span> <span class="bar bar-3"></span> <span class="bar bar-4"></span> <span class="bar bar-5"></span> <span class="bar bar-6"></span></div></div><div class="cover" ng-if="vm.fill" ng-style="vm.coverStyles"></div></div>'),e.put('components/super-multi-filter-list/multi-filter-list.html','<div class="super-multi-filter-list" ng-class="{\n\'tags\': vm.showTags,\n\'is-disabled\': isDisabled\n}"><label ng-if="label" for="{{vm.inputId}}" class="main-label" ng-class="{\'{{labelWeight}}\':labelWeight}" ng-bind="vm.label"></label><div class="select-menu-control"><button type="button" id="{{vm.inputId}}" class="menu-control super-button std" ss-menu="select-menu" ng-disabled="isDisabled" role="listbox"><label ss-icon-after="angle-down" ng-if="selected.length === 0" ng-bind="vm.defaultSelectedText || \'All\'"></label> <label ss-icon-after="angle-down" ng-if="selected.length === 1"><span ng-bind="(vm.showTags ? \'1 of \' + vm.options.length + \' Selected\' : selected[0]._name)"></span></label> <label ss-icon-after="angle-down" ng-if="selected.length > 1 && !onSearch"><span ng-bind="selected.length"></span> of <span ng-bind="vm.options.length"></span> Selected</label> <label ss-icon-after="angle-down" ng-if="selected.length > 1 && onSearch"><span ng-bind="selected.length"></span> Selected</label></button><div class="select-menu" ng-class="onSearch ? \'lazymode\' : \'\'"><!-- filter input --><super-input-text class="select-menu-filter" model="vm.filterText" ng-if="!onSearch && vm.options.length > 6" name="filterText" ss-icon="search">Type here to filter</super-input-text><super-input-text class="select-menu-filter" model="vm.filterText" ng-if="onSearch" name="filterText" debounce="800" ss-icon="search">Type here to filter</super-input-text><div><div class="no-matches" ng-if="(!onSearch && go.checkFitleredItems()) || (onSearch && go.checkLoadedItems() && vm.lazyLoadMode.status ===\'loaded\')">no matches</div><div class="no-matches" ng-if="(onSearch && go.checkFitleredItems()) && vm.lazyLoadMode.status === \'loading\'">Loading...</div><ul class="select-menu-list" role="list" ss-scroll-list ng-transclude></ul></div><!-- clear all --><div class="select-footer" ng-if="!onSearch"><div class="footer-ctrl"><button type="button" class="" ng-class="{\'is-disabled\': selected.length === vm.options.length}" ng-click="go.checkAll()">Select All</button> <button type="button" class="" ng-class="{\'is-disabled\': selected.length === 0}" ng-click="go.uncheckAll()">Clear All</button></div></div></div></div><div class="select-menu-selected" ng-show="vm.showTags"><ul><li ng-repeat="item in selected"><span ng-bind="item.pillText"></span> <button type="button" ss-icon-after="times" ng-click="go.remove(item)" aria-label="remove {{item.pillText}}" ng-hide="isDisabled"></button></li></ul></div></div>'),e.put('components/super-multi-filter-list-group/multi-filter-list-group.html','<li ng-show="!vm.hide" ng-class="{\'no-sep\': vm.isFirstVisible}" class="super-multi-filter-list-group select-group"><div class="select-group-label">{{vm.label}}</div><ul class="" ng-transclude></ul></li>'),e.put('components/super-multi-filter-list-item/multi-filter-list-item.html','<li class="super-multi-filter-list-item select-menu-list-item" ng-click="go.click($event)" ng-show="!option.hide" data-test="{{option.id}}"><super-input-checkbox label="{{vm.name}}" model="option.checked" is-disabled="option.disabled" input-id="{{vm.id}}"></super-input-checkbox></li>'),e.put('components/super-org-search/org-search.html','<div class="super-org-search"><super-input-text ss-icon-before="search" placeholder="{{placeholder}}" debounce="350" label="{{label}}" model="vm.query" is-disabled="vm.disabled" name="query" hide-on-select></super-input-text><div class="menu" ng-class="{\'ss-menu-open\' : vm.menuOpen}"><super-loader is-loading="vm.loading"></super-loader><ul class="select-menu-list"><li class="select-menu-list-item" ng-if="vm.results.length === 0 && !vm.loading">No results found</li><li class="select-menu-list-item" data-qa="{{:: result.Id  }}" ng-repeat="result in vm.results" ng-click="go.add(result)" tabindex="0"><span class="result name" title="{{result.Name + \' (\' + result.Id + \')\'}}">{{result.Name + \' (\' + result.Id + \')\'}}</span></li></ul></div><div class="select-menu-selected" ng-show="vm.usePill"><ul class="select-menu-selected-list" ng-class="{\'add-margin\' : model.length}"><li class="selected-item" data-qa="{{:: item.Id  }}" ng-repeat="item in model track by $index"><span>{{item.Name}}</span> <button type="button" class="remove" ss-icon-after="times" aria-label="remove {{item.Name}}" ng-click="go.remove(item)"></button></li></ul></div></div>'),e.put('components/super-popover/popover.html','<div class="super-popover"><button type="button" ss-menu="content" ss-icon="{{::vm.icon}}" ss-icon-after="{{::vm.iconAfter}}" aria-label="{{::vm.ariaLabel}}"><span ng-if="vm.link" ng-bind="vm.link"></span></button><div class="content ng-hide-fade" ng-show="vm.onScreen && vm.menuShowing" ng-transclude></div></div>'),e.put('components/super-search-results-employee/search-results-employee.html','<a class="super-search-results-employee" href="/ec-employee/record/{{model.id}}"><span ng-bind="model._firstName"></span> <span ng-bind="model._lastName"></span> <small ng-bind="model._positions[0]._name"></small> <span class="thumb"><img ng-src="{{model.thumb}}"></span></a>'),e.put('components/super-select/select.html','<div class="super-select" ng-model="model" ng-class="{\'is-disabled\': isDisabled}"><div class="main-label"><label ng-bind="vm.label"></label></div><button type="button" class="super-button std" ss-menu="select-menu"><label class="fa-caret-down-after" ng-bind="selected.value"></label></button><!-- <span class="control fa-caret-down-after"><input type="button" ng-value="selected.value"></span> --><div class="select-menu"><ul class="select-menu-list"><li ng-repeat="option in model.options" ng-click="go.updateSelect(option)" ng-bind="option.value" class="select-menu-list-item"></li></ul></div></div>'),e.put('components/super-select-list/select-list.html','<div class="super-select-list" ng-class="{\n\'view-mode\': !vm.editMode,\n\'edit-mode\': vm.editMode,\n\'ss-redacted\': vm.permissions.redacted\n}"><label ng-if="label" for="{{vm.inputId}}" class="main-label" ng-class="{\'{{labelWeight}}\':labelWeight, \'required\': required}" ng-bind="label"></label><div ng-if="!vm.permissions.redacted"><div ng-if="!vm.editMode" class="view-value"><span>{{go.getLabelByValue(model)}}&nbsp;</span></div><div ng-show="vm.permissions.edit && vm.editMode"><button id="{{vm.inputId}}" role="listbox" type="button" class="super-button {{vm.buttonClass}}" title="{{vm.buttonLabel}}" ng-disabled="isDisabled" ss-menu="select-menu" hide-on-select hide-on-blur role="listbox"><label ss-icon-after="angle-down" ng-bind="vm.buttonLabel"></label></button><div class="select-menu"><ul class="select-menu-list"><super-select-list-item value="vm.defaultOptionValue" label="vm.defaultOptionLabel" ng-if="includeDefaultOption === true"></super-select-list-item><ng-transclude></ng-transclude></ul></div></div></div><div ng-if="vm.permissions.redacted"><div ng-if="!vm.editMode" class="mask-display"><span ng-if="!vm.show">********</span> <span ng-if="vm.show" ng-bind="go.getLabelByValue(model)"></span></div><div ng-show="vm.permissions.edit && vm.editMode" class="mask-display"><button ng-if="!vm.show" type="button" class="super-button {{vm.buttonClass}}" ng-disabled="true"><label ss-icon-after="angle-down">********</label></button> <button ng-if="vm.show" type="button" class="super-button {{vm.buttonClass}}" ng-disabled="isDisabled" ss-menu="select-menu" hide-on-select hide-on-blur><label ss-icon-after="angle-down" ng-bind="go.getLabelByValue(model)"></label></button><div class="select-menu" ng-show="vm.show"><ul class="select-menu-list"><super-select-list-item value="vm.defaultOptionValue" label="vm.defaultOptionLabel" ng-if="includeDefaultOption === true"></super-select-list-item><ng-transclude></ng-transclude></ul></div></div><button type="button" class="super-button smp toggle" ng-click="go.toggleView()"><label ss-icon-before="{{vm.show === true ? \'eye-slash\': \'eye\'}}" ng-bind="vm.show === true ? \'Hide\': \'View\'" class="button-control"></label></button></div></div>'),e.put('components/super-select-list-item/select-list-item.html','<li role="option" class="super-select-list-item select-menu-list-item {{vm.disabledClass}}" ng-click="go.click($event)" ng-bind="label"></li>'),e.put('components/super-tab/tab.html','<li id="{{vm.tabId}}" class="super-tab" role="tab" aria-selected="{{vm.active}}" tabindex="{{vm.active ? 0 : -1}}" ng-show="vm.visible" ng-class="{active: vm.active}" ng-click="go.activate()"><a href="#" tabindex="-1"><p ss-bind-html="vm.label"></p><small ss-bind-html="vm.subLabel" ng-if="vm.subLabel"></small></a></li>'),e.put('components/super-tab-list/tab-list.html','<ul class="super-tab-list" role="tablist" ng-transclude></ul>'),e.put('components/super-tab-list-item/tab-list-item.html','<li class="super-tab-list-item" role="tab"><a ng-if="state" ui-state="state" ui-state-params="vm.params"><p ss-bind-html="vm.label"></p><small ss-bind-html="vm.subLabel" ng-if="vm.subLabel"></small> </a><a ng-if="url" href="{{url}}"><p ss-bind-html="vm.label"></p><small ss-bind-html="vm.subLabel" ng-if="vm.subLabel"></small></a></li>'),e.put('components/super-tab-menu/tab-menu.html','<li class="super-tab-menu" ng-class="{active: go.checkIfActive()}" ss-menu="tab-menu" ss-menu-on-open="go.handleMenuOpen()" hide-on-select hide-on-blur tabindex="{{go.checkIfActive() ? 0 : -1}}"><a href="#" tabindex="-1"><p><span ss-icon-after="angle-down">{{go.calcMenuLabel()}}</span></p></a><ul class="tab-menu" ss-a11y-vert-list><li class="select-menu-list-item tab-menu-{{tab.tabId}}" tabindex="-1" ng-class="{\'active-menu-item\': activeTabId === tab.tabId}" ng-repeat="tab in tabs" ng-bind="tab.label" ng-click="go.activateTab(tab.tabId)"></li></ul></li>'),e.put('components/super-tabset/tabset.html','<ul class="super-tabset" role="tablist"><super-tab-menu ng-if="vm.overflowTabs.length" tabs="vm.overflowTabs" active-tab-id="vm.activeTab"></super-tab-menu></ul>')}])})(),function(){var e=Function('return this')();e.__coverage__||(e.__coverage__={}),e=e.__coverage__,e['/opt/TeamCity-BuildAgent/work/442287d803f30233/src/components/\u2699\uFE0F/helpers.js']||(e['/opt/TeamCity-BuildAgent/work/442287d803f30233/src/components/\u2699\uFE0F/helpers.js']={path:'/opt/TeamCity-BuildAgent/work/442287d803f30233/src/components/\u2699\uFE0F/helpers.js',s:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0,68:0,69:0,70:0,71:0,72:0,73:0,74:0,75:0,76:0,77:0,78:0,79:0,80:0,81:0,82:0,83:0,84:0,85:0,86:0,87:0,88:0,89:0,90:0,91:0},b:{1:[0,0],2:[0,0],3:[0,0,0],4:[0,0],5:[0,0],6:[0,0,0,0,0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0]},f:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0},fnMap:{1:{name:'(anonymous_1)',line:1,loc:{start:{line:1,column:18},end:{line:1,column:31}}},2:{name:'(anonymous_2)',line:2,loc:{start:{line:2,column:11},end:{line:2,column:23}}},3:{name:'(anonymous_3)',line:3,loc:{start:{line:3,column:10},end:{line:3,column:23}}},4:{name:'(anonymous_4)',line:4,loc:{start:{line:4,column:12},end:{line:4,column:27}}},5:{name:'(anonymous_5)',line:9,loc:{start:{line:9,column:9},end:{line:9,column:22}}},6:{name:'(anonymous_6)',line:11,loc:{start:{line:11,column:24},end:{line:11,column:39}}},7:{name:'(anonymous_7)',line:12,loc:{start:{line:12,column:26},end:{line:12,column:41}}},8:{name:'(anonymous_8)',line:13,loc:{start:{line:13,column:25},end:{line:13,column:40}}},9:{name:'(anonymous_9)',line:14,loc:{start:{line:14,column:25},end:{line:14,column:40}}},10:{name:'(anonymous_10)',line:15,loc:{start:{line:15,column:6},end:{line:15,column:22}}},11:{name:'(anonymous_11)',line:18,loc:{start:{line:18,column:29},end:{line:18,column:49}}},12:{name:'(anonymous_12)',line:19,loc:{start:{line:19,column:27},end:{line:19,column:43}}},13:{name:'(anonymous_13)',line:21,loc:{start:{line:21,column:20},end:{line:21,column:43}}},14:{name:'(anonymous_14)',line:27,loc:{start:{line:27,column:23},end:{line:27,column:38}}},15:{name:'(anonymous_15)',line:33,loc:{start:{line:33,column:24},end:{line:33,column:40}}},16:{name:'(anonymous_16)',line:35,loc:{start:{line:35,column:19},end:{line:35,column:61}}},17:{name:'(anonymous_17)',line:55,loc:{start:{line:55,column:4},end:{line:55,column:24}}},18:{name:'(anonymous_18)',line:60,loc:{start:{line:60,column:28},end:{line:60,column:43}}},19:{name:'(anonymous_19)',line:69,loc:{start:{line:69,column:21},end:{line:69,column:48}}},20:{name:'(anonymous_20)',line:71,loc:{start:{line:71,column:21},end:{line:71,column:33}}},21:{name:'(anonymous_21)',line:72,loc:{start:{line:72,column:20},end:{line:72,column:36}}},22:{name:'(anonymous_22)',line:87,loc:{start:{line:87,column:22},end:{line:87,column:57}}},23:{name:'(anonymous_23)',line:96,loc:{start:{line:96,column:15},end:{line:96,column:31}}},24:{name:'(anonymous_24)',line:102,loc:{start:{line:102,column:18},end:{line:102,column:34}}},25:{name:'(anonymous_25)',line:111,loc:{start:{line:111,column:10},end:{line:111,column:23}}},26:{name:'(anonymous_26)',line:116,loc:{start:{line:116,column:10},end:{line:116,column:23}}},27:{name:'(anonymous_27)',line:127,loc:{start:{line:127,column:29},end:{line:127,column:48}}},28:{name:'(anonymous_28)',line:132,loc:{start:{line:132,column:33},end:{line:132,column:48}}},29:{name:'(anonymous_29)',line:133,loc:{start:{line:133,column:13},end:{line:133,column:25}}},30:{name:'(anonymous_30)',line:141,loc:{start:{line:141,column:32},end:{line:141,column:47}}},31:{name:'(anonymous_31)',line:142,loc:{start:{line:142,column:13},end:{line:142,column:25}}}},statementMap:{1:{start:{line:1,column:0},end:{line:1,column:87}},2:{start:{line:1,column:33},end:{line:1,column:84}},3:{start:{line:2,column:0},end:{line:2,column:26}},4:{start:{line:3,column:0},end:{line:3,column:86}},5:{start:{line:3,column:25},end:{line:3,column:83}},6:{start:{line:4,column:0},end:{line:9,column:49}},7:{start:{line:4,column:29},end:{line:9,column:46}},8:{start:{line:9,column:24},end:{line:9,column:42}},9:{start:{line:11,column:7},end:{line:11,column:72}},10:{start:{line:11,column:41},end:{line:11,column:69}},11:{start:{line:12,column:7},end:{line:12,column:82}},12:{start:{line:12,column:43},end:{line:12,column:79}},13:{start:{line:13,column:7},end:{line:13,column:82}},14:{start:{line:13,column:42},end:{line:13,column:79}},15:{start:{line:14,column:7},end:{line:16,column:14}},16:{start:{line:14,column:42},end:{line:16,column:11}},17:{start:{line:15,column:24},end:{line:15,column:54}},18:{start:{line:18,column:7},end:{line:18,column:114}},19:{start:{line:18,column:51},end:{line:18,column:111}},20:{start:{line:19,column:7},end:{line:19,column:108}},21:{start:{line:19,column:45},end:{line:19,column:105}},22:{start:{line:21,column:7},end:{line:25,column:42}},23:{start:{line:21,column:45},end:{line:25,column:39}},24:{start:{line:27,column:7},end:{line:31,column:5}},25:{start:{line:27,column:40},end:{line:31,column:2}},26:{start:{line:33,column:7},end:{line:33,column:76}},27:{start:{line:33,column:42},end:{line:33,column:73}},28:{start:{line:35,column:7},end:{line:47,column:2}},29:{start:{line:36,column:1},end:{line:36,column:52}},30:{start:{line:36,column:32},end:{line:36,column:52}},31:{start:{line:38,column:1},end:{line:46,column:2}},32:{start:{line:39,column:2},end:{line:39,column:29}},33:{start:{line:40,column:2},end:{line:42,column:3}},34:{start:{line:41,column:3},end:{line:41,column:23}},35:{start:{line:43,column:2},end:{line:43,column:13}},36:{start:{line:45,column:2},end:{line:45,column:22}},37:{start:{line:49,column:7},end:{line:58,column:2}},38:{start:{line:56,column:2},end:{line:56,column:43}},39:{start:{line:60,column:7},end:{line:82,column:2}},40:{start:{line:61,column:2},end:{line:61,column:14}},41:{start:{line:63,column:2},end:{line:67,column:3}},42:{start:{line:64,column:3},end:{line:64,column:39}},43:{start:{line:65,column:9},end:{line:67,column:3}},44:{start:{line:66,column:3},end:{line:66,column:59}},45:{start:{line:69,column:2},end:{line:81,column:5}},46:{start:{line:70,column:3},end:{line:70,column:28}},47:{start:{line:71,column:3},end:{line:71,column:54}},48:{start:{line:71,column:35},end:{line:71,column:51}},49:{start:{line:72,column:3},end:{line:78,column:5}},50:{start:{line:73,column:4},end:{line:77,column:5}},51:{start:{line:74,column:5},end:{line:74,column:18}},52:{start:{line:76,column:5},end:{line:76,column:14}},53:{start:{line:80,column:3},end:{line:80,column:18}},54:{start:{line:87,column:7},end:{line:121,column:2}},55:{start:{line:88,column:1},end:{line:88,column:42}},56:{start:{line:88,column:28},end:{line:88,column:42}},57:{start:{line:89,column:1},end:{line:89,column:44}},58:{start:{line:89,column:29},end:{line:89,column:44}},59:{start:{line:91,column:1},end:{line:91,column:55}},60:{start:{line:91,column:46},end:{line:91,column:53}},61:{start:{line:93,column:1},end:{line:93,column:42}},62:{start:{line:94,column:1},end:{line:94,column:44}},63:{start:{line:96,column:1},end:{line:101,column:3}},64:{start:{line:97,column:2},end:{line:100,column:3}},65:{start:{line:98,column:3},end:{line:98,column:53}},66:{start:{line:102,column:1},end:{line:107,column:3}},67:{start:{line:103,column:2},end:{line:106,column:3}},68:{start:{line:104,column:3},end:{line:104,column:44}},69:{start:{line:110,column:1},end:{line:112,column:20}},70:{start:{line:111,column:25},end:{line:111,column:59}},71:{start:{line:115,column:1},end:{line:118,column:23}},72:{start:{line:116,column:25},end:{line:116,column:58}},73:{start:{line:120,column:1},end:{line:120,column:11}},74:{start:{line:127,column:7},end:{line:149,column:2}},75:{start:{line:128,column:1},end:{line:128,column:27}},76:{start:{line:128,column:28},end:{line:128,column:69}},77:{start:{line:128,column:54},end:{line:128,column:69}},78:{start:{line:129,column:1},end:{line:129,column:25}},79:{start:{line:129,column:26},end:{line:129,column:65}},80:{start:{line:129,column:51},end:{line:129,column:65}},81:{start:{line:131,column:1},end:{line:131,column:21}},82:{start:{line:132,column:1},end:{line:139,column:4}},83:{start:{line:133,column:2},end:{line:138,column:8}},84:{start:{line:134,column:3},end:{line:137,column:4}},85:{start:{line:135,column:4},end:{line:135,column:16}},86:{start:{line:136,column:4},end:{line:136,column:20}},87:{start:{line:141,column:1},end:{line:148,column:4}},88:{start:{line:142,column:2},end:{line:147,column:8}},89:{start:{line:143,column:3},end:{line:146,column:4}},90:{start:{line:144,column:4},end:{line:144,column:17}},91:{start:{line:145,column:4},end:{line:145,column:19}}},branchMap:{1:{line:15,type:'cond-expr',locations:[{start:{line:15,column:42},end:{line:15,column:43}},{start:{line:15,column:46},end:{line:15,column:52}}]},2:{line:18,type:'binary-expr',locations:[{start:{line:18,column:58},end:{line:18,column:77}},{start:{line:18,column:81},end:{line:18,column:110}}]},3:{line:28,type:'binary-expr',locations:[{start:{line:28,column:1},end:{line:28,column:24}},{start:{line:29,column:1},end:{line:29,column:14}},{start:{line:30,column:1},end:{line:30,column:27}}]},4:{line:36,type:'if',locations:[{start:{line:36,column:1},end:{line:36,column:1}},{start:{line:36,column:1},end:{line:36,column:1}}]},5:{line:40,type:'if',locations:[{start:{line:40,column:2},end:{line:40,column:2}},{start:{line:40,column:2},end:{line:40,column:2}}]},6:{line:50,type:'binary-expr',locations:[{start:{line:50,column:1},end:{line:50,column:29}},{start:{line:51,column:4},end:{line:51,column:38}},{start:{line:52,column:4},end:{line:52,column:35}},{start:{line:53,column:4},end:{line:53,column:33}},{start:{line:54,column:4},end:{line:54,column:34}},{start:{line:55,column:4},end:{line:57,column:2}}]},7:{line:63,type:'if',locations:[{start:{line:63,column:2},end:{line:63,column:2}},{start:{line:63,column:2},end:{line:63,column:2}}]},8:{line:65,type:'if',locations:[{start:{line:65,column:9},end:{line:65,column:9}},{start:{line:65,column:9},end:{line:65,column:9}}]},9:{line:73,type:'if',locations:[{start:{line:73,column:4},end:{line:73,column:4}},{start:{line:73,column:4},end:{line:73,column:4}}]},10:{line:88,type:'if',locations:[{start:{line:88,column:1},end:{line:88,column:1}},{start:{line:88,column:1},end:{line:88,column:1}}]},11:{line:89,type:'if',locations:[{start:{line:89,column:1},end:{line:89,column:1}},{start:{line:89,column:1},end:{line:89,column:1}}]},12:{line:91,type:'if',locations:[{start:{line:91,column:1},end:{line:91,column:1}},{start:{line:91,column:1},end:{line:91,column:1}}]},13:{line:91,type:'binary-expr',locations:[{start:{line:91,column:5},end:{line:91,column:21}},{start:{line:91,column:25},end:{line:91,column:42}}]},14:{line:128,type:'if',locations:[{start:{line:128,column:28},end:{line:128,column:28}},{start:{line:128,column:28},end:{line:128,column:28}}]},15:{line:129,type:'if',locations:[{start:{line:129,column:26},end:{line:129,column:26}},{start:{line:129,column:26},end:{line:129,column:26}}]},16:{line:134,type:'if',locations:[{start:{line:134,column:3},end:{line:134,column:3}},{start:{line:134,column:3},end:{line:134,column:3}}]},17:{line:134,type:'binary-expr',locations:[{start:{line:134,column:7},end:{line:134,column:43}},{start:{line:134,column:47},end:{line:134,column:54}}]},18:{line:143,type:'if',locations:[{start:{line:143,column:3},end:{line:143,column:3}},{start:{line:143,column:3},end:{line:143,column:3}}]},19:{line:143,type:'binary-expr',locations:[{start:{line:143,column:7},end:{line:143,column:42}},{start:{line:143,column:46},end:{line:143,column:54}}]}}}),e=e['/opt/TeamCity-BuildAgent/work/442287d803f30233/src/components/\u2699\uFE0F/helpers.js'],e.s[1]++;var t=function(t){return e.f[1]++,e.s[2]++,t.toString().toLowerCase()===t.toString()};e.s[3]++,e.s[4]++;var n=function(t){return e.f[3]++,e.s[5]++,''+t.charAt(0).toUpperCase()+t.substr(1)};e.s[6]++;var s=function(t){return e.f[4]++,e.s[7]++,t.replace(/[\s_-]/g,'{!}').replace(/([a-z])([A-Z])/g,'$1{!}$2').toLowerCase().split('{!}').filter(function(t){return e.f[5]++,e.s[8]++,!!t.length})};e.s[9]++;var i=function(t){return e.f[6]++,e.s[10]++,s(t).join('-')};e.s[11]++,e.s[13]++,e.s[15]++;var o=function(t){return e.f[9]++,e.s[16]++,s(t).map(function(t,s){return e.f[10]++,e.s[17]++,0===s?(e.b[1][0]++,t):(e.b[1][1]++,n(t))}).join('')};e.s[18]++;var r=function(n,s){return e.f[11]++,e.s[19]++,(e.b[2][0]++,n.startsWith(s))&&(e.b[2][1]++,!t(n[s.length]))};e.s[20]++;var l=function(t){return e.f[12]++,e.s[21]++,'tmpl'+t[0].toUpperCase()+t.slice(1)};e.s[22]++,e.s[24]++,e.s[26]++,e.s[28]++,e.s[37]++;(e.b[6][0]++,window.requestAnimationFrame)||(e.b[6][1]++,window.webkitRequestAnimationFrame)||(e.b[6][2]++,window.mozRequestAnimationFrame)||(e.b[6][3]++,window.oRequestAnimationFrame)||(e.b[6][4]++,window.msRequestAnimationFrame)||(e.b[6][5]++,function(t){e.f[17]++,e.s[38]++,window.setTimeout(t,1e3/60)});e.s[39]++,e.s[54]++,e.s[74]++;(function(e){var t=e.components,n=angular.module('fluid-components',[]),s=function(e){return r(e,'onSync')},d=function(e){return r(e,'on')&&!s(e)};// Main Angular Module
// Filter Functions
Object.keys(t).forEach(function(e){var r=t[e].props||[],u=r.reduce(function(e,t){return e[t]='<',e[l(t)]='@',e},{}),c=function(e){return r.reduce(function(t,n){var s=void 0===e[n]// check if normal prop exists
?// prefer normal prop if available
e[l(n)]:e[n]// fallback to tmplVariation
;// only use value if there is one
return void 0!==s&&(t[n]=s),t},{})},p=t[e].style||{};n.component(o(e),{bindings:u,template:function(){return''},controller:['$element','$attrs','$scope',function(n,o,r){n.addClass('svelte-css-reset');var l=n[0],u=c(this),m=['onFocus','onBlur','onSyncBlur','onSyncFocus'],g=new t[e]({target:l,data:u}),h=function(e,t){return function(s){e.call(r,function(){return r.$parent.$eval(o[t],{$event:s})}),m.includes(t)||r.$emit('ss-validate-field-event',n,'update')}};// attach element styles to wrapping element
null!=p&&n.css(p),g.on('blur',function(){r.$emit('ss-validate-field-event',n,'blur')}),g.on('focus',function(){r.$emit('ss-validate-field-event',n,'focus')}),Object.keys(o).filter(d).forEach(function(e){g.on(i(e.slice(2)),h(r.$applyAsync,e))}),Object.keys(o).filter(s).forEach(function(e){g.on(i(e.slice(6)),h(r.$apply,e))}),this.$onChanges=function(e){var t=Object.keys(e).filter(function(t){return!e[t].isFirstChange()}).reduce(function(t,n){return t[n]=e[n].currentValue,t},{});g.set(c(t))},this.$onDestroy=function(){return g.destroy()}}]})})})(window.FLUID)}(),window.FLUID=window.FLUID||FLUID,angular.module('super-setup',[]),angular.module('super',['super-suit','super-setup','super-templates','ui.router','ui.router.title','flAuth']),angular.module('super-suit',['super-templates','ui.router','ui.router.title','ngAnimate','ngTouch','ngAria','ngMask','beauby.jsonApiDataStore','toastr','infinite-scroll','angular-inview','angularFileUpload','fluid-components','super-suit-config','super-suit-utilities','super-suit-helpers','super-suit-components','super-suit-decorators','super-suit-enums','super-suit-mutators','super-suit-services','super-suit-apis']),angular.module('super-suit-utilities',[]),angular.module('super-suit-config',[]),angular.module('super-suit-helpers',[]),angular.module('super-suit-components',[]),angular.module('super-suit-decorators',[]),angular.module('super-suit-enums',[]),angular.module('super-suit-mutators',[]),angular.module('super-suit-services',[]),angular.module('super-suit-apis',[]);var Decorator=function e(t){classCallCheck(this,e),t=t||{},this.restrict='A',this.scope=!1,Object.assign(this,t)};angular.module('super-suit-decorators').directive('ssA11yVertList',ssA11yVertList),ssBindHtml.$inject=['$compile'],angular.module('super-suit-decorators').directive('ssBindHtml',ssBindHtml),ssFocusBind.$inject=['$timeout','$parse','ssElemHlp'],angular.module('super-suit-decorators').directive('ssFocusBind',ssFocusBind),angular.module('super-suit-decorators').directive('ssHideWhenEmpty',ssHideWhenEmpty),angular.module('super-suit-decorators').directive('ssHref',ssHref);// #-----------------------------# //
// #---- Decorator (ss-icon) ----# //
var Icon=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,e),createClass(t,[{key:'link',// linking function for decorator directive
value:function(e,t,n){var s={};// we only need to attach observers once per element.
// but this directive could be fired multiple times.
t.data('iconsApplied')||(t.data('iconsApplied',!0),s.ssIcon=n.ssIcon&&'fa-'+n.ssIcon+'-before',s.ssIconBefore=n.ssIconBefore&&'fa-'+n.ssIconBefore+'-before',s.ssIconAfter=n.ssIconAfter&&'fa-'+n.ssIconAfter+'-after',Object.keys(s).forEach(function(e){null!=n[e]&&n.$observe(e,function(n){var i=e.toLowerCase().endsWith('after')?'after':'before',o=0<n.length?'fa-'+n+'-'+i:'';t.removeClass(s[e]),t.addClass(o),s[e]=o})}))}}]),t}(Decorator);// #-- END Decorator (ss-icon) --# //
// #-----------------------------# //
angular.module('super-suit-decorators').directive('ssIcon',function(){return new Icon}),angular.module('super-suit-decorators').directive('ssIconBefore',function(){return new Icon}),angular.module('super-suit-decorators').directive('ssIconAfter',function(){return new Icon}),ssMenu.$inject=['$document','ssElemHlp','rAF'],angular.module('super-suit-decorators').directive('ssMenu',ssMenu),ssModalView.$inject=['$document','$log','$animate'],angular.module('super-suit-decorators').directive('ssModalView',ssModalView),angular.module('super-suit-decorators').directive('ssMultiItemTruncation',ssMultiItemTruncation),ssPending.$inject=['$compile','$parse','ssElemHlp'],angular.module('super-suit-decorators').directive('ssPending',ssPending),ssPermitted.$inject=['$compile','ssPermissionsSvc'];// #----------------------------------# //
// #---- Decorator (ss-permitted) ----# //
var config={priority:1500,// run before everything
terminal:!0// prevent all other directives from running
};angular.module('super-suit-decorators').directive('ssPermitted',ssPermitted),ssPermittedRoute.$inject=['$compile','ssPermissionsSvc'];// #----------------------------------------# //
// #---- Decorator (ss-permitted-route) ----# //
var config$1={priority:1500,// run before everything
terminal:!0// prevent all other directives from running
};angular.module('super-suit-decorators').directive('ssPermittedRoute',ssPermittedRoute),angular.module('super-suit-decorators').directive('ssProfileCompleteness',ssProfileCompleteness),ssScrollList.$inject=['ssElemHlp'],angular.module('super-suit-decorators').directive('ssScrollList',ssScrollList),ssToggle.$inject=['$document'],angular.module('super-suit-decorators').directive('ssToggle',ssToggle),ssToolTip.$inject=['$document','$window','$timeout'];// #---------------------------------# //
// #---- Decorator (ss-tool-tip) ----# //
var tipElement=angular.element(document.getElementById('tool-tip-container')),tipWidth,tipHeight;angular.module('super-suit-decorators').directive('ssToolTip',ssToolTip);var fieldEventMap={input:{events:['focus','blur'],text:['keyup','change'],checkbox:['change'],radio:['change']},textarea:{events:['focus','blur','keyup','change']},select:{events:['focus','blur','change']},button:{events:['click']}};angular.module('super-suit-decorators').directive('input',formChangeEmitter('input')).directive('textarea',formChangeEmitter('textarea')).directive('button',formChangeEmitter('button')).directive('select',formChangeEmitter('select')),ssValidateForm.$inject=['$q','rAF','ssAsync'];var untestedClass='ss-validate-form-untested',failingClass='ss-validate-form-failing',passingClass='ss-validate-form-passing',asyncClass='ss-validate-form-async';angular.module('super-suit-decorators').directive('ssValidateForm',ssValidateForm),ssValidate.$inject=['$timeout','$q','rAF','ssValidateHlp','ssElemHlp'],angular.module('super-suit-decorators').directive('ssValidate',ssValidate),ssWindowAnchor.$inject=['$injector','$window','rAF','$timeout'];// #--------------------------------------# //
// #---- Decorator (ss-window-anchor) ----# //
var DEFAULT_ANCHOR_POINT=70,ANCHOR_HEIGHT_INCREMENT=10;angular.module('super-suit-decorators').directive('ssWindowAnchor',ssWindowAnchor),angular.module('super-suit-decorators').factory('ssWindowAnchorLogic',ssWindowAnchorLogic);var Component=function e(t,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};classCallCheck(this,e),this.restrict='E',this.replace=!0,this.scope=t,this.templateUrl='components/super-'+n+'/'+n+'.html',Object.assign(this,s)};superButton.$inject=['ssTempCache','ssElemHlp','$document'];// #----------------------------------# //
// #---- Component (super-button) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props=!1,config$2={templateUrl:void 0};angular.module('super-suit-components').directive('superButton',superButton),chartDoughnut.$inject=['Chart'];// #------------------------------------------# //
// #---- Component (super-chart-doughnut) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$1={data:'=',options:'=?',highlighted:'=?',width:'@',height:'@'},config$3={// transclude: true
};// directive definition object overrides
angular.module('super-suit-components').directive('superChartDoughnut',chartDoughnut);// #------------------------------------------------# //
// #---- Component (super-emp-profile-complete) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$2={id:'@?',employee:'=?',textPrefix:'@?'},config$4={};// directive definition object overrides
angular.module('super-suit-components').directive('superEmpProfileComplete',empProfileComplete),employeeSearch.$inject=['$document','ssAsync','ssEventSvc','ssDebounce','ssEmployeeApi','ssArrayHlp','ssActiveUserSvc','ssDateByOrgHlp','ssOrganizationSvc'];// #-------------------------------------------# //
// #---- Component (super-employee-search) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$3={model:'=',// Used to bind to the directive
statusTypes:'@?',// Filter the results to only the status types provided (see enumEmployeeStatus). Works with enum value or name.
queryLimit:'@?',// Limit the returned results to a number
limit:'@?',// Limit the number of selected employees
label:'@',// Label for the directive
usePill:'=',// Tells the search to use pills to show selected items.
placeholder:'@',// Attribute to push placeholder text down to the super input
removeById:'@',// Used to filter that id from the result set.
excludeEmployeesByIds:'=?',// Array of employee id's that will be excluded from the result set
includeActiveOnlyStatusFilter:'=?'// Frontline Central Specific - Turns on additional filter for employee status
},config$5={};// directive definition object overrides
angular.module('super-suit-components').directive('superEmployeeSearch',employeeSearch),fileUpload.$inject=['ssValidateHlp'];// #---------------------------------------# //
// #---- Component (super-file-upload) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$4={label:'@?',required:'=',model:'=',isDisabled:'=?',editMode:'=?',preventMultipleUploads:'=?',filteredFileTypes:'='},config$6={};// directive definition object overrides
angular.module('super-suit-components').directive('superFileUpload',fileUpload);// #--------------------------------------# //
// #---- Component (super-filter-bar) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$5={search:'=?',// search text value
typeLabel:'@?',typeLabelPlural:'@?',totalCount:'=?',selectedCount:'=?',searchDisabled:'=?',searchLabel:'@?'},config$7={transclude:{actions:'?actions',filters:'?filters',bulkActions:'?bulkActions'}};// directive definition object overrides
angular.module('super-suit-components').directive('superFilterBar',filterBar),grid.$inject=['ssDebounce'];// #--------------------------------# //
// #---- Component (super-grid) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$6={selectable:'=?',// should this grid have selectable rows?
onSelectAll:'&',// action to perform when the user chooses to "Select All"
onSelectNone:'&',// action to perform when the user chooses to "Select None"
sortable:'=?',// reference to the data array that backs this grid (so it can be sorted by the grid)
defaultSort:'@',// default sorting value
defaultSortDirection:'@',// sort direction ("asc" or "desc")
defaultRowHeight:'@',// height of each row in pixels (default 38)
onSortChange:'&',// action to perform when the user chooses to change the sorting
hoverable:'=?',disableSelectAll:'@'// don't show the "Select All/Select None" button
},config$8={transclude:{header:'gridHeader',rows:'gridRows'}};// directive definition object overrides
angular.module('super-suit-components').directive('superGrid',grid),gridCell.$inject=['rAF'];// #-------------------------------------# //
// #---- Component (super-grid-cell) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$7={},config$9={transclude:!0};// directive definition object overrides
angular.module('super-suit-components').directive('superGridCell',gridCell);// #---------------------------------------# //
// #---- Component (super-grid-column) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$8={width:'@',sortBy:'@',noLeftSeparator:'@?',info:'=',defaultSortDirection:'@'},config$a={transclude:!0};// directive definition object overrides
angular.module('super-suit-components').directive('superGridColumn',gridColumn),gridRow.$inject=['rAF'];// #------------------------------------# //
// #---- Component (super-grid-row) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$9={selectedValue:'=?',isDisabled:'=?'},config$b={transclude:!0};// directive definition object overrides
angular.module('super-suit-components').directive('superGridRow',gridRow),inputCheckbox.$inject=['ssStringHlp','ssCommonControlHlp'];// #------------------------------------------# //
// #---- Component (super-input-checkbox) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$a={model:'=',isDisabled:'=?',label:'@?',labelWeight:'@?',name:'@?',inputId:'@?',required:'=',selectAll:'=?',permissions:'=?',editMode:'=?'},config$c={};// directive definition object overrides
angular.module('super-suit-components').directive('superInputCheckbox',inputCheckbox),function(e){window.Pikaday=e(window.moment)}(function(t){/**
	  * feature detection and helper functions
	  */var n='function'==typeof t,s=!!window.addEventListener,e=window.document,i=window.setTimeout,o=function(t,n,e,i){s?t.addEventListener(n,e,!!i):t.attachEvent('on'+n,e)},r=function(t,n,e,i){s?t.removeEventListener(n,e,!!i):t.detachEvent('on'+n,e)},l=function(t,n,s){var i;e.createEvent?(i=e.createEvent('HTMLEvents'),i.initEvent(n,!0,!1),i=_(i,s),t.dispatchEvent(i)):e.createEventObject&&(i=e.createEventObject(),i=_(i,s),t.fireEvent('on'+n,i))},d=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,'')},u=function(e,t){return-1!==(' '+e.className+' ').indexOf(' '+t+' ')},c=function(e,t){u(e,t)||(e.className=''===e.className?t:e.className+' '+t)},p=function(e,t){e.className=d((' '+e.className+' ').replace(' '+t+' ',' '))},m=function(e){return /Array/.test(Object.prototype.toString.call(e))},g=function(e){return /Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},h=function(e){var t=e.getDay();return 0===t||6===t},f=function(e){// solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
return 0==e%4&&0!=e%100||0==e%400},y=function(e,t){return[31,f(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},v=function(e){g(e)&&e.setHours(0,0,0,0)},b=function(e,t){// weak date comparison (use setToStartOfDay(date) to ensure correct result)
return e.getTime()===t.getTime()},_=function e(t,n,s){var i,o;for(i in n)o=void 0!==t[i],o&&'object'===_typeof(n[i])&&null!==n[i]&&void 0===n[i].nodeName?g(n[i])?s&&(t[i]=new Date(n[i].getTime())):m(n[i])?s&&(t[i]=n[i].slice(0)):t[i]=e({},n[i],s):(s||!o)&&(t[i]=n[i]);return t},S=function(e){return 0>e.month&&(e.year-=_Mathceil(_Mathabs(e.month)/12),e.month+=12),11<e.month&&(e.year+=_Mathfloor(_Mathabs(e.month)/12),e.month-=12),e},/**
	  * defaults and localisation
	  */A={// bind the picker to a form field
field:null,// automatically show/hide the picker on `field` focus (default `true` if `field` is set)
bound:void 0,// data-attribute on the input field with an aria assistance
ariaLabel:'Use the arrow keys to pick a date',// position of the datepicker, relative to the field (default to bottom & left)
// ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
position:'bottom left',// automatically fit in the viewport even if it means repositioning from the position option
reposition:!0,// the default output format for `.toString()` and `field` value
format:'YYYY-MM-DD',// the initial date to view when first opened
defaultDate:null,// make the `defaultDate` the initial selected value
setDefaultDate:!1,// first day of week (0: Sunday, 1: Monday etc)
firstDay:0,// the default flag for moment's strict date parsing
formatStrict:!1,// the minimum/earliest date that can be selected
minDate:null,// the maximum/latest date that can be selected
maxDate:null,// number of years either side, or array of upper/lower range
yearRange:10,// show week numbers at head of row
showWeekNumber:!1,// used internally (don't config outside)
minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,// Additional text to append to the year in the calendar title
yearSuffix:'',// Render the month after year in the calendar title
showMonthAfterYear:!1,// Render days of the calendar grid that fall in the next or previous month
showDaysInNextAndPreviousMonths:!1,// how many months are visible
numberOfMonths:1,// when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
// only used for the first display or when a selected date is not visible
mainCalendar:'left',// Specify a DOM element to render the calendar in
container:void 0,// internationalization
i18n:{previousMonth:'Previous Month',nextMonth:'Next Month',months:['January','February','March','April','May','June','July','August','September','October','November','December'],weekdays:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],weekdaysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat']},// Theme Classname
theme:null,// callback function
onSelect:null,onOpen:null,onClose:null,onDraw:null},/**
	  * templating functions to abstract HTML rendering
	  */x=function(e,t,n){for(t+=e.firstDay;7<=t;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},T=function(e){var t=[],n='false';if(e.isEmpty)if(e.showDaysInNextAndPreviousMonths)t.push('is-outside-current-month');else return'<td class="is-empty"></td>';return e.isDisabled&&t.push('is-disabled'),e.isToday&&t.push('is-today'),e.isSelected&&(t.push('is-selected'),n='true'),e.isInRange&&t.push('is-inrange'),e.isStartRange&&t.push('is-startrange'),e.isEndRange&&t.push('is-endrange'),'<td data-day="'+e.day+'" class="'+t.join(' ')+'" aria-selected="'+n+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+'</button></td>'},k=function(e,t,n){// Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
var s=new Date(n,0,1),i=_Mathceil(((new Date(n,t,e)-s)/864e5+s.getDay()+1)/7);return'<td class="pika-week">'+i+'</td>'},w=function(e,t){return'<tr>'+(t?e.reverse():e).join('')+'</tr>'},P=function(e){return'<tbody>'+e.join('')+'</tbody>'},C=function(e){var t=[],n;for(e.showWeekNumber&&t.push('<th></th>'),n=0;7>n;n++)t.push('<th scope="col"><abbr title="'+x(e,n)+'">'+x(e,n,!0)+'</abbr></th>');return'<thead><tr>'+(e.isRTL?t.reverse():t).join('')+'</tr></thead>'},O=function(e,t,n,s,o,r){var l=e._o,d=n===l.minYear,u=n===l.maxYear,c='<div id="'+r+'" class="pika-title" role="heading" aria-live="assertive">',p=!0,g=!0,h,f,y,v,b;for(y=[],h=0;12>h;h++)y.push('<option value="'+(n===o?h-t:12+h-t)+'"'+(h===s?' selected="selected"':'')+(d&&h<l.minMonth||u&&h>l.maxMonth?'disabled="disabled"':'')+'>'+l.i18n.months[h]+'</option>');for(v='<div class="pika-label">'+l.i18n.months[s]+'<select class="pika-select pika-select-month" tabindex="-1">'+y.join('')+'</select></div>',m(l.yearRange)?(h=l.yearRange[0],f=l.yearRange[1]+1):(h=n-l.yearRange,f=1+n+l.yearRange),y=[];h<f&&h<=l.maxYear;h++)h>=l.minYear&&y.push('<option value="'+h+'"'+(h===n?' selected="selected"':'')+'>'+h+'</option>');return b='<div class="pika-label">'+n+l.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+y.join('')+'</select></div>',c+=l.showMonthAfterYear?b+v:v+b,d&&(0===s||l.minMonth>=s)&&(p=!1),u&&(11===s||l.maxMonth<=s)&&(g=!1),0===t&&(c+='<button class="pika-prev'+(p?'':' is-disabled')+'" type="button">'+l.i18n.previousMonth+'</button>'),t===e._o.numberOfMonths-1&&(c+='<button class="pika-next'+(g?'':' is-disabled')+'" type="button">'+l.i18n.nextMonth+'</button>'),c+='</div>'},I=function(e,t,n){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+n+'">'+C(e)+P(t)+'</table>'},/**
	  * Pikaday constructor
	  */E=function(r){var l=this,d=l.config(r);l._onMouseDown=function(t){if(l._v){t=t||window.event;var n=t.target||t.srcElement;if(n)if(u(n,'is-disabled')||(!u(n,'pika-button')||u(n,'is-empty')||u(n.parentNode,'is-disabled')?u(n,'pika-prev')?l.prevMonth():u(n,'pika-next')&&l.nextMonth():(l.setDate(new Date(n.getAttribute('data-pika-year'),n.getAttribute('data-pika-month'),n.getAttribute('data-pika-day'))),d.bound&&i(function(){l.hide(),d.field&&d.field.blur()},100))),!!u(n,'pika-select'))l._c=!0;else// if this is touch event prevent mouse events emulation
if(t.preventDefault)t.preventDefault();else return t.returnValue=!1,!1}},l._onChange=function(t){t=t||window.event;var n=t.target||t.srcElement;n&&(u(n,'pika-select-month')?l.gotoMonth(n.value):u(n,'pika-select-year')&&l.gotoYear(n.value))},l._onKeyChange=function(t){if(t=t||window.event,l.isVisible())switch(t.keyCode){case 13:case 27:d.field.blur();break;case 37:t.preventDefault(),l.adjustDate('subtract',1);break;case 38:l.adjustDate('subtract',7);break;case 39:l.adjustDate('add',1);break;case 40:l.adjustDate('add',7);}},l._onInputChange=function(s){var e;s.firedBy===l||(n?(e=t(d.field.value,d.format,d.formatStrict),e=e&&e.isValid()?e.toDate():null):e=new Date(Date.parse(d.field.value)),g(e)&&l.setDate(e),!l._v&&l.show())},l._onInputFocus=function(){l.show()},l._onInputClick=function(){l.show()},l._onInputBlur=function(){// IE allows pika div to gain focus; catch blur the input field
var t=e.activeElement;do if(u(t,'pika-single'))return;while(t=t.parentNode);l._c||(l._b=i(function(){l.hide()},50)),l._c=!1},l._onClick=function(t){t=t||window.event;var n=t.target||t.srcElement,i=n;if(n){s||!u(n,'pika-select')||n.onchange||(n.setAttribute('onchange','return;'),o(n,'change',l._onChange));do if(u(i,'pika-single')||i===d.trigger)return;while(i=i.parentNode);l._v&&n!==d.trigger&&i!==d.trigger&&l.hide()}},l.el=e.createElement('div'),l.el.className='pika-single'+(d.isRTL?' is-rtl':'')+(d.theme?' '+d.theme:''),o(l.el,'mousedown',l._onMouseDown,!0),o(l.el,'touchend',l._onMouseDown,!0),o(l.el,'change',l._onChange),o(e,'keydown',l._onKeyChange),d.field&&(d.container?d.container.appendChild(l.el):d.bound?e.body.appendChild(l.el):d.field.parentNode.insertBefore(l.el,d.field.nextSibling),o(d.field,'change',l._onInputChange),!d.defaultDate&&(d.defaultDate=n&&d.field.value?t(d.field.value,d.format).toDate():new Date(Date.parse(d.field.value)),d.setDefaultDate=!0));var c=d.defaultDate;g(c)?d.setDefaultDate?l.setDate(c,!0):l.gotoDate(c):l.gotoDate(new Date),d.bound?(this.hide(),l.el.className+=' is-bound',o(d.trigger,'click',l._onInputClick),o(d.trigger,'focus',l._onInputFocus),o(d.trigger,'blur',l._onInputBlur)):this.show()};/**
	  * public Pikaday API
	  */return E.prototype={/**
	   * configure functionality
	   */config:function(e){this._o||(this._o=_({},A,!0));var t=_(this._o,e,!0);t.isRTL=!!t.isRTL,t.field=t.field&&t.field.nodeName?t.field:null,t.theme='string'==typeof t.theme&&t.theme?t.theme:null,t.bound=void 0===t.bound?!!t.field:!!(t.field&&t.bound),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn='function'==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=4<n?4:n,g(t.minDate)||(t.minDate=!1),g(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&this.setMaxDate(t.maxDate),m(t.yearRange)){var s=new Date().getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||s,t.yearRange[1]=parseInt(t.yearRange[1],10)||s}else t.yearRange=_Mathabs(parseInt(t.yearRange,10))||A.yearRange,100<t.yearRange&&(t.yearRange=100);return t},/**
	   * return a formatted string of the current selection (using Moment.js if available)
	   */toString:function(e){return g(this._d)?n?t(this._d).format(e||this._o.format):this._d.toDateString():''},/**
	   * return a Moment.js object of the current selection (if available)
	   */getMoment:function(){return n?t(this._d):null},/**
	   * set the current selection from a Moment.js object (if available)
	   */setMoment:function(e,s){n&&t.isMoment(e)&&this.setDate(e.toDate(),s)},/**
	   * return a Date object of the current selection with fallback for the current date
	   */getDate:function(){return g(this._d)?new Date(this._d.getTime()):new Date},/**
	   * set the current selection
	   */setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value='',l(this._o.field,'change',{firedBy:this})),this.draw();if('string'==typeof e&&(e=new Date(Date.parse(e))),!!g(e)){var n=this._o.minDate,s=this._o.maxDate;g(n)&&e<n?e=n:g(s)&&e>s&&(e=s),this._d=new Date(e.getTime()),v(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),l(this._o.field,'change',{firedBy:this})),t||'function'!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},/**
	   * change view to a specific date
	   */gotoDate:function(e){var t=!0;if(g(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),s=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),i=e.getTime();// get the end of the month
s.setMonth(s.getMonth()+1),s.setDate(s.getDate()-1),t=i<n.getTime()||s.getTime()<i}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}],'right'===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(e,s){var i=this.getDate(),o=1e3*(60*(60*(24*parseInt(s)))),r;'add'===e?r=new Date(i.valueOf()+o):'subtract'==e&&(r=new Date(i.valueOf()-o)),n&&('add'===e?r=t(i).add(s,'days').toDate():'subtract'==e&&(r=t(i).subtract(s,'days').toDate())),this.setDate(r)},adjustCalendars:function(){this.calendars[0]=S(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=S({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},/**
	   * change view to a specific month (zero-index, e.g. 0: January)
	   */gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},/**
	   * change view to a specific full year (e.g. "2012")
	   */gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},/**
	   * change the minDate
	   */setMinDate:function(e){e instanceof Date?(v(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()):(this._o.minDate=A.minDate,this._o.minYear=A.minYear,this._o.minMonth=A.minMonth,this._o.startRange=A.startRange),this.draw()},/**
	   * change the maxDate
	   */setMaxDate:function(e){e instanceof Date?(v(e),this._o.maxDate=e,this._o.maxYear=e.getFullYear(),this._o.maxMonth=e.getMonth()):(this._o.maxDate=A.maxDate,this._o.maxYear=A.maxYear,this._o.maxMonth=A.maxMonth,this._o.endRange=A.endRange),this.draw()},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},/**
	   * refresh the HTML
	   */draw:function(e){if(this._v||e){var t=this._o,n=t.minYear,s=t.maxYear,o=t.minMonth,r=t.maxMonth,l='',d;this._y<=n&&(this._y=n,!isNaN(o)&&this._m<o&&(this._m=o)),this._y>=s&&(this._y=s,!isNaN(r)&&this._m>r&&(this._m=r)),d='pika-title-'+Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,2);for(var u=0;u<t.numberOfMonths;u++)l+='<div class="pika-lendar">'+O(this,u,this.calendars[u].year,this.calendars[u].month,this.calendars[0].year,d)+this.render(this.calendars[u].year,this.calendars[u].month,d)+'</div>';this.el.innerHTML=l,t.bound&&'hidden'!==t.field.type&&i(function(){t.trigger.focus()},1),'function'==typeof this._o.onDraw&&this._o.onDraw(this),this._o.field.setAttribute('aria-label',t.ariaLabel)}},adjustPosition:function(){var t,n,s,i,o,r,l,d,u,c;if(!this._o.container){if(this.el.style.position='absolute',t=this._o.trigger,n=t,s=this.el.offsetWidth,i=this.el.offsetHeight,o=window.innerWidth||e.documentElement.clientWidth,r=window.innerHeight||e.documentElement.clientHeight,l=window.pageYOffset||e.body.scrollTop||e.documentElement.scrollTop,'function'==typeof t.getBoundingClientRect)c=t.getBoundingClientRect(),d=c.left+window.pageXOffset,u=c.bottom+window.pageYOffset;else for(d=n.offsetLeft,u=n.offsetTop+n.offsetHeight;n=n.offsetParent;)d+=n.offsetLeft,u+=n.offsetTop;// default position is bottom & left
(this._o.reposition&&d+s>o||-1<this._o.position.indexOf('right')&&0<d-s+t.offsetWidth)&&(d=d-s+t.offsetWidth),(this._o.reposition&&u+i>r+l||-1<this._o.position.indexOf('top')&&0<u-i-t.offsetHeight)&&(u=u-i-t.offsetHeight),this.el.style.left=d+'px',this.el.style.top=u+'px'}},/**
	   * render HTML for a particular month
	   */render:function(e,t,n){var s=this._o,o=new Date,l=y(e,t),d=new Date(e,t,1).getDay(),u=[],c=[];v(o),0<s.firstDay&&(d-=s.firstDay,0>d&&(d+=7));for(var p=0===t?11:t-1,m=11===t?0:t+1,f=0===t?e-1:e,_=11===t?e+1:e,S=y(f,p),A=l+d,x=A;7<x;)x-=7;A+=7-x;for(var P=0,C=0;P<A;P++){var O=new Date(e,t,1+(P-d)),E=!!g(this._d)&&b(O,this._d),j=b(O,o),$=P<d||P>=l+d,D=1+(P-d),R=t,F=e,H=s.startRange&&b(s.startRange,O),M=s.endRange&&b(s.endRange,O),L=s.startRange&&s.endRange&&s.startRange<O&&O<s.endRange,N=s.minDate&&O<s.minDate||s.maxDate&&O>s.maxDate||s.disableWeekends&&h(O)||s.disableDayFn&&s.disableDayFn(O);$&&(P<d?(D=S+D,R=p,F=f):(D-=l,R=m,F=_));var B={day:D,month:R,year:F,isSelected:E,isToday:j,isDisabled:N,isEmpty:$,isStartRange:H,isEndRange:M,isInRange:L,showDaysInNextAndPreviousMonths:s.showDaysInNextAndPreviousMonths};c.push(T(B)),7==++C&&(s.showWeekNumber&&c.unshift(k(P-d,t,e)),u.push(w(c,s.isRTL)),c=[],C=0)}return I(s,u,n)},isVisible:function(){return this._v},show:function(){this.isVisible()||(p(this.el,'is-hidden'),this._v=!0,this.draw(),this._o.bound&&(o(e,'click',this._onClick),this.adjustPosition()),'function'==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var t=this._v;!1!==t&&(this._o.bound&&r(e,'click',this._onClick),this.el.style.position='static',this.el.style.left='auto',this.el.style.top='auto',c(this.el,'is-hidden'),this._v=!1,void 0!==t&&'function'==typeof this._o.onClose&&this._o.onClose.call(this))},/**
	   * GAME OVER
	   */destroy:function(){this.hide(),r(this.el,'mousedown',this._onMouseDown,!0),r(this.el,'touchend',this._onMouseDown,!0),r(this.el,'change',this._onChange),this._o.field&&(r(this._o.field,'change',this._onInputChange),this._o.bound&&(r(this._o.trigger,'click',this._onInputClick),r(this._o.trigger,'focus',this._onInputFocus),r(this._o.trigger,'blur',this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},E});// #--------------------------------------------# //
// #---- Component (super-input-datepicker) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$b={model:'=?',options:'=?',isDisabled:'=?',label:'@?',labelWeight:'@?',inputId:'@',name:'@',placeholder:'@?',dateFormat:'@',required:'=?',permissions:'=?',editMode:'=?'},config$d={},slashPattern=new RegExp(/(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}/,'i'),dotPattern=new RegExp(/(1[0-2]|0[1-9])\.(3[01]|[12][0-9]|0[1-9])\.[0-9]{4}/,'i'),dashPattern=new RegExp(/(1[0-2]|0[1-9])\-(3[01]|[12][0-9]|0[1-9])\-[0-9]{4}/,'i'),redactedRegex=/(^\*+$)/,defaultDateFormat='L',dateFormat;// directive definition object overrides
//MM/DD/YYYY
//MM.DD.YYYY
//MM-DD-YYYY
angular.module('super-suit-components').directive('superInputDatepicker',inputDatepicker),inputRadio.$inject=['ssStringHlp','ssCommonControlHlp'];// #---------------------------------------# //
// #---- Component (super-input-radio) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$c={model:'=',isDisabled:'=',label:'@?',labelWeight:'@?',name:'@?',inputId:'@?',value:'@',editMode:'=?',permissions:'=?'},config$e={};// directive definition object overrides
angular.module('super-suit-components').directive('superInputRadio',inputRadio),inputText.$inject=['ssTempCache','ssElemHlp','ssEventSvc','ssCommonControlHlp','ssMaskHlp','ssStringHlp'];// #--------------------------------------# //
// #---- Component (super-input-text) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$d={model:'=',label:'@',labelWeight:'@?',isDisabled:'=?',name:'@',inputId:'@',value:'=?',required:'=?',debounce:'@',type:'@?',size:'@?',placeholder:'@',readonly:'@?',defaultValue:'=?',permissions:'=?',editMode:'=?',hasFocus:'=?',mask:'@?',step:'@?'// used for type=number
},config$f={transclude:!0,templateUrl:void 0};// directive definition object overrides
angular.module('super-suit-components').directive('superInputText',inputText),inputTextarea.$inject=['$timeout','ssCommonControlHlp','$log'];// #------------------------------------------# //
// #---- Component (super-input-textarea) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$e={model:'=',isDisabled:'=?',label:'@',labelWeight:'@?',id:'@?',placeholder:'@',name:'@',required:'=',initialHeight:'@?',editMode:'=?'},config$g={},DEFAULT_HEIGHT=50,HEIGHT_THRESH=200;// directive definition object overrides
angular.module('super-suit-components').directive('superInputTextarea',inputTextarea),loader.$inject=['ssElemHlp'];// #----------------------------------# //
// #---- Component (super-loader) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$f={isLoading:'=',statusText:'=?',coverColor:'@',fill:'@'},config$h={};// directive definition object overrides
angular.module('super-suit-components').directive('superLoader',loader),multiFilterList.$inject=['ssCommonControlHlp'];// #---------------------------------------------# //
// #---- Component (super-multi-filter-list) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$g={selected:'=',label:'@?',labelWeight:'@?',display:'@',isDisabled:'=?',defaultSelectedText:'@',optionKeyPropName:'@',onSearch:'=?'// DEPRECATED: options list is constructed by the "multi-filter-list-item-added"
// event being called by the options that are initialized in the transclude
// options: '=',
// DEPRECATED: UX decided to use generic "Selected" verbiage instead of
// calling out singular or plural versions of the label
// objectPlural: '@?', // The plural form of the object represented in the dropdown: 'Job Types'
// objectSingular: '@?',
},config$i={transclude:!0};// directive definition object overrides
angular.module('super-suit-components').directive('superMultiFilterList',multiFilterList);// #---------------------------------------------------# //
// #---- Component (super-multi-filter-list-group) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$h={label:'@'},config$j={transclude:!0};// directive definition object overrides
angular.module('super-suit-components').directive('superMultiFilterListGroup',multiFilterListGroup);// #--------------------------------------------------# //
// #---- Component (super-multi-filter-list-item) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$i={option:'='},config$k={};// directive definition object overrides
angular.module('super-suit-components').directive('superMultiFilterListItem',multiFilterListItem),orgSearch.$inject=['$document','ssAsync','ssEventSvc','ssOrganizationApi'];// #--------------------------------------# //
// #---- Component (super-org-search) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$j={model:'=',// Used to bind to the directive
queryLimit:'@?',// Limit the returned results to a number
limit:'@?',// Limit the number of selected items
label:'@',// Label for the directive
usePill:'=',// Tells the search to use pills to show selected items.
placeholder:'@',// Attribute to push placeholder text down to the super input
removeById:'@',// Used to filter that id from the result set.
excludeByIds:'=?'// Array of id's that will be excluded from the result set
},config$l={};// directive definition object overrides
angular.module('super-suit-components').directive('superOrgSearch',orgSearch),popover.$inject=['$window','rAF','ssElemHlp'];// #-----------------------------------# //
// #---- Component (super-popover) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$k={link:'@?',help:'@?'},config$m={transclude:!0};// directive definition object overrides
angular.module('super-suit-components').directive('superPopover',popover);// #---------------------------------------------------# //
// #---- Component (super-search-results-employee) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$l={model:'='},config$n={};// directive definition object overrides
angular.module('super-suit-components').directive('superSearchResultsEmployee',searchResultsEmployee);// #----------------------------------# //
// #---- Component (super-select) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$m={model:'=',label:'@',selected:'=?',isDisabled:'=?'},config$o={// transclude: true
};// directive definition object overrides
angular.module('super-suit-components').directive('superSelect',select),selectList.$inject=['ssValidateHlp','rAF','ssCommonControlHlp'];// #---------------------------------------# //
// #---- Component (super-select-list) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$n={label:'@?',labelWeight:'@?',type:'@?',model:'=?',id:'@?',isDisabled:'=?',required:'=',defaultOptionLabel:'@?',defaultOptionValue:'=?',permissions:'=?',editMode:'=?',includeDefaultOption:'=?'},config$p={transclude:!0};// directive definition object overrides
angular.module('super-suit-components').directive('superSelectList',selectList);// #--------------------------------------------# //
// #---- Component (super-select-list-item) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$o={value:'=',label:'=',isDisabled:'=?',type:'@?'},config$q={};// directive definition object overrides
angular.module('super-suit-components').directive('superSelectListItem',selectListItem);// #-------------------------------# //
// #---- Component (super-tab) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$p={tabId:'@',label:'@',subLabel:'@?'},config$r={};// directive definition object overrides
angular.module('super-suit-components').directive('superTab',tab);// #-----------------------------------------# //
// #---- Component (super-tab-list) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$q={flat:'@'},config$s={transclude:!0};// directive definition object overrides
angular.module('super-suit-components').directive('superTabList',tabList);// #-----------------------------------------# //
// #---- Component (super-tab-list-item) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$r={state:'@',url:'@',label:'@',subLabel:'@?',params:'=?',paramsIgnoredForActive:'=?'},config$t={};// directive definition object overrides
angular.module('super-suit-components').directive('superTabListItem',tabListItem);// #------------------------------------# //
// #---- Component (super-tab-menu) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$s={tabs:'=',activeTabId:'='},config$u={// transclude: true
};// directive definition object overrides
angular.module('super-suit-components').directive('superTabMenu',tabMenu);// #--------------------------------# //
// #---- Component (super-tabset) ----# //
// props is the directive's isolate scope object
// http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope
var props$t={initActiveTab:'@?',// the `<super-tab>` tab-id value that will start out as active
onTabChange:'&',// expression that will be executed when the active tab changes. Use $tabId to inject the new active tab-id into the expression (example: `on-tab-change="go.makePanelActive($tabId)"`)
tabLimit:'@?',// the maximum number of tab spots that can be shown. Tabs that overflow this number will be combined with the last tab in a dropdown of options.
flat:'@?'// use the flat tab style (with underline)
},config$v={transclude:!0// `<super-tab>` components
};// directive definition object overrides
angular.module('super-suit-components').directive('superTabset',tabset),employeeDataHookup.$inject=['$q','ssEmployeeApi','ssServiceLogicHlp'],ssActiveUserSvc.$inject=['$q','$location','ssEventSvc','ssDeprecated','ssServiceLogicHlp'];/* globals sidekick */var _sidekick=sidekick,store=_sidekick.store,usingEmployeeMsvc=['EC'],currentEmployeeDefer;// list of products that are using common employee
angular.module('super-suit-services').factory('ssActiveUserSvc',ssActiveUserSvc),angular.module('super-suit').run(employeeDataHookup),ssApiSvc.$inject=['$q','$http','$log','ssAuthSvc','JsonApiDataStore','ssJsonApi','ssActiveUserSvc','ssToastHlp','ssObjectHlp','ssApiResponseHlp'],angular.module('super-suit-services').factory('ssApiSvc',ssApiSvc);var productIdConfigMap={ec:'employee-center',absmgmt:'absence-management',platformtools:'platform-tools'};ssAppConfigSvc.$inject=['$http','$q','ssEventSvc','ssUiModuleHlp'];var configCache={},config$w={},loadedConfigSet;angular.module('super-suit-services').factory('ssAppConfigSvc',ssAppConfigSvc),ssAuthTrigger.$inject=['$q','$location','flAuthService','ssActiveUserSvc'],ssAuthConfig.$inject=['flAuthServiceProvider'],ssAuthSvc.$inject=['$q','$location','buildConfig','ssActiveUserSvc'];var mock={profile:{}},authReadyDefer;angular.module('super-suit-services').factory('ssAuthSvc',ssAuthSvc),angular.module('super').config(ssAuthConfig).run(ssAuthTrigger),ssDepartmentSvc.$inject=['ssAsync','ssDepartmentsApi','ssActiveUserSvc','ssServiceLogicHlp','ssConfigurationHlp','ssStorage'],angular.module('super-suit-services').factory('ssDepartmentSvc',ssDepartmentSvc),ssEventSvc.$inject=['$log','$rootScope'];// the global event bus
var eventBus={};angular.module('super-suit-services').factory('ssEventSvc',ssEventSvc),ssFeatureSvc.$inject=['$window','$rootScope','$http','$q','$log','buildConfig','ssOrganizationSvc'];///////
// ready is out here so that it exists outside of the context of any
// given angular application (super or fl-app)
//
var ready;angular.module('super-suit-services').factory('ssFeatureSvc',ssFeatureSvc),ssFlagCCSvc.$inject=['$log','$q'],angular.module('super-suit-services').factory('ssFlagCCSvc',ssFlagCCSvc),ssFlagSvc.$inject=['$log','$q'],angular.module('super-suit-services').factory('ssFlagSvc',ssFlagSvc),ssJobTypeSvc.$inject=['$log','$q','ssAsync','ssJobTypesApi','ssActiveUserSvc','ssListSvc','ssServiceLogicHlp','ssObjectHlp','ssConfigurationHlp','ssStorage','ssFlagCCSvc'],angular.module('super-suit-services').factory('ssJobTypeSvc',ssJobTypeSvc),ssListSvc.$inject=['$log','$filter','ssAsync','ssStorage','ssListApi','ssActiveUserSvc','ssEventSvc'],angular.module('super-suit-services').factory('ssListSvc',ssListSvc),ssLocationSvc.$inject=['ssAsync','ssStorage','ssLocationsApi','ssActiveUserSvc','ssServiceLogicHlp','ssConfigurationHlp'],angular.module('super-suit-services').factory('ssLocationSvc',ssLocationSvc);/*@ngInject*/var modalConfig={default:{title:'Confirmation',content:'Are you sure you want to do this?',primaryText:'OK',secondaryText:'Cancel',isDestructive:!1,messageSize:'small',overrideClass:'',alwaysOnTop:!0},defaultDestructive:{title:'Title Text',content:'Sample Content',primaryText:'Confirm',secondaryText:'Cancel',isDestructive:!0,messageSize:'small',overrideClass:'',alwaysOnTop:!0},editTemplate:{title:'Edit Form Template',content:'Editing will deactivate and disable it from being sent until it has been reactivated. Prior recipients will not receive changes made.',primaryText:'Edit Template',secondaryText:'Cancel',isDestructive:!1,messageSize:'medium',overrideClass:'',alwaysOnTop:!0},deactivateTemplate:{title:'Deactivate Template',content:'Deactivating this template will disable it from being sent.',primaryText:'Deactivate',secondaryText:'Cancel',isDestructive:!0,messageSize:'medium',overrideClass:'',alwaysOnTop:!0}};angular.module('super-suit').value('ssModalSvcDialogConfig',modalConfig),ssModalSvc.$inject=['$animate','$compile','$rootScope','$q'],angular.module('super-suit-services').factory('ssModalSvc',ssModalSvc),ssNotificationsSvc.$inject=['$rootScope','$q','$timeout','ssAppConfigSvc','ssEventSvc','ssAsync','ssNotificationsApi','ssActiveUserSvc','ssToastHlp'];var notifications,stats,userKey,notificationCollection,notificationsDefer,statsDefer,scopes;angular.module('super-suit-services').factory('ssNotificationsSvc',ssNotificationsSvc),ssOrganizationSvc.$inject=['ssAsync','ssObjectHlp','ssActiveUserSvc','ssOrganizationApi'],angular.module('super-suit-services').factory('ssOrganizationSvc',ssOrganizationSvc),ssOrgDataSvc.$inject=['ssActiveUserSvc','ssDeprecated'],angular.module('super-suit-services').factory('ssOrgDataSvc',ssOrgDataSvc),routeDataRegistration.$inject=['$window','$urlMatcherFactory','ssAsync','buildConfig','ssUiModuleHlp'],ssPermissionsSvc.$inject=['$window','$rootScope','$q','$http','$log','ssAsync','buildConfig','ssObjectHlp','ssActiveUserSvc','ssStringHlp','ssSecurityGroupsApi','ssFeatureSvc'];///////
// ready is out here so that it exists outside of the context of any
// given angular application (super or fl-app)
//
var actionData=[],persistantBundles=[],routeData=[],ready$1;angular.module('super-suit-services').factory('ssPermissionsSvc',ssPermissionsSvc),angular.module('super').run(routeDataRegistration),ssProductAccessSvc.$inject=['$log','ssActiveUserSvc','ssDeprecated'],angular.module('super-suit-services').factory('ssProductAccessSvc',ssProductAccessSvc),ssProfileCompletenessSvc.$inject=['$q','enumUsageType','ssEffectiveDateHlp'],angular.module('super-suit-services').factory('ssProfileCompletenessSvc',ssProfileCompletenessSvc),ssSaveInterrupterSvc.$inject=['$rootScope','$state','$window','$location','ssModalSvc','ssEventSvc'];var models=[],firstLoad=!0;angular.module('super-suit-services').factory('ssSaveInterrupterSvc',ssSaveInterrupterSvc),departmentFilter.$inject=['ssDepartmentSvc'],angular.module('super-suit').filter('department',departmentFilter),enumByNameFilter.$inject=['ssEnum'],enumByValueFilter.$inject=['ssEnum'],angular.module('super-suit').filter('enumByValue',enumByValueFilter),angular.module('super-suit').filter('enumByName',enumByNameFilter),jobTypeFilter.$inject=['ssJobTypeSvc'],angular.module('super-suit').filter('jobType',jobTypeFilter),locationFilter.$inject=['ssLocationSvc'],angular.module('super-suit').filter('location',locationFilter),angular.module('super-suit').filter('fromNow',fromNowFilter),buildConfig.$inject=['$window','ssObjectHlp'],angular.module('super-suit-utilities').factory('buildConfig',buildConfig),rAF.$inject=['$q','$rootScope','$log'];var _rAF=rafFunc();angular.module('super-suit-utilities').factory('rAF',rAF),ssAsyncFactory.$inject=['$q','$log'],angular.module('super-suit-utilities').factory('ssAsync',ssAsyncFactory),ssDebounce.$inject=['$timeout'],angular.module('super-suit-utilities').factory('ssDebounce',ssDebounce),ssDeprecated.$inject=['$log'],angular.module('super-suit-utilities').factory('ssDeprecated',ssDeprecated),ssEnum.$inject=['enumEthnicity','enumGender','enumLicenseTypes','enumMaritalStatus','enumPhoneTypes','enumRace','enumRelationshipTypes','enumSalutation','enumStates','enumSuffix','enumUsageType','enumStepAction','enumStepEventType','enumStepEventAction','enumStepParticipantType','enumEmployeeStatus','enumFormStatus','enumFormTemplateStatus','enumFieldWidths','enumFieldHeights','enumFlInviteStatus','enumSecurityGroupScope','enumLocationCategories','enumJobTypeCategories','enumPropertyAction','enumPersonnelCategory','enumMedicalCategory','enumSalaryType','enumRetirementSystem','enumEmergencyContactRelationship','enumFormPacketCategory','enumPayRateFrequency','enumFormAdministratorType','enumAddressType','enumHighchartsTypes','enumEmailType','enumSignatureDisplayMethod'],angular.module('super-suit-utilities').factory('ssEnum',ssEnum),ssJsonApi.$inject=['moment','$log','$http','$rootScope','ssAsync','JsonApiDataStore','ssEventSvc','ssObjectHlp','ssDateHlp','ssMutator','ssToastHlp','enumPropertyAction','ssApiResponseHlp'],angular.module('super-suit-utilities').factory('ssJsonApi',ssJsonApi),ssMutator.$inject=['mutatorPhoneNumbers','mutatorEmployees','mutatorPositions','mutatorOrganizations','mutatorFormTemplates','mutatorIFormLibraryObjects','mutatorMessages','mutatorLocations','mutatorFormInstances','mutatorSecurityScopes','mutatorSecurityGroups','mutatorPaySchedules','mutatorAddresses','mutatorSupervisors','mutatorJobTypeDetails'],angular.module('super-suit-utilities').factory('ssMutator',ssMutator),ssStorage.$inject=['$log','ssJsonApi','ssActiveUserSvc'];// do an initial spin of localStorage and sessionStorage to load
// their values into the localCache object for fast access
for(var localCache={},cacheTypes={},keyPrefix='SUPER',i=Modernizr.localstorage?window.localStorage.length:0,k;i--;)(k=window.localStorage.key(i),!!k.startsWith('SUPER_'))&&(cacheTypes[k]='localStorage',localCache[k]=window.localStorage.getItem(k));// spin over sessionStorage
for(var _i=Modernizr.sessionstorage?window.sessionStorage.length:0,_k;_i--;)(_k=window.sessionStorage.key(_i),!!_k.startsWith('SUPER_'))&&(cacheTypes[_k]='sessionStorage',localCache[_k]=window.sessionStorage.getItem(_k));angular.module('super-suit-utilities').factory('ssStorage',ssStorage),fillTempCache.$inject=['$templateCache'],ssTempCache.$inject=['$templateCache'];var tempCache;angular.module('super-suit-utilities').factory('ssTempCache',ssTempCache),angular.module('super').run(fillTempCache),ssApiResponseHlp.$inject=['ssObjectHlp','ssToastHlp'],angular.module('super-suit-helpers').factory('ssApiResponseHlp',ssApiResponseHlp);/** Detect free variable `global` from Node.js. */var freeGlobal='object'==typeof global&&global&&global.Object===Object&&global,freeSelf='object'==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function('return this')(),Symbol$1=root.Symbol,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=Symbol$1?Symbol$1.toStringTag:void 0,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString,nullTag='[object Null]',undefinedTag='[object Undefined]',symToStringTag$1=Symbol$1?Symbol$1.toStringTag:void 0,asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]',coreJsData=root['__core-js_shared__'],maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return e?'Symbol(src)_1.'+e:''}(),funcProto=Function.prototype,funcToString=funcProto.toString,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$2=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$1=objectProto$2.hasOwnProperty,reIsNative=RegExp('^'+funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$'),defineProperty$1=function(){try{var e=getNative(Object,'defineProperty');return e({},'',{}),e}catch(t){}}(),baseFor=createBaseFor(),argsTag='[object Arguments]',objectProto$3=Object.prototype,hasOwnProperty$2=objectProto$3.hasOwnProperty,propertyIsEnumerable=objectProto$3.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty$2.call(e,'callee')&&!propertyIsEnumerable.call(e,'callee')},isArray=Array.isArray,freeExports='object'==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&'object'==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer$1=moduleExports?root.Buffer:void 0,nativeIsBuffer=Buffer$1?Buffer$1.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse,MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/,MAX_SAFE_INTEGER$1=9007199254740991,argsTag$1='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag$1='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]',arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]',typedArrayTags={};/** Detect free variable `self`. *//** Used as a reference to the global object. *//** Built-in value references. *//** Used for built-in method references. *//** Used to check objects for own properties. *//**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 *//** Built-in value references. *//**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 *//** Built-in value references. *//** Used to detect methods masquerading as native. *//** Used to resolve the decompiled source of functions. *//** Used to detect host constructors (Safari). *//** Used for built-in method references. *//** Used to resolve the decompiled source of functions. *//** Used to check objects for own properties. *//** Used to detect if a method is native. *//** Used to check objects for own properties. *//** Built-in value references. *//**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 *//**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 *//** Detect free variable `module`. *//** Detect the popular CommonJS extension `module.exports`. *//** Built-in value references. *//* Built-in method references for those with the same name as other `lodash` methods. *//**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 *//** Used as references for various `Number` constants. *//** Used to detect unsigned integer values. *//** Used to identify `toStringTag` values of typed arrays. */typedArrayTags['[object Float32Array]']=typedArrayTags['[object Float64Array]']=typedArrayTags['[object Int8Array]']=typedArrayTags['[object Int16Array]']=typedArrayTags['[object Int32Array]']=typedArrayTags['[object Uint8Array]']=typedArrayTags['[object Uint8ClampedArray]']=typedArrayTags['[object Uint16Array]']=typedArrayTags['[object Uint32Array]']=!0,typedArrayTags['[object Arguments]']=typedArrayTags['[object Array]']=typedArrayTags['[object ArrayBuffer]']=typedArrayTags['[object Boolean]']=typedArrayTags['[object DataView]']=typedArrayTags['[object Date]']=typedArrayTags['[object Error]']=typedArrayTags['[object Function]']=typedArrayTags['[object Map]']=typedArrayTags['[object Number]']=typedArrayTags['[object Object]']=typedArrayTags['[object RegExp]']=typedArrayTags['[object Set]']=typedArrayTags['[object String]']=typedArrayTags['[object WeakMap]']=!1;var freeExports$1='object'==typeof exports&&exports&&!exports.nodeType&&exports,freeModule$1=freeExports$1&&'object'==typeof module&&module&&!module.nodeType&&module,moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1,freeProcess=moduleExports$1&&freeGlobal.process,nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
var e=freeModule$1&&freeModule$1.require&&freeModule$1.require('util').types;return e?e:freeProcess&&freeProcess.binding&&freeProcess.binding('util');// Legacy `process.binding('util')` for Node.js < 10.
}catch(t){}}(),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray,objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty,objectProto$5=Object.prototype,nativeKeys=overArg(Object.keys,Object),objectProto$6=Object.prototype,hasOwnProperty$4=objectProto$6.hasOwnProperty,baseEach=createBaseEach(baseForOwn),arrayProto=Array.prototype,splice=arrayProto.splice;/** Detect free variable `module`. *//** Detect the popular CommonJS extension `module.exports`. *//** Detect free variable `process` from Node.js. *//** Used to access faster Node.js helpers. *//* Node.js helper references. *//**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Built-in value references. */ListCache.prototype.clear=listCacheClear,ListCache.prototype['delete']=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet;var Map$1=getNative(root,'Map'),nativeCreate=getNative(Object,'create'),HASH_UNDEFINED='__lodash_hash_undefined__',objectProto$7=Object.prototype,hasOwnProperty$5=objectProto$7.hasOwnProperty,objectProto$8=Object.prototype,hasOwnProperty$6=objectProto$8.hasOwnProperty,HASH_UNDEFINED$1='__lodash_hash_undefined__';/* Built-in method references that are verified to be native. *//** Used for built-in method references. *//** Used to check objects for own properties. *//** Used to check objects for own properties. */Hash.prototype.clear=hashClear,Hash.prototype['delete']=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype['delete']=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet;/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;Stack.prototype.clear=stackClear,Stack.prototype['delete']=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$2='__lodash_hash_undefined__';SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas;var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2,Uint8Array=root.Uint8Array,COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2,boolTag$1='[object Boolean]',dateTag$1='[object Date]',errorTag$1='[object Error]',mapTag$1='[object Map]',numberTag$1='[object Number]',regexpTag$1='[object RegExp]',setTag$1='[object Set]',stringTag$1='[object String]',symbolTag='[object Symbol]',arrayBufferTag$1='[object ArrayBuffer]',dataViewTag$1='[object DataView]',symbolProto=Symbol$1?Symbol$1.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0,objectProto$9=Object.prototype,propertyIsEnumerable$1=objectProto$9.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(e){return null==e?[]:(e=Object(e),arrayFilter(nativeGetSymbols(e),function(t){return propertyIsEnumerable$1.call(e,t)}))}:stubArray,COMPARE_PARTIAL_FLAG$2=1,objectProto$a=Object.prototype,hasOwnProperty$7=objectProto$a.hasOwnProperty,DataView=getNative(root,'DataView'),Promise$1=getNative(root,'Promise'),Set$1=getNative(root,'Set'),WeakMap$1=getNative(root,'WeakMap'),mapTag$2='[object Map]',objectTag$1='[object Object]',promiseTag='[object Promise]',setTag$2='[object Set]',weakMapTag$1='[object WeakMap]',dataViewTag$2='[object DataView]',dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map$1),promiseCtorString=toSource(Promise$1),setCtorString=toSource(Set$1),weakMapCtorString=toSource(WeakMap$1),getTag=baseGetTag;/** `Object#toString` result references. *//** Used to convert symbols to primitives and strings. *//** Built-in value references. *//* Built-in method references for those with the same name as other `lodash` methods. *//**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 *//** Used for built-in method references. *//** Used to check objects for own properties. *//* Built-in method references that are verified to be native. *//* Built-in method references that are verified to be native. *//* Built-in method references that are verified to be native. *//** `Object#toString` result references. *//** Used to detect maps, sets, and weakmaps. *//**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
(DataView&&getTag(new DataView(new ArrayBuffer(1)))!='[object DataView]'||Map$1&&getTag(new Map$1)!='[object Map]'||Promise$1&&getTag(Promise$1.resolve())!='[object Promise]'||Set$1&&getTag(new Set$1)!='[object Set]'||WeakMap$1&&getTag(new WeakMap$1)!='[object WeakMap]')&&(getTag=function(e){var t=baseGetTag(e),n=t=='[object Object]'?e.constructor:void 0,s=n?toSource(n):'';if(s)switch(s){case dataViewCtorString:return'[object DataView]';case mapCtorString:return'[object Map]';case promiseCtorString:return'[object Promise]';case setCtorString:return'[object Set]';case weakMapCtorString:return'[object WeakMap]';}return t});var getTag$1=getTag,COMPARE_PARTIAL_FLAG$3=1,argsTag$2='[object Arguments]',arrayTag$1='[object Array]',objectTag$2='[object Object]',objectProto$b=Object.prototype,hasOwnProperty$8=objectProto$b.hasOwnProperty,COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2,symbolTag$1='[object Symbol]',reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,FUNC_ERROR_TEXT='Expected a function';/** Used to compose bitmasks for value comparisons. *//** `Object#toString` result references. *//** Used for built-in method references. *//** Used to check objects for own properties. */memoize.Cache=MapCache;/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=memoizeCapped(function(e){var t=[];return 46===e.charCodeAt(0)/* . */&&t.push(''),e.replace(rePropName,function(e,n,s,i){t.push(s?i.replace(reEscapeChar,'$1'):n||e)}),t}),INFINITY=1/0,symbolProto$1=Symbol$1?Symbol$1.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0,INFINITY$1=1/0,COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2,objectProto$c=Object.prototype,hasOwnProperty$9=objectProto$c.hasOwnProperty,groupBy=createAggregator(function(e,t,n){hasOwnProperty$9.call(e,n)?e[n].push(t):baseAssignValue(e,n,[t])}),objectProto$d=Object.prototype,hasOwnProperty$a=objectProto$d.hasOwnProperty,objectProto$e=Object.prototype,hasOwnProperty$b=objectProto$e.hasOwnProperty,freeExports$2='object'==typeof exports&&exports&&!exports.nodeType&&exports,freeModule$2=freeExports$2&&'object'==typeof module&&module&&!module.nodeType&&module,moduleExports$2=freeModule$2&&freeModule$2.exports===freeExports$2,Buffer$2=moduleExports$2?root.Buffer:void 0,allocUnsafe=Buffer$2?Buffer$2.allocUnsafe:void 0,getPrototype=overArg(Object.getPrototypeOf,Object),nativeGetSymbols$1=Object.getOwnPropertySymbols,getSymbolsIn=nativeGetSymbols$1?function(e){for(var t=[];e;)arrayPush(t,getSymbols(e)),e=getPrototype(e);return t}:stubArray,objectProto$f=Object.prototype,hasOwnProperty$c=objectProto$f.hasOwnProperty,reFlags=/\w*$/,symbolProto$2=Symbol$1?Symbol$1.prototype:void 0,symbolValueOf$1=symbolProto$2?symbolProto$2.valueOf:void 0,boolTag$2='[object Boolean]',dateTag$2='[object Date]',mapTag$3='[object Map]',numberTag$2='[object Number]',regexpTag$2='[object RegExp]',setTag$3='[object Set]',stringTag$2='[object String]',symbolTag$2='[object Symbol]',arrayBufferTag$2='[object ArrayBuffer]',dataViewTag$3='[object DataView]',float32Tag$1='[object Float32Array]',float64Tag$1='[object Float64Array]',int8Tag$1='[object Int8Array]',int16Tag$1='[object Int16Array]',int32Tag$1='[object Int32Array]',uint8Tag$1='[object Uint8Array]',uint8ClampedTag$1='[object Uint8ClampedArray]',uint16Tag$1='[object Uint16Array]',uint32Tag$1='[object Uint32Array]',objectCreate=Object.create,baseCreate=function(){function e(){}return function(t){if(!isObject(t))return{};if(objectCreate)return objectCreate(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),mapTag$4='[object Map]',nodeIsMap=nodeUtil&&nodeUtil.isMap,isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap,setTag$4='[object Set]',nodeIsSet=nodeUtil&&nodeUtil.isSet,isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet,CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4,argsTag$3='[object Arguments]',arrayTag$2='[object Array]',boolTag$3='[object Boolean]',dateTag$3='[object Date]',errorTag$2='[object Error]',funcTag$2='[object Function]',genTag$1='[object GeneratorFunction]',mapTag$5='[object Map]',numberTag$3='[object Number]',objectTag$3='[object Object]',regexpTag$3='[object RegExp]',setTag$5='[object Set]',stringTag$3='[object String]',symbolTag$3='[object Symbol]',weakMapTag$2='[object WeakMap]',arrayBufferTag$3='[object ArrayBuffer]',dataViewTag$4='[object DataView]',float32Tag$2='[object Float32Array]',float64Tag$2='[object Float64Array]',int8Tag$2='[object Int8Array]',int16Tag$2='[object Int16Array]',int32Tag$2='[object Int32Array]',uint8Tag$2='[object Uint8Array]',uint8ClampedTag$2='[object Uint8ClampedArray]',uint16Tag$2='[object Uint16Array]',uint32Tag$2='[object Uint32Array]',cloneableTags={};/** Used to match backslashes in property paths. *//**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 *//** Used to convert symbols to primitives and strings. *//** Used to check objects for own properties. *//**
	 * Creates an object composed of keys generated from the results of running
	 * each element of `collection` thru `iteratee`. The order of grouped values
	 * is determined by the order they occur in `collection`. The corresponding
	 * value of each key is an array of elements responsible for generating the
	 * key. The iteratee is invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	 * @returns {Object} Returns the composed aggregate object.
	 * @example
	 *
	 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	 * // => { '4': [4.2], '6': [6.1, 6.3] }
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.groupBy(['one', 'two', 'three'], 'length');
	 * // => { '3': ['one', 'two'], '5': ['three'] }
	 *//** Used to check objects for own properties. *//** Used to check objects for own properties. *//** Detect free variable `module`. *//** Detect the popular CommonJS extension `module.exports`. *//** Built-in value references. *//* Built-in method references for those with the same name as other `lodash` methods. *//**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 *//** Used to check objects for own properties. *//**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 *//**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 *//** `Object#toString` result references. *//**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 *//** Used to compose bitmasks for cloning. *//** `Object#toString` result references. *//** Used to identify `toStringTag` values supported by `_.clone`. */cloneableTags['[object Arguments]']=cloneableTags['[object Array]']=cloneableTags['[object ArrayBuffer]']=cloneableTags['[object DataView]']=cloneableTags['[object Boolean]']=cloneableTags['[object Date]']=cloneableTags['[object Float32Array]']=cloneableTags['[object Float64Array]']=cloneableTags['[object Int8Array]']=cloneableTags['[object Int16Array]']=cloneableTags['[object Int32Array]']=cloneableTags['[object Map]']=cloneableTags['[object Number]']=cloneableTags['[object Object]']=cloneableTags['[object RegExp]']=cloneableTags['[object Set]']=cloneableTags['[object String]']=cloneableTags['[object Symbol]']=cloneableTags['[object Uint8Array]']=cloneableTags['[object Uint8ClampedArray]']=cloneableTags['[object Uint16Array]']=cloneableTags['[object Uint32Array]']=!0,cloneableTags['[object Error]']=cloneableTags['[object Function]']=cloneableTags['[object WeakMap]']=!1;var CLONE_DEEP_FLAG$1=1,_={groupBy:groupBy,filter:filter,matches:matches};angular.module('super-suit-helpers').factory('ssArrayHlp',ssArrayHlp),ssCommonControlHlp.$inject=['$log'],angular.module('super-suit-helpers').factory('ssCommonControlHlp',ssCommonControlHlp),ssConfigurationHlp.$inject=['$log'],angular.module('super-suit-helpers').factory('ssConfigurationHlp',ssConfigurationHlp),ssDashboardColorsHlp.$inject=['ssObjectHlp'];//@ts-check
// #---------------------------------------# //
// #---- Helper (ssDashboardColorsHlp) ----# //
var $$smallArrayOfColorOptions=[{normal:'#2E7AB8',darker:'#205586',lighter:'#54A2DE'},{normal:'#6BCCB3',darker:'#52A38F',lighter:'#85DEC8'},{normal:'#7E4082',darker:'#402B56',lighter:'#A05DA6'},{normal:'#DE8D37',darker:'#C26B13',lighter:'#EDB06B'},{normal:'#A6B0B9',darker:'#87939E',lighter:'#C0C8CF'},{normal:'#DEB743',darker:'#BF942E',lighter:'#F6DC6B'},{normal:'#E56A54',darker:'#C44C31',lighter:'#F09078'},{normal:'#C67DCC',darker:'#A05DA6',lighter:'#DF9EE5'},{normal:'#2E7362',darker:'#1D5447',lighter:'#52A38F'},{normal:'#E05AA2',darker:'#BA4182',lighter:'#ED82BB'}],$$arrayOfColorOptions=[].concat($$smallArrayOfColorOptions,$$smallArrayOfColorOptions),lightnessTypes=['normal','darker','lighter'];// Loop the colors once so that the front end will have many colors to choose from
angular.module('super-suit-helpers').factory('ssDashboardColorsHlp',ssDashboardColorsHlp),ssDateHlp.$inject=['moment'],angular.module('super-suit-helpers').factory('ssDateHlp',ssDateHlp),ssEffectiveDateHlp.$inject=['moment','ssDateHlp','ssToastHlp','$log','ssDeprecated'],angular.module('super-suit-helpers').factory('ssEffectiveDateHlp',ssEffectiveDateHlp),ssElemHlp.$inject=['ssStringHlp','$window'],angular.module('super-suit-helpers').factory('ssElemHlp',ssElemHlp),ssEmployeeHlp.$inject=['ssEmployeeApi','$filter','ssEffectiveDateHlp','ssDateHlp','ssArrayHlp','ssDeprecated'],angular.module('super-suit-helpers').factory('ssEmployeeHlp',ssEmployeeHlp);var _hlp={// #--------------------------------# //
// #---- Helper (ssFilenameHlp) ----# //
/**
	  * var - Grabs the extension of the filename
	  *
	  * @param  {string} filename The name of the file to parse
	  * @return {string}          The extension of the file or ''
	  */getExtension:function(e){if(!e)return'';if(0>e.indexOf('.'))return'';var t=e.substr(e.lastIndexOf('.')+1,10).toLowerCase();return t},/* getValidExtensions - returns the list of supported file extensions */getValidExtensions:function(){return['pdf','doc','docx','csv','xls','xlsx','jpg','jpeg','bmp','png','jp2','gif','wmf','ppt','pptx','txt','tif','tiff']},/**
	  * getFilename - Gets the name portion of a filename
	  *
	  * @param  {string} filename The name of the file to parse
	  * @return {string}
	  */getFilename:function(e){return e?0>e.indexOf('.')?e:e.substr(0,e.lastIndexOf('.')):''},/**
	  * Generates the Frontline ss-icon name for the FontAwesome icon name
	  */getIcon:function(e){var t='text';switch(e.toLowerCase()){case'pdf':t='pdf';break;case'doc':case'docx':t='word';break;case'csv':case'xls':case'xlsx':t='excel';break;case'jpg':case'jpeg':case'bmp':case'png':case'jp2':case'gif':case'wmf':t='photo';break;case'ppt':case'pptx':t='powerpoint';break;default:t='text';}return'file-'+t+'-o'}// #-- END Helper (ssFilenameHlp) --# //
// #--------------------------------# //
};angular.module('super-suit-helpers').factory('ssFilenameHlp',ssFilenameHlp).factory('filenameHlp',ssFilenameHlp),ssFluidImportsHlp.$inject=['$window','$log','ssStringHlp'],angular.module('super-suit-helpers').factory('ssFluidImportsHlp',ssFluidImportsHlp),angular.module('super-suit').factory('ssJsonApiHlp',ssJsonApiHlp),maskDataHookup.$inject=['MaskService'];// #----------------------------# //
// #---- Helper (ssMaskHlp) ----# //
// https://www.npmjs.com/package/ng-mask
var masks={};angular.module('super-suit').run(maskDataHookup),angular.module('super-suit-helpers').factory('ssMaskHlp',ssMaskHlp),angular.module('super-suit-helpers').factory('ssMathHlp',ssMathHlp),ssMutatorDataHlp.$inject=['enumFormTemplateStatus'],angular.module('super-suit-helpers').factory('ssMutatorDataHlp',ssMutatorDataHlp);// #------------------------------# //
// #---- Helper (ssObjectHlp) ----# //
// Array
var isArray$1=Array.isArray,isMutable=function(e){return null!==e&&'object'===('undefined'==typeof e?'undefined':_typeof(e))},isObject$1=function(e){return isMutable(e)&&!isArray$1(e)};// Object or Array
// Object NOT an Array
angular.module('super-suit-helpers').factory('ssObjectHlp',ssObjectHlp),angular.module('super-suit-helpers').factory('ssOrganizationHlp',ssOrganizationHlp),ssServiceLogicHlp.$inject=['buildConfig'],angular.module('super-suit').factory('ssServiceLogicHlp',ssServiceLogicHlp);// #------------------------------# //
// #---- Helper (ssStringHlp) ----# //
// _hlp is the main DI object, it should contain all helper functions
var _hlp$1={// demo function, please remove
toDashCase:function(e){return splitWords(e).join('-')},toCamelCase:function(e){return splitWords(e).map(function(e,t){return 0===t?e:e.charAt(0).toUpperCase()+e.substr(1)}).join('')},toProperCase:function(e){return splitWords(e).map(function(e){return e.charAt(0).toUpperCase()+e.substr(1)}).join('')},toTitleCase:function(e){return splitWords(e).map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(' ')}};angular.module('super-suit-helpers').factory('ssStringHlp',ssStringHlp),ssToastHlp.$inject=['toastr','toastrConfig','$rootScope','$templateCache'];// #-----------------------------# //
// #---- Helper (ssToastHlp) ----# //
/**
	 * @module SuperSuit.ToastHelper
	 * @memberOf SuperSuit
	 */var toastrInst;angular.module('super-suit-helpers').factory('ssToastHlp',ssToastHlp),ssUiModuleHlp.$inject=['$location'],angular.module('super-suit-helpers').factory('ssUiModuleHlp',ssUiModuleHlp),ssValidateHlp.$inject=['$timeout','$q','$animate','$rootScope'];// #--------------------------------# //
// #---- Helper (ssValidateHlp) ----# //
var failClass='ss-validate-failing',passClass='ss-validate-passing',fadedClass='ss-validate-passing-fade',untestedClass$1='ss-validate-untested';angular.module('super-suit-helpers').factory('ssValidateHlp',ssValidateHlp),ssValidationHlp.$inject=['ssObjectHlp'],angular.module('super-suit-helpers').factory('ssValidationHlp',ssValidationHlp),ssValidatorHlp.$inject=['ssDeprecated'],angular.module('super-suit-helpers').factory('ssValidatorHlp',ssValidatorHlp),accountApi.$inject=['$http','buildConfig'],angular.module('super-suit-apis').factory('ssAccountApi',accountApi),assignmentApi.$inject=['ssApiSvc','buildConfig','ssEffectiveDateHlp','$http'],angular.module('super-suit-apis').factory('ssAssignmentApi',assignmentApi),credentialsApi.$inject=['$http','$q','ssApiSvc','ssAuthSvc','buildConfig','ssDeprecated'],angular.module('super-suit-apis').factory('ssCredentialsApi',credentialsApi),departmentsApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssDepartmentsApi',departmentsApi),fileApi.$inject=['$http','ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssFileApi',fileApi),formInstancesApi.$inject=['$log','$http','$q','JsonApiDataStore','ssApiSvc','ssJsonApi','buildConfig','ssActiveUserSvc'],angular.module('super-suit-apis').factory('ssFormInstancesApi',formInstancesApi),formLibraryApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssFormLibraryApi',formLibraryApi),formTemplatesApi.$inject=['$http','ssApiSvc','ssJsonApi','buildConfig','JsonApiDataStore','ssActiveUserSvc'],angular.module('super-suit-apis').factory('ssFormTemplatesApi',formTemplatesApi),jobTypesApi.$inject=['ssApiSvc','buildConfig','ssEffectiveDateHlp'],angular.module('super-suit-apis').factory('ssJobTypesApi',jobTypesApi),listApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssListApi',listApi),locationsApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssLocationsApi',locationsApi),notificationsApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssNotificationsApi',notificationsApi),organizationApi.$inject=['$http','ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssOrganizationApi',organizationApi),packetInstancesApi.$inject=['$log','$http','JsonApiDataStore','ssJsonApi','ssApiSvc','buildConfig','ssActiveUserSvc'],angular.module('super-suit-apis').factory('ssPacketInstancesApi',packetInstancesApi),packetsApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssPacketsApi',packetsApi),permissionProfilesApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssPermissionProfilesApi',permissionProfilesApi),positionsApi.$inject=['ssApiSvc','buildConfig','ssEffectiveDateHlp'],angular.module('super-suit-apis').factory('ssPositionsApi',positionsApi),productAccessApi.$inject=['$http','buildConfig'],angular.module('super-suit-apis').factory('ssProductAccessApi',productAccessApi),protectedContextApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssProtectedContextApi',protectedContextApi),securityGroupsApi.$inject=['$http','$q','ssApiSvc','buildConfig','ssActiveUserSvc','ssAuthSvc','ssApiResponseHlp'],angular.module('super-suit-apis').factory('ssSecurityGroupsApi',securityGroupsApi),securityScopeApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssSecurityScopeApi',securityScopeApi),signatureApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssSignatureApi',signatureApi),statusApi.$inject=['ssApiSvc','buildConfig','ssEffectiveDateHlp'],angular.module('super-suit-apis').factory('ssStatusApi',statusApi),usersApi.$inject=['$http','$httpParamSerializer','buildConfig'],angular.module('super-suit-apis').factory('ssUsersApi',usersApi),dataImporterApi.$inject=['ssApiSvc','buildConfig','$http'],angular.module('super-suit-apis').factory('ssDataImporterApi',dataImporterApi),employeeApi.$inject=['$http','$window','$q','ssAuthSvc','ssApiSvc','ssApiResponseHlp','ssActiveUserSvc','buildConfig','ssCredentialsApi','ssEffectiveDateHlp','ssObjectHlp'],angular.module('super-suit-apis').factory('ssEmployeeApi',employeeApi),insightsAbsenceApi.$inject=['ssApiSvc','buildConfig','ssStringHlp','ssEventSvc'],angular.module('super-suit').factory('ssInsightsAbsenceApi',insightsAbsenceApi),insightsOrgStatsApi.$inject=['ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssInsightsOrgStatsApi',insightsOrgStatsApi),insightsRecruitApi.$inject=['ssApiSvc','buildConfig','ssStringHlp','ssEventSvc'],angular.module('super-suit').factory('ssInsightsRecruitApi',insightsRecruitApi),ssInteractionApi.$inject=['$http','buildConfig'],angular.module('super-suit-apis').factory('ssInteractionApi',ssInteractionApi),microcredentialsApi.$inject=['$http','buildConfig'],angular.module('super-suit-apis').factory('ssMicrocredentialsApi',microcredentialsApi),plmEemApi.$inject=['$http','$q','buildConfig','ssActiveUserSvc'],angular.module('super-suit-apis').factory('ssPlmEemApi',plmEemApi),resourceLibraryApi.$inject=['$http','buildConfig'],angular.module('super-suit-apis').factory('ssResourceLibraryApi',resourceLibraryApi),scormCloudApi.$inject=['$http','buildConfig'],angular.module('super-suit-apis').factory('ssScormCloudApi',scormCloudApi),seiUserAccessApi.$inject=['$http','ssApiSvc','buildConfig'],angular.module('super-suit-apis').factory('ssSeiUserAccessApi',seiUserAccessApi),route.$inject=['$compile','$stateParams','ssStringHlp'],angular.module('super-suit').directive('route',route),registerActionBundles.$inject=['ssPermissionsSvc','ssEnum','ssActionBundlesLogic'],angular.module('super').run(registerActionBundles),angular.module('super-suit-config').factory('ssActionBundlesLogic',logic),allowFullscreen.$inject=['$rootScope','ssEventSvc'],angular.module('super-setup').run(allowFullscreen),angular.module('super-suit').run(setupAmbientStates),routerConfig.$inject=['$locationProvider'],bootstrapLogic.$inject=['$q','$log','$window','ssActiveUserSvc','ssObjectHlp','ssEventSvc','ssAppConfigSvc'],angular.module('super').run(bootstrapLogic).config(routerConfig);var Enums=function(){function e(t,n){function s(e){return e.replace(/[^A-Za-z0-9]/g,' ').replace(/\w\S*/g,function(e,t){return 0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}).replace(/[\s]/g,'')}classCallCheck(this,e);var o,r,l;this.enums=t,void 0!==n&&(this.defaultVal={name:n,value:-1}),this.aNames=[],this.aValues=[],this.oNames={},this.oValues={},this._size=t.length;for(var d=0;d<this._size;d++)o=t[d],r=(o.name+'').toLowerCase(),l=(o.value+'').toLowerCase(),this.aNames.push(o.name),this.aValues.push(o.value),this.oNames[r]={val:o.value,index:d},this.oValues[l]={val:o.name,index:d},this[s(o.name)]=o.value}/**
	  * Convenience function for byName and byValue to call into
	  */return createClass(e,[{key:'by',value:function(e,t,n){var s=(t+'').toLowerCase();return void 0===this[e][s]?void 0===n?null:n:this[e][s].val}/**
	   * Returns the value by name
	   */},{key:'byName',value:function(e,t){return this.by('oNames',e,t)}/**
	   * Returns the name by value
	   */},{key:'byValue',value:function(e,t){return this.by('oValues',e,t)}/**
	   * Convenience function for byName and byValue to call into
	   */},{key:'enumBy',value:function(e,t){if(null==t)return this.defaultVal;var n=(t+'').toLowerCase();if(void 0!==this[e][n]){var s=this[e][n].index;return this.enums[s]}return this.defaultVal}/**
	   * Returns the full enum by on name
	   */},{key:'enumByName',value:function(e){return this.enumBy('oNames',e)}/**
	   * Returns the full enum by on value
	   */},{key:'enumByValue',value:function(e){return this.enumBy('oValues',e)}/**
	   * Returns full object the Enums was built from
	   */},{key:'getEnums',value:function(){return this.enums}/**
	   * Returns the array of names
	   */},{key:'names',value:function(){return this.aNames}/**
	   * Returns enums size
	   */},{key:'size',value:function(){return this._size}/**
	   * Returns the array of values
	   */},{key:'values',value:function(){return this.aValues}}]),e}();setupRoutePermissions.$inject=['$rootScope','$state','ssPermissionsSvc','ssEventSvc'],setup403route.$inject=['$stateProvider'],angular.module('super-suit').config(setup403route).run(setupRoutePermissions),overrideOtherwiseRule.$inject=['$urlRouterProvider'],handle404Events.$inject=['$window','ssEventSvc'],handle404Routes.$inject=['$urlRouterProvider','$stateProvider'];var activeModule=null;/**
	 * We are checking the userAgent here because when running in PhantomJS for testing, window.ss.events is not loaded
	 * before AngularJS framework is loaded which attempts to access window.ss.events and throws the following error
	 * when running `npm run develop` or `gulp develop` for example on UI modules:
	 *
	 * PhantomJS 2.1.1 (Linux 0.0.0) ERROR
	 * {
	 *   "message": "TypeError: undefined is not an object (evaluating 'window.ss.events')\nat node_modules/fl-ui-framework-angularjs/build/main.js:36524:12",
	 *   "str": "TypeError: undefined is not an object (evaluating 'window.ss.events')\nat node_modules/fl-ui-framework-angularjs/build/main.js:36524:12"
	 * }
	 *
	 * window.ss.events is not necessary for local module testing in PhantomJS
	 **/(!window.navigator.userAgent||0>window.navigator.userAgent.indexOf('PhantomJS'))&&window.ss.events.on('ui-module-activate',function(e){return activeModule=e.urlValue}),angular.module('super-suit').config(handle404Routes).run(handle404Events),angular.module('super-setup').config(overrideOtherwiseRule),listenForNoAccessEvents.$inject=['$rootScope','$state','ssEventSvc','ssAppConfigSvc'],setupNoAccessRoute.$inject=['$stateProvider'],angular.module('super-suit').config(setupNoAccessRoute).run(listenForNoAccessEvents),setupPreloader.$inject=['$q','$window','ssEventSvc','ssFeatureSvc','ssFlagSvc','ssFlagCCSvc','ssActiveUserSvc','ssPermissionsSvc','buildConfig','ssLocationSvc','ssJobTypeSvc','ssDepartmentSvc'],angular.module('super-suit').run(setupPreloader),rootUtils.$inject=['$rootScope'],angular.module('super-suit').run(rootUtils),setupRootTools.$inject=['$rootScope'],angular.module('super-suit').run(setupRootTools),handleRedirectionRoutes.$inject=['$rootScope','$log','$state','ssObjectHlp'],syncAppLocationChanges.$inject=['$rootScope','$location','ssEventSvc'],moduleChangeDetection.$inject=['$window','$rootScope','$q','$http','$location','rAF','buildConfig','ssEventSvc','ssFeatureSvc'],router.$inject=['$stateProvider','$urlRouterProvider'],angular.module('super-setup').run(moduleChangeDetection),angular.module('super-suit').config(router).run(syncAppLocationChanges).run(handleRedirectionRoutes),angular.module('super-suit').value('moment',window.moment),angular.module('super-suit').value('Chart',window.Chart),stateDecorator.$inject=['$stateProvider'],angular.module('super-suit').config(stateDecorator),intercept401.$inject=['$q','ssAuthSvc'],angular.module('super-suit').factory('intercept401',intercept401),interceptAddVersionNumber.$inject=['ssAuthSvc'],angular.module('super-suit').factory('interceptAddVersionNumber',interceptAddVersionNumber),interceptAuth.$inject=['ssAuthSvc'],angular.module('super-suit').factory('interceptAuth',interceptAuth),configInterceptors.$inject=['$httpProvider'],angular.module('super-suit').config(configInterceptors),populateFlUserForInterceptor.$inject=['ssActiveUserSvc'];var currentAccessRecord;angular.module('super-suit').run(populateFlUserForInterceptor).factory('interceptFlUser',interceptFlUser),hookupHelp.$inject=['ssAppConfigSvc','ssPermissionsSvc','ssFlagCCSvc','ssFeatureSvc','ssFlagSvc'],angular.module('super').run(hookupHelp),hookupIdm.$inject=['$location','ssAsync','ssAuthSvc','ssOrganizationSvc','buildConfig','ssEventSvc','ssAppConfigSvc','ssActiveUserSvc','$window','ssStorage'],angular.module('super').run(hookupIdm),initExternalSidekick.$inject=['ssAppConfigSvc','buildConfig','$log'],angular.module('super').run(initExternalSidekick),hookupNav.$inject=['$q','$rootScope','$location','$log','ssAppConfigSvc','ssPermissionsSvc','ssFeatureSvc','ssFlagCCSvc','ssFlagSvc'],angular.module('super').run(hookupNav),hookupNotifications.$inject=['$rootScope','ssAppConfigSvc','ssEventSvc','ssNotificationsSvc'],angular.module('super').run(hookupNotifications),hookupSearch.$inject=['$rootScope','$location','ssAppConfigSvc','ssEmployeeApi','ssDebounce','ssAsync','ssListSvc','ssFlagCCSvc','ssToastHlp'],angular.module('super').run(hookupSearch),hookupUserInfo.$inject=['ssAuthSvc'],angular.module('super').run(hookupUserInfo);// #------------------------------# //
// #---- Enums (/addressType) ----# //
var AddressTypeEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Home',value:0}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/addressType) ----# //
// #----------------------------------# //
angular.module('super-suit-enums').factory('enumAddressType',function(){return new AddressTypeEnum});// #----------------------------# //
// #---- Enums (/emailType) ----# //
var EmailTypeEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Work',value:0},{name:'Personal',value:1},{name:'Other',value:2}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/emailType) ----# //
// #--------------------------------# //
angular.module('super-suit-enums').factory('enumEmailType',function(){return new EmailTypeEnum});// #-----------------------------------------------# //
// #---- Enums (/emergencyContactRelationship) ----# //
var EmergencyContactRelationshipEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Spouse',value:0},{name:'Parent',value:1},{name:'Friend',value:2},{name:'Other',value:3}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/emergencyContactRelationship) ----# //
// #---------------------------------------------------# //
angular.module('super-suit-enums').factory('enumEmergencyContactRelationship',function(){return new EmergencyContactRelationshipEnum});// #---------------------------------# //
// #---- Enums (/employeeStatus) ----# //
var EmployeeStatusEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Inactive',value:0},{name:'Active',value:1},{name:'Terminated',value:2},{name:'Archived',value:3},{name:'No Status',value:4}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/employeeStatus) ----# //
// #-------------------------------------# //
angular.module('super-suit-enums').factory('enumEmployeeStatus',function(){return new EmployeeStatusEnum});// #----------------------------# //
// #---- Enums (/ethnicity) ----# //
var EthnicityEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Hispanic or Latino',value:0},{name:'Not Hispanic or Latino',value:1},{name:'Unknown',value:2}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/ethnicity) ----# //
// #--------------------------------# //
angular.module('super-suit-enums').factory('enumEthnicity',function(){return new EthnicityEnum});// #-------------------------------# //
// #---- Enums (/fieldHeights) ----# //
var FieldHeightsEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Single line',value:'super-input-text'},{name:'Multi-line',value:'super-input-textarea'}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/fieldHeights) ----# //
// #-----------------------------------# //
angular.module('super-suit-enums').factory('enumFieldHeights',function(){return new FieldHeightsEnum});// #------------------------------# //
// #---- Enums (/fieldWidths) ----# //
var FieldWidthsEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Small',value:'25%'},{name:'Medium',value:'50%'},{name:'Large',value:'75%'},{name:'Full',value:'100%'}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/fieldWidths) ----# //
// #----------------------------------# //
angular.module('super-suit-enums').factory('enumFieldWidths',function(){return new FieldWidthsEnum});// #---------------------------------# //
// #---- Enums (/flInviteStatus) ----# //
var FlInviteStatusEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'No Access',value:0},{name:'Sent',value:1},{name:'Active',value:2},{name:'Inactive',value:3}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/flInviteStatus) ----# //
// #-------------------------------------# //
angular.module('super-suit-enums').factory('enumFlInviteStatus',function(){return new FlInviteStatusEnum});// #----------------------------------------# //
// #---- Enums (/formAdministratorType) ----# //
var FormAdministratorTypeEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Form / Packet Sender',value:1},{name:'Employee\u2019s Supervisor',value:2},{name:'Specific Person',value:3}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/formAdministratorType) ----# //
// #--------------------------------------------# //
angular.module('super-suit-enums').factory('enumFormAdministratorType',function(){return new FormAdministratorTypeEnum});// #-------------------------------------# //
// #---- Enums (/formPacketCategory) ----# //
var FormPacketCategoryEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Policies',value:0},{name:'Contracts',value:1},{name:'Other',value:2},{name:'Benefits',value:3},{name:'Discipline',value:4},{name:'Work-Related Injury',value:5},{name:'Leaves of Absence',value:6},{name:'Payroll',value:7}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/formPacketCategory) ----# //
// #-----------------------------------------# //
angular.module('super-suit-enums').factory('enumFormPacketCategory',function(){return new FormPacketCategoryEnum});// #-----------------------------# //
// #---- Enums (/formStatus) ----# //
var FormStatusEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Incomplete',value:0},{name:'Complete',value:1},{name:'Rejected',value:2},{name:'Archived',value:3},{name:'Completed And Denied',value:4}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/formStatus) ----# //
// #---------------------------------# //
angular.module('super-suit-enums').factory('enumFormStatus',function(){return new FormStatusEnum});// #-------------------------------------# //
// #---- Enums (/formTemplateStatus) ----# //
var FormTemplateStatusEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Inactive',value:0},{name:'Active',value:1},{name:'Archived',value:2}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/formTemplateStatus) ----# //
// #-----------------------------------------# //
angular.module('super-suit-enums').factory('enumFormTemplateStatus',function(){return new FormTemplateStatusEnum});// #-------------------------# //
// #---- Enums (/gender) ----# //
var GenderEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Male',value:0},{name:'Female',value:1},{name:'Non-Binary',value:2},{name:'Decline to Answer',value:3}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/gender) ----# //
// #-----------------------------# //
angular.module('super-suit-enums').factory('enumGender',function(){return new GenderEnum});// #----------------------------------# //
// #---- Enums (/highchartsTypes) ----# //
var HighchartsTypesEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'line',value:'line'},{name:'area',value:'area'},{name:'column',value:'column'},{name:'stackedcolumn',value:'stackedcolumn'},{name:'combination',value:'combination'}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/highchartsTypes) ----# //
// #--------------------------------------# //
angular.module('super-suit-enums').factory('enumHighchartsTypes',function(){return new HighchartsTypesEnum});// #------------------------------------# //
// #---- Enums (/jobTypeCategories) ----# //
var JobTypeCategoriesEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Officials, Administrators, Managers',value:0},{name:'Principals',value:1},{name:'Assistant Principals, Teaching',value:2},{name:'Assistant Principals, Non-Teaching',value:3},{name:'Elementary Classroom Teachers',value:4},{name:'Secondary Classroom Teachers',value:5},{name:'Other Classroom Teachers',value:6},{name:'Guidance',value:7},{name:'Psychological',value:8},{name:'Librarians/Audiovisual Staff',value:9},{name:'Consultants & Supervisors of Instruction',value:10},{name:'Other Professional Staff',value:11},{name:'Teachers Aides',value:12},{name:'Technicians',value:13},{name:'Administrative Support Workers',value:14},{name:'Service Workers',value:15},{name:'Skilled Crafts',value:16},{name:'Laborers and Helpers',value:17}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/jobTypeCategories) ----# //
// #----------------------------------------# //
angular.module('super-suit-enums').factory('enumJobTypeCategories',function(){return new JobTypeCategoriesEnum});// #-------------------------------# //
// #---- Enums (/licenseTypes) ----# //
var LicenseTypesEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);// TODO MAKE SURE YOU ADD THIS ENUM TO:
// src/utilities/ssEnum/enum.js
return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Car',value:0},{name:'Motorcycle',value:1}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/licenseTypes) ----# //
// #-----------------------------------# //
angular.module('super-suit-enums').factory('enumLicenseTypes',function(){return new LicenseTypesEnum});// #-------------------------------------# //
// #---- Enums (/locationCategories) ----# //
var LocationCategoriesEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Preschool',value:0},{name:'Elementary School',value:1},{name:'Middle School',value:2},{name:'Secondary School',value:3},{name:'Adult Education',value:4},{name:'Administrative',value:5},{name:'Other',value:6}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/locationCategories) ----# //
// #-----------------------------------------# //
angular.module('super-suit-enums').factory('enumLocationCategories',function(){return new LocationCategoriesEnum});// #--------------------------------# //
// #---- Enums (/maritalStatus) ----# //
var MaritalStatusEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Single',value:0},{name:'Married',value:1},{name:'Separated',value:2},{name:'Divorced',value:3},{name:'Widowed',value:4},{name:'Civil Union',value:5}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/maritalStatus) ----# //
// #------------------------------------# //
angular.module('super-suit-enums').factory('enumMaritalStatus',function(){return new MaritalStatusEnum});// #----------------------------------# //
// #---- Enums (/medicalCategory) ----# //
var MedicalCategoryEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'General Health',value:0,properties:{permission:'filesMedicalGeneralHealth',description:'Fitness for Duty Examination, Drug Test Results, Freedom from Communicable Diseases'}},{name:'Medical Leave',value:1,properties:{permission:'filesMedicalLeave',description:'Leave Requests, FMLA Designation Notices, Medical Certifications'}},{name:'Medical Benefits',value:2,properties:{permission:'filesMedicalBenefits',description:'Benefits Enrollment, Wellness Plan Agreements, COBRA Notices'}},{name:'Workers\' Compensation',value:3,properties:{permission:'filesMedicalWorkersComp',description:'Claims, Return to Work Reports, Reasonable Accommodation Requests'}},{name:'Other Documents',value:4,properties:{permission:'filesMedicalOther'}}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/medicalCategory) ----# //
// #--------------------------------------# //
angular.module('super-suit-enums').factory('enumMedicalCategory',function(){return new MedicalCategoryEnum});// #-----------------------------------# //
// #---- Enums (/payRateFrequency) ----# //
var PayRateFrequencyEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Annually',value:0},{name:'Hourly',value:1}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/payRateFrequency) ----# //
// #---------------------------------------# //
angular.module('super-suit-enums').factory('enumPayRateFrequency',function(){return new PayRateFrequencyEnum});// #------------------------------------# //
// #---- Enums (/personnelCategory) ----# //
var PersonnelCategoryEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Pre-Employment',value:0,properties:{permission:'filesPersonnelPreEmployment',description:'Examples: Applications, resumes, references, verifications of prior experience, background checks, disability status, equal employment opportunity, reporting, etc.'}},{name:'Employment Authorization',value:1,properties:{permission:'filesPersonnelEmploymentAuth',description:'I-9 Employment Eligibility Verification Form, E-Verify Confirmation (SSN), Driver\u2019s License, Social Security Card'}},{name:'Contracts & Notices',value:2,properties:{permission:'filesPersonnelContracts',description:'Job Offers/Letters of Intent, Recommendation to Hire Form, Temporary Agreements, Supplemental Pay/Extra-Curricular Pay Agreements, Contract Adjustments'}},{name:'Evaluations',value:9,properties:{permission:'filesPersonnelEvaluations',description:'Walk-Throughs, Formative Assessments, Summative Assessments, Evaluation Artifacts, etc.'}},{name:'Payroll',value:3,properties:{permission:'filesPersonnelPayroll',description:'Federal and State W-4, Direct Deposit, Pay Schedule Agreement'}},{name:'Employment / Status Change',value:4,properties:{permission:'filesPersonnelEmploymentStatus',description:'Transfers, Promotions, Demotions, Formal Separation, Notices, Status Change Forms'}},{name:'Policy Acknowledgements',value:5,properties:{permission:'filesPersonnelPolicy',description:'Job Descriptions, IT Network Usage, Policy Agreement, Compliance, Training Verifications'}},{name:'Transcripts / Credentials',value:6,properties:{permission:'filesPersonnelTranscripts',description:'Certifications, Licenses, Endorsements, Transcripts'}},{name:'Discipline',value:7,properties:{permission:'filesPersonnelDiscipline',description:'Letters of Reprimand, Hearing Notices, Investigations, Suspensions, Terminations/Non-Renewal Notices, Formal Separation Agreements'}},{name:'Other Documents',value:8,properties:{permission:'filesPersonnelOther'}}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/personnelCategory) ----# //
// #----------------------------------------# //
angular.module('super-suit-enums').factory('enumPersonnelCategory',function(){return new PersonnelCategoryEnum});// #-----------------------------# //
// #---- Enums (/phoneTypes) ----# //
var PhoneTypesEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Work',value:0},{name:'Home',value:1},{name:'Mobile',value:2},{name:'Other',value:3}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/phoneTypes) ----# //
// #---------------------------------# //
angular.module('super-suit-enums').factory('enumPhoneTypes',function(){return new PhoneTypesEnum});// #---------------------------------# //
// #---- Enums (/propertyAction) ----# //
var PropertyActionEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);// NOTE: the enums defined by the server are the binary numbers.
// The rest defined are the combinations of those numbers for use on the front end.
// We do send and receive the numbers as defined by here. If we send 5, we will get 5 back.
return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Not Visible',value:0},{name:'View',value:1},{//NOTE: Server does bitwise addition on 0x01 and 0x02, will never send 0x02
name:'Edit',value:3},{//NOTE: User sees existence of field, but not value. Service passes '******'
name:'Redacted',//Visible as '******'
value:4},{name:'Redacted - View',// Visible but option to view
value:5},{//NOTE: Server does bitwise addition on 0x01, 0x02, and 0x04, will never send 0x06
name:'Redacted - Edit',// Visible but option to edit
value:7}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/propertyAction) ----# //
// #-------------------------------------# //
angular.module('super-suit-enums').factory('enumPropertyAction',function(){return new PropertyActionEnum});// #-----------------------# //
// #---- Enums (/race) ----# //
var RaceEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'American Indian or Alaska Native',value:0},{name:'Asian',value:1},{name:'Black or African American',value:2},{name:'Native Hawaiian or Other Pacific Islander',value:3},{name:'White',value:4},{name:'Unknown',value:5},{name:'Two or more races',value:6},{name:'Hispanic or Latino or Spanish Origin of any race',value:7},{name:'Non-Resident Alien (of any race or ethnicity)',value:8}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/race) ----# //
// #---------------------------# //
angular.module('super-suit-enums').factory('enumRace',function(){return new RaceEnum});// #------------------------------------# //
// #---- Enums (/relationshipTypes) ----# //
var RelationshipTypesEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Spouse',value:0},{name:'Parent',value:1},{name:'Friend',value:2},{name:'Other',value:3}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/relationshipTypes) ----# //
// #----------------------------------------# //
angular.module('super-suit-enums').factory('enumRelationshipTypes',function(){return new RelationshipTypesEnum});// #-----------------------------------# //
// #---- Enums (/retirementSystem) ----# //
var RetirementSystemEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'RSA',value:0},{name:'TRS (AK)',value:1},{name:'AZASRS',value:2},{name:'ARTRS',value:3},{name:'CALSTRS',value:4},{name:'COPERA',value:5},{name:'TRB',value:6},{name:'SEPP',value:7},{name:'DCRB',value:8},{name:'FRS',value:9},{name:'TRSGA',value:10},{name:'ERS',value:11},{name:'PERSI',value:12},{name:'TRS (IL)',value:13},{name:'IMRF',value:14},{name:'INPRS',value:15},{name:'IPERS',value:16},{name:'KPERS',value:17},{name:'KTRS',value:18},{name:'TRSL',value:19},{name:'MPERS',value:20},{name:'SRPS',value:21},{name:'MTRS',value:22},{name:'MPSERS',value:23},{name:'TRA',value:24},{name:'PERS (MS)',value:25},{name:'PSRS',value:26},{name:'PEERS',value:27},{name:'MPERA',value:28},{name:'NPERS',value:29},{name:'NVPERS',value:30},{name:'NHRS',value:31},{name:'PERS (NJ)',value:32},{name:'NMERB',value:33},{name:'NYSTRS',value:34},{name:'TSERS',value:35},{name:'NDPERS',value:36},{name:'STRSOH',value:37},{name:'OPERS (OK)',value:38},{name:'OPERS (OR)',value:39},{name:'PSERS',value:40},{name:'ERSRI',value:41},{name:'SCRS',value:42},{name:'SDRS',value:43},{name:'TCRS',value:44},{name:'TRS (TX)',value:45},{name:'URS',value:46},{name:'VSERS',value:47},{name:'VRS',value:48},{name:'DRS',value:49},{name:'TRS (WV)',value:50},{name:'PERS (WV)',value:51},{name:'WRS (WI)',value:52},{name:'WRS (WY)',value:53}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/retirementSystem) ----# //
// #---------------------------------------# //
angular.module('super-suit-enums').factory('enumRetirementSystem',function(){return new RetirementSystemEnum});// #-----------------------------# //
// #---- Enums (/salaryType) ----# //
var SalaryTypeEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Annual Salary',value:0},{name:'Hourly Rate',value:1}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/salaryType) ----# //
// #---------------------------------# //
angular.module('super-suit-enums').factory('enumSalaryType',function(){return new SalaryTypeEnum});// #-----------------------------# //
// #---- Enums (/salutation) ----# //
var SalutationEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'None',value:0},{name:'Mr.',value:1},{name:'Ms.',value:2},{name:'Mrs.',value:3},{name:'Miss',value:4},{name:'Dr.',value:5},{name:'Prof.',value:6},{name:'Rev.',value:7}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/salutation) ----# //
// #---------------------------------# //
angular.module('super-suit-enums').factory('enumSalutation',function(){return new SalutationEnum});// #-------------------------------------# //
// #---- Enums (/securityGroupScope) ----# //
var SecurityGroupScopeEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'None',value:0},{name:'Self',value:1},{name:'Specific',value:2},{name:'All',value:3},{name:'Direct Reports',value:4}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/securityGroupScope) ----# //
// #-----------------------------------------# //
angular.module('super-suit-enums').factory('enumSecurityGroupScope',function(){return new SecurityGroupScopeEnum});// #-------------------------------------# //
// #---- Enums (/securityGroupScope) ----# //
var SignatureDisplayMethod=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Typed',value:0},{name:'Image',value:1}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/securityGroupScope) ----# //
// #-----------------------------------------# //
angular.module('super-suit-enums').factory('enumSignatureDisplayMethod',function(){return new SignatureDisplayMethod});// #-------------------------# //
// #---- Enums (/states) ----# //
var StatesEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Alabama',value:'AL'},{name:'Alaska',value:'AK'},{name:'American Samoa',value:'AS'},{name:'Arizona',value:'AZ'},{name:'Arkansas',value:'AR'},{name:'California',value:'CA'},{name:'Colorado',value:'CO'},{name:'Connecticut',value:'CT'},{name:'Delaware',value:'DE'},{name:'District of Columbia',value:'DC'},{name:'Federated States of Micronesia',value:'FM'},{name:'Florida',value:'FL'},{name:'Georgia',value:'GA'},{name:'Guam',value:'GU'},{name:'Hawaii',value:'HI'},{name:'Idaho',value:'ID'},{name:'Illinois',value:'IL'},{name:'Indiana',value:'IN'},{name:'Iowa',value:'IA'},{name:'Kansas',value:'KS'},{name:'Kentucky',value:'KY'},{name:'Louisiana',value:'LA'},{name:'Maine',value:'ME'},{name:'Marshall Islands',value:'MH'},{name:'Maryland',value:'MD'},{name:'Massachusetts',value:'MA'},{name:'Michigan',value:'MI'},{name:'Minnesota',value:'MN'},{name:'Mississippi',value:'MS'},{name:'Missouri',value:'MO'},{name:'Montana',value:'MT'},{name:'Nebraska',value:'NE'},{name:'Nevada',value:'NV'},{name:'New Hampshire',value:'NH'},{name:'New Jersey',value:'NJ'},{name:'New Mexico',value:'NM'},{name:'New York',value:'NY'},{name:'North Carolina',value:'NC'},{name:'North Dakota',value:'ND'},{name:'Northern Mariana Islands',value:'MP'},{name:'Ohio',value:'OH'},{name:'Oklahoma',value:'OK'},{name:'Oregon',value:'OR'},{name:'Palau',value:'PW'},{name:'Pennsylvania',value:'PA'},{name:'Puerto Rico',value:'PR'},{name:'Rhode Island',value:'RI'},{name:'South Carolina',value:'SC'},{name:'South Dakota',value:'SD'},{name:'Tennessee',value:'TN'},{name:'Texas',value:'TX'},{name:'Utah',value:'UT'},{name:'Vermont',value:'VT'},{name:'Virgin Islands',value:'VI'},{name:'Virginia',value:'VA'},{name:'Washington',value:'WA'},{name:'West Virginia',value:'WV'},{name:'Wisconsin',value:'WI'},{name:'Wyoming',value:'WY'}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/states) ----# //
// #-----------------------------# //
angular.module('super-suit-enums').factory('enumStates',function(){return new StatesEnum});// #-----------------------------# //
// #---- Enums (/stepAction) ----# //
var StepActionEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Form Entry',value:0},{name:'Review Form',value:1},{name:'Review & Approve (Or Deny)',value:2},{name:'Form Completed',value:3},{name:'Employee Profile Review',value:4}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/stepAction) ----# //
// #---------------------------------# //
angular.module('super-suit-enums').factory('enumStepAction',function(){return new StepActionEnum});// #----------------------------------# //
// #---- Enums (/stepEventAction) ----# //
var StepEventActionEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Email Form Sender',value:0},{name:'Email Others',value:1},{name:'Stop Work Flow',value:2},{name:'Update Employee Record',value:3},{name:'Email All Workflow Participants',value:4},{name:'Email Supervisor',value:5},{name:'Add to Employee Record',value:6},{name:'Email Employee',value:7}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/stepEventAction) ----# //
// #--------------------------------------# //
angular.module('super-suit-enums').factory('enumStepEventAction',function(){return new StepEventActionEnum});// #--------------------------------# //
// #---- Enums (/stepEventType) ----# //
var StepEventTypeEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'On Submit',value:0},{name:'On Approve',value:1},{name:'On Deny',value:2},{name:'On Review',value:3},{name:'On Complete',value:4},{name:'On Employee Profile Review',value:5}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/stepEventType) ----# //
// #------------------------------------# //
angular.module('super-suit-enums').factory('enumStepEventType',function(){return new StepEventTypeEnum});// #--------------------------------------# //
// #---- Enums (/stepParticipantType) ----# //
var StepParticipantTypeEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Employee (chosen when sent)',desc:'Who the form is about',value:0},{name:'Employee\'s Supervisor',value:1},{name:'Specific Person',value:2},{name:'Sender',value:3}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/stepParticipantType) ----# //
// #------------------------------------------# //
angular.module('super-suit-enums').factory('enumStepParticipantType',function(){return new StepParticipantTypeEnum});// #-------------------------# //
// #---- Enums (/suffix) ----# //
var SuffixEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'None',value:0},{name:'Jr.',value:1},{name:'Sr.',value:2},{name:'I',value:3},{name:'II',value:4},{name:'III',value:5},{name:'Esq.',value:6},{name:'PhD',value:7},{name:'IV',value:8},{name:'V',value:9},{name:'VI',value:10},{name:'VII',value:11},{name:'VIII',value:12},{name:'IX',value:13},{name:'X',value:14}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/suffix) ----# //
// #-----------------------------# //
angular.module('super-suit-enums').factory('enumSuffix',function(){return new SuffixEnum});// #----------------------------# //
// #---- Enums (/usageType) ----# //
var UsageTypeEnum=function(e){/*@ngInject*/function t(){classCallCheck(this,t);return possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,[{name:'Work',value:0},{name:'Personal',value:1},{name:'Other',value:2}]))}return inherits(t,e),t}(Enums);// #---- End Enums (/usageType) ----# //
// #--------------------------------# //
angular.module('super-suit-enums').factory('enumUsageType',function(){return new UsageTypeEnum}),addressesMutator.$inject=['ssDateHlp','moment'],angular.module('super-suit-mutators').factory('mutatorAddresses',addressesMutator),employeesMutator.$inject=['ssEnum','ssDateHlp','ssArrayHlp','moment'],angular.module('super-suit-mutators').factory('mutatorEmployees',employeesMutator),formInstancesMutator.$inject=['moment','enumStepAction'],angular.module('super-suit-mutators').factory('mutatorFormInstances',formInstancesMutator),formTemplatesMutator.$inject=['ssMutatorDataHlp'],angular.module('super-suit-mutators').factory('mutatorFormTemplates',formTemplatesMutator),iFormLibraryObjectsMutator.$inject=['ssMutatorDataHlp'],angular.module('super-suit-mutators').factory('mutatorIFormLibraryObjects',iFormLibraryObjectsMutator),angular.module('super-suit-mutators').factory('mutatorJobTypeDetails',jobTypeDetailsMutator),locationsMutator.$inject=['ssMutatorDataHlp'],angular.module('super-suit-mutators').factory('mutatorLocations',locationsMutator),messagesMutator.$inject=['ssDateHlp'],angular.module('super-suit-mutators').factory('mutatorMessages',messagesMutator),organizationsMutator.$inject=['ssMutatorDataHlp'],angular.module('super-suit-mutators').factory('mutatorOrganizations',organizationsMutator),paySchedulesMutator.$inject=['ssDateHlp'],angular.module('super-suit-mutators').factory('mutatorPaySchedules',paySchedulesMutator),phoneNumbersMutator.$inject=['ssMutatorDataHlp'],angular.module('super-suit-mutators').factory('mutatorPhoneNumbers',phoneNumbersMutator),positionsMutator.$inject=['$filter'],angular.module('super-suit-mutators').factory('mutatorPositions',positionsMutator),angular.module('super-suit-mutators').factory('mutatorSecurityGroups',securityGroupsMutator),securityScopesMutator.$inject=['enumSecurityGroupScope'],angular.module('super-suit-mutators').factory('mutatorSecurityScopes',securityScopesMutator),supervisorsMutator.$inject=['ssDateHlp'],angular.module('super-suit').factory('mutatorSupervisors',supervisorsMutator),null==window.__karma__&&(angular.module('super-suit').value('frameworkBaseUrl',window.ss.env.fwBaseUrl),angular.bootstrap(document.getElementById('super-suit'),['super']))})();
//# sourceMappingURL=main.js.map
