
import CardStyle from "./Card.module.scss";

const Card = ({ id, title, desc, date, image }) => {
    return (
        <div className={CardStyle["container"]}>
            <div className={CardStyle["cards"]} key={id}>
                <div className={CardStyle["title"]}>
                    <h1>{title}</h1>
                </div>
                <img className={CardStyle["card-img"]} src={image} alt="" />
                <div className={CardStyle["date"]}>
                    <h2>{date}</h2>
                </div>
                <div className={CardStyle["desc"]}>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
