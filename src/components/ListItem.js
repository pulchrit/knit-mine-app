import React from 'react'
import {Link} from 'react-router-dom'
import "../css/ListItem.css"

const ListItem = ({item, itemRoute}) => {

    // If there is no image_url (stitches, patterns) or no image (my projects), 
    // use a placholder as the image source.
    let image_src
    const placeholder = "https://via.placeholder.com/300/000000/FFFFFF?text=no+photo+uploaded"
    if (item.hasOwnProperty('image_url')) {
        image_src = item.image_url === ""
                    ? placeholder
                    : item.image_url
    } else if (item.hasOwnProperty('image')) {
        image_src = !item.image
                    ? placeholder
                    : item.image
    }

    return (
        <div className="pattern-project-list-item">

            <img src={image_src} className="thumbnail" alt={item.name} />

            <h3 className="list-item-subhead">{item.name}</h3>

            <div className="list-buttons">
                
                <button className="list-button" type="button">
                    <Link to={`${itemRoute}/${item.id}`}>More info</Link>
                </button> 

                {item.url && 
                    <button className="list-button" type="button">
                        <a target="_blank" rel="noopener noreferrer"href={item.url}>View Pattern</a>
                    </button>
                }
            </div>

        </div>
    )
}

export default ListItem