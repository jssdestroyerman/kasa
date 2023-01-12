import Arrow from "./Arrow";
import { useState } from "react";

function Carrousel({ data }) {
    const [image, setImage] = useState(data.pictures[0]);
    let index = data.pictures.indexOf(image);

    function increaseImage() {
        if (index === data.pictures.length - 1) {
            index = 0;
            setImage(data.pictures[index]);
        } else {
            index++;
            setImage(data.pictures[index]);
        }
    }

    function decreaseImage() {
        if (index === 0) {
            index = data.pictures.length - 1;
            setImage(data.pictures[index]);
        } else {
            index--;
            setImage(data.pictures[index]);
        }
    }

    return (
        <div className="housingCarrousel">
            <Arrow action={decreaseImage} theClassName={"leftArrow"} />
            <img className="contentImage" src={image} alt={data.picture} />
            <Arrow action={increaseImage} theClassName={"rightArrow"} />
        </div>
    );
}

export default Carrousel;
