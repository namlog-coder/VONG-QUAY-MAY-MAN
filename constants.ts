
import { Question, Student } from './types';

export const STUDENTS: Student[] = [
  { id: 1, name: "Lê Tuấn Vũ" },
  { id: 2, name: "Hà Huyền My" },
  { id: 3, name: "Nguyễn Lê Quỳnh Hương" },
  { id: 4, name: "Trần Thanh Ngân" },
  { id: 5, name: "Trần Bảo Anh" },
  { id: 6, name: "Đào Thanh Hà" },
  { id: 7, name: "Phí Minh Trí" },
  { id: 8, name: "Nguyễn Hải Anh" },
  { id: 9, name: "Lê Tấn Phong" },
  { id: 10, name: "Nguyễn Bảo Trâm" },
  { id: 11, name: "Phạm Minh Anh" },
  { id: 12, name: "Hồ Minh Đức" },
  { id: 13, name: "Trần Gia Huy" },
  { id: 14, name: "Nguyễn Trần Đăng Khôi" },
  { id: 16, name: "Nguyễn Phương Hà" },
  { id: 17, name: "Trịnh Đăng Khoa" },
  { id: 18, name: "Trần Phương Hằng" },
  { id: 19, name: "Nguyễn Bảo Ngọc" },
  { id: 20, name: "Vũ Việt Minh Khôi" },
  { id: 21, name: "Nguyễn Kiều Trúc Linh" },
  { id: 22, name: "Vũ Minh Khôi" },
  { id: 23, name: "Vũ Hà Như Ngọc" },
  { id: 24, name: "Nguyễn Khánh An" },
  { id: 25, name: "Nguyễn Tuệ Minh" }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Chú bé chăn cừu đã làm gì khiến mọi người tức giận?",
    options: [
      { key: "A", text: "Chú bé chăn cừu rất chăm chỉ." },
      { key: "B", text: "Chú bé nói dối có chó sói." },
      { key: "C", text: "Chú bé luôn giúp đỡ mọi người." }
    ],
    correctAnswer: "B"
  },
  {
    id: 2,
    text: "Điều gì xảy ra khi sói đến thật?",
    options: [
      { key: "A", text: "Khi sói đến thật các bác nông dân đến giúp ngay." },
      { key: "B", text: "Khi sói đến thật chú bé bỏ chạy về nhà." },
      { key: "C", text: "Khi sói đến thật không ai đến giúp chú bé." }
    ],
    correctAnswer: "C"
  },
  {
    id: 3,
    text: "Câu chuyện muốn nhắc nhở chúng ta điều gì?",
    options: [
      { key: "A", text: "Chúng ta không nên nói dối." },
      { key: "B", text: "Khi gặp người lớn chúng ta phải chào hỏi lễ phép." },
      { key: "C", text: "Chúng ta phải chăn cừu giỏi." }
    ],
    correctAnswer: "A"
  },
  {
    id: 4,
    text: "Nếu em nói dối nhiều lần, điều gì có thể xảy ra với em?",
    options: [
      { key: "A", text: "Mọi người sẽ tin em hơn." },
      { key: "B", text: "Mọi người không còn tin tưởng em." },
      { key: "C", text: "Em sẽ được khen." }
    ],
    correctAnswer: "B"
  },
  {
    id: 5,
    text: "Trong cuộc sống hằng ngày, khi làm sai em nên làm gì?",
    options: [
      { key: "A", text: "Khi làm sai em nói dối để không bị mắng." },
      { key: "B", text: "Khi làm sai em trốn tránh, đổ lỗi cho người khác." },
      { key: "C", text: "Khi làm sai em thành thật xin lỗi và sửa lỗi." }
    ],
    correctAnswer: "C"
  }
];

export const COLORS = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
  '#FF9F40', '#8AC926', '#1982C4', '#6A4C93', '#F15BB5'
];
