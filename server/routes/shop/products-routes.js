const express = require("express");
const { upload, imageUploadUtil } = require("../../helpers/cloudinary");


const {
  getFilteredProducts,
  getProductDetails,
} = require("../../controllers/shop/products-controller");

const router = express.Router();

router.get("/get", getFilteredProducts);
router.get("/get/:id", getProductDetails);
router.post(
  "/upload",
  upload.single("image"), // multer
  async (req, res) => {
    try {
      const result = await imageUploadUtil(req.file.buffer);

      res.json({
        success: true,
        imageUrl: result.secure_url,
      });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }
);


module.exports = router;
