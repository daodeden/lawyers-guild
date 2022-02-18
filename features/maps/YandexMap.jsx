import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';


export default function YandexMap() {
	return (
		<YMaps>
		<Map width="100%" defaultState={{ center: [54.718900, 55.957694], zoom: 15 }} >
		<Placemark defaultGeometry={[54.718900, 55.957694]} />

		</Map>
  </YMaps>
	)
}
