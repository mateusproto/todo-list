import imageGarbage from 'https://github.com/mateusproto/todo-list/blob/main/garbage-can.png';

function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return (
    <div className="todo" onClick={handle}>
      {todo.text}
      <img src={imageGarbage} className="trash" />
    </div>
  );
}
