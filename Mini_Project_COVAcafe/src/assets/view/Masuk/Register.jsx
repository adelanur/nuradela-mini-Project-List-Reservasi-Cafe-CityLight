import { gql, useMutation } from "@apollo/client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Navbar from "../../molekul/Navbar";

const USER = gql`
  mutation user($email: String!, $password: String!) {
    insert_user_one(object: { email: $email, password: $password }) {
      email
      id
      password
    }
  }
`;
const Register = () => {
  const [user, { data: dataUser }] = useMutation(USER);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Isikan password!"),
    }),
    onSubmit: (values) => {
      user({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      formik.resetForm();
      navigate("/login");
    },
  });
  return (
    <div>
      <Navbar />
      <div className="login pt-5">
        <div
          className="rounded-4 col-4 mx-auto p-5"
          style={{ backgroundColor: "#a5a58d" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="email anda"
                aria-describedby="emailHelp"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="isikan password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary">
                REGISTER
              </button>
            </div>
            <div className="mt-3" style={{ color: "white" }}>
              <a href="/login" className="MT-3" style={{ color: "BLACK" }}>
                BACK
              </a>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
