/*//Convertir un string a formato moneda
Meteor.formato = 
{
	convertMoneda : function(dato)
	{
		var a = 1100.50
		a.to
		var aux;
		for(var i=dato.length; i-3)
		{
			if(dato[i-1]!="")
				//1111230.
				//$1,111,230.00
		}
	}
},*/
Meteor.formato =
{
	convertirMoneda: function(dato)
	{
		var num = dato.replace(/\./g,'');
		if(!isNaN(num)){
			num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
			num = num.split('').reverse().join('').replace(/^[\.]/,'');
			return num;
		}
	},
	moneda:function(dato){
		//var num = '$' + dato.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		//document.write(num) would write value as follows: $1,250.22
		var a = document.write(dato);
		console.log(a);
	},
	moneda2: function(dato){
		var num = '$' + dato.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		return num;
	}
}