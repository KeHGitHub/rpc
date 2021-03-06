// **********************************************************************
// Parsed By TarsParser(1.1.0), Generated By tars2node(20190529)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "NodeTars.tars" by Server Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var TRom = TRom || {};
module.exports.TRom = TRom;

TRom.NodeTarsImp = function () { 
    this._name   = undefined;
    this._worker = undefined;
};

TRom.NodeTarsImp.prototype.initialize = function () {};

TRom.NodeTarsImp.prototype.onDispatch = function (current, funcName, binBuffer) { 
    if ("__" + funcName in this) {
        return this["__" + funcName](current, binBuffer);
    } else {
        return TarsError.SERVER.FUNC_NOT_FOUND;
    }
};

var __TRom_NodeTars$tars_ping$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeTarsImp.prototype.__tars_ping = function (current) {
    __TRom_NodeTars$tars_ping$RE.call(current, 0);

    return TarsError.SUCCESS;
};

TRom.NodeTarsImp.prototype.test = function () {
    assert.fail("test function not implemented");
};

var __TRom_NodeTars$test$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeTarsImp.prototype.__test = function (current) {
    current.sendResponse = __TRom_NodeTars$test$RE;

    this.test(current);

    return TarsError.SUCCESS;
};

TRom.NodeTarsImp.prototype.testRpcCall = function () {
    assert.fail("testRpcCall function not implemented");
};

var __TRom_NodeTars$testRpcCall$RE = function (_ret, sValue) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);
        tup.writeString("sValue", sValue);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);
        os.writeString(2, sValue);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeTarsImp.prototype.__testRpcCall = function (current, binBuffer) {
    var sUsrName = null;
    var sValue = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        sUsrName = tup.readString("sUsrName");
        sValue = tup.readString("sValue", "");
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        sUsrName = is.readString(1, true, "");
        sValue = is.readString(2, false, "");
    }

    current.sendResponse = __TRom_NodeTars$testRpcCall$RE;

    this.testRpcCall(current, sUsrName, sValue);

    return TarsError.SUCCESS;
};

TRom.NodeTarsImp.prototype.testContext = function () {
    assert.fail("testContext function not implemented");
};

var __TRom_NodeTars$testContext$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeTarsImp.prototype.__testContext = function (current) {
    current.sendResponse = __TRom_NodeTars$testContext$RE;

    this.testContext(current);

    return TarsError.SUCCESS;
};





