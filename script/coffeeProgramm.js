var menuToggle = document.querySelector ('.menuToggle');
var toggleList = document.querySelector ('.menuToggle ul');
var toggleLi = document.querySelectorAll ('.menuToggle ul li');

menuToggle.onclick = function (e) { 
	menuToggle.style.marginLeft= 0;	
	if (toggleList.style.display === 'none') {
		toggleList.style.width = '100%';
		toggleList.style.display = 'block' ;		
	} 
	else if (toggleList.style.display === 'block'){
		toggleList.style.display = 'none' ;
		menuToggle.style.backgroundColor = 'transparent' ;
	}
	menuToggle.appendChild ( toggleList );
}

//Contact us form codes snipet.
//var form = document.getElementsByTagName('form');
var inputInfo = document.querySelectorAll('input');
//var input = document.querySelectorAll('.input + span.Form-error');
var error = document.querySelector('.Form-error');
var submit = document.querySelector('.button'); 

function submitForm(){
	for ( i=0; i < inputInfo.length; i++ ) {		
		var inputData = inputInfo[i].value;		
		//console.log(inputData);
		var realPatterns = new RegExp ( inputInfo[i].pattern);
		var checking = realPatterns.test(inputData);		
		
		if(checking === false){
			error.style.display = 'block';
			error.innerHTML += inputInfo[i].name + error ;
		}else if (checking === true){	
			let success = document.getElementById('success');
			success.textContent = 'Thank you, your we have your respond.'			
		}
	}
}