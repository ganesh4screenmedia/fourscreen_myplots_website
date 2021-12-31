import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoader } from '../../Store/actions';
import CustomModal from '../CustomModal';

const Loader = function () {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const loader = useSelector((state) => state.common.loader);
  const dispatch = useDispatch();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const onClose = () => {
    dispatch(setLoader(false));
  };

  return (
    <CustomModal
      open={loader}
      modalHeight={height}
      modalWidth={width}
      left="50%"
      backgroundColor="transparent"
      onClose={onClose}
    >
      <div
        style={{
          color: '#4F299D',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <CircularProgress color="inherit" />
      </div>
    </CustomModal>
  );
};

export default Loader;
