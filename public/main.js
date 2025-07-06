$(function () {
  const socket = io();

  const $message_input = $("#messageInput");
  const $message_submit_button = $("#messageSubmitBtn");

  const $username_input = $("#usernameInput");
  const $login_button = $("#loginbtn");

  const onSendMessage = () => {
    const messageInputValue = $message_input.val().trim();
    if (messageInputValue) {
      socket.emit("chat message", messageInputValue);
      $message_input.val = "";
    }
  };

  const onLogin = () => {
    const usernameInputValue = $username_input.val().trim();
    if (usernameInputValue) {
      socket.emit("login", usernameInputValue);
      $message_input.val = "";
    }
  };

  $message_submit_button.on("click", function () {
    onSendMessage();
  });
  $login_button.on("click", function () {
    onLogin();
  });
});
