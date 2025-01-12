const mongoose = require('mongoose')

const connectDB = async () => {
  const con = await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  console.log('DB Connected')
}

module.exports = connectDB