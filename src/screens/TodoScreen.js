import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab, Icon } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class TodoScreen extends Component {
    render() {
        return (
            <View style={{flex:1, background: 'white'}}>
                <View>
                    <Text style={styles.title}>
                        Today’s tasks
                    </Text>
                </View>
                <Fab
                    position="absolute"
                    size="sm"
                    icon={<FontAwesomeIcon size={30} color='white' icon={ faPlus } />}
                />
            </View>
        )
    }
}

const styles = new StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})
