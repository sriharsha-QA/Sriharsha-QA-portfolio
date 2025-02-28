import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { DecoderText } from '~/components/decoder-text';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './qa-tracker.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="QA Tracker App"
          description="A self-developed React-based application designed to streamline QA processes, improve team efficiency, and enhance product quality. Built using modern technologies like React, Tailwind CSS, and OpenAI API, this app provides a centralized platform for managing projects, issues, QA checks, and API performance analysis."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Core Modules</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Dashboard:</strong> Provides a real-time overview of key
                    metrics like Total Projects, Open Issues, and Issue Trends. Clickable
                    links allow users to dive deeper into specific modules, while filters
                    enable customized insights.
                  </ListItem>
                  <ListItem>
                    <strong>Projects:</strong> Simplifies project management with create,
                    update, delete, and search functionality. Integrates with the API
                    Performance module to analyze App URLs and track performance over
                    time.
                  </ListItem>
                  <ListItem>
                    <strong>Issues:</strong> Streamlines issue tracking with AI-powered
                    ticket generation. The "Tickets" tab creates structured tickets (Bug,
                    Task, Story), while the "Documentation" tab generates project
                    documentation and release notes. Auto-priority tagging ensures
                    critical issues are addressed first.
                  </ListItem>
                  <ListItem>
                    <strong>QA Checks:</strong> Ensures comprehensive test coverage with
                    create, update, delete, and search functionality. Links QA checks to
                    specific projects and issues, and provides auto-suggestions for test
                    cases.
                  </ListItem>
                  <ListItem>
                    <strong>API Performance:</strong> Tracks and analyzes App URLs,
                    providing historical logs and performance trends. Automatically
                    creates issues for API failures and allows comparison of multiple App
                    URLs.
                  </ListItem>
                  <ListItem>
                    <strong>Reports:</strong> Generates customizable reports with date
                    filters and export options (PDF, Excel, JSON). Integrates with API
                    Performance to provide detailed performance insights.
                  </ListItem>
                  <ListItem>
                    <strong>User Management:</strong> Offers role-based access control
                    (QA, Developer, Manager, Admin) and tracks user activity for better
                    accountability.
                  </ListItem>
                  <ListItem>
                    <strong>Settings:</strong> Includes profile settings, security
                    settings, preferences, and notifications to keep users informed and
                    secure.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>AI-Powered Automation:</strong> Automates ticket generation,
                    documentation creation, and test case suggestions, saving time and
                    reducing manual effort.
                  </ListItem>
                  <ListItem>
                    <strong>Real-Time Analytics:</strong> Provides actionable insights
                    into project health, issue trends, and team performance.
                  </ListItem>
                  <ListItem>
                    <strong>Seamless Integration:</strong> Links projects, issues, and QA
                    checks for a unified workflow. Integrates with CI/CD pipelines for
                    automated testing and reporting.
                  </ListItem>
                  <ListItem>
                    <strong>User-Friendly Interface:</strong> Built with Tailwind CSS for
                    a clean, responsive, and intuitive design.
                  </ListItem>
                  <ListItem>
                    <strong>Scalable Deployment:</strong> Hosted on Vercel and Cloudflare
                    for fast, reliable, and scalable access.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Future Enhancements</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>AI-Powered Predictive Analytics:</strong> Predict potential
                    risks and bottlenecks based on historical data.
                  </ListItem>
                  <ListItem>
                    <strong>Mobile App Development:</strong> Enable on-the-go access to QA
                    processes and analytics.
                  </ListItem>
                  <ListItem>
                    <strong>Advanced Security:</strong> Implement 2FA and role-based
                    access control for enhanced security.
                  </ListItem>
                  <ListItem>
                    <strong>Customizable Dashboards:</strong> Allow users to personalize
                    their dashboard views.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Technical Stack</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Frontend</TableHeadCell>
                    <TableCell>React, Vite, Tailwind CSS</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>State Management</TableHeadCell>
                    <TableCell>React Context API</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Deployment</TableHeadCell>
                    <TableCell>Vercel, Cloudflare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI Integration</TableHeadCell>
                    <TableCell>OpenAI API</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Version Control</TableHeadCell>
                    <TableCell>Git, GitHub</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Impact & Availability</ProjectSectionHeading>
              <Text className={styles.description} size="l" as="p">
                <strong>Impact:</strong> QA Tracker has reduced regression testing time by
                30%, improved defect resolution time by 40%, and increased team
                productivity by 25%. It has become an indispensable tool for QA teams,
                enabling faster releases and higher-quality products.
              </Text>
              <Text className={styles.description} size="l" as="p">
                <strong>Explore the App:</strong> Check out the live app{' '}
                <Link href="https://astounding-malasada-aaad20.netlify.app/">here</Link>{' '}
                or explore the code on{' '}
                <Link href="https://github.com/sriharsha-QA/QA-Tracking-App">GitHub</Link>
                . Let’s connect to discuss how I can bring similar solutions to your team!
              </Text>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Conclusion</ProjectSectionHeading>
              <Text className={styles.description} size="l" as="p">
                QA Tracker App <strong>revolutionizes testing workflows,</strong> ensuring
                <strong>
                  faster debugging, automated validations, and seamless issue tracking.
                </strong>{' '}
                With AI-powered insights and real-time monitoring, it helps teams{' '}
                <strong>deliver high-quality software</strong> efficiently. 🚀
              </Text>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
