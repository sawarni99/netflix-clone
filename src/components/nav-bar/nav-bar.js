import './nav-bar.css';
import { useState, useEffect, useRef } from 'react';
import { profiles } from '../../assets';
import ProfileMenu from '../profile-menu/profile-menu';

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
    const inputRef = useRef(null);

    // Handling scroll effect...
    useEffect(()=>{
        window.addEventListener('scroll', listenScrollEvent);
        
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        }
    }, []);

    // Handling Clicking outside of the input search box...
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideInput);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideInput);
        }
    }, [inputRef])


    const handleClickOutsideInput = (event) =>{
        if(inputRef.current && !inputRef.current.contains(event.target)){
            setSearchClicked(false);
        }
    }

    const listenScrollEvent = () =>{
        if(window.scrollY > 0){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }

    const onClickSearch = () => {
        setSearchClicked(true);
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

                    {(searchClicked) ? 
                        <div id="nav-bar-search-container">
                            <img 
                                id="nav-bar-search-input-icon" 
                                src='./assets/icons/search-icon.png' 
                                alt="Search"
                            />

                            <input 
                                id='nav-bar-search-input'
                                ref={inputRef}
                                placeholder='Title, people, genres'
                            />
                        </div> : 
                        <img 
                            className="nav-bar-right-icon" 
                            id="nav-bar-search" 
                            src='./assets/icons/search-icon.png' 
                            alt="Search"
                            onClick={onClickSearch}
                        />
                    }
            
                    <img 
                        className="nav-bar-right-icon" 
                        id="nav-bar-notification" 
                        src='./assets/icons/notification-icon.png' 
                        alt="Notification" 
                    />
                    
                    <div id='nav-bar-right-pofile'>
                        <div id='nav-bar-profile-img-container'>
                            <img className="profile-img" src={profiles[0].dp} alt={profiles[0].name} />
                            <div id="nav-bar-profile-menu">
                                <ProfileMenu profile={profiles[0]} />
                            </div>
                        </div>
                        <img id="profile-selector" src="./assets/icons/right-menu-triangle-icon.png" alt="" />
                    </div>
                </div>
            </div>
    )
}

export default NavBar;