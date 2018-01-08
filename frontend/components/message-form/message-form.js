import { Env } from "loco-js";
import "./message-form.css";

const form = document.querySelector(".js-message-form");
const input = form && form.querySelector(".js-message-form--input");
const submit = form && form.querySelector(".js-message-form--submit");

function submitForm() {
  // This will invoke received_signal method inside app/services/notification_center.rb
  Env.loco.emit({ message: input.value });
  input.value = "";
  input.focus();
}

// You can send a message with cmd/ctrl+enter
if (input) {
  input.addEventListener("keydown", event => {
    if (event.keyCode === 13 && event.metaKey) {
      event.preventDefault();
      submitForm();
    }
  });
}

// Or by cicking a button
if (submit) {
  submit.addEventListener("click", event => {
    event.preventDefault();
    submitForm();
  });
}
