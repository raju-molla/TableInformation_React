import React from "react";

class ControlFrom extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            age:null,
            programmingLanguage:'',
            password:'',
            libraries:[]
        }
    }
    changeHandler = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    CheakBoxChangeHandler=(event)=>{
        if(event.target.checked){
            this.setState({
                libraries:[...this.state.libraries,event.target.value]
            })
        }
        else{
            this.setState({
                libraries:[this.state.libraries.pop()]
            })
        }
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }
    
    render(){
        return(
            <form>
                <div>
                    <level>Name:</level>
                    <input name="name" type="text" value={this.state.name} onChange={this.changeHandler}></input>
                </div>
                <div>
                    <level>Age:</level>
                    <input name="age" type="number" value={this.state.age} onChange={this.changeHandler}></input>
                </div>
                <div>
                    <level>password:</level>
                    <input name="password" type="password" value={this.state.password} onChange={this.changeHandler}></input>
                </div>

                <div>
                    <level>Select programming Language</level>
                    <select 
                        name="programmingLanguage" 
                        value={this.state.programmingLanguage}
                        onChange={this.changeHandler}
                    >
                        <option value="javascript">Javascript</option>
                        <option value="nodejs">NodeJs</option>
                        <option value="c++">C/C++</option>

                    </select>
                </div>

                <div>
                    <p>Please select Preferable libraries</p>
                    <input type="checkbox" name="express" value="express" onClick={this.CheakBoxChangeHandler} />
                    <label>Express</label>
                    <input type="checkbox" name="hapi" value="hapi" onClick={this.CheakBoxChangeHandler} />
                    <label>Hapi</label>
                    <input type="checkbox" name="next.js" value="next.js" onClick={this.CheakBoxChangeHandler} />
                    <label>Next.js</label>
                    <input type="checkbox" name="react" value="react" onClick={this.CheakBoxChangeHandler} />
                    <label>React.js</label>
                </div>

                <br/>
                <button onClick={this.submitHandler}>Submit</button>


                {/* <h1>Name: {this.state.name}</h1>
                <h1>Age: {this.state.age}</h1> */}
                
            </form>

        )
    }
}
export default ControlFrom