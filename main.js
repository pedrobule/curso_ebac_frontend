const form = document.getElementById("form-submit");

document.getElementById("form-submit").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);

    
    if (campoB > campoA) {
        alert("Enviado corretamente, Campo B é maior que o Campo A")

        campoA.value = " ";
        campoB.value = " ";

    } else {
        alert("Incorreto")
    }
})

console.log(form);