import React from "react"
import { Flex, Box } from "@chakra-ui/react"
import Link from "next/link"
import { Button } from "@chakra-ui/react"
import Image from "next/image"
import logo from "../img/logo.png"

export default function Header() {
  return (
    <Box as="header" m={10} fontWeight="600">
      <Flex justifyContent="space-between">
        <Flex>
          <Link href="/">
            <Image
              width="100"
              height="100"
              src={logo}
              boxSize="100px"
              objectFit="cover"
            >
            </Image>
          </Link>
        </Flex>
        <Flex>
          <Link href="/companies">Юридическим лицам</Link>
          <Link href="/individuals">Физическим лицам</Link>
          <Link href="/bankruptcy">Банкротство</Link>
          <Link href="/map">Карта</Link>
          <Link href="/price">Стоимость услуг</Link>
        </Flex>
        <Flex>
          +79990123123
          <Button>Заказать звонок</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
