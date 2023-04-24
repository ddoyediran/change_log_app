import app from "../server";

import supertest from "supertest";

describe("GET /", () => {
  it("Should return back a response", async () => {
    const res = await supertest(app).get("/");

    expect(res.body.message).toBe("Welcome to Change log api");
  });
});
