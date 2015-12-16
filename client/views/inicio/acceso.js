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
					if($("#txtUsuario").val()=='jefeLab'){
						Router.go("/pantallaLaboratorios");
						Session.set("tipoUsuario",1);
					}
					else
					{
						if($("#txtUsuario").val()=='jefeDepto'){
							Router.go("/pantallaLaboratorios");
							Session.set("tipoUsuario",2);
						}
						else
						{
							if($("#txtUsuario").val()=='encargadoLab'){
								Router.go("/pantallaLaboratorios");
								Session.set("tipoUsuario",3);
							}
							else
							{
								if($("#txtUsuario").val()=='ss'){
									Router.go("/pantallaLaboratorios");
									Session.set("tipoUsuario",4);
								}
							}

						}
					}

				}

			}
		}
	});