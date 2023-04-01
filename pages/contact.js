import Head from "next/head";
import ContactForm from "../components/Contact/contact-form";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages"></meta>
      </Head>
      <ContactForm />;
    </>
  );
};

export default ContactPage;
