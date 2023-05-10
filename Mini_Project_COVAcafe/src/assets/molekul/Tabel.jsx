import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gql, useQuery, useSubscription } from "@apollo/client";

// import { useHistory } from "react-router-dom";
const GET_RESERVASI = gql`
  subscription getReservasi {
    Reservasi {
      nama
      kategori
      jumlah
      id
      foto
      telepon
      waktu
      deskripsi
    }
  }
`;
const Tabel = ({ onDelete, formik, setIsEdit }) => {
  const { data: dataReservasi } = useSubscription(GET_RESERVASI);

  const handleEdit = (item) => {
    formik.setValues({
      id: item.id,
      nama: item.nama,
      telepon: item.telepon,
      waktu: item.waktu,
      kategori: item.kategori,
      jumlah: item.jumlah,
      foto: item.foto,
      deskripsi: item.deskripsi,
    });
    setIsEdit(true);
  };

  return (
    <div>
      {/* Membuat Tabel  */}
      <div style={{ paddingTop: 170, backgroundColor: "#a5a58d" }}>
        <hr />

        <h2 style={{ textAlign: "center" }}>List Reservasi</h2>
        <div className="table-responsive py-5">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nama Pemesan</th>
                <th scope="col">Telepon</th>
                <th scope="col">Waktu</th>
                <th scope="col">Kategori</th>
                <th scope="col">Jumlah Orang</th>
                <th scope="col">Deskripsi</th>
                <th scope="col">Bukti Pembayaran</th>
              </tr>
            </thead>

            <tbody>
              {dataReservasi?.Reservasi.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.nama}</td>
                    <td>{item.telepon}</td>
                    <td>{item.waktu}</td>
                    <td>{item.kategori}</td>
                    <td>{item.jumlah}</td>
                    <td>{item.deskripsi}</td>
                    <td>
                      <a href={item.foto}>lihat foto</a>
                    </td>
                    <td>
                      <button
                        style={{ backgroundColor: "white" }}
                        onClick={() => onDelete(item.id)}
                      >
                        <i className="bi bi-trash3-fill text-danger"></i>
                      </button>

                      <button
                        style={{ backgroundColor: "white" }}
                        onClick={() => handleEdit(item)}
                      >
                        <i className="bi bi-pencil-square text-success "></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
