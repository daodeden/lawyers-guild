import React from "react"
import { Flex, Box, IconButton } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import Image from "next/image"
import logo from "../img/logo.png"
import { useState } from "react"
import styles from "./header.module.css"
import {
  Icon,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons"
import { Link } from "@chakra-ui/react"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import HeaderLinks from "./HeaderLinks/HeaderLinks"
import PhoneNumber from "./Phone/Phone"

export default function Header() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)")
  const [isLargerThan1024PhoneNumber] = useMediaQuery("(min-width: 1024px)")

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
        {isLargerThan1024 ? <HeaderLinks /> : " "}
        
        {isLargerThan1024PhoneNumber ? <PhoneNumber />  : <HamburgerMenu /> }
        
        
      </Flex>
    </Box>
  )
}
