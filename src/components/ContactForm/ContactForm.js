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
      this.setState({ name: '', number: '' });
    }
    return;
  };

  render() {
    let {
      handleSubmit,
      inputNameID,
      inputNumberID,
      handleChangeName,
      handleChangeNumber,
    } = this;
    let { name, number } = this.state;
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor={inputNameID}>Names</label>
          <input
            id={inputNameID}
            name={name}
            type="text"
            value={name}
            onChange={handleChangeName}
          ></input>

          <label htmlFor={inputNumberID}>Number</label>
          <input
            id={inputNumberID}
            name={number}
            type="text"
            value={number}
            placeholder="XXX-XX-XX"
            onChange={handleChangeNumber}
          ></input>

          <button type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}
