const router = require("express").Router();
//import module
const apiController = require("../controllers/apiController");
// import middleware upload file
const { upload } = require("../middlewares/multer");

router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", upload, apiController.bookingPage);
module.exports = router;
