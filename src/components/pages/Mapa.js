import styles from '../../scss/pages/Mapa.module.css';
import { useEffect } from 'react';
function Mapa()
{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return(<>
    <div id="map" className={`container ${styles.mapa}`}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1ssfGnY7Sw5PLblWZ99n6Cn8j9c7diOY&ehbc=2E312F" width="100%" height="100%"></iframe>
    </div>
        </>)
}

export default Mapa