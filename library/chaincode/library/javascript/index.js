/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const Parent = require('./lib/library').Parent;
const Sub = require('./lib/library').Sub;
module.exports.Sub = Sub;
module.exports.Parent = Parent;
module.exports.contracts = [Parent, Sub];
