/* Author: Francisco Javier Henseleit Palma & Tomas Hernandez Velasquez

*/

$.ajax({ 
	url: 'server/',
	method: 'POST',
	data: { getRSS : true },
	success: function(data) {
		

	},
	error: function (jqXHR, textStatus, errorThrown) {
		alert('fuck');

	}
});