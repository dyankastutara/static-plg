import React from 'react'
import {List} from 'antd';

import ReviewCard from './ReviewCard'

class ReviewPage extends React.Component {
  state={
    data:[],
    page_number:1,
    page_size:5
  }

  render () {
    const {page_size, page_number} = this.state;
    const pagination = {
      pageSize: page_size,
      current: page_number,
      total: 20,
      onChange: ((e) => {
        this.setState({
          page_number:e,
        })
      }),
    };
    return (
      <List
        style={{minHeight:'100vh', margin:10}}
        itemLayout="vertical"
        size="large"
        pagination={pagination}
        dataSource={[0,1,2]}
        renderItem={(item,i) => (
          <ReviewCard />
        )}
      />
    )
  }
}

export default ReviewPage;
