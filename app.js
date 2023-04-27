const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 500,
  allowTouchMove: false,
});

const gotoSlide = (index) => {
  swiper.slideTo(index);
};

const restart = () => {
  const inputs = document.querySelectorAll("input");
  const buttons = document.querySelectorAll("button[type=button]");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  inputs.forEach((input) => {
    input.value = "";
  });

  gotoSlide(0);
};

const checkValid = (event) => {
  event.target.nextElementSibling.disabled = !event.target.value.length;

};
function updateUsernameDisplay() {
  const username = document.querySelector('.user').value;
  const usernameDisplay = document.getElementById('username-display');
  usernameDisplay.innerHTML = `você deseja se cadastrar como "${username}"?`;

}
const button = document.querySelector('button');
const loaderCheck = document.querySelector('.loader-check');

const sendButton = document.getElementById("send-button");
const loaderContainer = document.getElementById("loader-container");

function showLoader() {
  // Desabilita o botão "Enviar"
  document.getElementById("send-button").disabled = true;

  // Mostra o loader
  document.getElementById("loader-container").style.display = "block";

  // Simula uma requisição de 3 segundos
  setTimeout(function() {
    // Esconde o loader
    document.getElementById("loader-container").style.display = "none";

    // Habilita o botão "Enviar"
    document.getElementById("send-button").disabled = false;

    // Redireciona para outra página
    window.location.href = "outra_pagina.html";
  }, 3000);
}

const fs = require("fs");

const input1Value = document.querySelector("#input1").value;
const input2Value = document.querySelector("#input2").value;

fs.writeFile("arquivo.txt", `${input1Value}, ${input2Value}`, (err) => {
  if (err) throw err;
  console.log("Valores gravados com sucesso!");
});
