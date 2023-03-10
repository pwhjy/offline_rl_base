"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.build_event_stream.BuildToolLogs');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.build_event_stream.File');
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
proto.build_event_stream.BuildToolLogs = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.build_event_stream.BuildToolLogs.repeatedFields_, null);
};
goog.inherits(proto.build_event_stream.BuildToolLogs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.build_event_stream.BuildToolLogs.displayName = 'proto.build_event_stream.BuildToolLogs';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build_event_stream.BuildToolLogs.repeatedFields_ = [1];
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
    proto.build_event_stream.BuildToolLogs.prototype.toObject = function (opt_includeInstance) {
        return proto.build_event_stream.BuildToolLogs.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.build_event_stream.BuildToolLogs} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.build_event_stream.BuildToolLogs.toObject = function (includeInstance, msg) {
        var f, obj = {
            logList: jspb.Message.toObjectList(msg.getLogList(), proto.build_event_stream.File.toObject, includeInstance)
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
 * @return {!proto.build_event_stream.BuildToolLogs}
 */
proto.build_event_stream.BuildToolLogs.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.build_event_stream.BuildToolLogs;
    return proto.build_event_stream.BuildToolLogs.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build_event_stream.BuildToolLogs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build_event_stream.BuildToolLogs}
 */
proto.build_event_stream.BuildToolLogs.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.build_event_stream.File;
                reader.readMessage(value, proto.build_event_stream.File.deserializeBinaryFromReader);
                msg.addLog(value);
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
proto.build_event_stream.BuildToolLogs.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.build_event_stream.BuildToolLogs.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build_event_stream.BuildToolLogs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build_event_stream.BuildToolLogs.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getLogList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.build_event_stream.File.serializeBinaryToWriter);
    }
};
/**
 * repeated File log = 1;
 * @return {!Array.<!proto.build_event_stream.File>}
 */
proto.build_event_stream.BuildToolLogs.prototype.getLogList = function () {
    return /** @type{!Array.<!proto.build_event_stream.File>} */ (jspb.Message.getRepeatedWrapperField(this, proto.build_event_stream.File, 1));
};
/** @param {!Array.<!proto.build_event_stream.File>} value */
proto.build_event_stream.BuildToolLogs.prototype.setLogList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.build_event_stream.File=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build_event_stream.File}
 */
proto.build_event_stream.BuildToolLogs.prototype.addLog = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.build_event_stream.File, opt_index);
};
proto.build_event_stream.BuildToolLogs.prototype.clearLogList = function () {
    this.setLogList([]);
};
//# sourceMappingURL=buildtoollogs.js.map