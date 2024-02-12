import NavItem from './NavItem'

export default function Nav (props) {
	const { setActivePage, items = [] } = props

	return (
		<div className="navegacao">
			{items.map(item => (
				<NavItem
					key={item.id}
					setActivePage={setActivePage}
					title={item.title}
					id={item.id}
				/>
			))}
		</div>
	)
}
