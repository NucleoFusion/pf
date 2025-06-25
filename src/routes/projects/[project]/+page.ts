import { error } from '@sveltejs/kit';

const validProjects = [
  'toney',
  'lapisoauth',
  'd2d',
  'glados',
  'neo',
  'lapisblog',
  'footballapi',
  'squeel',
  'katalogue',
  'lapischat',
  'sourcecord',
  'sos'
];

export function load({ params }: any) {
  const { project } = params;

  if (!validProjects.includes(project)) {
    throw error(404, `Project "${project}" not found`);
  }

  return { project };
}
