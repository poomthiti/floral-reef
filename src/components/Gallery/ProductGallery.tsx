import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import { palette } from '@theme'
import { AnimatePresence, motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin-top: calc(59vh + 18px);
`
const Thumbnail = styled.div<{ selected?: boolean }>`
  height: 48px;
  width: 48px;
  margin-right: 12px;
  border: 1px solid #BFBFBF;

  ${({ selected }) => selected && `
    border: none;
    box-shadow: #000 0px 0px 0px 1px, ${palette.primary.dark} 0px 0px 0px 3px;
  `}
`
const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`
const CurrentImage = styled(motion.img)`
  height: 59vh;
  width: auto;
  display: block;
  position: absolute;
`

interface GalleryProps {
  images: string[]
}

export const ProductGallery = ({ images = [] }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  useEffect(() => {
    if (images) {
      setSelectedImage(images[0])
    }
  }, [images])

  return (
    <Container>
      <AnimatePresence initial={false}>
        <CurrentImage
          key={selectedImage}
          src={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, zIndex: 1 }}
          exit={{ opacity: 0, zIndex: 0 }}
          transition={{ opacity: { duration: 0.4 } }}
        />
      </AnimatePresence>
      <ThumbnailContainer>
        {images?.map((img) => (
          <Thumbnail
            key={img}
            onClick={() => setSelectedImage(img)}
            selected={selectedImage === img}
          >
            <ThumbImage
              src={img}
            />
          </Thumbnail>
        ))}
      </ThumbnailContainer>
    </Container>
  )
}

