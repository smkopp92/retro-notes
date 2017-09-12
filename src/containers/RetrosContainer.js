import React              from 'react';
import { connect }        from 'react-redux';
import styled             from 'styled-components';

import { getRetros }      from '../actions/getRetros';
import { addRetro }       from '../actions/addRetro';

import RetroList          from '../components/RetroList';
import RetroForm          from '../components/RetroForm';

const Wrapper = styled.div`

`;

class RetrosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.getRetros();
  }

  handleSubmit(newRetro){
    this.props.addRetro(newRetro);
  }

  render(){
    return (
      <Wrapper>
        <RetroList retros={this.props.retros} />
        <RetroForm onSubmit={this.handleSubmit} />
      </Wrapper>
    )
  }
}

let mapStateToProps = state => {
  return {
    retros: state.retros.retrievedRetros
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getRetros: () => dispatch(getRetros()),
    addRetro: (newRetro) => dispatch(addRetro(newRetro))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RetrosContainer);
