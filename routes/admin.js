const router = require("express").Router();
//import module
const adminController = require("../controllers/adminController");
// import middleware upload file
const { upload, uploadMultiple } = require("../middlewares/multer");

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
router.put("/bank", upload, adminController.editBank);
router.delete("/bank/:id", adminController.deleteBank);
///end bank
// start item
router.get("/item", adminController.viewItem);
router.post("/item", uploadMultiple, adminController.addItem);
router.get("/item/show-image/:id", adminController.showImageItem);
router.get("/item/:id", adminController.showEditItem);
router.put("/item/:id", uploadMultiple, adminController.editItem);
router.delete("/item/delete/:id", adminController.deleteItem);
// end item
// start feature
router.get("/item/show-detail-item/:itemId", adminController.viewDetailItem);
router.get("/booking", adminController.viewBooking);
module.exports = router;
