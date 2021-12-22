import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { Input, Fab } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faClock } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '../components/DateTimePicker';
import { connect } from 'react-redux';
import { editTaskAction } from '../reducer/taskReducer';

class EditTaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: this.props.route.params.item.name,
            date: this.props.route.params.item.date,
            time: this.props.route.params.item.time,
        }
        this.openDateModal = this.openDateModal.bind(this);
    }

    componentDidMount(){
        
    }

    componentDidUpdate() {
        
    }

    formatDate() {
        return this.state.dateText || 'DD/MM/YYYY';
    }

    formatHour() {
        return this.state.hourText || 'HH:mm'
    }

    openDateModal() {
       this.setState({open: true})
    }

    editTask = () => {
        let taskContent = {
            name: this.state.name,
            date: this.state.date,
            time: this.state.time
        }
        this.props.editTaskAction(this.props.route.params.index, taskContent)
        this.props.navigation.goBack();
    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <SafeAreaView style={{marginHorizontal: 20}}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.title}>
                            Edit your task
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Input
                         defaultValue={this.state.name}
                         borderColor={'#000000'} 
                         fontSize={18}
                         variant="underlined" 
                         onChangeText={(text) => {
                            this.setState({
                                name: text
                            })
                        }}
                         placeholder="Type to edit your task ..." />
                        {/* <Button 
                            title="Open" 
                            onPress={() => this.setState({open: true})} /> */}
                        <View style={styles.dateTimeInputContainer}>
                            <DateTimePicker
                                defaultDate={this.state.date}
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
                                defaultDate={this.state.time}
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
                        icon={<FontAwesomeIcon size={35} color='white' icon={ faEdit } />}
                        onPress={()=> {
                            this.editTask()
                        }}
                    />
                </SafeAreaView>
            </KeyboardAwareScrollView>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        editTaskAction: (taskNumber, taskContent)=>{
            dispatch(editTaskAction(taskNumber, taskContent));
        }
    }
}

export default connect(null,mapDispatchToProps)(EditTaskScreen);

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
