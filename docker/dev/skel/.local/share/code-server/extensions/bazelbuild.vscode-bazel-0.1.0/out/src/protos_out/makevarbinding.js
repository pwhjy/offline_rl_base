"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.blaze_query.MakeVarBinding');
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
proto.blaze_query.MakeVarBinding = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blaze_query.MakeVarBinding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.blaze_query.MakeVarBinding.displayName = 'proto.blaze_query.MakeVarBinding';
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
    proto.blaze_query.MakeVarBinding.prototype.toObject = function (opt_includeInstance) {
        return proto.blaze_query.MakeVarBinding.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.blaze_query.MakeVarBinding} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.blaze_query.MakeVarBinding.toObject = function (includeInstance, msg) {
        var f, obj = {
            value: jspb.Message.getField(msg, 1),
            platformSetRegexp: jspb.Message.getField(msg, 2)
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
 * @return {!proto.blaze_query.MakeVarBinding}
 */
proto.blaze_query.MakeVarBinding.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.blaze_query.MakeVarBinding;
    return proto.blaze_query.MakeVarBinding.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blaze_query.MakeVarBinding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blaze_query.MakeVarBinding}
 */
proto.blaze_query.MakeVarBinding.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setValue(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setPlatformSetRegexp(value);
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
proto.blaze_query.MakeVarBinding.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.blaze_query.MakeVarBinding.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blaze_query.MakeVarBinding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blaze_query.MakeVarBinding.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
        writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeString(2, f);
    }
};
/**
 * required string value = 1;
 * @return {string}
 */
proto.blaze_query.MakeVarBinding.prototype.getValue = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.blaze_query.MakeVarBinding.prototype.setValue = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.blaze_query.MakeVarBinding.prototype.clearValue = function () {
    jspb.Message.setField(this, 1, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.MakeVarBinding.prototype.hasValue = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * required string platform_set_regexp = 2;
 * @return {string}
 */
proto.blaze_query.MakeVarBinding.prototype.getPlatformSetRegexp = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.blaze_query.MakeVarBinding.prototype.setPlatformSetRegexp = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.blaze_query.MakeVarBinding.prototype.clearPlatformSetRegexp = function () {
    jspb.Message.setField(this, 2, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.MakeVarBinding.prototype.hasPlatformSetRegexp = function () {
    return jspb.Message.getField(this, 2) != null;
};
//# sourceMappingURL=makevarbinding.js.map