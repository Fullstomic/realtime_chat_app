$(function () {
  const socket = io();

  const $message_input = $("#messageInput");
  const $message_submit_button = $("#messageSubmitBtn");

  const onSendMessage = () => {
    const messageInputValue = $message_input.val().trim();
    if (messageInputValue) {
      socket.emit("chat message", messageInputValue);
      $message_input.val = "";
    }
  };

  $message_submit_button.on("click", function () {
    onSendMessage();
  });
});
