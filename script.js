document.addEventListener('DOMContentLoaded', () => {
    // Chatbot UI Toggle
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatBody = document.getElementById('chat-body');

    chatbotToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            addBotMessage("Olá! Sou o assistente virtual da PlayBot Busyness. Como posso te ajudar? Digite 'menu' para ver as opções.");
        }
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    // Handle sending messages
    const sendMessage = () => {
        const userInput = chatInput.value.trim();
        if (userInput === '') return;

        addUserMessage(userInput);
        chatInput.value = '';

        // Get bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            addBotMessage(botResponse);
        }, 500);
    };

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add messages to chat body
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user-message');
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'bot-message');
        messageElement.innerHTML = message; // Use innerHTML to render links/buttons
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
    
    // Contact Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.name.value;
        alert(`Obrigado, ${name}! Sua mensagem foi enviada. Entraremos em contato em breve.`);
        contactForm.reset();
    });
});

