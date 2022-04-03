import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import supabase from '../../lib/supabase';
import { createUseLinksKey,  } from './keys';
import { Link, CreateLinkPayload } from './types';

const getDoggerLinks = async (dogger: string) => {
  const { data: links } = await supabase
    .from('links')
    .select('id, name, url')
    .eq('dogger', dogger);

  if (!links) {
    throw new Error('No links found for this dogger');
  }

  return links;
};

export const useLinks = (dogger: string, options?: UseQueryOptions<Link[]>) => {
  return useQuery(
    createUseLinksKey(dogger),
    () => getDoggerLinks(dogger),
    options
  );
};

export const useCreateLink = (
  options?: UseMutationOptions<Link[], unknown, CreateLinkPayload>
) => {
  return useMutation(async (payload) => {
    const { data, error } = await supabase
      .from<Omit<Link[], 'id'>>('links')
      .insert([payload]);

    if (error) {
      throw error;
    }

    return data[0];
  }, options);
};
