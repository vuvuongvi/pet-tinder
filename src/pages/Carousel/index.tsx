import { Carousel } from 'antd';
import React from 'react';
import styles from './styles.less';

class PetCareCarousel extends React.Component {
    render() {
        return (
            <Carousel className={styles.carousel}>
                <div>
                    <img src={require('../../image/petCartoon.jpg')} style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={require('../../image/petCarousel.jpg')} style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={require('../../image/petCartoon.jpg')} style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={require('../../image/petCarousel.jpg')} style={{ width: '100%' }} />
                </div>
            </Carousel >
        )
    }
}
export default PetCareCarousel;