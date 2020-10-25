import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link  } from 'react-router-dom';

import { GrMenu } from 'react-icons/gr';

import '../../components/menu/style.css'
import Routes from '../../routes';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button 
          
          variant="contained"  className="button" color="default"  {...bindTrigger(popupState)}>
            <GrMenu
            id="menu-icon"
            />
          </Button>
          <Menu className="menu" {...bindMenu(popupState)}>
            <Link 
              className="link"
              to="/projects">
              <MenuItem 
              onClick={popupState.close}>
              Projetos
              </MenuItem>
            </Link>
            <Link 
              className="link"
              to="/">
              <MenuItem 
              onClick={popupState.close}>
              Serviços
              </MenuItem>
            </Link>
            <Link 
              className="link"
              to="/">
              <MenuItem 
              onClick={popupState.close}>
              Blog
              </MenuItem>
            </Link>

  
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}