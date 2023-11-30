import React from 'react'
import { View } from 'react-native'

import { styles } from '../theme/appTheme'
import { BotonCalcComponent, BotonCalcProps } from './BotonCalcComponent'

interface FilaBotonCalcProps {
  botones: BotonCalcProps[]
}

const FilaBotonCalcComponent = ({ botones }: FilaBotonCalcProps) => {
  return (
    <View style={ styles.fila }>
      {
        botones.map((boton, index) => (
          <BotonCalcComponent
            key={ index }
            { ...boton }
          />
        ))
      }
    </View>
  )
}

export default FilaBotonCalcComponent
