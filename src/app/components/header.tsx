import { View, Text, Image } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { theme } from "../theme";

export default function Header(){
    return (
        <View className="flex flex-row items-center justify-between mb-6 pr-6 pl-6">
            <View className="flex flex-row items-center gap-4">
                <Image source={{
                    uri: 'https://i.imgur.com/Gpoolv8.jpg'
                }} className="w-12 h-12 rounded-full" />
                <View>
                    <Text>Olá, João!</Text>
                    <Text>Para onde vamos hoje?</Text>
                </View>
            </View>
            <View className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                <FontAwesome name="bell-o" size={20} color={theme.colors.darkGray} />
            </View>
        </View>
    )
}