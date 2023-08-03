import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const JobFeatured = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('job.json').then(res => res.json()).then(data => setJobs(data))
    })
    return (
        <Container>
            <Row className='my-5'>
                <h1 className='fw-bolder fs-1 text-center mb-2'>Job Category</h1>
                    {
                        jobs.map(job =>
                            <Col xs={6} md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={job.logo} className='w-50 text-center p-3' />
                                <Card.Body>
                                    <Card.Title>{job.Job_title}</Card.Title>
                                    <Card.Text>
                                        {job.job_available}
                                    </Card.Text>
                                    <Button variant="primary">Go Details</Button>
                                </Card.Body>
                            </Card>
                            </Col>)
                    }
                
            </Row>
        </Container>
    );
};

export default JobFeatured;