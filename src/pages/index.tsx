import { useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { Form } from "../components/Form";

const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Contact us to get in touch with us" />
      </Head>
      <main>
        <h1>Contact Us</h1>
        <Form ref={form} onSubmit={sendEmail} />
      </main>
    </>
  );
};

export default ContactUs;
