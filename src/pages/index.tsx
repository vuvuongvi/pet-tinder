import React from 'react';
import PetCareMenu from './Menu/index';
import PetCareCarousel from './Carousel/index';
import { Row, Col } from 'antd';
import styles from './index.less';

export default () => {
  return (
    <div>
      <Row>
        <Col span={24}>
        <PetCareMenu></PetCareMenu>
        </Col>
        <Col span={24}>
        <PetCareCarousel></PetCareCarousel>
        </Col>
        <Col span={24}>
          <img src={require('../image/petCarousel.jpg')} style={{ width: '100%' }} />
        </Col>
      </Row>
      
    </div>
  );
}
