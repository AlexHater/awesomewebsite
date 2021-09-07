var count = 1;

    function clickCounter(){
        if(count < 11){
            document.getElementById("button").innerHTML = "Click Counter " + count;
            count++;
        }
        if(count == 11 ) {
            document.getElementById("button").innerHTML = "Useless Achievement Unlocked!";
            document.getElementById("button").style.fontSize = "70%";
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

let hamburger1 = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger1.addEventListener("click", () => {
    navLinks.classList.toggle("open");
})