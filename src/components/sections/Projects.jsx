import { RevealOnScroll } from "../RevealOnScroll";

export const Projects=()=>{
    return(
  <section id="projects" className="min-h-screen flex items-center justify-center py-20" >

<RevealOnScroll>
<div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
    <h3 className="text-xl font-bold mb-2">FastFeast</h3>
    <p className="text-gray-400 mb-4">A full-stack food delivery platform which  contains features like restaurant browsing ,order placement and delivery tracking.</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["React","Nodejs","MongoDB","Express"].map((tech,key)=>(
        <span key={key}
             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
           {tech}
            </span>
      ))}
    </div>

    <div className="flex justify-between items-center">
      <a href="https://food-del-frontend-ey75.onrender.com/" className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer">View Project → </a>
    </div>
 </div>


 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
    <h3 className="text-xl font-bold mb-2">UpSkillhub</h3>
    <p className="text-gray-400 mb-4">A full-stack course marketplace platform where users can browse and can securely purchase courses.</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["React","Nodejs","MongoDB","Express"].map((tech,key)=>(
        <span key={key}
             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
           {tech}
            </span>
      ))}
    </div>

    <div className="flex justify-between items-center">
      <a href="https://up-skill-hub.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer">View Project → </a>
    </div>
 </div>

 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
    <h3 className="text-xl font-bold mb-2">Tic-Tac-Toe Game</h3>
    <p className="text-gray-400 mb-4">A modern Tic Tac Toe game built with React.js using component-based architecture, state management, and dynamic UI updates.</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["HTML","CSS","JavaScript","React"].map((tech,key)=>(
        <span key={key}
             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
           {tech}
            </span>
      ))}
    </div>

    <div className="flex justify-between items-center">
      <a href="https://tic-tac-toe-react-main-umber.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer">View Project → </a>
    </div>
 </div>

 
 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
    <h3 className="text-xl font-bold mb-2">QuickChat</h3>
    <p className="text-gray-400 mb-4">A real-time chat application built with the MERN stack and Socket.io for real-time messaging.</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {["React","Nodejs","MongoDB","Socket.IO"].map((tech,key)=>(
        <span key={key}
             className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
           {tech}
            </span>
      ))}
    </div>

    <div className="flex justify-between items-center">
      <a href="https://chat-app-omega-bice.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4 cursor-pointer">View Project → </a>
    </div>
 </div>
</div>
</div>
  </RevealOnScroll>
  </section>
    );
}