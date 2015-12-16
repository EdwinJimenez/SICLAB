Template.accesoAlumno.events({
	"click #rdoExterno":function(event,template){
		console.log("Externo");
		Router.go("accesoExterno");
	},
	"click #btnMA": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"MA");
		$("#txtNControl").focus();
	},
	"click #btn0": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"0");
		$("#txtNControl").focus();
	},
	"click #btn1": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"1");
		$("#txtNControl").focus();
	},
	"click #btn2": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"2");
		$("#txtNControl").focus();
	},
	"click #btn3": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"3");
		$("#txtNControl").focus();
	},
	"click #btn4": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"4");
		$("#txtNControl").focus();
	},
	"click #btn5": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"5");
		$("#txtNControl").focus();
	},
	"click #btn6": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"6");
		$("#txtNControl").focus();
	},
	"click #btn7": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"7");
		$("#txtNControl").focus();
	},
	"click #btn8": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"8");
		$("#txtNControl").focus();
	},
	"click #btn9": function(event,template){
		$("#txtNControl").val($("#txtNControl").val()+"9");
		$("#txtNControl").focus();
	},
	"click #btnDel": function(event,template){
		$("#txtNControl").val($("#txtNControl").val().slice(0,-1));
		$("#txtNControl").focus();
	},
	"keydown #txtNControl": function(event,template){
		if(Meteor.validaciones.contarOchoCaracteres())
		{
			//En este momento haremos la consulta SQL sobre el No. de control
			console.log("Regrese true");
		}
	}
});
