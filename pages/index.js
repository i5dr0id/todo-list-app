import { useState } from 'react';
import List from '../components/List'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => {
	return <TodoCard todos={props.todos} />;
}

const TodoCard = (props) => {
	const [term, setTerm] = useState('');
	const [items, setItems] = useState(props.todos)
	
	const onChange = event => setTerm(event.target.value)

  const onSubmit = (event) => {
    event.preventDefault();
		if (term) {
			setTerm('')
			setItems([...items, {id:items.length+1, title:term}])
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

Index.getInitialProps = async function() {
	const res = await fetch(`http://localhost:3000/api/v1/todo`)
	const data = await res.json()
	return {
		todos: data
	}
}

export default Index;