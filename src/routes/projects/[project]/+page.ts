import { error } from '@sveltejs/kit';

const validProjects = [
  'toney',
  'cruise',
];

export function load({ params }: any) {
  const { project } = params;

  if (!validProjects.includes(project)) {
    throw error(404, `Project "${project}" not found`);
  }

  return { project };
}
