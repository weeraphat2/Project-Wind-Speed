var user = document.forms['form']['user'];
var password = document.forms['form']['password'];

var user_error = document.getEleementById('user_error');
var pass_error = document.getEleementById('pass_error');

user.addEventListener('textInput', user_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (user.value.length < 4){
		user.focus();
		return false;
	}
	if (password.value.length < 4){
		password.focus();
		return false;
	}
}
function user_Verify(){
	if (user.value.lenght <= 4){
		return true;
	}
}
function pass_Verify(){
	if (password.value.lenght <= 4){
		return true;
	}
}