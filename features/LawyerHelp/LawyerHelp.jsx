import { Box } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/react"
import React from "react"
import styles from "../LawyerHelp/lawyerHelp.module.css"

export default function LawyerHelp() {
  return (
    <Box className={styles.main}>
      <Text className={styles.title}>Срочно нужна помощь адвоката?</Text>
      <Text className={styles.title}>Мы работаем круглосуточно!</Text>
      <Text className={styles.description}>
        Прием по предварительной записи:
      </Text>
      <Text className={styles.phone}>+7(495) 911-11-15</Text>
    </Box>
  )
}
