import { FaAngleUp } from 'react-icons/fa';
import './styles.css'
import { useState, useEffect } from 'react';

const TopScroller = (props) => {
    const scrollUp = () => {
        if (!topSection.current) {
            return;
        }
        window.scrollTo({
          top: topSection.current.offsetTop,
          behavior: 'smooth',
        });
    };

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    
    return ( 
        <div className="top-to-btm">
            {
                showTopBtn &&
                <FaAngleUp className="icon-position icon-style" onClick={props.clickHandler}/>
            }
        </div>
     );
}
 
export default TopScroller;