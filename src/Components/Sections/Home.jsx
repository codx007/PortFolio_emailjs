import { RevealOnScroll } from "../RevealOnScroll"
export const Home = () => {
    return (<section id="home" className="min-h-screen flex items-center justify-center relative">

        <RevealOnScroll>

        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading right">
                Hi, I am Abhay Karan
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic nihil recusandae amet voluptate quia veritatis, omnis ipsa, ex nulla suscipit dignissimos eum expedita pariatur. 
            </p>

        <div className="flex justify-center space-x-4">

            <a className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]" href="#project">View Projects</a>

            <a className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10" href="#contact">Contact Me</a>
        </div>
        </div>
        </RevealOnScroll>
    </section>
    
    );
};