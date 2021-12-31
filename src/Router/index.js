import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router';
import CopyRight from '../Pages/CopyRights';
import Privacy from '../Pages/PrivacyPolicy';
// import Terms from '../Pages/TermsOfUse';

const Router = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CopyRight />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Privacy />} />
      </Routes>
    </div>
  );
};

export default Router;
