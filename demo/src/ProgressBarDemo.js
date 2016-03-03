import React from 'react';
import {ProgressBar} from '../../index';



/**
 *
 */
export default function ProgressBarDemo({value}) {
	return (
		<article className="pattern">
			<header>
				<h2 className="pattern-name">Progress bar</h2>
			</header>

			<div className="pattern-example">
				<ProgressBar value={value} />
			</div>
		</article>
	);
}
