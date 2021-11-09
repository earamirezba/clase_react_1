import React, {Component} from "react";
import PersonForm from "./PersonForm";
import PersonTable from "./PersonTable";


class PersonApp extends Component{
    constructor(props){
        super(props);
        this.state ={
            people: [],
            personUpdate: {id: "", name: "", lastname: "", phone: "", mail: ""}
        }
        this.addPerson = this.addPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }

    addPerson(objPerson){
        this.setState({
            people: [...this.state.people, objPerson] //splitoperator
        })
    }

    deletePerson(email){
        let people = this.state.people;
        let tempo = people.filter(objPerson => (objPerson.email !== email));
        this.setState({
            people : tempo
        })
    }

    updatePerson(){

    }

    setPersonUpdate(objPerson){
        this.setState({
            personUpdate: {id:objPerson.email, ...objPerson}
        })
    }

    render(){
        return(
            <div>
                <h1>Registro Personas - Componentes de Clases</h1>
                <PersonForm personUpdate={this.state.personUpdate} addPerson={this.addPerson}/>
                <PersonTable deletePerson={this.deletePerson} people={this.state.people} />
            </div>
        );
    }
}

export default PersonApp;