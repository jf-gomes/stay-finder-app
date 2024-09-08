import { View, TextInput } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchBar(){
    return (
        <View className="flex flex-row justify-between mb-6 pl-6 pr-6">
            <View className="bg-white flex flex-row rounded-3xl p-2 items-center w-64">
                <AntDesign name="search1" size={20} color="black" />
                <TextInput placeholder="Procure hotéis ou localidades" className="ml-2" />
            </View>
            <View className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
                <Ionicons name="filter-outline" size={20} color="black" />
            </View>
        </View>
    )
}