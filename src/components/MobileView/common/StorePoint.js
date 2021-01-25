import React from 'react';
import { FaDiamond, FaStar } from 'react-icons/lib/fa'
import {
  Tooltip
} from 'antd';

export default class StorePoint extends React.Component {
  state={
    fontSize:16,
    color: '#0066ff',
    margin: '0 1px 0 0'
  }
  componentDidMount(){
    const {style}=this.props;
    if(style){
      if(style.fontSize){
        this.setState({
          fontSize:style.fontSize
        })
      }
      if(style.color){
        this.setState({
          color:style.color
        })
      }
      if(style.margin){
        this.setState({
          margin:style.margin
        })
      }
    }
  }
  render() {
    const {point} = this.props;
    const {fontSize,color, margin}= this.state;
    return (
      <div style={{height:20}}>
        <Tooltip placement="topLeft" title={`${point} Point`}>
        {
          point < 5 ? (
            <div style={{display:'flex', fontSize}}>
             <FaStar style={{color:'grey', margin}} />
            </div>
          ) :point >= 5 && point <= 20? (
            <div style={{display:'flex', fontSize}}>
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
            </div>
          ) : point >= 21 && point <= 50 ? (
            <div style={{display:'flex', fontSize}}>
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
            </div>
          ) : point >= 51 && point <= 100 ? (
            <div style={{display:'flex', fontSize}}>
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
            </div>
          ) : point >= 101 && point <= 200 ? (
            <div style={{display:'flex', fontSize}}>
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
            </div>
          ) : point >= 201 && point <= 450 ? (
            <div style={{display:'flex', fontSize}}>
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
              <FaStar style={{backgroundColor:'#ff9900', color:'#fff', margin, border:'1px solid #ff9900', borderRadius:'50%'}} />
            </div>
          ) : point >= 451 && point <= 1000 ? (
            <div style={{display:'flex', fontSize}}>
              <FaDiamond style={{color, margin}} />
            </div>
          ) : point >= 1001 && point <= 1500 ? (
            <div style={{display:'flex', fontSize}}>
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
            </div>
          ) : point >= 1501 && point <= 3000 ? (
            <div style={{display:'flex', fontSize}}>
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
            </div>
          ) : point >= 3001 && point <= 5000 ? (
            <div style={{display:'flex', fontSize}}>
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
            </div>
          ) : (
            <div style={{display:'flex', fontSize}}>
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
              <FaDiamond style={{color, margin}} />
            </div>
          )
        }
        </Tooltip>
      </div>
    )
  }
}
