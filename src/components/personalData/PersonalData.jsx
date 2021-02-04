// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./personalData.css"

const PersonalData = () => (
  
  <div className={"body"}>
        <div className={"header"}>  
            
            <ul className={"menu"}>
            <li className={"menu"}>
                <a className="menu-link" href="#">CINEMA</a>
            </li>
            <li className={"menu"}>
                <a className="menu-link" href="#">REPERTUAR</a>
            </li>
            <li className={"menu"}>
                <a className="menu-link" href="#">CENNIK</a>
            </li>
            <li className={"menu"}>
                <a className="menu-link" href="">KINO</a>
            </li>
            <li className={"menu"}>
                <a className="menu-link" href="#">Informacja 600 500 300</a>
            </li>
            </ul>

        </div>

     <div className={"steps"}>
     <ul className={"steps"}>
         <li className={"steps"}>
             <h5>Krok 1</h5>
             <h5>Wybór miejsca</h5>
         </li>
             <li className={"steps"}>
             <h5>Krok 2</h5>
             <h5>Podsumowanie</h5>
         </li>
             <li className={"steps"}>
             <h5 style={{fontWeight: "bolder"}}>Krok 3</h5>
             <h5 style={{fontWeight: "bolder"}}>Dane osobowe</h5>
         </li>
         <li className={"steps"}>
             <h5>Krok 4</h5>
             <h5>Potwierdzenie</h5>
         </li>
     </ul>
     </div>

  

  
  <div className={"container"}>
    <h4 style={{textAlign: "center"}}>Wprowadź swoje dane osobowe</h4>
    <Formik
      initialValues={{ name:  '', lastname: '', email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={"form"}>
          <Field type="name" name="name" placeholder="Imię"/>
          <ErrorMessage name="name" component="div"/>

          <Field type="lastname" name="lastname" placeholder="Nazwisko" />
          <ErrorMessage name="lastname" component="div"/>

          <Field type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" placeholder="Hasło"/>
          <ErrorMessage name="password" component="div" />
          <button style={{margin: "0 auto"}} type="submit" disabled={isSubmitting}>
            Dalej
          </button>
        </Form>
      )}
    </Formik>
  </div>

  </div>
);

export default PersonalData;

