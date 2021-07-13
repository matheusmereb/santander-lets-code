window.addEventListener("load", () => {
    
    // Timer começa no 'click' do botão ->
    const countDiv = document.getElementById("botao");
    botao.addEventListener("click", () => {

    // Timer começa no 'load' da página ->
    // window.addEventListener("load", () => {

        // Tempo, em segundos, que queremos.
        let sec = 180;

        const countDiv = document.getElementById("timer");

        const secpass = () => {

            let min = Math.floor(sec/60);
            let segundosRestantes = sec % 60;

            if (segundosRestantes < 10) {
                segundosRestantes = "0" + segundosRestantes;
            }

            if (min < 10) {
                min = "0" + min;
            }

            // Gera o formato de 02:59
            countDiv.innerHTML = min + ":" + segundosRestantes

            // Condição final
            if (sec > 0) {
                sec = sec - 1;
            }
            else{
                countDiv.innerHTML = "Acabou!"
            }

        };

        const countDown = setInterval(() => secpass(), 1000);

    });

});