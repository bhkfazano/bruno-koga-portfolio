import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaSquareGithub, FaLinkedin, FaMedium, } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import Link from "next/link";

import { navigation, summary } from "@/content/en";

const Summary:FC = () => {
    const { asPath } = useRouter();
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const { name, role, company, bio, githubLink, linkedinLink, mediumLink, email } = summary;

    useEffect(() => {
        setActiveTab(asPath.split('#')[1]);
    }, [asPath]);

    return (
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8 lg:w-1/2 md:w-1/2 p-5">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white">
                {name}
            </h1>
            <h2 className="mt-5 text-2xl font-light tracking-tight text-white">
                {role} 
                {!company && <span className="text-slate-500 text-xl ml-4">—</span>}
                <span className="text-slate-500 font-extralight text-xl ml-4">{company ? `@ ${company}` : "Open to work"}</span>
            </h2>
            <p className="mt-6 text-base leading-8  text-slate-400 font-light">
                {bio}
            </p>
            <div className="mt-10 flex flex-col space-y-3">
                <Link 
                    className={`rounded-lg text-slate-300 font-light cursor-pointer w-44 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium ${activeTab === "about" ? "bg-white/10 rounded-lg font-medium" : ""}}`}
                    href="#about"
                >
                    • &ensp; {navigation.about}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-300 font-light cursor-pointer w-44 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium ${activeTab === "skills" ? "bg-white/10 rounded-lg font-medium" : ""}}`}
                    href="#skills"
                >
                    • &ensp; {navigation.skills}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-300 font-light cursor-pointer w-44 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium ${activeTab === "experience" ? "bg-white/10 rounded-lg font-medium" : ""}}`}
                    href="#experience"
                >
                    • &ensp; {navigation.experience}
                </Link>
                <Link 
                    className={`rounded-lg text-slate-300 font-light cursor-pointer w-44 p-2 pl-4 hover:bg-white/10 hover:rounded-lg transition-all hover:font-medium ${activeTab === "projects" ? "bg-white/10 rounded-lg font-medium" : ""}}`}
                    href="#projects"
                >
                    • &ensp; {navigation.projects}
                </Link>
            </div>
            <div className="mt-20 flex flex-row space-x-4 ml-3">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-400 transition-all">
                    <FaSquareGithub size={24} />
                </a>
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-400 transition-all">
                    <FaLinkedin size={24} />
                </a>
                <a href={mediumLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-400 transition-all">
                    <FaMedium size={24} />
                </a>
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-400 transition-all">
                    <MdEmail size={24} />
                </a>
            </div>
        </div>
    );
}

export default Summary;