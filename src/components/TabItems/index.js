import react from 'react';
import {Stylesheet, Text, TouchableOpacity} from 'react-native';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={{flex: 1}}>
            <Text style={{color: isFocused ? '#598FF9' : '#C8C8C8'}}>{label}</Text>
        </TouchableOpacity>
    );
};

export default TabItem;

const styles = Stylesheet.create({});