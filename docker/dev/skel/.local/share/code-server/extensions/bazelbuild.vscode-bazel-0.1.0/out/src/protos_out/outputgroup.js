"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.build_event_stream.OutputGroup');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.build_event_stream.BuildEventId.NamedSetOfFilesId');
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
proto.build_event_stream.OutputGroup = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.build_event_stream.OutputGroup.repeatedFields_, null);
};
goog.inherits(proto.build_event_stream.OutputGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.build_event_stream.OutputGroup.displayName = 'proto.build_event_stream.OutputGroup';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build_event_stream.OutputGroup.repeatedFields_ = [3];
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
    proto.build_event_stream.OutputGroup.prototype.toObject = function (opt_includeInstance) {
        return proto.build_event_stream.OutputGroup.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.build_event_stream.OutputGroup} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.build_event_stream.OutputGroup.toObject = function (includeInstance, msg) {
        var f, obj = {
            name: jspb.Message.getFieldWithDefault(msg, 1, ""),
            fileSetsList: jspb.Message.toObjectList(msg.getFileSetsList(), proto.build_event_stream.BuildEventId.NamedSetOfFilesId.toObject, includeInstance)
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
 * @return {!proto.build_event_stream.OutputGroup}
 */
proto.build_event_stream.OutputGroup.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.build_event_stream.OutputGroup;
    return proto.build_event_stream.OutputGroup.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build_event_stream.OutputGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build_event_stream.OutputGroup}
 */
proto.build_event_stream.OutputGroup.deserializeBinaryFromReader = function (msg, reader) {
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
            case 3:
                var value = new proto.build_event_stream.BuildEventId.NamedSetOfFilesId;
                reader.readMessage(value, proto.build_event_stream.BuildEventId.NamedSetOfFilesId.deserializeBinaryFromReader);
                msg.addFileSets(value);
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
proto.build_event_stream.OutputGroup.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.build_event_stream.OutputGroup.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build_event_stream.OutputGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build_event_stream.OutputGroup.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getName();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getFileSetsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(3, f, proto.build_event_stream.BuildEventId.NamedSetOfFilesId.serializeBinaryToWriter);
    }
};
/**
 * optional string name = 1;
 * @return {string}
 */
proto.build_event_stream.OutputGroup.prototype.getName = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.build_event_stream.OutputGroup.prototype.setName = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * repeated BuildEventId.NamedSetOfFilesId file_sets = 3;
 * @return {!Array.<!proto.build_event_stream.BuildEventId.NamedSetOfFilesId>}
 */
proto.build_event_stream.OutputGroup.prototype.getFileSetsList = function () {
    return /** @type{!Array.<!proto.build_event_stream.BuildEventId.NamedSetOfFilesId>} */ (jspb.Message.getRepeatedWrapperField(this, proto.build_event_stream.BuildEventId.NamedSetOfFilesId, 3));
};
/** @param {!Array.<!proto.build_event_stream.BuildEventId.NamedSetOfFilesId>} value */
proto.build_event_stream.OutputGroup.prototype.setFileSetsList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.build_event_stream.BuildEventId.NamedSetOfFilesId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build_event_stream.BuildEventId.NamedSetOfFilesId}
 */
proto.build_event_stream.OutputGroup.prototype.addFileSets = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.build_event_stream.BuildEventId.NamedSetOfFilesId, opt_index);
};
proto.build_event_stream.OutputGroup.prototype.clearFileSetsList = function () {
    this.setFileSetsList([]);
};
//# sourceMappingURL=outputgroup.js.map