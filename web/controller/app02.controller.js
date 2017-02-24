sap.ui.define([ 
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History"
], function(Controller, MessageToast, History) {
	"use strict";
	return Controller.extend("tony_01.controller.app02", {
		onInit : function() {
			var oModel = new sap.ui.model.json.JSONModel("data/data.json");
			this.getView().setModel(oModel);
		},

		handleTile1 : function(oEvent) {
			alert("bbb");
		},
		
		
		handleNavBack : function (evt) { 
			
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				 var router = sap.ui.core.UIComponent.getRouterFor(this);
				 router.navTo("app01");
			}
			
			
		},

		onShowHello : function() {
			MessageToast.show("Hello World 02");
		}
	});
});