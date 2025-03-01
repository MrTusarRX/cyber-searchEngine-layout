 function toggleChatbox() {
            let chatbox = document.getElementById("chatbox");
            chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
        }
function searchGoogle() {
            let query = document.getElementById("searchInput").value;
            if (query.trim() !== "") {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }
        }
        async function sendMessage() {
            let inputField = document.getElementById("chatInput");
            let message = inputField.value.trim();
            if (message === "") return;

            let chatBody = document.getElementById("chatBody");
            let userMessage = document.createElement("div");
            userMessage.classList.add("message", "user-message");
            userMessage.textContent = message;
            chatBody.appendChild(userMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
            let botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot-message");
            botMessage.innerHTML = "Thinking...";
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
            try {
                let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBj0GW3MeyVywRyu1jyebdcgq2MNm48Ogs", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: message }] }]
                    })
                });

                let data = await response.json();
                let reply = data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't understand that.";
                reply = reply.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
                botMessage.innerHTML = reply;
                chatBody.scrollTop = chatBody.scrollHeight;
            } catch (error) {
                botMessage.innerHTML = "Bot: Error connecting to AI.";
            }

            inputField.value = "";
        }
