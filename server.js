
/*
  1. Import module 'express' yang telah kita install ke dalam file ini.
     Supaya kalian bisa menggunakan sepenuhnya framework Express.
  2. Import module 'express-graphql' untuk mengkoneksikan aplikasi Express
     kita dengan GraphQL.
*/
const express = require('express')
const expressGraphQL = require('express-graphql')

// Buat fungsi express yang didapat dari import diatas menjadi sebuah variable bernama app.
const app = express()
// Variabelkan PORT agar kita bisa memakainya berulang kali dibawah.
const PORT = 4000

// Satu fungsi express yang akan memanggil fungsi dari GraphQL. Disinilah mereka terkoneksi.
app.use('/graphql', expressGraphQL({
  // Bagaimana jika ini kita `false`? Ini adalah satu perintah agar kita bisa menggunakan
  // User Interface dari konsep GraphQL dan akan menampilkannya di browser. Jadi dengan graphiql
  // ini akan membantu kamu melihat hasil dari data buatan GraphQL itu sendiri.
  graphiql: true
}))

// Setup server nya agar bisa dijalankan di port yang local di komputer kita.
app.listen(PORT, () => {
  console.log(`Server has listen at port ${PORT}`)
})