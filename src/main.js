document.addEventListener("DOMContentLoaded", function () {
    const options = {
        strings: ["Desenvolvedor Web", "Designer Gráfico", "Apaixonado por Tecnologia"],
        typeSpeed: 100, // Ajuste a velocidade da digitação aqui (em milissegundos)
        backSpeed: 50, // Velocidade ao apagar o texto (em milissegundos)
        backDelay: 2000, // Tempo de espera antes de começar a apagar (em milissegundos)
        startDelay: 1000, // Tempo de espera antes de começar a digitar (em milissegundos)
        loop: true, // Fazer o loop do efeito
    };

    const typed = new Typed(".typing", options);
});

