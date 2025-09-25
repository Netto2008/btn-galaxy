import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Planetas() {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Planetas</Text>
			<Image source={require('../assets/planetas_alinhados.jpg')} style={styles.imagem} />
			<Text style={styles.texto}>
				Planetas são corpos celestes que orbitam estrelas e não emitem luz própria, como a Terra, Marte e Júpiter.
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
