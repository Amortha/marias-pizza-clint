import React from "react";
import titlelogo from "../../../image/titlelogo.png"
import MostLoved from "./MostLoved";
import mostloved1 from "../../../image/mostloved1.png"
import mostloved2 from "../../../image/mostloved2.png"
import mostloved3 from "../../../image/mostloved3.png"
const MostLoveds = () => {
    const mostloveds = [
        {
            _id: 1,
            img: mostloved2,
            name: "See Every Detail",
            text: "Dapibus ultrices in iaculis nunc sed. Consequat mauris nunc congue nisi. Varius morbi enim nunc faucibus a pellentesque sitmal"
        },
        {
            _id: 2,
            img: mostloved1,
            name: "Get Alerts",
            text: "Pellentesque id nibh tortor id aliquet lectus. Tortor at risus viverra adipiscing at in tellus integer feugiat. Et malesuada fames ac turpis egestas"
        },
        {
            _id: 3,
            img: mostloved3,
            name: "Talk and Listen",
            text: "Vitae tempus quam pellentesque nec nam. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Tempus egestas sed sed risus"
        }
    ]
    return (
        <div className="mt-16">
            <div>
                <h1 className="font-bold text-2xl lg:text-4xl text-center Alkatra">Most <span className='text-red-600'>Loved</span></h1>
                <img className="mx-auto" src={titlelogo} alt="pic" />
            </div>
            <div className="mx-20 mt-12 gap-7 grid lg:grid-cols-3">
                { 
                mostloveds.map(mostloved =><MostLoved
                key={mostloved._id}
                mostloved = {mostloved}
                ></MostLoved>)
                }
            </div>

        </div>
    )
}
export default MostLoveds;