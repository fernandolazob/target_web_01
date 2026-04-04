function copiar(texto, btn) {
    navigator.clipboard.writeText(texto);

    const textoOriginal = btn.innerHTML;

    // cambiar texto
    btn.innerHTML = "✔ Copiado";
    btn.style.background = "#27ae60";

    // volver a normal
    setTimeout(() => {
        btn.innerHTML = textoOriginal;
        btn.style.background = "";
    }, 1200);
}