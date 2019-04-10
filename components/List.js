
const List = props =>
{

	const removeItem = (index) => {
	props.setItems(items => {
	const list = items.filter((item,j) => index !== item.id)
	return list
	})
	}

return (
	<ul>
    {
			props.items.map((item) => {
				return (
				<li key={item.id}>
		<div className="list-item">
		<span>
		<h4>{item.title}</h4>
		</span>
				<button className="btn-remove" onClick={() => removeItem(item.id)}>X</button>
		</div>
				</li>
				
				)
			}
			
			)
		}
  </ul>
)};

export default List;