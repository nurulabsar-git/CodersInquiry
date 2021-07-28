import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const {courseId} = useParams();

   const style= {
       textAlign: 'center',
       padding: '50px',
    }
    return (
        <Container>
          <h4 style={style}>This is course {courseId} details page</h4>  
        </Container>
    );
};

export default CourseDetails;