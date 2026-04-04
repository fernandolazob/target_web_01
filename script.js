function copiar(texto) {
    navigator.clipboard.writeText(texto);

    const aviso = document.createElement("div");
    aviso.innerText = "Copiado ✔";
    aviso.className = "toast";

    document.body.appendChild(aviso);

    setTimeout(() => {
        aviso.remove();
    }, 1500);
}