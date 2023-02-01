import React, {FC} from 'react';
import {CircularProgress, Stack} from "@mui/material";

const Loading: FC = () => {
  return (
    <Stack direction="row" alignItems="center" m={"10px 0"}>
      <CircularProgress color="primary" size={25} sx={{mr: 1}}/> <strong>Идёт загрузка...</strong>
    </Stack>
  );
};

export default Loading;