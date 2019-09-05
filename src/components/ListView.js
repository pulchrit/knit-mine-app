import React from 'react';
import ListItem from './ListItem';
import '../css/ListView.css';

const ListView = ({data, searchTermEntered, listName, itemRoute}) => {
    
    // If search term was entered, filter data accordingly.
    const displayData = !searchTermEntered 
                        ? data
                        : data.filter(project => 
                            project.name.toLowerCase().includes(searchTermEntered.toLowerCase())) 
    
    return (
        <section className="patterns-projects-list">
            <h2 className="subhead-list">{listName}</h2>
        
            {displayData.map((item, i) => (
                <ListItem 
                    key={`listItem-${i}`}
                    item={item}
                    itemRoute={itemRoute} 
                />
            ))} 
        </section>
    )
}

ListView.defaultProps = {
    displayData: []
  };

export default ListView