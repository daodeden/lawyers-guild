import React from "react"
import { Flex, Box } from "@chakra-ui/react"
import Link from "next/link"
import { Button } from "@chakra-ui/react"
import Image from "next/image"
import logo from "../img/logo.png"

export default function Header() {
  return (
    <Box as="header" m={10} fontWeight="500">
      <Flex alignItems="center" justifyContent="space-between" m="-40px -30px">
        <Flex>
          <Link href="/" cursor="pointer">
            <Image
              width="100"
              height="100"
              src={logo}
              boxSize="100px"
              objectFit="cover"
            ></Image>
          </Link>
        </Flex>
        <Flex justifyContent="space-between" flex="1 1 auto" marginX="6px" marginRight="50px">
          <Link href="/companies">Юридическим лицам</Link>
          <Link href="/individuals">Физическим лицам</Link>
          <Link href="/bankruptcy">Банкротство</Link>
          <Link href="/map">Карта</Link>
          <Link href="/price">Стоимость услуг</Link>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex mt="15px">
            <a href="tel:+78142332211">+7(814)233-22-11</a>
          </Flex>
          <Flex>
            <Button mt="10px" colorScheme="green" size="sm">
              Заказать звонок
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
