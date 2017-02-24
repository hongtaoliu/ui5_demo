sap.ui.define([ 
	"sap/ui/core/UIComponent", 
	"sap/ui/model/json/JSONModel", 
	"sap/ui/model/resource/ResourceModel" 
],

	function(UIComponent, JSONModel, ResourceModel) {
			"use strict";
			return UIComponent.extend("tony_01.Component", {
				metadata : {
 
						manifest: "json"
				},

				init : function() {
					
					// call the init function of the parent
					UIComponent.prototype.init.apply(this, arguments);
					
					var oModel = new JSONModel("data/data.json");
					this.setModel(oModel);
					
					// set i18n model on view
			         var i18nModel = new ResourceModel({
			            bundleName: "tony_01.i18n.i18n"
			         });
			         this.setModel(i18nModel, "i18n");

					// create the views based on the url/hash
				  this.getRouter().initialize();
				}
			});

});