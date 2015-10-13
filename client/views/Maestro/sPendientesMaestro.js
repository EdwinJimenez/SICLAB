Template.sPendientesMaestro.onRendered(function(){
	$("#solicitudesPendientesLab").show("slow");
});
Template.sPendientesMaestro.events({
	"click #btneditarSolicitudLab":function(event,Template){
		$("#editarSolicitudLab").show("slow");
		$("#solicitudesPendientesLab").hide("slow");
		$("#etiquetaPendientes").hide("slow");
	},
	"click #btnSolicitudesPendientes":function(event,template){
		$("#solicitudesPendientesLab").show("slow");
		$("#editarSolicitudLab").hide();
	}
});