export function crearEnlaceWhatsApp(telefono, mensaje) {
    return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}

export function abrirChatWhatsApp(url) {
    const ventana = window.open(url, "_blank");
    if (!ventana) return false;

    ventana.opener = null;
    return true;
}
