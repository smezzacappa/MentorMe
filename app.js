$(function(){
    let stateOptions;
    let gaCitiesOps;

    $.getJSON('data.json',function(data){
        $.each(data, function(index,stateObj) {
            stateOptions+='<option value="'+stateObj.stateCode+'">'
            +stateObj.name+
            '</option>';
             });
             $('#states').html(stateOptions);
        });

    

        $("#state").change(function(){
            if($(this).val()==="GA"){
                    $.getJSON('GA_cities.json',function(data){
                    $.each(data, function(index,city) {
                        gaCitiesOps +='<option value="'+city.code+'">'
                        +city.name+
                        '</option>';
                         });
                         $('#city').html(gaCitiesOps);
                    });
                }
            })
        });