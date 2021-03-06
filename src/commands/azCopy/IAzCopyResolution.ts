/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IParsedError } from "vscode-azureextensionui";

export interface IAzCopyResolution {
    errors: IParsedError[];
}
