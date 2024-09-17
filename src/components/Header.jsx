import igniteLogo from "../assets/ignite-feed-logo.svg"
import styles from "./Header.module.css"

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Ignite Feed Logo" />
                <strong>Ignite Feed</strong>
            </header>
        </>
    )
}