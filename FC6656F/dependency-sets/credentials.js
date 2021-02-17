(function(){'use strict';/*@ngInject*/function a(a){/* ------------------------ Private Function Section Start ------------------------ *//**
	  * Tell if the credential is expiring in next 30 days
	  *
	  * @param {any} credential Any credential to calculate the status.
	  * @returns
	  *//**
	  * Create an object that have labels for the dates
	  *
	  * @param {object} credential Credential object that needs to be copied.
	  * @param {object} object object that needs to be applied on the copy.
	  * @returns
	  */function b(a){if(!a._issuedReason)throw new TypeError('_issuedReason is a required property');if(!['initial','renewal','inprogress'].includes(a._issuedReason))throw new Error('Only Issued reasons supported are "Initial" or "Renewal" or "In Progress" but we received '+a._issuedReason)}/**
	  * Tell if the credential is expiring in next 30 days
	  *
	  * @param {any} credential Any credential to calculate the status.
	  * @returns
	  *//**
	  * Get the status of the given credential
	  *
	  * @param {any} credential Any credential to calculate the status.
	  * @returns
	  */function c(c,d){if(!d)throw'asOf is a required moment object.';// Has to be an initial or a renewal to be active
if(b(c),!['initial','renewal'].includes(c._issuedReason))return!1;if(!c._expirationDay)throw new TypeError('credential._expirationDay is required');return function(){return a(c._expirationDay).isSameOrAfter(d)}()}function d(b,c){if(!b._stateStartedDay)throw new TypeError('credential._stateStartedDay is required');if(!b._expirationDay)throw new TypeError('credential._expirationDay is required');return a(b._stateStartedDay).isValid()&&a(b._expirationDay).isValid()&&a(b._expirationDay).isBefore(c)}function e(a){if(!a._stateStartedDay)throw new TypeError('credential._stateStartedDay is required');return b(a),'inprogress'===a._issuedReason}/* ------------------------ Private Function Section End ------------------------ */// #-- END Service (ssCredentialBusinessEngineSvc) --# //
// #-------------------------------------------------# //
// #-------------------------------------------------# //
// #---- Service (ssCredentialBusinessEngineSvc) ----# //
var f={ACTIVE:'active',NOT_ACTIVE:'notActive',IN_PROGRESS:'inprogress',CREDENTIAL_NEW:'initial',CREDENTIAL_RENEWED:'renewal',CREDENTIAL_INPROGRESS:'inprogress',// for backwards compatibility
CREDENTIAL_IN_PROGRESS:'inprogress',// use this one going forward
CERTIFICATE_LICENSE:'0',CLEARANCES:'1',DRIVER_LICENSE:'2',OTHERS:'3',STATE_NATIONAL:'0',DISTRICT_CUSTOM:'1'},g=[{value:'active',label:'Active'},{value:'notActive',label:'Not Active (Expired)'},{value:'inprogress',label:'In Progress - State Approved Education Program'}];// External service API
return{credentialConstants:f,allCredentialStatuses:g,getCredentialStatus:function(f,h){if(!h)throw new Error('asOf is a required moment object.');if(!f)throw new Error('Credential object is not Provided for status computation.');if(b(f),f._stateStartedDay&&!f._issuedReason)throw new Error('Issued reason cannot be null with stateStartedDay date provided.');if(a(f._stateStartedDay).isAfter(a(f._expirationDay)))throw new Error('Credential expiration date cannot be before issue date.');if(c(f,h))return g.find(function(a){return'active'===a.value});if(d(f,h))return g.find(function(a){return'notActive'===a.value});if(e(f))return g.find(function(a){return'inprogress'===a.value});throw new Error('Credential metadata does not fit any status criteria')},isExpiring:function(b,d){if(!d)throw'asOf is a required moment object.';if(c(b,d)){var e=a(b._expirationDay);return 30>=e.diff(d,'days')}return!1},isExpired:function(b,c){if(!c)throw'asOf is a required moment object.';var d=a(b._expirationDay);return c.isAfter(d)},updatedCredentialState:function(a,b){return Object.assign({},a,b)},issuedReasonByCredentialStatus:function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];if(a===f.IN_PROGRESS&&b)throw'Renewal should not be true when credential is in Progress';if(![f.ACTIVE,f.NOT_ACTIVE,f.IN_PROGRESS].includes(a))throw'Invalid credential status';return a===f.IN_PROGRESS?f.CREDENTIAL_IN_PROGRESS:b?f.CREDENTIAL_RENEWED:f.CREDENTIAL_NEW},isVerifierValid:function(a,b){return!(null!=a._id)||a.verifier&&a.verifier.employeeId===b;// Credential is new and we don't care
},filterCredentialList:function(a){var c=function(c,a){return new Date(a)-new Date(c)},b=a.slice().sort(function(d,a){return c(d._stateStartedDay,a._stateStartedDay)}),d=b.reduce(function(a,b){var c=b._credential.id;return b._subjects&&b._subjects.length&&(c=c+'_'+b._subjects.map(function(a){return a.id}).sort().join('_')),null==a.tracker[c]?(a.tracker[c]=!0,a.recent.push(b)):a.archive.push(b),a},{tracker:{},recent:[],archive:[]}),e=d.recent,f=d.archive;return{recent:e.sort(function(d,a){return c(d._createdUtc,a._createdUtc)}),archive:f.sort(function(d,a){return c(d._createdUtc,a._createdUtc)})}}}}/*@ngInject*/function b(a,b,c,d,e){// #---------------------------------------------# //
// #---- Service (ssCredentialDataAccessSvc) ----# //
function f(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return b.queryCredentials(a)}function g(){return b.queryCredentialTypes()}function h(a){var c=d.getOrgIdSync(),e=a===v.DISTRICT_CUSTOM,f={"sort[name]":'asc',"filter[organizationid]":e?''+c:null};return b.queryIssuers(f)}function i(a,c){var e=d.getOrgIdSync(),f=c===v.DISTRICT_CUSTOM,g={"filter[credentialtypeid]":''+a,"sort[name]":'asc',"filter[organizationid]":f?''+e:null};return b.queryIssuers(g)}function j(a){return b.queryCredentials({"filter[issuerid]":''+a,"sort[name]":'asc'})}function k(a){return b.querySubjects({"filter[issuerid]":''+a,"sort[name]":'asc'})}function l(a){return b.queryEmployeeCredentials({employeeId:a})}function m(a,c){var d=u(c);return b.addEmployeeCredential({employeeId:a.id},d)}function n(a,c){var d=u(c);return b.patchEmployeeCredential({employeeId:a.id,credentialId:d.id},d)}function o(a,c){return b.getEmployeeCredential({employeeId:a.id,credentialId:c.id})}function p(a,b){return c.getFileUrlById({id:b,fileId:a})}function q(a,c){return b.addFileRecord({employeeId:a},{filename:c})}function r(a,c,d){return b.uploadFileRecord(a,c,d)}function s(a,c,d){return b.associateFile({employeeId:a,credentialId:c},d)}function t(a,c,d){return b.deleteFile({fileId:d.id,employeeId:a,credentialId:c})}function u(a){var b={};return Object.keys(a).forEach(function(c){if(c.startsWith('_')){var d=c.substring(1,c.length);b[d]=a[c]}}),b}// External service API
/**
	  * Get a specific Credential by an ID
	  *
	  * @param {any} id The ID of the credential to retrieve
	  * @returns {object} The credential object
	  *//**
	  * Get all credentials available to the system
	  *
	  * @returns {Array} List of Credential Objects in the system
	  *//**
	  * Get all credential types system supports
	  * @returns {Array}
	  *//**
	  * Get all Issuer Types
	  *
	  * @param {any} typeId
	  * @returns
	  *//**
	  * Get all Issuer Types given a credential Type
	  *
	  * @param {any} credentialType
	  * @param {any} typeId
	  * @returns
	  *//**
	  * Get all certificate by issuer
	  *
	  * @param {int} issuerId The issuer type to lookup all available Credentials
	  * @returns {Array} All Credentials for that issuer type
	  *//**
	  * Get the list of available Subjects based upon the given issuer Id
	  *
	  * @param {any} issuerId
	  * @returns Array of all Subjects for the given Issuer Id
	  *//**
	  * Get all available credentials for a specific employee
	  *
	  * @param {any} employeeId The GUID of an employee to get all credentials
	  * @returns {Array} of all Credentials in the system for that employee
	  */// #-- END Service (ssCredentialDataAccessSvc) --# //
// #---------------------------------------------# //
var v=e.credentialConstants;return{getMany:function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return f(a)},getById:function(){return{}},getCredentialTypes:function(){return g()},getIssuers:function(a){return h(a)},getIssuerById:function(a){return b.queryIssuerById(a)},getIssuersByCredentialType:function(a,b){if(null==a)throw'Credential type not provided.';return i(a,b)},getCredentialsByIssuer:function(a){if(!a)throw'Issuer Id is not provided.';return j(a)},getCredentialById:function(a){// OrgId will be sent up with the header.
return b.queryCredentialById(a)},getSubjectsByIssuer:function(a){if(!a)throw'Issuer Id is not provided.';return k(a)},getCredentialsByEmployee:function(a){if(!a)throw'Invalid employeeId. Cannot retrieve credentials.';return l(a)},addEmployeeCredential:function(a,b){if(!a)throw'Employee is not provided to whom the credential will be created';if(!b)throw'Credential is not provided to be created';return m(a,b)},patchEmployeeCredential:function(a,b){if(!a)throw'Employee is not provided to whom the credential will be created';if(!b)throw'Credential is not provided to be created';return n(a,b)},getEmployeeCredentialById:function(a,b){if(!a)throw'Employee is not provided to whom the credential will be created';if(!b)throw'Credential is not provided to be created';return o(a,b)},downloadFile:function(a,b){if(!a)throw'File id is not provided';if(!b)throw'Employee id is not provided';return p(a,b)},uploadFile:function(b,c){if(!c)throw'File is not provided for Upload';if(!b)throw'Employee id is not provided';return a(/*#__PURE__*/regeneratorRuntime.mark(function a(){var d,e;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,q(b,c.name);case 3:return d=a.sent,a.next=6,r(b,d.id,c);case 6:return e=a.sent,a.abrupt('return',e);case 10:throw a.prev=10,a.t0=a['catch'](0),new Error(a.t0);case 13:case'end':return a.stop();}},a,this,[[0,10]])}))()},associateFile:function(a,b,c){if(!c)throw'File is not provided for Upload';if(!a)throw'Employee id is not provided';if(!b)throw'Employee Credential is not provided';return s(a,b,c)},deleteFile:function(a,b,c){if(!c)throw'File is not provided for Upload';if(!a)throw'Employee id is not provided';if(!b)throw'Employee Credential is not provided';return t(a,b,c)},downloadCredentialsCsv:function(a){return b.downloadCredentialsCsv(a)},downloadSubjectsCsv:function(a){return b.downloadSubjectsCsv(a)},downloadEmployeeCredentialsCsv:function(a){return b.downloadEmployeeCredentialsReportCsv(a)}}}/*@ngInject*/function c(a){function b(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];return{issuer:a?a._credential.issuer:null,credential:a?a._credential:null,credentialTypeId:a?a._credential.credentialTypeId.toString():null,verifier:a?a._verifier:null,files:a&&!b?[].concat(e(a._files)):[],id:a&&!b?a.id:null,_id:a&&!b?a.id:null,_credentialId:a?a._credential.id:null,_credentialNumber:a?a._credentialNumber:null,_stateStartedDay:a&&!b?a._stateStartedDay:'',_issuedReason:a?a._issuedReason:null,_expirationDay:a&&!b?a._expirationDay:'',_isGrantedForLife:!!a&&a._isGrantedForLife,_verifiedDay:a&&a._verifier?a._verifier.verifiedDay:'',_subjectIds:a?a._subjects.map(function(a){return a.id}):[]}}// #------------------------------------------# //
// #---- Service (ssCredentialFactorySvc) ----# //
// #-- END Service (ssCredentialFactorySvc) --# //
// #------------------------------------------# //
var c=a.credentialConstants;// External service API
return{create:function(a){return b(a,!1)},renew:function(a){var d=b(a,!0);return d._issuedReason=c.CREDENTIAL_RENEWED,d},makeActive:function(a){var d=b(a,!0);return d._issuedReason=c.CREDENTIAL_NEW,d}}}/**
	 * ssCredentialViewModelFactorySvc
	 *
	 * A factory that creates a viewModel for binding to the Employee Module UI for an employee record
	 *
	 * @returns Create()
	 */function d(a,b){// #---------------------------------------------------# //
// #---- Service (ssCredentialViewModelFactorySvc) ----# //
// #-- END Service (ssCredentialViewModelFactorySvc) --# //
// #---------------------------------------------------# //
/**
	  * Create credential types with isDisabled property on it.
	  *
	  * @param {number} typeId Type id whether it is State&National or Custom
	  * @param {array} credentialTypes All credential types from the server.
	  * @returns
	  *//**
	  * Create an object that have credential labels properties on it
	  *
	  * @param {array} credentialType Credential type e.g. Certificate / License, Clearances, Driver's License etc
	  * @returns
	  *//**
	  * Create an object that have labels for the dates
	  *
	  * @param {id} credentialStatus Credential Status e.g. Active, Not Active or In Progress.
	  * @returns
	  *//**
	  * Create an object that have labels for the dates
	  *
	  * @param {object} credential Credential object that needs to be copied.
	  * @param {object} object object that needs to be applied on the copy.
	  * @returns
	  *//**
	  * Sets the maxDate for the Issue Date date picker.
	  * @param {String} d
	  */var c=a.credentialConstants,d={data:{},// The JSONApi model representing a credential
credentialTypes:[],issuers:[],credentials:[],subjects:[],dateIssuedLabel:'',dateExpirationLabel:'',getDateOptionsForIssueDate:function(a){return null==a||0===a.length?{maxDate:''}:{maxDate:new Date(a)}}/**
	  * Sets the maxDate for the Expiration Date date picker.
	  * @param {String} d
	  */,getDateOptionsForExpirationDate:function(a){return null==a||0===a.length?{minDate:''}:{minDate:new Date(a)}},getCredentialTypesByStateNationalOrCustom:function(a,b){var d={credentialTypes:b.map(function(b){return a===c.STATE_NATIONAL?Object.assign({},b,{isDisabled:b.id===c.OTHERS}):Object.assign({},b,{isDisabled:b.id!==c.OTHERS})})};return d}/**
	  * Create a new bindable view model for use on an employee record
	  *
	  * @param {any} credential Credential Object: create from JSONApi Object
	  * Credential Type: create from credential type (certificate, drivers license)
	  * @returns {object} bindable credential view model for use in the employee module
	  *//**
	  * Create an object that have credential labels properties on it
	  *
	  * @param {array} credentialType Credential type e.g. Certificate / License, Clearances, Driver's License etc
	  * @returns
	  *//**
	  * Create an object that have credential labels properties on it
	  *
	  * @param {array} credentialType Credential type e.g. Certificate / License, Clearances, Driver's License etc
	  * @returns
	  *//**
	  * Create an object that have labels for the dates
	  *
	  * @param {id} credentialStatus Credential Status e.g. Active, Not Active or In Progress.
	  * @returns
	  */,getCredentialLabelsByCredentialType:function(a){return a===c.CERTIFICATE_LICENSE?'Certificate / License':a===c.CLEARANCES?'Clearances':a===c.DRIVER_LICENSE?'Driver License':'Certificate'},getCredentialIdentifierByCredentialType:function(a){return a===c.CERTIFICATE_LICENSE?'Certification Number':a===c.CLEARANCES?'Document Number':a===c.DRIVER_LICENSE?'Driver License Number':'Certification Number'},getIssueDateLabelsByStatus:function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];if(a===c.CREDENTIAL_INPROGRESS)return'Program Started';var d=b?'Renewed':'Issued';return'Date '+d},getExpirationDateLabelsByStatus:function(a){return a===c.CREDENTIAL_INPROGRESS?'Tentative Completion':'Expiration'},getSubjectAreaLabelByCredentialType:function(a){return a===c.CLEARANCES?'Additional Information':'Subject Areas'}};// External service API
return{create:function(a){var c=Object.assign({},d);//Define ViewModel Properties
return c.data=a.id?b.create(a):a,c},renew:function(a){var c=Object.assign({},d);//Define ViewModel Properties
// renewals can never have a verifier
return c.data=b.renew(a),c.data.verifier=null,c.data._verifier=null,c.data._verifiedDay=null,c},makeActive:function(a){var c=Object.assign({},d);//Define ViewModel Properties
return c.data=b.makeActive(a),c},updatedCredentialViewModelState:function(a,b){return Object.assign({},a,b)}}}a.$inject=['moment'],angular.module('super-suit-services').factory('ssCredentialBusinessEngineSvc',a),b.$inject=['ssAsync','ssCredentialsApi','ssEmployeeApi','ssActiveUserSvc','ssCredentialBusinessEngineSvc'],angular.module('super-suit-services').factory('ssCredentialDataAccessSvc',b);var e=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)};c.$inject=['ssCredentialBusinessEngineSvc'],angular.module('super-suit-services').factory('ssCredentialFactorySvc',c),d.$inject=['ssCredentialBusinessEngineSvc','ssCredentialFactorySvc'],angular.module('super-suit-services').factory('ssCredentialViewModelFactorySvc',d)})();
//# sourceMappingURL=credentials.js.map
