import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Galaxias() {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Galáxias</Text>
			<Image source={require('../assets/galaxy.jpg')} style={styles.imagem} />
			<Text style={styles.texto}>
				Galáxias são enormes sistemas formados por bilhões de estrelas, planetas, poeira e gás, unidos pela gravidade.
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
