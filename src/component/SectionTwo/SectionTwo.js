import React from 'react';
import './SectionTwo.css';
import {Button, Col, Row} from "react-bootstrap";


function SectionOne() {
    return (
        <div className="job-search-section">
            <Row className="justify-content-center">
                <Col className="justify-content-center">
                    <h1 className='heading'>Why Choose FindHer
                    </h1>
                    <h2 className='sub-heading'>FindHer is your partner in career success.
                        We help you find the job of your dreams.</h2>

                </Col>
            </Row>

        </div>
    );
}

export default SectionOne;
