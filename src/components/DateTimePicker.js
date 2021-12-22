import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewPropTypes  } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import moment from 'moment';

export default function DateTimePicker(props) {
    const [date, setDate] = useState(new Date());
    const [dateText, setDateText] = useState('');
    const [open, setOpen] = useState(false);
    const {icon, placeholder, buttonStyle, mode, onChange, defaultDate} = props;

    useEffect(() => {
        onChange(dateText);
    },[dateText])

    useEffect(()=> {
        if(defaultDate && mode) {
            setDateText(defaultDate);
            switch(mode) {
                case 'date':
                    setDate(moment(defaultDate, 'DD/MM/YYYY').toDate());
                    break;
                case 'time':
                    setDate(moment(defaultDate, 'hh:mm A').toDate());
                    break;
                default:
                    return;
            }
        }
    }, []);

    const openDateModal = () => {
        setOpen(true);
    }
    const formatDate = () => {
        return dateText || placeholder;
    }

    const onSelectedDate = (date) => {
        setOpen(false);
        setDate(date);
        switch(mode) {
            case 'date':
                setDateText(formatDay(date));
                break;
            case 'time':
                setDateText(formatHour(date));
                break;
            default:
                return;
        }
    }

    const formatDay = (date = new Date()) => {
        return moment(date).format("DD/MM/YYYY")
    }

    const formatHour = (date = new Date()) => {
        return moment(date).format('hh:mm A');
    }

    const formatColor = () => {
        return !dateText? 'gray': 'black';
    }

    const dateTimeModal = () => {
        return (
            <DatePicker
                modal
                mode= {mode}
                open={open}
                date={date}
                onConfirm={(date) => {
                    onSelectedDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        )
    }

    return (
        <>
            <TouchableOpacity style={[style.button, buttonStyle]}
                onPress={() => openDateModal()}
            >
                <FontAwesomeIcon
                    style={{
                        marginRight: 10,
                        alignSelf:'center',
                    }}
                    size={18} 
                    color= {formatColor()} 
                    icon={ icon } />
                <Text
                    style ={{
                        fontSize: 18,
                        color: formatColor(),
                    }}
                >{formatDate()}</Text>
            </TouchableOpacity>
            {dateTimeModal()}
        </>
    )
}

DateTimePicker.propTypes = {
    placeholder: PropTypes.string,
    mode: PropTypes.string,
    buttonStyle: ViewPropTypes.style,
    icon: PropTypes.any,
    onChange: PropTypes.func,
    defaultDate: PropTypes.string,
}

DateTimePicker.defaultProps = {
    placeholder: 'DD/MM/YYYY',
    buttonStyle: {},
    mode: 'date',
    icon: faCalendar,
    onChange: () => {},
}

const style = new StyleSheet.create({
    button: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingBottom: 7,
        width: '45%'
    }
})