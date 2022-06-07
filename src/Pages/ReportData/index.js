import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles, createStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { Modal } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { setLoader } from '../../Store/actions';
import './reportData.css';
import userImage from '../../assests/images/user.png';

const axios = require('axios');

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& .MuiDataGrid-renderingZone': {
        maxHeight: 'none !important',
      },
      '& .MuiDataGrid-cell': {
        // overflow: 'auto',
        lineHeight: '18px !important',
        maxHeight: 'none !important',
        height: 'auto !important',
        whiteSpace: 'initial !important',
        textAlign: 'center',
        display: 'flex !important',
        alignItems: 'center',
        paddingTop: '5px! important',
        paddingBottom: '5px !important',
        justifyContent: 'center',
      },
      '& .MuiDataGrid-row': {
        whiteSpace: 'initial !important',
      },
      '& .MuiDataGrid-cell--textLeft': {
        justifyContent: 'center',
      },
    },
  })
);

const tabOptions = { userReports: 'User Reports', plotReports: 'Plot Reports' };

const ReportData = function () {
  const token = localStorage.getItem('token');
  const [userReports, setUserReports] = React.useState([]);
  const [plotReports, setPlotReports] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState(tabOptions.userReports);
  const [showPlotDetails, setShowPlotDetails] = React.useState(false);
  const [showPlotList, setShowPlotList] = React.useState(false);
  const [currentPlot, setCurrentPlot] = React.useState({});
  const plotDetailsRef = React.useRef([]);
  const [offset, setOffset] = React.useState(0);
  const currentPlotRef = React.useRef(0);
  const styles = useStyles();
  const dispatch = useDispatch();
  const matches750px = useMediaQuery("(max-width:750px)");

  const getUserReportRows = () => {
    if (userReports?.length > 0) {
      const rows = userReports.map((report, index) => ({
        id: index + 1,
        reason: report?.reason,
        plotDetails: report?.onReportUser?.userId,
        onReportUserUserId: report?.onReportUser?.userId,
        onReportUserEmail: report?.onReportUser?.email,
        onReportUserMobile: report?.onReportUser?.mobile,
        onReportUserUserName: report?.onReportUser?.userName,
        reportedUserEmail: report?.reporterUser?.email,
        reportedUserMobile: report?.reporterUser?.mobile,
        reportedUserUserId: report?.reporterUser?.userId,
        reportedUserUserName: report?.reporterUser?.userName,
      }));

      return rows;
    }

    return [];
  };

  const getPlotReportRows = () => {
    if (plotReports?.length > 0) {
      const rows = plotReports?.map((report, index) => ({
        id: index + 1,
        reason: report?.reason,
        plotId: report?.reportPlots?.plotId,
        onReportUserUserId: report?.onReportUser?.userId,
        onReportUserUserName: report?.onReportUser?.userName,
        onReportUserEmail: report?.onReportUser?.email,
        onReportUserMobile: report?.onReportUser?.mobile,
        reportedUserUserId: report?.reporterUser?.userId,
        reportedUserUserName: report?.reporterUser?.userName,
        reportedUserEmail: report?.reporterUser?.email,
        reportedUserMobile: report?.reporterUser?.mobile,
      }));

      return rows;
    }

    return [];
  };

  React.useEffect(() => {
    dispatch(setLoader(true));
    const config = {
      method: 'get',
      url: `https://api.myplots.co/dev/getReports?startCount=${0}&limit=${0 + 10}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (token) {
      axios(config)
        .then((res) => {
          setPlotReports(res?.data.allReports?.plotReports);
          setUserReports(res?.data.allReports?.userReports);
        })
        .catch((error) => console.log(error))
        .finally(() => dispatch(setLoader(false)));
    }
  }, [token, dispatch]);

  const renderPlotDetailsButton = (param) => (
    <Button
      variant="contained"
      color="primary"
      size="small"
      style={{ fontSize: 12, color: 'white', backgroundColor: 'grey', textTransform: 'capitalize' }}
      onClick={() => {
        currentPlotRef.current = 0;
        if (activeTab === tabOptions.userReports) {
          setCurrentPlot(userReports[param.id - 1]?.onReportUser?.userPlots[currentPlotRef.current])
          plotDetailsRef.current = userReports[param.id - 1]?.onReportUser?.userPlots;
          setShowPlotList(true);
        } else {
          setCurrentPlot(plotReports[param.id - 1]?.reportPlots)
          plotDetailsRef.current = [plotReports[param.id - 1]?.reportPlots];
          setShowPlotDetails(true);
        }
      }}
    >
      Plot Details
    </Button>
  );

  const getUserReportColumns = [
    { field: 'id', headerName: 'Sl No', width: 80 },
    { field: 'reason', headerName: 'Reason', width: 200 },
    {
      field: 'plotDetails',
      headerName: 'Plot Details',
      width: 150,
      renderCell: renderPlotDetailsButton,
    },
    { field: 'onReportUserUserId', headerName: 'On Reported User Id', width: 200 },
    { field: 'onReportUserUserName', headerName: 'On Reported User Name', width: 200 },
    { field: 'onReportUserEmail', headerName: 'On Reported User Email', width: 200 },
    { field: 'onReportUserMobile', headerName: 'On Reported User Mobile No.', width: 200 },
    { field: 'reportedUserUserId', headerName: 'Reported User Id', width: 200 },
    { field: 'reportedUserUserName', headerName: 'Reported User Name', width: 200 },
    { field: 'reportedUserEmail', headerName: 'Reported User Email', width: 200 },
    { field: 'reportedUserMobile', headerName: 'Reported User Mobile No.', width: 200 },
  ];

  const getPlotReportColumns = [
    { field: 'id', headerName: 'Sl No', width: 80 },
    { field: 'reason', headerName: 'Reason', width: 200 },
    { field: 'plotId', headerName: 'Plot Details', width: 150, renderCell: renderPlotDetailsButton },
    { field: 'onReportUserUserId', headerName: 'Host User Id', width: 150 },
    { field: 'onReportUserUserName', headerName: 'Host User Name', width: 200 },
    { field: 'onReportUserEmail', headerName: 'Host Email', width: 200 },
    { field: 'onReportUserMobile', headerName: 'Host Mobile No.', width: 200 },
    { field: 'reportedUserUserId', headerName: 'Reported User Id', width: 200 },
    { field: 'reportedUserUserName', headerName: 'Reported User Name', width: 200 },
    { field: 'reportedUserEmail', headerName: 'Reported User Email', width: 200 },
    { field: 'reportedUserMobile', headerName: 'Reported User Mobile No.', width: 200 },
  ];

  const handleOnPlotReportsTabClick = () => {
    if (activeTab === tabOptions.userReports) {
      setActiveTab(tabOptions.plotReports);
    }
  };
  const handleOnUserReportsTabClick = () => {
    if (activeTab === tabOptions.plotReports) {
      setActiveTab(tabOptions.userReports);
    }
  };

  const getRowLength = (reasonLength, plotAddressLength) => {
    let height = 50;

    if (reasonLength > plotAddressLength) {
      if (height < reasonLength * 1.1) {
        height = reasonLength * 1.1;
      }
    } else if (height < plotAddressLength * 1.1) {
      height = plotAddressLength * 1.1;
    }

    return height;
  };

  const plotDetails = (plot) => (
    <>
      <div
        style={{
          position: 'absolute',
          width: '70%',
          maxWidth: '500px',
          height: 'fit-content',
          maxHeight: '80%',
          minWidth: '250px',
          left: matches750px ? '15%' : 'calc((100% - 500px)/2)',
          top: '10%',
          padding: '20px',
          display: 'block',
          overflow: 'scroll',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'white',
        }}
      >
        <div className="modal-header-container">
          <div className="modal-header">
            <img
              alt="Plot"
              style={{
                minHeight: '150px',
                minWidth: '200px',
                maxHeight: '200px',
                maxWidth: '250px',
                width: '50%',
                height: '40%',
                objectFit: 'contain',
              }}
              src={
                plot?.plotImage || plot?.profileImage ||
                'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
              }
            />
          </div>
          <div
            className="modal-header"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '15px',
              marginLeft: matches750px ? '0px' : '20px',
            }}
          >
            <span
              style={{
                fontSize: '20px',
                marginTop: '10px',
                color: 'rgba(0, 0, 0, 0.5)',
                fontWeight: 'bold',
              }}
            >
              {plot?.plotName}
            </span>
            <span style={{ fontSize: '16px', margin: '10px 0px', color: 'rgba(0, 0, 0, 0.5)' }}>
              {plot?.details}
            </span>
          </div>
        </div>
        {plot?.comments ? (
          <div style={{ width: '95%', display: 'flex', flexDirection: 'column', padding: 10 }}>
            <p style={{ fontSize: '16px', margin: '5px' }}>Comments</p>
            {plot?.comments?.map((comment, index) => (
              <div
                key={index.toString()}
                style={{
                  margin: '10px 0px',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '5px 5px',
                }}
              >
                <div className="user-image-container">
                  <img alt="user" className="user-image" src={comment?.profileImage || userImage} />
                  <div className="user-name-container">
                    <span
                      style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '14px', fontWeight: 'bold' }}
                    >
                      {comment?.userName}
                    </span>
                    <span style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '12px', marginTop: '2px' }}>
                      {comment?.comment}
                    </span>
                  </div>
                </div>
                {comment?.replies &&
                  comment?.replies?.map((reply, ind) => (
                    <div
                      key={ind.toString()}
                      style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}
                    >
                      <div className="user-image-container">
                        <img
                          alt="user"
                          className="user-image"
                          src={
                            reply?.profileImage ||
                            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
                          }
                        />
                        <div className="user-name-container">
                          <span
                            style={{
                              color: 'rgba(0, 0, 0, 0.5)',
                              fontSize: '14px',
                              fontWeight: 'bold',
                            }}
                          >
                            {reply?.userName}
                          </span>
                          <span
                            style={{
                              color: 'rgba(0, 0, 0, 0.5)',
                              fontSize: '12px',
                              marginTop: '2px',
                            }}
                          >
                            {reply?.reply}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              width: '95%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: 10,
            }}
          >
            <p style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '14px' }}>No comments </p>
          </div>
        )}
      </div >
      {
        (activeTab === tabOptions.userReports && plotDetailsRef.current?.length > 1) && (
          <div style={{
            position: 'absolute', bottom: '4%', left: '32%', width: '40%', minWidth: '200px', height: '5%', backgroundColor: 'transparent', display: 'flex',
            justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'
          }}>
            <Button
              disableTouchRipple
              disabled={currentPlotRef === 0}
              variant="text"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '30%',
                height: '80%',
                maxWidth: '120px',
                color: 'black',
                textTransform: 'none',
                fontSize: '16px',
                backgroundColor: 'white'
              }}
              onClick={() => {
                if (currentPlotRef.current > 0) {
                  currentPlotRef.current -= 1;
                  setCurrentPlot(plotDetailsRef.current[currentPlotRef.current]);
                }
              }}
            >
              Back
            </Button>
            <Button
              disableTouchRipple
              disabled={currentPlotRef + 1 === plotDetailsRef.current?.length}
              variant="text"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '30%',
                maxWidth: '120px',
                height: '80%',
                color: 'black',
                textTransform: 'none',
                fontSize: '16px',
                backgroundColor: 'white'
              }}
              onClick={() => {
                if (plotDetailsRef.current?.length > currentPlotRef.current + 1) {
                  currentPlotRef.current += 1;
                  setCurrentPlot(plotDetailsRef.current[currentPlotRef.current]);
                }
              }
              }
            >
              Next
            </Button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '30%',
                maxWidth: '120px',
                height: '80%',
                color: 'white',
                textTransform: 'none',
                fontSize: '16px',
              }}
            >
              {`${currentPlotRef.current + 1} of ${plotDetailsRef.current?.length}`}
            </div>
          </div >
        )
      }
    </ >
  
  );

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <div
        style={{
          width: '100%',
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: '40px',
            borderBottom:
              activeTab === tabOptions.userReports ? '2px solid #808080' : '2px solid transparent',
          }}
        >
          <Button
            disableTouchRipple
            variant="text"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 40,
              color: 'black',
              textTransform: 'none',
              fontSize: 18,
            }}
            onClick={handleOnUserReportsTabClick}
          >
            {tabOptions.userReports}
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
            height: 40,
            borderBottom:
              activeTab === tabOptions.plotReports ? '2px solid #808080' : '2px solid transparent',
          }}
        >
          <Button
            disableTouchRipple
            variant="text"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 40,
              color: 'black',
              textTransform: 'none',
              fontSize: 18,
            }}
            onClick={handleOnPlotReportsTabClick}
          >
            {tabOptions.plotReports}
          </Button>
        </div>
      </div>
      <div style={{ width: '100%', height: '100%', padding: 20, flexDirection: 'column' }}>
        <div style={{ height: '650px', width: '100%' }}>
          {activeTab === tabOptions.userReports ? (
            <DataGrid
              className={styles.root}
              rows={getUserReportRows()}
              columns={getUserReportColumns}
              getRowHeight={(item) =>
                getRowLength(item.model.reason?.length, item.model.reportedUserEmail?.length)
              }
            />
          ) : (
            <DataGrid
              className={styles.root}
              rows={getPlotReportRows()}
              columns={getPlotReportColumns}
              getRowHeight={(item) =>
                getRowLength(item.model.reason?.length, item.model.plotAddress?.length)
              }
            />
          )}
        </div>
      </div>
      <Modal
        open={activeTab === tabOptions.userReports ? showPlotList : showPlotDetails}
        onClose={() => activeTab === tabOptions.userReports ? setShowPlotList(false) : setShowPlotDetails(false)}
        onBackdropClick={() =>
          activeTab === tabOptions.userReports ? setShowPlotList(false) : setShowPlotDetails(false)
        }
      >
        {
          currentPlot && plotDetails(currentPlot)
        }
      </Modal>
    </div >
  );
};

export default ReportData;
