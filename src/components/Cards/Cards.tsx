import React from "react";
import styles from './index.module.css';
import Swe from '../../Assets/Svg/countries/Swe.svg';
import def from '../../Assets/Svg/countries/def.svg';
import UAE from '../../Assets/Svg/countries/UAE.svg';
import sp from '../../Assets/Svg/countries/sp.svg';
import Elipse from '../../Assets/Svg/Elipse.svg';

//export function Cards(country:any, ClickHandler: (event: React.MouseEvent<HTMLDivElement>) => void) {       onClick={() => props.ClickHandler}
function Cards({...props }) {
    console.log(props.ClickHandler);
    const c = {...props.country}
    var flag;
    function emoji(code:string){
        switch (code) {
        case 'SE':
            flag = Swe;
            break;
        case 'AE':
            flag = UAE;
            break;
        case 'ES':
            flag = sp;
            break;
        default:
            flag = def;
        }  
    }
    function handleClick(){
        props.ClickHandler();
    }
    return (
        <div onClick={handleClick} className={`column col-6 ${styles.Cards}`} > 
            <div className="row">
                <div className="col-3">  {emoji(c.code)}
                    <img className={styles.CardsImage} src={flag} alt={c.emoji}/>
                </div>
                <div className="col-7">
                    <div className={styles.CardsTitle}>{c.name}</div>
                    <div className={styles.CardsInfo}>
                        <div className={styles.CardsInfoItem}>{c.capital}<img className={styles.Elipse} src={Elipse} alt={Elipse} /></div> 
                        <div className={styles.CardsInfoItem}>{c.continent.name}<img className={styles.Elipse} src={Elipse} alt={Elipse} /></div> 
                        {
                            c.languages[0] && <div className={styles.CardsInfoItem}>{c.languages[0].name}<img className={styles.Elipse} src={Elipse} alt={Elipse} /></div>
                        }
                        
                        <div className={styles.CardsInfoItem}>{c.currency}</div> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;