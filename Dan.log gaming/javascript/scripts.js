/* animação nas imagens */
document.addEventListener('DOMContentLoaded', () => {
  const images = document.getElementsByClassName('zoomImagem');

  Array.from(images).forEach(image => {
      image.addEventListener('mouseover', () => {
          image.classList.add('zoomed');
      });

      image.addEventListener('mouseout', () => {
          image.classList.remove('zoomed');
      });
    });
});

/* barra de pesquisa */

document.addEventListener("DOMContentLoaded", function() {
  const entradapesquisa = document.getElementById("entradapesquisa");
  const sugestao = document.getElementById("sugestao");

  // Lista de sugestões
  const suggestions = [
      "Assassins Creed: Brotherhood",
      "Resident Evil 2 Remake",
      "Grand Theft Auto V",
      "Horizon Zero Dawn",
      "Heavy Rain",
      "DetroiT Become Human",
      "The Walking Dead Season One",
  ];

  entradapesquisa.addEventListener("input", function() {
      const input = entradapesquisa.value.toLowerCase();
      // Filtra as sugestões com base na entrada do usuário
      const filteredSuggestions = suggestions.filter(suggestion => 
          suggestion.toLowerCase().includes(input)
      );

      // Limpa as sugestões anteriores
      sugestao.innerHTML = "";

      if (input && filteredSuggestions.length > 0) {
          // Mostra a lista de sugestões
          sugestao.style.display = "block";

          filteredSuggestions.forEach(suggestion => {
              const li = document.createElement("li");
              li.textContent = suggestion;
              li.addEventListener("click", function() {
                entradapesquisa.value = suggestion;
                  sugestao.style.display = "none";
              });
              sugestao.appendChild(li);
          });
      } else {
          // Esconde a lista de sugestões se não houver correspondências
          sugestao.style.display = "none";
      }
  });

  // Esconde a lista de sugestões ao clicar fora dela
  document.addEventListener("click", function(event) {
      if (event.target !== entradapesquisa) {
          sugestao.style.display = "none";
   }
 });
});



