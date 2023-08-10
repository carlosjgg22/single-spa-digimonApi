import { useState, useEffect, React } from "react";
import { ConsultarApiDigimon } from "./ConsultApiDigimon";
import { Card, Col, Row } from "antd";
const { Meta } = Card;
const ListarDigimon = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setData(await ConsultarApiDigimon());
    };
    fetchApi();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.map((digimon, index) => (
        <Row gutter={3}>
          <Col span={2}>
            <Card
              key={digimon.id}
              title={digimon.name}
              hoverable
              style={{
                width: 300,
                margin: 10,
              }}
              cover={
                <img alt={digimon.image} src={digimon.image} key={digimon.id} />
              }
            >
              {<Meta key={index} description={digimon.href} />}
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};
export default ListarDigimon;
