import React from "react"
import styles from '../header/header.module.css'
import { Link, Text, Flex } from "@chakra-ui/react"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import HeaderLinks from "./HeaderLinks/HeaderLinks"
import PhoneNumber from "./Phone/Phone"
import DefaultButton from '../DefaultButton'
import colors from '../theme/colors'

export default function Header() {
  
  return (
    <Flex className={styles.header} as="header" bgColor="#fff" boxShadow="sm" zIndex="100" top="0px" left="0px" right="0px" position="sticky" justifyContent="center" fontWeight="500">
      <Flex alignItems="center" justifyContent="space-between"   w="1260px">
        <Flex >
          <Link href="/" cursor="pointer">
            <Text fontSize="18px" fontWeight="700" color={colors.mainColor}>ГЮ</Text>
            
          </Link>
        </Flex>
        <Flex className={styles.headerLinks}>
        <HeaderLinks  /> 
        </Flex>
      <Flex className={styles.phoneNumber}>
        <PhoneNumber />
      </Flex> 
      
      
      <Flex className={styles.getCall}>
        <DefaultButton>
          Заказать звонок
        </DefaultButton>
      </Flex>
      <Flex className={styles.hamburgerMenu} >
        <HamburgerMenu  /> 
        </Flex>
      </Flex>
    </Flex>
  )
}
