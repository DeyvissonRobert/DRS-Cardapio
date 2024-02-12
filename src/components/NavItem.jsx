export default function NavItem (props) {
	const { setActivePage, title, id } = props
	const key = `pagina-${id}`

	const handlePage = () => {
		setActivePage(id)
	}

	return (
		<>
			<input type="radio" name="opcao-pagina" id={key} defaultChecked onClick={handlePage} />
			<label htmlFor={key}>{title}</label>
		</>
	)
}
