import {compose, withState, withHandlers} from 'recompose';
import {noop} from 'lodash';
import ToggleButton from './ToggleButton';



/**
 *
 */
const enhance = compose(
	withState(
		'pressed',
		'setPressed',
		({defaultPressed = 0}) =>
			defaultPressed
	),
	withHandlers({
		onToggle: ({setPressed, onToggle = noop}) =>
			(pressed) => {
				setPressed(pressed);
				onToggle(pressed);
			}
	})
);



export default enhance(ToggleButton);

