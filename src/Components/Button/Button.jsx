import './Button.scss';

const Button = ({text, type}) => {
    const BtnClasses = `btn btn-${type}`;

    return (
        <button className={BtnClasses}>{text}</button>
    );
}

export default Button;