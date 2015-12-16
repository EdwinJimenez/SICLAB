Template.acceso.events({
	"click #btnIngresar":function(){
		if(Meteor.validaciones.validarVacios(acceso))
		{
			if($("#txtUsuario").val()=='Laboratorio')
			Router.go("/Alumno");
		else{
			if($("#txtUsuario").val()=='Maestro')
				Router.go("/pantallaMaestro");
			else
				if($("#txtUsuario").val()=='Encargado')
				Router.go("/pantallaLaboratorios");
			}

		}
	}
});