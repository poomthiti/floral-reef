import React from 'react'
import styled from '@emotion/styled'
import { palette } from '@theme'
import { Typography } from '@material-ui/core'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 220px;
  height: 220px;
`

const StatusBox = styled.div`
  padding: 8px 10px;
  background-color: ${palette.primary.light};
  z-index: 9;
`

const StatusText = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ItemName = styled(Typography)`
  margin: 16px 0;
`
const PriceText = styled(Typography)`
  color: #404040;
  font-size: 18px;
`

interface CardProps {
  staticImage: string
  hoverImage: string
  itemName: string
  status: 'Best Seller' | 'New in' | ''
  price: string
}

export const FlowerCard: React.FC<CardProps> = ({
  staticImage,
  hoverImage,
  itemName,
  status,
  price
}) => {
  const [displayImage, setDisplayImage] = React.useState<string>(staticImage);
  const defaultPrice = Number(price) || 0
  return (
    <CardContainer>
      <div>
        <Image
          src={displayImage}
          onMouseOver={() => setDisplayImage(hoverImage)}
          onMouseOut={() => setDisplayImage(staticImage)}
        />
        {status && (
          <StatusBox>
            <StatusText children={status} />
          </StatusBox>
        )}
      </div>
      <ItemName children={itemName} />
      <PriceText children={`฿${Number(defaultPrice.toFixed(2)).toLocaleString('en-US')}`} />
    </CardContainer>
  )
}
