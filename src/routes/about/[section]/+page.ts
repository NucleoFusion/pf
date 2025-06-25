import { error } from '@sveltejs/kit';

export function load({ params }: any) {
  const validSlugs = ['exp', 'skills', 'edu', 'roadmap']; // whitelist

  if (!validSlugs.includes(params.section)) {
    throw error(404, 'Not found');
  }

  return {
    slug: params.slug
  };
}

