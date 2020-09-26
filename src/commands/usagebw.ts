import {Command, flags} from '@oclif/command'

export class Usagebw extends Command {
    static description: string = 'Determine necessary server bandwidth';

    static examples: string[] = [
        `$ streaming_calc_ts usagebw --nblisteners 250 --bitrate 64 --nbdays 1 --nbhours 24
Number of listeners: 250
Bitrate (kb/s): 64
Number of days: 1
Number of hours by days: 24
Bandwidth used (GiB): 164794.921875`,
        '',
        `$ streaming_calc_ts usagebw --nblisteners 250 --bitrate 64.8 --nbdays 1 --nbhours 24
Number of listeners: 250
Bitrate (kb/s): 64.8
Number of days: 1
Number of hours by days: 24
Server bandwidth (Mib/s): 166854.8583984375`
    ];

    static flags = {
        help: flags.help({char: 'h'}),
        nblisteners: flags.string({description: 'number of listeners', default: '0'}),
        bitrate: flags.string({description: 'bitrate in kb/s', default: '0'}),
        nbdays: flags.string({description: 'number of days', default: '0'}),
        nbhours: flags.string({description: 'number of hours by days', default: '0'})
    };

    async run() {
        const parse = this.parse(Usagebw)

        const bitrate: number = Number(parse.flags.bitrate)
        const nbdays: number = Number(parse.flags.nbdays)
        const nbhours: number = Number(parse.flags.nbhours)
        const nblisteners: number = Number(parse.flags.nblisteners)

        const result = nbdays * nbhours * 3600 * bitrate * 1000 / 8 * nblisteners / 1024 / 1024

        const output = `Number of listeners: ${nblisteners}
Bitrate (kb/s): ${bitrate}
Number of days: ${nbdays}
Number of hours by days: ${nbhours}
Server bandwidth (Mib/s): ${result}`

        this.log(output)
    }
}
