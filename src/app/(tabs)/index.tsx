import { View } from "react-native"
import Header from "../components/header"
import SearchBar from "../components/searchBar"
import MainDestinations from "../components/mainDestinations"
import BestHotels from "../components/bestHotels"
import PopularOptions from "../components/popularOptions"

export default function Home(){
    return (
        <View className="mt-16">
            <Header />
            <SearchBar />
            <MainDestinations />
            <BestHotels />
            <PopularOptions />
        </View>
    )
}