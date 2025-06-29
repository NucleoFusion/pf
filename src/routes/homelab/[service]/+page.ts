
import type { PageLoad } from './$types.d.ts';
import { error } from '@sveltejs/kit';

const validDots = [
  'specs',
  'niri',
  'containers',
  'gitea',
  'grafana',
  'adblocker',
  'cdn',
  "nas",
  'path'
];

export const load: PageLoad = ({ params }) => {
  if (!validDots.includes(params.service)) {
    throw error(404, 'Dotfile not found');
  }

  return {
    service: params.service
  };
};
