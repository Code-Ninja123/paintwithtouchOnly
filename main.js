
var last_x , last_y;
var width=screen.width;
var height=screen.height;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var new_width=width-70;
    var new_height=height-200;
    if (width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
    }
    

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        console.log("touchevent_started")
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

    }

    canvas.addEventListener("touchmove", my_touchmove);
    
    

   
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
            

        last_x = current_position_of_mouse_x; 
        last_y = current_position_of_mouse_y;
        console.log("touchmove_registered");
    }

