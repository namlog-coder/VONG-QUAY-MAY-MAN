
import { Question, Student } from './types';

export const STUDENTS: Student[] = [
  { id: 1, name: "Đinh Bá Tùng Anh" },
  { id: 2, name: "Nguyễn Trâm Anh" },
  { id: 3, name: "Nguyễn Tú Anh" },
  { id: 4, name: "Vũ Việt Bách" },
  { id: 5, name: "Lương Thanh Bình" },
  { id: 6, name: "Nguyễn Đức Bình" },
  { id: 7, name: "Dương Diệp Chi" },
  { id: 8, name: "Nguyễn Quỳnh Chi" },
  { id: 9, name: "Phạm Hà Chi" },
  { id: 10, name: "Phạm Đức Dũng" },
  { id: 11, name: "Ngô Thành Đạt" },
  { id: 12, name: "Vũ Hồng Đăng" },
  { id: 13, name: "Hoàng Gia Hân" },
  { id: 14, name: "Nguyễn Trương Minh Huyền" },
  { id: 15, name: "Đỗ Trần Lê Khang" },
  { id: 16, name: "Nguyễn Đăng Khoa" },
  { id: 17, name: "Trần Tiến Lâm" },
  { id: 18, name: "Hoàng Khánh Linh" },
  { id: 19, name: "Phạm Khánh Linh" },
  { id: 20, name: "Trần Vũ Khánh Linh" },
  { id: 21, name: "Triệu Tú Linh" },
  { id: 22, name: "Diêm Khôi Minh" },
  { id: 23, name: "Ngô Hoàng Nhật Minh" },
  { id: 24, name: "Nguyễn Đức Minh" },
  { id: 25, name: "Nguyễn Quang Minh" },
  { id: 26, name: "Nguyễn Hà My" },
  { id: 27, name: "Hoàng Trần Linh Nga" },
  { id: 28, name: "Hoàng Khánh Ngọc" },
  { id: 29, name: "Nguyễn Minh Ngọc" },
  { id: 30, name: "Hoàng Nam Phong" },
  { id: 31, name: "Đặng Xuân Phúc" },
  { id: 32, name: "Lê Minh Phúc" },
  { id: 33, name: "Trần Minh Phước" },
  { id: 34, name: "Trần Ngọc Bảo Quốc" },
  { id: 35, name: "Lê Công Thành" },
  { id: 36, name: "Đặng Anh Thảo" },
  { id: 37, name: "Lê Minh Thắng" },
  { id: 38, name: "Hà Thanh Trúc" },
  { id: 39, name: "Lê Minh Tú" },
  { id: 40, name: "Nguyễn Khuê Tú" },
  { id: 41, name: "Hoàng Minh Tuấn" },
  { id: 42, name: "Lê Sơn Tùng" },
  { id: 43, name: "Đồng Khánh Vy" },
  { id: 44, name: "Nguyễn Phương Vy" },
  { id: 45, name: "Phạm Quỳnh Vy" }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Sau khi thay quần áo, việc làm đúng của bạn nhỏ là gì?",
    options: [
      { key: "A", text: "Vứt quần áo ra ghế" },
      { key: "B", text: "Để quần áo dưới sàn nhà" },
      { key: "C", text: "Gấp quần áo gọn gàng và cất đúng chỗ" },
      { key: "D", text: "Để mẹ dọn giúp" }
    ],
    correctAnswer: "C"
  },
  {
    id: 2,
    text: "Thu dọn quần áo gọn gàng giúp chúng ta điều gì?",
    options: [
      { key: "A", text: "Quần áo nhanh bị bẩn hơn" },
      { key: "B", text: "Nhà cửa sạch sẽ, ngăn nắp" },
      { key: "C", text: "Mất nhiều thời gian vui chơi" },
      { key: "D", text: "Không cần giúp bố mẹ nữa" }
    ],
    correctAnswer: "B"
  },
  {
    id: 3,
    text: "Việc làm nào thể hiện em biết giúp đỡ bố mẹ hằng ngày?",
    options: [
      { key: "A", text: "Chơi xong để đồ chơi bừa bãi" },
      { key: "B", text: "Thay quần áo xong bỏ lung tung" },
      { key: "C", text: "Tự gấp quần áo của mình" },
      { key: "D", text: "Không làm gì cả" }
    ],
    correctAnswer: "C"
  },
  {
    id: 4,
    text: "Khi quần áo bẩn, em nên làm gì?",
    options: [
      { key: "A", text: "Cất chung với quần áo sạch" },
      { key: "B", text: "Vứt ra sân" },
      { key: "C", text: "Để trên bàn học" },
      { key: "D", text: "Bỏ vào chỗ quy định để giặt" }
    ],
    correctAnswer: "D"
  }
];

export const COLORS = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
  '#FF9F40', '#8AC926', '#1982C4', '#6A4C93', '#F15BB5'
];
