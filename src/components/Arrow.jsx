function Arrow({ action, theClassName }) {
    return (
        <svg
            className={theClassName}
            onClick={() => {
                action();
            }}
            width="28"
            height="28"
            viewBox="0 0 25 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                fill="white"
            />
        </svg>
    );
}

export default Arrow;
