const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('👋 أهلاً من test route!');
});

module.exports = router;
