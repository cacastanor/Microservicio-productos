$(function(){
	$('.form-holder').delegate("input", "focus", function(){
		$('.form-holder').removeClass("active");
		$(this).parent().addClass("active");
	})
})

$(document).ready(function() {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000
	  });
	$("#register").click(function(e){
	
		e.preventDefault();

		$.post("/products/findByType", {type: $("#type").val()}).done(function(res) {
		  if(res){
            
			Toast.fire({
				type: 'success',
				title: 'Se ha encontrado los productos'
              })
            var divContainer = document.getElementById("products");
            var i = 0;
			var text = "";
			
            for(product in res){
			console.log(i++)
			   text += '<div class="form-row">'
			   console.log(i+++"a")
			   text += '<input type="text" class="form-control" value="'+res[product].cc+'" disabled></input>'
			   console.log(i+++"b")
			   text += '<input type="text" class="form-control" value="'+res[product].createdAt+'" disabled></input>'
			   console.log(i+++"b")
			   text += '</div>'
			}
			divContainer.innerHTML = text
            
		  }else{
			Toast.fire({
				type: 'error',
				title: 'Ha ocurrido un error...'
			  })
		  }
		  })
            
		error: (error) => {
		  console.log(JSON.stringify(error));
		}
	  });
	});
	
	