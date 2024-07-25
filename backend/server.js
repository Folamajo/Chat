const express = require('express');
const mysql = require('mysql')
const cors = require('cors');

const app = express();
const port = 3001;

//Middleware
app.use(cors());
app.use(express.json());

//MySQL

co