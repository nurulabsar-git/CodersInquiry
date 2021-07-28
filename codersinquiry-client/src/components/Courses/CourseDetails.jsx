import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const {courseId} = useParams();

    return (
        <div>
          <h4>This is course {courseId} details page</h4>  
        </div>
    );
};

export default CourseDetails;