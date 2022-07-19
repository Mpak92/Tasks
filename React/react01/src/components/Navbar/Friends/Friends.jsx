import frd from'./Friends.module.css';

const Friends = (props) => {
  return (
    <div className={frd.online}>
      <div>
        <img src={props.ava} alt='avatar'></img>
      </div>
      {props.name}
    </div>
  );
}

export default Friends;
