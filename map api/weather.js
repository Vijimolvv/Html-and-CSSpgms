
        $(document).ready(function()
        {
            $("#ok").click(weather);
            function weather()
            {
                var text=$("#txt1").val();
                $.ajax(
                    {
                        url:"http://api.openweathermap.org/data/2.5/weather?q="+text+"&units=metric"+"&APPID=4a46e146e9f309dffad77471e3dd00ee",//weather api
                        type:"GET",
                        datatype:"jsonp",
                        success:function(data)
{
    console.log(data);
    document.getElementById("show").innerHTML=data.main.temp+"&#8451;";
}
                    });
            }
            });
        