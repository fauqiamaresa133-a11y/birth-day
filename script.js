// ========================================
// HAPPY BIRTH DAY
//
// Format: 2008 NOVEMBER 06
// ========================================


// MEMBUKA SURPRISE

function openSurprise() {

    document.getElementById("opening").style.display = "none";

    document
        .getElementById("mainContent")
        .classList.remove("hidden");

    // Memutar musik
    const music = document.getElementById("music");

    music.volume = 0.4;

    music.play().catch(() => {
        console.log("Musik belum dapat diputar.");
    });

    createLotsOfHearts();
}


// SCROLL KE SURAT

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });
}


// HITUNG WAKTU BERSAMA

function updateCounter() {

    const now = new Date();

    const difference = now - startDate;

    if (difference < 0) {
        return;
    }

    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCounter, 1000);

updateCounter();


// SURPRISE TERAKHIR

function finalSurprise() {

    const message =
        document.getElementById("finalMessage");

    message.classList.remove("hidden");

    createLotsOfHearts();

    message.scrollIntoView({
        behavior: "smooth"
    });
}


// MEMBUAT HATI

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = [
        "💗",
        "💕",
        "💖",
        "🌸",
        "✨",
        "🤍"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6500);
}


// BANYAK HATI

function createLotsOfHearts() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
}


// HATI MUNCUL TERUS

setInterval(() => {

    const main =
        document.getElementById("mainContent");

    if (!main.classList.contains("hidden")) {
        createHeart();
    }

}, 900);