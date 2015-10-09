Template.maestro.onRendered(function(){
	$('ul.tabs').tabs();
	$("#sAceptadasMaestro").show("slow");
});
Template.maestro.events({
	"click #btnSolicitudesAceptadas":function(event,Template){
		$("#sAceptadasMaestro").show("slow");
		$("#sPendientesMaestro").hide("slow");
		$("#sNuevaMaestro").hide("slow");
	},
	"click #btnSolicitudesPendientes":function(event,Template){
		$("#sAceptadasMaestro").hide("slow");
		$("#sPendientesMaestro").show("slow");
		$("#sNuevaMaestro").hide("slow");
	},
	"click #btnNuevaSolicitud":function(event,Template){
		$("#sAceptadasMaestro").hide("slow");
		$("#sPendientesMaestro").hide("slow");
		$("#sNuevaMaestro").show("slow");
	}
});