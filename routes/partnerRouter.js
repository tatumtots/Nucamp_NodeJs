const express = require("express")
const partnerRouter = express.Router()

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    next()
  })
  .get((req, res) => {
    res.end("Will send partners to you")
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    )
  })
  .put((req, res) => {
    res.end("PUT operation not supported on /partners")
  })
  .delete((req, res) => {
    res.end("Deleting all partners.")
  })

partnerRouter
  .route("/:partners")
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    next()
  })
  .get((req, res) => {
    res.end("Will send partners to you")
  })
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    )
  })
  .put((req, res) => {
    res.end("PUT operation not supported on /partners")
  })
  .delete((req, res) => {
    res.end("Deleting all partners.")
  })

module.exports = partnerRouter
