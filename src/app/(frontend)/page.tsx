import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Home Page'),
};

export default function Page() {
  return <h1>Home Page</h1>;
}
