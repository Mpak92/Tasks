import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
};

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Dialogs);