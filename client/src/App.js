import React from "react";
import Form from "./components/Form";
import Message from "./components/Message";
import EmployeeAPI from "./EmployeeAPI";
import JahezAPI from "./components/jahez/jahezAPI";
import K from "./components/jahez/kushk.jsx";
import Claint from "./components/jahez/Claint.jsx";

import Register from "./components/jahez/Register";
import jahezAPI from "./components/jahez/jahezAPI";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isEditForm: false,
      employee: {
        firstName: "",
        lastName: "",
        salary: "",
        job: "",
      },
      jahezs:[],
      jahez:{
        email:"",
        city:"",
        fullName:"",
        mobile:"",
        district:"",
        typeOfFood:""
      },
      message: "",
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  componentDidMount() {
    // JahezAPI.getEmployees().then((data) => {
    //   console.log(data);
    //   this.setState({ employees: data.response });
    // });
  }

  resetForm() {
    this.setState({
      jahez:{
        email:"",
        city:"",
        fullName:"",
        mobile:"",
        district:"",
        typeOfFood:""
      },
    });
  }

  handleChange(e) {
    this.setState({
      jahez: {
        ...this.state.jahez,
        [e.target.name]: e.target.value,
      },
    });
  }

  showEditForm(employee) {
    this.setState({ isEditForm: true, employee: employee });
  }

  async deleteHandler(id) {
    const deleteData = await EmployeeAPI.deleteEmployee(id);
    const message = deleteData.message;
    if (message.msgError) {
      this.setState({ message });
    } else {
      const data = await EmployeeAPI.getEmployees();
      this.setState({ message, employees: data.response });
    }
  }

  async updateHandler(e) {
    e.preventDefault();
    const updateData = await EmployeeAPI.updateEmployee(this.state.employee);
    const message = updateData.message;
    if (message.msgError) {
      this.setState({ message });
    } else {
      const data = await EmployeeAPI.getEmployees();
      this.setState({ message, employees: data.response });
    }
    this.setState({ isEditForm: false });
    this.resetForm();
  }

  async addHandler(e) {
    e.preventDefault();
    const postData = await jahezAPI.createEmployee(this.state.jahez);
    const message = postData.message;
    // if (message.msgError) {
    //   this.setState({ message });
    // } else {
    //   const data = await EmployeeAPI.getEmployees();
    //   this.setState({ message, employees: data.response });
    // }
    this.resetForm();
  }

 

  renderForm() {
    return (
      <Form
        isEditForm={this.state.isEditForm}
        jahez={this.state.jahez}
        handleChange={this.handleChange}
      />
    );
  }

  renderMessage() {
    if (this.state.message === "") return null;
    return <Message message={this.state.message} />;
  }

  render() {
    return (
        <div>
        <Claint />
        <K />
        <Register />
        {this.renderForm()}
      </div>
    // <div className="row">
    //             <div className="col"></div>
    //             <div className="col-10">
    //                 {this.renderEmployeeTable()}
                    
    //                 {this.renderMessage()}
    //             </div>
    //             <div className="col"></div>
    //             </div>
    );
  }
}

export default App;
