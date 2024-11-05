import "./Screen.css";


const Screen = ({ value }) => {
    return (
        <p className="screen" mode ="screen" max={70}>
            {value}
        </p>
    )
}

export default Screen;