import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../../molekul/Navbar";
import { gql, useQuery } from "@apollo/client";
import UserSlice from "../../config/Redux/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const GET_USER = gql`
  query User {
    user {
      email
      id
      password
    }
  }
`;
const Login = () => {
  const { data: dataUser } = useQuery(GET_USER);
  const dispatch = useDispatch();
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
      const cariUser = dataUser?.user.find(
        (user) => user.email === values.email
      );
      if (
        cariUser.email === values.email &&
        cariUser.password === values.password
      ) {
        dispatch(UserSlice.actions.setLogin(true));
        formik.resetForm();
        navigate("/listPesanan");
      }
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
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
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
              {formik.errors.password && formik.touched.password && (
                <p>{formik.errors.password}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
            <div className="mt-3" style={{ color: "white" }}>
              Belum Punya Akun? <a href="/register">Daftar Dulu</a>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
