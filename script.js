document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu a");
    const contentDiv = document.getElementById("content");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obtém o ID da seção correspondente
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Remove o conteúdo anterior da div de conteúdo
                contentDiv.innerHTML = "";

                // Cria um novo elemento <h3> com o nome do menu
                const sectionName = document.createElement("h3");
                sectionName.innerText = link.innerText;

                // Adiciona o novo elemento <h3> ao conteúdo
                contentDiv.appendChild(sectionName);

                // Adiciona o conteúdo da seção
                contentDiv.appendChild(targetElement);
            }

            // Redireciona para a seção clicada
            window.location.href = this.getAttribute("href");
        });
    });
});