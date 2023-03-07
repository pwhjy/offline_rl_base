"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.blaze_query.RuleDefinition');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.blaze_query.AttributeDefinition');
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
proto.blaze_query.RuleDefinition = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.blaze_query.RuleDefinition.repeatedFields_, null);
};
goog.inherits(proto.blaze_query.RuleDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.blaze_query.RuleDefinition.displayName = 'proto.blaze_query.RuleDefinition';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.blaze_query.RuleDefinition.repeatedFields_ = [2];
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
    proto.blaze_query.RuleDefinition.prototype.toObject = function (opt_includeInstance) {
        return proto.blaze_query.RuleDefinition.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.blaze_query.RuleDefinition} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.blaze_query.RuleDefinition.toObject = function (includeInstance, msg) {
        var f, obj = {
            name: jspb.Message.getField(msg, 1),
            attributeList: jspb.Message.toObjectList(msg.getAttributeList(), proto.blaze_query.AttributeDefinition.toObject, includeInstance),
            documentation: jspb.Message.getField(msg, 3),
            label: jspb.Message.getField(msg, 4)
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
 * @return {!proto.blaze_query.RuleDefinition}
 */
proto.blaze_query.RuleDefinition.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.blaze_query.RuleDefinition;
    return proto.blaze_query.RuleDefinition.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blaze_query.RuleDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blaze_query.RuleDefinition}
 */
proto.blaze_query.RuleDefinition.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setName(value);
                break;
            case 2:
                var value = new proto.blaze_query.AttributeDefinition;
                reader.readMessage(value, proto.blaze_query.AttributeDefinition.deserializeBinaryFromReader);
                msg.addAttribute(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setDocumentation(value);
                break;
            case 4:
                var value = /** @type {string} */ (reader.readString());
                msg.setLabel(value);
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
proto.blaze_query.RuleDefinition.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.blaze_query.RuleDefinition.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blaze_query.RuleDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blaze_query.RuleDefinition.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
        writer.writeString(1, f);
    }
    f = message.getAttributeList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(2, f, proto.blaze_query.AttributeDefinition.serializeBinaryToWriter);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 3));
    if (f != null) {
        writer.writeString(3, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 4));
    if (f != null) {
        writer.writeString(4, f);
    }
};
/**
 * required string name = 1;
 * @return {string}
 */
proto.blaze_query.RuleDefinition.prototype.getName = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.blaze_query.RuleDefinition.prototype.setName = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.blaze_query.RuleDefinition.prototype.clearName = function () {
    jspb.Message.setField(this, 1, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.RuleDefinition.prototype.hasName = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * repeated AttributeDefinition attribute = 2;
 * @return {!Array.<!proto.blaze_query.AttributeDefinition>}
 */
proto.blaze_query.RuleDefinition.prototype.getAttributeList = function () {
    return /** @type{!Array.<!proto.blaze_query.AttributeDefinition>} */ (jspb.Message.getRepeatedWrapperField(this, proto.blaze_query.AttributeDefinition, 2));
};
/** @param {!Array.<!proto.blaze_query.AttributeDefinition>} value */
proto.blaze_query.RuleDefinition.prototype.setAttributeList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 2, value);
};
/**
 * @param {!proto.blaze_query.AttributeDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blaze_query.AttributeDefinition}
 */
proto.blaze_query.RuleDefinition.prototype.addAttribute = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.blaze_query.AttributeDefinition, opt_index);
};
proto.blaze_query.RuleDefinition.prototype.clearAttributeList = function () {
    this.setAttributeList([]);
};
/**
 * optional string documentation = 3;
 * @return {string}
 */
proto.blaze_query.RuleDefinition.prototype.getDocumentation = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.blaze_query.RuleDefinition.prototype.setDocumentation = function (value) {
    jspb.Message.setField(this, 3, value);
};
proto.blaze_query.RuleDefinition.prototype.clearDocumentation = function () {
    jspb.Message.setField(this, 3, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.RuleDefinition.prototype.hasDocumentation = function () {
    return jspb.Message.getField(this, 3) != null;
};
/**
 * optional string label = 4;
 * @return {string}
 */
proto.blaze_query.RuleDefinition.prototype.getLabel = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};
/** @param {string} value */
proto.blaze_query.RuleDefinition.prototype.setLabel = function (value) {
    jspb.Message.setField(this, 4, value);
};
proto.blaze_query.RuleDefinition.prototype.clearLabel = function () {
    jspb.Message.setField(this, 4, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.RuleDefinition.prototype.hasLabel = function () {
    return jspb.Message.getField(this, 4) != null;
};
//# sourceMappingURL=ruledefinition.js.map