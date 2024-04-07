import React from "react";
import './Pages.css'

export default () => {
    return (
        <div id="page07" className="pages-geral">
            <span>Queremos te conhecer</span>
            <form action="" id="form-contact">
                <input type="text" placeholder="seu nome..." />
                <input type="text" placeholder="telefone" />
                <input type="text" placeholder="assunto" />
                <button>enviar</button>
            </form>
            <iframe id="mapa-local"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234078.6615049449!2d-46.7552142583687!3d-23.551231072605837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5666ddc1b17b%3A0xb74b21c8118d4a31!2sSoundfinger!5e0!3m2!1spt-BR!2sbr!4v1652726687606!5m2!1spt-BR!2sbr"
                width={600} height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}