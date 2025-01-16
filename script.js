// Dark Mode Toggle
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});

// Language content
const content = {
    en: {
        profileSubtitle: "MSci Computer Science Student",
        footerText: "© Website made by Alejandro Newport - Last update January 2025",
        heroTitle: "My Portfolio",
        heroText1: "Computer Science student at King’s College London, pursuing an MSci degree with First-class Honours. With a strong academic foundation in Artificial Intelligence, Full-stack Web Development, Software Engineering, Data Structures and Algorithms, paired with a passion for innovation, the focus is on building impactful and efficient technological solutions of real-world problems.",
        heroText2: "Proficient in multiple programming languages such as Python, Java, C++, Scala, JavaScript, as well as frameworks like Vue.js, Node.js, and Django. This expertise is underpinned by hands-on work experience in Grupo Newport and several projects. Recognized for a unique ability to merge technical knowledge with creativity, consistently delivering innovative solutions. Dedicated to leveraging advanced technologies to create transformative tools that optimize performance and enhance user experiences.",
        
        workExperienceTitle: "Work Experience",
        jobTitle: "Software Developer and Systems Technician",
        jobCompany: "<em><a href='https://gruponewport.com' target='_blank'>Grupo Newport</a>, Spain (June 2024 - September 2024)</em>",
        jobPoints: [
            "Provided IT systems support across the company, implementing automation processes to reduce improving overall efficiency in 30%, ensuring optimal functionality.",
            "Repaired damaged hardware and installed multiple software packages for approx. 200 computer units.",
            "Collaborated with cross-functional teams, integrating software solutions across departments and improving system functionality.",
            "Developed 100% of the front-end code for the company's website <a href='https://nformar.com/' target='_blank'>NFORMAR</a>, ensuring a seamless user experience and responsive design."
        ],
        
        projectsTitle: "Projects",
        project1Title: "Autonomous Drone Development:",
        project1Desc: "Designed and developed an autonomous drone capable of navigating complex environments using AI algorithms and integrated sensor data to improve flight accuracy and obstacle avoidance. Technologies: Python, C++, TensorFlow, Arduino.",
        project2Title: "Hackathon Projects:",
        project2Desc: "Participated in various hackathons, achieving podium finishes with projects that addressed real-world problems using AI and machine learning. Developed a web-based application that streamlined data processing for SMEs, reducing operational bottlenecks on 10%.",
        project3Title: "Gym Website Development:",
        project3Desc: "Contributed in the full-stack development of the web application for 'Level Up Canarias', enabling membership management and class scheduling. Utilized JavaScript, Vue.js, HTML/CSS for the front-end, and Python/Django for the back-end.",
        
        educationTitle: "Education",
        education1Title: "MSci Computer Science",
        education1Desc: "<em>King's College London, UK September 2023 - Present (expected graduation 2027)</em>",
        education1Points: [
            "Achieved First-class Honours in all modules",
            "Relevant courses: Software Engineering, Artificial Intelligence, Robotics, Data Structures"
        ],
        education2Title: "International Baccalaureate (IB) & Spanish National Baccalaureate",
        education2Desc: "<em>Colegio Arenas, Spain September 2019 - June 2023</em>",
        education2Points: [
            "Graduated with highest honours in both programs."
        ]
    },
    es: {
        profileSubtitle: "Estudiante en Ingenieria Informatica",
        skillsTitle: "Habilidades",
        footerText: "© Sitio web creado por Alejandro Newport - Última actualización enero 2025",
        heroTitle: "Mi Portafolio",
        heroText1: "Estudiante de Ingenieria Informatica en King’s College London, cursando un grado y master con honores. Con una sólida base académica en Inteligencia Artificial, Desarrollo Web Full-stack, Ingeniería de Software, Estructuras de Datos y Algoritmos, y una pasión por la innovación, el enfoque está en construir soluciones tecnológicas eficientes e impactantes para problemas del mundo real.",
        heroText2: "Competente en múltiples lenguajes de programación como Python, Java, C++, Scala, JavaScript, así como en frameworks como Vue.js, Node.js y Django. Esta experiencia está respaldada por trabajos prácticos en Grupo Newport y varios proyectos. Reconocido por la capacidad única de combinar conocimientos técnicos con creatividad, entregando soluciones innovadoras de manera constante. Dedicado a aprovechar tecnologías avanzadas para crear herramientas transformadoras que optimicen el rendimiento y mejoren la experiencia del usuario.",
        
        workExperienceTitle: "Experiencia Laboral",
        jobTitle: "Desarrollador de Software y Técnico de Sistemas",
        jobCompany: "<em><a href='https://gruponewport.com' target='_blank'>Grupo Newport</a>, España (Junio 2024 - Septiembre 2024)</em>",
        jobPoints: [
            "Proporcionó soporte de sistemas informáticos en toda la empresa, implementando procesos de automatización para mejorar la eficiencia general en un 30%, asegurando una funcionalidad óptima.",
            "Reparó hardware dañado e instaló múltiples paquetes de software para aproximadamente 200 unidades de computadora.",
            "Colaboró con equipos multifuncionales, integrando soluciones de software en todos los departamentos y mejorando la funcionalidad del sistema.",
            "Desarrolló el 100% del código front-end para el sitio web de la empresa <a href='https://nformar.com/' target='_blank'>NFORMAR</a>, asegurando una experiencia de usuario fluida y un diseño responsivo."
        ],
        
        projectsTitle: "Proyectos",
        project1Title: "Desarrollo de Dron Autónomo:",
        project1Desc: "Diseñó y desarrolló un dron autónomo capaz de navegar en entornos complejos utilizando algoritmos de IA y datos de sensores integrados para mejorar la precisión del vuelo y evitar obstáculos. Tecnologías: Python, C++, TensorFlow, Arduino.",
        project2Title: "Proyectos de Hackathon:",
        project2Desc: "Participó en varios hackathons, logrando posiciones en el podio con proyectos que abordaron problemas del mundo real utilizando IA y aprendizaje automático. Desarrolló una aplicación web que optimizó el procesamiento de datos para PYMEs, reduciendo los cuellos de botella operativos en un 10%.",
        project3Title: "Desarrollo de Sitio Web para Gimnasio:",
        project3Desc: "Contribuyó en el desarrollo full-stack de la aplicación web para 'Level Up Canarias', permitiendo la gestión de membresías y la programación de clases. Utilizó JavaScript, Vue.js, HTML/CSS para el front-end, y Python/Django para el back-end.",
        
        educationTitle: "Educación",
        education1Title: "MSci Ciencias de la Computación",
        education1Desc: "<em>King's College London, Reino Unido Septiembre 2023 - Presente (graduación esperada 2027)</em>",
        education1Points: [
            "Logró honores de primera clase en todos los módulos",
            "Cursos relevantes: Ingeniería de Software, Inteligencia Artificial, Robótica, Estructuras de Datos"
        ],
        education2Title: "Bachillerato Internacional (IB) y Bachillerato Nacional Español",
        education2Desc: "<em>Colegio Arenas, España Septiembre 2019 - Junio 2023</em>",
        education2Points: [
            "Graduado con los más altos honores en ambos programas."
        ]
    },
};

// Update text content
function updateLanguage(lang) {
    document.querySelector(".profile p").textContent = content[lang].profileSubtitle;
    document.querySelector(".footbar p").textContent = content[lang].footerText;
    document.querySelector(".hero h2").textContent = content[lang].heroTitle;
    document.querySelectorAll(".hero p")[0].textContent = content[lang].heroText1;
    document.querySelectorAll(".hero p")[1].textContent = content[lang].heroText2;
    document.querySelector(".experience h3").textContent = content[lang].workExperienceTitle;
    document.querySelector(".job-title").textContent = content[lang].jobTitle;
    document.querySelector(".job-companie").innerHTML = content[lang].jobCompany;
    const jobPoints = document.querySelectorAll(".job-point");
    content[lang].jobPoints.forEach((point, index) => {
        jobPoints[index].innerHTML = point;
    });
    
    document.querySelector(".projects h3").textContent = content[lang].projectsTitle;
    document.querySelectorAll(".project-title")[0].textContent = content[lang].project1Title;
    document.querySelectorAll(".project-desc")[0].textContent = content[lang].project1Desc;
    document.querySelectorAll(".project-title")[1].textContent = content[lang].project2Title;
    document.querySelectorAll(".project-desc")[1].textContent = content[lang].project2Desc;
    document.querySelectorAll(".project-title")[2].textContent = content[lang].project3Title;
    document.querySelectorAll(".project-desc")[2].textContent = content[lang].project3Desc;

    document.querySelector(".education h3").textContent = content[lang].educationTitle;
    document.querySelectorAll(".education-item h4")[0].textContent = content[lang].education1Title;
    document.querySelectorAll(".education-item p")[0].innerHTML = content[lang].education1Desc;
    const education1Points = document.querySelectorAll(".education-item ul")[0].children;
    content[lang].education1Points.forEach((point, index) => {
        education1Points[index].textContent = point;
    });
    document.querySelectorAll(".education-item h4")[1].textContent = content[lang].education2Title;
    document.querySelectorAll(".education-item p")[1].innerHTML = content[lang].education2Desc;
    const education2Points = document.querySelectorAll(".education-item ul")[1].children;
    content[lang].education2Points.forEach((point, index) => {
        education2Points[index].textContent = point;
    });
}

// Language Switch Event Listener
const languageSwitch = document.getElementById("language-switch");
languageSwitch.addEventListener("change", () => {
    if (languageSwitch.checked) {
        updateLanguage("es");
    } else {
        updateLanguage("en");
    }
});

// Set initial language
updateLanguage("en");

