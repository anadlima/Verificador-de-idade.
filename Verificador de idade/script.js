function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textoano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || (fano.value) > ano) {
        window.alert('ERRO! Verifique seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}