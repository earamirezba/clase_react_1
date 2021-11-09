import React, {Component} from "react";
import PersonForm from "./PersonForm";
import PersonTable from "./PersonTable";

const people = [
    {
        name: 'Juan',
        lastname: 'Perez',
        phone: '12456',
        mail: 'juan@example.com'
    },
    {
        name: 'Maria',
        lastname: 'Hernandez',
        phone: '2222',
        mail: 'maria@example.com'
    }
]

class PersonApp extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div>
                <h1>Registro Personas - Componentes de Clases</h1>
                <PersonForm mensaje="Esto es un prop"/>
                <PersonTable people={people} />
            </div>
        );
    }
}

export default PersonApp;