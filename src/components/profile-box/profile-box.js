import './profile-box.css';

const ProfileBox = ({ name, dp, className }) => {
    return <div id="profile-box" className={className} >
        <img id="profile-box-img" src={dp} alt={name} />
        <div id="profile-box-name">{name}</div>
    </div>
}

export default ProfileBox;