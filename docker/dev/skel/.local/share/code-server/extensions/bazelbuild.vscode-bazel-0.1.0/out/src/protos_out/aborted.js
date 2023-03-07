"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.build_event_stream.Aborted');
goog.provide('proto.build_event_stream.Aborted.AbortReason');
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
proto.build_event_stream.Aborted = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build_event_stream.Aborted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.build_event_stream.Aborted.displayName = 'proto.build_event_stream.Aborted';
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
    proto.build_event_stream.Aborted.prototype.toObject = function (opt_includeInstance) {
        return proto.build_event_stream.Aborted.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.build_event_stream.Aborted} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.build_event_stream.Aborted.toObject = function (includeInstance, msg) {
        var f, obj = {
            reason: jspb.Message.getFieldWithDefault(msg, 1, 0),
            description: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.build_event_stream.Aborted}
 */
proto.build_event_stream.Aborted.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.build_event_stream.Aborted;
    return proto.build_event_stream.Aborted.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build_event_stream.Aborted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build_event_stream.Aborted}
 */
proto.build_event_stream.Aborted.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {!proto.build_event_stream.Aborted.AbortReason} */ (reader.readEnum());
                msg.setReason(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setDescription(value);
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
proto.build_event_stream.Aborted.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.build_event_stream.Aborted.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build_event_stream.Aborted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build_event_stream.Aborted.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getReason();
    if (f !== 0.0) {
        writer.writeEnum(1, f);
    }
    f = message.getDescription();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
};
/**
 * @enum {number}
 */
proto.build_event_stream.Aborted.AbortReason = {
    UNKNOWN: 0,
    USER_INTERRUPTED: 1,
    NO_ANALYZE: 8,
    NO_BUILD: 9,
    TIME_OUT: 2,
    REMOTE_ENVIRONMENT_FAILURE: 3,
    INTERNAL: 4,
    LOADING_FAILURE: 5,
    ANALYSIS_FAILURE: 6,
    SKIPPED: 7
};
/**
 * optional AbortReason reason = 1;
 * @return {!proto.build_event_stream.Aborted.AbortReason}
 */
proto.build_event_stream.Aborted.prototype.getReason = function () {
    return /** @type {!proto.build_event_stream.Aborted.AbortReason} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {!proto.build_event_stream.Aborted.AbortReason} value */
proto.build_event_stream.Aborted.prototype.setReason = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional string description = 2;
 * @return {string}
 */
proto.build_event_stream.Aborted.prototype.getDescription = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.build_event_stream.Aborted.prototype.setDescription = function (value) {
    jspb.Message.setField(this, 2, value);
};
//# sourceMappingURL=aborted.js.map