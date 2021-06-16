const router = require("express").Router();
const path = require("path");

router.use("/", async (req, res) => {
  const send = await res.sendFile("../public/index.html");
  res.render(send);
});

router.get("/exercise", async (req, res) => {
  const send = await res.sendFile(
    "../public/exercise.html",
    { root: path.join(__dirname) },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

router.get("/stats", async (req, res) => {
  res.sendFile("../public/stats.html");
});

module.exports = router;
