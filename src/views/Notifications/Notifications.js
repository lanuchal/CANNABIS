import React from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";

// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <Box display="flex" p={1}>
                <Box p={1} flexGrow={1}>
                  <h4 className={classes.cardTitle}>ถังน้ำ</h4>
                </Box>
                <Box p={1}>
                  <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
              </Box>
            </CardHeader>
            <CardBody>
              <p className={classes.cardCategory}>รายละเอียด .....</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> เวลาที่ อัปเดตล่าสุด
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <Box display="flex" p={1}>
                <Box p={1} flexGrow={1}>
                  <h4 className={classes.cardTitle}>ถังปุ๋ย</h4>
                </Box>
                <Box p={1}>
                  <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
              </Box>
            </CardHeader>
            <CardBody>
              <p className={classes.cardCategory}>รายละเอียด .....</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> เวลาที่ อัปเดตล่าสุด
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <Box display="flex" p={1}>
                <Box p={1} flexGrow={1}>
                  <h4 className={classes.cardTitle}>ออกซิเจน</h4>
                </Box>
                <Box p={1}>
                  <Switch
                    checked={state.checkedC}
                    onChange={handleChange}
                    name="checkedC"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
              </Box>
            </CardHeader>
            <CardBody>
              <p className={classes.cardCategory}>รายละเอียด .....</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> เวลาที่ อัปเดตล่าสุด
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <Box display="flex" p={1}>
                <Box p={1} flexGrow={1}>
                  <h4 className={classes.cardTitle}>ปล่อยน้ำ</h4>
                </Box>
                <Box p={1}>
                  <Switch
                    checked={state.checkedD}
                    onChange={handleChange}
                    name="checkedD"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
              </Box>
            </CardHeader>
            <CardBody>
              <p className={classes.cardCategory}>รายละเอียด .....</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> เวลาที่ อัปเดตล่าสุด
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <Box display="flex" p={1}>
                <Box p={1} flexGrow={1}>
                  <h4 className={classes.cardTitle}>คาร์บอนไดออกไซด์</h4>
                </Box>
                <Box p={1}>
                  <Switch
                    checked={state.checkedE}
                    onChange={handleChange}
                    name="checkedE"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
              </Box>
            </CardHeader>
            <CardBody>
              <p className={classes.cardCategory}>รายละเอียด .....</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> เวลาที่ อัปเดตล่าสุด
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <Box display="flex" p={1}>
                <Box p={1} flexGrow={1}>
                  <h4 className={classes.cardTitle}>ปั้มน้ำ</h4>
                </Box>
                <Box p={1}>
                  <Switch
                    checked={state.checkedF}
                    onChange={handleChange}
                    name="checkedF"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
              </Box>
            </CardHeader>
            <CardBody>
              <p className={classes.cardCategory}>รายละเอียด .....</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> เวลาที่ อัปเดตล่าสุด
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
