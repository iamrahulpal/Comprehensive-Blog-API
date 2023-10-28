const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();
const { expect } = chai;

describe("Posts API", () => {
  it("should create a new post", (done) => {
    chai
      .request(app)
      .post("/posts")
      .send({
        content: "Sample post content 456",
        category: "Electronics",
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("type").equal("Success");
        res.body.should.have
          .property("data")
          .equal("Post created successfully.");
        done();
      });
  });

  it("should delete a post", (done) => {
    chai
      .request(app)
      .post("/posts/653a8ccd7d8844ca9e181079")
      .send({})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("type").equal("Success");
        res.body.should.have
          .property("data")
          .equal("Post has been deleted successfully");
        done();
      });
  });

  it("should update a post", (done) => {
    chai
      .request(app)
      .put("/posts/6538f558fe611e420716e860")
      .send({
        content: "test update",
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("type").equal("Success");
        res.body.should.have
          .property("data")
          .equal("Post has been updated successfully");
        done();
      });
  });

  it("should return list of posts", (done) => {
    chai
      .request(app)
      .get("/posts")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("type", "Success");
        expect(res.body).to.have.property("data");
        expect(res.body.data).to.be.an("array");
        expect(res.body.data).to.have.length.above(0);
        done();
      });
  });

  it("should return a single post", (done) => {
    chai
      .request(app)
      .get("/posts/653a8d136a26fa62ab5720e8")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("type", "Success");
        expect(res.body).to.have.property("data");
        expect(res.body.data).to.be.an("object");
        expect(res.body.data).to.have.property("_id").that.is.a("string");
        expect(res.body.data).to.have.property("content").that.is.a("string");
        expect(res.body.data).to.have.property("category").that.is.a("string");
        expect(res.body.data).to.have.property("timestamp").that.is.a("string");
        expect(res.body.data).to.have.property("__v").that.is.a("number");
        done();
      });
  });

  it("should return valid response", (done) => {
    chai
      .request(app)
      .get("/posts/latest")
      .then((res) => {
        res.should.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("type", "Success");

        const data = res.body.data;
        expect(data).to.be.an("array");

        const uniqueCategories = new Set();

        for (const item of data) {
          expect(item).to.have.property("_id").that.is.a("string");
          expect(item).to.have.property("content").that.is.a("string");
          expect(item).to.have.property("category").that.is.a("string");

          expect(uniqueCategories.has(item.category)).to.be.false;
          uniqueCategories.add(item.category);
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
