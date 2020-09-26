import {expect, test} from '@oclif/test'

describe('usagebw', () => {
    test
        .stdout()
        .command(['usagebw', '--nblisteners', '250', '--bitrate', '64', '--nbdays', '1', '--nbhours', '24'])
        .it('usagebw with integer', ctx => {
            expect(ctx.stdout).to.contain('Server bandwidth (Mib/s): 164794.921875')
        })

    test
        .stdout()
        .command(['usagebw', '--nblisteners', '250', '--bitrate', '64.8', '--nbdays', '1', '--nbhours', '24'])
        .it('usagebw with float', ctx => {
            expect(ctx.stdout).to.contain('Server bandwidth (Mib/s): 166854.8583984375')
        })
})
