import React, {Component} from "react";
import PersonRow from "./PersonRow";

const tableStyle={
    width: '100%'
}
export default class PersonTable extends Component{
    constructor(props){
        super(props);
        console.table(this.props.people);
    }



    render( ){
        return(
            <>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (this.props.people.length > 0) ?
                        this.props.people.map(
                            (objPerson)=>{
                                return(
                                    <PersonRow deletePerson={this.props.deletePerson} data={objPerson} key={objPerson.mail} />

                                );
                                
                            }
                        )
                        :
                        <tr>
                            <td colSpan="4">No hay datos</td>
                        </tr>
                    }
                </tbody>
            </table>
            </>
        )
    }
}