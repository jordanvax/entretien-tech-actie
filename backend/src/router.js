const express = require("express");

const router = express.Router();

const imagesControllers = require("./controllers/imagesControllers");

router.get("/images", imagesControllers.browse);
router.get("/images/:id", imagesControllers.read);
router.put("/images/:id", imagesControllers.edit);
router.post("/images", imagesControllers.add);
router.delete("/images/:id", imagesControllers.destroy);

module.exports = router;
