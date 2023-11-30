import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from '../theme/appTheme'

export interface BotonCalcProps {
  texto: string
  accion: (texto: string) => void
  color?: string
  full?: boolean
}

export const BotonCalcComponent = ({ texto, accion, color = '#2D2D2D', full = false }: BotonCalcProps) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View style={{
        ...styles.boton,
        backgroundColor: color,
        width: full ? 180 : 80,
      }}>
        <Text style={{
          ...styles.botonTexto,
          color: (color === '#9B9B9B') ? 'black' : 'white',
        }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
