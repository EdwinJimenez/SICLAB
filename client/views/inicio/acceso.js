Template.acceso.events({
	"click #btnIngresar":function(){
		if(Meteor.validaciones.validarVacios(acceso))
		{
			if($("#txtUsuario").val()=='Laboratorio')
			Router.go("/Alumno");
		}
	}
});