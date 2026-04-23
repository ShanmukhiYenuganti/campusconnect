const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Campus Connect API Running")
})

// Routes
app.use("/api/events", require("./routes/events"))
app.use("/api/registrations", require("./routes/registrations"))
app.use("/api/clubs", require("./routes/clubs"))
app.use("/api/users", require("./routes/users"))
app.use("/api/tasks", require("./routes/tasks"))
app.use("/api/resources", require("./routes/resources"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/join-requests", require("./routes/joinRequests"))

app.use((req, res) => {
  res.status(404).json({ message: "Not found" })
})

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
