import { faSchool, faBook, faGraduationCap, faFlaskVial, faHandshakeAngle, faEarthEurope, faBuilding } from "@fortawesome/free-solid-svg-icons";

const summary = [
    {
        key: 'school',
        title: 'University', 
        icon: faSchool,
        value: '東京農工大学大学院',
    },
    {
        key: 'department',
        title: 'Department', 
        icon: faBuilding,
        value: '工学府 知能情報\nシステム工学専攻',
    },
    {
        key: 'grade',
        title: 'Grade', 
        icon: faGraduationCap,
        value: '修士課程 1年',
    },
    {
        key: 'laboratory',
        title: 'Laboratory',
        icon: faFlaskVial,
        value: '藤田桂英研究室',
    },
    {
        key: 'volunteer',
        title: 'Volunteer',
        icon: faHandshakeAngle,
        value: 'IAESTE TLSC\n(元幹部)',
    },
    {
        key: 'english',
        title: 'English',
        icon: faEarthEurope,
        value: 'TOEIC L&R 845点',
    },
];
export default summary;
