import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CustomTabPanel from './TabPanel';


const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CustomTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AntTabs value={value} onChange={handleChange} aria-label="ant example">
        <AntTab label="NEW" />
        <AntTab label="USERS" />
        <AntTab label="VENDOR" />
        <AntTab label="PRICE MATRIX" />
      </AntTabs>
      <CustomTabPanel value={value} index={0}>
        NEW
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        USERS
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        VENDOR
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        PRICE MATRIX
      </CustomTabPanel>
    </div>
  );
};

export default CustomTabs;
