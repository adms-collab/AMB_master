'use strict';

var xmplOnReady = function() {
	var xmpControllerDriverVar = new xmpControllerDriver($('[ng-controller="XMPAnonymousPage"]'));
	xmpControllerDriverVar.ready(function() {

		xmpControllerDriverVar.scope.$parent.lifeLinkActive = "active-page";

	});
}