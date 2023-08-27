import './profile-menu.css'
import { profiles } from '../../assets';

const ProfileMenu = ({profile}) => {

    // Getting the profiles other than the selected profile...
    const remainingProfiles = profiles.filter(
            (p) => p.name !== profile.name
        ).map((profile) => {
            return {
                tag: profile.name,
                icon: profile.dp,
                isProfile: true,
            }
        })

    const profileItems = [
        ...remainingProfiles,
        {
            tag: "Manage Profile",
            icon: "./assets/icons/edit-profile-icon.png"
        },
        {
            tag: "Account",
            icon: "./assets/icons/account-icon.png",
        },
        {
            tag: "Help Centre",
            icon: "./assets/icons/help-icon.png",
        }
    ]

    const onClickMenuItem = (profileItem) => {
        // Logic to do something when a profile item is clicked...
    }

    return (
        <div id='profile-menu'>
            <div id='profile-menu-triangle-container'>
                <img id='profile-menu-triangle' src='./assets/icons/right-menu-triangle-icon.png' alt="" />
            </div>
            <div id='profile-menu-main'>
                {
                    profileItems.map((profileItem) => {
                        const {tag, icon} = profileItem;
                        return (
                            <div key={tag} className="profile-menu-item" onClick={() => onClickMenuItem(profileItem)}>
                                <img className="profile-menu-img" src={icon} alt={tag} />
                                <span className="profile-menu-tag">{tag}</span>
                            </div>
                        )
                    })

                }
                <div className='profile-menu-sign-out'>
                    Sign out of Netflix
                </div>
            </div>
        </div>
    )
}

export default ProfileMenu;