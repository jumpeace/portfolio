import { faSchool, faBook, faGraduationCap, faFlaskVial, faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";

const summaryItems = [
    {
        key: 'school',
        title: '学校', 
        icon: faSchool,
        value: '東京農工大学大学院',
    },
    {
        key: 'department',
        title: '所属', 
        icon: faBook,
        value: '工学府 知能情報システム工学専攻',
    },
    {
        key: 'grade',
        title: '学年', 
        icon: faGraduationCap,
        value: '修士課程 1年',
    },
    {
        key: 'laboratory',
        title: '研究室',
        icon: faFlaskVial,
        value: '藤田桂英研究室',
    },
    {
        key: 'volunteer',
        title: '学生ボランティア',
        icon: faHandshakeAngle,
        value: 'IAESTE TLSC 総務部門統括',
    },
];
export default summaryItems;
