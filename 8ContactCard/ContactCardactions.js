$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		$(".cardfront").show();

		//ATTEMPTONE $(".frstname").append(".firstname");
		//ATTEMPTONE $(".lstname").append(".lastname");

		//ATTEMPTTWO $(".lstname").append($("form")).val(".lastname");

		//ATTEMPTTHREE $("form").text($("form").serialize()).hide();	
		
		//alert($("#firstname").val())
		
		var card = $("<div><div class='cardfront'><h1>" +$('#firstname').val()+' '+$('#lastname').val()+ 
			"</h1><p>Click for description!</p></div><div class='cardback'><div>" 
			+ $('#description').val() + "</div></div>");
		$("#cardspace").append(card);
		
		$(this).closest("form").append($('input[type="text"]').val(""));

		//$("#frstname").append();
		//$("#lstname").append($("#lastname").val());
	})
	
	$(document).on('click', card, function(){
    	$(".cardfront").toggle();
    	$(".cardback").toggle();

    	//$("#descrip").append($("#description").val());
    })
})
