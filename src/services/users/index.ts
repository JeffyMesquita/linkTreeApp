import { AuthType, SignInPayloadType } from '../../context/Auth/types';
import supabase from '../../lib/supabase';

export const signUser = async ({
  nickname,
}: SignInPayloadType): Promise<AuthType> => {
  const { data: user } = await supabase
    .from('doggers')
    .select('id, name, bio, nickname, avatar_url')
    .eq('nickname', nickname)
    .single();

  if (!user) {
    throw new Error('User not found');
  }

  return {
    user,
  };
};
