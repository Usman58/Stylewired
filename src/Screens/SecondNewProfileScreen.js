import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/image 4.png";
import image5 from "../images/image 5.png";
import image6 from "../images/image 6.png";
import image7 from "../images/image 7.png";
import { Card} from "react-bootstrap";
import $ from 'jquery';
import {Link} from "react-router-dom";
import { HomeStyle } from '../Style/HomeStyle';


function SecondNewProfileScreen() {
  const classes = HomeStyle();
  const [cardActive, setcardActive] = useState('')
  const activeHandler = (a) => {
    var ins = $(a.target)[0].offsetParent
    var ID = $(ins).attr('id')
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setcardActive(ID)
  }

  return (
    <>
      <Grid container textAlign="center">
        <Grid item sm={12}>
          <h4 style={{ color: "green" }}>What's Your Pick,Andrew?</h4>
          <p style={{ color: "#848484" }}>Nice to meet you Andrew. Who would you like to style today?</p>
          
          <Grid container textAlign="center" spacing={8} px={12}>
            <Grid item xs={12} sm={6} md={3} mt={5}>
              <Card id='man' style={{ 
                borderColor: cardActive === 'man' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards' onClick={activeHandler}>
                <Card.Img src={image4} height='350' />
                <Card.Body>
                  <Card.Title>Man</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} mt={5}>
            <Card id='woman' style={{ 
                borderColor: cardActive === 'woman' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image5}  height='350' />
                <Card.Body>
                  <Card.Title>Woman</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} mt={5}>
            <Card id='boy' style={{ 
                borderColor: cardActive === 'boy' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image6} height='350' />
                <Card.Body>
                  <Card.Title>Boy</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} mt={5}>
            <Card id='girl' style={{ 
                borderColor: cardActive === 'girl' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image7} height='350' />
                <Card.Body>
                  <Card.Title>Girl</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
          <br />
          <Button className={classes.card_btn} component={Link} to="/whatsfemine" to={`/selectperson/${cardActive}`} 
            variant="contained"
            color="success"
            size="large"
            style={{ width: "31%" }}
          >
            Next
          </Button>
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default SecondNewProfileScreen;
