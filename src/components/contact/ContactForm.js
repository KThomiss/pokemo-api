import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ErrorMessage from "../common/ErrorMessage";

const validation = yup.object().shape({
  firstname: yup.string().required("Please enter your first name.").min(3, "First name must be at least 3 characters."),
  lastname: yup.string().required("Please enter your last name.").min(4, "Last name must be at leasts 4 characters."),
  email: yup.string().required("Please enter your email.").email("Please enter a valid email adress."),
  subject: yup.string().required("please choose one of the options below."),
  message: yup.string().required("Please enter your message.").min(10, "Please provide a message with atleast 10 characters."),
});

function ContactForm() {
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(validation) });

  function formSubmit(data, event) {
    event.preventDefault();
    console.log(data);

    setSuccess("Thank you!");
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="form">
      <div>
        <label htmlFor="firstname">First name:</label>
        <input {...register("firstname")} id="firstname" />
        {errors.firstname && <ErrorMessage>{errors.firstname.message}</ErrorMessage>}
      </div>
      <div>
        <label htmlFor="lastname">Last name:</label>
        <input {...register("lastname")} id="lastname" />
        {errors.lastname && <ErrorMessage>{errors.lastname.message}</ErrorMessage>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input {...register("email")} id="email" />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <select {...register("subject")} id="subject">
          <option value="">Please choose an option</option>
          <option value="error">Login error</option>
          <option value="pokemon">Pokemon stats</option>
        </select>
        {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea {...register("message")} id="message"></textarea>
        {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
      </div>
      <button type="submit" className="form-btn">
        Send
      </button>
      {isSubmitSuccessful && <span className="submit-success">{success}</span>}
    </form>
  );
}

export default ContactForm;
