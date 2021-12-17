import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Fab, Icon } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class TodoScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Fab
        position="absolute"
        size="sm"
        icon={<FontAwesomeIcon size={30} color='white' icon={ faPlus } />}
      />
            </View>
        )
    }
}
