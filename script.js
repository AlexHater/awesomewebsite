var count = 1;

    function clickCounter(){
        if( count < 30){
            document.getElementById("button").innerHTML = "Click " + count;
            count++;
        }
        else if(count >= 30 ) {
            document.getElementById("button").innerHTML = "Useless Achievement Unlocked!"; } 
        }

    function colorFunction(){
        var image = document.getElementById("myImage");
        image.src="images/111.jpg";
        image.style.borderRadius = "50%";
    }
    function noColorFunction(){
        var image = document.getElementById("myImage");
        image.src="images/je.png";

    }