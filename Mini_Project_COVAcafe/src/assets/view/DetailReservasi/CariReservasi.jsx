import { gql, useSubscription } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../molekul/Navbar";
import "../Masuk/Login.css";
const CARI_RESERVASI = gql`
  subscription cariReservasi($nama: String!) {
    Reservasi(where: { nama: { _iregex: $nama } }) {
      deskripsi
      foto
      id
      jumlah
      kategori
      nama
      telepon
      waktu
    }
  }
`;
const CariReservasi = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { data: dataCariReservasi } = useSubscription(CARI_RESERVASI, {
    variables: { nama: param.nama },
  });
  console.log(dataCariReservasi);
  return (
    <div>
      <Navbar />
      <div className="login">
        <div className=" container pt-5 py-3">
          <button type="button" onClick={() => navigate(-1)}>
            back
          </button>
          <br />
        </div>
        <div
          className="container"
          style={{ paddingTop: 50, backgroundColor: "#a5a58d" }}
        >
          <h2 style={{ textAlign: "center" }}>List Reservasi</h2>
          <div className="table-responsive">
            <table className="table table-striped">
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
                {dataCariReservasi?.Reservasi.map((item, index) => {
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
                        {" "}
                        <a href={item.foto}>lihat foto</a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CariReservasi;
