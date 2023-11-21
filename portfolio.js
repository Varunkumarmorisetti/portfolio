let aboutme=document.getElementById("aboutmeid");
let skills=document.getElementById("skillsid");
let experiences=document.getElementById("experienceid");


aboutme.addEventListener("click",function()
{
    var about = document.getElementById("aboutme");
    var skill = document.getElementById("skills");
    var exp = document.getElementById("experience");
    about.style.display="block"
    skill.style.display="none";
    exp.style.display="none";
})


skills.addEventListener("click",function()
{
    var about = document.getElementById("aboutme");
    var skill = document.getElementById("skills");
    var exp = document.getElementById("experience");
    skill.style.display="block"
    exp.style.display="none";
    about.style.display="none";
})

experiences.addEventListener("click",function()
{
    var about = document.getElementById("aboutme");
    var skill = document.getElementById("skills");
    var exp = document.getElementById("experience");
    exp.style.display="block"
    skill.style.display="none";
    about.style.display="none";
})


var myinput =document.getElementById("input");
var mybtn =document.getElementById("btn");
mybtn.addEventListener("click",function()
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(myinput.value.match(validRegex))
    {
    alert("successfully subscribed");
    myinput.value="";
    return true;
    }
    else(myinput.value==="")
    {
     alert("enter valid email id");
     myinput.value="";
     return false;
    }
   

})