import logo from './logo.svg';
import './App.css';
import{useState} from'react';

var cnt=0;
function App() {
  const [s1,sets1]=useState("");
  const [s2,sets2]=useState("");
  const [s3,sets3]=useState("");
  const [s4,sets4]=useState("");
  const [main,setmain]=useState([]);
  const [id,setid]=useState(0);

  const submit=()=>{
    cnt++;
    setid(cnt);
    const obj={
      s1:s1,
      s2:s2,
      s3:s3,
      s4:s4,
      id1:id,
    }
    setmain([...main,obj]);
  }
  const reset=()=>{
    sets1(' ')
    sets2(' ')
    sets3(' ')
    sets4(' ')
  }
  
  return (
    <div className="App">
      S1:<input type="text" value={s1} onChange={(e)=>{sets1(e.target.value)}}></input>
      S2:<input type="text" value={s2} onChange={(e)=>{sets2(e.target.value)}}></input>
      S3:<input type="text" value={s3} onChange={(e)=>{sets3(e.target.value)}}></input>
      S4:<input type="text" value={s4} onChange={(e)=>{sets4(e.target.value)}}></input>
      <br></br>
      <br></br>
      <br></br>
      <input type="button" onClick={submit}  value="Submit"  className='btn'/>
      <input type="button" onClick={reset}  value="Reset" className='btn'/>
    
        <br />
        <br />
        <br />
        <br />
     
     <table>
      <tr>
        <th>S1</th>
        <th>S2</th>
        <th>S3</th>
        <th>S4</th>
      </tr>
      {
        main.map((item)=>
        {
          return(
            <tr id={item.id1}>
              <td>{item.s1}</td>
              <td>{item.s2}</td>
              <td>{item.s3}</td>
              <td>{item.s4}</td>
            </tr>
          )
        })
      }
     </table>
    </div>
  );
}

export default App;
