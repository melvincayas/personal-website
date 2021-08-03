import { Fragment } from "react";
import Head from "next/head";
import ProjectCard from "../../components/Work/ProjectCard";
import { projects } from "../../public/data/work-data";
import workClasses from "../../styles/Work/Work.module.css";

const Work = () => {
	return (
		<Fragment>
			<Head>
				<meta name="twitter:title" content="Work by Melvin Cayas" />
				<meta property="og:url" content="https://www.melvincayas.com/work" />
				<title>Work | Melvin Cayas</title>
			</Head>
			<section className={workClasses.container}>
				{projects.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</section>
		</Fragment>
	);
};

export default Work;
