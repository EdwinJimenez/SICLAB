Template.solicitudesAceptadasLaboratorio.onRendered(function(){
	$("#solicitudesAceptadasLab").show("slow");
	$("#verMasSolicitud2").hide();
});
Template.solicitudesAceptadasLaboratorio.events({
	"click #btnVerMas2":function(event,Template){
		$("#solicitudesAceptadasLab").hide();
		$("#verMasSolicitud2").show("slow");
	}
});