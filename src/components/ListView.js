import React from 'react';
import ListItem from './ListItem';
import '../css/ListView.css';

const ListView = ({data, listName, itemRoute}) => {

    return (
        <section className="patterns-projects-list">
            <h2 className="subhead-list">{listName}</h2>
        
            {data.map((item, i) => (
                <ListItem 
                    key={`listItem-${i}`}
                    item={item}
                    itemRoute={itemRoute} 
                />
            ))} 
        </section>
    )
}

export default ListView