import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faTrash, faEdit, faCheckCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment';
import {connect} from "react-redux";
import { removeTaskAction, taskFetchAction, toggleCompleteAction } from '../reducer/taskReducer';
import DisplayMode from 'react-native/Libraries/ReactNative/DisplayMode';

class TodoScreen extends Component {

    constructor(props){
        super(props);
        this.state ={
            listViewData: [],
        }
        this.getTodayDate = this.getTodayDate.bind(this);
    }

    componentDidMount() {
        this.props.taskFetchAction();
        this.setState({
            listViewData: this.props.taskList.list
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.taskList !== this.props.taskList){
            this.setState({
                listViewData: this.props.taskList.list
            })
        }
    }

    closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    navigateToAddTaskScreen() {
        const { navigate } = this.props.navigation;
        navigate('AddTaskScreen');
    }

    navigateToEditTaskScreen(data) {
        const { navigate } = this.props.navigation;
        navigate('EditTaskScreen', data);
    }

    getTodayDate(){
        return moment().format('LL').toString();
    }

    getIconByCompleted(completed) {
        return completed ? faCheckCircle: faCircle;
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style= {{marginLeft: 20, marginTop: 30}} onPress={() => this.props.navigation.toggleDrawer()}>
                    <FontAwesomeIcon size = {30} color = 'gray' icon = { faBars } />
                </TouchableOpacity>
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
                            <TouchableOpacity onPress={()=>this.props.toggleCompleteAction(data.index)} style={styles.contentContainer}>
                                <View>
                                    <Text style={[ {
                                        textDecorationLine: data.item.completed ?'line-through' : 'none',
                                    } , styles.mainContent]}>{data.item.name}</Text>
                                    <View style = {{paddingTop: 5}}>
                                        <Text  style={{ textDecorationLine: data.item.completed  ?'line-through' : 'none' }}>Due date: {data.item.date} • {data.item.time} </Text>
                                    </View>
                                </View>
                                <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                                    <FontAwesomeIcon size = {24} color = '#A7C7E7' icon = { this.getIconByCompleted(data.item.completed) } />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    renderHiddenItem = { (data, rowMap) => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity
                                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                                onPress={() => this.navigateToEditTaskScreen(data)}
                            >
                                <FontAwesomeIcon size={35} color='white' icon={ faEdit } />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.backRightBtn, styles.backRightBtnRight]}
                                onPress={() => {
                                    this.closeRow(rowMap, data.index)
                                    this.props.removeTaskAction(data.index)
                                }}
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

const mapStateToProps = state =>{
    return{
        taskList: state.taskReducer,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        taskFetchAction: ()=>{
            dispatch(taskFetchAction());
        },
        removeTaskAction: (taskNumber) => {
            dispatch(removeTaskAction(taskNumber));
        },
        toggleCompleteAction: (taskNumber) => {
            dispatch(toggleCompleteAction(taskNumber));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoScreen);

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
        marginTop: 60,
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
        borderLeftWidth: 10,
        borderLeftColor: '#A7C7E7',
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
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mainContent: {
        fontSize: 18,
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
