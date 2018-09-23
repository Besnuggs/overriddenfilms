import React, {Component} from 'react'

class Portfolio extends Component {

render() { 
        return (
            <div>
                <h1>Portfolio</h1>
                <button>All</button>
                <button>Aerial</button>
                <button>Luxury</button>
                <button>Commercial</button>
                <button>Tourism</button>
                <button>Sport</button>

                <div className="videoGrid">
                    <div className="videoBox" >
                    


                    </div>
                </div>
            </div>
          );
    }
}
 
export default Portfolio;