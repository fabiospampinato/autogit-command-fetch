
/* IMPORT */

import * as fetchPlugin from 'autogit-plugin-fetch';

/* FETCH */

type options = {
  remote: string,
  branch: string
};

function fetch ( customOptions?: Partial<options> ) {

  return {
    description: 'A command for fetching from a remote.',
    plugins: [
      fetchPlugin ( customOptions )
    ]
  };

}

/* EXPORT */

export = Object.assign ( fetch, { default: fetch } );
