import styles from "./Profile.module.css"

export function Profile(){
    return (
        <>
            <div className={styles.profile}>
                <div className={styles.header}>
                    <div className={styles.profile_pic}>
                        <img src="../../public/leslie-pic.png" alt="Profile Picture" />
                    </div>
                    <strong className={styles.name}>Leslie Alexander</strong>
                    <p className={styles.job_title}>UI Designer</p>
                </div>
            
                <div className={styles.edit_profile}>
                    <a href="#" className="button">
                        Edit Profile
                    </a>
                </div>
            </div>
        </>
    )
}