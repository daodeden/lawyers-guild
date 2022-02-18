import React from 'react'
import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function Header() {
	return (
		<header>
			<Flex  justifyContent="space-between">
				<Flex>
					<Link href="/">
					Лого
					</Link>
				</Flex>
				<Flex>
					<Link href="/price">
						Цены
					</Link>
				</Flex>
				<Flex>3</Flex>
			</Flex>
		</header>
	)
}
