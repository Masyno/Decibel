// Import the remote electron code so we can access
// the forground window.
const remote = require('electron').remote

// Import react
import React from 'react'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import FontIcon from 'material-ui/FontIcon';




const iconButtonElement = (
  <IconButton>
    <MoreVertIcon color={grey400} />
  </IconButton>
);


export default class ServerList extends React.Component
{
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    render()
    {
        const actions = [
            <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />,
            <FlatButton label="Connect" primary={true} onTouchTap={this.handleClose} />,
        ]

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem primaryText="Connect" onTouchTap={this.handleOpen} leftIcon={<FontIcon className="material-icons" style={{color: '#E4E4E4'}}>open_in_new</FontIcon>} />
                <MenuItem primaryText="Edit" leftIcon={<FontIcon className="material-icons" style={{color: '#E4E4E4'}}>edit</FontIcon>} />
                <MenuItem primaryText="Delete" leftIcon={<FontIcon className="material-icons" style={{color: '#E4E4E4'}}>delete</FontIcon>} />
            </IconMenu>
        )

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div id="ServerList">
                    <div className="AppTitle">
                        <h1>Decibel</h1>
                        <p>Version: 0.0.1</p>
                    </div>

                    <Dialog title="Connect to Server"
                            className="noselect"
                            actions={actions}
                            modal={true}
                            open={this.state.open}
                            onRequestClose={this.handleClose}>
                        Are you sure that you want to connect to this server? Any current sessions will be disconnected.
                    </Dialog>

                    <List>
                        <Subheader>Recent Servers</Subheader>
                        <ListItem primaryText="ServerName" 
                                  onTouchTap={this.handleOpen}
                                  secondaryText="localhost:44044"
                                  rightIconButton={rightIconMenu} />
                    </List>

                    <div className="ServerBottomMenu">
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}