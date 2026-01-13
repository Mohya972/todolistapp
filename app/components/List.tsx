import React from 'react';
import { FlatList } from 'react-native';
import ItemTask from './ItemTask';

const List = () => {

    const dataTasks = [];

    return (
        <FlatList
            data = {dataTasks}
            renderItem = {ItemTask}
            keyExtractor = {(item) => item.id}

        />
    )
}

export default List