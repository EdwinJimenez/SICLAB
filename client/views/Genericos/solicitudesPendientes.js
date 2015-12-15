Template.solicitudesPendientes.events({
	"click #btnAtender": function(){
		$("#atenderSolicitud").show("slow");
		$("#solicitudes").hide("slow");
	},
	"click #btnCancelar": function(){
		$("#atenderSolicitud").hide("slow");
		$("#solicitudes").show("slow");
	}
});