var app = require("../index")
var chai = require("chai")
var request = require("supertest")

var expect = chai.expect

describe("Assets API Integration Tests", function() {
    let mall = {
        name: "test mall name",
        address: "test address name"
    }

    let asset = {
        name: "test asset name",
    }

    before('Create a mall', function(done) {
        request(app)
        .post("/api/malls")
        .send(mall)
        .end(function(err, res) {
            mall = res.body
            console.log('mall created', mall)
            done()
        })
    })
  
    describe("Create asset", function() {
        it("should create an asset", function(done) {
            request(app)
            .post("/api/assets")
            .send({ ...asset, mall: mall._id })
            .end(function(err, res) {
                expect(res.statusCode).to.equal(201)
                expect(res.body.name).to.equal("test asset name")
                asset = res.body
                done()
            })
        })
    })
  
    describe("Get all assets", function() {
        it("should get all assets", function(done) {
            request(app)
            .get("/api/assets")
            .end(function(err, res) {
                expect(res.statusCode).to.equal(201)
                expect(res.body).to.be.an("array")
                done()
            })
        })
    })
    
    describe("Get an asset by id", function() {
        it("should get an asset", function(done) {
            request(app)
            .get("/api/assets/" + asset._id)
            .end(function(err, res) {
                expect(res.statusCode).to.equal(201)
                expect(res.body.name).to.equal("test asset name")
                done()
            })
        })
    })
  
    describe("Update a asset by id", function() {
        it("should modify an asset", function(done) {
            asset.name = "New asset name"
            request(app)
            .put("/api/assets/" + asset._id)
            .send(asset)
            .end(function(err, res) {
                expect(res.body.name).to.equal("New asset name")
                expect(res.statusCode).to.equal(201)
                done()
            })
        })
    })
    
    describe("Delete a asset by id", function() {
        it("should delete a asset", function(done) {
            request(app)
            .delete("/api/assets/" + asset._id)
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200)
                expect(res.body.message).to.equal("Asset deleted successfully!")
                done()
            })
        })
    })
})