'use strict';

var xmplOnReady = function() {
	var xmpControllerDriverVar = new xmpControllerDriver($('[ng-controller="XMPAnonymousPage"]'));
	xmpControllerDriverVar.ready(function() {

		xmpControllerDriverVar.scope.$parent.boeLinkActive = "active-page";
		xmpControllerDriverVar.scope.$parent.adf_number = "ADF# DI1922.18";

	});
}