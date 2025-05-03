


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://pachorishalvi:i3DmGjvNwrYHvBfw@wanderlust.y0bomoo.mongodb.net/pachorishalvi?retryWrites=true&w=majority&appName=wanderlust";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    // initData.data = initData.data.map((obj) => ({...obj, owner: "652d0081ae547c5d37e56b5f"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();