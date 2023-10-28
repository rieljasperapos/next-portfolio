import LibraryHub from '../../public/LibraryHub.png'
import Edrms from '../../public/edrms.png'
const projects = [
    {
        id: 1,
        url: 'https://github.com/rieljasperapos/libraryhub',
        title: 'Library Hub',
        image: LibraryHub,
        description: 'A simple web-based Library Management System that implements CRUD functionalities',
        techs: [
            'Php',
            'MySQL',
            'Javascript',
            'Bootstrap'
        ],
        status: true
    },

    {
        id: 2,
        url: 'https://github.com/rieljasperapos/edrms',
        title: 'EDRMS',
        image: Edrms,
        description: 'A Record Management System created with Express with MySQL and React',
        techs: [
            'React',
            'ExpressJS',
            'MySQL',
            'Tailwind'
        ],
        status: false,
    }
]

export default projects;