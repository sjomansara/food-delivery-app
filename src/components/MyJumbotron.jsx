import Jumbotron from 'react-bootstrap/Jumbotron';
import { Col, Container, Row } from 'react-bootstrap';
import PillButton from './PillButton';

const MyJumbotron = () => {
    const pillText = 'Order now';
    return (
        <Container>
        <Jumbotron className="mx-5" style={{ backgroundColor: "white", marginTop: "7rem" }}>
        <Row>
        <Col md={5} className="mx-5">
        <h1 className='mb-3 text-start jumboHeader'>Enjoy a <span className='veryDelicious'>very delicious</span> food delivery within 
            30 minutes</h1>
        <p className='text-start jumboText text-muted mb-4'>
        Don’t worry about cooking tonight, we will take care of it for you. Just sit back and relax.
        </p>
        <PillButton text={pillText} />
        </Col>
        <Col md={6}>
            <img style={{maxWidth: "25rem" }}src="images/onlinegroceries.svg"/>
        </Col>
        </Row>
        </Jumbotron>
        </Container>
    )
}

export default MyJumbotron