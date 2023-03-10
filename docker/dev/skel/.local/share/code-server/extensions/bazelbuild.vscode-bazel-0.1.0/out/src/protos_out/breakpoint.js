"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.skylark_debugging.Breakpoint');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.skylark_debugging.Location');
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
proto.skylark_debugging.Breakpoint = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, proto.skylark_debugging.Breakpoint.oneofGroups_);
};
goog.inherits(proto.skylark_debugging.Breakpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.skylark_debugging.Breakpoint.displayName = 'proto.skylark_debugging.Breakpoint';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.skylark_debugging.Breakpoint.oneofGroups_ = [[1]];
/**
 * @enum {number}
 */
proto.skylark_debugging.Breakpoint.ConditionCase = {
    CONDITION_NOT_SET: 0,
    LOCATION: 1
};
/**
 * @return {proto.skylark_debugging.Breakpoint.ConditionCase}
 */
proto.skylark_debugging.Breakpoint.prototype.getConditionCase = function () {
    return /** @type {proto.skylark_debugging.Breakpoint.ConditionCase} */ (jspb.Message.computeOneofCase(this, proto.skylark_debugging.Breakpoint.oneofGroups_[0]));
};
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
    proto.skylark_debugging.Breakpoint.prototype.toObject = function (opt_includeInstance) {
        return proto.skylark_debugging.Breakpoint.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.skylark_debugging.Breakpoint} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.skylark_debugging.Breakpoint.toObject = function (includeInstance, msg) {
        var f, obj = {
            location: (f = msg.getLocation()) && proto.skylark_debugging.Location.toObject(includeInstance, f),
            expression: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.skylark_debugging.Breakpoint}
 */
proto.skylark_debugging.Breakpoint.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.skylark_debugging.Breakpoint;
    return proto.skylark_debugging.Breakpoint.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.skylark_debugging.Breakpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.skylark_debugging.Breakpoint}
 */
proto.skylark_debugging.Breakpoint.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.skylark_debugging.Location;
                reader.readMessage(value, proto.skylark_debugging.Location.deserializeBinaryFromReader);
                msg.setLocation(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setExpression(value);
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
proto.skylark_debugging.Breakpoint.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.skylark_debugging.Breakpoint.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.skylark_debugging.Breakpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.skylark_debugging.Breakpoint.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getLocation();
    if (f != null) {
        writer.writeMessage(1, f, proto.skylark_debugging.Location.serializeBinaryToWriter);
    }
    f = message.getExpression();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
};
/**
 * optional Location location = 1;
 * @return {?proto.skylark_debugging.Location}
 */
proto.skylark_debugging.Breakpoint.prototype.getLocation = function () {
    return /** @type{?proto.skylark_debugging.Location} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.Location, 1));
};
/** @param {?proto.skylark_debugging.Location|undefined} value */
proto.skylark_debugging.Breakpoint.prototype.setLocation = function (value) {
    jspb.Message.setOneofWrapperField(this, 1, proto.skylark_debugging.Breakpoint.oneofGroups_[0], value);
};
proto.skylark_debugging.Breakpoint.prototype.clearLocation = function () {
    this.setLocation(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.Breakpoint.prototype.hasLocation = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * optional string expression = 2;
 * @return {string}
 */
proto.skylark_debugging.Breakpoint.prototype.getExpression = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.skylark_debugging.Breakpoint.prototype.setExpression = function (value) {
    jspb.Message.setField(this, 2, value);
};
//# sourceMappingURL=breakpoint.js.map