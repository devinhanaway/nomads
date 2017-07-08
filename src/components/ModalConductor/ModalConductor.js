import React from 'react';
import {connect} from 'react-redux';

// import ExportDataModal from './ExportDataModal.jsx';
import actions from "../actions"
import SignInModal from './SignInModal';
// import FeedbackModal from './FeedbackModal.jsx';
// import BoxDetailsModal from './BoxDetailsModal.jsx';

const ModalConductor = props => {
  console.log(props.state);
  console.log(props.state.currentModal);
  switch (props.state.currentModal) {
    case 'EXPORT_DATA':
      // return <ExportDataModal {...props}/>;

    case "SOCIAL_SIGN_IN":
      return <SignInModal {...props}/>;

    default:
      return null;
  }
};

// export default ModalConductor;
export default connect(state => state)(ModalConductor);
