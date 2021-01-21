import publicIp, { Options } from 'public-ip';

const options: Options = {
  onlyHttps: true,
  timeout: 1000,
};

export const getIpAddress = async (): Promise<string> => {
  return publicIp.v4(options);
};
