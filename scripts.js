//start pop-up interactivity
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");

}

function togglePopup2() {
  document.getElementById("popup-2").classList.toggle("active");

}

function togglePopup3() {
  document.getElementById("popup-3").classList.toggle("active");

}

function togglePopup4() {
  document.getElementById("popup-4").classList.toggle("active");

}
//end pop-up interactivity

function submit(e) {
  const form = document.forms.registration;
  const { fullname, age } = form;
  console.log(fullname.value, age.value)

  //start validations
  //fullname input validation
  if (fullname.value == "", fullname.value == null, fullname.value.length < 3) {
    alert("Insira seu nome!");
    fullname.focus();
    return false;
  }
 //age input validation
  if (age.value == "", age.fullname == null, age.value.length < 1) {
    alert("insira sua idade");
    age.focus();
    return false;
  }
  //end validations
  
  //verification of vaccines
  if(age.value >= 18){
    alert("Procure um posto de vacinação e vacine-se!")
  }
  if(age.value >= 25 || age.value == 85){
    alert("A data prevista para você já passou, consulte o posto de saúde mais próximo!")
  }
  if(age.value <= 18){
    alert("Fique esperto(a) nos canais de notícia, está previsto para o dia 18/08")
  }
}
