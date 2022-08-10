import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        isAuth: state.auth.isAuth
    }
};

const DialogsContainer = connect(mapStateToProps, { })(Dialogs);

export default DialogsContainer;