import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { Input, Fab } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faClock } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '../components/DateTimePicker';

export default class EditTaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            date: '',
            time: '',
        }
        this.openDateModal = this.openDateModal.bind(this);
    }

    componentDidMount(){
        this.setState({
            name: this.props.route.params.name,
            date: this.props.route.params.date,
            time: this.props.route.params.time,
        })
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
                         borderColor={'#000000'} 
                         fontSize={18}
                         variant="underlined" 
                         placeholder="Type to edit your task ..." />
                        {/* <Button 
                            title="Open" 
                            onPress={() => this.setState({open: true})} /> */}
                        <View style={styles.dateTimeInputContainer}>
                            <DateTimePicker
                                defaultDate={this.state.date}
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
