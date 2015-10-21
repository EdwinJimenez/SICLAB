Template.pantallaLaboratorios.onRendered(function(){
	$('ul.tabs').tabs();
	$("#solicitudesPendientes").show("slow");
});
Template.pantallaLaboratorios.events({
	"click #btnPendientes":function(event,Template){
		$("#solicitudesPendientes").show("slow");
		$("#solicitudesEnProceso").hide("slow");
	},
	"click #btnEnProceso":function(event,Template){
		$("#solicitudesPendientes").hide("slow");
		$("#solicitudesEnProceso").show("slow");
	}
});