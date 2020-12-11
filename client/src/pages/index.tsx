import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import People from './people';
import Peoples from './peoples';
import { PageContainer } from '../components';

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Peoples path="/" />
          <People path="people/:peopleId" />
        </Router>
      </PageContainer>
      
    </Fragment>
  );
}
