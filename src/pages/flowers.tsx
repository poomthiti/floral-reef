import React, { useState, useMemo } from 'react'
import styled from '@emotion/styled'
import {
  ContentContainer,
  LineAccountButton,
  FlowerCollection,
  Content
} from '@components'
import { withStyles } from '@material-ui/core/styles';
import { palette } from '@theme'
import { allProductData, flowerData } from '@data'
import { PrimaryTitle } from '../components/CustomText'
import { Grid, Collapse, Slider } from '@material-ui/core'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import { Collection } from '@lib/enum'
import { useRouter } from 'next/router';
import { Product } from '@lib/types';

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
const CollectionContent = styled(Content)`
  margin-top: 24px;
`
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const BorderLessMenu = styled.div`
  padding: 22px 0;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
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
const CollectionFilterItem = styled.div<{ selected: boolean }>`
  font-size: 14px;
  font-weight: ${({ selected }) => selected ? 600 : 400};
  line-height: 1.8;
  cursor: pointer;
  opacity: ${({ selected }) => selected ? 1 : 0.75};
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

const PriceSlider = withStyles({
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
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

const collectionList = [
  {
    name: 'All',
    navigateQuery: Collection.ALL,
  },
  {
    name: 'The Floral Reef Signature',
    navigateQuery: Collection.SIGNATURE_COLLECTIONS,
  },
  {
    name: 'Bouquets',
    navigateQuery: Collection.BOUQUETS,
  },
  {
    name: 'Vases',
    navigateQuery: Collection.VASES,
  },
  {
    name: 'Boxes',
    navigateQuery: Collection.BOXES,
  },
  {
    name: 'Dried Flowers',
    navigateQuery: Collection.DRIED_FLOWERS,
  },
]

const Flowers = () => {
  const router = useRouter();
  const [collapse, setCollapse] = useState<{ collection: boolean, price: boolean }>({
    collection: true,
    price: true
  })
  const [priceRange, setPriceRange] = useState([700, 4200])

  const handleRangeChange = (_: any, newValue: any) => {
    setPriceRange(newValue);
    router.push(
      {
        pathname: '/flowers',
        query: {
          ...router.query,
          price: `${newValue[0]}-${newValue[1]}`
        }
      },
      undefined,
      { scroll: false, shallow: true }
    )
  };

  const collectionFilterList = collectionList.map((item) => {
    const navigateFunction = () => router.push(
      {
        pathname: '/flowers',
        query: {
          ...router.query,
          collection: item.navigateQuery
        }
      },
      undefined,
      { scroll: false, shallow: true }
    )
    const getSelected = () => {
      if (!router.query?.collection && item.navigateQuery === Collection.ALL) {
        return true
      }
      return item.navigateQuery === router.query?.collection
    }
    return (
      <CollectionFilterItem onClick={navigateFunction} selected={getSelected()} key={item.name}>
        {item.name}
      </CollectionFilterItem>
    )
  })

  const productDataList = useMemo(() => {
    let tempList: Product[] = allProductData;
    if (router.query?.collection) {
      const collection = router.query?.collection;
      if (collection !== Collection.ALL) {
        const target = flowerData.find(item => item.category === collection)
        if (target) {
          tempList = target.products
        }
      }
    }
    if (router.query?.price) {
      const priceRange = router.query?.price as string
      const [minPrice, maxPrice] = priceRange.split('-')
      const priceFilter = tempList.filter(item => (
        Number(item.price) >= Number(minPrice) && Number(item.price) <= Number(maxPrice)
      ))
      tempList = priceFilter;
    }
    return tempList;
  }, [router.query])

  return (
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
      <CollectionContent>
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
                  {collectionFilterList}
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
                    <PriceSlider
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
              {
                Object.keys(router.query).length !== 0 && (
                  <BorderLessMenu onClick={() => router.push('/flowers')}>
                    Clear filters X
                  </BorderLessMenu>
                )
              }
            </MenuContainer>
          </Grid>
          <Grid item xs={9}>
            <FlowerCollection
              category=''
              products={productDataList}
              pageSize={12}
              gridSize={4}
            />
          </Grid>
        </Grid>
      </CollectionContent>
    </ContentContainer>
  )
}

export default Flowers;