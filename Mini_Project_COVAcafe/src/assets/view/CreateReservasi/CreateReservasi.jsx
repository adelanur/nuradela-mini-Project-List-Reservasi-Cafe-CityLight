import React from "react";
import { useEffect, useState } from "react";
import { useFormik, validateYupSchema } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import ListReservasi from "../../molekul/ListReservasi";
import Navbar from "../../molekul/Navbar";
import Tabel from "../../molekul/Tabel";
import { gql, useMutation } from "@apollo/client";
import Tersedia from "../../molekul/Tersedia";

const ADD_RESERVASI = gql`
  mutation addReservasi(
    $deskripsi: String!
    $foto: String!
    $jumlah: Int!
    $kategori: String!
    $nama: String!
    $telepon: String!
    $waktu: timetz!
  ) {
    insert_Reservasi_one(
      object: {
        deskripsi: $deskripsi
        foto: $foto
        jumlah: $jumlah
        kategori: $kategori
        nama: $nama
        telepon: $telepon
        waktu: $waktu
      }
    ) {
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

const DELETE_RESERVASI = gql`
  mutation deleteReservasi($id: uuid!) {
    delete_Reservasi_by_pk(id: $id) {
      deskripsi
      foto
      jumlah
      id
      kategori
      nama
      telepon
      waktu
    }
  }
`;

const EDIT_RESERVASI = gql`
  mutation editReservasi(
    $id: uuid!
    $deskripsi: String!
    $nama: String!
    $jumlah: Int!
    $kategori: String!
    $telepon: String!
    $waktu: timetz!
    $foto: String!
  ) {
    update_Reservasi_by_pk(
      pk_columns: { id: $id }
      _set: {
        deskripsi: $deskripsi
        foto: $foto
        jumlah: $jumlah
        nama: $nama
        kategori: $kategori
        telepon: $telepon
        waktu: $waktu
      }
    ) {
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
const CreateReservasi = () => {
  const [addReservasi, { data: tambahData }] = useMutation(ADD_RESERVASI);
  const [deleteReservasi, { data: deleteData }] = useMutation(DELETE_RESERVASI);
  const [editReservasi, { data: editData }] = useMutation(EDIT_RESERVASI);

  const [isEdit, setIsEdit] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: "",
      nama: "",
      telepon: "",
      waktu: "",
      kategori: "",
      jumlah: "choose",
      deskripsi: "",
      foto: "",
    },

    validationSchema: Yup.object({
      nama: Yup.string()
        .matches(/^[a-zA-Z ]+$/, "tidak boleh mengandung simbol")
        .max(50, "product name tidak boleh melebihi 50 karakter")
        .required("produk harus diisi"),

      telepon: Yup.number().required("harus berisi angka"),

      // waktu: Yup.date().required("harus berisi jam"),

      kategori: Yup.string()
        .oneOf(["Indoor", "Outdoor"], "Harap klik salah satu")
        .required(),

      jumlah: Yup.number()
        .oneOf([1, 2, 3, 4], "Harap klik salah satu")
        .required(),

      foto: Yup.string().required("foto harus diisi"),
    }),
    onSubmit: (values) => {
      if (isEdit == true) {
        editReservasi({
          variables: {
            id: values.id,
            deskripsi: values.deskripsi,
            nama: values.nama,
            kategori: values.kategori,
            telepon: values.telepon,
            waktu: values.waktu,
            foto: values.foto,
            jumlah: values.jumlah,
          },
        });
        console.log(values);
        setIsEdit(false);
        formik.resetForm();
      } else {
        addReservasi({
          variables: {
            deskripsi: values.deskripsi,
            foto: values.foto,
            jumlah: values.jumlah,
            kategori: values.kategori,
            nama: values.nama,
            telepon: values.telepon,
            waktu: values.waktu,
          },
        });
        formik.resetForm();
      }
    },
  });

  const handleDelete = (reservasiId) => {
    const konfirmasiDelete = window.confirm("Apakah yakin menghapus?");
    if (konfirmasiDelete == true) {
      deleteReservasi({
        variables: { id: reservasiId },
      });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <ListReservasi isEdit={isEdit} formik={formik} setIsEdit={setIsEdit} />

      <Tabel onDelete={handleDelete} formik={formik} setIsEdit={setIsEdit} />
    </div>
  );
};

export default CreateReservasi;
