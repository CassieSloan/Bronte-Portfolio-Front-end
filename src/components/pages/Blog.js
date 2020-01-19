import React, {Component} from "react";
import "./../../styles/blog.scss"

class App extends Component {
    render() {
        return(
            <>
                <div className="blog-post-container">
                    <div className="image-container"></div>
                    <div className="text-container">
                        <h3>Blog post title</h3>
                        <p>
                            Gummi bears apple pie gummies carrot cake soufflé chocolate cake gummi bears. Powder cookie gummi bears cupcake wafer chocolate bar oat cake. Jujubes brownie candy pudding jelly beans ice cream. Brownie bear claw sweet brownie sugar plum jelly beans lemon drops candy canes. Cupcake cotton candy candy canes fruitcake cheesecake jelly-o. Liquorice wafer icing cake gingerbread tiramisu. Brownie icing cake chupa chups sesame snaps candy canes sesame snaps liquorice caramels. Bonbon tiramisu jelly marshmallow macaroon icing cheesecake. Jelly fruitcake jelly-o powder pudding.
                        </p>
                        <button>See more</button>
                    </div>

                </div>
            </>
        )
    }
}

export default App;