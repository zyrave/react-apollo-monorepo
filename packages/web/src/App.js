import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { createBookSchema } from '@rob/common';
import Input from './Input';

function App() {
  return (
    <Mutation
      mutation={gql`
        mutation CreateBook($book: CreateBookInput!) {
          createBook(book: $book)
        }
      `}
    >
      {createBook => (
        <Formik
          initialValues={{ title: '', pages: 1, author: '' }}
          validationSchema={createBookSchema}
          onSubmit={values => {
            createBook({
              variables: {
                book: values,
              },
            });
          }}
        >
          {() => (
            <Form>
              <Field name="title" component={Input} />
              <Field name="pages" component={Input} />
              <Field name="author" component={Input} />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )}
    </Mutation>
  );
}

export default App;
