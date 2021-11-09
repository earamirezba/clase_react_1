import React, {Component} from "react";

const objForm = {name: "", lastname:"", phone:"", mail:""}

export default class PersonForm extends Component{
    constructor(props){
        super(props);
        console.log(this.props.mensaje);
        
        this.state = {
            form: objForm
        }
        this.handleValue = this.handleValue.bind(this);
        this.handlerSubmit=this.handlerSubmit.bind(this)
    }

    handleValue(e){
        let form = this.state.form;
        this.setState({
            form: {...form, [e.target.name]: e.target.value}
        });
        console.log(form);

        /*
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
         */    
    }
    
    handlerSubmit(e){
        console.log(e);
        e.preventDefault();
        console.table(this.state);
    }
    render(){
        return(
            <>
            <form onSubmit={this.handlerSubmit} >
                <label htmlFor="name" >Nombre: </label>
                <input name="name" id="name" type="text" value={this.state.form.name} onChange={this.handleValue} placeholder="Escribe tu Nombre..."/>
                
                <label htmlFor="lastname" >Apellido: </label>
                <input name="lastname" id="lastname" type="text" value={this.state.form.lastname} onChange={this.handleValue} placeholder="Escribe tu Apellido..."></input>
                <br/>
                <br/>
                
                <label htmlFor="phone" >Telefono: </label>
                <input name="phone" id="phone" type="text" value={this.state.form.phone} onChange={this.handleValue} placeholder="Escribe tu Telefono..."/>
                <label htmlFor="mail" >Mail: </label>
                <input name="mail" id="mail" type="mail" value={this.state.form.mail} onChange={this.handleValue} placeholder="Escribe tu Apellido..."></input>
                <br/>
                <br/>
                <button type="submit" >Registrar</button>
                
            </form>

            </>

        );
    }
}