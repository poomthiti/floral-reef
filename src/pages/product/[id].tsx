import React from 'react'
import styled from '@emotion/styled'
import {
	ContentContainer,
	LineAccountButton,
	FlowerCollection,
	Content,
} from '@components'
import { palette } from '@theme'
import { allProductData } from '@data'
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core'

const Title = styled.div`
	font-size: 24px;
`
const ContentDiv = styled.div`
	display: flex;
	flex-direction: column;
`
const Product = () => {
	const router = useRouter()
	const { id } = router.query

	const productData = allProductData.find(el => el.id === id)

	return (
		<>
			<ContentContainer bgColor={palette.white}>
				<h1>PENDING IMAGE GALLERY</h1>
				<Content>
					<Grid container>
						<Grid item xs={8}>
							<ContentDiv>
								<Title>

								</Title>
							</ContentDiv>
						</Grid>
						<Grid item xs={4}>

						</Grid>
					</Grid>
				</Content>
			</ContentContainer>
		</>
	)
}

export default Product;