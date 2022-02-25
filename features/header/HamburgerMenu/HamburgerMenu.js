import {
  HamburgerIcon,
} from "@chakra-ui/icons"
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Link,
} from "@chakra-ui/react"
import React from "react"

import colors from '../../theme/colors'
import styles from ".././header.module.css"

export default function HamburgerMenu() {

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon color={colors.mainColor} />}
      />
      <MenuList>
        <MenuItem>
          <Link className={styles.hamburgerLinks} href="/companies">Юридическим лицам</Link>
        </MenuItem>
        <MenuItem>
          <Link className={styles.hamburgerLinks} href="/individuals">Физическим лицам</Link>
        </MenuItem>
        <MenuItem>
          <Link className={styles.hamburgerLinks} href="/bankruptcy">Банкротство</Link>
        </MenuItem>
        <MenuItem>
          <Link className={styles.hamburgerLinks} href="/map">Карта</Link>
        </MenuItem>
        <MenuItem>
          <Link className={styles.hamburgerLinks} href="/price">Стоимость услуг</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
