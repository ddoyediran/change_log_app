import * as user from "../user";
import supertest from "supertest";

describe("GET /", () => {
  it("Should return back a response", async () => {
    const req = { body: { username: "hello", password: "passme" } };
    const res = {
      json(token) {
        expect(token).toBeTruthy();
      },
    };
    await user.createNewUser(req, res, () => {});
  });
});
