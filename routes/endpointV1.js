const express = require("express");
const router = express.Router();
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
router.post("/users", createUser);
router.get("/users", getAllUser);
router.get("/users/:userId", getDetailUser);
router.delete("/users/:userId", deleteUser);
router.get("/pagination-user", getPaginationUser);
router.put("/users/:userId", updateUser);

// route account
router.post("/accounts", createAccounts);
router.get("/accounts", getAllAccounts);
router.get("/accounts/:accountId", getDetailAccount);
router.put("/accounts/:accountId", updateAccountBank);
router.delete("/accounts/:accountId", deleteAccount);

// route transaksi
router.post("/transactions", createTransaksi);
router.get("/transactions", getAllTransaksi);
router.get("/transactions/:transactionId", getDetailTransaksi);

module.exports = router;
