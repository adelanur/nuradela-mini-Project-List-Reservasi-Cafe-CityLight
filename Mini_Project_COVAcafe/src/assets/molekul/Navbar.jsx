import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserSlice from "../config/Redux/UserSlice";
import CreateReservasi from "../view/CreateReservasi/CreateReservasi";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.Users.isLogin);

  const handleLogOut = () => {
    dispatch(UserSlice.actions.setLogin(false));
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      navigate(`/search/${values.search}`);
    },
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            C O V A{" "}
            <i className="bi bi-cup-hot" style={{ fontSize: "2rem" }}></i>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <i
                    className="bi bi-house-door-fill"
                    style={{ fontSize: "2rem" }}
                  ></i>{" "}
                </a>
              </li>
              <span></span>
              <span></span>
              <li className="nav-item" style={{ fontSize: "2rem" }}>
                {isLogin == true ? (
                  <button
                    type="button"
                    onClick={handleLogOut}
                    className="nav-link"
                  >
                    LogOut
                  </button>
                ) : (
                  <Link to="/Login" className="nav-link">
                    Login
                  </Link>
                )}
              </li>
            </ul>
            <form
              onSubmit={formik.handleSubmit}
              className="d-flex"
              role="search"
            >
              <input
                className="form-control me-2"
                type="search"
                name="search"
                placeholder="Search"
                aria-label="Search"
                value={formik.values.search}
                onChange={formik.handleChange}
              />
              <button
                className="cari shadow-lg"
                style={{ backgroundColor: "#5e503f" }}
                type="submit"
              >
                <i className="bi bi-search-heart"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
