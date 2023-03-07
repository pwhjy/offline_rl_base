"use strict";
// Copyright 2018 The Bazel Authors. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const bazel_1 = require("../bazel");
const code_lens_command_adapter_1 = require("./code_lens_command_adapter");
/** Provids CodeLenses for targets in Bazel BUILD files. */
class BazelBuildCodeLensProvider {
    /**
     * Initializes a new CodeLens provider with the given extension context.
     *
     * @param context The VS Code extension context.
     */
    constructor(context) {
        this.context = context;
        /** Fired when BUILD files change in the workspace. */
        this.onDidChangeCodeLensesEmitter = new vscode.EventEmitter();
        this.onDidChangeCodeLenses = this.onDidChangeCodeLensesEmitter.event;
        const buildWatcher = vscode.workspace.createFileSystemWatcher("**/{BUILD,BUILD.bazel}", true, // ignoreCreateEvents
        false, true);
        buildWatcher.onDidChange((uri) => {
            this.onDidChangeCodeLensesEmitter.fire();
        }, this, context.subscriptions);
    }
    /**
     * Provides promisified CodeLen(s) for the given document.
     *
     * @param document A Bazel BUILD file
     * @param token CodeLens token automatically generated by VS Code when
     *     invoking the provider
     */
    provideCodeLenses(document, token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (document.isDirty) {
                // Don't show code lenses for dirty BUILD files; we can't reliably
                // determine what the build targets in it are until it is saved and we can
                // invoke `bazel query` with the updated file.
                return [];
            }
            const workspaceInfo = bazel_1.BazelWorkspaceInfo.fromDocument(document);
            if (workspaceInfo === undefined) {
                vscode.window.showWarningMessage("Bazel BUILD CodeLens unavailable as currently opened file is not in " +
                    "a Bazel workspace");
                return [];
            }
            const queryResult = yield bazel_1.getTargetsForBuildFile(workspaceInfo.bazelWorkspacePath, document.uri.fsPath);
            return this.computeCodeLenses(workspaceInfo, queryResult);
        });
    }
    /**
     * Takes the result of a Bazel query for targets defined in a package and
     * returns a list of CodeLens for the BUILD file in that package.
     *
     * @param bazelWorkspaceDirectory The Bazel workspace directory.
     * @param queryResult The result of the bazel query.
     */
    computeCodeLenses(bazelWorkspaceInfo, queryResult) {
        const result = [];
        for (const target of queryResult.target) {
            const location = new bazel_1.QueryLocation(target.rule.location);
            const targetName = target.rule.name;
            const ruleClass = target.rule.ruleClass;
            let cmd;
            if (ruleClass.endsWith("_test") || ruleClass === "test_suite") {
                cmd = {
                    arguments: [
                        new code_lens_command_adapter_1.CodeLensCommandAdapter(bazelWorkspaceInfo, [targetName]),
                    ],
                    command: "bazel.testTarget",
                    title: `Test ${targetName}`,
                    tooltip: `Test ${targetName}`,
                };
            }
            else {
                cmd = {
                    arguments: [
                        new code_lens_command_adapter_1.CodeLensCommandAdapter(bazelWorkspaceInfo, [targetName]),
                    ],
                    command: "bazel.buildTarget",
                    title: `Build ${targetName}`,
                    tooltip: `Build ${targetName}`,
                };
            }
            result.push(new vscode.CodeLens(location.range, cmd));
        }
        return result;
    }
}
exports.BazelBuildCodeLensProvider = BazelBuildCodeLensProvider;
//# sourceMappingURL=bazel_build_code_lens_provider.js.map