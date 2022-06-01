import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getReports } from '../../api/AdminLoginAPiCall';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'reason', headerName: 'Reason', width: 250 },
  { field: 'reportedUser', headerName: 'Reported User Name', width: 130 },
  {
    field: 'reportID',
    headerName: 'Reported User Id',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, reason: 'Invalid ', reportedUser: 'Jon', reportID: 35 },
  { id: 2, reason: 'Unnecessary Post', reportedUser: 'Cersei', reportID: 42 },
  { id: 3, reason: 'Abusive Violation content', reportedUser: 'Jaime', reportID: 45 },
  { id: 4, reason: ' asjdnjsadn ', reportedUser: 'Arya', reportID: 16 },
  { id: 5, reason: 'Emptu ', reportedUser: 'Daenerys', reportID: 52 },
  { id: 6, reason: 'ssss', reportedUser: 'sss', reportID: 150 },
  { id: 7, reason: 'as dn andas', reportedUser: 'Ferrara', reportID: 44 },
  { id: 8, reason: 'ssss ', reportedUser: 'Rossini', reportID: 36 },
  { id: 9, reason: 'aaa', reportedUser: 'Harvey', reportID: 65 },
];

const ReportData = function () {
  const requestBody = { startCount: 0, limit: 15 };

  getReports(requestBody)
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err));

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
};

export default ReportData;
