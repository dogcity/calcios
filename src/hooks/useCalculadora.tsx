import { useState } from 'react'

export const useCalculadora = () => {
  const [entrada, setEntrada] = useState('0')
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [operacion, setOperacion] = useState('')
  const [igual, setIgual] = useState(false)
  const reestablecer = (texto: string = '0') => {
    setEntrada(texto)
    setNumero1('')
    setNumero2('')
    setOperacion('')
    setIgual(false)
  }
  const limpiar = () => setEntrada('0')
  const armarEntrada = (texto: string) => {
    if (igual) return reestablecer(texto === '.' ? '0.' : texto)
    // no repetir el punto
    if (entrada.includes('.') && texto === '.') return

    // si el cero es el primer caracter y se ingresa un punto
    if (entrada.startsWith('0') && !entrada.includes('.') && texto === '.') {
      setEntrada(entrada + texto)
      return
    }

    // si el - es el primer caracter y se ingresa un punto
    if (entrada.startsWith('-') && !entrada.includes('.') && texto === '.') {
      setEntrada(entrada + texto)
      return
    }

    // si el - es el primer caracter y se ingresa un cero
    if (entrada.startsWith('-0') && entrada.length === 2 && texto !== '0') {
      setEntrada('-' + texto)
      return
    }

    setEntrada(entrada === '0' ? texto : entrada + texto)
  }
  const positivoNegativo = () => {
    if (igual) return reestablecer('-0')

    setEntrada((entrada.includes('-'))
      ? entrada.replace('-', '')
      : '-' + entrada)
  }
  const borrar = () => {
    if (igual) return reestablecer('0')
    if (entrada.length === 1) {
      setEntrada('0')
      return
    }

    setEntrada(entrada.slice(0, -1))
  }
  const dividir = () => {
    setNumero1(entrada)
    setOperacion('/')
    setEntrada('0')
  }
  const multiplicar = () => {
    setNumero1(entrada)
    setOperacion('X')
    setEntrada('0')
  }
  const restar = () => {
    setNumero1(entrada)
    setOperacion('-')
    setEntrada('0')
  }
  const sumar = () => {
    setNumero1(entrada)
    setOperacion('+')
    setEntrada('0')
  }
  const resultado = () => {
    if (igual) return reestablecer('0')

    setIgual(true)
    setNumero2(entrada)
    setEntrada('0')

    const num1 = Number(numero1)
    const num2 = Number(entrada)
    if (num2 === 0) return reestablecer('0')

    switch (operacion) {
      case '/':
        setEntrada((num1 / num2).toString())
        break
      case 'X':
        setEntrada((num1 * num2).toString())
        break
      case '-':
        setEntrada((num1 - num2).toString())
        break
      case '+':
        setEntrada((num1 + num2).toString())
        break
    }
  }

  return {
    numero1,
    operacion,
    numero2,
    entrada,
    limpiar,
    positivoNegativo,
    borrar,
    dividir,
    armarEntrada,
    multiplicar,
    restar,
    sumar,
    resultado,
  }
}
