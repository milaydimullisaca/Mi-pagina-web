// Mostrar el mensaje de bienvenida suavemente una sola vez
window.addEventListener("load", () => {
  const bienvenida = document.getElementById("bienvenida");
  bienvenida.style.top = "0px";

  // Ocultar después de 4 segundos
  setTimeout(() => {
    bienvenida.style.top = "-60px";
  }, 4000);
});

// Efectos dinámicos en tarjetas
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 8px 20px rgba(255, 150, 200, 0.4)";
  });

  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  });

  card.addEventListener("click", () => {
    const nombre = card.textContent.trim();
    alert(`✨ Estás abriendo: ${nombre} ✨`);
  });
});
