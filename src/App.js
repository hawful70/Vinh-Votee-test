import { Layout, Row, Col } from 'antd';
import WordleForm from 'components/WordleForm/WordleForm';
import WordleList from 'components/WordleList/WordleList';

const App = () => {
  const { Content } = Layout;
  return (
    <div className="App">
      <Layout className="wordle-content">
        <Content>
          <div className="middle-content">
            <Row gutter={[24, 24]} justify="center" className='mt-12'>
              <Col xs={24} md={8} sm={24}>
                <WordleForm />
              </Col>
            </Row>
            <Row gutter={[24, 24]} className='mt-12'>
              <Col xs={24} md={24} sm={24}>
                <WordleList />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
