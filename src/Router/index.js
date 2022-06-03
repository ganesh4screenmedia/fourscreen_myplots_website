import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, Navigate } from 'react-router';
import ContactUs from '../Pages/ContactUs';
import CopyRight from '../Pages/CopyRights';
import Privacy from '../Pages/PrivacyPolicy';
import Terms from '../Pages/TermsOfUse';
import AdminLogin from '../Pages/ReportData/AdminLogin';
import ScrollToTop from '../ScollToTop';
import Authenticate from '../Authenticate';
import ReportData from '../Pages/ReportData';

const Router = function () {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<CopyRight />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/ReportData" element={
            <Authenticate>
              <ReportData />
            </Authenticate>
          } />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default Router;
