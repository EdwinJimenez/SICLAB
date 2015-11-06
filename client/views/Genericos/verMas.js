Template.verMas.onRendered(function(){
	$("#verPrincipal").show("slow");
	$("#solicitudesPendientesLab").hide();
});
Template.verMas.events({
	"click #btnRegresar":function(event,Template){
		$("#verPrincipal").hide();
		Router.go('solicitudesPendientesLaboratorio');
	}
});