import { View, Text, ScrollView, Image } from "react-native"
import { HotelProps } from "../../../types/hotel"
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from "../theme";
import Title from "../components/title";
import { HOTELS } from "../utils/hotels";
import { Link } from "expo-router";

export default function Hotel(){

    const hotel: HotelProps = HOTELS[0]

    return (
        <>
            <View className="flex flex-row items-center pr-6 pl-6 mb-6">
                <Link href="/">
                    <View className="bg-darkGray rounded-full p-2 mr-4">
                        <AntDesign name="arrowleft" size={28} color="white" />
                    </View>
                </Link>
                <Text className="text-xl">Informações sobre o hotel</Text>
            </View>
            <ScrollView className="mt-16">  
                <View className="p-6 bg-darkGray h-screen rounded-tl-3xl rounded-tr-3xl">
                <Image 
                    source={{
                        uri: hotel.img
                    }}
                    className="w-full h-80 rounded-3xl"
                />
                <Text className="text-white text-xl">{hotel.label}</Text>
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-white">{hotel.distance}km de distância</Text>
                    <View className="flex flex-row bg-red p-2 rounded-2xl">
                        <AntDesign name="star" size={16} color={theme.colors.darkGray} />
                        <Text className="text-white">{hotel.reviews}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Title content="O que este hotel oferece" />
            </View>
            </ScrollView>
        </>
    )
}