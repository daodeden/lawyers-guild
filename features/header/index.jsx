import React from "react"
import { Flex, Box } from "@chakra-ui/react"
import Link from "next/link"
import { Button } from "@chakra-ui/react"
import Image from "next/image"
import logo from "../img/logo.png"

export default function Header() {
  return (
    <Box as="header" m={10} fontWeight="600">
      <Flex alignItems="center" justifyContent="space-between" m="-40px -30px">
        <Flex>
          <Link href="/">
            <Image
              width="100"
              height="100"
              src={logo}
              boxSize="100px"
              objectFit="cover"
            ></Image>
          </Link>
        </Flex>
        <Flex justifyContent="space-between" flex="1 1 auto" m="0 30px">
          <Link href="/companies">Юридическим лицам</Link>
          <Link href="/individuals">Физическим лицам</Link>
          <Link href="/bankruptcy">Банкротство</Link>
          <Link href="/map">Карта</Link>
          <Link href="/price">Стоимость услуг</Link>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex>
          +79990123123
            </Flex>
          <Flex><Button>Заказать звонок</Button></Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
