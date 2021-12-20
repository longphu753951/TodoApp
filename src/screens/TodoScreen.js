import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Fab, Icon } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class TodoScreen extends Component {

    constructor(props){
        super(props);
        this.state ={
            listViewData: [],
        }
    }

    componentDidMount() {
        this.setState({
            listViewData: Array(20)
            .fill("")
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Today’s tasks
                    </Text>
                    <SwipeListView
                    style= {styles.listView}
                        data={this.state.listViewData}
                        renderItem={ (data, rowMap) => (
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.contentContainer}>
                                    <Text style={styles.mainContent}>I am {data.item.text} in a SwipeListView</Text>
                                    <View>
                                        <Text>Task </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        renderHiddenItem={ (data, rowMap) => (
                            <View style={styles.rowBack}>
                                
                            </View>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                    />
                        
                    
                </View>
                <Fab
                    position="absolute"
                    size="sm"
                    icon={<FontAwesomeIcon size={30} color='white' icon={ faPlus } />}
                />
            </SafeAreaView>
        )
    }
}

const styles = new StyleSheet.create({
    container: {
        
        flex:1, 
        background: 'white', 
        flexDirection:'column'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 94,
        marginLeft: 20,
    },
    listView: {
        marginTop: 30,
    },
    item: {
        width: '90%',
        paddingVertical: 18,
        marginHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#f7f7f7',
        borderColor: '#F7F7F7',
        marginBottom: 20,
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.07,
        shadowRadius: 4.65,
        elevation: 7,
    },
    contentContainer: {
        marginLeft: 15,
    },
    mainContent: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})
