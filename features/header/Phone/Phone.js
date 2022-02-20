import { Flex, Box, IconButton } from "@chakra-ui/react"
import styles from "../header.module.css"
import { Button } from "@chakra-ui/react"

export default function PhoneNumber() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex mt="15px">
        <a className={styles.links} href="tel:+78142332211">
          +7(814)233-22-11
        </a>
      </Flex>
      <Flex>
        <Button mt="10px" colorScheme="green" size="sm">
          Заказать звонок
        </Button>
      </Flex>
    </Flex>
  )
}
