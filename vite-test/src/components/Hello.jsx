import  {useState} from "react";

function Hello(){
    const[sentence, setSetence]=useState(true);
    return(
        <>

        <div>{sentence? <div>멋사 안녕</div> : <div>누구세요</div>}</div>;
        <button onClick={()=> setSetence(!sentence)}>상태 변경</button>
        </>
    )
}



export default Hello;