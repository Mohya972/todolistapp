import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '@/app/(tabs)/styles';
import { modifier, supprimer } from '@/app/store/slices/taskSlice';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { useDispatch } from 'react-redux';

const ItemTask = ({ task }) => {
    console.log(task);

    const dispatch = useDispatch(); // pour écrire dans le store

    const toggleTodo = (id) => {
        dispatch(modifier(id));
        console.log(id);
    } // Fin toggleTodo

    const deleteTodo = (id) => {
        console.log('delete :', id);
        dispatch(supprimer(id)); // supprimer la tâche id dans le store
    } // Fin deleteTodo

    // //
    // const RightAction = () => { 
    //     return <TouchableOpacity
    //                 style={styles.deleteBtn}
    //                 onPress={() => deleteTodo(task.id)}
    //             >
    //                 <Text style={styles.deleteText}>✕</Text>
    //             </TouchableOpacity>
    // } // Fin RightAction

    // //
    // const LeftAction = () => { 
    //     return <TouchableOpacity
    //                 style={styles.checkbox}
    //                 onPress={() => toggleTodo(task.id)}
    //             >
    //                 <View
    //                     style={[
    //                         styles.checkboxInner,
    //                         task.completed && styles.checkboxChecked,
    //                     ]}
    //                 >
    //                     {task.completed && <Text style={styles.checkmark}>✓</Text>}
    //                 </View>
    //             </TouchableOpacity>
    // } // Fin LeftAction

    const RightAction = () => {

        return (<View style={styles.rightAction}>

            <TouchableOpacity
                style={styles.checkbox}
                onPress={() => toggleTodo(task.id)}
            >
                <View
                    style={[
                        styles.checkboxInner,
                        task.completed && styles.checkboxChecked,
                    ]}
                >
                    {task.completed && <Text style={styles.checkmark}>✓</Text>}
                </View>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteTodo(task.id)}
            >
                <Text style={styles.deleteText}>✕</Text>
            </TouchableOpacity>
        </View>
        )

    }// end RightAction

    return (
        <ReanimatedSwipeable
            containerStyle={styles.todoItem}
            friction={2}
            enableTrackpadTwoFingerGesture
            rightThreshold={40}
            renderRightActions={RightAction}
        >


            <Text
                style={[
                    styles.todoText,
                    task.completed && styles.todoTextCompleted,
                ]}
            >
                {task.title}
            </Text>


        </ReanimatedSwipeable>
    )
}

export default ItemTask