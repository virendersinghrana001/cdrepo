/*global QUnit*/

sap.ui.define([
	"ns/cdappModule/controller/cdappView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("cdappView Controller");

	QUnit.test("I should test the cdappView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
