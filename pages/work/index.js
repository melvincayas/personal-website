import { Fragment } from "react";
import Head from "next/head";
import NextHead from "../../components/UI/NextHead";
import ProjectCard from "../../components/Work/ProjectCard";
import { projects } from "../../public/data/work-data";
import workClasses from "../../styles/Work/Work.module.css";
import next from "next";

const Work = () => {
	return (
		<NextHead
			twitterTitle="Work by Melvin Cayas"
			metaUrl="https://www.melvincayas.com/work"
			description="Check out Melvin's coding projects!"
			title="Melvin Cayas | Work"
		>
			<section className={workClasses.container}>
				{projects.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</section>
		</NextHead>
	);
};

export default Work;
