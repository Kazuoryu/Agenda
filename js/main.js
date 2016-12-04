var addressApp = angular.module("addressApp",[])
.controller("mainController", function ($scope){
	var contact = new Contact({
		first_name:"Diego",
		last_name:"González",
		email:"DiegoGlezAbreu@gmail.com",
		country:"España"
	});
	console.debug(contact);
});