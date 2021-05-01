import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './home.css'

class PlayHome extends Component {
    constructor() {
        super()
        console.log('play home, mk')
    }
    hasPrevGame() {
        debugger
        var unParsedlocalData = localStorage.getItem('numbers')
        try {
            var localData = JSON.parse(unParsedlocalData)
        } catch (e) {
            localData = false
        }
        return Array.isArray(localData) && localData.length !== 0 && localData.length !== 90
    }
    render() {

        return <div>
            <button className='btn-home'>
                <Link className='btn-link' to="/play" onClick={() => {
                    if (this.hasPrevGame()) {
                        var yes = window.confirm(`Reset previous game for sure ?`)
                        if (!yes) return
                    }
                    localStorage.removeItem('numbers')
                    localStorage.removeItem('number')
                }}>New game</Link>
            </button>
            <br />
            {this.hasPrevGame() ?
                <button className='btn-home'>
                    <Link className='btn-link' to="/play">Resume</Link>
                </button>

                : null}
            <br />
            <button className='btn-home'>
                <Link className='btn-link' to="/download">Download Tickets</Link>
            </button>
        </div>
    }
}
export default PlayHome