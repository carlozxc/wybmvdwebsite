/* NO button dodge effect */
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

if (noBtn) {
    // Desktop hover
    noBtn.addEventListener("mouseover", moveNoButton);

    // Mobile touch
    noBtn.addEventListener("touchstart", (e) => {
        e.preventDefault(); // stops the click
        moveNoButton();
    });

    // Extra safety: block click entirely
    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moveNoButton();
    });
}

/* Floating hearts */
const heartsContainer = document.getElementById("hearts");

function createHeart() {
    if (!heartsContainer) return;

    const heart = document.createElement("div");
    heart.classList.add("heart-float");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

if (heartsContainer) {
    setInterval(createHeart, 300);
}

/* YES button confetti + redirect */
const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.backgroundColor =
                ["#ff4d6d", "#ffb3c6", "#ffffff"][Math.floor(Math.random() * 3)];
            confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }

        setTimeout(() => {
            window.location.href = "yes.html";
        }, 1200);
    });
}
