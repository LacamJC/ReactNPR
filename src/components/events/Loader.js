import styles from '../../scss/events/Loader.module.css'

function Loader()
{
    return(
        <>
        <div className={styles.loader_background}>
            <div className={styles.loader_background__loading}></div>
        </div>
        </>
    )

}

export default Loader