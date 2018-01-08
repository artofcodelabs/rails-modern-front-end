import displayNewMessage from "../components/messages/messages";

class NotificationCenter {
  static receivedSignal(data) {
    if (data.message) {
      displayNewMessage(data.message);
    }
  }
}

export default NotificationCenter;
