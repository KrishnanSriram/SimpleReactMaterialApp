import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export default ({text, index, reflink}) => {
  return (
    <ListItem button component={Link} to={reflink}>
      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}
