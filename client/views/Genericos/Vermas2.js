Template.verMas2.onRendered(function(){
	$("#verPrincipal2").show("slow");
});
Template.verMas2.events({
	"click #btnRegresar2":function(event,Template){
		$("#verPrincipal2").hide();
		Router.go('solicitudesAceptadasLaboratorio');
	}
});