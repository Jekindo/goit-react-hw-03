import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import s from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('This is required field'),
  number: Yup.string().min(3, 'Minimum 3 numbers').required('A phone number is required'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact({
      ...values,
      id: nanoid(),
    });

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      <Form className={s.form}>
        <label className={s.field}>
          Name
          <Field type="text" name="name" />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>

        <label className={s.field}>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
