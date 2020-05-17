var express = require("express");
var router = express.Router();
var fs = require("fs");
const Readable = require("stream").Readable;

router.get("/", function (req, res, next) {
  const stream = fs.createReadStream("data1.txt");

  // Looging the data length of  of stream onto the console
  stream.on("readable", function () {
    // There is some data to read now.
    let data;

    while ((data = this.read())) {
      console.log(`Received ${data.length} bytes of data.`);
    }
  });

  // Looging the end of stream onto the console
  stream.on("end", () => {
    console.log("==== No more data to read =====");
  });

  stream.push("Sendind data .... content of the file starts below \n\n");
  stream.pipe(res);
});

module.exports = router;
