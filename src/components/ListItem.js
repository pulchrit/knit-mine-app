import React from 'react';
import {Route, Link} from 'react-router-dom';
//import StitchItemDetails from './StitchItemDetails'
import "../css/ListItem.css";

const ListItem = ({stitch}) => {
    return (
        <div className="pattern-project-list-item">
            
            <img src={stitch.image_url} className="thumbnail" alt={stitch.name} />

            <h3 className="list-item-subhead">{stitch.name}</h3>

            <div className="list-buttons">
                
                <button className="button" type="button">
                    <Link to={`/stitch-patterns/${stitch.id}`}>More info</Link>
                </button> 

                <button className="button" type="button">
                    <a href={stitch.url}>View Pattern</a>
                </button>
            </div>

          {/*   <Route 
                path={'/stitch-patterns/:id'}
                component={StitchItemDetails}
            /> */}
        </div>
    )
}

export default ListItem