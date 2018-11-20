'use strict';

var xmplOnReady = function() {
	var xmpControllerDriverVar = new xmpControllerDriver($('[ng-controller="XMPAnonymousPage"]'));
	xmpControllerDriverVar.ready(function() {

		xmpControllerDriverVar.scope.$parent.disabilityLinkActive = "active-page";
		xmpControllerDriverVar.scope.$parent.adf_number = "ADF# DI1921.18";

	});
}