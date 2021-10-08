import { Component } from 'react';
import shortid from 'shortid';

export class ContactForm extends Component {
  inputNameID = shortid();
  inputNumberID = shortid();

  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };
  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let contact = {
      id: shortid(),
      name: this.state.name,
      number: this.state.number,
    };

    if (this.state.name) {
      this.setState({ contact });
      this.props.searchDuplicate(this.state.name);
      this.props.addNewContact(contact);
      // if (!alert) {
      //     this.props.addNewContact(contact);
      // }
      this.setState({ name: '', number: '' });
    }
    return;
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputNameID}>Names</label>
          <input
            id={this.inputNameID}
            name={this.state.name}
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          ></input>

          <label htmlFor={this.inputNumberID}>Number</label>
          <input
            id={this.inputNumberID}
            name={this.state.number}
            type="text"
            value={this.state.number}
            placeholder="012-34-56"
            onChange={this.handleChangeNumber}
          ></input>

          <button type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}
