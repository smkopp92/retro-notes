import React          from 'react';
import { Button }     from 'react-bootstrap';
import { connect }    from 'react-redux';
import { deleteRetro } from '../actions/deleteRetro';

class DeleteRetroButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.deleteRetro(this.props.retroId)
  }

  render(){
    return(
      <Button className="block" onClick={this.handleClick}>X</Button>
    )
  }
}

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = dispatch => {
  return {
    deleteRetro: (retroId) => dispatch(deleteRetro(retroId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRetroButton);
