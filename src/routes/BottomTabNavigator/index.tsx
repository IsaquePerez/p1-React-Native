import { Image, Text, View } from 'react-native';
import { Home } from '../../pages/home';
import { Category } from '../../pages/category';
import Header from '../../components/HeaderHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../../assets/inicio.png';
import Manga from '../../assets/livro.png';
import Favoritos from '../../assets/estrela.png';
import Mais from '../../assets/menu.png';
import { NativeScreenNavigationContainer } from 'react-native-screens';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	Inicio: {};
	Mangás: {};
	Favoritos: {};
    Mais: {};
}

export function BottomTabRoutes() {
	return (	
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: '#000000', paddingBottom: 2, height:75,},
				tabBarInactiveTintColor: '#aaa',
				tabBarActiveTintColor: '#fff',
			}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (                           
                        <Image
                            resizeMode='contain'
                            source={Inicio}
                            style={{ tintColor: color, width: 25, }}
                            />                                                               
					),
                    tabBarLabel: 'Inicio',
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: 'bold',
                        paddingBottom: 9
				    }
                }}
				name="Inicio"
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={Manga}
							style={{ tintColor: color, width: 25 }}
						/>
					),
                    tabBarLabel: 'Mangás',
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: 'bold',
                        paddingBottom: 9
				    }
				}}
				name="Mangás"                
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={Favoritos}
							style={{ tintColor: color, width: 25 }}
						/>
					),
                    tabBarLabel: 'Favoritos',
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: 'bold',
                        paddingBottom: 9
				    }
				}}
				name="Favoritos"
				component={Home}
			/>
            <Tab.Screen
				options={{
					tabBarIcon: ({ color }) => (
						<Image
							resizeMode='contain'
							source={Mais}
							style={{ tintColor: color, width: 25 }}
						/>
					),
                    tabBarLabel: 'Mais',
                    tabBarLabelStyle: {
                        fontSize: 13,
                        fontWeight: 'bold',
                        paddingBottom: 9
				    }
				}}
				name="Mais"
				component={Category}
			/>			
		</Tab.Navigator>
	);
}