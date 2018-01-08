import { setCallback } from "client/chat";
import "components/message/message"; // message is nested, so we import it here
import "./messages.css";

const messages = document.querySelector(".js-messages");
const content = messages && messages.querySelector(".js-messages--content");

function scrollToBottom() {
  if (!content) return;
  content.scrollTop = content.scrollHeight;
}

scrollToBottom();

// Telling `chat.js` to call this piece of code whenever a new message is received
// over Action Cable
setCallback(message => {
  content.insertAdjacentHTML("beforeend", message);
  scrollToBottom();
});
