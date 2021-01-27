(function(){'use strict';function t(t,e){return e={exports:{}},t(e,e.exports),e.exports}angular.module('super-suit').requires.push('angular-intro');var e='undefined'==typeof globalThis?'undefined'==typeof window?'undefined'==typeof global?'undefined'==typeof self?{}:self:global:window:globalThis,n='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&'function'==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?'symbol':typeof t},o=t(function(t){(function(e){t.exports=e(),t.exports.introJs=function(){// introJs()
return console.warn('Deprecated: please use require("intro.js") directly, instead of the introJs method of the function'),e().apply(this,arguments)}})(function(){/**
	     * IntroJs main class
	     *
	     * @class IntroJs
	     */function t(t){this._targetElement=t,this._introItems=[],this._options={/* Next button label in tooltip box */nextLabel:'Next &rarr;',/* Previous button label in tooltip box */prevLabel:'&larr; Back',/* Skip button label in tooltip box */skipLabel:'Skip',/* Done button label in tooltip box */doneLabel:'Done',/* Hide previous button in the first step? Otherwise, it will be disabled button. */hidePrev:!1,/* Hide next button in the last step? Otherwise, it will be disabled button. */hideNext:!1,/* Default tooltip box position */tooltipPosition:'bottom',/* Next CSS class for tooltip boxes */tooltipClass:'',/* CSS class that is added to the helperLayer */highlightClass:'',/* Close introduction when pressing Escape button? */exitOnEsc:!0,/* Close introduction when clicking on overlay layer? */exitOnOverlayClick:!0,/* Show step numbers in introduction? */showStepNumbers:!0,/* Let user use keyboard to navigate the tour? */keyboardNavigation:!0,/* Show tour control buttons? */showButtons:!0,/* Show tour bullets? */showBullets:!0,/* Show tour progress? */showProgress:!1,/* Scroll to highlighted element? */scrollToElement:!0,/*
	         * Should we scroll the tooltip or target element?
	         *
	         * Options are: 'element' or 'tooltip'
	         */scrollTo:'element',/* Padding to add after scrolling when element is not in the viewport (in pixels) */scrollPadding:30,/* Set the overlay opacity */overlayOpacity:.8,/* Precedence of positions, when auto is enabled */positionPrecedence:['bottom','top','right','left'],/* Disable an interaction with element? */disableInteraction:!1,/* Set how much padding to be used around helper element */helperElementPadding:10,/* Default hint position */hintPosition:'top-middle',/* Hint button label */hintButtonLabel:'Got it',/* Adding animation to hints? */hintAnimation:!0,/* additional classes to put on the buttons */buttonClass:'introjs-button'}}/**
	     * Initiate a new introduction/guide from an element in the page
	     *
	     * @api private
	     * @method _introForElement
	     * @param {Object} targetElm
	     * @param {String} group
	     * @returns {Boolean} Success or not?
	     */function e(t,e){var n=t.querySelectorAll('*[data-intro]'),l=[];if(this._options.steps)v(this._options.steps,function(t){var e=r(t);//set the step
//intro without element
if(e.step=l.length+1,'string'==typeof e.element&&(e.element=document.querySelector(e.element)),'undefined'==typeof e.element||null===e.element){var n=document.querySelector('.introjsFloatingElement');null===n&&(n=document.createElement('div'),n.className='introjsFloatingElement',document.body.appendChild(n)),e.element=n,e.position='floating'}e.scrollTo=e.scrollTo||this._options.scrollTo,'undefined'==typeof e.disableInteraction&&(e.disableInteraction=this._options.disableInteraction),null!==e.element&&l.push(e)}.bind(this));else{//use steps from data-* annotations
var s,d=n.length;//if there's no element to intro
if(1>d)return!1;v(n,function(t){// PR #80
// start intro for groups of elements
if(!(e&&t.getAttribute('data-intro-group')!==e)&&'none'!==t.style.display)// skip hidden elements
{var n=parseInt(t.getAttribute('data-step'),10);s='undefined'==typeof t.getAttribute('data-disable-interaction')?this._options.disableInteraction:!!t.getAttribute('data-disable-interaction'),0<n&&(l[n-1]={element:t,intro:t.getAttribute('data-intro'),step:parseInt(t.getAttribute('data-step'),10),tooltipClass:t.getAttribute('data-tooltipclass'),highlightClass:t.getAttribute('data-highlightclass'),position:t.getAttribute('data-position')||this._options.tooltipPosition,scrollTo:t.getAttribute('data-scrollto')||this._options.scrollTo,disableInteraction:s})}}.bind(this));//next add intro items without data-step
//todo: we need a cleanup here, two loops are redundant
var p=0;v(n,function(t){// PR #80
// start intro for groups of elements
if(!(e&&t.getAttribute('data-intro-group')!==e)&&null===t.getAttribute('data-step')){for(;'undefined'!=typeof l[p];)p++;s='undefined'==typeof t.getAttribute('data-disable-interaction')?this._options.disableInteraction:!!t.getAttribute('data-disable-interaction'),l[p]={element:t,intro:t.getAttribute('data-intro'),step:p+1,tooltipClass:t.getAttribute('data-tooltipclass'),highlightClass:t.getAttribute('data-highlightclass'),position:t.getAttribute('data-position')||this._options.tooltipPosition,scrollTo:t.getAttribute('data-scrollto')||this._options.scrollTo,disableInteraction:s}}}.bind(this))}//removing undefined/null elements
for(var c=[],h=0;h<l.length;h++)l[h]&&c.push(l[h]);return l=c,l.sort(function(t,e){return t.step-e.step}),this._introItems=l,H.call(this,t)&&(a.call(this),this._options.keyboardNavigation&&Z.on(window,'keydown',i,this,!0),Z.on(window,'resize',o,this,!0)),!1}function o(){this.refresh.call(this)}/**
	    * on keyCode:
	    * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
	    * This feature has been removed from the Web standards.
	    * Though some browsers may still support it, it is in
	    * the process of being dropped.
	    * Instead, you should use KeyboardEvent.code,
	    * if it's implemented.
	    *
	    * jQuery's approach is to test for
	    *   (1) e.which, then
	    *   (2) e.charCode, then
	    *   (3) e.keyCode
	    * https://github.com/jquery/jquery/blob/a6b0705294d336ae2f63f7276de0da1195495363/src/event.js#L638
	    *
	    * @param type var
	    * @return type
	    */function i(t){var e=null===t.code?t.which:t.code;// if code/e.which is null
if(null===e&&(e=null===t.charCode?t.keyCode:t.charCode),('Escape'===e||27===e)&&!0===this._options.exitOnEsc)c.call(this,this._targetElement);else if('ArrowLeft'===e||37===e)d.call(this);else if('ArrowRight'===e||39===e)a.call(this);else if('Enter'===e||13===e){//srcElement === ie
var n=t.target||t.srcElement;n&&n.className.match('introjs-prevbutton')?d.call(this):n&&n.className.match('introjs-skipbutton')?(this._introItems.length-1===this._currentStep&&'function'==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),c.call(this,this._targetElement)):n&&n.getAttribute('data-stepnumber')?n.click():a.call(this),t.preventDefault?t.preventDefault():t.returnValue=!1}}/*
	      * makes a copy of the object
	      * @api private
	      * @method _cloneObject
	     */function r(t){if(null===t||'object'!==('undefined'==typeof t?'undefined':n(t))||'undefined'!=typeof t.nodeType)return t;var e={};for(var o in t)e[o]='undefined'!=typeof window.jQuery&&t[o]instanceof window.jQuery?t[o]:r(t[o]);return e}/**
	     * Go to specific step of introduction
	     *
	     * @api private
	     * @method _goToStep
	     */function l(t){this._currentStep=t-2,'undefined'!=typeof this._introItems&&a.call(this)}/**
	     * Go to the specific step of introduction with the explicit [data-step] number
	     *
	     * @api private
	     * @method _goToStepNumber
	     */function s(t){this._currentStepNumber=t,'undefined'!=typeof this._introItems&&a.call(this)}/**
	     * Go to next step on intro
	     *
	     * @api private
	     * @method _nextStep
	     */function a(){this._direction='forward','undefined'!=typeof this._currentStepNumber&&v(this._introItems,function(t,e){t.step===this._currentStepNumber&&(this._currentStep=e-1,this._currentStepNumber=void 0)}.bind(this)),'undefined'==typeof this._currentStep?this._currentStep=0:++this._currentStep;var t=this._introItems[this._currentStep],e=!0;// if `onbeforechange` returned `false`, stop displaying the element
return'undefined'!=typeof this._introBeforeChangeCallback&&(e=this._introBeforeChangeCallback.call(this,t.element)),!1===e?(--this._currentStep,!1):this._introItems.length<=this._currentStep?('function'==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),void c.call(this,this._targetElement)):void x.call(this,t)}/**
	     * Go to previous step on intro
	     *
	     * @api private
	     * @method _previousStep
	     */function d(){if(this._direction='backward',0===this._currentStep)return!1;--this._currentStep;var t=this._introItems[this._currentStep],e=!0;// if `onbeforechange` returned `false`, stop displaying the element
return'undefined'!=typeof this._introBeforeChangeCallback&&(e=this._introBeforeChangeCallback.call(this,t.element)),!1===e?(++this._currentStep,!1):void x.call(this,t)}/**
	     * Update placement of the intro objects on the screen
	     * @api private
	     */function p(){// re-align tooltip
if(y.call(this,document.querySelector('.introjs-helperLayer')),y.call(this,document.querySelector('.introjs-tooltipReferenceLayer')),y.call(this,document.querySelector('.introjs-disableInteraction')),void 0!==this._currentStep&&null!==this._currentStep){var t=document.querySelector('.introjs-helperNumberLayer'),e=document.querySelector('.introjs-arrow'),n=document.querySelector('.introjs-tooltip');h.call(this,this._introItems[this._currentStep].element,n,e,t)}//re-align hints
return P.call(this),this}/**
	     * Exit from intro
	     *
	     * @api private
	     * @method _exitIntro
	     * @param {Object} targetElement
	     * @param {Boolean} force - Setting to `true` will skip the result of beforeExit callback
	     */function c(t,e){var n=!0;// calling onbeforeexit callback
//
// If this callback return `false`, it would halt the process
// skip this check if `force` parameter is `true`
// otherwise, if `onbeforeexit` returned `false`, don't exit the intro
if(void 0!==this._introBeforeExitCallback&&(n=this._introBeforeExitCallback.call(this)),e||!1!==n){//remove overlay layers from the page
var r=t.querySelectorAll('.introjs-overlay');r&&r.length&&v(r,function(t){t.style.opacity=0,window.setTimeout(function(){this.parentNode&&this.parentNode.removeChild(this)}.bind(t),500)}.bind(this));//remove all helper layers
var l=t.querySelector('.introjs-helperLayer');l&&l.parentNode.removeChild(l);var s=t.querySelector('.introjs-tooltipReferenceLayer');s&&s.parentNode.removeChild(s);//remove disableInteractionLayer
var a=t.querySelector('.introjs-disableInteraction');a&&a.parentNode.removeChild(a);//remove intro floating element
var d=document.querySelector('.introjsFloatingElement');d&&d.parentNode.removeChild(d),S();//remove `introjs-fixParent` class from the elements
var p=document.querySelectorAll('.introjs-fixParent');v(p,function(t){I(t,/introjs-fixParent/g)}),Z.off(window,'keydown',i,this,!0),Z.off(window,'resize',o,this,!0),void 0!==this._introExitCallback&&this._introExitCallback.call(this),this._currentStep=void 0}}/**
	     * Render tooltip box in the page
	     *
	     * @api private
	     * @method _placeTooltip
	     * @param {HTMLElement} targetElement
	     * @param {HTMLElement} tooltipLayer
	     * @param {HTMLElement} arrowLayer
	     * @param {HTMLElement} helperNumberLayer
	     * @param {Boolean} hintMode
	     */function h(t,e,n,o,i){var r,l,s,a,d,p='';//prevent error when `this._currentStep` is undefined
if(i=i||!1,e.style.top=null,e.style.right=null,e.style.bottom=null,e.style.left=null,e.style.marginLeft=null,e.style.marginTop=null,n.style.display='inherit','undefined'!=typeof o&&null!==o&&(o.style.top=null,o.style.left=null),!!this._introItems[this._currentStep]){r=this._introItems[this._currentStep],p='string'==typeof r.tooltipClass?r.tooltipClass:this._options.tooltipClass,e.className=('introjs-tooltip '+p).replace(/^\s+|\s+$/g,''),e.setAttribute('role','dialog'),d=this._introItems[this._currentStep].position,'floating'!==d&&(d=m.call(this,t,e,d));var c;switch(s=J(t),l=J(e),a=E(),k(e,'introjs-'+d),d){case'top-right-aligned':n.className='introjs-arrow bottom-right';var h=0;g(s,h,l,e),e.style.bottom=s.height+20+'px';break;case'top-middle-aligned':n.className='introjs-arrow bottom-middle';var f=s.width/2-l.width/2;// a fix for middle aligned hints
i&&(f+=5),g(s,f,l,e)&&(e.style.right=null,u(s,f,l,a,e)),e.style.bottom=s.height+20+'px';break;case'top-left-aligned':// top-left-aligned is the same as the default top
case'top':n.className='introjs-arrow bottom',c=i?0:15,u(s,c,l,a,e),e.style.bottom=s.height+20+'px';break;case'right':e.style.left=s.width+20+'px',s.top+l.height>a.height?(n.className='introjs-arrow left-bottom',e.style.top='-'+(l.height-s.height-20)+'px'):n.className='introjs-arrow left';break;case'left':i||!0!==this._options.showStepNumbers||(e.style.top='15px'),s.top+l.height>a.height?(e.style.top='-'+(l.height-s.height-20)+'px',n.className='introjs-arrow right-bottom'):n.className='introjs-arrow right',e.style.right=s.width+20+'px';break;case'floating':n.style.display='none',e.style.left='50%',e.style.top='50%',e.style.marginLeft='-'+l.width/2+'px',e.style.marginTop='-'+l.height/2+'px','undefined'!=typeof o&&null!==o&&(o.style.left='-'+(l.width/2+18)+'px',o.style.top='-'+(l.height/2+18)+'px');break;case'bottom-right-aligned':n.className='introjs-arrow top-right',h=0,g(s,h,l,e),e.style.top=s.height+20+'px';break;case'bottom-middle-aligned':n.className='introjs-arrow top-middle',f=s.width/2-l.width/2,i&&(f+=5),g(s,f,l,e)&&(e.style.right=null,u(s,f,l,a,e)),e.style.top=s.height+20+'px';break;// case 'bottom-left-aligned':
// Bottom-left-aligned is the same as the default bottom
// case 'bottom':
// Bottom going to follow the default behavior
default:n.className='introjs-arrow top',c=0,u(s,c,l,a,e),e.style.top=s.height+20+'px';}}//if we have a custom css class for each step
}/**
	     * Set tooltip left so it doesn't go off the right side of the window
	     *
	     * @return boolean true, if tooltipLayerStyleLeft is ok.  false, otherwise.
	     */function u(t,e,n,o,i){return t.left+e+n.width>o.width?(i.style.left=o.width-n.width-t.left+'px',!1):(i.style.left=e+'px',!0)}/**
	     * Set tooltip right so it doesn't go off the left side of the window
	     *
	     * @return boolean true, if tooltipLayerStyleRight is ok.  false, otherwise.
	     */function g(t,e,n,o){return 0>t.left+t.width-e-n.width?(o.style.left=-t.left+'px',!1):(o.style.right=e+'px',!0)}/**
	     * Determines the position of the tooltip based on the position precedence and availability
	     * of screen space.
	     *
	     * @param {Object}    targetElement
	     * @param {Object}    tooltipLayer
	     * @param {String}    desiredTooltipPosition
	     * @return {String}   calculatedPosition
	     */function m(t,e,n){// Take a clone of position precedence. These will be the available
var o=this._options.positionPrecedence.slice(),i=E(),r=J(e).height+10,l=J(e).width+20,s=t.getBoundingClientRect(),a='floating';// If we check all the possible areas, and there are no valid places for the tooltip, the element
// must take up most of the screen real estate. Show the tooltip floating in the middle of the screen.
s.bottom+r+r>i.height&&b(o,'bottom'),0>s.top-r&&b(o,'top'),s.right+l>i.width&&b(o,'right'),0>s.left-l&&b(o,'left');// @var {String}  ex: 'right-aligned'
var d=function(t){var e=t.indexOf('-');return-1===e?'':t.substr(e)}(n||'');// strip alignment from position
return n&&(n=n.split('-')[0]),o.length&&('auto'!==n&&-1<o.indexOf(n)?a=n:a=o[0]),-1!==['top','bottom'].indexOf(a)&&(a+=f(s.left,l,i,d)),a}/**
	    * auto-determine alignment
	    * @param {Integer}  offsetLeft
	    * @param {Integer}  tooltipWidth
	    * @param {Object}   windowSize
	    * @param {String}   desiredAlignment
	    * @return {String}  calculatedAlignment
	    */function f(t,e,n,o){var i=e/2,r=Math.min(n.width,window.screen.width),l=['-left-aligned','-middle-aligned','-right-aligned'],s='';// valid left must be at least a tooltipWidth
// away from right side
return r-t<e&&b(l,'-left-aligned'),(t<i||r-t<i)&&b(l,'-middle-aligned'),t<e&&b(l,'-right-aligned'),s=l.length?-1===l.indexOf(o)?l[0]:o:'-middle-aligned',s}/**
	     * Remove an entry from a string array if it's there, does nothing if it isn't there.
	     *
	     * @param {Array} stringArray
	     * @param {String} stringToRemove
	     */function b(t,e){-1<t.indexOf(e)&&t.splice(t.indexOf(e),1)}/**
	     * Update the position of the helper layer on the screen
	     *
	     * @api private
	     * @method _setHelperLayerPosition
	     * @param {Object} helperLayer
	     */function y(t){if(t){//prevent error when `this._currentStep` in undefined
if(!this._introItems[this._currentStep])return;var e=this._introItems[this._currentStep],n=J(e.element),o=this._options.helperElementPadding;// If the target element is fixed, the tooltip should be fixed as well.
// Otherwise, remove a fixed class that may be left over from the previous
// step.
A(e.element)?k(t,'introjs-fixedTooltip'):I(t,'introjs-fixedTooltip'),'floating'===e.position&&(o=0),t.style.cssText='width: '+(n.width+o)+'px; height:'+(n.height+o)+'px; top:'+(n.top-o/2)+'px;left: '+(n.left-o/2)+'px;'}}/**
	     * Add disableinteraction layer and adjust the size and position of the layer
	     *
	     * @api private
	     * @method _disableInteraction
	     */function _(){var t=document.querySelector('.introjs-disableInteraction');null===t&&(t=document.createElement('div'),t.className='introjs-disableInteraction',this._targetElement.appendChild(t)),y.call(this,t)}/**
	     * Setting anchors to behave like buttons
	     *
	     * @api private
	     * @method _setAnchorAsButton
	     */function C(t){t.setAttribute('role','button'),t.tabIndex=0}/**
	     * Show an element on the page
	     *
	     * @api private
	     * @method _showElement
	     * @param {Object} targetElement
	     */function x(t){'undefined'!=typeof this._introChangeCallback&&this._introChangeCallback.call(this,t.element);var e,n,o,i,r=this,l=document.querySelector('.introjs-helperLayer'),s=document.querySelector('.introjs-tooltipReferenceLayer'),p='introjs-helperLayer';//check for a current step highlight class
if('string'==typeof t.highlightClass&&(p+=' '+t.highlightClass),'string'==typeof this._options.highlightClass&&(p+=' '+this._options.highlightClass),null!==l){var u=s.querySelector('.introjs-helperNumberLayer'),g=s.querySelector('.introjs-tooltiptext'),m=s.querySelector('.introjs-arrow'),f=s.querySelector('.introjs-tooltip');if(o=s.querySelector('.introjs-skipbutton'),n=s.querySelector('.introjs-prevbutton'),e=s.querySelector('.introjs-nextbutton'),l.className=p,f.style.opacity=0,f.style.display='none',null!==u){var b=this._introItems[0<=t.step-2?t.step-2:0];(null!==b&&'forward'===this._direction&&'floating'===b.position||'backward'===this._direction&&'floating'===t.position)&&(u.style.opacity=0)}// scroll to element
i=Q(t.element),i!==document.body&&Y(i,t.element),y.call(r,l),y.call(r,s);//remove `introjs-fixParent` class from the elements
var x=document.querySelectorAll('.introjs-fixParent');v(x,function(t){I(t,/introjs-fixParent/g)}),S(),r._lastShowElementTimer&&window.clearTimeout(r._lastShowElementTimer),r._lastShowElementTimer=window.setTimeout(function(){null!==u&&(u.innerHTML=t.step),g.innerHTML=t.intro,f.style.display='block',h.call(r,t.element,f,m,u),r._options.showBullets&&(s.querySelector('.introjs-bullets li > a.active').className='',s.querySelector('.introjs-bullets li > a[data-stepnumber="'+t.step+'"]').className='active'),s.querySelector('.introjs-progress .introjs-progressbar').style.cssText='width:'+X.call(r)+'%;',s.querySelector('.introjs-progress .introjs-progressbar').setAttribute('aria-valuenow',X.call(r)),f.style.opacity=1,u&&(u.style.opacity=1),'undefined'!=typeof o&&null!==o&&/introjs-donebutton/gi.test(o.className)?o.focus():'undefined'!=typeof e&&null!==e&&e.focus(),j.call(r,t.scrollTo,t,g)},350)}else{var N=document.createElement('div'),A=document.createElement('div'),E=document.createElement('div'),L=document.createElement('div'),H=document.createElement('div'),T=document.createElement('div'),O=document.createElement('div'),P=document.createElement('div');N.className=p,A.className='introjs-tooltipReferenceLayer',i=Q(t.element),i!==document.body&&Y(i,t.element),y.call(r,N),y.call(r,A),this._targetElement.appendChild(N),this._targetElement.appendChild(A),E.className='introjs-arrow',H.className='introjs-tooltiptext',H.innerHTML=t.intro,T.className='introjs-bullets',!1===this._options.showBullets&&(T.style.display='none');var q=document.createElement('ul');q.setAttribute('role','tablist');var B=function(){r.goToStep(this.getAttribute('data-stepnumber'))};v(this._introItems,function(e,n){var o=document.createElement('li'),i=document.createElement('a');o.setAttribute('role','presentation'),i.setAttribute('role','tab'),i.onclick=B,n===t.step-1&&(i.className='active'),C(i),i.innerHTML='&nbsp;',i.setAttribute('data-stepnumber',e.step),o.appendChild(i),q.appendChild(o)}),T.appendChild(q),O.className='introjs-progress',!1===this._options.showProgress&&(O.style.display='none');var M=document.createElement('div');M.className='introjs-progressbar',M.setAttribute('role','progress'),M.setAttribute('aria-valuemin',0),M.setAttribute('aria-valuemax',100),M.setAttribute('aria-valuenow',X.call(this)),M.style.cssText='width:'+X.call(this)+'%;',O.appendChild(M),P.className='introjs-tooltipbuttons',!1===this._options.showButtons&&(P.style.display='none'),L.className='introjs-tooltip',L.appendChild(H),L.appendChild(T),L.appendChild(O);//add helper layer number
var $=document.createElement('span');!0===this._options.showStepNumbers&&($.className='introjs-helperNumberLayer',$.innerHTML=t.step,A.appendChild($)),L.appendChild(E),A.appendChild(L),e=document.createElement('a'),e.onclick=function(){r._introItems.length-1!==r._currentStep&&a.call(r)},C(e),e.innerHTML=this._options.nextLabel,n=document.createElement('a'),n.onclick=function(){0!==r._currentStep&&d.call(r)},C(n),n.innerHTML=this._options.prevLabel,o=document.createElement('a'),o.className=this._options.buttonClass+' introjs-skipbutton ',C(o),o.innerHTML=this._options.skipLabel,o.onclick=function(){r._introItems.length-1===r._currentStep&&'function'==typeof r._introCompleteCallback&&r._introCompleteCallback.call(r),r._introItems.length-1!==r._currentStep&&'function'==typeof r._introExitCallback&&r._introExitCallback.call(r),'function'==typeof r._introSkipCallback&&r._introSkipCallback.call(r),c.call(r,r._targetElement)},P.appendChild(o),1<this._introItems.length&&(P.appendChild(n),P.appendChild(e)),L.appendChild(P),h.call(r,t.element,L,E,$),j.call(this,t.scrollTo,t,L)}// removing previous disable interaction layer
var F=r._targetElement.querySelector('.introjs-disableInteraction');F&&F.parentNode.removeChild(F),t.disableInteraction&&_.call(r),0===this._currentStep&&1<this._introItems.length?('undefined'!=typeof o&&null!==o&&(o.className=this._options.buttonClass+' introjs-skipbutton'),'undefined'!=typeof e&&null!==e&&(e.className=this._options.buttonClass+' introjs-nextbutton'),!0===this._options.hidePrev?('undefined'!=typeof n&&null!==n&&(n.className=this._options.buttonClass+' introjs-prevbutton introjs-hidden'),'undefined'!=typeof e&&null!==e&&k(e,'introjs-fullbutton')):'undefined'!=typeof n&&null!==n&&(n.className=this._options.buttonClass+' introjs-prevbutton introjs-disabled'),'undefined'!=typeof o&&null!==o&&(o.innerHTML=this._options.skipLabel)):this._introItems.length-1===this._currentStep||1===this._introItems.length?('undefined'!=typeof o&&null!==o&&(o.innerHTML=this._options.doneLabel,k(o,'introjs-donebutton')),'undefined'!=typeof n&&null!==n&&(n.className=this._options.buttonClass+' introjs-prevbutton'),!0===this._options.hideNext?('undefined'!=typeof e&&null!==e&&(e.className=this._options.buttonClass+' introjs-nextbutton introjs-hidden'),'undefined'!=typeof n&&null!==n&&k(n,'introjs-fullbutton')):'undefined'!=typeof e&&null!==e&&(e.className=this._options.buttonClass+' introjs-nextbutton introjs-disabled')):('undefined'!=typeof o&&null!==o&&(o.className=this._options.buttonClass+' introjs-skipbutton'),'undefined'!=typeof n&&null!==n&&(n.className=this._options.buttonClass+' introjs-prevbutton'),'undefined'!=typeof e&&null!==e&&(e.className=this._options.buttonClass+' introjs-nextbutton'),'undefined'!=typeof o&&null!==o&&(o.innerHTML=this._options.skipLabel)),n.setAttribute('role','button'),e.setAttribute('role','button'),o.setAttribute('role','button'),'undefined'!=typeof e&&null!==e&&e.focus(),w(t),'undefined'!=typeof this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,t.element)}/**
	     * To change the scroll of `window` after highlighting an element
	     *
	     * @api private
	     * @method _scrollTo
	     * @param {String} scrollTo
	     * @param {Object} targetElement
	     * @param {Object} tooltipLayer
	     */function j(t,e,n){if('off'!==t){var o;if(this._options.scrollToElement&&(o='tooltip'===t?n.getBoundingClientRect():e.element.getBoundingClientRect(),!L(e.element))){var i=E().height,r=o.bottom-(o.bottom-o.top);0>r||e.element.clientHeight>i?window.scrollBy(0,o.top-(i/2-o.height/2)-this._options.scrollPadding):window.scrollBy(0,o.top-(i/2-o.height/2)+this._options.scrollPadding)}}}/**
	     * To remove all show element(s)
	     *
	     * @api private
	     * @method _removeShowElement
	     */function S(){var t=document.querySelectorAll('.introjs-showElement');v(t,function(t){I(t,/introjs-[a-zA-Z]+/g)})}/**
	     * To set the show element
	     * This function set a relative (in most cases) position and changes the z-index
	     *
	     * @api private
	     * @method _setShowElement
	     * @param {Object} targetElement
	     */function w(t){var e;// we need to add this show element class to the parent of SVG elements
// because the SVG elements can't have independent z-index
if(t.element instanceof SVGElement)for(e=t.element.parentNode;null!==t.element.parentNode&&e.tagName&&'body'!==e.tagName.toLowerCase();)'svg'===e.tagName.toLowerCase()&&k(e,'introjs-showElement introjs-relativePosition'),e=e.parentNode;k(t.element,'introjs-showElement');var n=N(t.element,'position');for('absolute'!==n&&'relative'!==n&&'fixed'!==n&&k(t.element,'introjs-relativePosition'),e=t.element.parentNode;null!==e&&e.tagName&&'body'!==e.tagName.toLowerCase();){//fix The Stacking Context problem.
//More detail: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
var o=N(e,'z-index'),i=parseFloat(N(e,'opacity')),r=N(e,'transform')||N(e,'-webkit-transform')||N(e,'-moz-transform')||N(e,'-ms-transform')||N(e,'-o-transform');(/[0-9]+/.test(o)||1>i||'none'!==r&&void 0!==r)&&k(e,'introjs-fixParent'),e=e.parentNode}}/**
	    * Iterates arrays
	    *
	    * @param {Array} arr
	    * @param {Function} forEachFnc
	    * @param {Function} completeFnc
	    * @return {Null}
	    */function v(t,e,n){// in case arr is an empty query selector node list
if(t)for(var o=0,r=t.length;o<r;o++)e(t[o],o);'function'==typeof n&&n()}/**
	    * Mark any object with an incrementing number
	    * used for keeping track of objects
	    *
	    * @param Object obj   Any object or DOM Element
	    * @param String key
	    * @return Object
	    *//**
	     * Append a class to an element
	     *
	     * @api private
	     * @method _addClass
	     * @param {Object} element
	     * @param {String} className
	     * @returns null
	     */function k(t,e){if(t instanceof SVGElement){// svg
var n=t.getAttribute('class')||'';t.setAttribute('class',n+' '+e)}else if(void 0!==t.classList){// check for modern classList property
var o=e.split(' ');v(o,function(e){t.classList.add(e)})}else t.className.match(e)||(t.className+=' '+e)}/**
	     * Remove a class from an element
	     *
	     * @api private
	     * @method _removeClass
	     * @param {Object} element
	     * @param {RegExp|String} classNameRegex can be regex or string
	     * @returns null
	     */function I(t,e){if(t instanceof SVGElement){var n=t.getAttribute('class')||'';t.setAttribute('class',n.replace(e,'').replace(/^\s+|\s+$/g,''))}else t.className=t.className.replace(e,'').replace(/^\s+|\s+$/g,'')}/**
	     * Get an element CSS property on the page
	     * Thanks to JavaScript Kit: http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
	     *
	     * @api private
	     * @method _getPropValue
	     * @param {Object} element
	     * @param {String} propName
	     * @returns Element's property value
	     */function N(t,e){var n='';//Prevent exception in IE
return t.currentStyle?n=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(n=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),n&&n.toLowerCase?n.toLowerCase():n}/**
	     * Checks to see if target element (or parents) position is fixed or not
	     *
	     * @api private
	     * @method _isFixed
	     * @param {Object} element
	     * @returns Boolean
	     */function A(t){var e=t.parentNode;return!!(e&&'HTML'!==e.nodeName)&&('fixed'===N(t,'position')||A(e))}/**
	     * Provides a cross-browser way to get the screen dimensions
	     * via: http://stackoverflow.com/questions/5864467/internet-explorer-innerheight
	     *
	     * @api private
	     * @method _getWinSize
	     * @returns {Object} width and height attributes
	     */function E(){if(void 0!==window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}/**
	     * Check to see if the element is in the viewport or not
	     * http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	     *
	     * @api private
	     * @method _elementInViewport
	     * @param {Object} el
	     */function L(t){var e=t.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom+80<=window.innerHeight&&// add 80 to get the text right
e.right<=window.innerWidth}/**
	     * Add overlay layer to the page
	     *
	     * @api private
	     * @method _addOverlayLayer
	     * @param {Object} targetElm
	     */function H(t){var e=document.createElement('div'),n='',o=this;//set css class name
//check if the target element is body, we should calculate the size of overlay layer in a better way
if(e.className='introjs-overlay',!t.tagName||'body'===t.tagName.toLowerCase())n+='top: 0;bottom: 0; left: 0;right: 0;position: fixed;',e.style.cssText=n;else{//set overlay layer position
var i=J(t);i&&(n+='width: '+i.width+'px; height:'+i.height+'px; top:'+i.top+'px;left: '+i.left+'px;',e.style.cssText=n)}return t.appendChild(e),e.onclick=function(){!0===o._options.exitOnOverlayClick&&c.call(o,t)},window.setTimeout(function(){n+='opacity: '+o._options.overlayOpacity.toString()+';',e.style.cssText=n},10),!0}/**
	     * Removes open hint (tooltip hint)
	     *
	     * @api private
	     * @method _removeHintTooltip
	     */function T(){var t=document.querySelector('.introjs-hintReference');if(t){var e=t.getAttribute('data-step');return t.parentNode.removeChild(t),e}}/**
	     * Start parsing hint items
	     *
	     * @api private
	     * @param {Object} targetElm
	     * @method _startHint
	     */function O(t){if(this._introItems=[],this._options.hints)v(this._options.hints,function(t){var e=r(t);'string'==typeof e.element&&(e.element=document.querySelector(e.element)),e.hintPosition=e.hintPosition||this._options.hintPosition,e.hintAnimation=e.hintAnimation||this._options.hintAnimation,null!==e.element&&this._introItems.push(e)}.bind(this));else{var e=t.querySelectorAll('*[data-hint]');if(!e||!e.length)return!1;//first add intro items with data-step
v(e,function(t){// hint animation
var e=t.getAttribute('data-hintanimation');e=e?'true'===e:this._options.hintAnimation,this._introItems.push({element:t,hint:t.getAttribute('data-hint'),hintPosition:t.getAttribute('data-hintposition')||this._options.hintPosition,hintAnimation:e,tooltipClass:t.getAttribute('data-tooltipclass'),position:t.getAttribute('data-position')||this._options.tooltipPosition})}.bind(this))}D.call(this),Z.on(document,'click',T,this,!1),Z.on(window,'resize',P,this,!0)}/**
	     * Re-aligns all hint elements
	     *
	     * @api private
	     * @method _reAlignHints
	     */function P(){v(this._introItems,function(t){'undefined'==typeof t.targetElement||V.call(this,t.hintPosition,t.element,t.targetElement)}.bind(this))}/**
	    * Get a queryselector within the hint wrapper
	    *
	    * @param {String} selector
	    * @return {NodeList|Array}
	    */function q(t){var e=document.querySelector('.introjs-hints');return e?e.querySelectorAll(t):[]}/**
	     * Hide a hint
	     *
	     * @api private
	     * @method _hideHint
	     */function B(t){var e=q('.introjs-hint[data-step="'+t+'"]')[0];T.call(this),e&&k(e,'introjs-hidehint'),'undefined'!=typeof this._hintCloseCallback&&this._hintCloseCallback.call(this,t)}/**
	     * Hide all hints
	     *
	     * @api private
	     * @method _hideHints
	     */function M(){var t=q('.introjs-hint');v(t,function(t){B.call(this,t.getAttribute('data-step'))}.bind(this))}/**
	     * Show all hints
	     *
	     * @api private
	     * @method _showHints
	     */function $(){var t=q('.introjs-hint');t&&t.length?v(t,function(t){F.call(this,t.getAttribute('data-step'))}.bind(this)):O.call(this,this._targetElement)}/**
	     * Show a hint
	     *
	     * @api private
	     * @method _showHint
	     */function F(t){var e=q('.introjs-hint[data-step="'+t+'"]')[0];e&&I(e,/introjs-hidehint/g)}/**
	     * Removes all hint elements on the page
	     * Useful when you want to destroy the elements and add them again (e.g. a modal or popup)
	     *
	     * @api private
	     * @method _removeHints
	     */function R(){var t=q('.introjs-hint');v(t,function(t){z.call(this,t.getAttribute('data-step'))}.bind(this))}/**
	     * Remove one single hint element from the page
	     * Useful when you want to destroy the element and add them again (e.g. a modal or popup)
	     * Use removeHints if you want to remove all elements.
	     *
	     * @api private
	     * @method _removeHint
	     */function z(t){var e=q('.introjs-hint[data-step="'+t+'"]')[0];e&&e.parentNode.removeChild(e)}/**
	     * Add all available hints to the page
	     *
	     * @api private
	     * @method _addHints
	     */function D(){var t=this,e=document.querySelector('.introjs-hints');null===e&&(e=document.createElement('div'),e.className='introjs-hints');/**
	      * Returns an event handler unique to the hint iteration
	      *
	      * @param {Integer} i
	      * @return {Function}
	      */var n=function(n){return function(o){var e=o?o:window.event;e.stopPropagation&&e.stopPropagation(),null!==e.cancelBubble&&(e.cancelBubble=!0),W.call(t,n)}};v(this._introItems,function(t,o){// avoid append a hint twice
if(!document.querySelector('.introjs-hint[data-step="'+o+'"]')){var i=document.createElement('a');C(i),i.onclick=n(o),i.className='introjs-hint',t.hintAnimation||k(i,'introjs-hint-no-anim'),A(t.element)&&k(i,'introjs-fixedhint');var r=document.createElement('div');r.className='introjs-hint-dot';var l=document.createElement('div');l.className='introjs-hint-pulse',i.appendChild(r),i.appendChild(l),i.setAttribute('data-step',o),t.targetElement=t.element,t.element=i,V.call(this,t.hintPosition,i,t.targetElement),e.appendChild(i)}}.bind(this)),document.body.appendChild(e),'undefined'!=typeof this._hintsAddedCallback&&this._hintsAddedCallback.call(this)}/**
	     * Aligns hint position
	     *
	     * @api private
	     * @method _alignHintPosition
	     * @param {String} position
	     * @param {Object} hint
	     * @param {Object} element
	     */function V(t,e,n){// get/calculate offset of target element
var o=J.call(this,n);// align the hint element
switch(t){default:case'top-left':e.style.left=o.left+'px',e.style.top=o.top+'px';break;case'top-right':e.style.left=o.left+o.width-20+'px',e.style.top=o.top+'px';break;case'bottom-left':e.style.left=o.left+'px',e.style.top=o.top+o.height-20+'px';break;case'bottom-right':e.style.left=o.left+o.width-20+'px',e.style.top=o.top+o.height-20+'px';break;case'middle-left':e.style.left=o.left+'px',e.style.top=o.top+(o.height-20)/2+'px';break;case'middle-right':e.style.left=o.left+o.width-20+'px',e.style.top=o.top+(o.height-20)/2+'px';break;case'middle-middle':e.style.left=o.left+(o.width-20)/2+'px',e.style.top=o.top+(o.height-20)/2+'px';break;case'bottom-middle':e.style.left=o.left+(o.width-20)/2+'px',e.style.top=o.top+o.height-20+'px';break;case'top-middle':e.style.left=o.left+(o.width-20)/2+'px',e.style.top=o.top+'px';}}/**
	     * Triggers when user clicks on the hint element
	     *
	     * @api private
	     * @method _showHintDialog
	     * @param {Number} stepId
	     */function W(t){var e=document.querySelector('.introjs-hint[data-step="'+t+'"]'),n=this._introItems[t];'undefined'!=typeof this._hintClickCallback&&this._hintClickCallback.call(this,e,n,t);// remove all open tooltips
var o=T.call(this);// to toggle the tooltip
if(parseInt(o,10)!==t){var i=document.createElement('div'),r=document.createElement('div'),l=document.createElement('div'),s=document.createElement('div');i.className='introjs-tooltip',i.onclick=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0},r.className='introjs-tooltiptext';var a=document.createElement('p');a.innerHTML=n.hint;var d=document.createElement('a');d.className=this._options.buttonClass,d.setAttribute('role','button'),d.innerHTML=this._options.hintButtonLabel,d.onclick=B.bind(this,t),r.appendChild(a),r.appendChild(d),l.className='introjs-arrow',i.appendChild(l),i.appendChild(r),this._currentStep=e.getAttribute('data-step'),s.className='introjs-tooltipReferenceLayer introjs-hintReference',s.setAttribute('data-step',e.getAttribute('data-step')),y.call(this,s),s.appendChild(i),document.body.appendChild(s),h.call(this,e,i,l,null,!0)}}/**
	     * Get an element position on the page
	     * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
	     *
	     * @api private
	     * @method _getOffset
	     * @param {Object} element
	     * @returns Element's position info
	     */function J(t){var e=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||e.scrollTop,i=window.pageXOffset||n.scrollLeft||e.scrollLeft,r=t.getBoundingClientRect();return{top:r.top+o,width:r.width,height:r.height,left:r.left+i}}/**
	    * Find the nearest scrollable parent
	    * copied from https://stackoverflow.com/questions/35939886/find-first-scrollable-parent
	    *
	    * @param Element element
	    * @return Element
	    */function Q(t){var e=window.getComputedStyle(t),n='absolute'===e.position,o=/(auto|scroll)/;if('fixed'===e.position)return document.body;for(var i=t;i=i.parentElement;)if((e=window.getComputedStyle(i),!(n&&'static'===e.position))&&o.test(e.overflow+e.overflowY+e.overflowX))return i;return document.body}/**
	    * scroll a scrollable element to a child element
	    *
	    * @param Element parent
	    * @param Element element
	    * @return Null
	    */function Y(t,e){t.scrollTop=e.offsetTop-t.offsetTop}/**
	     * Gets the current progress percentage
	     *
	     * @api private
	     * @method _getProgress
	     * @returns current progress percentage
	     */function X(){// Steps are 0 indexed
var t=parseInt(this._currentStep+1,10);return 100*(t/this._introItems.length)}/**
	     * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
	     * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
	     *
	     * @param obj1
	     * @param obj2
	     * @returns obj3 a new object based on obj1 and obj2
	     */function G(t,e){var n,o={};for(n in t)o[n]=t[n];for(n in e)o[n]=e[n];return o}//Default config/variables
var U=function(){var t={};return function(e,n){return n=n||'introjs-stamp',t[n]=t[n]||0,void 0===e[n]&&(e[n]=t[n]++),e[n]}}(),Z=function(){return new function(){/**
	        * Gets a unique ID for an event listener
	        *
	        * @param Object obj
	        * @param String type        event type
	        * @param Function listener
	        * @param Object context
	        * @return String
	        */this._id=function(t,e,n,o){return e+U(n)+(o?'_'+U(o):'')},this.on=function(t,e,n,o,i){var r=this._id.apply(this,arguments),l=function(i){return n.call(o||t,i||window.event)};'addEventListener'in t?t.addEventListener(e,l,i):'attachEvent'in t&&t.attachEvent('on'+e,l),t.introjs_event=t.introjs_event||{},t.introjs_event[r]=l},this.off=function(t,e,n,o,i){var r=this._id.apply(this,arguments),l=t.introjs_event&&t.introjs_event[r];l&&('removeEventListener'in t?t.removeEventListener(e,l,i):'detachEvent'in t&&t.detachEvent('on'+e,l),t.introjs_event[r]=null)}}}(),K=function e(o){var i;if('object'===('undefined'==typeof o?'undefined':n(o)))i=new t(o);else if('string'==typeof o){//select the target element with query selector
var r=document.querySelector(o);if(r)i=new t(r);else throw new Error('There is no element with given selector.')}else i=new t(document.body);// add instance to list of _instances
// passing group to _stamp to increment
// from 0 onward somewhat reliably
return e.instances[U(i,'introjs-instance')]=i,i};/**
	    * DOMEvent Handles all DOM events
	    *
	    * methods:
	    *
	    * on - add event handler
	    * off - remove event
	    *//**
	     * Current IntroJs version
	     *
	     * @property version
	     * @type String
	     */return K.version='2.9.3',K.instances={},K.fn=t.prototype={clone:function(){return new t(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){return this._options=G(this._options,t),this},start:function(t){return e.call(this,this._targetElement,t),this},goToStep:function(t){return l.call(this,t),this},addStep:function(t){return this._options.steps||(this._options.steps=[]),this._options.steps.push(t),this},addSteps:function(t){if(t.length){for(var e=0;e<t.length;e++)this.addStep(t[e]);return this}},goToStepNumber:function(t){return s.call(this,t),this},nextStep:function(){return a.call(this),this},previousStep:function(){return d.call(this),this},exit:function(t){return c.call(this,this._targetElement,t),this},refresh:function(){return p.call(this),this},onbeforechange:function(t){if('function'==typeof t)this._introBeforeChangeCallback=t;else throw new Error('Provided callback for onbeforechange was not a function');return this},onchange:function(t){if('function'==typeof t)this._introChangeCallback=t;else throw new Error('Provided callback for onchange was not a function.');return this},onafterchange:function(t){if('function'==typeof t)this._introAfterChangeCallback=t;else throw new Error('Provided callback for onafterchange was not a function');return this},oncomplete:function(t){if('function'==typeof t)this._introCompleteCallback=t;else throw new Error('Provided callback for oncomplete was not a function.');return this},onhintsadded:function(t){if('function'==typeof t)this._hintsAddedCallback=t;else throw new Error('Provided callback for onhintsadded was not a function.');return this},onhintclick:function(t){if('function'==typeof t)this._hintClickCallback=t;else throw new Error('Provided callback for onhintclick was not a function.');return this},onhintclose:function(t){if('function'==typeof t)this._hintCloseCallback=t;else throw new Error('Provided callback for onhintclose was not a function.');return this},onexit:function(t){if('function'==typeof t)this._introExitCallback=t;else throw new Error('Provided callback for onexit was not a function.');return this},onskip:function(t){if('function'==typeof t)this._introSkipCallback=t;else throw new Error('Provided callback for onskip was not a function.');return this},onbeforeexit:function(t){if('function'==typeof t)this._introBeforeExitCallback=t;else throw new Error('Provided callback for onbeforeexit was not a function.');return this},addHints:function(){return O.call(this,this._targetElement),this},hideHint:function(t){return B.call(this,t),this},hideHints:function(){return M.call(this),this},showHint:function(t){return F.call(this,t),this},showHints:function(){return $.call(this),this},removeHints:function(){return R.call(this),this},removeHint:function(t){return z.call(this,t),this},showHintDialog:function(t){return W.call(this,t),this}},K})}),i=o.introJs,r=t(function(t){(function(e,n){t.exports=n(window.angular,o)})('undefined'==typeof self?e:self,function(t,e){var n={open:'open',closed:'closed'},o={},i=function(){function i(){this.intro=e()}return i.prototype.addListener=function(e,n){t.isFunction(n)&&(o[e]=n)},i.prototype.removeListener=function(t){delete o[t]},i.prototype.notifyListeners=function(e){for(var n in o)o.hasOwnProperty(n)&&t.isFunction(o[n])&&o[n](e)},i.prototype.setOptions=function(t){return this.intro.setOptions(t)},i.prototype.start=function(t){return'number'==typeof t?this.intro.goToStep(t).start():this.intro.start(),this.notifyListeners(n.open),this.intro},i.prototype.exit=function(){return this.notifyListeners(n.closed),this.intro.exit()},i.prototype.clear=function(o){return'undefined'!=typeof this.intro&&this.intro.exit(),this.intro=e(),this.notifyListeners(n.closed),t.isFunction(o)&&o(),this.intro},i.prototype.goToStepNumber=function(t){return this.intro.goToStepNumber(t)},i.prototype.addHints=function(){return this.intro.addHints()},i.prototype.showHint=function(t){return this.intro.showHint(t)},i.prototype.showHints=function(){return this.intro.showHints()},i.prototype.hideHint=function(t){return this.intro.hideHint(t)},i.prototype.hideHints=function(){return this.intro.hideHints()},i.prototype.removeHint=function(t){return this.intro.removeHint(t)},i.prototype.removeHints=function(){return this.intro.removeHints()},i.prototype.previous=function(){return this.notifyListeners(n.open),this.intro.previousStep()},i.prototype.next=function(){return this.notifyListeners(n.open),this.intro.nextStep()},i.prototype.refresh=function(){return this.intro.refresh()},i.prototype.onComplete=function(e){var o=this;return this.intro.oncomplete(function(){t.isFunction(e)&&e(),o.notifyListeners(n.closed)})},i.prototype.onExit=function(e){var o=this;return this.intro.onexit(function(){o.notifyListeners(n.closed),t.isFunction(e)&&e()})},i.prototype.onBeforeChange=function(e){return this.intro.onbeforechange(function(n){t.isFunction(e)&&e(n)})},i.prototype.onChange=function(e){return this.intro.onchange(function(n){t.isFunction(e)&&e(n)})},i.prototype.onAfterChange=function(e){return this.intro.onafterchange(function(n){t.isFunction(e)&&e(n)})},i.prototype.onHintClick=function(e){return this.intro.onhintclick(function(){t.isFunction(e)&&e()})},i.prototype.onHintClose=function(e){return this.intro.onhintclose(function(){t.isFunction(e)&&e()})},i.prototype.onHintsAdded=function(e){return this.intro.onhintclose(function(){t.isFunction(e)&&e()})},i}(),r=function(){function e(e,n){var o=this;this.restrict='A',this.scope={ngIntroMethod:'=',ngIntroExitMethod:'=?',ngIntroNextMethod:'=?',ngIntroPreviousMethod:'=?',ngIntroRefreshMethod:'=?',ngIntroOptions:'=',ngIntroOncomplete:'=',ngIntroOnexit:'=',ngIntroOnchange:'=',ngIntroOnbeforechange:'=',ngIntroOnafterchange:'=',ngIntroAutostart:'=',ngIntroAutorefresh:'=',ngIntroHintsMethod:'=?',ngIntroOnhintsadded:'=',ngIntroOnhintclick:'=?',ngIntroOnhintclose:'=?',ngIntroShowHint:'=?',ngIntroShowHints:'=?',ngIntroHideHint:'=?',ngIntroHideHints:'=?'},this.destroy=[],this.link=function(i){i.ngIntroOncomplete&&e.onComplete(i.ngIntroOncomplete),i.ngIntroOnexit&&e.onExit(i.ngIntroOnexit),i.ngIntroOnbeforechange&&e.onBeforeChange(i.ngIntroOnbeforechange),i.ngIntroOnchange&&e.onChange(i.ngIntroOnchange),i.ngIntroOnafterchange&&e.onAfterChange(i.ngIntroOnafterchange),i.ngIntroMethod=function(t){e.setOptions(i.ngIntroOptions),e.start(t)},i.ngIntroHintsMethod=function(t){e.setOptions(i.ngIntroOptions),e.start(t),i.ngIntroOnhintsadded&&e.onHintsAdded(i.ngIntroOnbeforechange),i.ngIntroOnhintclick&&e.onHintClick(i.ngIntroOnbeforechange),i.ngIntroOnhintclose&&e.onHintClick(i.ngIntroOnbeforechange),e.addHints()},i.ngIntroShowHint=function(t){e.showHint(t)},i.ngIntroShowHints=function(){e.showHints()},i.ngIntroHideHint=function(t){e.hideHint(t)},i.ngIntroHideHints=function(){e.hideHints()},i.ngIntroNextMethod=function(){e.next()},i.ngIntroPreviousMethod=function(){e.previous()},i.ngIntroExitMethod=function(n){e.exit(),t.isFunction(n)&&n()},i.ngIntroRefreshMethod=function(){e.refresh()};var r=i.$watch('ngIntroAutostart',function(){i.ngIntroAutostart&&n(function(){i.ngIntroMethod()}),r()});o.destroy.push(i.$on('$locationChangeStart',function(){e.exit()})),o.destroy.push(i.$on('$locationChangeSuccess',function(){e.exit()})),i.ngIntroAutorefresh&&o.destroy.push(i.$watch(function(){e.refresh()})),o.destroy.push(i.$on('$destroy',function(){e.exit()})),i.$on('$destroy',function(){l()});var l=function(){for(var t,e=0,n=o.destroy;e<n.length;e++)t=n[e],t()}}}return e.factory=function(){var t=function(t,n){return new e(t,n)};return t.$inject=['ngIntroService','$timeout'],t},e}();t.module('angular-intro',[]).service('ngIntroService',i).directive('ngIntroOptions',r.factory()).directive('ngIntroDisableButton',['ngIntroService',function(t){var e=0;return{restrict:'A',priority:1,link:function(o,i,r){var l='disabledBtn'+e++;t.addListener(l,function(t){t===n.open?r.$set('disabled','disabled'):(delete r.disabled,i.removeAttr('disabled'))}),o.$on('$destroy',function(){t.removeListener(l)})}}}])})})})();
//# sourceMappingURL=ui-tour.js.map
