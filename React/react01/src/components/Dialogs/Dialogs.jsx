import DiaCont from './DialogsContent/DiaCont';
import DialogsName from './DialogsName/DialogsName';
import dialog from './Dialogs.module.css';

const Dialogs = (props) => {
    let dialogsElems = props.dialogs.map(dia => <DialogsName name={dia.name} id={dia.id} />);
    let messagesElems = props.messages.map(mess => <DiaCont message={mess.message} />);

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