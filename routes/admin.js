const router = require("express").Router();
//import module
const adminController = require("../controllers/adminController");
// import middleware upload file
const { upload } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDashboard);
// start category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);
// end category
// start bank
router.get("/bank", adminController.viewBank);
router.post("/bank", upload, adminController.addBank);

///end bank
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);
module.exports = router;
