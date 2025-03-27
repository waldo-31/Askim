function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const responseMessage = document.getElementById("responseMessage");
    const userMessage = messageInput.value.trim();

    if (userMessage) {
        responseMessage.textContent = `Başarıyla Gönderildi! 💌`;
        messageInput.value = ""; // Mesajı temizle
    } else {
        responseMessage.textContent = "Lütfen bir mesaj yazın!";
    }
}

function clearMessage() {
    const messageInput = document.getElementById("messageInput");
    const responseMessage = document.getElementById("responseMessage");
    const clearNotification = document.getElementById("clearMessageNotification");

    messageInput.value = ""; // Mesaj kutusunu temizler
    responseMessage.textContent = ""; // Mesajı sıfırlar
    clearNotification.textContent = "Mesaj silindi!"; // Bildirimi göster

    // Bildirim birkaç saniye sonra kaybolacak
    setTimeout(function() {
        clearNotification.textContent = "";
    }, 3000);
}