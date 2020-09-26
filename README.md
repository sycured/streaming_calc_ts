streaming_calc_ts
=================

Bandwidth calculation for streaming server | Rewrite from my original in Python

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![codecov](https://codecov.io/gh/sycured/streaming_calc_ts/branch/main/graph/badge.svg)](https://codecov.io/gh/sycured/streaming_calc_ts)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g streaming_calc_ts
$ streaming_calc_ts COMMAND
running command...
$ streaming_calc_ts (-v|--version|version)
streaming_calc_ts/0.0.0 darwin-x64 node-v12.18.3
$ streaming_calc_ts --help
USAGE
  $ streaming_calc_ts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`streaming_calc_ts bwserver`](#streaming_calc_ts-bwserver)
* [`streaming_calc_ts usagebw`](#streaming_calc_ts-usagebw)
* [`streaming_calc_ts help [COMMAND]`](#streaming_calc_ts-help-command)

## `streaming_calc_ts bwserver`

describe the command here

```
USAGE
  $ streaming_calc_ts hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ streaming_calc_ts hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/bwserver.ts](https://github.com/sycured/streaming_calc_ts/blob/v0.0.0/src/commands/bwserver.ts)_

## `streaming_calc_ts usagebw`

describe the command here

```
USAGE
  $ streaming_calc_ts hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ streaming_calc_ts hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/usage.ts](https://github.com/sycured/streaming_calc_ts/blob/v0.0.0/src/commands/usage.ts)_

## `streaming_calc_ts help [COMMAND]`

display help for streaming_calc_ts

```
USAGE
  $ streaming_calc_ts [COMMAND]

COMMANDS
  bwserver  Determine necessary server bandwidth
  help      display help for streaming_calc_ts
  usagebw   Determine necessary server bandwidth
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
