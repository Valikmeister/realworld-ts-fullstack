import express = require("express")
import { Express } from "express"


const router = express.Router()

export function routes_init() {
    return router.get('/', (_req, res) => {
        res.send("Hello World")

    })
}


