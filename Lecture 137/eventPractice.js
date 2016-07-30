document.getElementsByTagName("button")[0].addEventListener("click", function(){
    var body = document.getElementsByTagName("body")[0];
    if(body.getAttribute("bgColor") !== "purple")
    {
        body.setAttribute("bgColor", "purple");
    }
    else
    {
        body.setAttribute("bgColor", "white");
    }
    //Can also use:
    //document.body.style.background = "purple";

    //Can also use - to add a css class called purple:
    //document.body.classList.toggle = "purple";
});
