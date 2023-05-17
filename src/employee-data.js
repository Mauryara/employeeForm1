// import { LitElement, html } from 'lit';

// class EmployeeForm extends LitElement {
//   static get properties() {
//     return {
//       name: { type: String },
//       empCode: { type: String },
//       emailOfficial: { type: String },
//       emailPersonal: { type: String },
//       designation: { type: String },
//       department: { type: String },
//     };
//   }

//   constructor() {
//     super();
//     this.name = '';
//     this.empCode = '';
//     this.emailOfficial = '';
//     this.emailPersonal = '';
//     this.designation = '';
//     this.department = '';
//   }

//   render() {
//     return html`
//       <form @submit=${this._handleSubmit}>
//         <label>
//           Full Name:
//           <input type="text" name="name" value=${this.name} @input=${this._handleInputChange} required maxlength="40">
//         </label>
//         <br><br>
//         <label>
//           Employee Code:
//           <input type="text" name="empCode" value=${this.empCode} @input=${this._handleInputChange} required pattern="[A-Za-z][0-9]{6}">
//         </label>
//         <br><br>
//         <label>
//           Official Email:
//           <input type="email" name="emailOfficial" value=${this.emailOfficial} @input=${this._handleInputChange} required>
//         </label>
//         <br><br>
//         <label>
//           Personal Email:
//           <input type="email" name="emailPersonal" value=${this.emailPersonal} @input=${this._handleInputChange} required>
//         </label>
//         <br><br>
//         <label>
//           Designation:
//           <select name="designation" @change=${this._handleInputChange} required>
//             <option value="">Select an option</option>
//             <option value="Manager">Manager</option>
//             <option value="Developer">Developer</option>
//             <option value="Designer">Designer</option>
//           </select>
//         </label>
//         <br><br>
//         <label>
//           Department:
//           <select name="department" @change=${this._handleInputChange} required>
//             <option value="">Select an option</option>
//             <option value="Technology">Technology</option>
//             <option value="Marketing">Marketing</option>
//             <option value="Sales">Sales</option>
//           </select>
//         </label>
//         <br><br>
//         <button type="submit">Submit</button>
//       </form>
//     `;
//   }
//   _handleInputChange(event) {
//     const { name, value } = event.target;
//     this[name] = value;
//   }

//   _handleSubmit(event) {
//     event.preventDefault();
//     alert("success...")
    

//     const empData = {
//       name: this.name,
//       empCode: this.empCode,
//       email: {
//         official: this.emailOfficial,
//         personal: this.emailPersonal,
//       },
//       designation: this.designation,
//       department: this.department,
//     };

//     const empList = JSON.parse(localStorage.getItem('empList')) || [];
//     empList.push(empData);
//     localStorage.setItem('empList', JSON.stringify(empList));
//     this.resetForm();
    
//   }

//   resetForm() {
//     this.name = '';
//     this.empCode = '';
//     this.emailOfficial = '';
//     this.emailPersonal = '';
//     this.designation = '';
//     this.department = '';
//   }
  
 
// }
// console.log(JSON.parse(window.localStorage.getItem('empList')));


// customElements.define('employee-form', EmployeeForm);
