import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'
import { auth } from '../config/firebaseConfig'
import firebase from "firebase"

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

const SignIn = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <Button variant='primary' onClick={signInWithGoogle}>Sign with Google</Button>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SignIn
