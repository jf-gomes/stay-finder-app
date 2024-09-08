import { View } from "react-native"
import Header from "../components/header"
import SearchBar from "../components/searchBar"
import MainDestinations from "../components/mainDestinations"

export default function Home(){
    return (
        <View className="mr-6 ml-6 mt-16">
            <Header />
            <SearchBar />
            <MainDestinations />
        </View>
    )
}