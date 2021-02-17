(function(){'use strict';// #---------------------------------# //
// #---- Helper (ssDateByOrgHlp) ----# //
/*@ngInject*/function a(a,b){//#endregion -- The Reveal
//#region -- methods for translating from the server
/**
	  * Creates a Moment object that can format/present the time in a way that will look correct to the users of the provided org
	  * @param {String} serverTimeStr a date time string expressed in ISO format
	  * @param {Object} org the organization to which the date will be relative to
	  * @returns {Moment} the Moment object that is aware of the requested timezone
	  */function c(b,c){g(b,'serverTimeStr');var d=a(b);if(!c._ianaTimeZone)throw Error('Organization does not have the TIME ZONE specified.');h(d,'serverTimeStr');var e=c._ianaTimeZone;return d.tz(e)}//#endregion -- methods for translating from the server
//#region -- methods for converting objects that are based on DATE RANGES
/**
	  * Create an ISO string for the time in which the organization's current day starts
	  * @param {Object} org the organization to which the date will be relative to
	  * @param {Boolean} asServerString if true then the result will be an ISO string, if false the result will be a Moment object
	  * @returns {String | Moment} the requested ISO string (that the server wants), or (if you request it via asServerString) a moment object for the calculated time
	  */function d(b){var c=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];i(b);var d=a.tz(b._ianaTimeZone).startOf('day');return c?d.toISOString():d}/**
	  * Create an ISO string for the time in which the organization's current day ends
	  * @param {Object} org the organization to which the date will be relative to
	  * @param {Boolean} asServerString if true then the result will be an ISO string, if false the result will be a Moment object
	  * @returns {String | Moment} the requested ISO string (that the server wants), or (if you request it via asServerString) a moment object for the calculated time
	  *//**
	  * Create an ISO string for the time in which the provided day starts in the organization's timezone
	  * @param {Moment} dayAsMoment the Moment object representing the browser DateTime to make safe relative to the org timezone
	  * @param {Object} org the organization to which the date will be relative to
	  * @returns {String} the requested ISO string (that the server wants)
	  */function e(b,c){l(c);var d=a.tz(k(b,c),c._ianaTimeZone);return d.startOf('day').toISOString()}/**
	  * Create an ISO string for the time in which the provided day ends in the organization's timezone
	  * @param {Moment} dayAsMoment the Moment object representing the browser DateTime to make safe relative to the org timezone
	  * @param {Object} org the organization to which the date will be relative to
	  * @returns {String} the requested ISO string (that the server wants)
	  *///#endregion -- methods for converting objects that are based on DATE RANGES
//#region -- date instance functions
/**
	  * Create an as of date at noon org timezone converted to UTC (1/1/2018T12:00:00) that is used for requesting effective dated objects relative to an org
	  * The general use case:
	  * 	Give me the employee directory as of 7/1/2018 for my org (EDT -4:00:00.000).
	  * 		Take 7/1/2018 >
	  * 		Set hours to 12:00:00H >
	  * 		Convert to UTC string - "7/1/2018T16:00:000">
	  * 		Return a safe date string that will be sent up as the correct date & time for the query
	  * @param {Moment} dayAsMoment the Moment object representing the browser DateTime to make safe relative to the org timezone
	  * @param {Object} org the organization to which the date will be relative to
	  * @returns {String} the requested dateTime at noon relative to the Org converted to UTC
	  */function f(b,c){var d=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],f=a(e(b,c)).add(12,'hours');return d?f.toISOString():f}/**
	  * Create a new universal instance in time that is aware of the timezone of the org.
	  * NOTE: toISOString() will still give UTC time. Only .format() will present as the org's timezone
	  * @param {object} org The organization to create a new moment relative to
	  * @returns {moment} The current instance in time with awareness of the organization's timezone
	  *///#endregion -- date instance functions
//#region -- date comparison functions
//#endregion -- date comparison functions
//#region -- Private methods
function g(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'';if('string'!=typeof a)throw TypeError(b+' must be a string with length');if(!a)throw TypeError(b+' is falsy');if(!a.endsWith('Z'))throw Error(b+' must be a valid UTC ISO format. It was: '+a)}function h(c){var d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'';if(!a.isMoment(c))throw b.error(c),new Error(d+' is not a moment object');if(!1===c._isValid)throw b.error(c),new Error(d+' is a moment object, but has an invalid date')}function i(c){var d=Math.abs;l(c);var e=a.tz.guess();// Only show this if the user's local timezone is not the timezone of the user
if(c._ianaTimeZone!==e){var f=d(a().diff(a().startOf('day'),'minutes'));60>f&&b.warn('You may experience strange results in creating the effective date since your local time is close to a day boundary.');var g=d(a().diff(a().endOf('day'),'minutes'));60>g&&b.warn('You may experience strange results in creating the effective date since your local time is close to a day boundary.')}}function j(a,b){if(l(b),a._z&&a._z.name!==b._ianaTimeZone)throw new Error('Unable to provide accurate results due to the fact that your moment input already has timezone sensitive information (zone name: '+a._z.name+') but we expected the the timezone of '+b._ianaTimeZone+' in order to provide accurate results.');var c=a.valueOf(),d=a.clone().startOf('day').valueOf(),e=a.clone().endOf('day').valueOf(),f=a.clone().tz(b._ianaTimeZone).startOf('day').valueOf(),g=a.clone().tz(b._ianaTimeZone).endOf('day').valueOf();if(c!==d&&c!==e&&c!==f&&c!==g)throw new Error('This method can only be accurate when provided a day (not a day with times). So, please consider investigating why the source of your input provided a time component. Or consider using moment.startOf(\'day\') on the input of this function.')}function k(a,b){return h(a),j(a,b),a.format('YYYY-MM-DD')}function l(a){if(!a)throw Error('org was undefined. Please provide a proper input variable.');if(!a._ianaTimeZone)throw Error('Organization does not have the ianaTimeZone specified.')}function m(a){// These arrays are created to account for the various property names across models
function b(a,b){return a.hasOwnProperty(b)?b:null}var e=a.obj,g=a.asOfDate,h=a.fromProp,i=a.toProp,j=a.type,k=a.org;if(!e)throw new Error('obj is required.');var l=b(e,h),m=b(e,i);if(!l||!m)throw new Error('your property is not supported by the '+j+' method of ssEffectiveDateHlp');var n=null==g?f(d(k),k,!1):c(g,k),o=c(e[l],k),p=c(e[m],k);return{asOf:n,fromDate:o,toDate:p}}//#endregion -- Private methods
// #-- END Helper (ssDateByOrgHlp) --# //
// #-----------------------------------------# //
// ##############################
// TIP: If you have questions about the behavior of these functions, please consult the associated unit tests for thorough examples
// ##############################
//#region -- The Reveal
return{todaysStartRelativeTo:d,todaysEndRelativeTo:function(b){var c=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];i(b);var d=a.tz(b._ianaTimeZone).endOf('day');return c?d.toISOString():d},startOfDayRelativeTo:e,endOfDayRelativeTo:function(b,c){l(c);var d=b.clone().tz(c._ianaTimeZone).endOf('day').valueOf();if(b.valueOf()===d)// Since they already have the correct relative value, just pass it back to them
return b.toISOString();var e=a.tz(k(b,c),c._ianaTimeZone);return e.endOf('day').toISOString()},utcIsoToRelativeMoment:c,isCurrent:function(a){var b=a.obj,c=a.asOfDate,d=c===void 0?null:c,e=a.fromProp,f=e===void 0?'_fromDateUtc':e,g=a.toProp,h=g===void 0?'_toDateUtc':g,i=a.org;l(i);var j=m({obj:b,asOfDate:d,fromProp:f,toProp:h,type:'isCurrent',org:i});// returns true if asOf is between the dates. Inclusive of both
return j.fromDate.isSameOrBefore(j.asOf)&&j.toDate.isSameOrAfter(j.asOf)},isInPast:function(a){var b=a.obj,c=a.asOfDate,d=c===void 0?null:c,e=a.fromProp,f=e===void 0?'_fromDateUtc':e,g=a.toProp,h=g===void 0?'_toDateUtc':g,i=a.org;l(i);var j=m({obj:b,asOfDate:d,fromProp:f,toProp:h,type:'isPast',org:i});return j.fromDate.isBefore(j.asOf)&&j.toDate.isSameOrBefore(j.asOf)},isInFuture:function(a){var b=a.obj,c=a.asOfDate,d=c===void 0?null:c,e=a.fromProp,f=e===void 0?'_fromDateUtc':e,g=a.toProp,h=g===void 0?'_toDateUtc':g,i=a.org;l(i);var j=m({obj:b,asOfDate:d,fromProp:f,toProp:h,type:'isFuture',org:i});return j.fromDate.isAfter(j.asOf)&&j.toDate.isAfter(j.asOf)},safeAsOfDateRelativeTo:f,safeNowRelativeTo:function(b){return l(b),a.tz(b._ianaTimeZone)}}}a.$inject=['moment','$log'],angular.module('super-suit-helpers').factory('ssDateByOrgHlp',a)})();
//# sourceMappingURL=effectivity.js.map
