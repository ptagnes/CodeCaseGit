import React from "react";
import styles from './index.module.css';
import def from '../../Assets/Svg/countries/def.svg';
import Close from '../../Assets/Svg/Close.svg';

function Modal({...props}) {

    function handleClose(){
        props.ClickHandler();
    }
    return (
        <div className={styles.Modal}> 
            <img onClick={handleClose} className={styles.Close} src={Close} alt={Close}/>
            <img src={def} alt={def}/>
            <h2>Country name</h2>
            <p>Continent</p>
        </div>
    );
}
export default Modal;