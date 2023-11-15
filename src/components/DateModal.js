import React, { useState } from "react";
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useSelector } from 'react-redux';
import InputText from './InputTextDate';

const DataModal = props => {
    const date = useSelector((state) => state.pesquisa.data)
    const dateFormat = new Date(date)

    const [data, setData] = useState(dateFormat == '' || new Date());
    const [open, setOpen] = useState(false);

    const handleDateSelect = (selectedDate) => {
        setData(selectedDate);
        setOpen(false);
        // Passa a data selecionada de volta para a página principal
        props.onDateSelect(selectedDate);
    }

    return (
        <>
            <View>
                <InputText
                    showSoftInputOnFocus={false}
                    onPressIn={() => setOpen(true)}
                    texto="Data"
                    value={data.toDateString()}
                />
            </View>
            <DatePicker
                modal
                open={open}
                date={data}
                onConfirm={(selectedDate) => handleDateSelect(selectedDate)}
                onCancel={() => setOpen(false)}
            />
        </>
    )
}

export default DataModal;