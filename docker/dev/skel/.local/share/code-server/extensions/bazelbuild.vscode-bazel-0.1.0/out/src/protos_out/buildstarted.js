"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.build_event_stream.BuildStarted');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
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
proto.build_event_stream.BuildStarted = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build_event_stream.BuildStarted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.build_event_stream.BuildStarted.displayName = 'proto.build_event_stream.BuildStarted';
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
    proto.build_event_stream.BuildStarted.prototype.toObject = function (opt_includeInstance) {
        return proto.build_event_stream.BuildStarted.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.build_event_stream.BuildStarted} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.build_event_stream.BuildStarted.toObject = function (includeInstance, msg) {
        var f, obj = {
            uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
            startTimeMillis: jspb.Message.getFieldWithDefault(msg, 2, 0),
            buildToolVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
            optionsDescription: jspb.Message.getFieldWithDefault(msg, 4, ""),
            command: jspb.Message.getFieldWithDefault(msg, 5, ""),
            workingDirectory: jspb.Message.getFieldWithDefault(msg, 6, ""),
            workspaceDirectory: jspb.Message.getFieldWithDefault(msg, 7, ""),
            serverPid: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.build_event_stream.BuildStarted}
 */
proto.build_event_stream.BuildStarted.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.build_event_stream.BuildStarted;
    return proto.build_event_stream.BuildStarted.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build_event_stream.BuildStarted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build_event_stream.BuildStarted}
 */
proto.build_event_stream.BuildStarted.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setUuid(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setStartTimeMillis(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setBuildToolVersion(value);
                break;
            case 4:
                var value = /** @type {string} */ (reader.readString());
                msg.setOptionsDescription(value);
                break;
            case 5:
                var value = /** @type {string} */ (reader.readString());
                msg.setCommand(value);
                break;
            case 6:
                var value = /** @type {string} */ (reader.readString());
                msg.setWorkingDirectory(value);
                break;
            case 7:
                var value = /** @type {string} */ (reader.readString());
                msg.setWorkspaceDirectory(value);
                break;
            case 8:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setServerPid(value);
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
proto.build_event_stream.BuildStarted.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.build_event_stream.BuildStarted.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build_event_stream.BuildStarted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build_event_stream.BuildStarted.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getUuid();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getStartTimeMillis();
    if (f !== 0) {
        writer.writeInt64(2, f);
    }
    f = message.getBuildToolVersion();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
    f = message.getOptionsDescription();
    if (f.length > 0) {
        writer.writeString(4, f);
    }
    f = message.getCommand();
    if (f.length > 0) {
        writer.writeString(5, f);
    }
    f = message.getWorkingDirectory();
    if (f.length > 0) {
        writer.writeString(6, f);
    }
    f = message.getWorkspaceDirectory();
    if (f.length > 0) {
        writer.writeString(7, f);
    }
    f = message.getServerPid();
    if (f !== 0) {
        writer.writeInt64(8, f);
    }
};
/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.build_event_stream.BuildStarted.prototype.getUuid = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.build_event_stream.BuildStarted.prototype.setUuid = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional int64 start_time_millis = 2;
 * @return {number}
 */
proto.build_event_stream.BuildStarted.prototype.getStartTimeMillis = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};
/** @param {number} value */
proto.build_event_stream.BuildStarted.prototype.setStartTimeMillis = function (value) {
    jspb.Message.setField(this, 2, value);
};
/**
 * optional string build_tool_version = 3;
 * @return {string}
 */
proto.build_event_stream.BuildStarted.prototype.getBuildToolVersion = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.build_event_stream.BuildStarted.prototype.setBuildToolVersion = function (value) {
    jspb.Message.setField(this, 3, value);
};
/**
 * optional string options_description = 4;
 * @return {string}
 */
proto.build_event_stream.BuildStarted.prototype.getOptionsDescription = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};
/** @param {string} value */
proto.build_event_stream.BuildStarted.prototype.setOptionsDescription = function (value) {
    jspb.Message.setField(this, 4, value);
};
/**
 * optional string command = 5;
 * @return {string}
 */
proto.build_event_stream.BuildStarted.prototype.getCommand = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};
/** @param {string} value */
proto.build_event_stream.BuildStarted.prototype.setCommand = function (value) {
    jspb.Message.setField(this, 5, value);
};
/**
 * optional string working_directory = 6;
 * @return {string}
 */
proto.build_event_stream.BuildStarted.prototype.getWorkingDirectory = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};
/** @param {string} value */
proto.build_event_stream.BuildStarted.prototype.setWorkingDirectory = function (value) {
    jspb.Message.setField(this, 6, value);
};
/**
 * optional string workspace_directory = 7;
 * @return {string}
 */
proto.build_event_stream.BuildStarted.prototype.getWorkspaceDirectory = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};
/** @param {string} value */
proto.build_event_stream.BuildStarted.prototype.setWorkspaceDirectory = function (value) {
    jspb.Message.setField(this, 7, value);
};
/**
 * optional int64 server_pid = 8;
 * @return {number}
 */
proto.build_event_stream.BuildStarted.prototype.getServerPid = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};
/** @param {number} value */
proto.build_event_stream.BuildStarted.prototype.setServerPid = function (value) {
    jspb.Message.setField(this, 8, value);
};
//# sourceMappingURL=buildstarted.js.map