import { useState } from "react";
import arrow from "../assets/arrow.svg";

function AboutList({ name, content }) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <>
            <li>
                <h2
                    onClick={() => {
                        setIsHidden(!isHidden);
                    }}
                >
                    {name}
                    <img
                        className={!isHidden ? "arrowOpen" : ""}
                        src={arrow}
                        alt="Arrow"
                    />
                </h2>
                <p className={!isHidden ? "contentOpen" : ""}>{content}</p>
            </li>
        </>
    );
}

export default AboutList;
