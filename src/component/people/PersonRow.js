import React, {Component} from "react";

export default class PersonRow extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <tr key={this.props.data.phone}>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.lastname}</td>
            <td>{this.props.data.phone}</td>
            <td>{this.props.data.email}</td>
          </tr>
        </>
    )
  }
}