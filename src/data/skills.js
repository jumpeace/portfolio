import { faDatabase, faGem, faCloud, faC, faRobot, faEarth, faEdit, faCode } from "@fortawesome/free-solid-svg-icons";
import { faJs, faPython, faReact, faGitAlt, faDocker } from "@fortawesome/free-brands-svg-icons";

const skills = {
    "Programming Languages": [
        { "name": "JavaScript / TypeScript", "icon": faJs },
        { "name": "Python", "icon": faPython },
        { "name": "Ruby", "icon": faGem },
        { "name": "C++", "icon": faC },
        { "name": "C", "icon": faC },
    ],
    "Web Frameworks": [
        { "name": "Next.js", "icon": faJs },
        { "name": "React", "icon": faReact },
        { "name": "Django", "icon": faPython },
        { "name": "Sinatra", "icon": faGem }
    ],
    "Database and Infra": [
        { "name": "Firebase (GCP)", "icon": faCloud },
        { "name": "MySQL", "icon": faDatabase },
        { "name": "SQLite", "icon": faDatabase },
        { "name": "Cloudflare Pages", "icon": faCloud }
    ],
    "AI": [
        { "name": "Reinforcement Learning", "icon": faRobot },
        { "name": "Multi-Agent Pathfinding", "icon": faRobot }
    ],
    "Tools": [
        { "name": "Git / GitHub", "icon": faGitAlt },
        { "name": "Docker", "icon": faDocker },
        { "name": "Visual Studio Code", "icon": faCode }
    ]
};
export default skills;
