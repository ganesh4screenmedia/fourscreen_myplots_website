import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router';
import CopyRight from '../Pages/CopyRights';

const Router = function () {
  return (
    <div>
      <Routes>
        <Route path="/copy_rights" element={<CopyRight />} />
      </Routes>
    </div>
  );
};

export default Router;
