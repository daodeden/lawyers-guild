import React from 'react'
import Link from 'next/link'

export default function Services(props) {

	return (
		<>
			{props.data.services.map(service => (
				<Link href={`${props.data.slug}/${service.slug}`} key={service.slug}>
				{service.title}
				</Link>
			))}
		</>
	)
}
