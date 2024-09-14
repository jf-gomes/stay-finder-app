import { FlatList, View, Text, Image } from "react-native";
import Title from "./title";
import { HOTELS } from "../utils/hotels";
import { HotelProps } from "../../../types/hotel";
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from "../theme";

export default function PopularOptions(){

    const RenderHotel = ({ hotel }: {hotel: HotelProps}) => {
        return (
            <View className="bg-white flex flex-row justify-between rounded-3xl p-4 mb-4">
                <Image
                    source={{
                        uri: hotel.img
                    }}
                    className="w-28 h-28 rounded-3xl"
                />
                <View className="flex justify-between">
                    <View>
                        <Text className="text-lg mb-2">{hotel.label}</Text>
                        <View className="flex flex-row justify-between items-center">
                            <Text>{hotel.distance}km</Text>
                            <View className="bg-darkGray flex flex-row p-1 rounded-xl items-center">
                                <AntDesign name="star" size={16} color={theme.colors.red} />
                                <Text className="text-white">{hotel.reviews}</Text>
                            </View>
                        </View>
                    </View>
                    <Text>A partir de R${hotel.price},00</Text>
                </View>
            </View>
        )
    }

    return (
        <View className="mb-6 pr-6 pl-6">
            <Title content="Opções populares" />
            <View>
                <FlatList
                    data={HOTELS.filter((hotel) => !hotel.best)}
                    renderItem={({item}) => <RenderHotel hotel={item} />}
                    scrollEnabled={false}
                />
            </View>
        </View>
    )
}