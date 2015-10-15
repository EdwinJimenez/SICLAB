Template.sNuevaMaestro.onRendered(function(){
    $('select').material_select();
    $('.datepicker').pickadate({
    selectMonths: true, 
    selectYears: 15
  	}),
  	$("#principal").show();
	$("#eleccionMaterial").hide();
 });
Template.sNuevaMaestro.events({
	"click #btnElegirMaterial":function(event,template){
		$("#principal").hide();
		$("#eleccionMaterial").show("slow");
	}
});
