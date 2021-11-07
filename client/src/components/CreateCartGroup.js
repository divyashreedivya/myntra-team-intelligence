import { useState,useEffect,useRef } from "react";
import { createCartGroup } from "../actions/cart";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useSelector,useDispatch } from "react-redux";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const CreateCartGroupForm = ()=>{
const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleCreate = (e) => {
    // e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(createCartGroup(name))
        .then(() => {
          setSuccessful(true);
          form.clear();
          // window.location.reload();
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">

        <Form onSubmit={handleCreate} ref={form}>
          
            <div>
              <div className="form-group">
                <label htmlFor="username">Cart group Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[required]}
                />
              </div>

              
              <div className="form-group">
                <button className="btn btn-primary btn-block">Create</button>
              </div>
            </div>
          

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
}

export default CreateCartGroupForm;