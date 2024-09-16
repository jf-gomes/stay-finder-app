import { View } from "react-native";
import { Tabs } from "expo-router";
import { theme } from "../theme";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout(){
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.darkGray,
                tabBarActiveBackgroundColor: theme.colors.red,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    borderRadius: 48,
                },
                tabBarItemStyle: {
                    borderRadius: 48,
                    height: 60
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ size, color }) => (<FontAwesome6 name="house" size={size} color={color} />)
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    tabBarIcon: ({ size, color }) => (<FontAwesome6 name="user" size={size} color={color} />)
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon: ({ size, color }) => (<FontAwesome6 name="gear" size={size} color={color} />)
                }}
            />
            <Tabs.Screen
                name="hotel"
                options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' },
                }}
            />
        </Tabs>
    )
}