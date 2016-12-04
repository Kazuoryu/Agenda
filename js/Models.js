/*
*Main Contact class
*params : first_name, last_name, email, country
*/
var Contact = function contact(raw) { /* nombre de la funcion contact parametro raw*/
	this.id=_.uniqueId(); /* this.id variable de la funcion uniqueId que lo que hace es que define si el parametro raw esta definido */
	if(raw != undefined){ /*si el  parametro raw es es diferente a no definido recoge los siguientes datos */
		this.first_name = raw.first_name; /*los datos se guardan en variables */
		this.last_name = raw.last_name;
		this.email = raw.email;
		this.country = raw.country;
	}
};