import { View, Text, FlatList, Image } from "react-native";
import { MAIN_DESTINATIONS } from "../utils/mainDestinations";
import { MainDestinationProps } from "../../../types/mainDestination";
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function MainDestinations(){

    const destinationStyles: string = "flex flex-row rounded-3xl p-1 items-center mr-2"

    const RenderDestination = ({ destination }: {destination: MainDestinationProps}) => {
        return (
            <View className={destination.name == "user_location" ? "bg-darkGray " + destinationStyles : "bg-white " + destinationStyles}>
                {
                    destination.name == "user_location" ?
                    <View className="bg-red h-8 w-8 flex items-center justify-center rounded-full mr-2">
                        <EvilIcons name="location" size={24} color="black" />
                    </View>
                    :
                    <Image source={{
                        uri: destination.img
                    }} className="w-8 h-8 rounded-full mr-2" />
                }
                <Text className={destination.name == "user_location" ? "text-white" : "text-black"}>{destination.label}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text className="text-lg mb-4">Principais destinos</Text>
            <FlatList data={MAIN_DESTINATIONS} renderItem={({item}) => <RenderDestination destination={item} />} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}