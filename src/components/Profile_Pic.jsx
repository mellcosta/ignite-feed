import styles from "./Profile_Pic.module.css"

export function Profile_Pic(){
    return(
        <div className={styles.profile_pic}>
            <img src="../../public/leslie-pic.png" alt="Profile Picture" />
        </div>
    )
}