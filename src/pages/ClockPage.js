import React from 'react'

class ClockPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    };
    render() {
        return(
            <div>
                currently {this.state.date.toLocaleTimeString()}
                <p>TimerID: {this.timerID}</p>
            </div>
        )
    }

}

export default ClockPage