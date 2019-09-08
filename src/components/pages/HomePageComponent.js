import React from "react";
import Home from "../HomeComponent";

function HomePage({dishes, promotions, leaders, dishesLoading, dishesErrMess}) {
    return <Home
        dis
        dish={dishes.filter((dish) => dish.featured)[0]}
        promotion={promotions.filter((promo) => promo.featured)[0]}
        leader={leaders.filter((leader) => leader.featured)[0]}
        dishesLoading={dishesLoading}
        dishesErrMess={dishesErrMess}
    />;
}
export default HomePage;
