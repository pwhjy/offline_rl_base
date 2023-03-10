"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.skylark_debugging.EvaluateResponse');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.skylark_debugging.Value');
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
proto.skylark_debugging.EvaluateResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.skylark_debugging.EvaluateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.skylark_debugging.EvaluateResponse.displayName = 'proto.skylark_debugging.EvaluateResponse';
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
    proto.skylark_debugging.EvaluateResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.skylark_debugging.EvaluateResponse.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.skylark_debugging.EvaluateResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.skylark_debugging.EvaluateResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            result: (f = msg.getResult()) && proto.skylark_debugging.Value.toObject(includeInstance, f)
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
 * @return {!proto.skylark_debugging.EvaluateResponse}
 */
proto.skylark_debugging.EvaluateResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.skylark_debugging.EvaluateResponse;
    return proto.skylark_debugging.EvaluateResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.skylark_debugging.EvaluateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.skylark_debugging.EvaluateResponse}
 */
proto.skylark_debugging.EvaluateResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.skylark_debugging.Value;
                reader.readMessage(value, proto.skylark_debugging.Value.deserializeBinaryFromReader);
                msg.setResult(value);
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
proto.skylark_debugging.EvaluateResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.skylark_debugging.EvaluateResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.skylark_debugging.EvaluateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.skylark_debugging.EvaluateResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getResult();
    if (f != null) {
        writer.writeMessage(1, f, proto.skylark_debugging.Value.serializeBinaryToWriter);
    }
};
/**
 * optional Value result = 1;
 * @return {?proto.skylark_debugging.Value}
 */
proto.skylark_debugging.EvaluateResponse.prototype.getResult = function () {
    return /** @type{?proto.skylark_debugging.Value} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.Value, 1));
};
/** @param {?proto.skylark_debugging.Value|undefined} value */
proto.skylark_debugging.EvaluateResponse.prototype.setResult = function (value) {
    jspb.Message.setWrapperField(this, 1, value);
};
proto.skylark_debugging.EvaluateResponse.prototype.clearResult = function () {
    this.setResult(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.EvaluateResponse.prototype.hasResult = function () {
    return jspb.Message.getField(this, 1) != null;
};
//# sourceMappingURL=evaluateresponse.js.map