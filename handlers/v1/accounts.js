const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  createAccounts: async (req, res, next) => {
    try {
      let { userId, bankName, bankAccountNumber, balance } = req.body;

      let account = await prisma.bankAccount.create({
        data: {
          userId,
          bankName,
          bankAccountNumber,
          balance,
        },
      });
      res.status(201).json({
        status: true,
        message: "created account",
        data: account,
      });
    } catch (err) {
      next(err);
    }
  },

  getAllAccounts: async (req, res, next) => {
    try {
      let account = await prisma.bankAccount.findMany({});
      res.status(201).json({
        status: true,
        message: "all account",
        data: account,
      });
    } catch (err) {
      next(err);
    }
  },

  getDetailAccount: async (req, res, next) => {
    try {
      let { accountId } = req.params;

      let account = await prisma.bankAccount.findUnique({
        where: {
          id: Number(accountId),
        },
      });

      if (!account) {
        return res.status(400).json({
          status: false,
          message: "account ga ada",
          data: null,
        });
      }

      res.status(200).json({
        status: true,
        message: "OK",
        data: account,
      });
    } catch (err) {
      next(err);
    }
  },

  /* updateAccountBank: async (req, res, next) => {
    try {
      let accountId = parseInt(req.params.accountId);
      let { bankName, bankAccountNumber, balance } = req.body;

      let updatedAccount = await prisma.bankAccount.update({
        where: { id: accountId },
        data: {
          bankName,
          bankAccountNumber,
          balance,
        },
      });

      res.status(200).json({
        status: true,
        message: "account di update succes",
        data: updatedAccount,
      });
    } catch (error) {
      next(error);
    }
  }, */
};
