import React from 'react'
import {Button, Container, Divider, Dropdown, Label, Icon} from 'semantic-ui-react'

// import {getConnections} from '../actions'

import { connect } from 'react-redux'


export class Requests extends React.Component {
  constructor(props) {
		super(props);

    this.state = {
      options: this.props.requests.map(data=>{
        console.log(data,"this is the data I'm passing into dropdown");
        const option = {
            text: data.title,
            value: data._id,
            image: { avatar: true, src: data.image },
            key: data._id
          }
        return option
      })
    }
    // this.state = {
    //   options: [
    //     {
    //         text: this.props.currentConnections[0].title,
    //         value: 'Devin Hanaway',
    //         image: { avatar: true, src: 'http://www.devinhanaway.com/home_profile_pic_circle.png' },
    //       }
    // ]
    // }
  }
  // async componentDidMount(){
  //   await this.props.getConnections()
  // }

  reset() {
    this.setState({ value: undefined })
  }

  setProducts() {
    this.setState({ value: 'products' })
  }

  setValue(e, data) {
    this.setState({ value: data.value })
  }

  render() {
    console.log(this.props.requests[0])

    const { value } = this.state

    return (
      <Container>

        <Dropdown
          onChange={this.setValue.bind(this)}
          options={this.state.options}
          selection
          value={value}
          text="Connection Requests"
        />



      </Container>
    )
  }
}

// ----------------------------------------
// Render to DOM
// ----------------------------------------
const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

Requests.propTypes = {
  requests: React.PropTypes.array.isRequired,
  // getConnections: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log(state);
  return{
    // requests: state.requestConnections.requests.requests
  }
}

export default connect(mapStateToProps)(Requests)
