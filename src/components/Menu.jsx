import MenuItem from "./MenuItem";

export default function Menu ({ items = [] }) {
	return (
		<div className='menu'>
			{items.map(item => (
				<MenuItem key={item.id} {...item} />
			))}
		</div>
	)
}