const express = require("express");
const errorHandler = require("./middleware/errorHander");
const dotenv = require("dotenv").config();
app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoute"));

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server started...${PORT}`);
});
