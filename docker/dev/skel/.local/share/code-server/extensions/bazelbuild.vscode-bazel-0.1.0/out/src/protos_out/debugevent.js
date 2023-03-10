"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.skylark_debugging.DebugEvent');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.skylark_debugging.ContinueExecutionResponse');
goog.require('proto.skylark_debugging.Error');
goog.require('proto.skylark_debugging.EvaluateResponse');
goog.require('proto.skylark_debugging.GetChildrenResponse');
goog.require('proto.skylark_debugging.ListFramesResponse');
goog.require('proto.skylark_debugging.PauseThreadResponse');
goog.require('proto.skylark_debugging.SetBreakpointsResponse');
goog.require('proto.skylark_debugging.StartDebuggingResponse');
goog.require('proto.skylark_debugging.ThreadContinuedEvent');
goog.require('proto.skylark_debugging.ThreadPausedEvent');
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
proto.skylark_debugging.DebugEvent = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, 500, null, proto.skylark_debugging.DebugEvent.oneofGroups_);
};
goog.inherits(proto.skylark_debugging.DebugEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.skylark_debugging.DebugEvent.displayName = 'proto.skylark_debugging.DebugEvent';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.skylark_debugging.DebugEvent.oneofGroups_ = [[99, 101, 102, 103, 104, 105, 106, 107, 1001, 1002]];
/**
 * @enum {number}
 */
proto.skylark_debugging.DebugEvent.PayloadCase = {
    PAYLOAD_NOT_SET: 0,
    ERROR: 99,
    SET_BREAKPOINTS: 101,
    CONTINUE_EXECUTION: 102,
    EVALUATE: 103,
    LIST_FRAMES: 104,
    START_DEBUGGING: 105,
    PAUSE_THREAD: 106,
    GET_CHILDREN: 107,
    THREAD_PAUSED: 1001,
    THREAD_CONTINUED: 1002
};
/**
 * @return {proto.skylark_debugging.DebugEvent.PayloadCase}
 */
proto.skylark_debugging.DebugEvent.prototype.getPayloadCase = function () {
    return /** @type {proto.skylark_debugging.DebugEvent.PayloadCase} */ (jspb.Message.computeOneofCase(this, proto.skylark_debugging.DebugEvent.oneofGroups_[0]));
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
    proto.skylark_debugging.DebugEvent.prototype.toObject = function (opt_includeInstance) {
        return proto.skylark_debugging.DebugEvent.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.skylark_debugging.DebugEvent} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.skylark_debugging.DebugEvent.toObject = function (includeInstance, msg) {
        var f, obj = {
            sequenceNumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
            error: (f = msg.getError()) && proto.skylark_debugging.Error.toObject(includeInstance, f),
            setBreakpoints: (f = msg.getSetBreakpoints()) && proto.skylark_debugging.SetBreakpointsResponse.toObject(includeInstance, f),
            continueExecution: (f = msg.getContinueExecution()) && proto.skylark_debugging.ContinueExecutionResponse.toObject(includeInstance, f),
            evaluate: (f = msg.getEvaluate()) && proto.skylark_debugging.EvaluateResponse.toObject(includeInstance, f),
            listFrames: (f = msg.getListFrames()) && proto.skylark_debugging.ListFramesResponse.toObject(includeInstance, f),
            startDebugging: (f = msg.getStartDebugging()) && proto.skylark_debugging.StartDebuggingResponse.toObject(includeInstance, f),
            pauseThread: (f = msg.getPauseThread()) && proto.skylark_debugging.PauseThreadResponse.toObject(includeInstance, f),
            getChildren: (f = msg.getGetChildren()) && proto.skylark_debugging.GetChildrenResponse.toObject(includeInstance, f),
            threadPaused: (f = msg.getThreadPaused()) && proto.skylark_debugging.ThreadPausedEvent.toObject(includeInstance, f),
            threadContinued: (f = msg.getThreadContinued()) && proto.skylark_debugging.ThreadContinuedEvent.toObject(includeInstance, f)
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
 * @return {!proto.skylark_debugging.DebugEvent}
 */
proto.skylark_debugging.DebugEvent.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.skylark_debugging.DebugEvent;
    return proto.skylark_debugging.DebugEvent.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.skylark_debugging.DebugEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.skylark_debugging.DebugEvent}
 */
proto.skylark_debugging.DebugEvent.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setSequenceNumber(value);
                break;
            case 99:
                var value = new proto.skylark_debugging.Error;
                reader.readMessage(value, proto.skylark_debugging.Error.deserializeBinaryFromReader);
                msg.setError(value);
                break;
            case 101:
                var value = new proto.skylark_debugging.SetBreakpointsResponse;
                reader.readMessage(value, proto.skylark_debugging.SetBreakpointsResponse.deserializeBinaryFromReader);
                msg.setSetBreakpoints(value);
                break;
            case 102:
                var value = new proto.skylark_debugging.ContinueExecutionResponse;
                reader.readMessage(value, proto.skylark_debugging.ContinueExecutionResponse.deserializeBinaryFromReader);
                msg.setContinueExecution(value);
                break;
            case 103:
                var value = new proto.skylark_debugging.EvaluateResponse;
                reader.readMessage(value, proto.skylark_debugging.EvaluateResponse.deserializeBinaryFromReader);
                msg.setEvaluate(value);
                break;
            case 104:
                var value = new proto.skylark_debugging.ListFramesResponse;
                reader.readMessage(value, proto.skylark_debugging.ListFramesResponse.deserializeBinaryFromReader);
                msg.setListFrames(value);
                break;
            case 105:
                var value = new proto.skylark_debugging.StartDebuggingResponse;
                reader.readMessage(value, proto.skylark_debugging.StartDebuggingResponse.deserializeBinaryFromReader);
                msg.setStartDebugging(value);
                break;
            case 106:
                var value = new proto.skylark_debugging.PauseThreadResponse;
                reader.readMessage(value, proto.skylark_debugging.PauseThreadResponse.deserializeBinaryFromReader);
                msg.setPauseThread(value);
                break;
            case 107:
                var value = new proto.skylark_debugging.GetChildrenResponse;
                reader.readMessage(value, proto.skylark_debugging.GetChildrenResponse.deserializeBinaryFromReader);
                msg.setGetChildren(value);
                break;
            case 1001:
                var value = new proto.skylark_debugging.ThreadPausedEvent;
                reader.readMessage(value, proto.skylark_debugging.ThreadPausedEvent.deserializeBinaryFromReader);
                msg.setThreadPaused(value);
                break;
            case 1002:
                var value = new proto.skylark_debugging.ThreadContinuedEvent;
                reader.readMessage(value, proto.skylark_debugging.ThreadContinuedEvent.deserializeBinaryFromReader);
                msg.setThreadContinued(value);
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
proto.skylark_debugging.DebugEvent.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.skylark_debugging.DebugEvent.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.skylark_debugging.DebugEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.skylark_debugging.DebugEvent.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSequenceNumber();
    if (f !== 0) {
        writer.writeInt64(1, f);
    }
    f = message.getError();
    if (f != null) {
        writer.writeMessage(99, f, proto.skylark_debugging.Error.serializeBinaryToWriter);
    }
    f = message.getSetBreakpoints();
    if (f != null) {
        writer.writeMessage(101, f, proto.skylark_debugging.SetBreakpointsResponse.serializeBinaryToWriter);
    }
    f = message.getContinueExecution();
    if (f != null) {
        writer.writeMessage(102, f, proto.skylark_debugging.ContinueExecutionResponse.serializeBinaryToWriter);
    }
    f = message.getEvaluate();
    if (f != null) {
        writer.writeMessage(103, f, proto.skylark_debugging.EvaluateResponse.serializeBinaryToWriter);
    }
    f = message.getListFrames();
    if (f != null) {
        writer.writeMessage(104, f, proto.skylark_debugging.ListFramesResponse.serializeBinaryToWriter);
    }
    f = message.getStartDebugging();
    if (f != null) {
        writer.writeMessage(105, f, proto.skylark_debugging.StartDebuggingResponse.serializeBinaryToWriter);
    }
    f = message.getPauseThread();
    if (f != null) {
        writer.writeMessage(106, f, proto.skylark_debugging.PauseThreadResponse.serializeBinaryToWriter);
    }
    f = message.getGetChildren();
    if (f != null) {
        writer.writeMessage(107, f, proto.skylark_debugging.GetChildrenResponse.serializeBinaryToWriter);
    }
    f = message.getThreadPaused();
    if (f != null) {
        writer.writeMessage(1001, f, proto.skylark_debugging.ThreadPausedEvent.serializeBinaryToWriter);
    }
    f = message.getThreadContinued();
    if (f != null) {
        writer.writeMessage(1002, f, proto.skylark_debugging.ThreadContinuedEvent.serializeBinaryToWriter);
    }
};
/**
 * optional int64 sequence_number = 1;
 * @return {number}
 */
proto.skylark_debugging.DebugEvent.prototype.getSequenceNumber = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {number} value */
proto.skylark_debugging.DebugEvent.prototype.setSequenceNumber = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional Error error = 99;
 * @return {?proto.skylark_debugging.Error}
 */
proto.skylark_debugging.DebugEvent.prototype.getError = function () {
    return /** @type{?proto.skylark_debugging.Error} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.Error, 99));
};
/** @param {?proto.skylark_debugging.Error|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setError = function (value) {
    jspb.Message.setOneofWrapperField(this, 99, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearError = function () {
    this.setError(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasError = function () {
    return jspb.Message.getField(this, 99) != null;
};
/**
 * optional SetBreakpointsResponse set_breakpoints = 101;
 * @return {?proto.skylark_debugging.SetBreakpointsResponse}
 */
proto.skylark_debugging.DebugEvent.prototype.getSetBreakpoints = function () {
    return /** @type{?proto.skylark_debugging.SetBreakpointsResponse} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.SetBreakpointsResponse, 101));
};
/** @param {?proto.skylark_debugging.SetBreakpointsResponse|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setSetBreakpoints = function (value) {
    jspb.Message.setOneofWrapperField(this, 101, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearSetBreakpoints = function () {
    this.setSetBreakpoints(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasSetBreakpoints = function () {
    return jspb.Message.getField(this, 101) != null;
};
/**
 * optional ContinueExecutionResponse continue_execution = 102;
 * @return {?proto.skylark_debugging.ContinueExecutionResponse}
 */
proto.skylark_debugging.DebugEvent.prototype.getContinueExecution = function () {
    return /** @type{?proto.skylark_debugging.ContinueExecutionResponse} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.ContinueExecutionResponse, 102));
};
/** @param {?proto.skylark_debugging.ContinueExecutionResponse|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setContinueExecution = function (value) {
    jspb.Message.setOneofWrapperField(this, 102, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearContinueExecution = function () {
    this.setContinueExecution(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasContinueExecution = function () {
    return jspb.Message.getField(this, 102) != null;
};
/**
 * optional EvaluateResponse evaluate = 103;
 * @return {?proto.skylark_debugging.EvaluateResponse}
 */
proto.skylark_debugging.DebugEvent.prototype.getEvaluate = function () {
    return /** @type{?proto.skylark_debugging.EvaluateResponse} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.EvaluateResponse, 103));
};
/** @param {?proto.skylark_debugging.EvaluateResponse|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setEvaluate = function (value) {
    jspb.Message.setOneofWrapperField(this, 103, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearEvaluate = function () {
    this.setEvaluate(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasEvaluate = function () {
    return jspb.Message.getField(this, 103) != null;
};
/**
 * optional ListFramesResponse list_frames = 104;
 * @return {?proto.skylark_debugging.ListFramesResponse}
 */
proto.skylark_debugging.DebugEvent.prototype.getListFrames = function () {
    return /** @type{?proto.skylark_debugging.ListFramesResponse} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.ListFramesResponse, 104));
};
/** @param {?proto.skylark_debugging.ListFramesResponse|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setListFrames = function (value) {
    jspb.Message.setOneofWrapperField(this, 104, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearListFrames = function () {
    this.setListFrames(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasListFrames = function () {
    return jspb.Message.getField(this, 104) != null;
};
/**
 * optional StartDebuggingResponse start_debugging = 105;
 * @return {?proto.skylark_debugging.StartDebuggingResponse}
 */
proto.skylark_debugging.DebugEvent.prototype.getStartDebugging = function () {
    return /** @type{?proto.skylark_debugging.StartDebuggingResponse} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.StartDebuggingResponse, 105));
};
/** @param {?proto.skylark_debugging.StartDebuggingResponse|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setStartDebugging = function (value) {
    jspb.Message.setOneofWrapperField(this, 105, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearStartDebugging = function () {
    this.setStartDebugging(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasStartDebugging = function () {
    return jspb.Message.getField(this, 105) != null;
};
/**
 * optional PauseThreadResponse pause_thread = 106;
 * @return {?proto.skylark_debugging.PauseThreadResponse}
 */
proto.skylark_debugging.DebugEvent.prototype.getPauseThread = function () {
    return /** @type{?proto.skylark_debugging.PauseThreadResponse} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.PauseThreadResponse, 106));
};
/** @param {?proto.skylark_debugging.PauseThreadResponse|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setPauseThread = function (value) {
    jspb.Message.setOneofWrapperField(this, 106, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearPauseThread = function () {
    this.setPauseThread(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasPauseThread = function () {
    return jspb.Message.getField(this, 106) != null;
};
/**
 * optional GetChildrenResponse get_children = 107;
 * @return {?proto.skylark_debugging.GetChildrenResponse}
 */
proto.skylark_debugging.DebugEvent.prototype.getGetChildren = function () {
    return /** @type{?proto.skylark_debugging.GetChildrenResponse} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.GetChildrenResponse, 107));
};
/** @param {?proto.skylark_debugging.GetChildrenResponse|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setGetChildren = function (value) {
    jspb.Message.setOneofWrapperField(this, 107, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearGetChildren = function () {
    this.setGetChildren(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasGetChildren = function () {
    return jspb.Message.getField(this, 107) != null;
};
/**
 * optional ThreadPausedEvent thread_paused = 1001;
 * @return {?proto.skylark_debugging.ThreadPausedEvent}
 */
proto.skylark_debugging.DebugEvent.prototype.getThreadPaused = function () {
    return /** @type{?proto.skylark_debugging.ThreadPausedEvent} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.ThreadPausedEvent, 1001));
};
/** @param {?proto.skylark_debugging.ThreadPausedEvent|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setThreadPaused = function (value) {
    jspb.Message.setOneofWrapperField(this, 1001, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearThreadPaused = function () {
    this.setThreadPaused(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasThreadPaused = function () {
    return jspb.Message.getField(this, 1001) != null;
};
/**
 * optional ThreadContinuedEvent thread_continued = 1002;
 * @return {?proto.skylark_debugging.ThreadContinuedEvent}
 */
proto.skylark_debugging.DebugEvent.prototype.getThreadContinued = function () {
    return /** @type{?proto.skylark_debugging.ThreadContinuedEvent} */ (jspb.Message.getWrapperField(this, proto.skylark_debugging.ThreadContinuedEvent, 1002));
};
/** @param {?proto.skylark_debugging.ThreadContinuedEvent|undefined} value */
proto.skylark_debugging.DebugEvent.prototype.setThreadContinued = function (value) {
    jspb.Message.setOneofWrapperField(this, 1002, proto.skylark_debugging.DebugEvent.oneofGroups_[0], value);
};
proto.skylark_debugging.DebugEvent.prototype.clearThreadContinued = function () {
    this.setThreadContinued(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.skylark_debugging.DebugEvent.prototype.hasThreadContinued = function () {
    return jspb.Message.getField(this, 1002) != null;
};
//# sourceMappingURL=debugevent.js.map