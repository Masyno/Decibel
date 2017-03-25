// Import the remote electron code so we can access
// the forground window.
const remote = require('electron').remote

// Import react
import React from 'react'

/**
 * The titlebar compnent which sits at the top of the page
 * and provides a title, and max/min/close buttons.
 */
export default class Titlebar extends React.Component
{
    /**
     * Close the current electron window.
     */
    closeWindow()
    {
        let window = remote.getCurrentWindow()
        window.close()
    }

    /**
     * Minimize the window to the taskbar.
     */
    minWindow()
    {
        let window = remote.getCurrentWindow()
        window.minimize();
    }

    /**
     * Toggle between max and collapsed states.
     */
    maxWindow()
    {
        let window = remote.getCurrentWindow()

        if (!window.isMaximized()) 
        {
            window.maximize()
        } 
        else 
        {
            window.unmaximize()
        } 
    }

    render()
    {
        return (
            <div className="title noselect">
                <h1>Decibel - Voice Communications App</h1>
                <div className="menu-icons">
                    <div id="min-btn" onClick={this.minWindow}></div>
                    <div id="max-btn" onClick={this.maxWindow}></div>
                    <div id="close-btn" onClick={this.closeWindow}></div>
                </div>
            </div>
        )
    }
}