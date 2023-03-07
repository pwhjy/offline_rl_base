"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.blaze_query.Location');
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
proto.blaze_query.Location = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blaze_query.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.blaze_query.Location.displayName = 'proto.blaze_query.Location';
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
    proto.blaze_query.Location.prototype.toObject = function (opt_includeInstance) {
        return proto.blaze_query.Location.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.blaze_query.Location} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.blaze_query.Location.toObject = function (includeInstance, msg) {
        var f, obj = {
            startOffset: jspb.Message.getField(msg, 1),
            startLine: jspb.Message.getField(msg, 2),
            startColumn: jspb.Message.getField(msg, 3),
            endOffset: jspb.Message.getField(msg, 4),
            endLine: jspb.Message.getField(msg, 5),
            endColumn: jspb.Message.getField(msg, 6)
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
 * @return {!proto.blaze_query.Location}
 */
proto.blaze_query.Location.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.blaze_query.Location;
    return proto.blaze_query.Location.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blaze_query.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blaze_query.Location}
 */
proto.blaze_query.Location.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setStartOffset(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setStartLine(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setStartColumn(value);
                break;
            case 4:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setEndOffset(value);
                break;
            case 5:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setEndLine(value);
                break;
            case 6:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setEndColumn(value);
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
proto.blaze_query.Location.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.blaze_query.Location.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blaze_query.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blaze_query.Location.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = /** @type {number} */ (jspb.Message.getField(message, 1));
    if (f != null) {
        writer.writeInt32(1, f);
    }
    f = /** @type {number} */ (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeInt32(2, f);
    }
    f = /** @type {number} */ (jspb.Message.getField(message, 3));
    if (f != null) {
        writer.writeInt32(3, f);
    }
    f = /** @type {number} */ (jspb.Message.getField(message, 4));
    if (f != null) {
        writer.writeInt32(4, f);
    }
    f = /** @type {number} */ (jspb.Message.getField(message, 5));
    if (f != null) {
        writer.writeInt32(5, f);
    }
    f = /** @type {number} */ (jspb.Message.getField(message, 6));
    if (f != null) {
        writer.writeInt32(6, f);
    }
};
/**
 * optional int32 start_offset = 1;
 * @return {number}
 */
proto.blaze_query.Location.prototype.getStartOffset = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {number} value */
proto.blaze_query.Location.prototype.setStartOffset = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.blaze_query.Location.prototype.clearStartOffset = function () {
    jspb.Message.setField(this, 1, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Location.prototype.hasStartOffset = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * optional int32 start_line = 2;
 * @return {number}
 */
proto.blaze_query.Location.prototype.getStartLine = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};
/** @param {number} value */
proto.blaze_query.Location.prototype.setStartLine = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.blaze_query.Location.prototype.clearStartLine = function () {
    jspb.Message.setField(this, 2, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Location.prototype.hasStartLine = function () {
    return jspb.Message.getField(this, 2) != null;
};
/**
 * optional int32 start_column = 3;
 * @return {number}
 */
proto.blaze_query.Location.prototype.getStartColumn = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};
/** @param {number} value */
proto.blaze_query.Location.prototype.setStartColumn = function (value) {
    jspb.Message.setField(this, 3, value);
};
proto.blaze_query.Location.prototype.clearStartColumn = function () {
    jspb.Message.setField(this, 3, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Location.prototype.hasStartColumn = function () {
    return jspb.Message.getField(this, 3) != null;
};
/**
 * optional int32 end_offset = 4;
 * @return {number}
 */
proto.blaze_query.Location.prototype.getEndOffset = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};
/** @param {number} value */
proto.blaze_query.Location.prototype.setEndOffset = function (value) {
    jspb.Message.setField(this, 4, value);
};
proto.blaze_query.Location.prototype.clearEndOffset = function () {
    jspb.Message.setField(this, 4, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Location.prototype.hasEndOffset = function () {
    return jspb.Message.getField(this, 4) != null;
};
/**
 * optional int32 end_line = 5;
 * @return {number}
 */
proto.blaze_query.Location.prototype.getEndLine = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};
/** @param {number} value */
proto.blaze_query.Location.prototype.setEndLine = function (value) {
    jspb.Message.setField(this, 5, value);
};
proto.blaze_query.Location.prototype.clearEndLine = function () {
    jspb.Message.setField(this, 5, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Location.prototype.hasEndLine = function () {
    return jspb.Message.getField(this, 5) != null;
};
/**
 * optional int32 end_column = 6;
 * @return {number}
 */
proto.blaze_query.Location.prototype.getEndColumn = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};
/** @param {number} value */
proto.blaze_query.Location.prototype.setEndColumn = function (value) {
    jspb.Message.setField(this, 6, value);
};
proto.blaze_query.Location.prototype.clearEndColumn = function () {
    jspb.Message.setField(this, 6, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Location.prototype.hasEndColumn = function () {
    return jspb.Message.getField(this, 6) != null;
};
//# sourceMappingURL=location.js.map