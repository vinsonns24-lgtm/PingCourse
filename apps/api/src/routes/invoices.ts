import { Router } from "express";

export const invoiceRouter = Router();

invoiceRouter.get("/", async (req, res) => {
  const { status } = req.query;
  if (status === "Pending") {
    res.json([{
      id: "inv-001",
      amount: 1500000,
      description: "Due for October Tuition",
      status: "Pending"
    }]);
  } else {
    res.json([]);
  }
});

invoiceRouter.post("/", async (req, res) => {
  res.json({ message: "Invoice generated" });
});

invoiceRouter.post("/:id/pay", async (req, res) => {
  res.json({ message: "Payment simulated" });
});
