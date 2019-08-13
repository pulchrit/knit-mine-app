import React from 'react';
import ListItem from './ListItem';
import '../css/ListView.css';

const ListView = ({data}) => {

    return (
        <section className="patterns-projects-list">
            <h2 className="subhead-list">Stitch Patterns</h2>
        
            {data.map((stitch, i) => (
                <ListItem key={i} stitch={stitch} />
            ))} 
        </section>
    )
}

export default ListView