import DialogsName from './DialogsName/DialogsName';
import dialog from './Dialogs.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {
    const dialogsElems = props.dialogs.dialogs.map(dia => <DialogsName name={dia.name} id={dia.id} ava={dia.ava} key={dia.id} />);

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialogsItems}>
                {dialogsElems}
            </div>
            <NewMessageContainer />
        </div>
    );
}

export default Dialogs;