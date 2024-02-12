export default function MenuItem (props) {
	const { name, price, image, description } = props

	return (
		<div className="container-item-cardapio">
			<div >
				<h2>{name}</h2>
				<p>{price}</p>
				<p>{description}</p>
			</div>
			{image && <img src={image} alt={name} />}
    </div>
	)
}