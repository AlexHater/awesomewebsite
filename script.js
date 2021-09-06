var count = 1;

    function clickCounter(){
        if(count < 30){
            document.getElementById("button").innerHTML = "Click Counter " + count;
            count++;
        }
        if(count >= 30 ) {
            document.getElementById("button").innerHTML = "Useless Achievement Unlocked!"; 
            count++;
        } 
    }

    function colorFunction(){
        var image = document.getElementById("myImage");
        image.src="images/111.jpg";
        image.style.borderRadius = "50%";
    }
    function noColorFunction(){
        setTimeout(() => {
            var image = document.getElementById("myImage");
            image.src="images/je.png";
        }, 1000);
    }