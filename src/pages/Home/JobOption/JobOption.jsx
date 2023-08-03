import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'aos/dist/aos.css';
const JobOption = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobData.json').then(res => res.json()).then(data => setJobs(data))
    }, [])

    return (
        <Container>
            <Row className='my-5 p-3 gap-5 mx-auto'>
                <p className='fw-bolder fs-1 text-center mb-3'>Salary and Role</p>
                <p className='fw-bold fs-3 text-center mb-3'>Discover tens of thousands of employment options with the necessary knowledge.</p>
                {
                    jobs.map(job =>
                        <Col xs={6} md={5} className='me-5'>
                            <Card data-aos="fade-right" className='me-3 gap-3' style={{width: "40rem", height:"35rem"}}>
                                <Card.Img variant="top" src={job.logo} className='w-25 h-25 text-center p-3' />
                                <Card.Body>
                                    <Card.Title><span className='fw-bold'>Title: </span>{job.job_title}</Card.Title>
                                    <Card.Text><span className='fw-bold'>Company Name:</span> {job.company_name}</Card.Text>
                                    <Card.Text><span className='fw-bold'>Location:</span> {job.location}</Card.Text>
                                    <Card.Text><span className='fw-bold'>Description:</span> {job.job_description}</Card.Text>
                                    <Card.Text><span className='fw-bold'>Responsibility:</span> {job.job_responsibility}</Card.Text>
                                    <Card.Text><span className='fw-bold'>Salary:</span>{job.salary}</Card.Text>
                                    <Button variant="primary">Go Details</Button>

                                </Card.Body>
                            </Card>
                        </Col>)
                }
            </Row>
        </Container>
    );
};


export default JobOption;