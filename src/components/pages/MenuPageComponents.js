import React, {Component} from 'react';
import Menu from '../MenuComponent';
import DishDetail from '../DishdetailComponent';

class MenuPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            selectedDishComments: null
        };
        this.onDishSelect = this.onDishSelect.bind(this);
    }
    

    onDishSelect(dishId) {
        const dish = this.props.dishes
            .find(({ id }) => id === dishId);
        const comments = dish && this.props
            .comments.filter(({dishId}) => dishId === dish.id) 
        this.setState({
            selectedDish: dish,
            selectedDishComments: comments
        });
    }


    render() {
        const {dishes,comments} = this.props;
        return <React.Fragment>
            <Menu dishes={dishes} onClick={this.onDishSelect} />
            <DishDetail 
                dish={this.state.selectedDish} 
                comments={this.state.selectedDishComments}
            />
        </React.Fragment>;
    }

}

export default MenuPage;
