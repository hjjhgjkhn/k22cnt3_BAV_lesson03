import './App.css';
import BAV_ClassComp from './components/BAV_ClassComp';
import BAV_FuncDemo from './components/BAV_FuncDemo';

function App() {

  // Khai báo biến đối tượng
  const users = {
    userName:"k22cnt3",
    password:"522256a@",
    fistName:"Bùi Anh",
    lastName:"Vương"
  }

  // Khai báo đối tượng hàm
  function formatName(user){
    return <h2>Xin chào, {user.fistName} {user.lastName}</h2>;
  }
  return (
    <div className="App">
      {/* Biểu thức jsx  */}
      <div>
          <p> FullName: {users.fistName} {users.lastName}</p>
          {formatName(users)}
      </div>

      {/* Sử dụng functiono component  */}
      <div>
        <BAV_FuncDemo />
        {/* Sử dung Func_Comp có props  */}
        <BAV_FuncDemo userName="BAV" fullName="Bùi Anh Vương" age="19" />
      </div>

      {/* Sử dụng class component  */}
      <div>
        {/* dùng không sử dụng props */}
        <BAV_ClassComp /> 
        {/* Sử dụng props  */}
        <BAV_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs" />
        <BAV_ClassComp company="Fit-NTU - K22CNT4" course="ReactJs 1" />
        <BAV_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs 2" />
        <BAV_ClassComp company="Fit-NTU - K22CNT6" course="ReactJs 3" />
      </div>
    </div>
  );
}

export default App;
