import { QqOutlined } from "@ant-design/icons";
import { Col, Input, Layout, PageHeader, Row } from "antd";
import "./App.css";
import { EditorialCard } from "./components/editorial-card";
import data from "./data/editoriales.json";
import { IEditorial } from "./types/IEditorial";

const editoriales: IEditorial[] = data;
const { Search } = Input;

export const App = () => {
  //
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <PageHeader
          style={{
            fontWeight: "700",
            fontFamily: "Ubuntu",
            fontSize: "15px",
            backgroundColor: "#252525",
            color: "white",
            letterSpacing: "2px",
          }}
        >
          {/* <QqOutlined style={{ fontSize: "23px", paddingRight: "10px" }} />
          LAS EDITORIALES DEL POLLO */}
          <Col span={1} push={12}>
            <QqOutlined style={{ fontSize: "25px" }} />
          </Col>
        </PageHeader>
        <Row>
          <Col span={24} style={{ backgroundColor: "#f1f1f1" }}>
            <Col
              span={12}
              push={6}
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  fontWeight: "200",
                }}
              >
                {" "}
                Un rendido homenaje para el Chicken{" "}
              </h1>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col span={10} push={7} style={{ paddingTop: "80px" }}>
            <Search
              placeholder="Buscar editorial por nombre"
              allowClear
              style={{ width: "100%", paddingBottom: "60px" }}
            />
            <>
              {editoriales.map((e) => (
                <EditorialCard />
              ))}
            </>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default App;
