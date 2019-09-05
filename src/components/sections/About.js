import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        collabora: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "collabora" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        linuxdevbr: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "linuxdev-br" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        tux: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "tux" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        mooks: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "gpsl-mooks" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      macaca: file(
        sourceInstanceName: { eq: "art" }
        name: { eq: "macaca" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h3>Open First at Collabora!</h3>
              <p>
              Linux Core Technologies Lead, Client Relationship Manager and
              Partner at <ExternalLink href="https://www.collabora.com/">Collabora
              </ExternalLink>, a well respected Open Source Software
              consultancy that helps top companies in the world to create
              the next generation of technology with Open Source Software inside.
              </p>
            </div>
            <Art>
              <ExternalLink href="https://www.collabora.com/">
                <Img fluid={data.collabora.childImageSharp.fluid} />
              </ExternalLink>
            </Art>
          </Grid>
          <br />
          <Grid inverse>
            <Art>
              <ExternalLink href="https://linuxdev-br.net">
                <Img fluid={data.linuxdevbr.childImageSharp.fluid} />
              </ExternalLink>
            </Art>
            <div>
            <h3>Co-founder of the linuxdev-br conference</h3>
              <p>
                 After many years traveling around the globe attending and
                 speaking at Open Source and Linux conferences I felt we did
                 not have a forum like those in Brazil, to talk about upstream
                 development of Linux technologies. So, in 2017, together with 
                 two of my best friends, Bruno Dilly and João Moreira,
                 we co-founded the <ExternalLink href="https://linuxdev-br.net">
                 Linux Developer Conference Brazil</ExternalLink>. linuxdev-br is
                 its short name. linuxdev-br is a conference 
                 born to be international. 
                 See our <ExternalLink href="https://linuxdev-br.net/mission">mission</ExternalLink>.
                
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
            <h3>Linux Community member</h3>
              <p>
              I spent a decade as developer and maintainer in the Linux Kernel community.
              First in the Bluetooth subsystem as developer and co-maintainer and
              later on to in the Graphics and Media subsystems, during that time
              the DRM/KMS Atomic Modeseting API happened. Among other things, that helped
              unifying display drivers for Android, ChromeOS and Linux
              generic stacks. Nowadays I work in the connection between the community and
	            the business world.
              </p>
            </div>
            <Art_sm>
              <ExternalLink href="https://www.kernel.org/">
                <Img fluid={data.tux.childImageSharp.fluid} />
              </ExternalLink>
            </Art_sm>
          </Grid>
          <Grid inverse>
            <Art>
                <Img fluid={data.mooks.childImageSharp.fluid} />
            </Art>
            <div>
            <h3>Open Source Advocate</h3>
              <p>
                During high-school, in 2004, I was also doing a IT basic course, writing my
                first few programs (in Pascal!). I remember a Linux introduction workshop
	    	once, given by a Free Software group
	         from <ExternalLink href="https://www.unicamp.br/">Unicamp</ExternalLink>,
                 the University of Campinas in Brazil.
                That group was called GPSL (Grupo Pró Software Livre in Portuguese).
                It was my first exposure ever to Free Software and its filosofy. However,
                it still took me more than a year until I managed to install Linux for the 
                first time. There was no way back, it hooked me!
                2 years later I was a Computer Science, B.S. freshemen at the same university.
                The guys who taught me about GNU/Linux back then at
                 high-school, we became friends, and quickly I was a quite active member of GPSL.
                 My <ExternalLink href="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=96a331b1d6426726c37242ddbe939ee14b255790">
                first patch</ExternalLink> to the kernel was during that time and the rest... is history!
                The cute flying cow you see here is Mooks, GPSL's mascot. :)
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
            <h3>Learning Geek</h3>
              <p>
              I have always been an obsessed learner when it comes to my passions.
             Linux is a big one. Lately I developed a passion about how to be a better Human
             everyday, learning to listen, connect and collaborate better everyday.
             To progress on that journey, I have been practicing and consuming a lot
             of content around Communications, Self-development, Communities and Business.
             I am also a Movement practioner 
              and student of <ExternalLink href="https://instagram.com/portal.ido/">Ido Portal</ExternalLink>.
              </p>
            </div>
            <Art_sm>
                <Img
                  fluid={data.macaca.childImageSharp.fluid}
                  style={{ borderRadius: '50%' }}
                />
            </Art_sm>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 300px;
  width: 100%;
`;

const Art_sm = styled.figure`
  margin: 0;
  max-width: 250px;
  width: 100%;
`;

export default About;
