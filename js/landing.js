'use strict';


$(window).resize(function() {
	resizeTiles();
});

var xmplOnReady = function() {
	var xmpControllerDriverVar = new xmpControllerDriver($("[ng-controller='XMPAnonymousPage']"));
	xmpControllerDriverVar.ready(function() {

		xmpControllerDriverVar.scope.$parent.landingLinkActive = "active-page";

		xmpControllerDriverVar.scope.$parent.tileRows = [
			{tileCols: [
				{colIdx: "0", tileName: "life"},
				{colIdx: "1", tileName: "add"},
				{colIdx: "2", tileName: "dental"}
			]},
			{tileCols: [
				{colIdx: "0", tileName: "disability"},
				{colIdx: "1", tileName: "boe"},
				{colIdx: "2", tileName: "vision"}
			]}
		];

		xmpControllerDriverVar.scope.$parent.adf_number = "ADF# D-DI-V1920.18";

		// Ugly hack to wait until tile data is loaded
		// If I had full angular control, I"d make a function that the directive itself would call
		setTimeout(function(){ resizeTiles(); }, 500);

    });
};

var resizeTiles = function() {
	var tops = $(".product-module__top");

	if ($(window).width() < 768) {
		tops.css("min-height", "initial");
		tops.find("h3").css("min-height", "initial");
		
	} else {
		var topHeightMin = 0;
		var hdrHeightMin = 0;

		for (var topIdx = 0; topIdx < tops.length; topIdx++) {
			var top = $(tops[topIdx]);

			var hdr = top.find("h3");
			var hdrHeight = hdr.outerHeight();

			if (hdrHeight > hdrHeightMin) {
				hdrHeightMin = hdrHeight;
			}
		}

		var hdrs = tops.find("h3").css("min-height", hdrHeightMin+"px");

		for (var topIdx = 0; topIdx < tops.length; topIdx++) {
			var top = $(tops[topIdx]);

			var topHeight = top.outerHeight();

			if (topHeight > topHeightMin) {
				topHeightMin = topHeight;
			}
		}

		tops.css("min-height", topHeightMin+"px");
	}
};