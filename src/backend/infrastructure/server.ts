import { Express, Application } from "express";
import { routes_init } from "../app/routes";
import express = require('express')


const app: Application = express()
const port = 3000

app.use(routes_init())

app.listen(port, () => {
    console.log(`Example server status on port ${port}`)
})

