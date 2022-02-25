import { Box } from "@chakra-ui/layout"
import { Text } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import React from "react"


export default function LawyerHelp() {
    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
 
  const stylesDesktop = {
    main: {
      color: "white",
      fontFamily: "Montserrat",
      backgroundColor: "#17B9A5",
      textAlign: "center",
      paddingTop: "55px",
      paddingBottom: "55px",
    },
    title: {
      fontFamily: "Montserrat",
      fontSize: "30px",
      fontWeight: "700",
      paddingTop: "17px",
    },
    description: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontWeight: "700",
      paddingTop: "43px",
    },
    phone: {
      fontFamily: "Montserrat",
      fontSize: "30px",
      fontWeight: "700",
      paddingTop: "17px",
    },
  }

  const stylesMobile = {
    main: {
      color: "white",
      fontFamily: "Montserrat",
      backgroundColor: "#17B9A5",
      textAlign: "center",
      padding: "65px 10px 65px 10px"
    },
    title: {
      fontFamily: "Montserrat",
      fontSize: "23px",
      fontWeight: "700",
      paddingTop: "15px",
    },
    description: {
      fontFamily: "Montserrat",
      fontSize: "15px",
      fontWeight: "700",
      paddingTop: "27px",
    },
    phone: {
      fontFamily: "Montserrat",
      fontSize: "23px",
      fontWeight: "700",
      paddingTop: "15px",
    },
  }

  
  let styles = isLargerThan1024 ? stylesDesktop : stylesMobile

  return (
    <Box { ...styles.main }>
      <Text {...styles.title}>Срочно нужна помощь адвоката?</Text>
      <Text {...styles.title}>Мы работаем круглосуточно!</Text>
      <Text {...styles.description}>
        Прием по предварительной записи:
      </Text>
      <Text {...styles.phone}>+7(495) 911-11-15</Text>
    </Box>
  )
}
