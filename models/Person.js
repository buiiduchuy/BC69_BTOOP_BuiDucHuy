class Person {
  hoTen;
  diaChi;
  ma;
  email;
  loaiNguoiDung;
  constructor (hoTen , diaChi , ma , email){
    this.hoTen = hoTen;
    this.diaChi = diaChi;
    this.ma = ma;
    this.email = email;
  }
  
}

class Student extends Person {
  constructor(hoTen , diaChi , ma , email , diemToan , diemLy , diemHoa) {
    super(hoTen , diaChi , ma , email)
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    diemTrungBinh: ()=> {
      return (diemToan + diemLy + diemHoa) / 3
    }
  }
}

class Employee extends Person {
  constructor(hoTen , diaChi , ma , email , soNgayLamViec , luongTheoNgay){
    super(hoTen , diaChi , ma , email)
    this.soNgayLamViec = soNgayLamViec;
    this.luongTheoNgay = luongTheoNgay;
    diemLuong: ()=> {
      return soNgayLamViec * luongTheoNgay
    }
  }
}

class Customer extends Person {
  constructor(hoTen , diaChi , ma, email , tenCongTy , giaTriHoaDon , danhGia){
    super(hoTen , diaChi , ma , email)
    this.tenCongTy = tenCongTy;
    this.giaTriHoaDon = giaTriHoaDon;
    this.danhGia = danhGia;
  }
}

class ListPerson extends Person {
  listPerson = []
  constructor (hoTen ,diaChi , ma , email , listPerson){
    super(hoTen , diaChi , ma , email)
    this.listPerson = listPerson;
  }
}