import './nav-bar.css';
import { useState, useEffect } from 'react';
import { profiles } from '../../assets';

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    const listenScrollEvent = () =>{
        if(window.scrollY > 0){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    const onClickMenu = () =>{
        // Method logic when clicked a Nav bar menu link...
    }

    return (
            <div className={(!scrolled ? 'nav-bar nav-bar-before' : 'nav-bar nav-bar-scrolled')}>
                <div id="nav-bar-left">
                    <img id='nav-bar-logo' src='./assets/icons/netflix-logo.png' alt='Netflix' />
                </div>
                <div id="nav-bar-center">
                    <button className="nav-bar-link" onClick={onClickMenu}>Home</button>
                    <button className="nav-bar-link" onClick={onClickMenu}>TV Shows</button>
                </div>
                <div id="nav-bar-right">
                    <img className="nav-bar-right-icon" src='./assets/icons/search-icon.png' alt="Search" />
                    <img className="nav-bar-right-icon" src='./assets/icons/notification-icon.png' alt="Notification" />
                    <div id='nav-bar-right-pofile'>
                        <img className="profile-img" src={profiles[0].dp} alt={profiles[0].name} />
                        {/* <img id="profile-selector" src="./assets/icons/right-menu-triangle-icon.png" alt="" /> */}
                    </div>
                </div>
            </div>
    )
}

export default NavBar;