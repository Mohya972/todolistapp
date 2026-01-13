import React from 'react';
import { FlatList } from 'react-native';
import ItemTask from './ItemTask';
import NoTask from './NoTask';
import StatTask from './StatTask';

const List = () => {

    const dataTasks = [];

    return (
        <FlatList
            data = {dataTasks}
            renderItem = {ItemTask}
            keyExtractor = {(item) => item.id}
            ListEmptyComponent={NoTask}
            ListFooterComponent={StatTask}

        />
    )
}

export default List