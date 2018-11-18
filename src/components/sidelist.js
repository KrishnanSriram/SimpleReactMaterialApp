import React from 'react';
import List from '@material-ui/core/List';
import LinkListItem from './linklistitem';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

export default ({items}) => {
  return (
    <div className={styles.list}>
        <List>
        {items.map((item, index) => (
           <LinkListItem text={item.text} index={index} reflink={item.link} key={item.text} />
        ))}
        </List>
    </div>);  
}