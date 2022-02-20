import { Flex, Link } from "@chakra-ui/react"
import styles from "../header.module.css"

export default function HeaderLinks() {
  return (
    <Flex
      justifyContent="space-between"
      flex="1 1 auto"
      marginX="6px"
      marginRight="50px"
    >
      <Link className={styles.links} href="/companies">
        Юридическим лицам
      </Link>
      <Link className={styles.links} href="/individuals">
        Физическим лицам
      </Link>
      <Link className={styles.links} href="/bankruptcy">
        Банкротство
      </Link>
      <Link className={styles.links} href="/map">
        Карта
      </Link>
      <Link className={styles.links} href="/price">
        Стоимость услуг
      </Link>
    </Flex>
  )
}
