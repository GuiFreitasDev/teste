function calcular() {
    let num = document.getElementById("num").value;
    let operador = document.getElementsByName("sel");
    let result = document.getElementById("result")

    if (num > 9 || num < 0 || num.length == 0) {
        window.alert("Insira número valida entre 0 e 9!");
        result.innerHTML ="Aguardando..."
    }
    else if (operador[0].checked) {
        let n = Number(num);
        result.innerHTML = "Soma:<br>"
        for (let c = 1;c <= 9;c++) {
            let r = n + c;
            result.innerHTML += `${n} + ${c} = ${r}<br>`;
            console.log(c)
        }
    }
    else if (operador[1].checked) {
        let n = Number(num);
        result.innerHTML = "Soma:<br>"
        for (let c = 1;c <= 9;c++) {
            let r = n - c;
            result.innerHTML += `${n} - ${c} = ${r}<br>`;
        }
    }
    else if (operador[2].checked) {
        let n = Number(num);
        result.innerHTML = "Soma:<br>"
        for (let c = 1;c <= 9;c++) {
            let r = n * c;
            result.innerHTML += `${n} x ${c} = ${r}<br>`;
        }
    }
    else if (operador[3].checked) {
        let n = Number(num);
        result.innerHTML = "Soma:<br>"
        for (let c = 1;c <= 9;c++) {
            let r = n / c;
            let ar = parseFloat(r.toFixed(2));
            result.innerHTML += `${n} / ${c} = ${ar}<br>`;
        }
    }
}
