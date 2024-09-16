import { ScrollView, View } from "react-native"
import Header from "../components/header"
import SearchBar from "../components/searchBar"
import MainDestinations from "../components/mainDestinations"
import BestHotels from "../components/bestHotels"
import PopularOptions from "../components/popularOptions"

export default function Home(){
    return (
        <ScrollView className="pt-6" style={{backgroundColor: "white"}}>
            <Header />
            <SearchBar />
            <MainDestinations />
            <BestHotels />
            <PopularOptions />
        </ScrollView>
    )
}