streaming_calc_ts
=================

Bandwidth calculation for streaming server | Rewrite from my original in Python

# Commands
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
