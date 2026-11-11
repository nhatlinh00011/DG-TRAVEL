export type Place = {
  id: number; name: string; category: string; area: string; description: string;
  lat: number; lng: number; rating: number; reviews: number; image: string; price: string
}
export const categories = ['Tất cả', 'Săn mây', 'Check-in', 'Danh thắng', 'Cafe', 'Ẩm thực', 'Lưu trú']
export const places: Place[] = [
 {id:1,name:'Hồ Gươm',category:'Check-in',area:'Hoàn Kiếm, Hà Nội',description:'Không gian biểu tượng giữa trung tâm Hà Nội, phù hợp tản bộ và chụp ảnh.',lat:21.0287,lng:105.8524,rating:4.8,reviews:328,image:'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=900',price:'Miễn phí'},
 {id:2,name:'Phố cổ Hà Nội',category:'Ẩm thực',area:'Hoàn Kiếm, Hà Nội',description:'Khám phá phố nghề, món ăn đường phố và nhịp sống Hà Nội.',lat:21.0341,lng:105.8502,rating:4.7,reviews:215,image:'https://images.unsplash.com/photo-1555921015-5532091f6026?w=900',price:'Tuỳ trải nghiệm'},
 {id:3,name:'Cầu Long Biên',category:'Check-in',area:'Long Biên, Hà Nội',description:'Cây cầu lịch sử với góc nhìn sông Hồng và khung cảnh hoàng hôn.',lat:21.0452,lng:105.8500,rating:4.6,reviews:142,image:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900',price:'Miễn phí'},
 {id:4,name:'Cafe view hồ Tây',category:'Cafe',area:'Tây Hồ, Hà Nội',description:'Gợi ý một điểm cafe ngắm hồ, thư giãn và ngắm hoàng hôn.',lat:21.0607,lng:105.8234,rating:4.5,reviews:89,image:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900',price:'35.000đ–80.000đ'},
 {id:5,name:'Vườn quốc gia Ba Vì',category:'Danh thắng',area:'Ba Vì, Hà Nội',description:'Rừng xanh, khí hậu mát mẻ, phù hợp trekking và dã ngoại cuối tuần.',lat:21.0808,lng:105.3735,rating:4.7,reviews:176,image:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900',price:'Theo vé tham quan'},
 {id:6,name:'Tà Xùa – săn mây',category:'Săn mây',area:'Bắc Yên, Sơn La',description:'Điểm đến săn biển mây nổi tiếng; nên kiểm tra thời tiết trước chuyến đi.',lat:21.3347,lng:104.4486,rating:4.9,reviews:402,image:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900',price:'Tuỳ lịch trình'},
 {id:7,name:'Tam Đảo',category:'Lưu trú',area:'Tam Đảo, Vĩnh Phúc',description:'Thị trấn nghỉ dưỡng với nhiều homestay, quán cafe và điểm check-in.',lat:21.4550,lng:105.6440,rating:4.6,reviews:264,image:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900',price:'Tuỳ dịch vụ'}
]