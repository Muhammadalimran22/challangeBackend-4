const express = require("express");
const router = express.Router();
const { restrict } = require("../middlewares/auth.middlewares");
const {
  createUser,
  getAllUser,
  updateUser,
  getPaginationUser,
  getDetailUser,
  deleteUser,
} = require("../handlers/v1/user");
const {
  createAccounts,
  getAllAccounts,
  getDetailAccount,
  updateAccountBank,
  deleteAccount,
} = require("../handlers/v1/accounts");
const {
  createTransaksi,
  getAllTransaksi,
  getDetailTransaksi,
} = require("../handlers/v1/transaksi");

router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "welcome to learn express and prisma api",
    data: null,
  });
});

// route user
router.post("/users", restrict, createUser);
router.get("/users", restrict, getAllUser);
router.get("/users/:userId", restrict, getDetailUser);
router.delete("/users/:userId", restrict, deleteUser);
router.get("/pagination-user", restrict, getPaginationUser);
router.put("/users/:userId", restrict, updateUser);

// route account
router.post("/accounts", restrict, createAccounts);
router.get("/accounts", restrict, getAllAccounts);
router.get("/accounts/:accountId", restrict, getDetailAccount);
router.put("/accounts/:accountId", restrict, updateAccountBank);
router.delete("/accounts/:accountId", restrict, deleteAccount);

// route transaksi
router.post("/transactions", restrict, createTransaksi);
router.get("/transactions", restrict, getAllTransaksi);
router.get("/transactions/:transactionId", restrict, getDetailTransaksi);

module.exports = router;
