import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';

const endpoint =
  'https://4isp4l4dhrbonistm77tonp7xu.appsync-api.us-east-2.amazonaws.com/graphql';

export const appsyncClient: any = new AWSAppSyncClient({
  disableOffline: true,
  url: endpoint,
  region: 'eu-west-1',
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: 'ENTER API KEY HERE',
  },
});
