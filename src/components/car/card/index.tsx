import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// Utils
import { screenWidth } from '@utils/device';

// Styles
import { margin, padding } from '@styles/spacing';
import { Car } from '@store/context';

type Props = {
  car: Car;
}

export function CarCard({ car }: Props) {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={{ uri: car.url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.year}>Year: {car.year}</Text>
        <Text style={styles.type}>Type: {car.type} - Color: {car.color}</Text>
        <Text style={styles.description}>{car.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: screenWidth * 0.9,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: margin.XL,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  infoContainer: {
    padding: padding.M,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  year: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 2,
  },
  type: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});