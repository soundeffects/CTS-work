import React from 'react';

class Content extends React.Component {
  render () {
    const data = this.props.data;
    return <p>
      Once there was a <b>{data.col}</b> bear. He ran across the country, encountering all sorts of <b>{data.plu}</b>.
      These <b>{data.adj} {data.plu}</b> influenced <b>{data.pro}</b> very much, and due to that the bear then looked
      for a <b>{data.nou}</b> out of curiosity. <b>{data.cel}</b> found him along the way and went with <b>{data.pro}</b>. Eventually
      they found the <b>{data.nou}</b> and the bear and <b>{data.cel}</b> were both very happy.
    </p>;
  }
}

export default Content;