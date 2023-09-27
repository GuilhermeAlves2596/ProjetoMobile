import React, { useState } from "react";
import { TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal'; // Importe o Modal
import InputText from './InputText';

const DataModal = props => {
    const [data, setData] = useState(new Date());
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleDateChange = (newDate) => {
        setData(newDate);
        toggleModal(); // Feche o modal após a seleção da data
    };

    return (
        <>
            <View>
                <TouchableOpacity onPress={toggleModal}>
                    <InputText
                        showSoftInputOnFocus={false}
                        texto="Data"
                        value={data.toDateString()} // Exibe a data selecionada
                        onChangeText={() => {}}
                    />
                </TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible}>
                <View>
                    <DatePicker
                        date={data}
                        onDateChange={handleDateChange}
                        mode="date"
                    />
                </View>
            </Modal>
        </>
    )
}

export default DataModal;