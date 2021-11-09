import React, {Component} from "react";

export default class PersonRow extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.btnDelete = this.btnDelete.bind(this);
  }

  btnDelete(e){
    this.props.deletePerson(this.props.data.email);
  }  

  render() {
    return (
        <>
          <tr >
            <td>{this.props.data.name}</td>
            <td>{this.props.data.lastname}</td>
            <td>{this.props.data.phone}</td>
            <td>{this.props.data.mail}</td>
            <td>
              <button>Editar</button>
              &nbsp;
              <button onClick={this.btnDelete}>Eliminar</button>
            </td>
          </tr>
        </>
    )
  }
}