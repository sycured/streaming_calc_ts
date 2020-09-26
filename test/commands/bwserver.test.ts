import {expect, test} from '@oclif/test'

describe('bwserver', () => {
    test
        .stdout()
        .command(['bwserver', '--bitrate', '64', '--nblisteners', '250'])
        .it('bwserver with integer', ctx => {
            expect(ctx.stdout).to.contain('Server bandwidth (Mib/s): 15625')
        })

    test
        .stdout()
        .command(['bwserver', '--bitrate', '64.8', '--nblisteners', '250'])
        .it('bwserver with float', ctx => {
            expect(ctx.stdout).to.contain('Server bandwidth (Mib/s): 15820.3125')
        })
})
