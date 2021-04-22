import
	React,
	{
		useState
	}
from 'react';
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image
} from 'react-native';

import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome() {
	const [ visible, setVisible ] = useState(false);

	function handleVisibility() {
		setVisible(true)
	}
	return (
		<SafeAreaView 
			style={styles.container}
		>
			<Text 
				style={styles.title}
			>
				Gerencie {'\n'}
				suas plantas {'\n'}
				de forma fácil {'\n'}
			</Text>

			{
				visible &&
				<Image
					style={styles.image}
					source={wateringImg}
				/>
			}

			<Text 
				style={styles.subtitle}
			>
				Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar
			</Text>

			<Button
				title="&gt;"
				onPress={handleVisibility}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	title: {
		fontSize: 32,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.heading,
		marginTop: 62,
	},

	subtitle: {
		textAlign: 'center',
		fontSize: 18,
		paddingHorizontal: 20,
		color: colors.heading,
		marginTop: 52,
	},

	button: {
		backgroundColor: colors.green,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		marginTop: 70,
		marginBottom: 10,
		padding: 10,
		width: 56,
		height: 56,
	},

	image: {
		width: 295,
		height: 284,
		marginTop: 10
	},

	buttonText: {
		color: colors.white,
		fontSize: 24
	}
})