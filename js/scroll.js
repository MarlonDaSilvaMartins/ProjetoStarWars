jQuery(document).ready(function($){ 
		     $(".scroll").click(function(event){        
			    event.preventDefault();
			    $('html,body').animate( { scrollTop:$(this.hash).offset().top }, 1000 );
		     });
		});

function validar(){
	var nome = document.getElementById('txtnome').value;
	var email = document.getElementById('txtemail').value;
	var mensagem = document.getElementById('txtmensagem').value;
	var like = document.form1.like;
	var msg;
	if(nome==''){
		document.getElementById('txtnome').focus();
		alert('Digite o seu nome');	
		return false;
	}else if(email==''){
		document.getElementById('txtemail').focus();
		alert('Digite o seu E-mail');
		return false;
	}else if(mensagem==''){
		document.getElementById('txtmensagem').focus();
		alert('Digite a sua mensagem');
		return false;
	}else if(!like[0].checked && !like[1].checked ){
		alert('Escolha se gostou ou não');
		return false;
	}
	else{
		return true;
	}
}

