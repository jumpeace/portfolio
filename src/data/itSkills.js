
import { faCss3, faGitAlt, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faGem } from "@fortawesome/free-solid-svg-icons";

const itSkills = {
    title: 'ITスキル',
    icon: faCode,
    bgColor: 'white',
    skills: [
        {icon: faPython, title: 'Python', details: 'MARL, PyTorch, Django'},
        {icon: faJs, title: 'JavaScript', details: 'React, Next.js, p5.js'},
        {icon: faCss3, title: 'CSS', details: 'Tailwind CSS'},
        {icon: faGem, title: 'Ruby', details: 'Sinatra'},
        {icon: faDatabase, title: 'DB', details: 'SQLite3'},
        {icon: faGitAlt, title: 'Git', details: 'GitHub'},
    ]
}
export default itSkills;
