
import { Question, Student } from './types';

export const STUDENTS: Student[] = [
  { id: 1, name: "Thào Khánh Hưng" },
  { id: 2, name: "Dương Thanh Bình" },
  { id: 3, name: "Giàng Thị Hà" },
  { id: 4, name: "Giàng Việt Thành" },
  { id: 5, name: "Giàng A Tông" },
  { id: 6, name: "Thào Thị Chù" },
  { id: 7, name: "Thào Nhật Duy" },
  { id: 8, name: "Thào A Sổ" },
  { id: 9, name: "Thào Thị Trang" },
  { id: 10, name: "Thào Thị Vy" },
  { id: 11, name: "Vàng Thu Hàng" },
  { id: 12, name: "Thào Thị Dông" },
  { id: 13, name: "Giàng A Mảnh" },
  { id: 14, name: "Giàng A Tủa" },
  { id: 15, name: "Phàng A Tinh" },
  { id: 16, name: "Nguyễn Quỳnh Anh" },
  { id: 17, name: "Giàng Thị Linh" },
  { id: 18, name: "Giàng Thị Sinh" },
  { id: 19, name: "Giàng A Gừ" },
  { id: 20, name: "Thào A Kiên" },
  { id: 21, name: "Hảng Hằng Dông" },
  { id: 22, name: "Giàng Thị Sầu" },
  { id: 23, name: "Thào Nhà Chơ" },
  { id: 24, name: "Vàng Thị Hường" },
  { id: 25, name: "Giàng Việt Minh" },
  { id: 26, name: "Mùa Chờ Giàng" },
  { id: 27, name: "Lý Thị Hồng" },
  { id: 28, name: "Mùa A Phong" },
  { id: 29, name: "Sùng Thị Minh Gương" },
  { id: 30, name: "Sùng A Hủ" },
  { id: 31, name: "Sùng Thị Sầu" },
  { id: 32, name: "Mùa A Vinh" },
  { id: 33, name: "Giàng Thị Súa" }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Tính: \\frac{3}{7} + \\frac{2}{7} = ?",
    options: [
      { key: "A", text: "\\frac{5}{14}" },
      { key: "B", text: "\\frac{5}{7}" },
      { key: "C", text: "\\frac{1}{7}" },
      { key: "D", text: "\\frac{6}{49}" }
    ],
    correctAnswer: "B"
  },
  {
    id: 2,
    text: "Tính: \\frac{5}{9} - \\frac{2}{9} = ?",
    options: [
      { key: "A", text: "\\frac{7}{9}" },
      { key: "B", text: "\\frac{8}{9}" },
      { key: "C", text: "\\frac{2}{9}" },
      { key: "D", text: "\\frac{3}{9}" }
    ],
    correctAnswer: "D"
  },
  {
    id: 3,
    text: "Tính: \\frac{5}{6} + \\frac{4}{6} = ?",
    options: [
      { key: "A", text: "\\frac{7}{6}" },
      { key: "B", text: "\\frac{8}{6}" },
      { key: "C", text: "\\frac{9}{6}" },
      { key: "D", text: "\\frac{10}{9}" }
    ],
    correctAnswer: "C"
  },
  {
    id: 4,
    text: "Tính: \\frac{6}{8} - \\frac{2}{8} = ?",
    options: [
      { key: "A", text: "\\frac{7}{8}" },
      { key: "B", text: "\\frac{4}{8}" },
      { key: "C", text: "\\frac{2}{8}" },
      { key: "D", text: "\\frac{2}{4}" }
    ],
    correctAnswer: "B"
  }
];

export const COLORS = [
  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', 
  '#FF9F40', '#8AC926', '#1982C4', '#6A4C93', '#F15BB5'
];
