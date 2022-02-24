import React from 'react'
import { Fragment } from 'react'
import {Row, Col} from 'react-bootstrap'
import '../css/profile.css'
import blob from '../img/blob.svg'
import {Button} from '@material-ui/core'

const Profile = () => {
    return (
        <Fragment>
          <a name="profile"></a>
          <p className='side-text-profile'>PERFIL</p>
          <h2 className="section-heading">Sobre mim</h2>
          <h3 className="section-quote">"A dor passa, mas o orgulho fica."</h3>
          <hr/>
        <Row>
          <Col lg={7} md={7} xs={12} className='profile-text'> 
          <p>Oi, meu nome é Flavio Aro, sou desenvolvedor de softwares, apaixonado por programação, por ter a possibilidade de criar e de entregar algo que não existia antes. Eu simplesmente amo código!</p>
          
          </Col>
          <Col lg={5} md={5} className='profile-photo'>
            {/* <img src={blob} alt='' className='blob'/> */}
            <img src="https://avatars.githubusercontent.com/u/35077695?v=4" alt="Flavio Aro" className="profile-img" />
            <br/><br/>
            <center><a href="https://drive.google.com/file/d/1lEj87l-_Mjjs87wtpFoduZreTCxgZmBK/view?usp=sharing" target="_blank">
                <Button className='project-btn'>Resume</Button>
            </a></center>
          </Col>
        </Row>
        
      </Fragment>
    )
}

export default Profile
