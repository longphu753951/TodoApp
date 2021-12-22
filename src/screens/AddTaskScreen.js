import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { Input, Fab } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faClock } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '../components/DateTimePicker';
import { connect } from 'react-redux';
import { addTaskAction } from '../reducer/taskReducer'

class AddTaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            date: '',
            time: '',
        }
        this.openDateModal = this.openDateModal.bind(this);
    }

    
    formatDate() {
        return this.state.dateText || 'DD/MM/YYYY';
    }

    formatHour() {
        return this.state.hourText || 'HH:mm'
    }

    openDateModal() {
       this.setState({open: true});
    }

    addTask = () => {
        let newTask = {
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            completed: false,
        }
        this.props.addTaskAction(newTask);
        this.props.navigation.goBack();
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <SafeAreaView style={{marginHorizontal: 20}}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.title}>
                            Add new task
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Input
                         borderColor={'#000000'} 
                         fontSize={18}
                         onChangeText={(text) => {
                             this.setState({
                                 name: text
                             })
                         }}
                         variant="underlined" 
                         placeholder="Type your new task ..." />
                        {/* <Button 
                            title="Open" 
                            onPress={() => this.setState({open: true})} /> */}
                        <View style={styles.dateTimeInputContainer}>
                            <DateTimePicker
                                onChange={(dateText) => {
                                    this.setState({
                                        date: dateText,
                                    });
                                }}
                            />
                            <DateTimePicker
                                icon = {faClock}
                                placeholder='HH:mm'
                                mode='time'
                                onChange={(dateText) => {
                                    this.setState({
                                        time: dateText
                                    })
                                }}
                                buttonStyle = {{marginLeft: 20}}   
                            />
                        </View>
                    </View>
                    <Fab
                        position="absolute"
                        size="sm"
                        onPress={()=> {
                            this.addTask()
                        }}
                        icon={<FontAwesomeIcon size={35} color='white' icon={ faPlus } />}
                    />
                </SafeAreaView>
            </KeyboardAwareScrollView>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        addTaskAction: (newTask)=>{
            dispatch(addTaskAction(newTask));
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTaskScreen);

const styles = new StyleSheet.create({
    headingContainer: {
        marginTop: 94,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 30
    },
    dateTimeInputContainer: {
        flexDirection: 'row',
        marginTop: 40,
    }
})
