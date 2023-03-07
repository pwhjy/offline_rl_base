"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.blaze_query.SourceFile');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.blaze_query.License');
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
proto.blaze_query.SourceFile = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.blaze_query.SourceFile.repeatedFields_, null);
};
goog.inherits(proto.blaze_query.SourceFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.blaze_query.SourceFile.displayName = 'proto.blaze_query.SourceFile';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.blaze_query.SourceFile.repeatedFields_ = [3, 4, 5, 6];
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
    proto.blaze_query.SourceFile.prototype.toObject = function (opt_includeInstance) {
        return proto.blaze_query.SourceFile.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.blaze_query.SourceFile} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.blaze_query.SourceFile.toObject = function (includeInstance, msg) {
        var f, obj = {
            name: jspb.Message.getField(msg, 1),
            location: jspb.Message.getField(msg, 2),
            deprecatedParseableLocation: (f = msg.getDeprecatedParseableLocation()) && proto.blaze_query.Location.toObject(includeInstance, f),
            subincludeList: jspb.Message.getRepeatedField(msg, 3),
            packageGroupList: jspb.Message.getRepeatedField(msg, 4),
            visibilityLabelList: jspb.Message.getRepeatedField(msg, 5),
            featureList: jspb.Message.getRepeatedField(msg, 6),
            license: (f = msg.getLicense()) && proto.blaze_query.License.toObject(includeInstance, f),
            packageContainsErrors: jspb.Message.getField(msg, 9)
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
 * @return {!proto.blaze_query.SourceFile}
 */
proto.blaze_query.SourceFile.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.blaze_query.SourceFile;
    return proto.blaze_query.SourceFile.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blaze_query.SourceFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blaze_query.SourceFile}
 */
proto.blaze_query.SourceFile.deserializeBinaryFromReader = function (msg, reader) {
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
                msg.setLocation(value);
                break;
            case 7:
                var value = new proto.blaze_query.Location;
                reader.readMessage(value, proto.blaze_query.Location.deserializeBinaryFromReader);
                msg.setDeprecatedParseableLocation(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.addSubinclude(value);
                break;
            case 4:
                var value = /** @type {string} */ (reader.readString());
                msg.addPackageGroup(value);
                break;
            case 5:
                var value = /** @type {string} */ (reader.readString());
                msg.addVisibilityLabel(value);
                break;
            case 6:
                var value = /** @type {string} */ (reader.readString());
                msg.addFeature(value);
                break;
            case 8:
                var value = new proto.blaze_query.License;
                reader.readMessage(value, proto.blaze_query.License.deserializeBinaryFromReader);
                msg.setLicense(value);
                break;
            case 9:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setPackageContainsErrors(value);
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
proto.blaze_query.SourceFile.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.blaze_query.SourceFile.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blaze_query.SourceFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blaze_query.SourceFile.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
        writer.writeString(1, f);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeString(2, f);
    }
    f = message.getDeprecatedParseableLocation();
    if (f != null) {
        writer.writeMessage(7, f, proto.blaze_query.Location.serializeBinaryToWriter);
    }
    f = message.getSubincludeList();
    if (f.length > 0) {
        writer.writeRepeatedString(3, f);
    }
    f = message.getPackageGroupList();
    if (f.length > 0) {
        writer.writeRepeatedString(4, f);
    }
    f = message.getVisibilityLabelList();
    if (f.length > 0) {
        writer.writeRepeatedString(5, f);
    }
    f = message.getFeatureList();
    if (f.length > 0) {
        writer.writeRepeatedString(6, f);
    }
    f = message.getLicense();
    if (f != null) {
        writer.writeMessage(8, f, proto.blaze_query.License.serializeBinaryToWriter);
    }
    f = /** @type {boolean} */ (jspb.Message.getField(message, 9));
    if (f != null) {
        writer.writeBool(9, f);
    }
};
/**
 * required string name = 1;
 * @return {string}
 */
proto.blaze_query.SourceFile.prototype.getName = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.blaze_query.SourceFile.prototype.setName = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.blaze_query.SourceFile.prototype.clearName = function () {
    jspb.Message.setField(this, 1, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.SourceFile.prototype.hasName = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * optional string location = 2;
 * @return {string}
 */
proto.blaze_query.SourceFile.prototype.getLocation = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.blaze_query.SourceFile.prototype.setLocation = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.blaze_query.SourceFile.prototype.clearLocation = function () {
    jspb.Message.setField(this, 2, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.SourceFile.prototype.hasLocation = function () {
    return jspb.Message.getField(this, 2) != null;
};
/**
 * optional Location DEPRECATED_parseable_location = 7;
 * @return {?proto.blaze_query.Location}
 */
proto.blaze_query.SourceFile.prototype.getDeprecatedParseableLocation = function () {
    return /** @type{?proto.blaze_query.Location} */ (jspb.Message.getWrapperField(this, proto.blaze_query.Location, 7));
};
/** @param {?proto.blaze_query.Location|undefined} value */
proto.blaze_query.SourceFile.prototype.setDeprecatedParseableLocation = function (value) {
    jspb.Message.setWrapperField(this, 7, value);
};
proto.blaze_query.SourceFile.prototype.clearDeprecatedParseableLocation = function () {
    this.setDeprecatedParseableLocation(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.SourceFile.prototype.hasDeprecatedParseableLocation = function () {
    return jspb.Message.getField(this, 7) != null;
};
/**
 * repeated string subinclude = 3;
 * @return {!Array.<string>}
 */
proto.blaze_query.SourceFile.prototype.getSubincludeList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 3));
};
/** @param {!Array.<string>} value */
proto.blaze_query.SourceFile.prototype.setSubincludeList = function (value) {
    jspb.Message.setField(this, 3, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.blaze_query.SourceFile.prototype.addSubinclude = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};
proto.blaze_query.SourceFile.prototype.clearSubincludeList = function () {
    this.setSubincludeList([]);
};
/**
 * repeated string package_group = 4;
 * @return {!Array.<string>}
 */
proto.blaze_query.SourceFile.prototype.getPackageGroupList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 4));
};
/** @param {!Array.<string>} value */
proto.blaze_query.SourceFile.prototype.setPackageGroupList = function (value) {
    jspb.Message.setField(this, 4, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.blaze_query.SourceFile.prototype.addPackageGroup = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};
proto.blaze_query.SourceFile.prototype.clearPackageGroupList = function () {
    this.setPackageGroupList([]);
};
/**
 * repeated string visibility_label = 5;
 * @return {!Array.<string>}
 */
proto.blaze_query.SourceFile.prototype.getVisibilityLabelList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 5));
};
/** @param {!Array.<string>} value */
proto.blaze_query.SourceFile.prototype.setVisibilityLabelList = function (value) {
    jspb.Message.setField(this, 5, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.blaze_query.SourceFile.prototype.addVisibilityLabel = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};
proto.blaze_query.SourceFile.prototype.clearVisibilityLabelList = function () {
    this.setVisibilityLabelList([]);
};
/**
 * repeated string feature = 6;
 * @return {!Array.<string>}
 */
proto.blaze_query.SourceFile.prototype.getFeatureList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 6));
};
/** @param {!Array.<string>} value */
proto.blaze_query.SourceFile.prototype.setFeatureList = function (value) {
    jspb.Message.setField(this, 6, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.blaze_query.SourceFile.prototype.addFeature = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};
proto.blaze_query.SourceFile.prototype.clearFeatureList = function () {
    this.setFeatureList([]);
};
/**
 * optional License license = 8;
 * @return {?proto.blaze_query.License}
 */
proto.blaze_query.SourceFile.prototype.getLicense = function () {
    return /** @type{?proto.blaze_query.License} */ (jspb.Message.getWrapperField(this, proto.blaze_query.License, 8));
};
/** @param {?proto.blaze_query.License|undefined} value */
proto.blaze_query.SourceFile.prototype.setLicense = function (value) {
    jspb.Message.setWrapperField(this, 8, value);
};
proto.blaze_query.SourceFile.prototype.clearLicense = function () {
    this.setLicense(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.SourceFile.prototype.hasLicense = function () {
    return jspb.Message.getField(this, 8) != null;
};
/**
 * optional bool package_contains_errors = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.blaze_query.SourceFile.prototype.getPackageContainsErrors = function () {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};
/** @param {boolean} value */
proto.blaze_query.SourceFile.prototype.setPackageContainsErrors = function (value) {
    jspb.Message.setField(this, 9, value);
};
proto.blaze_query.SourceFile.prototype.clearPackageContainsErrors = function () {
    jspb.Message.setField(this, 9, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.SourceFile.prototype.hasPackageContainsErrors = function () {
    return jspb.Message.getField(this, 9) != null;
};
//# sourceMappingURL=sourcefile.js.map