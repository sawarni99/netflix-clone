import './manage-profile.css';
import ProfileBox from '../../components/profile-box/profile-box';
import {profiles} from '../../assets';

const ManageProfilePage = () =>{

    const onClick = (name) => {
        // Login when chose a profile...
        console.log(`Profile Chosen : ${name}`);
    }

    return (
        <div id="manage-profile-main">
            <div id="manage-profile-line"></div>
            <div id="manage-profile-heading">
                Who's watching?
            </div>
            <div id="manage-profile-profile-box-container">
                { profiles.map(({name, dp}) => <ProfileBox 
                                        className="manage-profile-profile-box" 
                                        name={name} 
                                        dp={dp}
                                        onClick={() => onClick(name)}
                                        key={name}
                                    />
                                )
                }
            </div>
            <button id="manage-profile-button">Manage Profiles</button>
        </div>
    )
}

export default ManageProfilePage;