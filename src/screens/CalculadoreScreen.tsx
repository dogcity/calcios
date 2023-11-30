import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../theme/appTheme'
import FilaBotonCalcComponent from '../components/FilaBotonCalcComponent'
import { useCalculadora } from '../hooks/useCalculadora'

export const CalculadoreScreen = () => {
  const {
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
  } = useCalculadora()

  return (
    <View style={ styles.calculadoraContainer }>
      <Text style={ styles.resultadoAnterior }>{numero1}</Text>
      <Text style={ styles.resultadoAnterior }>{operacion}</Text>
      <Text style={ styles.resultadoAnterior }>{numero2}</Text>
      <Text
        style={ styles.resultado }
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {entrada}
      </Text>
      <FilaBotonCalcComponent botones={[
        { texto: 'C', color: '#9B9B9B', accion:limpiar },
        { texto: '+/-', color: '#9B9B9B', accion: positivoNegativo },
        { texto: 'del', color: '#9B9B9B', accion: borrar },
        { texto: '/', color: '#FF9427', accion: dividir },
      ]} />
      <FilaBotonCalcComponent botones={[
        { texto: '7', accion: armarEntrada },
        { texto: '8', accion: armarEntrada },
        { texto: '9', accion: armarEntrada },
        { texto: 'X', color: '#FF9427', accion: multiplicar },
      ]} />
      <FilaBotonCalcComponent botones={[
        { texto: '4', accion: armarEntrada },
        { texto: '5', accion: armarEntrada },
        { texto: '6', accion: armarEntrada },
        { texto: '-', color: '#FF9427', accion: restar },
      ]} />
      <FilaBotonCalcComponent botones={[
        { texto: '1', accion: armarEntrada },
        { texto: '2', accion: armarEntrada },
        { texto: '3', accion: armarEntrada },
        { texto: '+', color: '#FF9427', accion: sumar },
      ]} />
      <FilaBotonCalcComponent botones={[
        { texto: '0', full: true, accion: armarEntrada },
        { texto: '.', accion: armarEntrada },
        { texto: '=', color: '#FF9427', accion: resultado },
      ]} />
    </View>
  )
}
