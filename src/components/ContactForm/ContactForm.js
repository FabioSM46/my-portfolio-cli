import { useState, useRef } from "react";
import { TiLocationArrowOutline } from "react-icons/ti";
import emailjs from "@emailjs/browser";
import { Modal } from "../Modal/Modal";
export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9880bcl",
        "template_z7igc3b",
        form.current,
        "Mqv3CMEieLa74drIj"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setmessage("");
          handleOpenModal();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleOpenModal = () => {
    setModalOpen(true);
    const timer = setTimeout(() => {
      handleCloseModal();
    }, 2000);

    return () => clearTimeout(timer);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="ContactForm">
      <form className="w-full" ref={form} onSubmit={sendEmail}>
        <div className="form-group w-full mb-8">
          <label
            htmlFor="name"
            className="text-primary-800 dark:text-primary-200"
          >
            Your Name
            <input
              className="text-primary-800 w-full p-5 outline-none 
              border-none rounded-lg mt-4"
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group w-full mb-8">
          <label
            htmlFor="email"
            className="text-primary-800 dark:text-primary-200"
          >
            Your email
            <input
              className="text-primary-800 w-full p-5 outline-none 
              border-none rounded-lg mt-4"
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group w-full mb-4">
          <label
            htmlFor="message"
            className="text-primary-800 dark:text-primary-200"
          >
            Your Message
            <textarea
              className="text-primary-800 w-full p-5 outline-none 
              border-none rounded-lg mt-4 min-h-[200px] resize-y"
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" value="Send" className="button-right group">
          <TiLocationArrowOutline className="h-10 w-10" />
          <span className="button-tooltip-right group-hover:scale-100">
            Send
          </span>
        </button>
      </form>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};
