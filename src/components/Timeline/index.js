import * as React from 'react';
import { Typography } from '@mui/material';

//Timeline Components
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

//Card Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ColorsTimeline() {
  return (
    <Timeline position="alternate">
      {/* Robert Half / Credit Human Job Description */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card>
            <CardContent>
              <Typography align="center" variant="h6"> Antra Inc - Front End Developer </Typography>
              <Typography align="center" variant="h6"> May 2022 - Present </Typography>
              <Typography align="justify"> ● Implented code for review by senior engineers.</Typography> 
              <Typography align="justify"> ● Utlize a wide variety of coding languages to build REACT applications</Typography> 
              <Typography align="justify"> ● Used REST APIs to query and display data </Typography> 
              <Typography align="justify"> ● Worked on building a standalone component for component library project</Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card>
            <CardContent>
              <Typography align="center" variant="h6"> Credit Human - REACT Developer </Typography>
              <Typography align="center" variant="h6"> May 2021 - May 2022 </Typography>
              <Typography align="justify"> ● Collaborated with stakeholders to manage loan files and databases and prepare general correspondence.</Typography> 
              <Typography align="justify"> ● Redesigned/Modernized  MortgageFlex UI to fit MH Lending division requirements.</Typography> 
              <Typography align="justify"> ● Coordinated with CH Dev-Ops teams in San Antonio to unify and standardized coding and internal documentation. </Typography> 
              <Typography align="justify"> ● Communicated project status and deployment schedules with loan production department and R/D </Typography>
              <Typography align="justify"> ● Assisted in legacy upkeep of the Daybreak LOS</Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Card>
            <CardContent>
              <Typography align="center" variant="h6"> Commencement Bay Properties - Front-End Developer </Typography>
              <Typography align="center" variant="h6"> January 2020 - May 2021 </Typography>
              <Typography align="justify"> ● Collaborated with the investment team to produce an application that mimics RE brokerage firm’s CMA. </Typography>
              <Typography align="justify"> ● Utilized Zillow API to query and populate comparables based on SqFt, Year, Building style, address, price etc. </Typography>
              <Typography align="justify"> ● Included functions and methods that users can select to customize their search parameters. </Typography>
              <Typography align="justify"> ● Dynamic routing via React Router.</Typography>
            </CardContent>
          </Card></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Card>
            <CardContent>
              <Typography align="center" variant="h6"> DHS/SEATAC Airport - UI Developer </Typography>
              <Typography align="center" variant="h6"> April 2018 - November 2020 </Typography>
              <Typography align="justify"> ● Coordinated with TSA, DHS, Port of Seattle police, FAA and numerous other airline / vendors to help design graphic intensive billboards for SEATAC airport.</Typography>
              <Typography align="justify"> ● Developed a suite of wireframes for approval and review from both FSD (Federal Security Director) and Port officials. </Typography>
              <Typography align="justify"> ● Implemented both audio and visual cues on billboards to assist passengers with disabilities. Expanded on 508 - regulation  requirements.</Typography>
            </CardContent>
          </Card></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}