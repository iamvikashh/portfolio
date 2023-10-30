import React from 'react';
// import resume from 'resume.pdf';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Hero = (props) => (
  <>
  <Section row nopadding>
      <LeftSection>
        <SectionTitle main center> 
          Hey, This is <br />
          Himanshu Bhadoria
          </SectionTitle>
        <SectionText>
        I am a Front-End developer with hands on skills in making user interfaces for web and android applications.
        </SectionText>
        <div classname="button">
        <a href="/resume.pdf" download="resume.pdf">
          <button style={buttonStyle}>Download Resume</button>
        </a>
        
        </div>
        <br></br>
      </LeftSection>
    </Section>
  
  </>
);

export default Hero;
