import React from 'react'
import styled from '@emotion/styled'
import { palette } from '@theme'
import { Typography } from '@material-ui/core'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
`
const ImageDiv = styled.div`
  width: 220px;
  height: 220px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const StatusBox = styled.div`
  padding: 8px 10px;
  background-color: ${palette.primary.light};
  z-index: 9;
  position: absolute;
  top: 0;
`

const StatusText = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${palette.white};
`
const ItemName = styled(Typography)`
  margin: 12px 0 4px;
  font-size: 14px;
`
const PriceText = styled(Typography)`
  color: #404040;
  font-size: 16px;
`

interface CardProps {
  staticImage: string
  hoverImage: string
  itemName: string
  status: 'Best Seller' | 'New in' | ''
  price: string
  onCardClick: () => void;
}

export const FlowerCard: React.FC<CardProps> = ({
  staticImage,
  hoverImage,
  itemName,
  status,
  price,
  onCardClick
}) => {
  const defaultPrice = Number(price) || 0
  return (
    <CardContainer onClick={onCardClick}>
      <ImageDiv>
        <Image
          src={staticImage}
          onMouseOver={(e) => e.currentTarget.src = hoverImage}
          onMouseOut={(e) => e.currentTarget.src = staticImage}
          alt={itemName}
        />
        {status && (
          <StatusBox>
            <StatusText children={status} />
          </StatusBox>
        )}
      </ImageDiv>
      <ItemName children={itemName} />
      <PriceText children={`฿${(defaultPrice.toLocaleString(undefined, { minimumFractionDigits: 2 }))}`} />
    </CardContainer>
  )
}
