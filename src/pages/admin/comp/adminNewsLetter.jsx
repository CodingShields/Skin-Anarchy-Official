import { useState } from "react";
import axios from "axios";

const AdminNewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
	const apiKey = import.meta.env.VITE_MAILGUN_API_KEY;
  const domain = import.meta.env.VITE_MAILGUN_DOMAIN;
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error("Please fill email, subject and message");
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
        message,
      });
      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
      );
    }
  };
  return (
    <div className="App">
    
    </div>
  );
};

export default AdminNewsLetter;
