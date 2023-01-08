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
                    <img className={!isHidden && "open"} src={arrow} alt="" />
                </h2>
                {!isHidden && <p>{content}</p>}
            </li>
        </>
    );
}

export default AboutList;
