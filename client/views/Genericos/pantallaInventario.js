Template.pantallaInventario.onRendered(function(){
	$("#listaArt").show("slow");
	$("#editar").hide();
});
Template.pantallaInventario.events({
	"click #btneditarArt":function(event,Template){
		$("#listaArt").hide();
		$("#editar").show("slow");
	}
});