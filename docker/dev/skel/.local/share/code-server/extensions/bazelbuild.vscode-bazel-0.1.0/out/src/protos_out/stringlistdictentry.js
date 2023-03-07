"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.blaze_query.StringListDictEntry');
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
proto.blaze_query.StringListDictEntry = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.blaze_query.StringListDictEntry.repeatedFields_, null);
};
goog.inherits(proto.blaze_query.StringListDictEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.blaze_query.StringListDictEntry.displayName = 'proto.blaze_query.StringListDictEntry';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.blaze_query.StringListDictEntry.repeatedFields_ = [2];
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
    proto.blaze_query.StringListDictEntry.prototype.toObject = function (opt_includeInstance) {
        return proto.blaze_query.StringListDictEntry.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.blaze_query.StringListDictEntry} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.blaze_query.StringListDictEntry.toObject = function (includeInstance, msg) {
        var f, obj = {
            key: jspb.Message.getField(msg, 1),
            valueList: jspb.Message.getRepeatedField(msg, 2)
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
 * @return {!proto.blaze_query.StringListDictEntry}
 */
proto.blaze_query.StringListDictEntry.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.blaze_query.StringListDictEntry;
    return proto.blaze_query.StringListDictEntry.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blaze_query.StringListDictEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blaze_query.StringListDictEntry}
 */
proto.blaze_query.StringListDictEntry.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setKey(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.addValue(value);
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
proto.blaze_query.StringListDictEntry.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.blaze_query.StringListDictEntry.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blaze_query.StringListDictEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blaze_query.StringListDictEntry.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = /** @type {string} */ (jspb.Message.getField(message, 1));
    if (f != null) {
        writer.writeString(1, f);
    }
    f = message.getValueList();
    if (f.length > 0) {
        writer.writeRepeatedString(2, f);
    }
};
/**
 * required string key = 1;
 * @return {string}
 */
proto.blaze_query.StringListDictEntry.prototype.getKey = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.blaze_query.StringListDictEntry.prototype.setKey = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.blaze_query.StringListDictEntry.prototype.clearKey = function () {
    jspb.Message.setField(this, 1, undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.blaze_query.StringListDictEntry.prototype.hasKey = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * repeated string value = 2;
 * @return {!Array.<string>}
 */
proto.blaze_query.StringListDictEntry.prototype.getValueList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 2));
};
/** @param {!Array.<string>} value */
proto.blaze_query.StringListDictEntry.prototype.setValueList = function (value) {
    jspb.Message.setField(this, 2, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.blaze_query.StringListDictEntry.prototype.addValue = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};
proto.blaze_query.StringListDictEntry.prototype.clearValueList = function () {
    this.setValueList([]);
};
//# sourceMappingURL=stringlistdictentry.js.map