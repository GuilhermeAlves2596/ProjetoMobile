import React, {useState} from "react";
import { View } from 'react-native';
import InputText from './InputTextDate';
import DatePicker from 'react-native-date-picker';

const DataModal = props => {
    const [data, setData] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
      <> 
        <View>
            <InputText
                showSoftInputOnFocus = {false}
                onPressIn = {() => setOpen(true)}
                texto="Data"
                value={data.toDateString()}
            />
        </View>
        <DatePicker
            modal
            open={open}
            date={data}
            onConfirm={(data) => {
                setData(data)
                setOpen(false)
            }}
            onCancel={() => {
                setOpen(false)
            }}    
        />
      </>
    )
}

export default DataModal;