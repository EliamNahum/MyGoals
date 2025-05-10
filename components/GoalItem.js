import { StyleSheet, View, Text, Pressable } from "react-native"

function GoalItem ({itemData, onDeleteItem, id}){
    function deleteGoalHandeler{
        onDeleteItem(id)
        console.log('Delet Goal handeler')
    }

    return(
        <Pressable onPress={deleteGoalHandeler}>
            <View style={style.goalsItem} >
                <Text style={style.goalText}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        background: '#8576FF',
        color; 'white'
    },
    goalText: {
        color: 'white'
    }
    }
})