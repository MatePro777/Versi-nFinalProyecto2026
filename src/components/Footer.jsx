import { useEffect as usar_efecto, useState as usar_estado } from "react";
import { abrirChatWhatsApp, crearEnlaceWhatsApp } from "../utils/whatsapp";

function Footer({ telefonoWhatsApp }) {
    const [sugerencias_abiertas, establecer_sugerencias_abiertas] = usar_estado(false);
    const [estado_envio, establecer_estado_envio] = usar_estado("");
    const [enlace_whatsapp, establecer_enlace_whatsapp] = usar_estado("");

    usar_efecto(() => {
        if (!sugerencias_abiertas) return undefined;

        function cerrar_con_escape(evento) {
            if (evento.key === "Escape") establecer_sugerencias_abiertas(false);
        }

        window.addEventListener("keydown", cerrar_con_escape);
        return () => window.removeEventListener("keydown", cerrar_con_escape);
    }, [sugerencias_abiertas]);

    function abrir_sugerencias() {
        establecer_estado_envio("");
        establecer_enlace_whatsapp("");
        establecer_sugerencias_abiertas(true);
    }

    function preparar_sugerencia(evento) {
        evento.preventDefault();
        const formulario = new FormData(evento.currentTarget);
        const nombre = String(formulario.get("nombre") || "").trim();
        const grupo = String(formulario.get("grupo") || "").trim();
        const sugerencia = String(formulario.get("sugerencia") || "").trim();

        if (!nombre || !grupo || !sugerencia) {
            establecer_estado_envio("Completa todos los campos antes de continuar.");
            return;
        }

        const mensaje = [
            "Hola, quiero compartir una sugerencia para EL LIRIO:",
            "",
            `Nombre: ${nombre}`,
            `Grupo: ${grupo}`,
            "",
            "Sugerencia:",
            sugerencia,
        ].join("\n");
        const urlWhatsApp = crearEnlaceWhatsApp(telefonoWhatsApp, mensaje);
        establecer_enlace_whatsapp(urlWhatsApp);

        if (!abrirChatWhatsApp(urlWhatsApp)) {
            establecer_estado_envio(
                "El navegador bloqueó WhatsApp. Permite las ventanas emergentes o usa el enlace de abajo."
            );
            return;
        }

        establecer_estado_envio(
            "WhatsApp se abrió con tu sugerencia escrita. Revísala y pulsa Enviar."
        );
    }

    return (
        <footer className="footer">
            <p>© 2026 EL LIRIO · Gracias por apoyar a la tienda local</p>
            <div className="footer-actions">
                <span className="footer-contact">Contacto:</span>
                <button
                    className="sugerencia-trigger"
                    type="button"
                    onClick={abrir_sugerencias}
                >
                    Enviar sugerencia
                </button>
            </div>

            {sugerencias_abiertas && (
                <div className="sugerencia-overlay">
                    <button
                        className="sugerencia-backdrop"
                        type="button"
                        aria-label="Cerrar formulario de sugerencias"
                        onClick={() => establecer_sugerencias_abiertas(false)}
                    />
                    <section
                        className="sugerencia-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="titulo-sugerencia"
                    >
                        <div className="sugerencia-encabezado-cecytem">
                            <span className="sugerencia-sello-cecytem" aria-hidden="true">
                                C
                            </span>
                            <div>
                                <p>CECyTEM · Comunidad estudiantil</p>
                                <span>Tu voz mejora nuestra tienda</span>
                            </div>
                            <button
                                className="sugerencia-close"
                                type="button"
                                aria-label="Cerrar"
                                onClick={() => establecer_sugerencias_abiertas(false)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="sugerencia-content">
                            <p className="sugerencia-eyebrow">Buzón estudiantil</p>
                            <h2 id="titulo-sugerencia">Comparte tu sugerencia</h2>
                            <p className="sugerencia-intro">
                                Cuéntanos qué te gustaría encontrar en EL LIRIO.
                            </p>

                            <form className="sugerencia-form" onSubmit={preparar_sugerencia}>
                                <label>
                                    Tu nombre
                                    <input
                                        name="nombre"
                                        type="text"
                                        placeholder="Escribe tu nombre"
                                        autoComplete="name"
                                        required
                                        maxLength={70}
                                        autoFocus
                                    />
                                </label>
                                <label>
                                    Grupo
                                    <input
                                        name="grupo"
                                        type="text"
                                        placeholder="Ej. 311"
                                        required
                                        maxLength={30}
                                    />
                                </label>
                                <label>
                                    ¿Qué sugieres?
                                    <textarea
                                        name="sugerencia"
                                        placeholder="Escribe aquí tu sugerencia..."
                                        rows={4}
                                        required
                                        maxLength={500}
                                    />
                                </label>
                                <button className="sugerencia-submit" type="submit">
                                    Enviar por WhatsApp
                                </button>
                            </form>

                            {estado_envio && (
                                <p className="sugerencia-status" role="status">
                                    {estado_envio}
                                    {enlace_whatsapp && (
                                        <>
                                            {" "}
                                            <a
                                                href={enlace_whatsapp}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Abrir WhatsApp
                                            </a>
                                        </>
                                    )}
                                </p>
                            )}
                        </div>
                    </section>
                </div>
            )}
        </footer>
    );
}

export default Footer;
