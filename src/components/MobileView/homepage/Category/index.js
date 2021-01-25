import React from 'react';
import { Card } from 'antd';
import { WingBlank } from 'antd-mobile';

const categories = [
  {
      "id": 1,
      "name": "Alat Tulis Kantor",
      "url": "/c/alat-tulis-kantor",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/ATK.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:25:01.335Z",
      "updatedAt": "2017-09-01T18:25:01.335Z"
  },
  {
      "id": 2,
      "name": "Buku",
      "url": "/c/buku",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/BUKU.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:25:52.652Z",
      "updatedAt": "2017-09-01T18:25:52.652Z"
  },
  {
      "id": 3,
      "name": "Fashion Wanita",
      "url": "/c/fashion-wanita",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Fashion+Wanita.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:26:44.811Z",
      "updatedAt": "2017-09-01T18:26:44.811Z"
  },
  {
      "id": 4,
      "name": "Fashion Pria",
      "url": "/c/fashion-pria",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Fashion+Pria.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:26:49.606Z",
      "updatedAt": "2017-09-01T18:26:49.606Z"
  },
  {
      "id": 5,
      "name": "Fashion Muslim",
      "url": "/c/fashion-muslim",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Fashion+Muslim.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:26:55.574Z",
      "updatedAt": "2017-09-01T18:26:55.574Z"
  },
  {
      "id": 6,
      "name": "Fashion Anak",
      "url": "/c/fashion-anak",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Fashion+Anak.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:26:59.954Z",
      "updatedAt": "2017-09-01T18:26:59.954Z"
  },
  {
      "id": 7,
      "name": "Kesehatan",
      "url": "/c/kesehatan",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Kesehatan.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:27:29.135Z",
      "updatedAt": "2017-09-01T18:27:29.135Z"
  },
  {
      "id": 8,
      "name": "Kecantikan",
      "url": "/c/kecantikan",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Kecantikan.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:27:34.701Z",
      "updatedAt": "2017-09-01T18:27:34.701Z"
  },
  {
      "id": 9,
      "name": "Elektronik",
      "url": "/c/elektronik",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Elektronik.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:27:45.793Z",
      "updatedAt": "2017-09-01T18:27:45.793Z"
  },
  {
      "id": 10,
      "name": "Komputer dan Aksesoris",
      "url": "/c/komputer-dan-aksesoris",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Komputer+dan+aksesoris.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:27:51.436Z",
      "updatedAt": "2017-09-01T18:28:17.119Z"
  },
  {
      "id": 11,
      "name": "Laptop dan Aksesoris",
      "url": "/c/laptop-dan-aksesoris",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Laptop+dan+aksesoris.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:28:38.483Z",
      "updatedAt": "2017-09-01T18:28:38.483Z"
  },
  {
      "id": 12,
      "name": "Handphone dan Tablet",
      "url": "/c/handphone-dan-tablet",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Hp+dan+tablet.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:29:10.938Z",
      "updatedAt": "2017-09-01T18:29:10.938Z"
  },
  {
      "id": 13,
      "name": "Kamera",
      "url": "/c/kamera",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Kamera.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:29:29.992Z",
      "updatedAt": "2017-09-01T18:29:29.992Z"
  },
  {
      "id": 14,
      "name": "Game",
      "url": "/c/game",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Game.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:29:34.088Z",
      "updatedAt": "2017-09-01T18:29:34.088Z"
  },
  {
      "id": 15,
      "name": "Rumah Tangga",
      "url": "/c/rumah-tangga",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Rumah+tangga.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:29:45.589Z",
      "updatedAt": "2017-09-01T18:29:45.589Z"
  },
  {
      "id": 16,
      "name": "Makanan dan Minuman",
      "url": "/c/makanan-dan-minuman",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Makanan+dan+minuman.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:30:20.014Z",
      "updatedAt": "2017-09-01T18:30:20.014Z"
  },
  {
      "id": 17,
      "name": "Olahraga",
      "url": "/c/olahraga",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Olahraga.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:30:26.959Z",
      "updatedAt": "2017-09-01T18:30:26.959Z"
  },
  {
      "id": 18,
      "name": "Otomotif",
      "url": "/c/otomotif",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Otomotif.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:30:31.784Z",
      "updatedAt": "2017-09-01T18:30:31.784Z"
  },
  {
      "id": 19,
      "name": "Ibu dan Bayi",
      "url": "/c/ibu-dan-bayi",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Ibu+dan+Bayi.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:31:00.242Z",
      "updatedAt": "2017-09-01T18:31:00.242Z"
  },
  {
      "id": 20,
      "name": "Software",
      "url": "/c/software",
      "img": "https://plasgos.s3-ap-southeast-1.amazonaws.com/category/Software.png",
      "parent_id": null,
      "createdAt": "2017-09-01T18:31:22.812Z",
      "updatedAt": "2017-09-01T18:31:22.812Z"
  }
]
class Categories extends React.Component {
  clickCategory = (url) => {
    console.log("url");
  }
  render(){
    if(categories){
      return(
        <div style={{marginTop:16}}>
          <WingBlank size="xs">
          <div style={{overflow: 'hidden',width:'100%'}}>
            <div style={{display:'flex', width: '100%', overflowY: 'scroll' }}>
              <div style={{marginRight:8}} onClick = {() => this.clickCategory('/c')}>
                <Card bodyStyle={{ padding: 0 }}
                  style={{borderRadius: 10, width: 65, height: 65}}>
                  <div><img onContextMenu={(e) => e.preventDefault()} src="https://image-plasgos.s3.amazonaws.com/category/Semua%2BKategori.png.webp" width="65px" height="65px" alt="_all"/></div>
                </Card>
                <div style={{fontSize:13, textAlign:'center', width:65, wordWrap:"break-word"}}>Semua Kategori</div>
              </div>
              <div style={{marginRight:8}} onClick = {() => this.clickCategory('/donasi')}>
                <Card bodyStyle={{ padding: 0 }}
                  style={{borderRadius: 10, width: 65, height: 65}}>
                  <div><img onContextMenu={(e) => e.preventDefault()} src="https://image-plasgos.s3.amazonaws.com/category/donasi.png.webp" width="65px" height="65px" alt="_all"/></div>
                </Card>
                <div style={{fontSize:13, textAlign:'center', width:65, wordWrap:"break-word"}}>Donasi</div>
              </div>
              {
                categories.map(category=>{
                  return(
                    <div key={category.id} style={{marginRight:8}} onClick = {() => this.clickCategory(category.url)}>
                      <Card bodyStyle={{ padding: 0 }}
                        style={{borderRadius: 10, width: 65, height: 65}}>
                        <div><img onContextMenu={(e) => e.preventDefault()} src={category.img} width="65px" height="65px" alt={`_${category.id}`}/></div>
                      </Card>
                      <div style={{fontSize:12, textAlign:'center', width:65, wordWrap:"break-word"}}>{category.name}</div>
                    </div>

                  )
                })
              }
            </div>
          </div>
          </WingBlank>
        </div>
      );
    }else{
      return null
    }
  }
}
export default Categories;
