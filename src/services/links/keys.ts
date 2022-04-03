import { QueryKey } from 'react-query';

export const createUseLinksKey = (dogger: string): QueryKey => [
  'useLInks',
  dogger,
];
