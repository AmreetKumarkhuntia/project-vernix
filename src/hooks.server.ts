import type { HandleServerError } from '@sveltejs/kit';

export const handleError: HandleServerError = ({ error, event }) => {
  console.error('Server Error:', error);

  return {
    message: 'Whoops! Something went wrong.',
    code: (error as any)?.code ?? 'UNKNOWN',
  };
};
