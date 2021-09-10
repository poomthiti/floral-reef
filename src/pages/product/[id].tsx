import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
	ContentContainer,
	LineAccountButton,
	Content,
} from '@components'
import { palette } from '@theme'
import { allProductData } from '@data'
import { useRouter } from 'next/router'
import { Grid, Menu, MenuItem, Radio, RadioGroup } from '@material-ui/core'
import { Color, Size } from '@lib/enum'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Title = styled.div`
	font-size: 22px;
	margin-bottom: 16px;
`
const PriceTitle = styled.div`
	font-size: 20px;
	margin-bottom: 18px;
`
const Description = styled.div`
	font-size: 14px;
`
const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
`
const InfoContainer = styled(ContentDiv)`
	padding: 28px 0;
`
const BorderInfoContainer = styled(InfoContainer)`
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const InfoTitle = styled.div`
	font-size: 18px;
	margin-bottom: 16px;
`
const BulletDiv = styled(ContentDiv)`
	line-height: 24px;
	font-size: 14px;
`
const SizeColorTitle = styled.div`
	font-size: 18px;
	margin-bottom: 8px;
`
const SizeColorDiv = styled(ContentDiv)`
	margin-bottom: 20px;
	width: 100%;
`
const CustomRadioGroup = styled(RadioGroup)`
	flex-direction: row;
`
const LineButtonMargin = styled.div`
	margin-top: 20px;
`
const CustomRadio = styled(Radio) <{ selected?: boolean }>`
	padding: 0px;
	margin-right: 8px;
	transition: box-shadow 0.1s linear;
	${({ selected }) => !selected && `
		:hover {
			box-shadow: 0 0 0 1px #000000;
		}
	`}
`
const RadioIcon = styled.div<{ buttoncolor: string }>`
	border: 1px solid #c9c9c9;
	background-color: ${({ buttoncolor }) => buttoncolor};
	width: 20px;
	height: 20px;
	border-radius: 50%;
`
const RadioBorder = styled.div<{ selected?: boolean }>`
	padding: 2px;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: ${({ selected }) => selected && '0 0 0 1px #000000'};
`
const SelectComponent = styled.div`
	width: 100%;
	height: 45px;
	border: 1px solid rgba(192, 192, 192, 0.6);
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 12px;
	cursor: pointer;
	font-size: 18px;
`
const ArrowDownIcon = styled(KeyboardArrowDownIcon) <{ open?: any }>`
	color: rgb(68, 68, 68);

	${({ open }) => open && `
		transform: rotate(180deg);
	`}
`
const StyledMenuItem = styled(MenuItem)`
	font-size: 18px;
`

const colorMap = {
	'Orange': '#E36600',
	'Red': '#e15757',
	'Light Orange': '#FFC36A',
	'Cream': '#FFF8E9',
	'Pastel': '#ffffff',
	'Navy White': '#0d5b86',
	'Colorful': '#FF8E8E',
	'Navy': '#002680',
	'Peach': '#ffb18b',
	'Emperor Red': '#820000',
	'Brown': '#8e3b0e',
	'Blue': '#61A8FF',
	'Pink': '#FF5A77',
	'White': '#ffffff',
	'Yellow': '#FFD200'
}

const Product = () => {
	const router = useRouter()
	const { id } = router.query
	const productData = allProductData.find(el => el.id === id)
	const [selectedColor, setSelectedColor] = useState<Color | undefined>(productData?.color[0])
	const [selectedSize, setSelectedSize] = useState<Size | undefined>(productData?.size[0])
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedColor(event.target.value as Color)
	}
	const handleSizeChange = (value: Size) => {
		setSelectedSize(value);
		setAnchorEl(null);
	}

	const handleSelectClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<ContentContainer bgColor={palette.white}>
				<h1>PENDING IMAGE GALLERY</h1>
				<Content>
					<Grid container spacing={8}>
						<Grid item xs={8}>
							<ContentDiv>
								<Title>
									{productData?.itemName}
								</Title>
								<Description>
									{productData?.description}
								</Description>
								<BorderInfoContainer>
									<InfoTitle>
										PRODUCT INFO
									</InfoTitle>
									<BulletDiv>
										{productData?.productInfo.map(item => (<div key={item}>-{item}</div>))}
									</BulletDiv>
								</BorderInfoContainer>
								<InfoContainer>
									<InfoTitle>
										SHIPPING INFO
									</InfoTitle>
									<BulletDiv>
										<div>-ค่าจัดส่งคิดตามระยะทาง โปรดเช็คกับทางร้านล่วงหน้า</div>
										<div>-จัดส่งทั่วกรุงเทพและเขตที่บริการขนส่งให้บริการ</div>
										<div>-บริการขนส่ง Lalamove/ Grab express bike/ Grab express car</div>
									</BulletDiv>
								</InfoContainer>
								<span style={{ fontSize: '14px' }}>
									*Delivery cost by distance*
								</span>
							</ContentDiv>
						</Grid>
						<Grid item xs={4}>
							<ContentDiv>
								<PriceTitle>
									{`฿${Number(productData?.price).toFixed(2)}`}
								</PriceTitle>
								<SizeColorDiv>
									<SizeColorTitle>
										Color: {selectedColor}
									</SizeColorTitle>
									<CustomRadioGroup
										aria-label="color"
										name="colorGroup"
										value={selectedColor}
										onChange={handleColorChange}
									>
										{productData?.color.map(color => (
											<CustomRadio
												key={color}
												selected={selectedColor === color}
												value={color}
												inputProps={{ 'aria-label': color }}
												color="default"
												disableRipple
												icon={
													<RadioBorder>
														<RadioIcon buttoncolor={colorMap[color]} />
													</RadioBorder>
												}
												checkedIcon={
													<RadioBorder selected={selectedColor === color}>
														<RadioIcon buttoncolor={colorMap[color]} />
													</RadioBorder>
												}
											/>
										))}
									</CustomRadioGroup>
								</SizeColorDiv>
								<SizeColorDiv>
									<SizeColorTitle>
										Size
									</SizeColorTitle>
									<SelectComponent onClick={handleSelectClick}>
										{selectedSize || <div></div>}
										<ArrowDownIcon open={anchorEl} />
									</SelectComponent>
									<Menu
										id="size-menu"
										anchorEl={anchorEl}
										keepMounted
										open={Boolean(anchorEl)}
										onClose={handleClose}
										getContentAnchorEl={null}
										anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
										transformOrigin={{ vertical: "top", horizontal: "left" }}
										transitionDuration={0}
										PaperProps={{
											style: {
												border: '1px solid rgba(192, 192, 192, 0.6)',
												borderRadius: 4,
												width: '282px',
											}
										}}
									>
										{productData?.size.map(size => (
											<StyledMenuItem key={size} onClick={() => handleSizeChange(size)}>{size}</StyledMenuItem>
										))}
									</Menu>
								</SizeColorDiv>
								<LineButtonMargin />
								<LineAccountButton theme="secondary" />
							</ContentDiv>
						</Grid>
					</Grid>
				</Content>
			</ContentContainer>
		</>
	)
}

export default Product;