import "uno.css"

import { render } from "solid-js/web"

function App() {
	return <>
		<div class="[color:red]">Hello, world!</div>
		<div class="[&>*]:[color:red]">
			<div>Hello, world!</div>
			<div>Hello, world!</div>
			<div>Hello, world!</div>
			<div>Hello, world!</div>
		</div>
	</>
}

render(() => <App />, document.getElementById("root")!)
