const router = require("express").Router();
const userRoutes = require("./users")

// User routes
router.use("/users", userRoutes);
router.get("/", (req, res) => {
    res.send("You hit /api!")
})

module.exports = router;