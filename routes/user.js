const { Router } = require("express");
const { UGet, UPut, UPost, UDelete } = require("../controller/user");

const router = Router();

router.get('/', UGet)

router.put('/:id', UPut);

router.post('/', UPost)

router.delete('/', UDelete)

module.exports = router;
