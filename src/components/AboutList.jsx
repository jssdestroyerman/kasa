import { useState } from "react";

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
                </h2>
                {!isHidden && <p>{content}</p>}
            </li>
        </>
    );
}

export default AboutList;
