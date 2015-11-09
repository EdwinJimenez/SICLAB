Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name: 'acceso'});
Router.route('/Alumno',{name: 'accesoAlumno'});
Router.route('/Externo',{name: 'accesoExterno'});
Router.route('/elegirMaterial',{name:'seleccionMaterialE'});
Router.route('/pantallaLaboratorios',{name:'pantallaLaboratorios'});
/*Router.route('/atenderSolicitud',{name:'atenderSolicitud'});*/
Router.route('/pantallaMaestro',{name: 'pantallaMaestro'});
Router.route('/eleccionMaterial',{name: 'eleccionMaterialAlumno'});
//Router.route('/solicitudesPendientesLaboratorio',{name: 'solicitudesPendientesLaboratorio'});

