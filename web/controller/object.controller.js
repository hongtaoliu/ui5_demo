sap.ui.define([
	"sap/ui/model/json/JSONModel", 
	"sap/ui/core/mvc/Controller"
], function (JSONModel, Controller) {
	"use strict";

	return Controller.extend("tony_01.controller.object", {
		onInit: function () {
			var oJsonModel = new JSONModel("data/employee.json");

			this.getView().setModel(oJsonModel, "ObjectPageModel");
		}
	});
}, true);
