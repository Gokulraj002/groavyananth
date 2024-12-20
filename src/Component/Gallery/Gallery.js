// src/Gallery.js
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Card, Modal, Row, Col, Spin, Button, Empty } from 'antd';
import { ReloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomArrow = ({ direction, onClick }) => (
  <Button 
    icon={direction === 'left' ? <LeftOutlined /> : <RightOutlined />}
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      [direction]: '10px',
    }}
  />
);

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPostImages = useCallback(async () => {
    const postIds = [45, 30];

    try {
      setLoading(true);
      setError(null);
      const allImageUrls = [];

      for (const postId of postIds) {
        const response = await axios.get(
          `https://info.groavy.com/wp-json/wp/v2/posts/${postId}`
        );
        const content = response.data.content.rendered;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;

        const imgTags = tempDiv.getElementsByTagName('img');
        const imageUrls = Array.from(imgTags).map((img) => img.src);

        allImageUrls.push(...imageUrls);
      }

      setImages(allImageUrls);
    } catch (error) {
      console.error('Error fetching post images:', error);
      setError('Failed to load images. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchPostImages();
  }, [fetchPostImages]);

  const showModal = (index) => {
    setCurrentImageIndex(index);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchPostImages();
  };

  const handleImageError = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = null;
      return newImages;
    });
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImageIndex,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Empty
        description={error}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      >
        <Button type="primary" onClick={handleRefresh} icon={<ReloadOutlined />}>
          Try Again
        </Button>
      </Empty>
    );
  }

  return (
    <div className="container mt-4 bg-light">
      <h1 className='font1 fs-2'>Explore Our Stunning Gallery</h1>
      <Row gutter={[16, 16]}>
        <Col span={24} style={{ textAlign: 'right', marginBottom: '16px' }}>
          <Button
            type="primary"
            icon={<ReloadOutlined spin={refreshing} />}
            onClick={handleRefresh}
            loading={refreshing}
          >
            Refresh
          </Button>
        </Col>
        {images.map((imageUrl, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            {imageUrl ? (
              <Card
                hoverable
                cover={
                  <img
                    alt={`Gallery item ${index + 1}`}
                    src={imageUrl} 
                    className='rounded-0'
                    width={'100%'}
                    height={'auto'}
                    style={{ objectFit: 'cover' }}
                    onError={() => handleImageError(index)}
                  />
                }
                onClick={() => showModal(index)}
                bodyStyle={{ padding: 0 }}
              />
            ) : (
              <Card>
                <Empty description="Image not available" image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </Card>
            )}
          </Col>
        ))}
      </Row>

      <Modal
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        width={820}
      >
        <Slider {...sliderSettings} key={currentImageIndex}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Full view ${index + 1}`}
                style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Slider>
      </Modal>
    </div>
  );
};

export default Gallery;
