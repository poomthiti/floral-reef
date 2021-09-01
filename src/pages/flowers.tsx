import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  ContentContainer,
  LineAccountButton,
  FlowerCollection,
  Content
} from '@components'
import { withStyles } from '@material-ui/core/styles';
import { palette } from '@theme'
import { allProductData } from '@data'
import { PrimaryTitle } from '../components/CustomText'
import { Grid, Collapse, Slider } from '@material-ui/core'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const TextDiv = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${palette.primary.main};
  font-size: 14px;
  line-height: 24px;
`
const InquireContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  margin-top: 24px;
`
const InquireText = styled.div`
  font-size: 18px;
  color: ${palette.primary.main};
`
const Title = styled(PrimaryTitle)`
  margin: 24px 0 8px;
  font-size: 40px;
`
const MoreBottomPadding = styled(ContentContainer)`
  padding-bottom: 64px;
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const MenuDiv = styled.div`
  padding: 22px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
`
const FilterMenuDiv = styled(MenuDiv)`
  font-size: 24px;
`
const CollapseTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
const CollectionFilterList = styled.div`
  font-size: 14px;
  line-height: 1.8;
  cursor: pointer;
  opacity: 0.7;
  :hover {
    opacity: 0.4;
  }
`
const ListMargin = styled.div`
  margin-top: 16px;
`
const PriceDiv = styled(CollapseTitleDiv)`
  cursor: default;
  font-size: 14px;
  line-height: 1.8;
  opacity: 0.7;
`
const SliderContainer = styled.div`
  padding: 0 8px 0 10px;
`

const PrettoSlider = withStyles({
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -7,
    marginLeft: -10,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const Flowers = () => {
  const [collapse, setCollapse] = useState<{ collection: boolean, price: boolean }>({
    collection: true,
    price: true
  })
  const [priceRange, setPriceRange] = useState([700, 4200])

  const handleRangeChange = (_: any, newValue: any) => {
    setPriceRange(newValue);
  };

  return (
    <>
      <ContentContainer bgColor={palette.white}>
        <Title children="Flower Bouquet" />
        <TextDiv>
          ช่อดอกไม้ตามฤดูกาล ที่ทางร้านคัดสรรวัตถุดิบที่หลากหลาย ผสมพันธุ์ไม้ต่างๆไว้ด้วยกัน แต่ละช่วงพันธุ์และสีของดอกไม้อาจจะแตกต่างกัน โทนสีและชนิดในแต่ละช่วงเวลาที่สั่งอาจมีไม่ครบ ทางเราจะปรับเปลี่ยนให้เหมาะสมจากวัตถุดิบที่มี โดยที่โทนสีจะคงความใกล้เคียงเดิม อาจจะอ่อน/เข้ม หรือมีผสมเฉดอื่นบ้าง
        </TextDiv>
        <InquireContainer>
          <InquireText>
            สอบถามรายละเอียดเพิ่มเติมทาง
          </InquireText>
          <LineAccountButton />
        </InquireContainer>
      </ContentContainer>
      <MoreBottomPadding bgColor={palette.white}>
        <Content>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <MenuContainer>
                <FilterMenuDiv>
                  Filter by
                </FilterMenuDiv>
                <MenuDiv>
                  <CollapseTitleDiv onClick={() => setCollapse(prev => ({ ...prev, collection: !prev.collection }))}>
                    Collection
                    {collapse.collection ? <AddRoundedIcon fontSize="inherit" /> : <RemoveRoundedIcon fontSize="inherit" />}
                  </CollapseTitleDiv>
                  <Collapse in={!collapse.collection}>
                    <ListMargin />
                    <CollectionFilterList>
                      All
                    </CollectionFilterList>
                    <CollectionFilterList>
                      The Floral Reef Signature
                    </CollectionFilterList>
                    <CollectionFilterList>
                      Bouquets
                    </CollectionFilterList>
                    <CollectionFilterList>
                      Vases
                    </CollectionFilterList>
                    <CollectionFilterList>
                      Boxes
                    </CollectionFilterList>
                    <CollectionFilterList>
                      Dried Flowers
                    </CollectionFilterList>
                  </Collapse>
                </MenuDiv>
                <MenuDiv>
                  <CollapseTitleDiv onClick={() => setCollapse(prev => ({ ...prev, price: !prev.price }))}>
                    Price
                    {collapse.price ? <AddRoundedIcon fontSize="inherit" /> : <RemoveRoundedIcon fontSize="inherit" />}
                  </CollapseTitleDiv>
                  <Collapse in={!collapse.price}>
                    <ListMargin />
                    <SliderContainer>
                      <PrettoSlider
                        value={priceRange}
                        onChange={handleRangeChange}
                        step={150}
                        min={700}
                        max={4200}
                      />
                    </SliderContainer>
                    <PriceDiv>
                      <div>
                        {`฿${Number(priceRange[0])?.toFixed(2)}`}
                      </div>
                      <div>
                        {`฿${Number(priceRange[1])?.toFixed(2)}`}
                      </div>
                    </PriceDiv>
                  </Collapse>
                </MenuDiv>
              </MenuContainer>
            </Grid>
            <Grid item xs={9}>
              <FlowerCollection
                category=''
                products={allProductData}
                pageSize={12}
                gridSize={4}
              />
            </Grid>
          </Grid>
        </Content>
      </MoreBottomPadding>
    </>
  )
}

export default Flowers;