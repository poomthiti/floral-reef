import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Typography, Grid } from '@material-ui/core';
import { palette } from '@theme';
import { Content, FlowerCard } from '@components';
import { Collection } from '@lib/enum'
import { Product, Category } from '@lib/types'
import Pagination from '@material-ui/lab/Pagination';

const CollectionTitle = styled(Typography)`
  color: ${palette.primary.light};
  font-size: 20px;
  margin-bottom: 18px;
  align-self: flex-start;
  font-weight: 600;
`
const CustomPagination = styled(Pagination)`
  margin-top: 70px;
`

const categoryMap = {
  'Signature Collections': 'Signature Collection Bouquets',
  'Bouquets': 'Flower Bouquets',
  'Vases': 'Flower Vases',
  'Boxes': 'Flower Boxes',
  'Dried Flowers': 'Dried Flowers',
  '': '',
}

interface Props {
  category: Category;
  products: Product[] | [];
  pageSize: number
}

export const FlowerCollection: React.FC<Props> = ({
  category,
  products,
  pageSize
}) => {
  const [page, setPage] = useState<number>(1);
  const [productPaging, setProductPaging] = useState<Product[] | []>(products.slice(0, pageSize));
  const handleChange = (_: any, value: number) => {
    setPage(value);
    const sliceStart = (value - 1) * pageSize
    setProductPaging(products.slice(sliceStart, sliceStart + pageSize))
  };
  const pageNumber = Math.ceil(products.length / pageSize)

  return (
    <Content>
      <CollectionTitle children={categoryMap[category]} />
      <Grid container spacing={3}>
        {productPaging?.map((item) => {
          const {
            staticImage,
            hoverImage,
            itemName,
            status,
            price
          } = item
          return (
            <Grid item md={3} key={itemName}>
              <FlowerCard
                staticImage={staticImage}
                hoverImage={hoverImage}
                itemName={itemName}
                status={status}
                price={price}
              />
            </Grid>
          )
        })}
      </Grid>
      <CustomPagination
        color="primary"
        count={pageNumber}
        siblingCount={1}
        onChange={handleChange}
        page={page}
      />
    </Content>
  )
}