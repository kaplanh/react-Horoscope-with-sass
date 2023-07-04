import Card from "./Card";
import {data} from "../../helper/data";
import MainStyle from "./Main.module.scss";

const Main = () => {
    return (
        <div className={MainStyle["main"]}>
            {data.map((items) => {
                const { id, title, desc, date, image } = items;
                return (
                    <>
                        <div>
                            <Card
                                id={id}
                                title={title}
                                desc={desc}
                                date={date}
                                image={image}
                            />
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default Main;
