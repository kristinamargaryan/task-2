let count = 0; 
let noAllowtTegs = ["input", "h1", "p"];
let divConstructor = document.querySelector(".div_constructor");
let divResult = document.querySelector(".div_result");
let inputText = document.querySelector(".input_text");
let tagValue ;

function inputValidation(selectObject) {
    tagValue  = selectObject.value; 
    if(tagValue === "div" || tagValue === "input"){
      inputText.style.display = "none";
    }else{
      inputText.style.display = "block";
    }
  };

function create_tag(){ 
  if(tagValue == undefined){ 
    return
  }
  let input_value =  inputText.value;
  let elem = document.createElement(tagValue);  
  console.log(elem);
  elem.innerText = input_value ;
  divConstructor.appendChild(elem) ;
  inputText.value = ""; 
  elem.addEventListener("mouseover", hover);
  elem.addEventListener("mouseout", hoverOut);
  elem.id = tagValue + count;
  elem.className = `created_${tagValue}`;
  elem.setAttribute("draggable", true); 
  elem.addEventListener("dragstart", drag);
  if (tagValue == "input") {
      elem.setAttribute("placeholder", "input");
      elem.setAttribute("readonly", "true");  
  } else {
      itemSpan = document.createElement("span");
      itemSpan.className = "input_span";
      itemSpan.textContent = input_value;
      elem.innerText = inputText.value;
      elem.innerText = tagValue;
      elem.appendChild(itemSpan); 
    }
};

function allowDrop(event){
  event.preventDefault();
};

function drag(event){  
  event.dataTransfer.setData("Text", event.target.id );
};

function drop(event) {    
  event.preventDefault();
  let data = event.dataTransfer.getData("Text"); 
  if (noAllowtTegs.includes(event.target.tagName.toLowerCase())) {
    alert(`${tagValue} can not be appended to ${event.target.tagName} element `);
  } else {
    document.getElementById(data).setAttribute("draggable", false);
    event.target.appendChild(document.getElementById(data));
    document.getElementById(data).removeEventListener("dragstart", drag); 
  }
  };

function hover(ev) {
    ev.target.style.borderColor = "red";
};

function hoverOut(ev) {
    ev.target.style.borderColor = "black";
};
