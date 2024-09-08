import { View, Text, FlatList, Image } from "react-native";
import { MAIN_DESTINATIONS } from "../utils/mainDestinations";
import { MainDestinationProps } from "../../../types/mainDestination";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Title from "./title";

export default function MainDestinations(){

    const destinationStyles: string = "flex flex-row rounded-3xl p-1 items-center mr-2"

    const RenderDestination = ({ destination }: {destination: MainDestinationProps}) => {
        return (
            <View className={destination.name == "user_location" ? "bg-darkGray " + destinationStyles : "bg-white " + destinationStyles}>
                {
                    destination.name == "user_location" ?
                    <View className="bg-red h-8 w-8 flex items-center justify-center rounded-full mr-2">
                        <EvilIcons name="location" size={24} color="white" />
                    </View>
                    :
                    <Image source={{
                        uri: destination.img
                    }} className="w-8 h-8 rounded-full mr-2" />
                }
                <Text className={destination.name == "user_location" ? "text-white pr-2" : "text-black pr-2"}>{destination.label}</Text>
            </View>
        )
    }

    return (
        <View className="mb-6 ml-6">
            <Title content="Principais destinos" />
            <FlatList data={MAIN_DESTINATIONS} renderItem={({item}) => <RenderDestination destination={item} />} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}