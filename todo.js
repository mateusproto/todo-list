import garbage from './garbage-can.png';

function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return (
    <div className="todo" onClick={handle}>{todo.text}>
      <img className="trash" src={garbage}>
    </div>
  );
}
