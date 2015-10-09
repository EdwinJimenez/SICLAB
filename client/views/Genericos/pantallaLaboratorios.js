Template.pantallaLaboratorios.onRendered(function(){
	$('ul.tabs').tabs();
	$("#solicitudesPendientes").show("slow");
});
Template.pantallaLaboratorios.events({
	"click #btnPeticiones":function(event,Template){
		$("#solicitudesPendientes").show("slow");
		$("#solicitudesEnProceso").hide("slow");
	},
	"click #btnPrestamos":function(event,Template){
		$("#solicitudesPendientes").hide("slow");
		$("#solicitudesEnProceso").show("slow");
	}
});