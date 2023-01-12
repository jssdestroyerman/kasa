import Arrow from "./Arrow";
import { useState } from "react";

function Carrousel({ data }) {
    const [image, setImage] = useState(data.pictures[0]);

    function increaseImage() {
        let index = data.pictures.indexOf(image);
        index++;
        setImage(data.pictures[index]);
    }

    function decreaseImage() {
        let index = data.pictures.indexOf(image);
        index--;
        setImage(data.pictures[index]);
    }

    const rightArrowCond = data.pictures.indexOf(image) === 0;
    const leftArrowCond =
        data.pictures.indexOf(image) === data.pictures.length - 1;

    return (
        <div className="housingCarrousel">
            <Arrow
                indexOf={rightArrowCond}
                decreaseImage={decreaseImage}
                theClassName={"leftArrow"}
            />
            <img className="contentImage" src={image} alt={data.picture} />
            <Arrow
                indexOf={leftArrowCond}
                decreaseImage={increaseImage}
                theClassName={"rightArrow"}
            />
        </div>
    );
}

export default Carrousel;
