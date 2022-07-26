import DiaCont from './DialogsContent/DiaCont';
import DialogsName from './DialogsName/DialogsName';
import dialog from './Dialogs.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {
    const state = props.store.getState().dialogs;

    let dialogsElems = state.dialogs.map(dia => <DialogsName name={dia.name} id={dia.id} ava={dia.ava} />);
    let messagesElems = state.messages.map(mess => <DiaCont message={mess.message} />);

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogsItems}>
                {dialogsElems}
            </div>
            <div className={dialog.messages}>
                {messagesElems}
            </div>
            <NewMessageContainer store={props.store} />
        </div>
    );
}

export default Dialogs;