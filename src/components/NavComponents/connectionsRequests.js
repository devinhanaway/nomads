import React from 'react'
import {Button, Container, Divider, Dropdown, Label, Icon} from 'semantic-ui-react'



export class Requests extends React.Component {
  constructor(props) {
		super(props);
    this.state = {

      options: [
        {
            text: 'Devin Hanaway',
            value: 'Devin Hanaway',
            image: { avatar: true, src: 'http://www.devinhanaway.com/home_profile_pic_circle.png' },
          },
          {
            text: 'nick mckendry',
            value: 'nick mckendry',
            image: { avatar: true, src: 'http://nickmckendry.surge.sh/static/media/headshot.595807d3.png' },
          },
          {
            text: 'Stevie Feliciano',
            value: 'Stevie Feliciano',
            image: { avatar: true, src: 'https://react.semantic-ui.com/assets/images/avatar/small/stevie.jpg' },
          },
    ]
    }
  }


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

export default(Requests)
