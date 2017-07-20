import React from 'react'
import moment from 'moment'

export default React.createClass({

  getInitialState(){
    return {
      time: null
    }
  },

  getDefaultProps(){
    return {
      time: 0
    }
  },

  componentDidMount(){
    this._timer = setInterval(this.setTime, 1000)
    this.setTime()
  },

  setTime() {
    if (!this.props.time) return

    this.setState({
      time: moment.unix(this.props.time).fromNow()
    })
  },

  componentWillUnmount(){
    clearInterval(this._timer)
  },

  render() {

    return (
      <small>{ this.state.time }</small>
    )

  },

})
