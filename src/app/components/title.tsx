import { Text } from "react-native"

export default function Title({content}: {content: string}){
    return (
        <Text className="text-lg mb-4">{content}</Text>
    )
}