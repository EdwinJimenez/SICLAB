Template.solicitudesPendientesLaboratorio.onRendered(function(){
	$("#solicitudesPendientesLab").show("slow");
	$("#verMasSolicitud").hide();
});
Template.solicitudesPendientesLaboratorio.events({
	"click #btnVerMas":function(event,Template){
		$("#verMasSolicitud").show("slow");
		$("#solicitudesPendientesLab").hide();
	}
});