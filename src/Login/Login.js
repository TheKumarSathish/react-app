import React, { Component , useState } from "react";
import { MDBAutocomplete, MDBSelect , MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn } from 'mdbreact';

(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();

const FormPage = () => {

    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
 
    // handle input change
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
   
    // handle click event of the Remove button
    const handleRemoveClick = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
   
    // handle click event of the Add button
    const handleAddClick = () => {
      setInputList([...inputList, { firstName: "", lastName: "" }]);
    };

    return (
        <div>
             <div> &nbsp;</div>
    <div class="card myDisplay" >
  
  <h5 class="card-header info-color white-text text-center py-4">
      <strong>Registration Form</strong>
  </h5>
  
  <div class="card-body px-lg-5 pt-0">
  
      <form class="text-center needs-validation" action="#!">
  
          <div class="md-form mt-3">
          <MDBInput label="Team name" group type="text" validate error="wrong"
              success="right" required/>
          </div>
          {inputList.map((x, i) => {
        return (
          <MDBRow>
              <MDBCol md="3" className="mb-2">
              <MDBInput label="Parcipant Name *" group type="text" validate error="wrong"
              success="right"  name="firstName"
              placeholder="Enter First Name"
                         value={x.firstName}
                         onChange={e => handleInputChange(e, i)}/>
              
              </MDBCol>
              <MDBCol md="3" className="mb-2">
              <MDBInput label="Z-id" group type="text" validate error="wrong"
              success="right" name="lastName"
              placeholder="Enter Last Name"
                         value={x.lastName}
                         onChange={e => handleInputChange(e, i)}/>
              </MDBCol>
              { inputList.length !== 1 ?
              <MDBCol md="2" className="mb-2">
                              
                              {
                                inputList.length !== 1 && 
                                <button onClick={() => handleRemoveClick(i)}class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" >
                                   Remove&nbsp; <i class="fas fa-cut"></i>
                                </button>
                              }
                </MDBCol>  : ""
               }
              <MDBCol md="2" className="mb-2">
                              
                              {
                                (inputList.length - 1 === i && inputList.length <4) && 
                                <button onClick={handleAddClick} class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" >
                                    Add&nbsp;<i class="fas fa-plus"></i>
                                </button>
                              }
                </MDBCol>                          
        </MDBRow>
              );
            })}
          <select className="browser-default custom-select">
            <option>Choose your Problem</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <div class="md-form">
  <textarea id="form7" class="md-textarea form-control" rows="3"></textarea>
  <label for="form7">Queries (if any )</label>
</div>
  
          <MDBBtn outline color="info">
            Register
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
  
      </form>
  
  </div>
  
  </div>
      </div>
);
};

export default FormPage;