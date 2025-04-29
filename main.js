function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {})
    .catch((err) => {
      console.error("Erro ao copiar texto: ", err);
    });
}
