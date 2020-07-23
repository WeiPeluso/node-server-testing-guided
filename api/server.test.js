const server = require("./server");
const { intersect } = require("../data/dbConfig");
const supertest = require("supertest");

describe("server", () => {
  it("run the test", function () {
    expect(true).toBe(true);
  });

  describe("/get", () => {
    it("http status code 200", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should respond with JSON", function () {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it("should respond with api :'up' ", function () {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("up");
        });
    });
  });
});
