Template.solicitudesPendientes.onRendered(function(){
	$("#atenderSolicitud").hide();
});
Template.solicitudesPendientes.events({
	"click #btnAtender": function(){
		$("#atenderSolicitud").show("slow");
		$("#solicitudes").hide();
	}
});