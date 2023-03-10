"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.blaze_query.Rule');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.blaze_query.Attribute');
goog.require('proto.blaze_query.AttributeAspect');
goog.require('proto.blaze_query.Location');
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
proto.blaze_query.Rule = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.blaze_query.Rule.repeatedFields_, null);
};
goog.inherits(proto.blaze_query.Rule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.blaze_query.Rule.displayName = 'proto.blaze_query.Rule';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.blaze_query.Rule.repeatedFields_ = [4, 5, 6, 7, 11];
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
    proto.blaze_query.Rule.prototype.toObject = function (opt_includeInstance) {
        return proto.blaze_query.Rule.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.blaze_query.Rule} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.blaze_query.Rule.toObject = function (includeInstance, msg) {
        var f, obj = {
            name: jspb.Message.getField(msg, 1),
            ruleClass: jspb.Message.getField(msg, 2),
            location: jspb.Message.getField(msg, 3),
            attributeList: jspb.Message.toObjectList(msg.getAttributeList(), proto.blaze_query.Attribute.toObject, includeInstance),
            ruleInputList: jspb.Message.getRepeatedField(msg, 5),
            ruleOutputList: jspb.Message.getRepeatedField(msg, 6),
            defaultSettingList: jspb.Message.getRepeatedField(msg, 7),
            deprecatedParseableLocation: (f = msg.getDeprecatedParseableLocation()) && proto.blaze_query.Location.toObject(includeInstance, f),
            publicByDefault: jspb.Message.getField(msg, 9),
            isSkylark: jspb.Message.getField(msg, 10),
            skylarkAttributeAspectsList: jspb.Message.toObjectList(msg.getSkylarkAttributeAspectsList(), proto.blaze_query.AttributeAspect.toObject, includeInstance),
            skylarkEnvironmentHashCode: jspb.Message.getField(msg, 12)
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
 * @return {!proto.blaze_query.Rule}
 */
proto.blaze_query.Rule.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.blaze_query.Rule;
    return proto.blaze_query.Rule.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blaze_query.Rule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blaze_query.Rule}
 */
proto.blaze_query.Rule.deserializeBinaryFromReader = function (msg, reader) {
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
                var value = /** @type {string} */ (reader.readString());
                msg.setRuleClass(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setLocation(value);
                break;
            case 4:
                var value = new proto.blaze_query.Attribute;
                reader.readMessage(value, proto.blaze_query.Attribute.deserializeBinaryFromReader);
                msg.addAttribute(value);
                break;
            case 5:
                var value = /** @type {string} */ (reader.readString());
                msg.addRuleInput(value);
                break;
            case 6:
                var value = /** @type {string} */ (reader.readString());
                msg.addRuleOutput(value);
                break;
            case 7:
                var value = /** @type {string} */ (reader.readString());
                msg.addDefaultSetting(value);
                break;
            case 8:
                var value = new proto.blaze_query.Location;
                reader.readMessage(value, proto.blaze_query.Location.deserializeBinaryFromReader);
                msg.setDeprecatedParseableLocation(value);
                break;
            case 9:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setPublicByDefault(value);
                break;
            case 10:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setIsSkylark(value);
                break;
            case 11:
                var value = new proto.blaze_query.AttributeAspect;
                reader.readMessage(value, proto.blaze_query.AttributeAspect.deserializeBinaryFromReader);
                msg.addSkylarkAttributeAspects(value);
                break;
            case 12:
                var value = /** @type {string} */ (reader.readString());
                msg.setSkylarkEnvironmentHashCode(value);
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
proto.blaze_query.Rule.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.blaze_query.Rule.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blaze_query.Rule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blaze_query.Rule.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
        writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeString(2, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 3));
    if (f != null) {
        writer.writeString(3, f);
    }
    f = message.getAttributeList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(4, f, proto.blaze_query.Attribute.serializeBinaryToWriter);
    }
    f = message.getRuleInputList();
    if (f.length > 0) {
        writer.writeRepeatedString(5, f);
    }
    f = message.getRuleOutputList();
    if (f.length > 0) {
        writer.writeRepeatedString(6, f);
    }
    f = message.getDefaultSettingList();
    if (f.length > 0) {
        writer.writeRepeatedString(7, f);
    }
    f = message.getDeprecatedParseableLocation();
    if (f != null) {
        writer.writeMessage(8, f, proto.blaze_query.Location.serializeBinaryToWriter);
    }
    f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
    if (f != null) {
        writer.writeBool(9, f);
    }
    f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
    if (f != null) {
        writer.writeBool(10, f);
    }
    f = message.getSkylarkAttributeAspectsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(11, f, proto.blaze_query.AttributeAspect.serializeBinaryToWriter);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 12));
    if (f != null) {
        writer.writeString(12, f);
    }
};
/**
 * required string name = 1;
 * @return {string}
 */
proto.blaze_query.Rule.prototype.getName = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.blaze_query.Rule.prototype.setName = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.blaze_query.Rule.prototype.clearName = function () {
    jspb.Message.setField(this, 1, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Rule.prototype.hasName = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * required string rule_class = 2;
 * @return {string}
 */
proto.blaze_query.Rule.prototype.getRuleClass = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.blaze_query.Rule.prototype.setRuleClass = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.blaze_query.Rule.prototype.clearRuleClass = function () {
    jspb.Message.setField(this, 2, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Rule.prototype.hasRuleClass = function () {
    return jspb.Message.getField(this, 2) != null;
};
/**
 * optional string location = 3;
 * @return {string}
 */
proto.blaze_query.Rule.prototype.getLocation = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.blaze_query.Rule.prototype.setLocation = function (value) {
    jspb.Message.setField(this, 3, value);
};
proto.blaze_query.Rule.prototype.clearLocation = function () {
    jspb.Message.setField(this, 3, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Rule.prototype.hasLocation = function () {
    return jspb.Message.getField(this, 3) != null;
};
/**
 * repeated Attribute attribute = 4;
 * @return {!Array.<!proto.blaze_query.Attribute>}
 */
proto.blaze_query.Rule.prototype.getAttributeList = function () {
    return /** @type{!Array.<!proto.blaze_query.Attribute>} */ (jspb.Message.getRepeatedWrapperField(this, proto.blaze_query.Attribute, 4));
};
/** @param {!Array.<!proto.blaze_query.Attribute>} value */
proto.blaze_query.Rule.prototype.setAttributeList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 4, value);
};
/**
 * @param {!proto.blaze_query.Attribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blaze_query.Attribute}
 */
proto.blaze_query.Rule.prototype.addAttribute = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.blaze_query.Attribute, opt_index);
};
proto.blaze_query.Rule.prototype.clearAttributeList = function () {
    this.setAttributeList([]);
};
/**
 * repeated string rule_input = 5;
 * @return {!Array.<string>}
 */
proto.blaze_query.Rule.prototype.getRuleInputList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 5));
};
/** @param {!Array.<string>} value */
proto.blaze_query.Rule.prototype.setRuleInputList = function (value) {
    jspb.Message.setField(this, 5, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.blaze_query.Rule.prototype.addRuleInput = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};
proto.blaze_query.Rule.prototype.clearRuleInputList = function () {
    this.setRuleInputList([]);
};
/**
 * repeated string rule_output = 6;
 * @return {!Array.<string>}
 */
proto.blaze_query.Rule.prototype.getRuleOutputList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 6));
};
/** @param {!Array.<string>} value */
proto.blaze_query.Rule.prototype.setRuleOutputList = function (value) {
    jspb.Message.setField(this, 6, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.blaze_query.Rule.prototype.addRuleOutput = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};
proto.blaze_query.Rule.prototype.clearRuleOutputList = function () {
    this.setRuleOutputList([]);
};
/**
 * repeated string default_setting = 7;
 * @return {!Array.<string>}
 */
proto.blaze_query.Rule.prototype.getDefaultSettingList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 7));
};
/** @param {!Array.<string>} value */
proto.blaze_query.Rule.prototype.setDefaultSettingList = function (value) {
    jspb.Message.setField(this, 7, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.blaze_query.Rule.prototype.addDefaultSetting = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};
proto.blaze_query.Rule.prototype.clearDefaultSettingList = function () {
    this.setDefaultSettingList([]);
};
/**
 * optional Location DEPRECATED_parseable_location = 8;
 * @return {?proto.blaze_query.Location}
 */
proto.blaze_query.Rule.prototype.getDeprecatedParseableLocation = function () {
    return /** @type{?proto.blaze_query.Location} */ (jspb.Message.getWrapperField(this, proto.blaze_query.Location, 8));
};
/** @param {?proto.blaze_query.Location|undefined} value */
proto.blaze_query.Rule.prototype.setDeprecatedParseableLocation = function (value) {
    jspb.Message.setWrapperField(this, 8, value);
};
proto.blaze_query.Rule.prototype.clearDeprecatedParseableLocation = function () {
    this.setDeprecatedParseableLocation(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Rule.prototype.hasDeprecatedParseableLocation = function () {
    return jspb.Message.getField(this, 8) != null;
};
/**
 * optional bool public_by_default = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.blaze_query.Rule.prototype.getPublicByDefault = function () {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};
/** @param {boolean} value */
proto.blaze_query.Rule.prototype.setPublicByDefault = function (value) {
    jspb.Message.setField(this, 9, value);
};
proto.blaze_query.Rule.prototype.clearPublicByDefault = function () {
    jspb.Message.setField(this, 9, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Rule.prototype.hasPublicByDefault = function () {
    return jspb.Message.getField(this, 9) != null;
};
/**
 * optional bool is_skylark = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.blaze_query.Rule.prototype.getIsSkylark = function () {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};
/** @param {boolean} value */
proto.blaze_query.Rule.prototype.setIsSkylark = function (value) {
    jspb.Message.setField(this, 10, value);
};
proto.blaze_query.Rule.prototype.clearIsSkylark = function () {
    jspb.Message.setField(this, 10, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Rule.prototype.hasIsSkylark = function () {
    return jspb.Message.getField(this, 10) != null;
};
/**
 * repeated AttributeAspect skylark_attribute_aspects = 11;
 * @return {!Array.<!proto.blaze_query.AttributeAspect>}
 */
proto.blaze_query.Rule.prototype.getSkylarkAttributeAspectsList = function () {
    return /** @type{!Array.<!proto.blaze_query.AttributeAspect>} */ (jspb.Message.getRepeatedWrapperField(this, proto.blaze_query.AttributeAspect, 11));
};
/** @param {!Array.<!proto.blaze_query.AttributeAspect>} value */
proto.blaze_query.Rule.prototype.setSkylarkAttributeAspectsList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 11, value);
};
/**
 * @param {!proto.blaze_query.AttributeAspect=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blaze_query.AttributeAspect}
 */
proto.blaze_query.Rule.prototype.addSkylarkAttributeAspects = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.blaze_query.AttributeAspect, opt_index);
};
proto.blaze_query.Rule.prototype.clearSkylarkAttributeAspectsList = function () {
    this.setSkylarkAttributeAspectsList([]);
};
/**
 * optional string skylark_environment_hash_code = 12;
 * @return {string}
 */
proto.blaze_query.Rule.prototype.getSkylarkEnvironmentHashCode = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};
/** @param {string} value */
proto.blaze_query.Rule.prototype.setSkylarkEnvironmentHashCode = function (value) {
    jspb.Message.setField(this, 12, value);
};
proto.blaze_query.Rule.prototype.clearSkylarkEnvironmentHashCode = function () {
    jspb.Message.setField(this, 12, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.Rule.prototype.hasSkylarkEnvironmentHashCode = function () {
    return jspb.Message.getField(this, 12) != null;
};
//# sourceMappingURL=rule.js.map