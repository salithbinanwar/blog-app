// import { useState } from "react"
import { Link } from "react-router-dom"
// import Train from "../Train/Train"


const Compo = (props) => {
    const {comp, setComp}= props;
    
    const handleChange =(e)=>{

        setComp( e.target.value)
        console.log(e.target.value)

    }
        const handleSubmit =()=> {
            
        }
    return (

        <div className='m-5 container'>
           <h1>text = {comp} </h1>
           <form onSubmit={handleSubmit()} >
                <input  type="text" name="text" autocomplete='off' onChange={handleChange} />
                
                <input type="submit" className="btn btn-success m-2" value="submit" />
           </form>
            {/* <Train titleValue={title}/> */}
            <Link to='/train'>go to train</Link>
            <br />
            <Link to='/'>homepage</Link>
            
        </div>
    )

}



export default Compo




