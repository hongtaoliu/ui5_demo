sap.ui.define([ 
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("tony_01.controller.app01", {
		
		
		handleTilePress : function(oEvent) {
			var oTileId = oEvent.getSource().data("myid");
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			
			if(oTileId === "tile_02"){
				 router.navTo("sessions");
			}else{
				
				 router.navTo("app02");
			}
			 
			
		},


		onShowHello : function() {
			MessageToast.show("Hello World");
		}
	});
});