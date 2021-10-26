import React from "react";
import './style.css'
import Styles from './Button.module.css'

class RegistrationFormComp extends React.Component{

    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            password:'',
            email:'',
            reTypePassword:'',
            gender:'',
            country:'',
            skills:[]

        }
    }

    changeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    submitHandler = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }
    checkBoxChangeHandler = (event) =>{
        if(event.target.checked){
            this.setState({
                skills:[...this.state.skills,event.target.value]
            })
        }
        else{
            this.setState({
                skills:this.state.skills.filter(ele=> ele!==event.target.value)
            })
        }
    }
        
    

    render(){
        return(
            <div className="Container">
                <form className="formDiv">
                    <h1>Registration Form</h1>
                    <div className="mainDiv">
                        <label>Email : </label>
                        <input name="email" type="email" placeholder=" Email" value={this.state.email} onChange={this.changeHandler} />
                        <br></br>
                        <label>Password : </label>
                        <input name="password" type="password" placeholder=" password" value={this.state.password} onChange={this.changeHandler}  />
                        <br></br>
                        <label>Re-type password : </label>
                        <input name="reTypePassword" type="password" placeholder=" Re-type-password" value={this.state.reTypePassword} onChange={this.changeHandler}  />
                        <br></br>
                        <label>First Name : </label>
                        <input name="firstName" type="text" placeholder=" First Name" value={this.state.firstName} onChange={this.changeHandler} /> <span className="gap"></span>
                        <label>Last Name : </label>
                        <input name="lastName" type="text" placeholder=" Last Name" value={this.state.lastName} onChange={this.changeHandler} />
                        
                        <br></br>
                        <br></br>
                        <label>Select Your Country : </label>
                        <select className="optionItem"
                            name="country"
                            type='radio'
                            value={this.state.country}
                            onChange={this.changeHandler}
                            
                        >
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>

                        </select>
                        <br></br>

                        <div className="radioBtn">
                            <label>Select Gender: </label>
                            <input name="gender" type="radio" value="Male" onChange={this.changeHandler} /> <span className="gap"></span>
                            <label>Male</label><span className="gap"></span>
                            <input name="gender" type="radio" value="Female" onChange={this.changeHandler} /> <span className="gap"></span>
                            <label>Female</label><span className="gap"></span>
                            <input name="gender" type="radio" value="Others"  onChange={this.changeHandler}/><span className="gap"></span>
                            <label>Others</label>
                        </div>
                        
                        <br></br>
                        <div>
                            <label>Please Select Your Programming Skills :</label>
                            <br></br>
                            <input name="React" type="checkbox" value="React" onChange={this.checkBoxChangeHandler} /><span className="gap"></span>
                            <label>React</label><span className="gap"></span>
                            <input name="Express" type="checkbox" value="Express" onChange={this.checkBoxChangeHandler} /><span className="gap"></span>
                            <label>Express</label><span className="gap"></span>
                            <input name="MongoDb" type="checkbox" value="MongoDb" onChange={this.checkBoxChangeHandler} /><span className="gap"></span>
                            <label>MongoDb</label><span className="gap"></span>
                            <input name="nodejs" type="checkbox" value="nodejs" onChange={this.checkBoxChangeHandler} /><span className="gap"></span>
                            <label>nodejs</label><span className="gap"></span>
                            <input name="HtMl/Css" type="checkbox" value="HtMl/Css" onChange={this.checkBoxChangeHandler} /><span className="gap"></span>
                            <label>HtMl/Css</label>
                            
                        </div>
                        <br></br>
                        <button className={Styles.button} onClick={this.submitHandler}>Submit</button>
                    </div>
                </form>

            </div>
            
        )
    }
}

export default RegistrationFormComp