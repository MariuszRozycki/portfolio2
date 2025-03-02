import { useState } from "react";
import { toast } from "react-toastify";

const useContactForm = (url, formID) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const checkLength = (value, len) => {
    return value.trim().length > len;
  };

  const checkEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  };

  const validateForm = () => {
    let formIsValid = true;
    const validationErrors = {
      userName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    if (!checkLength(formData.userName, 2)) {
      validationErrors.userName = "Minimum number of characters is 3.";
      formIsValid = false;
    }

    if (!checkLength(formData.subject, 2)) {
      validationErrors.subject = "Minimum number of characters is 3.";
      formIsValid = false;
    }

    if (!checkEmail(formData.email)) {
      validationErrors.email = "Must be a valid email address";
      formIsValid = false;
    }

    if (!checkLength(formData.phone, 5)) {
      validationErrors.phone = "Write correct phone number. Minimum 6 characters.";
      formIsValid = false;
    }

    if (!checkLength(formData.message, 2)) {
      validationErrors.message = "Minimum number of characters is 3.";
      formIsValid = false;
    }

    setErrors(validationErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Assignment requirement:
    // console.log the data from the form once validation requirements are met.
    console.log("Form data submitted:", formData);

    setIsLoading(true);

    const { action, method } = e.currentTarget;

    const formDataObject = new FormData();
    formDataObject.append("user-name", formData.userName);
    formDataObject.append("your-email", formData.email);
    formDataObject.append("your-phone", formData.phone);
    formDataObject.append("your-subject", formData.subject);
    formDataObject.append("your-message", formData.message);
    formDataObject.append("_wpcf7_unit_tag", `form-${formID}`);

    try {
      const response = await fetch(action, {
        method,
        body: formDataObject,
      });

      const result = await response.json();

      if (result.status === "mail_sent") {
        toast.success("Your message has been sent!");
        setFormData({ userName: "", email: "", phone: "", subject: "", message: "" });
        setErrors({ userName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error("Occurred problem with sending message. Call to us +47 123 45 678");
      }
    } catch (error) {
      console.error("Error during message sending:", error);
      toast.error("Occurred problem with sending message.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
