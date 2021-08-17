import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { articles } from '../data/articles.js'
import { GrFormNextLink } from 'react-icons/gr'
import { motion } from 'framer-motion'
function Learn(props) {
  function Article({ name, description, link, img }) {
    return (
      <Card>
        <div className='frame'>
          <div className='image-container'>
            <Card.Img variant='top' src={img} />
          </div>
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={link}
            target='blank'
          >
            Learn more <GrFormNextLink />
          </motion.a>
        </Card.Body>
      </Card>
    )
  }
  return (
    <div className='app-container resources'>
      <h1>Resources</h1>
      <CardGroup>
        {articles.map((article) => (
          <Article
            name={article.name}
            description={article.description}
            link={article.link}
            img={article.img}
          />
        ))}
      </CardGroup>
    </div>
  )
}

export default Learn
