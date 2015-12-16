Template.editarSolicitudLab.events({
	"click #btnCancelarEdicionSolicitud":function(event,Template){
		$("#editarSolicitudLab").hide("slow");
		$("#solicitudesPendientesLab").show("slow");
		$("#etiquetaPendientes").show("slow");
	}
});