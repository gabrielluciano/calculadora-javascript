let lastValor = 0
let numero = ''
let lastKeyIgual = false
const calc = document.querySelector('.currentCalc')
const lastCalc = document.querySelector('.lastCalc')

function Calculadora(key) {
    if (key != '=') {
        if (key == 'del') {
            if (!lastKeyIgual) {
                if (numero != '0') {
                    numero = numero.slice(0, numero.length - 1)
                }
            }
            else {
                calc.innerHTML = '0'
                numero = ''
            }
        }
        else {
            if (lastKeyIgual && !isNaN(key)) numero = ''
            if (numero == '' && isNaN(key)) {
                numero = `0${key}`
            }
            else {
                numero += key
                lastKeyIgual = false
            }
        }
        calc.innerHTML = numero
    }
    else {
        let result = eval(numero)
        if (isNaN(result)) {
            calc.innerHTML = `Erro`
        }
        else {
            lastCalc.innerHTML = numero
            calc.innerHTML = `${result}`
            numero = result.toString()
        }
        lastKeyIgual = true
    }
}