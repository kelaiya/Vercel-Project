import {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footbar from './Footbar'

export default class Connect extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
            greet: "",
            nameWarning: "",
            emailWarning: "",
            messageWarning: "",
            emailInvalid: false
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(event){
        this.setState({name: event.target.value, nameWarning: ""})
    }
    handleChangeEmail(event){
        this.setState({email: event.target.value, emailWarning: ""})
    }
    handleChangeMessage(event){
        this.setState({message: event.target.value, messageWarning: ""})
    }
    validateEmail = function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
        return re.test(String(email).toLowerCase());    
    }
    handleSubmit(event){
        event.preventDefault()
        let valid = true;

        if(this.state.name.trim() == ""){
            this.setState({nameWarning: "Please enter the name."})
            valid = false;
        } 

        if(this.state.email == ""){
            this.setState({emailWarning: "Please enter the email."})
            valid = false;
        } else if(!this.validateEmail(this.state.email)){
            this.setState({emailInvalid: true})
            valid = false;
        }

        if(this.state.message.trim() == ""){
            this.setState({messageWarning: "Please enter the message."})
            valid = false;
        } 
        if(!valid) return
        
        axios.post('/api/connect/', {"name": this.state.name, "email": this.state.email, "message": this.state.message})
        .then(res => {
            console.log(res)
            this.setState({
                greet: "Thanks for your message!",
                name: "",
                email: "",
                message: "",
                isEmail: false
            })
        })
        .catch(err => {
            console.error('AXIOS ERROR', err.response?.data || err.message);
        })
    }    
    render(){
        return(
            <div>
                <Navbar />
                <div className="content">
                    <h2 className="subtitle">Connect with me :</h2>
                    <div className='form'>
                        <form className="form connect" id="reset" onSubmit={this.handleSubmit}>
                            <label className="label"> Name      :      </label>
                            <input className='input'onChange={this.handleChangeName} value={this.state.name} />
                            {
                                this.state.nameWarning && (<p className="warning">{this.state.nameWarning}</p>)
                            }
                            <label className="label"> Email      :      </label>
                            <input className='input'onChange={this.handleChangeEmail} value={this.state.email} />
                            {
                                this.state.emailWarning && (<p className="warning">{this.state.emailWarning}</p>)
                            }
                            {
                                !this.state.emailWarning && this.state.emailInvalid && (<p className="warning">Please enter a valid email.</p>)
                            }
                            <label className="label1"> Message      :      </label>
                            <input className='input1'onChange={this.handleChangeMessage} value={this.state.message} />
                            {
                                this.state.messageWarning && (<p className="warning1">{this.state.messageWarning}</p>)
                            }
                            <button className='button3' type="submit"> Submit </button>
                        </form>
                        {
                            this.state.greet && <h3>{this.state.greet}</h3>
                        }
                    </div>
                </div>
                <Footbar />
            </div>
        )
    }
}