'use strict';

var xmplOnReady = function() {
	var xmpControllerDriverVar = new xmpControllerDriver($('[ng-controller="XMPAnonymousPage"]'));
	xmpControllerDriverVar.ready(function() {

		xmpControllerDriverVar.scope.$parent.visionLinkActive = "active-page";
		xmpControllerDriverVar.scope.$parent.disclaimer_extra = "templates/vision_disclaimer_extra.html";
		xmpControllerDriverVar.scope.$parent.adf_number = "ADF# V1924.18";

	});
}