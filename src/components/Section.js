import { useState } from "react";

function Section (props) {
    const [firstCard, setCard] = useState(props.card);

    return (
        <div className="card">
            <div className="pictureComplete">
                <img src={firstCard.image} alt="goods"/>
                <div className="sticking">
                    <span className="sticking-name">Новинка</span>
                </div>
                {/* <div className="like">
                    <img onClick={changeFavourite} src={firstCard.favourite ? firstCard.likeActive : firstCard.likeDefault} alt="like" />
                </div> */}
            </div> 
        </div>
    )
}

export default Section;