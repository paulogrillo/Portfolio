import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link  } from 'react-router-dom';

import '../../components/menu/style.css'
import Routes from '../../routes';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button 
          className="button"
          variant="contained" color="primary" {...bindTrigger(popupState)}>
            Menu
          </Button>
          <Menu className="menu" {...bindMenu(popupState)}>
            <Link 
              className="link"
              to="/projects-marketing">
              <MenuItem 
              onClick={popupState.close}>
              Portfolio de projetos
              </MenuItem>
            </Link>
            <Link 
              className="link"
              to="/projects-marketing">
              <MenuItem 
              onClick={popupState.close}>
              Portfolio de projetos
              </MenuItem>
            </Link>

  
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}