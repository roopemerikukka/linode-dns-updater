import { getIpAddress } from './lib/ip';

(async () => {
  console.log(await getIpAddress());
})();
