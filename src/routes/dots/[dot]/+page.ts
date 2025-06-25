import type { PageLoad } from './$types.d.ts';
import { error } from '@sveltejs/kit';

const validDots = [
  'dots',
  'niri',
  'ags',
  'lock',
  'nvim',
  'term',
  'firefox'
];

export const load: PageLoad = ({ params }) => {
  if (!validDots.includes(params.dot)) {
    throw error(404, 'Dotfile not found');
  }

  return {
    dot: params.dot
  };
};
