Template.pantallaLaboratorios.onRendered(function(){
	$('ul.tabs').tabs();
	$("#solicitudesPendientes").show("slow");
	$("#pantallaInventario").show("slow");
	$("#altaArticulos").hide();
	$("#bajaArticulos").hide();
	$("#peticionesPendientes").hide();
	$("#peticionesArticulos").hide();
	$("#sPendientesLab").show("slow");
	$("#sAceptadasLab").hide();
});
Template.pantallaLaboratorios.events({
	"click #btnPendientes":function(event,Template){
		$("#solicitudesPendientes").show("slow");
		$("#solicitudesEnProceso").hide("slow");
	},
	"click #btnEnProceso":function(event,Template){
		$("#solicitudesPendientes").hide("slow");
		$("#solicitudesEnProceso").show("slow");
	},
	"click #btnArticulos": function(event, Template){
		$("#pantallaInventario").show("slow");
		$("#altaArticulos").hide();
		$("#bajaArticulos").hide();
		$("#peticionesPendientes").hide();
		$("#peticionesArticulos").hide();
	},
	"click #btnAlta": function(event, Template){
		$("#pantallaInventario").hide();
		$("#altaArticulos").show("slow");
		$("#bajaArticulos").hide();
		$("#peticionesPendientes").hide();
		$("#peticionesArticulos").hide();
	},
	"click #btnBaja": function(event, Template){
		$("#pantallaInventario").hide();
		$("#altaArticulos").hide();
		$("#bajaArticulos").show("slow");
		$("#peticionesPendientes").hide();
		$("#peticionesArticulos").hide();
	},
	"click #btnPeticionesPendientes": function(event, Template){
		$("#pantallaInventario").hide();
		$("#altaArticulos").hide();
		$("#bajaArticulos").hide();
		$("#peticionesPendientes").show("slow");
		$("#peticionesArticulos").hide();
	},
	"click #btnPeticiónArticulo": function(event, Template){
		$("#pantallaInventario").hide();
		$("#altaArticulos").hide();
		$("#bajaArticulos").hide();
		$("#peticionesPendientes").hide();
		$("#peticionesArticulos").show("slow");
	},
	"click #btnPendientesLab": function(event,Template){
		$("#sPendientesLab").show("slow");
		$("#sAceptadasLab").hide();
	},
	"click #btnAceptadasLab": function(event, Template){
		$("#sPendientesLab").hide();
		$("#sAceptadasLab").show("slow");
	},
	"click #btnReporteLabs": function(event, Template){
		$("#reporteLaboratorios").show("slow");
	}
});