import { useState } from 'react';
import List from '../components/List'
import Layout from '../components/Layout'

const Index = () => {
	return <TodoCard />;
}

const TodoCard = () => {
	const [term, setTerm] = useState('');
	const [items, setItems] = useState([])
	
	const onChange = event => setTerm(event.target.value)

  const onSubmit = (event) => {
    event.preventDefault();
		if (term) {
			setTerm('')
			setItems([...items, term])
		}
	}
	
	return (
		<Layout>
		<div className="card">
		<div className="card-title">
	<h2>TODO LIST</h2>
		</div>
		<form className="" onSubmit={onSubmit}>
          <input placeholder="Enter todo" value={term} onChange={onChange} />
          <button><h2 className="btn-add">+</h2></button>
    </form>
				<List items={items} setItems={setItems} />
		</div>
	</Layout>
	)
}


export default Index;