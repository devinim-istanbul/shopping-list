import React from 'react';
import { View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import ShoppingLine from "./ShoppingLine";

const ShoppingList = ({ list }) => {
    if(!list)
        return true;
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
            {renderList(list)}
        </ScrollView>
        <Icon
            raised
            reverse
            name='plus'
            type='font-awesome'
            color='#55ab2b'
            containerStyle={styles.addButton}
            onPress={() => console.log('hello')} />
        </View>
    )
};

const renderList = (list) => {
    return list.map(item => <ShoppingLine key={item.name} lineItem={item}/>);
};

const common = {
    margin: 20
};

const styles = {
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
    scrollContainer: {
        position: 'absolute',
        left: common.margin,
        top: common.margin,
        bottom: common.margin,
        right: common.margin,
    },
    innerContainer: {

    },
    addButton: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
    }
};

export default ShoppingList;
