import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Counter = ({
	counter,
	inc,
	dec,
	rnd
}) => {
	return (
		<>
			<h2 id="counter">{counter}</h2>

			<button
				onClick={dec}
				className="btn btn-primary btn-lh"
			>DEC</button>

			<button
				onClick={inc}
				className="btn btn-primary btn-lh"
			>INC</button>

			<button
				onClick={rnd}
				className="btn btn-primary btn-lh"
			>RND</button>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		counter: state
	};
};

const mapDispatchToProps = (dispatch) => {
	const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

	return {
		inc,
		dec,
		rnd,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);