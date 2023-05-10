import React from "react";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import CreateReservasi from "../view/CreateReservasi/CreateReservasi";
import Navbar from "./Navbar";
import Tersedia from "./Tersedia";
import { gql, useSubscription } from "@apollo/client";
import "../view/Masuk/Login.css";

const GET_TOTAL_RESERVASI = gql`
  subscription getTotalReservasi {
    Reservasi_aggregate {
      aggregate {
        count
      }
    }
  }
`;
const ListReservasi = ({ formik, setIsEdit, isEdit }) => {
  const { data: dataTotalReservasi } = useSubscription(GET_TOTAL_RESERVASI);
  const Count = dataTotalReservasi?.Reservasi_aggregate.aggregate.count;

  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <div className=" container pt-5  ">
          <div
            className="rounded-4 shadow pt-3"
            style={{ backgroundColor: "#a5a58d" }}
          >
            <Tersedia className="text-center " Count={Count} />
            <div className="row  justify-content-md-center mb-3">
              <div className="col-sm-8">
                <label htmlFor="nama" className="col-2 sm-2 col-form-label ">
                  Nama Pemesan:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  name="nama"
                  placeholder="isikan nama"
                  value={formik.values.nama}
                  onChange={formik.handleChange}
                />
                {formik.errors.nama && (
                  <div className="error text-danger">{formik.errors.nama}</div>
                )}
              </div>
            </div>
            <div className="row justify-content-md-center mb-3">
              <div className="col-4">
                <label htmlFor="telepon" className="col-sm-2 col-form-label">
                  Telepon:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telepon"
                  name="telepon"
                  placeholder="isikan telepon"
                  value={formik.values.telepon}
                  onChange={formik.handleChange}
                />
                {formik.errors.telepon && (
                  <div className="error text-danger">
                    {formik.errors.telepon}
                  </div>
                )}
              </div>
              <div className="col-4">
                <label htmlFor="waktu" className="col-sm-2 col-form-label">
                  Waktu:
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="waktu"
                  name="waktu"
                  placeholder="isikan jam"
                  value={formik.values.waktu}
                  onChange={formik.handleChange}
                  disabled={isEdit === true ? true : false}
                />
                {formik.errors.waktu && (
                  <div className="error text-danger">{formik.errors.waktu}</div>
                )}
              </div>
            </div>
            <div className="row justify-content-md-center mb-3">
              <div className="col-sm-8 ms-3">
                <label htmlFor="kategori" className="col-sm-2 col-form-label">
                  Kategori:
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="kategori"
                    id="kategori"
                    defaultValue="Indoor"
                    onChange={formik.handleChange}
                    checked={formik.values.kategori == "Indoor"}
                    disabled={isEdit === true ? true : false}
                  />
                  <label className="form-check-label" htmlFor="kategori">
                    {" "}
                    Indoor{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="kategori"
                    id="kategori"
                    defaultValue="Outdoor"
                    onChange={formik.handleChange}
                    checked={formik.values.kategori == "Outdoor"}
                    disabled={isEdit === true ? true : false}
                  />
                  <label className="form-check-label" htmlFor="kategori">
                    {" "}
                    Outdoor{" "}
                  </label>
                </div>
              </div>
              {formik.errors.kategori && (
                <div className="error text-danger container me-0">
                  {formik.errors.kategori}
                </div>
              )}
            </div>
            <div className="row justify-content-md-center mb-3">
              <div className="col-8">
                <label htmlFor="jumlah" className="col-sm-2 col-form-label">
                  Jumlah Orang:
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="jumlah"
                  name="jumlah"
                  defaultValue={formik.values.jumlah}
                  onChange={formik.handleChange}
                  disabled={isEdit === true ? true : false}
                >
                  <option value="choose" disabled>
                    {" "}
                    Choose
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
                {formik.errors.jumlah && (
                  <div className="error text-danger">
                    {formik.errors.jumlah}
                  </div>
                )}
              </div>
            </div>
            <div className="row justify-content-md-center mb-3">
              <div className="col-8">
                <label htmlFor="deskripsi" className="col-sm-2 col-form-label">
                  Deskripsi:
                </label>
                <textarea
                  className="form-control"
                  id="deskripsi"
                  name="deskripsi"
                  placeholder="rincian lainnya"
                  rows={3}
                  value={formik.values.deskripsi}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-md-center mb-3">
              <div className="col-sm-8">
                <label htmlFor="foto">Bukti Pembayaran(link G-drive):</label>
                <input
                  type="text"
                  className="form-control"
                  id="foto"
                  name="foto"
                  placeholder="berupa link"
                  value={formik.values.foto}
                  onChange={formik.handleChange}
                />
                {formik.errors.foto && formik.touched.foto && (
                  <div className="error text-danger">{formik.errors.foto}</div>
                )}
              </div>

              <br />
            </div>
            <div className="row justify-content-md-center ">
              <div className="col-4 ">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={Count === 15 ? true : false}
                >
                  {isEdit == true ? "Update" : "Submit"}
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListReservasi;
