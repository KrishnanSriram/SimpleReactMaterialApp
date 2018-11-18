import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';


export default (props) => {
  const {toggleDrawer, open} = props; 
  return (
    <SwipeableDrawer
          open={open}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
        <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer('left', false)}
        onKeyDown={toggleDrawer('left', false)}
        >
          {props.children}
        </div>
    </SwipeableDrawer>
  )
}
