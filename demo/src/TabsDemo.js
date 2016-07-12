import React from 'react';
import {StatefulTabs, TabPanel} from '../../src';



/**
 *
 */
export default function TabsDemo() {
	return (
		<article className="Pattern">
			<header>
				<h2 className="Pattern-name">Tabs</h2>
			</header>

			<ul className="Pattern-interactions">
				<li className="Pattern-interaction">
					<span>Activate the previous tab</span>
					<span>
						<kbd title="Left arrow">←</kbd>
						<kbd title="Up arrow">↑</kbd>
					</span>
				</li>
				<li className="Pattern-interaction">
					<span>Activate the next tab</span>
					<span>
						<kbd title="Right arrow">→</kbd>
						<kbd title="Down arrow">↓</kbd>
					</span>
				</li>
			</ul>

			<div className="Pattern-example">
				<DummyTabs orientation="horizontal" />
			</div>

			<div className="Pattern-example">
				<DummyTabs orientation="vertical" />
			</div>
		</article>
	);
}

/**
 *
 */
function DummyTabs(props) {
	return (
		<StatefulTabs defaultActive="first" {...props}>
			<TabPanel name="first" title="First">
				<p>First panel's contents.</p>
			</TabPanel>

			<TabPanel name="second" title="Second">
				<p>
					Second panel's contents with a
					<a href="#tabs">link</a> inside.
				</p>
			</TabPanel>

			<TabPanel name="third" title="Third">
				<p>
					Third panel's contents with a
					<button>button</button> inside.
				</p>
			</TabPanel>
		</StatefulTabs>
	);
}
