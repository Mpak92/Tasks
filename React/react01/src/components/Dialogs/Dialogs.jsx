import DiaCont from './DialogsContent/DiaCont';
import DialogsName from './DialogsName/DialogsName';
import dialog from './Dialogs.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {
    const dialogsElems = props.dialogs.dialogs.map(dia => <DialogsName name={dia.name} id={dia.id} ava={dia.ava} />);
    const messagesElems = props.dialogs.messages.map(mess => <DiaCont message={mess.message} />);

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogsItems}>
                {dialogsElems}
            </div>
            <div className={dialog.messages}>
                {messagesElems}
            </div>
            <NewMessageContainer />
        </div>
    );
}

export default Dialogs;