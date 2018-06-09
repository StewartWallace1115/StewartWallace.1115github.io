window.addEventListener("scroll", function() {
  if(elementInViewport() && progressBarEmpty())
    animateSkills();
  else if( (!elementInViewport() && !progressBarEmpty()))
    resetProgressBar();
});


function elementInViewport() {
  var el = document.getElementById("section_six");
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

function progressBarEmpty() {
    var ele = document.getElementById("HTML");
    var eleDimmesions = ele.getBoundingClientRect();
    return (eleDimmesions.width < 10);
}

function animateSkills() {
  var skills = {"HTML":95, "CSS":60, "Javascript":70, "Java":80, "Android":70, "SQL":85, "Database":70};
  var ele = document.getElementsByClassName("progress_bar");

  for(let properties in skills){
   var id = setInterval(frame, 10);
   let width = 1
   function frame() {
    if (width >= skills[properties]) {
      clearInterval(id);
    } else {
      width++; 
      ele[properties].style.width = width + '%'; 
    }
   }

  }
}

function resetProgressBar() {
  var ele = document.getElementsByClassName("progress_bar");
  for(let i = 0; i < ele.length; ++i)
    ele.item(i).style.width = "1%"; 
}