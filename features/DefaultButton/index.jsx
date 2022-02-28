import React from 'react'
import { Button } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"
import colors from '../theme/colors'


export default function DefaultButton({children, ...restProps}) {
	const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)")


	const buttonProps = isLargerThan1024 ? {
		fontSize: '14px'
	} : {
		fontSize: '12px'
	}

	

	return (
		<Button bgColor={colors.mainColor} colorScheme="blue" color="#fff" {...buttonProps} {...restProps} >{children}</Button>
	)
}
