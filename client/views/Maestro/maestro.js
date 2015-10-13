Template.pantallaMaestro.onRendered(function(){
	$('ul.tabs').tabs();
	$("#sAceptadasMaestro").show("slow");
	$("#sPendientesMaestro").hide();
	$("#sNuevaMaestro").hide();
});
Template.pantallaMaestro.events({
	"click #btnSolicitudesAceptadas":function(event,template){
		$("#sAceptadasMaestro").show("slow");
		$("#sPendientesMaestro").hide("slow");
		$("#sNuevaMaestro").hide("slow");
	},
	"click #btnSolicitudesPendientes":function(event,template){
		$("#sAceptadasMaestro").hide("slow");
		$("#sPendientesMaestro").show("slow");
		$("#sNuevaMaestro").hide("slow");
	},
	"click #btnNuevaSolicitud":function(event,template){
		$("#sAceptadasMaestro").hide("slow");
		$("#sPendientesMaestro").hide("slow");
		$("#sNuevaMaestro").show("slow");
	}
});