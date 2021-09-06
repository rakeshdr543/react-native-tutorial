import React  from 'react';
import {StyleSheet, Text,  TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({pressHandler,item}) {

    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'  />
                <Text style={styles.itemText} >{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        borderWidth:1,
        marginTop: 16,
        borderColor:'#bbb',
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center'
    },
    itemText:{
        marginLeft:10
    }
});
