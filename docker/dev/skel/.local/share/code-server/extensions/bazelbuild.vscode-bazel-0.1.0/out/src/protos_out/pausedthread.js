"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.skylark_debugging.PausedThread');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.skylark_debugging.Error');
goog.require('proto.skylark_debugging.Location');
goog.forwardDeclare('proto.skylark_debugging.PauseReason');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.skylark_debugging.PausedThread = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.skylark_debugging.PausedThread, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.skylark_debugging.PausedThread.displayName = 'proto.skylark_debugging.PausedThread';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.skylark_debugging.PausedThread.prototype.toObject = function (opt_includeInstance) {
        return proto.skylark_debugging.PausedThread.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.skylark_debugging.PausedThread} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.skylark_debugging.PausedThread.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, 0),
            name: jspb.Message.getFieldWithDefault(msg, 2, ""),
            pauseReason: jspb.Message.getFieldWithDefault(msg, 3, 0),
            location: (f = msg.getLocation()) && proto.skylark_debugging.Location.toObject(includeInstance, f),
            conditionalBreakpointError: (f = msg.getConditionalBreakpointError()) && proto.skylark_debugging.Error.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.skylark_debugging.PausedThread}
 */
proto.skylark_debugging.PausedThread.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.skylark_debugging.PausedThread;
    return proto.skylark_debugging.PausedThread.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.skylark_debugging.PausedThread} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.skylark_debugging.PausedThread}
 */
proto.skylark_debugging.PausedThread.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setId(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setName(value);
                break;
            case 3:
                var value = /** @type {!proto.skylark_debugging.PauseReason} */ (reader.readEnum());
                msg.setPauseReason(value);
                break;
            case 4:
                var value = new proto.skylark_debugging.Location;
                reader.readMessage(value, proto.skylark_debugging.Location.deserializeBinaryFromReader);
                msg.setLocation(value);
                break;
            case 5:
                var value = new proto.skylark_debugging.Error;
                reader.readMessage(value, proto.skylark_debugging.Error.deserializeBinaryFromReader);
                msg.setConditionalBreakpointError(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.skylark_debugging.PausedThread.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.skylark_debugging.PausedThread.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.skylark_debugging.PausedThread} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.skylark_debugging.PausedThread.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f !== 0) {
        writer.writeInt64(1, f);
    }
    f = message.getName();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getPauseReason();
    if (f !== 0.0) {
        writer.writeEnum(3, f);
    }
    f = message.getLocation();
    if (f != null) {
        writer.writeMessage(4, f, proto.skylark_debugging.Location.serializeBinaryToWriter);
    }
    f = message.getConditionalBreakpointError();
    if (f != null) {
        writer.writeMessage(5, f, proto.skylark_debugging.Error.serializeBinaryToWriter);
    }
};
/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.skylark_debugging.PausedThread.prototype.getId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {number} value */
proto.skylark_debugging.PausedThread.prototype.setId = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional string name = 2;
 * @return {string}
 */
proto.skylark_debugging.PausedThread.prototype.getName = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.skylark_debugging.PausedThread.prototype.setName = function (value) {
    jspb.Message.setField(this, 2, value);
};
/**
 * optional PauseReason pause_reason = 3;
 * @return {!proto.skylark_debugging.PauseReason}
 */
proto.skylark_debugging.PausedThread.prototype.getPauseReason = function () {
    return /** @type {!proto.skylark_debugging.PauseReason} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};
/** @param {!proto.skylark_debugging.PauseReason} value */
proto.skylark_debugging.PausedThread.prototype.setPauseReason = function (value) {
    jspb.Message.setField(this, 3, value);
};
/**
 * optional Location location = 4;
 * @return {?proto.skylark_debugging.Location}
 */
proto.skylark_debugging.PausedThread.prototype.getLocation = function () {
    return /** @type{?proto.skylark_debugging.Location} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.Location, 4));
};
/** @param {?proto.skylark_debugging.Location|undefined} value */
proto.skylark_debugging.PausedThread.prototype.setLocation = function (value) {
    jspb.Message.setWrapperField(this, 4, value);
};
proto.skylark_debugging.PausedThread.prototype.clearLocation = function () {
    this.setLocation(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.PausedThread.prototype.hasLocation = function () {
    return jspb.Message.getField(this, 4) != null;
};
/**
 * optional Error conditional_breakpoint_error = 5;
 * @return {?proto.skylark_debugging.Error}
 */
proto.skylark_debugging.PausedThread.prototype.getConditionalBreakpointError = function () {
    return /** @type{?proto.skylark_debugging.Error} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.Error, 5));
};
/** @param {?proto.skylark_debugging.Error|undefined} value */
proto.skylark_debugging.PausedThread.prototype.setConditionalBreakpointError = function (value) {
    jspb.Message.setWrapperField(this, 5, value);
};
proto.skylark_debugging.PausedThread.prototype.clearConditionalBreakpointError = function () {
    this.setConditionalBreakpointError(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.PausedThread.prototype.hasConditionalBreakpointError = function () {
    return jspb.Message.getField(this, 5) != null;
};
//# sourceMappingURL=pausedthread.js.map