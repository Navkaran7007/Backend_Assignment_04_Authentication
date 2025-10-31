import { Request, Response } from "express";

export const getloan = (req: Request, res: Response) => {
  const loans = [
        {Id: 1, name: "ABC", loanAmount: "100000"},
        {Id: 2, name: "XYZ", loanAmount: "200000"}
  ];

  res.status(200).json({
    message: "Loan fetched successfully",
    loans,
  });
};

export const createloan = (req: Request, res: Response) => {
  const newLoan = req.body;

  res.status(201).json({
    message: "Loan created successfully",
    loan: newLoan,
  });
};

export const approveloan = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Loan ${id} approved successfully`,
  });
};

export const reviewloan = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Loan ${id} reviewed successfully`,
  });
};

