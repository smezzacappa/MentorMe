
		$(function() {
		
			// $("#text-one").change(function() {
			// 	$("#text-two").load("textdata/" + $(this).val() + ".txt");
			// });
			
			$("#state").change(function() {
			
				var dropDown = $(this);
			
				$.getJSON("data.json", function(data) {
				
					var key = dropDown.val();
					var vals = [];
										
					switch(key) {
						case "state":
							vals = data.state.split(",");
							break;
						// case "snacks":
						// 	vals = data.snacks.split(",");
						// 	break;
						case "base":
							vals = ["Please choose from above"];
					}
					
					var $jsontwo = $("#city");
					$jsontwo.empty();
					$.each(vals, function(index, value) {
						$jsontwo.append("<option>" + value + "</option>");
					});
			
				});
			});

		});
        