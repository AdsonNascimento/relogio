function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora >= 0 && hora < 12) {
        img.src="imagens/manha1.png"
        document.body.style.background = "#e2ccd9f"
    } else if (hora >= 12 && hora < 18) {
        img.src="imagens/tarde1.png"
        document.body.style.background = "#b9846f"
    } else {
        img.src="imagens/noite1.png"
        document.body.style.background = "#515154"
    }
}