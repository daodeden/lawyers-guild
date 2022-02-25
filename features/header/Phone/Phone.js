import styles from "../header.module.css"

export default function PhoneNumber() {
  return (
    <a className={styles.links} href="tel:+78142332211">
      +7(814)233-22-11
    </a>
  )
}
