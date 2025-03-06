var nav = "open";

function openNav()
{
  if (nav === "open")
  {
    document.querySelector(".navBox").style.display = "flex";
    nav = "close";
  }
  else {
    document.querySelector(".navBox").style.display = "none";
    // document.querySelector("#floatNav").style.color = "#FFC650";
    nav = "open";
  }
  return;
}

let changeIcon = function(icon)
{
  icon.classList.toggle("fa-xmark");
  return;
};

const scroll2 = () => {
  window.scrollTo(0, 576);
}
const scroll3 = () => {
  window.scrollTo(0, 4465);
}
const scroll4 = () => {
  window.scrollTo(0, 5420);
}
var more = "open";
document.querySelector("#more").onclick = () => {
  if (more == "open")
  {
    document.querySelector(".navBox").style.width = "315px";
    more = "close";
  }
  else {
    document.querySelector(".navBox").style.width = "165px";
    more = "open";
  }
}

let changeIcon2 = function(icon2)
{
  icon2.classList.toggle("fa-angles-left");
  return;
};

document.querySelector("#scrollCalc").onclick = () => {
  window.scrollTo(0, 1540)
}
document.querySelector("#scrollTemp").onclick = () => {
  window.scrollTo(0, 1080)
}
document.querySelector("#scrollStop").onclick = () => {
  window.scrollTo(0, 2200)
}
document.querySelector("#scrollPass").onclick = () => {
  window.scrollTo(0, 2634)
}
document.querySelector("#scrollFeed").onclick = () => {
  window.scrollTo(0, 6087)
}
const scroll1 = () => {
  window.scrollTo(0, 4);
}

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300)
  {
    document.querySelector("#floatscrollbtn").style.display = "block";
  }
  else {
    document.querySelector("#floatscrollbtn").style.display = "none";
  }
});

document.querySelector("#floatscrollbtn").onclick = () => {
  window.scrollTo(0, 0);
}

var email = document.querySelector("#mail");
var error = document.querySelector("#error");

const emailValidation = () => {
  if (email.value !== "")
  {
    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
      error.innerHTML = "please enter a valid email";
      error.style.color = "red";
      return false;
    }
    else {
      error.innerHTML = "Email Available";
      error.style.color = "#00BC15";
      return true;
    }
  }
}

var shareBtn = document.querySelector("#Share");
shareBtn.addEventListener("click", (event)=>{
  if(navigator.share)
  {
    navigator.share({
      tittle:"My resume website Vivek Kumar",
      url:"https://vivek-kumar789.github.io/Vivek/"
    })
    .then(()=>{
      console.log("share");
    })
    .catch((err)=>{
      console.log(err);
    })
  }
})
