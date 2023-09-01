import './button.css'

const Button = ({className, type, text, icon, onClick}) => {

    if(type === 'primary'){
        className = `button-primary ${className}`
    }else if(type === 'secondary'){
        className = `button-secondary ${className}`
    }else{
        className = 'button-primary';
    }

    return (
        <button className={className} onClick={onClick}>
            <div id='button-container'>
                <img id='button-icon' src={icon} alt='' />
                <span id='button-text'> {text} </span>
            </div>
        </button>
    )
}

export default Button;