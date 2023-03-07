"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var src_main_protobuf_option_filters_pb = require('../../../src/main/protobuf/option_filters_pb.js');
goog.exportSymbol('proto.command_line.ChunkList', null, global);
goog.exportSymbol('proto.command_line.CommandLine', null, global);
goog.exportSymbol('proto.command_line.CommandLineSection', null, global);
goog.exportSymbol('proto.command_line.Option', null, global);
goog.exportSymbol('proto.command_line.OptionList', null, global);
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
proto.command_line.CommandLine = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.command_line.CommandLine.repeatedFields_, null);
};
goog.inherits(proto.command_line.CommandLine, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.command_line.CommandLine.displayName = 'proto.command_line.CommandLine';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.command_line.CommandLine.repeatedFields_ = [2];
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
    proto.command_line.CommandLine.prototype.toObject = function (opt_includeInstance) {
        return proto.command_line.CommandLine.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.command_line.CommandLine} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.command_line.CommandLine.toObject = function (includeInstance, msg) {
        var f, obj = {
            commandLineLabel: jspb.Message.getFieldWithDefault(msg, 1, ""),
            sectionsList: jspb.Message.toObjectList(msg.getSectionsList(), proto.command_line.CommandLineSection.toObject, includeInstance)
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
 * @return {!proto.command_line.CommandLine}
 */
proto.command_line.CommandLine.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.command_line.CommandLine;
    return proto.command_line.CommandLine.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.command_line.CommandLine} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.command_line.CommandLine}
 */
proto.command_line.CommandLine.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setCommandLineLabel(value);
                break;
            case 2:
                var value = new proto.command_line.CommandLineSection;
                reader.readMessage(value, proto.command_line.CommandLineSection.deserializeBinaryFromReader);
                msg.addSections(value);
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
proto.command_line.CommandLine.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.command_line.CommandLine.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.command_line.CommandLine} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.command_line.CommandLine.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getCommandLineLabel();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getSectionsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(2, f, proto.command_line.CommandLineSection.serializeBinaryToWriter);
    }
};
/**
 * optional string command_line_label = 1;
 * @return {string}
 */
proto.command_line.CommandLine.prototype.getCommandLineLabel = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.command_line.CommandLine.prototype.setCommandLineLabel = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * repeated CommandLineSection sections = 2;
 * @return {!Array.<!proto.command_line.CommandLineSection>}
 */
proto.command_line.CommandLine.prototype.getSectionsList = function () {
    return /** @type{!Array.<!proto.command_line.CommandLineSection>} */ (jspb.Message.getRepeatedWrapperField(this, proto.command_line.CommandLineSection, 2));
};
/** @param {!Array.<!proto.command_line.CommandLineSection>} value */
proto.command_line.CommandLine.prototype.setSectionsList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 2, value);
};
/**
 * @param {!proto.command_line.CommandLineSection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.command_line.CommandLineSection}
 */
proto.command_line.CommandLine.prototype.addSections = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.command_line.CommandLineSection, opt_index);
};
proto.command_line.CommandLine.prototype.clearSectionsList = function () {
    this.setSectionsList([]);
};
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
proto.command_line.CommandLineSection = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, proto.command_line.CommandLineSection.oneofGroups_);
};
goog.inherits(proto.command_line.CommandLineSection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.command_line.CommandLineSection.displayName = 'proto.command_line.CommandLineSection';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.command_line.CommandLineSection.oneofGroups_ = [[2, 3]];
/**
 * @enum {number}
 */
proto.command_line.CommandLineSection.SectionTypeCase = {
    SECTION_TYPE_NOT_SET: 0,
    CHUNK_LIST: 2,
    OPTION_LIST: 3
};
/**
 * @return {proto.command_line.CommandLineSection.SectionTypeCase}
 */
proto.command_line.CommandLineSection.prototype.getSectionTypeCase = function () {
    return /** @type {proto.command_line.CommandLineSection.SectionTypeCase} */ (jspb.Message.computeOneofCase(this, proto.command_line.CommandLineSection.oneofGroups_[0]));
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
    proto.command_line.CommandLineSection.prototype.toObject = function (opt_includeInstance) {
        return proto.command_line.CommandLineSection.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.command_line.CommandLineSection} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.command_line.CommandLineSection.toObject = function (includeInstance, msg) {
        var f, obj = {
            sectionLabel: jspb.Message.getFieldWithDefault(msg, 1, ""),
            chunkList: (f = msg.getChunkList()) && proto.command_line.ChunkList.toObject(includeInstance, f),
            optionList: (f = msg.getOptionList()) && proto.command_line.OptionList.toObject(includeInstance, f)
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
 * @return {!proto.command_line.CommandLineSection}
 */
proto.command_line.CommandLineSection.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.command_line.CommandLineSection;
    return proto.command_line.CommandLineSection.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.command_line.CommandLineSection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.command_line.CommandLineSection}
 */
proto.command_line.CommandLineSection.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setSectionLabel(value);
                break;
            case 2:
                var value = new proto.command_line.ChunkList;
                reader.readMessage(value, proto.command_line.ChunkList.deserializeBinaryFromReader);
                msg.setChunkList(value);
                break;
            case 3:
                var value = new proto.command_line.OptionList;
                reader.readMessage(value, proto.command_line.OptionList.deserializeBinaryFromReader);
                msg.setOptionList(value);
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
proto.command_line.CommandLineSection.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.command_line.CommandLineSection.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.command_line.CommandLineSection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.command_line.CommandLineSection.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSectionLabel();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getChunkList();
    if (f != null) {
        writer.writeMessage(2, f, proto.command_line.ChunkList.serializeBinaryToWriter);
    }
    f = message.getOptionList();
    if (f != null) {
        writer.writeMessage(3, f, proto.command_line.OptionList.serializeBinaryToWriter);
    }
};
/**
 * optional string section_label = 1;
 * @return {string}
 */
proto.command_line.CommandLineSection.prototype.getSectionLabel = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.command_line.CommandLineSection.prototype.setSectionLabel = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional ChunkList chunk_list = 2;
 * @return {?proto.command_line.ChunkList}
 */
proto.command_line.CommandLineSection.prototype.getChunkList = function () {
    return /** @type{?proto.command_line.ChunkList} */ (jspb.Message.getWrapperField(this, proto.command_line.ChunkList, 2));
};
/** @param {?proto.command_line.ChunkList|undefined} value */
proto.command_line.CommandLineSection.prototype.setChunkList = function (value) {
    jspb.Message.setOneofWrapperField(this, 2, proto.command_line.CommandLineSection.oneofGroups_[0], value);
};
proto.command_line.CommandLineSection.prototype.clearChunkList = function () {
    this.setChunkList(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.command_line.CommandLineSection.prototype.hasChunkList = function () {
    return jspb.Message.getField(this, 2) != null;
};
/**
 * optional OptionList option_list = 3;
 * @return {?proto.command_line.OptionList}
 */
proto.command_line.CommandLineSection.prototype.getOptionList = function () {
    return /** @type{?proto.command_line.OptionList} */ (jspb.Message.getWrapperField(this, proto.command_line.OptionList, 3));
};
/** @param {?proto.command_line.OptionList|undefined} value */
proto.command_line.CommandLineSection.prototype.setOptionList = function (value) {
    jspb.Message.setOneofWrapperField(this, 3, proto.command_line.CommandLineSection.oneofGroups_[0], value);
};
proto.command_line.CommandLineSection.prototype.clearOptionList = function () {
    this.setOptionList(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.command_line.CommandLineSection.prototype.hasOptionList = function () {
    return jspb.Message.getField(this, 3) != null;
};
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
proto.command_line.ChunkList = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.command_line.ChunkList.repeatedFields_, null);
};
goog.inherits(proto.command_line.ChunkList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.command_line.ChunkList.displayName = 'proto.command_line.ChunkList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.command_line.ChunkList.repeatedFields_ = [1];
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
    proto.command_line.ChunkList.prototype.toObject = function (opt_includeInstance) {
        return proto.command_line.ChunkList.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.command_line.ChunkList} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.command_line.ChunkList.toObject = function (includeInstance, msg) {
        var f, obj = {
            chunkList: jspb.Message.getRepeatedField(msg, 1)
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
 * @return {!proto.command_line.ChunkList}
 */
proto.command_line.ChunkList.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.command_line.ChunkList;
    return proto.command_line.ChunkList.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.command_line.ChunkList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.command_line.ChunkList}
 */
proto.command_line.ChunkList.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.addChunk(value);
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
proto.command_line.ChunkList.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.command_line.ChunkList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.command_line.ChunkList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.command_line.ChunkList.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getChunkList();
    if (f.length > 0) {
        writer.writeRepeatedString(1, f);
    }
};
/**
 * repeated string chunk = 1;
 * @return {!Array.<string>}
 */
proto.command_line.ChunkList.prototype.getChunkList = function () {
    return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 1));
};
/** @param {!Array.<string>} value */
proto.command_line.ChunkList.prototype.setChunkList = function (value) {
    jspb.Message.setField(this, 1, value || []);
};
/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.command_line.ChunkList.prototype.addChunk = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};
proto.command_line.ChunkList.prototype.clearChunkList = function () {
    this.setChunkList([]);
};
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
proto.command_line.OptionList = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.command_line.OptionList.repeatedFields_, null);
};
goog.inherits(proto.command_line.OptionList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.command_line.OptionList.displayName = 'proto.command_line.OptionList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.command_line.OptionList.repeatedFields_ = [1];
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
    proto.command_line.OptionList.prototype.toObject = function (opt_includeInstance) {
        return proto.command_line.OptionList.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.command_line.OptionList} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.command_line.OptionList.toObject = function (includeInstance, msg) {
        var f, obj = {
            optionList: jspb.Message.toObjectList(msg.getOptionList(), proto.command_line.Option.toObject, includeInstance)
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
 * @return {!proto.command_line.OptionList}
 */
proto.command_line.OptionList.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.command_line.OptionList;
    return proto.command_line.OptionList.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.command_line.OptionList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.command_line.OptionList}
 */
proto.command_line.OptionList.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.command_line.Option;
                reader.readMessage(value, proto.command_line.Option.deserializeBinaryFromReader);
                msg.addOption(value);
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
proto.command_line.OptionList.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.command_line.OptionList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.command_line.OptionList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.command_line.OptionList.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getOptionList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.command_line.Option.serializeBinaryToWriter);
    }
};
/**
 * repeated Option option = 1;
 * @return {!Array.<!proto.command_line.Option>}
 */
proto.command_line.OptionList.prototype.getOptionList = function () {
    return /** @type{!Array.<!proto.command_line.Option>} */ (jspb.Message.getRepeatedWrapperField(this, proto.command_line.Option, 1));
};
/** @param {!Array.<!proto.command_line.Option>} value */
proto.command_line.OptionList.prototype.setOptionList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.command_line.Option=} opt_value
 * @param {number=} opt_index
 * @return {!proto.command_line.Option}
 */
proto.command_line.OptionList.prototype.addOption = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.command_line.Option, opt_index);
};
proto.command_line.OptionList.prototype.clearOptionList = function () {
    this.setOptionList([]);
};
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
proto.command_line.Option = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.command_line.Option.repeatedFields_, null);
};
goog.inherits(proto.command_line.Option, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.command_line.Option.displayName = 'proto.command_line.Option';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.command_line.Option.repeatedFields_ = [4, 5];
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
    proto.command_line.Option.prototype.toObject = function (opt_includeInstance) {
        return proto.command_line.Option.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.command_line.Option} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.command_line.Option.toObject = function (includeInstance, msg) {
        var f, obj = {
            combinedForm: jspb.Message.getFieldWithDefault(msg, 1, ""),
            optionName: jspb.Message.getFieldWithDefault(msg, 2, ""),
            optionValue: jspb.Message.getFieldWithDefault(msg, 3, ""),
            effectTagsList: jspb.Message.getRepeatedField(msg, 4),
            metadataTagsList: jspb.Message.getRepeatedField(msg, 5)
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
 * @return {!proto.command_line.Option}
 */
proto.command_line.Option.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.command_line.Option;
    return proto.command_line.Option.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.command_line.Option} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.command_line.Option}
 */
proto.command_line.Option.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setCombinedForm(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setOptionName(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setOptionValue(value);
                break;
            case 4:
                var value = /** @type {!Array.<!proto.options.OptionEffectTag>} */ (reader.readPackedEnum());
                msg.setEffectTagsList(value);
                break;
            case 5:
                var value = /** @type {!Array.<!proto.options.OptionMetadataTag>} */ (reader.readPackedEnum());
                msg.setMetadataTagsList(value);
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
proto.command_line.Option.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.command_line.Option.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.command_line.Option} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.command_line.Option.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getCombinedForm();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getOptionName();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getOptionValue();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
    f = message.getEffectTagsList();
    if (f.length > 0) {
        writer.writePackedEnum(4, f);
    }
    f = message.getMetadataTagsList();
    if (f.length > 0) {
        writer.writePackedEnum(5, f);
    }
};
/**
 * optional string combined_form = 1;
 * @return {string}
 */
proto.command_line.Option.prototype.getCombinedForm = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.command_line.Option.prototype.setCombinedForm = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional string option_name = 2;
 * @return {string}
 */
proto.command_line.Option.prototype.getOptionName = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.command_line.Option.prototype.setOptionName = function (value) {
    jspb.Message.setField(this, 2, value);
};
/**
 * optional string option_value = 3;
 * @return {string}
 */
proto.command_line.Option.prototype.getOptionValue = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.command_line.Option.prototype.setOptionValue = function (value) {
    jspb.Message.setField(this, 3, value);
};
/**
 * repeated options.OptionEffectTag effect_tags = 4;
 * @return {!Array.<!proto.options.OptionEffectTag>}
 */
proto.command_line.Option.prototype.getEffectTagsList = function () {
    return /** @type {!Array.<!proto.options.OptionEffectTag>} */ (jspb.Message.getRepeatedField(this, 4));
};
/** @param {!Array.<!proto.options.OptionEffectTag>} value */
proto.command_line.Option.prototype.setEffectTagsList = function (value) {
    jspb.Message.setField(this, 4, value || []);
};
/**
 * @param {!proto.options.OptionEffectTag} value
 * @param {number=} opt_index
 */
proto.command_line.Option.prototype.addEffectTags = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};
proto.command_line.Option.prototype.clearEffectTagsList = function () {
    this.setEffectTagsList([]);
};
/**
 * repeated options.OptionMetadataTag metadata_tags = 5;
 * @return {!Array.<!proto.options.OptionMetadataTag>}
 */
proto.command_line.Option.prototype.getMetadataTagsList = function () {
    return /** @type {!Array.<!proto.options.OptionMetadataTag>} */ (jspb.Message.getRepeatedField(this, 5));
};
/** @param {!Array.<!proto.options.OptionMetadataTag>} value */
proto.command_line.Option.prototype.setMetadataTagsList = function (value) {
    jspb.Message.setField(this, 5, value || []);
};
/**
 * @param {!proto.options.OptionMetadataTag} value
 * @param {number=} opt_index
 */
proto.command_line.Option.prototype.addMetadataTags = function (value, opt_index) {
    jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};
proto.command_line.Option.prototype.clearMetadataTagsList = function () {
    this.setMetadataTagsList([]);
};
goog.object.extend(exports, proto.command_line);
//# sourceMappingURL=command_line_pb.js.map