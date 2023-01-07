function AboutList({ name, content, elementTarget, setElementTarget }) {
    return (
        <>
            <li>
                <h2
                    onClick={(e) => {
                        setElementTarget(e.target.textContent);
                    }}
                >
                    {name}
                </h2>
                {elementTarget === name && <p>{content}</p>}
            </li>
        </>
    );
}

export default AboutList;
