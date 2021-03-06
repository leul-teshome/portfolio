import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main>projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,image,title,tags,visit,description,source})=>{
        return <BlogCard key={id}> 
        <Img src={image}/>
        <TitleContent>
          <HeaderThree title>
            {title}
          </HeaderThree>
          <Hr/>
        </TitleContent>
        <CardInfo>
          {description}
        </CardInfo>
        <div>
          <TitleContent>
            stack
          </TitleContent>
          <TagList>
            {tags.map((tag, i)=>{
              return (
                <Tag key={i}>
                  {tag}
                </Tag>
              )
            })}
          </TagList>
        </div>
        </BlogCard>
      })}
    </GridContainer>
  </Section>
);

export default Projects;