Router.configure({
	layoutTemplate:'layout'
});

Router.route('/',{name: 'acceso'});
Router.route('/Alumno',{name: 'accesoAlumno'});
Router.route('/Externo',{name: 'accesoExterno'});
Router.route('/elegirMaterial',{name:'seleccionMaterialE'});
Router.route('/pantallaLaboratorios',{name:'pantallaLaboratorios'});
Router.route('/atenderSolicitud',{name:'atenderSolicitud'});

