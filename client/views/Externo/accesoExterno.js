material=true;
Template.accesoExterno.events({
	"click #rdoAlumno2":function(event,template){
		Router.go("accesoAlumno");
	},
	"click #btn0E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"0");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn1E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"1");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn2E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"2");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn3E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"3");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn4E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"4");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn5E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"5");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn6E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"6");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn7E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"7");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn8E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"8");
		$("#txtNumeroAdmision").focus();
	},
	"click #btn9E": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val()+"9");
		$("#txtNumeroAdmision").focus();
	},
	"click #btnDelE": function(event,template){
		$("#txtNumeroAdmision").val($("#txtNumeroAdmision").val().slice(0,-1));
		$("#txtNumeroAdmision").focus();
	},
	"keydown #txtNumeroAdmision": function(event,template){
		if(Meteor.validaciones.contarOchoCaracteres())
		{
			//En este momento haremos la consulta SQL sobre el No. de control
			console.log("Regrese true");
		}
	},
	"click #rdoSiE":function(event,template){
		material=true;
	},
	"click #rdoNoE":function(event,template){
		material=false;
	},
	"click #btnEntrarE": function(event,template){
		if(material)
		{
			Router.go("/eleccionMaterial");
		}
		else
		{
			Materialize.toast("Bienvenido, acceso registrado.",2000,"rounded");
			$("#txtNumeroAdmision").val("");
			//LIMPIAR LOS DEMAS CAMPOS
			$("#rdoSiE").prop('checked', true);
			material=true;
		}
	},

});