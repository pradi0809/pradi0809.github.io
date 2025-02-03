import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
// @ts-ignore
import profile from '@site/static/img/img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pradeep Renukaiah',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Engineering Leader | Enterprise Architect | Engineering Excellence Advocate
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center crop-container">
          <img src={profile} alt='Pradeep Renukaiah' />
      </div>
        <div className="text--center padding-horiz--md profile--title">
            <Heading as="h2">{title}</Heading>
            <Heading as="h3">{description}</Heading>
            <div className="social-icons">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} size="2xl"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

function Profile() {
    return (
        <div className={clsx('col col--7')}>
            <div className="text--justify profile-details">
                <h2>About me</h2>
                <span>
                    <p>
                        I'm Pradeep, an innovative Technology Leader with over 20 years of expertise in eCommerce, MarTech, product discovery, search, and personalization,
                        driving impactful, AI-powered solutions. Proficient in leveraging advanced artificial intelligence concepts including
                        Retrieval-Augmented Generation (RAG), Azure OpenAI, and machine learning models, to enhance customer experience and
                        operational efficiency. Known for designing scalable, data-driven architectures, fostering high- performing teams,
                        and delivering next-generation systems that transform business outcomes.
                    </p>
                    <p>
                        My expertise spans Distributed Systems, Cloud Computing (AWS, GCP, Azure), Digital Commerce Platforms, MarTech, Enterprise Architecture, DevOps, and Platform Engineering. I’ve successfully
                        led transformative initiatives, such as modernizing technology stacks, optimizing application portfolios, and
                        building resilient, cloud-native solutions. Whether it’s creating enterprise strategies, enhancing developer productivity,
                        or enabling digital transformation, I’m passionate about delivering value at scale.
                    </p>
                    <p>
                        As a platform engineering leader, I’ve driven efficiency through automation, streamlined CI/CD processes, and implemented
                        tools that empower teams to innovate faster. At the same time, my deep experience in enterprise architecture ensures
                        solutions are designed for scalability, security, and long-term success.
                    </p>
                    <p>
                        I thrive on solving complex challenges, fostering collaboration, and guiding organizations through the ever-evolving
                        technology landscape. Let’s connect to explore how we can build innovative, future-ready solutions together!
                    </p>
                </span>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
            <Profile />
        </div>
      </div>
    </section>
  );
}
