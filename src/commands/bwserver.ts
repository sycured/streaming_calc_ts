import {Command, flags} from '@oclif/command'

export class Bwserver extends Command {
    static description: string = 'Determine necessary server bandwidth';

    static examples: string[] = [
        `$ streaming_calc_ts bwserver --bitrate 250 --bitrate 64
Number of listeners: 250.0
Bitrate (kb/s): 64.0
Server bandwidth (Mib/s): 15625`,
        '',
        `$ streaming_calc_ts bwserver --bitrate 250 --bitrate 64.8
Number of listeners: 250
Bitrate (kb/s): 64.8
Server bandwidth (Mib/s): 15820.3125`
    ];

    static flags = {
        help: flags.help({char: 'h'}),
        nblisteners: flags.string({description: 'number of listeners', default: '0'}),
        bitrate: flags.string({description: 'bitrate in kb/s', default: '0'})
    };

    async run() {
        const parse = this.parse(Bwserver)

        const bitrate: number = Number(parse.flags.bitrate) ?? 0
        const nblisteners: number = Number(parse.flags.nblisteners) ?? 0

        const result: number = nblisteners * bitrate * 1000 / 1024

        const output: string = `Number of listeners: ${nblisteners}
Bitrate (kb/s): ${bitrate}
Server bandwidth (Mib/s): ${result}`

        this.log(output)
    }
}
