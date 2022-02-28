import React from 'react'
import {Flex, Text} from '@chakra-ui/react'
import styles from './mainScreen.module.css'
import DefaultButton from '../DefaultButton'

export default function MainScreen() {
	return (
		<Flex  className={styles.wrapper} >
			<Flex className={styles.mainScreen}>
				<Flex className={styles.content} >
					<Text className={styles.title} >
						Гильдия юристов
					</Text>
					<Text  className={styles.description} >
						Меньше слов, больше дела
					</Text>
					<Flex className={styles.buttonWrapper}>
					<DefaultButton>Заказать консультацию</DefaultButton>
					</Flex>
					
				</Flex>
				<Flex className={styles.mobileBg}></Flex>
			</Flex>
		</Flex>
	)
}
