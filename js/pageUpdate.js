function PageUpdate(data) {
	this.data = data,
	this.updateElements()
}

PageUpdate.prototype.updateElements = function() {
	this.setTempElement();
};


PageUpdate.prototype.getTempElement = function() {
	return $('p.temp')
} 

PageUpdate.prototype.setTempElement = function() {
	this.getTempElement().text( this.data.main.temp )
};