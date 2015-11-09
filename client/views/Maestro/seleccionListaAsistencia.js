Template.seleccionListaAsistencia.onRendered(function(){
	$('select').material_select();
	$("#selecionarLista").show("slow");
	$("#lista").hide();
});
Template.seleccionListaAsistencia.events({
	"click #btnListaAsistencia":function(event,template){
		$("#selecionarLista").hide("slow");
		$("#lista").show("slow");
	}
});