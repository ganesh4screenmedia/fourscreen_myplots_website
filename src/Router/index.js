import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes, Navigate } from 'react-router';
import ContactUs from '../Pages/ContactUs';
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
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Router;
