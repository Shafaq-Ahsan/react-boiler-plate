import { connect } from 'react-redux';
import Login from '../components/login';
import { loadInitialState } from '../store/actions/loadInitialState';

function mapStateToProps(state) {
  //here we are mapping the redux state to props so we can use it in our components
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  //Those will be the actions we will be Triggerening from Components
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;