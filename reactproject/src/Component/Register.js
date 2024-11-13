import React from "react";
import Header from "./Header";

class Register extends React.Component {
    state = {
        fname: '', lname: '', pass: '', email: '', address: '', phone: '', val: ''
    }

    data = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handle = (event) => {
        event.preventDefault()
        const { fname, lname, pass, email, address, phone } = this.state
        const val = `Firstname : ${fname} Lastname: ${lname} Phone number: ${phone} email: ${email} address : ${address} password: ${pass}`;
        this.setState({ val }, () => {
            alert(this.state.val)
        });
    }

    render() {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row row2 " >

                        <div className="col-lg-6 colForm" style={{marginTop:'100px'}}>
                        <h1>Register Page</h1>
                            <div className="card mt-3 mb-3 cardr" style={{backgroundColor:'#E1F1E7'}}>
                          

                                <div className="card-body">
                                    <form onSubmit={this.handle}>
                                        <div className="col-lg-12 mt-3 mb-3">
                                            <input type="text" name="fname" value={this.state.fname} placeholder="Firstname" onChange={this.data} className="form-control" />
                                        </div>
                                        <div className="col-lg-12 mt-3 mb-3">
                                            <input type="text" name="lname" value={this.state.lname} placeholder="Lastname" onChange={this.data} className="form-control" />
                                        </div>
                                        <div className="col-lg-12 mt-3 mb-3">
                                            <input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.data} className="form-control" />
                                        </div>
                                        <div className="col-lg-12 mt-3 mb-3">
                                            <input type="password" name="pass" value={this.state.pass} placeholder="Password" onChange={this.data} className="form-control" />
                                        </div>
                                        <div className="col-lg-12 mt-3 mb-3">
                                            <input type="text" name="address" value={this.state.address} placeholder="Address" onChange={this.data} className="form-control" />
                                        </div>
                                        <div className="col-lg-12 mt-3 mb-3">
                                            <input type="number" name="phone" value={this.state.phone} placeholder="Mo." onChange={this.data} className="form-control" />
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="submit" name="name" value="submit" className="form-control btn btn-primary rounded-pill" />
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

export default Register;
