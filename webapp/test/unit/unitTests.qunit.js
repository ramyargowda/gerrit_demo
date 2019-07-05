/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gerrit_demo/gerrit_demo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});