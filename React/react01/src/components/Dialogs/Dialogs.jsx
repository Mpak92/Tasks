import DiaCont from './DialogsContent/DiaCont';
import DialogsName from './DialogsName/DialogsName';
import dialog from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={dialog.dialogs}>
            <DialogsName />
            <DiaCont />
        </div>
    );
}

export default Dialogs;