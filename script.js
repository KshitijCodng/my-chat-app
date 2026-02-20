const msgInput = document.getElementById('msg-input');
const container = document.getElementById('message-container');

function send() {
    const text = msgInput.value.trim();
    if (text !== "") {
        const div = document.createElement('div');
        div.className = 'msg';
        div.innerHTML = `<b>You:</b> ${text}`;
        container.appendChild(div);
        
        // Auto-scroll to bottom
        container.scrollTop = container.scrollHeight;
        
        // Clear input
        msgInput.value = "";
    }
}

// Press Enter to send
msgInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        send();
    }
});