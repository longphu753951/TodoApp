import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { Input, Fab } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faClock } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '../components/DateTimePicker';

export default class AddTaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            date: new Date(),
            open: false,
            dateText:'',
            hour: new Date(),
            hourText: '',
        }
        this.openDateModal = this.openDateModal.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state.date);
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
                         variant="underlined" 
                         placeholder="Type your new task ..." />
                        {/* <Button 
                            title="Open" 
                            onPress={() => this.setState({open: true})} /> */}
                        <View style={styles.dateTimeInputContainer}>
                            <DateTimePicker
                                onChange={(dateText) => {
                                    console.log(dateText);
                                }}
                            />
                            <DateTimePicker
                                icon = {faClock}
                                placeholder='HH:mm'
                                mode='time'
                                onChange={(dateText) => {
                                    console.log(dateText);
                                }}
                                buttonStyle = {{marginLeft: 20}}   
                            />
                        </View>
                    </View>
                    <Fab
                        position="absolute"
                        size="sm"
                        icon={<FontAwesomeIcon size={35} color='white' icon={ faPlus } />}
                    />
                </SafeAreaView>
            </KeyboardAwareScrollView>
        )
    }
}

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
