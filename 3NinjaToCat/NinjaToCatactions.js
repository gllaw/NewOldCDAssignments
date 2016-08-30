$(document).ready(function(){
    $('img').click(function(){
        var current = $(this).attr('src');
        var alt = $(this).attr('data-alt-src');
        $(this).attr('src', alt)
        $(this).attr('data-alt-src',current);
    })
	// $("#slice1").click(function(){
 //    	var temp = $(this).attr("src");
 //        if (temp == 'ninja0.png'){
 //        	$(this).attr('src', 'cat0.png');
 //           	}
 //        else
 //        	$(this).attr('src', 'ninja0.png');
 //    });
 //    $("#slice2").click(function(){
 //    	var temp = $(this).attr("src");
 //        if (temp == 'ninja1.png'){
 //        	$(this).attr('src', 'cat1.png');
 //           	}
 //        else
 //        	$(this).attr('src', 'ninja1.png');
 //    });
 //    $("#slice3").click(function(){
 //    	var temp = $(this).attr("src");
 //        if (temp == 'ninja2.png'){
 //        	$(this).attr('src', 'cat2.png');
 //           	}
 //        else
 //        	$(this).attr('src', 'ninja2.png');
 //    });
 //    $("#slice4").click(function(){
 //    	var temp = $(this).attr("src");
 //        if (temp == 'ninja3.png'){
 //        	$(this).attr('src', 'cat3.png');
 //           	}
 //        else
 //        	$(this).attr('src', 'ninja3.png');
 //    });
 //    $("#slice5").click(function(){
 //    	var temp = $(this).attr("src");
 //        if (temp == 'ninja4.png'){
 //        	$(this).attr('src', 'cat4.png');
 //           	}
 //        else
 //        	$(this).attr('src', 'ninja4.png');
 //    });
});//closing all jQ