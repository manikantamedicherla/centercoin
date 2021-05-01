import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { ticketUrls, BASE } from './ticketUrls'

class DownloadTckts extends Component {
    constructor() {
        super()
        this.state = {}

    }
    localSet = (tickestArr) => {
        localStorage.setItem('tickets', JSON.stringify(tickestArr))
    }
    localGet = () => {
        return localStorage.getItem('tickets')
    }
    getFileUrls = () => {
        let localData = this.localGet()
        try {
            localData = JSON.parse(localData)
        }
        catch (e) {
            localData = []
        }
        if (localData && Array.isArray(localData) && localData.length) {
            return localData
        } else {
            this.localSet(ticketUrls)
            return ticketUrls
            // const ticketUrlsMap = new Map(ticketUrls.map(fileItem => ([fileItem.name, fileItem])))

        }
    }
    download = () => {
        let { noOFt = 0 } = this.state
        noOFt = Number(noOFt)
        debugger
        let filesArr = this.getFileUrls()
        debugger
        if (noOFt > filesArr.length) {
            this.localSet(ticketUrls)
            filesArr = ticketUrls
        }
        let downdFilesArr = filesArr.splice(0, noOFt)
        this.localSet(filesArr)
        downdFilesArr.forEach(fileItem => {
            let { name } = fileItem
            let uri = BASE + name
            var link = document.createElement('a')
            link.download = name
            link.href = uri
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
    }
    render() {
        const { noOFt = 0 } = this.state
        let temp = true
        return <div>
            {temp ?
                <div>
                    <input
                        type='number'
                        min={1}
                        max={50}
                        onChange={(e) => { this.setState({ noOFt: e.target.value }) }}
                        id='no-of-tcts' value={noOFt} />
                    <button onClick={this.download} >Download</button>
                </div>
                : <p>Sorry, No Tickets availabel now.</p>}
            <br />
            <Link to="/play">Go to Play</Link>
        </div>
    }
}
export default DownloadTckts