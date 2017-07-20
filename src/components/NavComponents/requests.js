






import React from 'react'
// import api from '../../utils/api'
import {decodejwt} from "../..utils/setAuthorizationToken"
import sl from '../../utils/sl'
import Requests from './BaseNotifications'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/svg-icons/action/record-voice-over'

export default class Notifications extends Requests {

  constructor(props) {
    super(props)
    this._feed = 'USER_REQUESTS'
    this._icon = <Icon color='white' />
    this._tooltip = 'Requests'
    this._badgeRightPos = 8
  }

  getMenuItemContent(activity) {

    return (
      <div>
        <div className='row'>
          <div className='col-sm-2'><IconButton><Avatar src={activity.avatar} /></IconButton></div>
          <div className='col-sm-10'>
            <div className='notification-label'>{activity.label}</div>
            <div>
              <FlatButton label={'Accept'} onClick={this.act.bind(this, activity, true)} />
              <FlatButton label={'Reject'} onClick={this.act.bind(this, activity, false)}/>
            </div>
          </div>
        </div>
      </div>
    )

  }

  act(activity, accept){



    decodejwt()
      .then((res)=>{
        if (this.componentDidMount()) {

          // notify

          const msg = (!!accept)
            ? 'You successully accepted the request!'
            : 'You successully rejected the request!'
          sl('info', msg)

          // remove note from list

          this.setState({
            notifications: this.state.notifications.filter((note)=>{
              return note.id !== activity.id
            }),
            unread: this.state.unread - 1,
          })

          // close

          this.handleHideCreateOptions()

        }
      }, (err)=>{
        if (this.componentDidMount()) {

          // notify

          sl('error', err)

          // close

          // this.handleHideCreateOptions()

        }
      })

  }

  handleClickActivity(activity){

  }

}
