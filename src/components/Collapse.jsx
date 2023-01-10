import { useState } from "react";

function AboutList({ name, content }) {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <>
            <div className="block">
                <h2
                    onClick={() => {
                        setIsHidden(!isHidden);
                    }}
                >
                    {name}
                    <svg
                        className={!isHidden ? "arrowOpen" : ""}
                        width="25"
                        height="15"
                        viewBox="0 0 25 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                            fill="white"
                        />
                    </svg>
                </h2>
                <p className={!isHidden ? "contentOpen" : ""}>{content}</p>
            </div>
        </>
    );
}

export default AboutList;
