
/* IMPORT */

import * as fetchPlugin from 'autogit-plugin-fetch';

/* FETCH */

type options = {
  remote: string,
  branch: string
};

function fetch ( customOptions?: Partial<options> ) {

  return {
    description: 'Fetch from the remote',
    plugins: [
      fetchPlugin ( customOptions )
    ]
  };

}

/* EXPORT */

export default fetch;
