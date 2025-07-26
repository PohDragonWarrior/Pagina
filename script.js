// Animación de "Te Amo" cayendo
function createFallingTeAmo() {
  const container = document.getElementById('falling-container');
  const teAmo = document.createElement('div');
  teAmo.classList.add('falling');
  teAmo.innerText = 'Te Amo';
  teAmo.style.left = Math.random() * 100 + 'vw';
  teAmo.style.animationDuration = (5 + Math.random() * 5) + 's';
  container.appendChild(teAmo);

  setTimeout(() => {
    teAmo.remove();
  }, 10000);
}

setInterval(createFallingTeAmo, 500);

// Click en el "Te Amo" central
document.getElementById('main-teamo').addEventListener('click', () => {
  document.getElementById('notes-section').style.display = 'block';
});

// Contenido de las cartas
const notas = {
  nota1: "Eres mi razón para sonreír cada día. 💖",
  nota2: "Nunca dejaré de decirte cuánto te amo. 🌹",
  nota3: "Cada día contigo es un regalo que atesoro. ✨"
};

function openNote(id) {
  document.getElementById('popup-content').innerText = notas[id];
  document.getElementById('note-popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('note-popup').style.display = 'none';
}