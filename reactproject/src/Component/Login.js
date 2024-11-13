import React from "react";
import Header from "./Header";
class Login extends React.Component
{
    state={
        name:'',pass:'',val:''
    }
    data=(e)=>
    {
        const{name,value}=e.target
        this.setState({[name]:value})
    }
    handle=(event)=>
    {
        event.preventDefault()

        const{name,pass}=this.state
        const val="Name : " + name + "Password : " + pass;
        this.setState({val},()=>
        {
            alert(this.state.val)
        });
    }

    render()
    {
        return(
            <>
             <Header/>
            <div className="containder-fluid">
               <div className="row row1">
                <div className="col-lg-6 colForm1 " style={{marginTop:'100px'}}>
                    <h1>Login Form</h1>
                   
                       <div className="card cardl"  style={{backgroundColor:'#E1F1E7'}}>
                         <div className="card-body mt-3 mb-3">
                         <form onSubmit={this.handle}>
                           <div className="col-lg-12 mt-3 mb-3 ">
                             <input className="form-control" type="text" name="name" value={this.state.name} placeholder="Username" onChange={this.data}/>
                           </div> 
                           <div className="col-lg-12 mt-3 mb-3 ">
                             <input className="form-control" type="Password" name="pass" value={this.state.pass} placeholder="Password" onChange={this.data}/>
                           </div> 
                           <div className="col-lg-12 mt-3 mb-3 ">
                             <input className="form-control btn btn-primary rounded-pill" type="submit" name="button"/>
                           </div> 
                           </form>
                         </div>
                       </div>
                </div>
               </div>
            </div>
            </>
        )

    }
}
export default Login