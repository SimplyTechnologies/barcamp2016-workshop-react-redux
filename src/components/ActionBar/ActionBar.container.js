import { connect } from 'react-redux';

import { load, reset } from 'redux/modules/weather';
import ActionBar from './ActionBar';

export default connect(null, { load, reset })(ActionBar);
