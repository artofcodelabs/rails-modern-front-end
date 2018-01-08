import "components/message/message"; // message is nested, so we import it here
import "./messages.css";

const messages = document.querySelector(".js-messages");
const content = messages && messages.querySelector(".js-messages--content");

function scrollToBottom() {
  if (!content) return;
  content.scrollTop = content.scrollHeight;
}

scrollToBottom();

const displayNewMessage = msg => {
  if (!content) return;
  content.insertAdjacentHTML("beforeend", msg);
  scrollToBottom();
};

export default displayNewMessage;
