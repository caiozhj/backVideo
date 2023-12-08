import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'aL_YCVB1SU-v_C4swreOIA',
  sdkSecret: 'QnaMpdfWWzm6Y29FYgo20d6O5DdUlah8zcgN',
  webEndpoint: 'zoom.us',
  topic: 'testando',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '1234',
  signature: '',
  sessionKey: '',
  userIdentity: '',
  // role = 1 to join as host, 0 to join as attendee. The first user must join as host to start the session
  role: 1
};
