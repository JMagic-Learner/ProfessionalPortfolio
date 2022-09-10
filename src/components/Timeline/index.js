import * as React from 'react';
import { useState, useEffect } from 'react'
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
import { Box } from '@mui/system';

export default function ColorsTimeline() {
  const [currentColor, setcurrentColor] = useState("#053e85")


  return (
    <Timeline position="alternate" style={{ backgroundColor: currentColor }}
      className="timelineCard"
      onMouseEnter={() => setcurrentColor("white")}
      onMouseLeave={() => setcurrentColor("#053e85")}>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card

          >
            <CardContent>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> Antra Inc - Front End Developer </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> May 2022 - Present </Typography>
              <Box className="description-timeline">
                <Typography align="justify" fontSize={"1.5vh"}> ● Work closely with Product Owners, Analysts and QA in an Agile environment to ensure quality, security and maintenance of applications, and to ensure code meets development standards and guidelines.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"} > ● Develop, document, and advocate SOLID software architecture practices.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"} > ● Led a presentation on GraphQL implementation and usage in Apollo/Client and Apollo/Server.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"} > ●	Deployed GraphQL servers to live production in an extended responsibility with the full-stack developer team.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"} > ● Contribute to a DevOps culture and development of continuous integration processes and tools.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"} > ● Adhering to established methodologies while continuously analyzing processes for improved performance and adaptability.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Used JEST and Enzyme to create automated unit testing to ensure software quality.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Utilized GIT and NVM to manage version control.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Implemented Middleware and Thunk  in the project to fetch data from the back-end and also to perform RESTFUL services.
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Worked with Context-API and Redux - Toolkit to manage global state
                </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Used CSS Grid, MUI-React, Bootstrap to design responsive layouts
                </Typography>
                

              </Box>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
              {/* Robert Half / Credit Human Job Description */}
        <TimelineContent>
          <Card


          >
            <CardContent>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> Robert Half / Credit Human - Loan Processor </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> May 2021 - May 2022 </Typography>
              <Box className="description-timeline">
                <Typography align="justify" fontSize={"1.5vh"}> ● Collaborated with stakeholders to manage loan files and databases and prepare general correspondence.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Reviewed loan files for completeness, identified missing documentation and generated condition lists for applicants.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Generated loan documents, including flood/tax certificates, notes/security disclosures, escrow instructions etc. </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Evaulated income sources paystub, W2, 1099-R, Social Securty benefits, annuities etc.</Typography>
                <Typography align="justify" fontSize={"1.5vh"} > ● Audited and funded loans applications.</Typography>
              </Box>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card


          >
            <CardContent>

              <Typography align="center" variant="h6" fontSize={"2.0vh"}> Commencement Bay Properties LLC - Developer (Part Time) </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> January 2020 - May 2021 </Typography>
              <Box className="description-timeline">
                <Typography align="justify" fontSize={"1.5vh"}> ●	Worked with the investment team to produce an application that mimics RE brokerage firm’s CMA. </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ●	Included functions and methods that users can select to customize their search parameters. </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Used POSTman / Insomnia API design platform to test Zillow API queries. </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Designed a mobile application that prioritizes responsive design and ease of use via Bootstrap CDN..</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Implemented Middleware and Thunk in the project to fetch data from the back-end and also to perform RESTFUL services.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Built market estimation logic for properties that did not have enough comparable.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Listened to investor suggestions on how end-user UI should behave in edge cases.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Relied on Express and Node.JS to help facilitate server requests.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Created a backup CMA data store using Redux Toolkit, should investors ever have to estimate fair market value in areas with no internet / WIFI.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Built controlled components that can be easily customizable by-passing user defined props.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Provide value by integrating business rules and content in accordance with requirements.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Work closely with Product Owners, Analysts and QA in an Agile environment to ensure quality, security and maintenance of applications, and to ensure code meets development standards and guidelines.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Contribute to a DevOps culture and development of continuous integration processes and tools.</Typography>
              </Box>
            </CardContent>
          </Card></TimelineContent>
      </TimelineItem>
      {/* TSA Agent / ATLAS */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card


          >
            <CardContent>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> DHS - Transport Security Agent - ATLAS </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> April 2019 - May 2021 </Typography>
              <Box className="description-timeline">
                <Typography align="justify" fontSize={"1.5vh"}> ● Coordinated with TSA K9, TSA Inspectors, DHS Police , SeaTac Police, CBP and Port Authority to screen individuals, aircraft, and contractors.</Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Operated detecting devices to screen individuals and prevent passage of prohibited articles into restricted areas. </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Reported screening hours and incident data into logs for submission to STSO, maintaining high level of accuracy and detail.</Typography>
              </Box>
            </CardContent>
          </Card></TimelineContent>
      </TimelineItem>
      {/* Pactera Technologies */}
      <TimelineItem >
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent >
          <Card

          >

            <CardContent>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> Pactera Technologies - Junior Data Analyst </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> August 2018 - January 2019 </Typography>
              <Box className="description-timeline">
                <Typography align="justify" fontSize={"1.5vh"}> ● Planned and conceived computer systems using information engineering, data modeling and structured analysis. </Typography>
                <Typography align="justify" fontSize={"1.5vh"}> ● Investigated and addressed SQL system issues to enhance usability and improve functionality.</Typography>
              </Box>
            </CardContent>
          </Card></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}