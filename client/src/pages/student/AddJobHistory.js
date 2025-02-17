import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobHistory } from "../../redux/reducers/JobHistory/actions";

function AddJobHistory() {
  const initialValues = {
    companyName: "",
    startDate: "",
    endDate: "",
    reasonToLeave: "",
    comments: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(addJobHistory(formValues));
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.companyName) {
      errors.companyName = "Company name required";
    }
    if (!values.startDate) {
      errors.startDate = "Start date required";
    }
    return errors;
  };

  // onClick(() => {
  //   dispatch(allJobAdvertisement());
  // }, []);

  return (
    <div className="col-8 offset-2">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-12">
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              name="companyName"
              value={formValues.companyName}
              onChange={handleChange}
            />
            <p className="error">{formErrors.companyName}</p>
          </div>

          <div className="mb-3 col-6">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              value={formValues.startDate}
              onChange={handleChange}
            />
            <p className="error">{formErrors.startDate}</p>
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={formValues.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-12">
            <label htmlFor="reasonToLeave" className="form-label">
              Reason To Leave
            </label>
            <textarea
              className="form-control"
              id="reasonToLeave"
              name="reasonToLeave"
              value={formValues.reasonToLeave}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 col-12">
            <label htmlFor="comments" className="form-label">
              Comments
            </label>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              value={formValues.comments}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary float-end">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddJobHistory;
