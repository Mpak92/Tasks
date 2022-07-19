import DiaCont from './DialogsContent/DiaCont';
import DialogsName from './DialogsName/DialogsName';
import dialog from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsElems = props.dialogs.dialogs.map(dia => <DialogsName name={dia.name} id={dia.id} ava={dia.ava} />);
    let messagesElems = props.dialogs.messages.map(mess => <DiaCont message={mess.message} />);

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogsItems}>
                {dialogsElems}
            </div>
            <div className={dialog.messages}>
                {messagesElems}
            </div>
        </div>
    );
}

export default Dialogs;