// import request from "supertest";
// import app from "../src/app"; 

// describe("Loan API basic tests", () => {
//   it("should create a loan", async () => {
//     const res = await request(app)
//       .post("/api/v1/loans")
//       .send({ Id: 1, name: "Test", loanAmount: "5000" });

//     expect(res.status).toBe(201);
//     expect(res.body.message).toBe("Loan created successfully");
//   });

//   it("should fetch loans", async () => {
//     const res = await request(app).get("/api/v1/loans");

//     expect(res.status).toBe(200);
//     expect(res.body.message).toBe("Loan fetched successfully");
//   });

//   it("should review a loan", async () => {
//     const res = await request(app).put("/api/v1/loans/1/review");

//     expect(res.status).toBe(200);
//     expect(res.body.message).toBe("Loan 1 reviewed successfully");
//     });

//    it("should approve a loan", async () => {
//     const res = await request(app).put("/api/v1/loans/1/approve");

//     expect(res.status).toBe(200);
//     expect(res.body.message).toBe("Loan 1 approved successfully");
//     });

// });
