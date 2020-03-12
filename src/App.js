import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Col, Row } from 'antd';

function App() {
  
  // data untuk dimasukkan pada card
  const cardData = [
    {
      title: "Alfarel Zaki",
      desc: "FrontEnd Developer"
    },
    {
      title: "Ahmad Rifal",
      desc: "FrontEnd Developer"
    },
    {
      title: "Fariz Albab",
      desc: "Fullstack Developer Kae"
    },
  ]

  const CardAnt = ()=> {
    return(
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {cardData.map (data =>
            <Col span={6}>
              <Card title={data.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p className="desc">{data.desc}</p>
              </Card>
            </Col>
          )}
        </Row>
      </div>
    )
  }
  
  // render component card, row, dan column
  return (
    <CardAnt/>
  );
}

export default App;
