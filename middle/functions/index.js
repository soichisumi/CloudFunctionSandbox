const functions = require('firebase-functions');
const async = require("async");
const bb = require("bluebird");
const bp = require("body-parser");
const chalk = require("chalk");
const colors = require("colors");
const commander = require("commander");
const debug = require("debug");
const express = require("express");
const fs = require("fs");
const fsex= require("fs-extra");
const glob = require("glob");
const jayson = require("jayson");
const lodash = require("lodash");
const mkdp = require("mkdirp");
const moment = require("moment");
const path = require("path");
const pt = require("prop-types");
const react = require("react");
const rd = require("react-dom");
const rq = require("request");
const th2 = require("through2");
const _ = require("underscore");
const yg = require("yeoman-generator");

exports.helloWorldMiddle = functions.https.onRequest((request, response) => {
    if(request.body.message === undefined){
        response.status(400)
            .json({message: "no message defined"})
            .end();
    }else{
        response.status(200)
            .json({ message: request.body.message })
            .end();
    }
});