import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function BuracoNegro() {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Buraco Negro</Text>
			{ <Image source={require("../assets/buraconegro.webp")} style={styles.imagem} /> }
			<Text style={styles.texto}>
				Buracos negros são regiões do espaço-tempo com gravidade tão intensa que nada escapa, nem mesmo a luz!
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	titulo: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 20,
	},
	imagem: {
		width: 150,
		height: 150,
		marginBottom: 20,
	},
	texto: {
		fontSize: 18,
		color: '#fff',
		textAlign: 'center',
	},
});
