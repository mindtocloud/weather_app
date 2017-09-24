function PageUpdate(data) {
	this.data = data,
	this.updateElements()
}

PageUpdate.prototype.updateElements = function() {
	this.setTempElement();
	this.setCityElement();
	this.setCountryElement();
	this.setDayElement();
};



//  Get / Set methods


// City Elements
PageUpdate.prototype.getCityElement = function() {
	return $('p.city')
};

PageUpdate.prototype.setCityElement = function() {
	this.getCityElement().text( this.data.name )
};


// Country Elements
PageUpdate.prototype.getCountryElement = function() {
	return $('span.country')
};

PageUpdate.prototype.setCountryElement = function() {
	this.getCountryElement().text( this.data.sys.country )
};

// Day Elements
PageUpdate.prototype.getDayElement = function() {
	return $('p.day')
};

PageUpdate.prototype.setDayElement = function() {
	this.getDayElement().text( DAYS_OF_THE_WEEK[new Date().getDay()] )
};

// Temperature Elements
PageUpdate.prototype.getTempElement = function() {
	return $('p.temp')
} 

PageUpdate.prototype.setTempElement = function() {
	this.getTempElement().text( this.data.main.temp )
};


// Date

var DAYS_OF_THE_WEEK = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

var date = new Date();

