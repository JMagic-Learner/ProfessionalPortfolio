import * as React from 'react';
import {useState,useEffect} from 'react'
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
    <Timeline position="alternate"  style={{backgroundColor: currentColor }} 
    className="timelineCard"
    onMouseEnter={() => setcurrentColor("white")}
   onMouseLeave={() => setcurrentColor("#053e85")}>
      {/* Robert Half / Credit Human Job Description */}
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
              <Typography  align="justify" fontSize={"1.5vh"}> ● Implented code for review by senior engineers.</Typography> 
              <Typography  align="justify" fontSize={"1.5vh"} > ● Utlize a wide variety of coding languages to build REACT applications</Typography> 
              <Typography  align="justify" fontSize={"1.5vh"} > ● Used REST APIs to query and display data </Typography> 
              <Typography  align="justify" fontSize={"1.5vh"}> ● Worked on building a standalone component for component library project</Typography>
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
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> Robert Half / Credit Human - Loan Processor </Typography>
              <Typography align="center" variant="h6"fontSize={"2.0vh"}> May 2021 - May 2022 </Typography>
              <Box className="description-timeline">
              <Typography  align="justify" fontSize={"1.5vh"}> ● Collaborated with stakeholders to manage loan files and databases and prepare general correspondence.</Typography> 
              <Typography  align="justify" fontSize={"1.5vh"}> ● Reviewed loan files for completeness, identified missing documentation and generated condition lists for applicants.</Typography> 
              <Typography  align="justify" fontSize={"1.5vh"}> ● Generated loan documents, including flood/tax certificates, notes/security disclosures, escrow instructions etc. </Typography> 
              <Typography  align="justify" fontSize={"1.5vh"}> ● Evaulated income sources paystub, W2, 1099-R, Social Securty benefits, annuities etc.</Typography>
              <Typography  align="justify" fontSize={"1.5vh"} > ● Audited and funded loans applications.</Typography>
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
      
              <Typography  align="center" variant="h6" fontSize={"2.0vh"}> Commencement Bay Properties - Analyst Administrator (Part Time) </Typography>
              <Typography align="center" variant="h6" fontSize={"2.0vh"}> January 2020 - May 2021 </Typography>
              <Box className="description-timeline">
              <Typography  align="justify" fontSize={"1.5vh"}> ● Invested in high-potential real estate properties. </Typography>
              <Typography  align="justify" fontSize={"1.5vh"}> ● Oversaw the expenditures for renovations. </Typography>
              <Typography  align="justify" fontSize={"1.5vh"}> ● Cross analyzed market trends to optimize final sale price. </Typography>
              <Typography  align="justify" fontSize={"1.5vh"}> ● Negotiated with contractors and real estate agents.</Typography>
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
              <Typography  align="justify" fontSize={"1.5vh"}> ● Coordinated with TSA K9, TSA Inspectors, DHS Police , SeaTac Police, CBP and Port Authority to screen individuals, aircraft, and contractors.</Typography>
              <Typography  align="justify" fontSize={"1.5vh"}> ● Operated detecting devices to screen individuals and prevent passage of prohibited articles into restricted areas. </Typography>
              <Typography  align="justify" fontSize={"1.5vh"}> ● Reported screening hours and incident data into logs for submission to STSO, maintaining high level of accuracy and detail.</Typography>
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
              <Typography  align="justify" fontSize={"1.5vh"}> ● Planned and conceived computer systems using information engineering, data modeling and structured analysis. </Typography>
              <Typography  align="justify" fontSize={"1.5vh"}> ● Investigated and addressed SQL system issues to enhance usability and improve functionality.</Typography>
              </Box>
            </CardContent>
          </Card></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}