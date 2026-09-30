import { faSchool, faBook, faGraduationCap, faFlaskVial, faHandshakeAngle, faEarthEurope, faBuilding } from "@fortawesome/free-solid-svg-icons";

const summary = [
    {
        key: 'school',
        title: '大学', 
        icon: faSchool,
        value: '東京農工大学大学院',
    },
    {
        key: 'department',
        title: '所属', 
        icon: faBuilding,
        value: '工学府 知能情報システム工学専攻',
    },
    {
        key: 'grade',
        title: '学年', 
        icon: faGraduationCap,
        value: '修士課程 2年',
    },
    {
        key: 'laboratory',
        title: '研究室',
        icon: faFlaskVial,
        value: '藤田桂英研究室',
    },
    {
        key: 'certifications',
        title: '資格',
        icon: faEarthEurope,
        value: 'TOEIC L&R 845点',
    },
];
export default summary;
