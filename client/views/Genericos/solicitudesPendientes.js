Template.solicitudesPendientes.events({
	"click #btnAtender": function(){
		Router.go('atenderSolicitud',{atenderSolicitud: atenderSolicitud});
	}
});