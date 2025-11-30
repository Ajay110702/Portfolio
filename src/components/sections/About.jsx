import { RevealOnScroll } from "../RevealOnScroll";

export const About=()=>{

    const frontendSkills=[
        "HTML",
        "CSS",
        "JavaScript",
        "Reactjs",
        "TailwindCSS"
    ];

    const backendSkills=[
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "JWT Auth",
        "Rest API's"
    ];
    return(
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
    
    <RevealOnScroll>
    <div className="max-w-3xl mx-auto px-4">
   <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>
   
   <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
<p className="text-gray-300 mb-6">
    Passionate and enthusiastic web developer with expertise in developing 
    scalable web applications and creating innovative solutions.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="tetx-xl font-bold mb-4">Frontend</h3>
    <div className="flex flex-wrap gap-2">
        {frontendSkills.map((tech,key)=>(
            <span key={key}
             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
           {tech}
            </span>
        ))}
    </div>
    </div>


     <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="tetx-xl font-bold mb-4">Backend</h3>
    <div className="flex flex-wrap gap-2">
        {backendSkills.map((tech,key)=>(
            <span key={key}
             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
           {tech}
            </span>
        ))}
    </div>
    </div>
</div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
   <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
   <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
   <ul className="list-disc list-inside text-gray-300 space-y-2">
     <li>
        <strong>Btech in Computer Science</strong> - Kurukshetra University (2021-2025)
     </li>
     <li>
        Relevant coursework: Data Structures, Web development, Software Engineering, Databases
     </li>

      <li>
        <strong>Senior Secondary Education</strong> 
        <br />
        Mukand lal public school | 2018-2020
     </li>
     
   </ul>
   </div>

   <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
   <h3 className="text-xl font-bold mb-4"> 💼 Internships </h3>
   <div className="space-y-4 text-gray-300">

<div>
    <h4 className="font-semibold">Web design intern at Contriverz solution (Aug 2022 - sept 2022) : </h4>
    <p>Developed responsive UI using HTML, CSS, and JavaScript with focus on layout and performance.
    </p>
</div>

<div >
    <h4 className="font-semibold">Frontend intern at PGtech pvt. ltd (July 2023 - Aug 2023) : </h4>
    <p>Designed and implemented responsive user interfaces using HTML, CSS, JavaScript and React.</p>
</div>

<div >
    <h4 className="font-semibold">Mern Stack intern at ThinkNext technology (July 2024 - Aug 2024) :</h4>
    <p>Built a CRUD application with React.js, ensuring responsive UI and seamless integration with backend APIs.
    </p>
</div>

   </div>
   </div>
   </div>
    </div>

</RevealOnScroll>
    </section>
    );
}