
import { Question, Student } from './types';

export const STUDENTS: Student[] = [
  { id: 1, name: "Hoàng Lan Anh" },
  { id: 2, name: "Nguyễn Duy Hoàng Anh" },
  { id: 3, name: "Nguyễn Ngọc Anh" },
  { id: 4, name: "Nguyễn Thị Hồng Anh" },
  { id: 5, name: "Nguyễn Trâm Anh" },
  { id: 6, name: "Đỗ Minh Ánh" },
  { id: 7, name: "Đặng Đức Bảo" },
  { id: 8, name: "Đỗ Băng Băng" },
  { id: 9, name: "Nguyễn Mai Chi" },
  { id: 10, name: "Hà Minh Đào" },
  { id: 11, name: "Ngô Xuân Đạt" },
  { id: 12, name: "Nguyễn Minh Đức" },
  { id: 13, name: "Đoàn Hương Giang" },
  { id: 14, name: "Hoàng Như Giang" },
  { id: 15, name: "Hồ Ngọc Hà" },
  { id: 16, name: "Trần Lê Hiếu" },
  { id: 17, name: "Nguyễn Khánh Huyền" },
  { id: 18, name: "Nguyễn Ngọc Huyền" },
  { id: 19, name: "Quách Kim Khánh" },
  { id: 20, name: "Hoàng Vũ Bảo Lam" },
  { id: 21, name: "Hà Ngọc Lâm" },
  { id: 22, name: "Đào Hà Linh" },
  { id: 23, name: "Đinh Tô Phương Linh" },
  { id: 24, name: "Lương Nhật Linh" },
  { id: 25, name: "Nguyễn Khánh Linh" },
  { id: 26, name: "Vũ Mai Linh" },
  { id: 27, name: "Đinh Ngọc Mai" },
  { id: 28, name: "Nguyễn Đức Mạnh" },
  { id: 29, name: "Phạm Thị Thúy Nga" },
  { id: 30, name: "Hà Đặng Ngân" },
  { id: 31, name: "Đỗ Lê Hồng Ngọc" },
  { id: 32, name: "Lâm Yến Nhi" },
  { id: 33, name: "Đặng Mai Phương" },
  { id: 34, name: "Chu Sỹ Tài" },
  { id: 35, name: "Đào Đức Tâm" },
  { id: 36, name: "Kim Ngọc Tâm" },
  { id: 37, name: "Nguyễn Phương Thùy" },
  { id: 38, name: "Hà Anh Thư" },
  { id: 39, name: "Lê Quỳnh Trang" },
  { id: 40, name: "Phạm Tố Uyên" },
  { id: 41, name: "Nguyễn Khánh" },
  { id: 42, name: "Vũ Thị Hải Yến" },
  { id: 43, name: "Phạm Phương Anh" }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Nhận diện tình huống áp dụng quy tắc: Để đi từ Yên Bái đến Hà Nội, một người có thể chọn đi bằng xe khách (có 5 hãng xe khác nhau) hoặc đi bằng tàu hỏa (có 3 chuyến tàu khác nhau). Hỏi người đó có bao nhiêu cách để đi từ Yên Bái đến Hà Nội bằng một phương tiện duy nhất?",
    options: [
      { key: "A", text: "15 cách." },
      { key: "B", text: "2 cách." },
      { key: "C", text: "8 cách." },
      { key: "D", text: "5 cách." }
    ],
    correctAnswer: "C"
  },
  {
    id: 2,
    text: "Lớp 10D6 có 9 nam và 33 bạn nữ, nhà trường cần chọn mỗi lớp một bạn đi dự trại hè của một trường bạn vào tháng 6 tới, có bao nhiêu cách chọn một bạn như vậy?",
    options: [
      { key: "A", text: "9 phương án." },
      { key: "B", text: "33 phương án." },
      { key: "C", text: "42 phương án." },
      { key: "D", text: "1 phương án." }
    ],
    correctAnswer: "C"
  },
  {
    id: 3,
    text: "Bài toán đếm số tự nhiên: Từ các chữ số {1, 2, 3, 4, 5}, có bao nhiêu cách chọn ra một chữ số là số lẻ hoặc là số 2?",
    options: [
      { key: "A", text: "3 cách." },
      { key: "B", text: "4 cách." },
      { key: "C", text: "5 cách." },
      { key: "D", text: "2 cách." }
    ],
    correctAnswer: "B"
  },
  {
    id: 4,
    text: "Phân biệt điều kiện áp dụng Quy tắc cộng: Phát biểu nào sau đây là ĐÚNG về điều kiện áp dụng quy tắc cộng cho một công việc?",
    options: [
      { key: "A", text: "Công việc được chia thành các công đoạn nối tiếp nhau." },
      { key: "B", text: "Các phương án thực hiện công việc có thể trùng lặp lẫn nhau." },
      { key: "C", text: "Công việc được chia thành các phương án rời nhau, không phụ thuộc vào nhau." },
      { key: "D", text: "Chỉ áp dụng được khi có đúng hai phương án thực hiện." }
    ],
    correctAnswer: "C"
  },
  {
    id: 5,
    text: "Bài toán thực tế tổng hợp (Cánh cửa tương lai): Bạn Nam chọn nguyện vọng 1 vào Đại học. Nhóm ngành C03 có 3 trường đại học xét tuyển, nhóm ngành D01 có 4 trường đại học xét tuyển (các trường ở hai nhóm này không trùng nhau). Ngoài ra, Nam còn cân nhắc thêm 2 trường thuộc khối D14( Toán, sử, Anh). Nếu chỉ được chọn một trường duy nhất, Nam có bao nhiêu cách chọn?",
    options: [
      { key: "A", text: "24 cách." },
      { key: "B", text: "7 cách." },
      { key: "C", text: "12 cách." },
      { key: "D", text: "9 cách." }
    ],
    correctAnswer: "D"
  }
];

export const COLORS = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
  '#FF9F40', '#8AC926', '#1982C4', '#6A4C93', '#F15BB5'
];
