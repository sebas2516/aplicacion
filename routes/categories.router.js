const express = require ('express');

const router = express.Router();

router.get('/', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
})

module.exports = router;
