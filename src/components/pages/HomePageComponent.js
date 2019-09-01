import React from "react";
import Home from "../HomeComponent";

function HomePage({dishes,promotions,leaders}) {
    return <Home 
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
    />;
}
export default HomePage;
