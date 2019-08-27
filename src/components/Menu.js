import React, {Component} from "react";
import {Media} from "reactstrap";
import uthappizza from "../images/uthappizza.png";
import vadonut from "../images/vadonut.png";
import zucchipakoda from "../images/zucchipakoda.png";
import elaicheesecake from "../images/elaicheesecake.png";
const items = [
    {
      id: 0,
      name:'Uthappizza',
      image: uthappizza,
      category: 'mains',
      label:'Hot',
      price:'4.99',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
   {
      id: 1,
      name:'Zucchipakoda',
      image: zucchipakoda,
      category: 'appetizer',
      label:'',
      price:'1.99',
      description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
   {
      id: 2,
      name:'Vadonut',
      image: vadonut,
      category: 'appetizer',
      label:'New',
      price:'1.99',
      description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
   {
      id: 3,
      name:'ElaiCheese Cake',
      image: elaicheesecake,
      category: 'dessert',
      label:'',
      price:'2.99',
      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
   ];

const menu = items.map(({id,description,image,name})=>(
    <div key={id} className="col-12 mt-5">
        <Media tag="li">
            <Media left middle>
                <Media object src={image} alt={name} />
            </Media>
            <Media body className="ml-5">
            <Media heading>{name}</Media>
                <p>{description}</p>
            </Media>
        </Media>
    </div>
));

class Menu extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Media list >
                        {menu}
                    </Media>
                </div>
            </div>
        );
    };
}
export default Menu;
