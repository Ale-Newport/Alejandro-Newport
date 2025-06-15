// Mobile menu toggle function
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    
    if (window.innerWidth <= 768 && 
        !sidebar.contains(event.target) && 
        !toggleButton.contains(event.target) && 
        sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// Dark Mode Toggle
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
});

// Language content
const content = {
    en: {
        profileSubtitle: "BSc Computer Science Student",
        footerText: "© Website made by Alejandro Newport - Last update June 2025",
        heroTitle: "My Portfolio",
        heroText1: "Computer Science student at King's College London, pursuing an MSci degree with First-class Honours. With a strong academic foundation in Artificial Intelligence, Full-stack Web Development, Software Engineering, Data Structures and Algorithms, paired with a passion for innovation, the focus is on building impactful and efficient technological solutions of real-world problems.",
        heroText2: "Proficient in multiple programming languages such as Python, Java, C++, Scala, JavaScript, as well as frameworks like Vue.js, Node.js, and Django. This expertise is underpinned by hands-on work experience in Grupo Newport and several projects. Recognized for a unique ability to merge technical knowledge with creativity, consistently delivering innovative solutions. Dedicated to leveraging advanced technologies to create transformative tools that optimize performance and enhance user experiences.",
        
        projectsTitle: "Projects",
        project1Title: "Nformar Website",
        project1Desc: "Led a group of 6 web engineers to develop a complete and professional website with all the necessary features and requirements for the brand.\nDeveloped over 80% of the front-end code for the company's website using Vue.js and Bootstrap, ensuring a seamless user experience and responsive design, for which I had to design an appropriate web and consider the style and professional appearance of the website.",
        project2Title: "Cyber Security Project",
        project2Desc: "Conducted in-depth penetration testing on two webs, identifying 17 critical vulnerabilities related to the OWASP Top 10 vulnerabilities.\nDeveloped a 20-page security report outlining vulnerabilities, more potential breaches, and a concise long-term plan to enhance the security posture of both physical and virtual systems, targeting a projected 50% reduction in exploitable vulnerabilities in a year.",
        project3Title: "Gym App",
        project3Desc: "Contributed in the full-stack development of the application for the gym, enabling membership management and class scheduling, increasing sells and enrolments over 40%, using C# and Swift for the iOS app development and MySQL for the database.",
        project4Title: "AI image recognition",
        project4Desc: "Developed and trained an animal recognition AI model using the Inaturalist 2017 dataset, using Pandas and TensorFlow libraries.\nImplemented effective overfitting reduction techniques, resulting in a 27% improvement in model performance.\nAchieved a 99% accuracy rate on the latest animal recognition model, demonstrating proficiency in AI development and optimization.",
        project5Title: "Job Seeker Web App",
        project5Desc: "Led a group project developing a software solution that allows employers to post job descriptions and advertisements.\nImplemented a matchmaking algorithm to find the best match between job offers and job seekers.\nDevelop a CV parser to gather all the personal information of a job seeker's curriculum automatically using python and spaCy.",
        project6Title: "Robot State Machine & Object Detection",
        project6Desc: "Developed a state machine in Python to autonomously move a robot through different rooms using ROS (Robot Operating System).\nImplemented YOLO (You Only Look Once) for real-time object identification and recognition.",
        project7Title: "COVID Data Explorer",
        project7Desc: "Co-developed a GUI application for exploring COVID data collected in London.\nContributed to the construction of a robust data pipeline on the Ignitus LMS database to streamline data processing and analysis.\nUsed Java and JavaFX for the front-end and implemented several Python algorithms to analyse over 60,000 data points using NumPy, Pandas and Matplotlib libraries, gaining hands-on experience in data analysis, including data cleaning, exploration, and visualization.",

        educationTitle: "Education",
        education1Title: "BSc Computer Science (First-class Honours)",
        education1Desc: "<em>King's College London, UK | September 2023 - June 2026</em>",
        education1Points: [
            "Relevant Modules: Database Systems, Data Structures, Software Engineering, Operating Systems, Machine Learning, Artificial Intelligence."
        ],
        education2Title: "Spanish National Baccalaureate (10/10)",
        education2Desc: "<em>Arenas Atlantic, Spain | September 2021 - July 2023</em>",
        education2Points: [
            "Relevant subjects: Mathematics II, Information and Communication of Technology II, Physics, Administration and Management."
        ],
        education3Title: "International Baccalaureate (IB) (41 out of 45)",
        education3Desc: "<em>Diploma Programme | September 2022 - July 2023</em>",
        education3Points: [
            "Subjects: Mathematics: Analysis and Approaches HL, Physics SL, Philosophy HL, Biology SL, Spanish Literature SL, English HL."
        ]
    },
    es: {
        profileSubtitle: "Estudiante en Ingenieria Informatica",
        skillsTitle: "Habilidades",
        footerText: "© Sitio web creado por Alejandro Newport - Última actualización junio 2025",
        heroTitle: "Mi Portafolio",
        heroText1: "Estudiante de Ingenieria Informatica en King's College London, cursando un grado y master con honores. Con una sólida base académica en Inteligencia Artificial, Desarrollo Web Full-stack, Ingeniería de Software, Estructuras de Datos y Algoritmos, y una pasión por la innovación, el enfoque está en construir soluciones tecnológicas eficientes e impactantes para problemas del mundo real.",
        heroText2: "Competente en múltiples lenguajes de programación como Python, Java, C++, Scala, JavaScript, así como en frameworks como Vue.js, Node.js y Django. Esta experiencia está respaldada por trabajos prácticos en Grupo Newport y varios proyectos. Reconocido por la capacidad única de combinar conocimientos técnicos con creatividad, entregando soluciones innovadoras de manera constante. Dedicado a aprovechar tecnologías avanzadas para crear herramientas transformadoras que optimicen el rendimiento y mejoren la experiencia del usuario.",
        
        projectsTitle: "Proyectos",
        project1Title: "Página web de Nformar",
        project1Desc: "Lideré un grupo de 6 ingenieros web para desarrollar una página web completa y profesional con todas las características y requisitos necesarios para la marca.\nDesarrollé más del 80% del código front-end de la página web de la empresa utilizando Vue.js y Bootstrap, asegurando una experiencia de usuario fluida y un diseño responsivo, para lo cual tuve que diseñar una web apropiada y considerar el estilo y la apariencia profesional de la página.",
        project2Title: "Proyecto de Ciberseguridad",
        project2Desc: "Realicé pruebas de penetración exhaustivas en dos páginas web, identificando 17 vulnerabilidades críticas relacionadas con las vulnerabilidades del OWASP Top 10.\nDesarrollé un informe de seguridad de 20 páginas que describe vulnerabilidades, posibles brechas adicionales y un plan a largo plazo conciso para mejorar la postura de seguridad de ambos sistemas físicos y virtuales, con el objetivo de reducir en un 50% las vulnerabilidades explotables en un año.",
        project3Title: "Aplicación de Gimnasio",
        project3Desc: "Contribuí al desarrollo full-stack de la aplicación para el gimnasio, permitiendo la gestión de membresías y la programación de clases, aumentando las ventas y las inscripciones en más del 40%, utilizando C# y Swift para el desarrollo de la aplicación iOS y MySQL para la base de datos.",
        project4Title: "Reconocimiento de imágenes con IA",
        project4Desc: "Desarrollé y entrené un modelo de IA para el reconocimiento de animales utilizando el conjunto de datos Inaturalist 2017, utilizando las bibliotecas Pandas y TensorFlow.\nImplementé técnicas efectivas de reducción de sobreajuste, lo que resultó en una mejora del 27% en el rendimiento del modelo.\nLogré una tasa de precisión del 99% en el último modelo de reconocimiento de animales, demostrando competencia en el desarrollo y optimización de IA.",
        project5Title: "Aplicación web para búsqueda de empleo",
        project5Desc: "Lideré un proyecto grupal desarrollando una solución de software que permite a los empleadores publicar descripciones y anuncios de trabajo.\nImplementé un algoritmo de emparejamiento para encontrar la mejor coincidencia entre ofertas de trabajo y solicitantes de empleo.\nDesarrollé un analizador de CV para recopilar automáticamente toda la información personal del currículum de un solicitante de empleo utilizando Python y spaCy.",
        project6Title: "Máquina de estados de robot y detección de objetos",
        project6Desc: "Desarrollé una máquina de estados en Python para mover un robot de forma autónoma a través de diferentes habitaciones utilizando ROS (Robot Operating System).\nImplementé YOLO (You Only Look Once) para la identificación y reconocimiento de objetos en tiempo real.",
        project7Title: "Explorador de datos COVID",
        project7Desc: "Coprogramé una aplicación GUI para explorar datos de COVID recopilados en Londres.\nContribuí a la construcción de un canal de datos robusto en la base de datos Ignitus LMS para agilizar el procesamiento y análisis de datos.\nUtilicé Java y JavaFX para el front-end e implementé varios algoritmos en Python para analizar más de 60,000 puntos de datos utilizando las bibliotecas NumPy, Pandas y Matplotlib, adquiriendo experiencia práctica en análisis de datos, incluida la limpieza, exploración y visualización de datos.",

        educationTitle: "Educación",
        education1Title: "Grado en Ingenieria Informática (10 de media)",
        education1Desc: "<em>King's College London, UK | Septiembre 2023 - Junio 2026</em>",
        education1Points: [
            "Módulos relevantes: Sistemas de Bases de Datos, Estructuras de Datos, Ingeniería de Software, Sistemas Operativos, Aprendizaje Automático, Inteligencia Artificial."
        ],
        education2Title: "Bachillerato Nacional Español (10/10)",
        education2Desc: "<em>Colegio Arenas Atlantico, España | Septiembre 2021 - Julio 2023</em>",
        education2Points: [
            "Asignaturas relevantes: Matemáticas II, Tecnología de la Información y Comunicación II, Física, Administración y Gestión."
        ],
        education3Title: "Bachillerato Internacional (BI) (41 de 45)",
        education3Desc: "<em>Programa del Diploma | Septiembre 2022 - Julio 2023</em>",
        education3Points: [
            "Asignaturas: Matemáticas: Análisis y Enfoques HL, Física SL, Filosofía HL, Biología SL, Literatura Española SL, Inglés HL."
        ]
    }
};

// Update text content
function updateLanguage(lang) {
    document.querySelector(".profile p").textContent = content[lang].profileSubtitle;
    document.querySelector(".footbar p").textContent = content[lang].footerText;
    document.querySelector(".hero h2").textContent = content[lang].heroTitle;
    document.querySelectorAll(".hero p")[0].textContent = content[lang].heroText1;
    document.querySelectorAll(".hero p")[1].textContent = content[lang].heroText2;
    
    document.querySelector(".projects h3").textContent = content[lang].projectsTitle;
    document.querySelectorAll(".project-title")[0].textContent = content[lang].project1Title;
    document.querySelectorAll(".project-desc")[0].textContent = content[lang].project1Desc;
    document.querySelectorAll(".project-title")[1].textContent = content[lang].project2Title;
    document.querySelectorAll(".project-desc")[1].textContent = content[lang].project2Desc;
    document.querySelectorAll(".project-title")[2].textContent = content[lang].project3Title;
    document.querySelectorAll(".project-desc")[2].textContent = content[lang].project3Desc;
    document.querySelectorAll(".project-title")[3].textContent = content[lang].project4Title;
    document.querySelectorAll(".project-desc")[3].textContent = content[lang].project4Desc;
    document.querySelectorAll(".project-title")[4].textContent = content[lang].project5Title;
    document.querySelectorAll(".project-desc")[4].textContent = content[lang].project5Desc;
    document.querySelectorAll(".project-title")[5].textContent = content[lang].project6Title;
    document.querySelectorAll(".project-desc")[5].textContent = content[lang].project6Desc;
    document.querySelectorAll(".project-title")[6].textContent = content[lang].project7Title;
    document.querySelectorAll(".project-desc")[6].textContent = content[lang].project7Desc;

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
    document.querySelectorAll(".education-item h4")[2].textContent = content[lang].education3Title;
    document.querySelectorAll(".education-item p")[2].innerHTML = content[lang].education3Desc;
    const education3Points = document.querySelectorAll(".education-item ul")[2].children;
    content[lang].education3Points.forEach((point, index) => {
        education3Points[index].textContent = point;
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

// Handle window resize
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768 && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});