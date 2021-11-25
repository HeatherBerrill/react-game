import '../styles/Frame.css';

const Frame = (props) => {
  return (
    <div className='frame' id='frame'>
      {props.children}
    </div>
  );
};

export default Frame;
