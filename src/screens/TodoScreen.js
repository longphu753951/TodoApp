import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

export default class TodoScreen extends Component {

    constructor(props){
        super(props);
        this.state ={
            listViewData: [],
        }
        this.getTodayDate = this.getTodayDate.bind(this);
    }

    componentDidMount() {
        this.setState({
            listViewData: Array(20)
            .fill("")
            .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
        })
    }

    navigateToAddTaskScreen() {
        const { navigate } = this.props.navigation;
        navigate('AddTaskScreen');
    }

    navigateToEditTaskScreen() {
        const { navigate } = this.props.navigation;
        navigate('EditTaskScreen');
    }

    getTodayDate(){
        return moment().format('LL').toString();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style= {{marginHorizontal: 20}}>
                    <View style ={styles.titleContainer}>
                        <Text style={styles.title}>
                            Today’s tasks
                        </Text>
                        <TouchableOpacity onPress = {() => this.navigateToAddTaskScreen()} style = {styles.addTaskButton}>
                            <FontAwesomeIcon size = {24} color = 'gray' icon = { faPlus } />
                        </TouchableOpacity>
                    </View>
                    <Text style ={styles.dateText}>
                        {this.getTodayDate()}
                    </Text>
                </View>
                <SwipeListView
                style= {styles.listView}
                    data={this.state.listViewData}
                    renderItem={ (data, rowMap) => (
                        <View style={styles.item}>
                            <TouchableOpacity style={styles.contentContainer}>
                                <Text style={styles.mainContent}>I am {data.item.text} in a SwipeListView</Text>
                                <View>
                                    <Text>Due date: 24/04/2022 12:26 AM </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    renderHiddenItem = { (data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity
                                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                                onPress={() => this.navigateToEditTaskScreen()}
                            >
                                <FontAwesomeIcon size={35} color='white' icon={ faEdit } />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.backRightBtn, styles.backRightBtnRight]}
                                onPress={() => console.log('delete')}
                            >
                                <FontAwesomeIcon size={35} color='white' icon={ faTrash } />
                            </TouchableOpacity>
                        </View>
                    )}
                    disableRightSwipe = {true}
                    rightOpenValue = {-150}
                />
                {/* <Fab
                    onPress={()=> this.navigateToAddTaskScreen()}
                    position="absolute"
                    size="sm"
                    icon={<FontAwesomeIcon size={30} color='white' icon={ faPlus } />}
                /> */}
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
    addTaskButton: {
        alignSelf:'center',
    },
    titleContainer: {
        marginTop: 94,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 16,
    },
    listView: {
        marginTop: 30,
    },
    item: {
        width: '90%',
        paddingVertical: 18,
        marginHorizontal: 20,
        height: 80,
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
    },
    rowBack: {
        width: '90%',
        height: 80,
        paddingVertical: 18,
        marginHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#f7f7f7',
        borderColor: '#F7F7F7',
        marginBottom: 20,
        
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: '#77dd77',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#d26466',
        right: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
})
