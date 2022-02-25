import React, { useEffect } from "react"
import { Flex } from "@chakra-ui/react"
import styles from '../header/header.module.css'
import { Link, Text } from "@chakra-ui/react"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import HeaderLinks from "./HeaderLinks/HeaderLinks"
import PhoneNumber from "./Phone/Phone"
import DefaultButton from '../DefaultButton'

export default function Header() {
  useEffect(()  =>{
    console.log(styles);
  } , [])
  
  return (
    <Flex as="header" mt="24px" mb="32px" justifyContent="center" fontWeight="500">
      <Flex alignItems="center" justifyContent="space-between" px="30"  w="1300px">
        <Flex >
          <Link href="/" cursor="pointer">
            <Text>ГЮ</Text>
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
