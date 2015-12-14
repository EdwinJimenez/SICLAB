Template.accesoAlumno.events({
	"click #rdoExterno":function(event,template){
		console.log("Externo");
		Router.go("accesoExterno");
	}

});