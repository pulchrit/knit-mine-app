import React from 'react';
import {Link} from 'react-router-dom';
import PetersHat from './images/peters_hat.JPG';
import "../css/ListItem.css";

const ListItem = ({item, itemRoute}) => {
    return (
        <div className="pattern-project-list-item">
            
            {itemRoute === '/my-projects'
                ? <img src={PetersHat} className="thumbnail" alt={item.name} />
                : <img src={item.image_url} className="thumbnail" alt={item.name} />
            }

            <h3 className="list-item-subhead">{item.name}</h3>

            <div className="list-buttons">
                
                <button className="button" type="button">
                    <Link to={`${itemRoute}/${item.id}`}>More info</Link>
                </button> 

                {item.url && 
                    <button className="button" type="button">
                        <a target="_blank" rel="noopener noreferrer"href={item.url}>View Pattern</a>
                    </button>
                }
            </div>

        </div>
    )
}

export default ListItem