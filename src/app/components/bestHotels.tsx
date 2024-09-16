import { View, Text, FlatList, Image } from "react-native";
import Title from "./title";
import { HOTELS } from "../utils/hotels";
import { HotelProps } from "../../../types/hotel";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { theme } from "../theme";
import Feather from '@expo/vector-icons/Feather';
import { Link } from "expo-router";

export default function BestHotels(){

    const RenderHotel = ({ hotel }: {hotel: HotelProps}) => {
        return (
            <Link href="/hotel">
                <View className="bg-darkGray p-2 rounded-3xl mr-6" style={styles.bestHotelView}>
                    <Image source={{
                        uri: hotel.img
                    }} className="h-40 rounded-3xl" />
                    <View className="flex flex-row justify-between mt-2 mb-2">
                        <View>
                            <Text className="text-white text-xl">{hotel.label}</Text>
                            <View className="flex flex-row">
                                <EvilIcons name="location" size={24} color={theme.colors.red} />
                                <Text className="text-white">{hotel.distance}km de distância</Text>
                            </View>
                        </View>
                        <View className="flex flex-row gap-2">
                            <View className="w-12 h-12 bg-gray flex justify-center items-center rounded-full">
                                <Feather name="bookmark" size={24} color="white" />
                            </View>
                            <View className="w-12 h-12 bg-red flex justify-center items-center rounded-full">
                                <Feather name="book-open" size={24} color="white" />
                            </View>
                        </View>
                    </View>
                </View>
            </Link>
            
        )
    }

    return (
        <View className="mb-6 pl-6">
            <Title content="Melhores hotéis perto de você" />
            <View>
                <FlatList
                    data={HOTELS.filter((hotel) => hotel.best)}
                    renderItem={({item}) => <RenderHotel hotel={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bestHotelView: {
        width: Dimensions.get('window').width - 48
    }
})