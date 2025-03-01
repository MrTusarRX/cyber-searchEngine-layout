 // Matrix Code Rain Effect
        const canvas = document.getElementById("matrixCanvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()";
        const matrix = letters.split("");

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function drawMatrixRain() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00ff00";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrixRain, 50);

        function searchGoogle() {
            let query = document.getElementById("searchInput").value;
            if (query.trim() !== "") {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }
        }
        if (window.location.hostname === "www.google.com") {
            window.onload = function () {
                document.body.style.backgroundColor = "#000";
                document.body.style.color = "#00ff00";
                
                document.querySelectorAll("h3").forEach(h3 => {
                    h3.style.color = "#00ff00";
                    h3.style.textShadow = "0 0 10px lime";
                    h3.style.transition = "0.3s";
                });

                document.querySelectorAll("h3:hover").forEach(h3 => {
                    h3.style.color = "#009900";
                    h3.style.transform = "scale(1.05)";
                });

                document.querySelectorAll(".tF2Cxc a").forEach(a => {
                    a.style.color = "#00ff99";
                    a.style.fontWeight = "bold";
                    a.style.transition = "0.3s";
                });

                document.querySelectorAll(".tF2Cxc a:hover").forEach(a => {
                    a.style.color = "#ff00ff";
                    a.style.transform = "scale(1.05)";
                });
            };
        }
