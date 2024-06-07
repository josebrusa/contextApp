import { Pressable, Text, View } from "react-native";
import { styles } from "../../../config";
import { useCountStore } from "../../store/count-store";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const SettingsScreen = () => {

    const incrementBy = useCountStore(
        (state) => state.incrementBy
    )

    const count = useCountStore(
        (state) => state.count
    )

    const navigation = useNavigation()
    useEffect(() => {

        navigation.setOptions({
            title: `Counter: ${count}`
        })
    }, [ count ])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter</Text>

            <View>
                <Text style={styles.title}>{count}</Text>
            </View>

            <Pressable
                style={styles.primaryButton}
                onPress={() => incrementBy(1)}
            >
                <Text>Incrementar</Text>
            </Pressable>
            <Pressable
                style={styles.primaryButton}
                onPress={() => incrementBy(-1)}
            >
                <Text>Decrementar</Text>
            </Pressable>
        </View>
    );
};
