import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  ArticleWrapper,
  NewsSectionHeader,
  TitleWrapper,
  ContentWrapper,
} from './NewsSection.styles';
import Button from 'components/atoms/Button/Button';
import axios from 'axios';

export const query = `
{
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
}
`;

const { REACT_APP_DATOCMS_TOKEN } = process.env;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        `https://graphql.datocms.com/`,
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>University news feed</NewsSectionHeader>

      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image = null }) => (
          <ArticleWrapper key={id}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image && <img src={image.url} alt="article" />}
            </ContentWrapper>
            <Button isBig>Click me !</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};

export default NewsSection;
