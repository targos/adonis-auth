import { User } from './models'
import { AuthConfig, AuthContract } from '@ioc:Adonis/Addons/Auth'

export const config: AuthConfig = {
  guard: 'session',
  list: {
    session: {
      driver: 'session',
      provider: {
        driver: 'lucid',
        model: User,
        identifierKey: 'id',
        uids: ['email'],
      },
    },
    sessionDb: {
      driver: 'session',
      provider: {
        driver: 'database',
        usersTable: 'users',
        identifierKey: 'id',
        uids: ['email'],
      },
    },
  },
}

const a = {} as AuthContract
a.use('session').verifyCredentials('asd', 'sda').then((user) => {
  user.email
})
