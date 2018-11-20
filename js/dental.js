'use strict';

var xmplOnReady = function() {
	var xmpControllerDriverVar = new xmpControllerDriver($('[ng-controller="XMPAnonymousPage"]'));
	xmpControllerDriverVar.ready(function() {

		xmpControllerDriverVar.scope.$parent.dentalLinkActive = "active-page";
		xmpControllerDriverVar.scope.$parent.adf_number = "ADF# D1923.18";

	});
}