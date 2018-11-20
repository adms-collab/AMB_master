'use strict';

$(document).ready(function() {
	var statusControllers = angular.module("globalController", [])
	.controller("GlobalController", ["$scope", function ($scope) {
		$scope.xmp = {};

		// Association Variables
 		$scope.association_name = "[association title]";
		$scope.contact_num = "[1-800-###-####]";

		// AD&D Variables
		$scope.add_val = "[AD&D]";

		$scope.add_tile1_title1 = "[Association-Specific Product Name Voluntary] ";
		$scope.add_tile1_title2 = "[and Dismemberment] ";
		$scope.add_tile1_freq = "[monthly]";
		$scope.add_tile1_freq_sp = "[Then enter your domestic partner's information for their initial monthly rate.]";
		$scope.add_tile1_freq_oth = "[Monthly]";
		$scope.add_tile1_freq_oth_val = "[00.00]";
		$scope.add_tile1_excluded_states = "[insert states]";

		// BOE Variables
		$scope.boe_val = "[Business]";

		$scope.boe_tile1_title = "[Association-Specific Product Name Standard Issue]";
		$scope.boe_tile1_freq = "[monthly]";
		$scope.boe_tile1_freq_oth = "[Monthly]";
		$scope.boe_tile1_freq_oth_val = "[00.00]";
		$scope.boe_tile1_premium_text1 = " [and gender]";
		$scope.boe_tile1_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.boe_tile1_excluded_states = "[insert states]";

		$scope.boe_tile2_title = "[Association-Specific Product Name One-Step Express]";
		$scope.boe_tile2_freq = "[monthly]";
		$scope.boe_tile2_freq_oth = "[Monthly]";
		$scope.boe_tile2_freq_oth_val = "[00.00]";
		$scope.boe_tile2_premium_text1 = " [and gender]";
		$scope.boe_tile2_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.boe_tile2_excluded_states = "[insert states]";

		$scope.boe_tile3_title = "[Association-Specific Product Name Guaranteed Issue]";
		$scope.boe_tile3_freq = "[monthly]";
		$scope.boe_tile3_freq_oth = "[Monthly]";
		$scope.boe_tile3_freq_oth_val = "[00.00]";
		$scope.boe_tile3_premium_text1 = " [and gender]";
		$scope.boe_tile3_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.boe_tile3_excluded_states = "[insert states]";

		$scope.boe_footnote2_text = "[performing your normal activities]";

		// Dental Variables
		$scope.dental_tile1_title = "[Association-Specific Product Name]";
		$scope.dental_tile1_freq = "[monthly]";
		$scope.dental_tile1_freq_oth = "[Monthly]";
		$scope.dental_tile1_freq_oth_val = "[00.00]";
		$scope.dental_tile1_excluded_states = "[insert states]";

		// Disability Variables
		$scope.disability_tile1_title1 = "[Association-Specific Product Name Standard Issue Long Term]";
		$scope.disability_tile1_title2 = "[Income] ";
		$scope.disability_tile1_include_smoker = true;
		$scope.disability_tile1_freq = "[monthly]";
		$scope.disability_tile1_opt_benefit_1 = true;
		$scope.disability_tile1_opt_benefit_2 = true;
		$scope.disability_tile1_opt_benefit_2_text = "[Optional Benefit: Work Incentive]";
		$scope.disability_tile1_opt_benefit_3 = true;
		$scope.disability_tile1_opt_benefit_4 = true;
		$scope.disability_tile1_opt_benefit_5 = true;
		$scope.disability_tile1_opt_benefit_6 = true;
		$scope.disability_tile1_opt_benefit_7 = true;
		$scope.disability_tile1_freq_oth = "[Monthly]";
		$scope.disability_tile1_freq_oth_val = "[00.00]";
		$scope.disability_tile1_premium_text1 = "[, gender and smoker status]";
		$scope.disability_tile1_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.disability_tile1_excluded_states = "[insert states]";

		$scope.disability_tile2_title1 = "[Association-Specific Product Name One-Step ExpressLong Term] ";
		$scope.disability_tile2_title2 = "[Income] ";
		$scope.disability_tile2_include_text = true;
		$scope.disability_tile2_include_smoker = true;
		$scope.disability_tile2_freq = "[monthly]";
		$scope.disability_tile2_opt_benefit_1 = true;
		$scope.disability_tile2_opt_benefit_2 = true;
		$scope.disability_tile2_opt_benefit_2_text = "[Optional Benefit: Work Incentive]";
		$scope.disability_tile2_opt_benefit_3 = true;
		$scope.disability_tile2_opt_benefit_4 = true;
		$scope.disability_tile2_opt_benefit_5 = true;
		$scope.disability_tile2_opt_benefit_6 = true;
		$scope.disability_tile2_opt_benefit_7 = true;
		$scope.disability_tile2_freq_oth = "[Monthly]";
		$scope.disability_tile2_freq_oth_val = "[00.00]";
		$scope.disability_tile2_premium_text1 = "[, gender and smoker status]";
		$scope.disability_tile2_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.disability_tile2_excluded_states = "[insert states]";

		$scope.disability_tile3_title1 = "[Association-Specific Product Name Guaranteed Issue] ";
		$scope.disability_tile3_title2 = "[Income] ";
		$scope.disability_tile3_include_text = true;
		$scope.disability_tile3_include_smoker = true;
		$scope.disability_tile3_freq = "[monthly]";
		$scope.disability_tile3_opt_benefit_1 = true;
		$scope.disability_tile3_opt_benefit_2 = true;
		$scope.disability_tile3_opt_benefit_2_text = "[Optional Benefit: Work Incentive]";
		$scope.disability_tile3_opt_benefit_3 = true;
		$scope.disability_tile3_opt_benefit_4 = true;
		$scope.disability_tile3_opt_benefit_5 = true;
		$scope.disability_tile3_opt_benefit_6 = true;
		$scope.disability_tile3_opt_benefit_7 = true;
		$scope.disability_tile3_freq_oth = "[Monthly]";
		$scope.disability_tile3_freq_oth_val = "[00.00]";
		$scope.disability_tile3_premium_text1 = "[, gender and smoker status]";
		$scope.disability_tile3_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.disability_tile3_excluded_states = "[insert states]";

		$scope.disability_include_footnote1 = true;
		$scope.disability_footnote1_text = "[1. There may be additional charges for optional benefits. Please contact the XYZ Association at 1-###-###-#### for additional details.]";

		// Life Variables
		$scope.life_tile1_title = "[Association-Specific Product Name Standard Issue Supplemental]";
		$scope.life_tile1_include_text = true;
		$scope.life_tile1_freq = "[monthly]";
		$scope.life_tile1_include_smoker = true;
		$scope.life_tile1_freq_oth = "[Monthly]";
		$scope.life_tile1_freq_oth_val = "[00.00]";
		$scope.life_tile1_premium_text1 = "[, gender and smoker status]";
		$scope.life_tile1_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.life_tile1_excluded_states = "[insert states]";

		$scope.life_tile2_title = "[Association-Specific Product Name One-Step Express Supplemental]";
		$scope.life_tile2_include_text = true;
		$scope.life_tile2_freq = "[monthly]";
		$scope.life_tile2_include_smoker = true;
		$scope.life_tile2_freq_oth = "[Monthly]";
		$scope.life_tile2_freq_oth_val = "[00.00]";
		$scope.life_tile2_premium_text1 = "[, gender and smoker status]";
		$scope.life_tile2_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.life_tile2_excluded_states = "[insert states]";

		$scope.life_tile3_title = "[Association-Specific Product Name Guaranteed Issue Supplemental]";
		$scope.life_tile3_include_text = true;
		$scope.life_tile3_freq = "[monthly]";
		$scope.life_tile3_include_smoker = true;
		$scope.life_tile3_freq_oth = "[Monthly]";
		$scope.life_tile3_freq_oth_val = "[00.00]";
		$scope.life_tile3_premium_text1 = "[, gender and smoker status]";
		$scope.life_tile3_premium_text2 = " [and it increases as you enter each new five-year age bracket]";
		$scope.life_tile3_excluded_states = "[insert states]";

		$scope.life_tile4_title = "[Association-Specific Product Name 10-Year, 20-Year or 30-Year Level] ";
		$scope.life_tile4_include_text = true;
		$scope.life_tile4_freq = "[monthly]";
		$scope.life_tile4_include_smoker = true;
		$scope.life_tile4_freq_oth = "[Monthly]";
		$scope.life_tile4_freq_oth_val = "[00.00]";
		$scope.life_tile4_premium_text = "[, gender and smoker status]";
		$scope.life_tile4_excluded_states = "[insert states]";

		$scope.life_include_footnote1 = true;
		$scope.life_footnote1_text = "[1. There may be additional charges. Please contact the XYZ Association at 1-###-###-#### for additional details.]";
		$scope.life_footnote3_text = "[performing your normal activities and actively at work]";

		// Vision Variables
		$scope.vision_tile1_title = "[Association-Specific Product Name]";
		$scope.vision_tile1_freq = "[monthly]";
		$scope.vision_tile1_freq_oth = "[Monthly]";
		$scope.vision_tile1_freq_oth_val = "[00.00]";
		$scope.vision_tile1_excluded_states = "[insert states]";

		// Disclaimer & Footer Variables
		$scope.disclaimer_group_val = "[group]";
		$scope.disclaimer_contact_num = "[1-###-###-####]";
		$scope.disclaimer_policy_append = " [/exhibits]";
		$scope.disclaimer_text = "[The association and/or the plan administrator incurs costs in connection with providing oversight and administrative support for this sponsored plan. To provide and maintain this valuable membership benefit, MetLife may compensate the association and/or the plan administrator for these and/or other costs.]";
		$scope.disclaimer_policy_num = "[######-1-G]";

	}]);

	// app
	var xmpApp = angular.module("xmp.app", [
		"globalController",
		"xmp.directives",
		"xmp.controllers",
		"xmp.services"
	]).config(["xmpResourceProvider", function(inProvider) {
		// 	xmpcfg is defined externally at the site.
		inProvider.configure({
			access:xmpcfg.access
		});
	}]);

	resizeHeader();
});

$(window).resize(function() {
	resizeHeader();
});

$(window).scroll(function() {
	resizeHeader();
});

var resizeHeader = function() {
	var pos = $(window).scrollTop();
	var wth = $(window).width();

	if (wth < 768 || pos > 7) {
		$(".global-header").addClass("global-header--minimized");
		$(".global-header__row").addClass("global-header__row--minimized");
		$(".global-header__left").addClass("global-header__left--minimized");
		$(".global-header__right").addClass("global-header__right--minimized");
		$(".global-header__logo-metlife").addClass("global-header__logo-metlife--minimized");
		$(".global-header__logo-sponsor").addClass("global-header__logo-sponsor--minimized");

		if (wth < 768) {
			$("body").css("padding-top", "90px");
		} else {
			$("body").css("padding-top", "50px");
		}
	} else {
		$("body").css("padding-top", "70px");
		$(".global-header").removeClass("global-header--minimized");
		$(".global-header__row").removeClass("global-header__row--minimized");
		$(".global-header__left").removeClass("global-header__left--minimized");
		$(".global-header__right").removeClass("global-header__right--minimized");
		$(".global-header__logo-metlife").removeClass("global-header__logo-metlife--minimized");
		$(".global-header__logo-sponsor").removeClass("global-header__logo-sponsor--minimized");
	}

};