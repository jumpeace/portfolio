import { faIdBadge, faLanguage, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

const qualifications = {
    title: '資格・受賞歴',
    icon: faIdBadge,
    bgColor: 'gray-50',
    skills: [
        {icon: faLanguage, title: 'TOEIC L&Rテスト 845点'},
        {icon: faTrophy, title: 'Hack U Kosen 2022 最優秀賞'},
        {icon: faIdCard, title: '普通自動車免許(AT)'},
    ]
};
export default qualifications;
