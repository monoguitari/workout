import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

type User= {
  id: number;
  createdAt: string;
  name: string;
};

export const load: PageServerLoad = async () => {
  const { data, error } = await supabase.from('Users').select<'users', User>();

  if (error) {
    console.error('Error loading users:', error.message);
    return { users: [] };
  }

  return {
    users: data ?? [],
  };
};