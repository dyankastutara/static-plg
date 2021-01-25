import React from 'react'
import { Modal, Button, Input, Table } from 'antd'

const { Search } = Input
const columns = [{
  dataIndex: 'img',
  width: 2,
},{
  dataIndex: 'produk',
  width: 150,
}]
const data = []
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    img: <img className='img'alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>,
    produk:<div><p>Ini Judul Produk</p><p>Rp {20000 * i}</p></div>
  })
}

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
}

export default class AddLink extends React.Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible })
  }

  render() {
    return (
      <div>
        <Button type='primary' onClick={ () => this.setModalVisible(true)}>Tambahkan Link Produk</Button>
        <Modal
          title="Lampirkan Produk"
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible}
          onOk={ () => this.setModalVisible(false)}
          onCancel={ () => this.setModalVisible(false)}
        >
          <Search placeholder='Cari' style={{ width:'100%', marginBottom:'10px' }}/>
          <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ y: 300 }} />
          </div>
        </Modal>
      </div>
    )
  }
}
