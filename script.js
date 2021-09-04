var count = 1;

    function clickCounter(){
        if( count < 30){
            document.getElementById("button").innerHTML = "Click " + count;
            count++;
        }
        else if(count >= 30 ) {
            document.getElementById("button").innerHTML = "Useless Achievement Unlocked!"; } 
        }