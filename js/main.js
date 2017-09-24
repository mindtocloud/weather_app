$( document ).ready(function() {
	$.get( apiUrl(), function(data) {
		new PageUpdate(data)
	})
});

function apiUrl() {
	return 'http://api.openweathermap.org/data/2.5/weather?q=Bicester,UK&APPID=11f2434d9bef13b1e4699235620d4fd4'
}